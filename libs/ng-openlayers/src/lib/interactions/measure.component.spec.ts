import { SimpleChange } from '@angular/core';
import Feature from 'ol/Feature.js';
import Map from 'ol/Map.js';
import MapBrowserEvent from 'ol/MapBrowserEvent.js';
import View from 'ol/View.js';
import Overlay from 'ol/Overlay.js';
import Interaction from 'ol/interaction/Interaction.js';
import LineString from 'ol/geom/LineString.js';
import Polygon from 'ol/geom/Polygon.js';
import { DrawEvent } from 'ol/interaction/Draw.js';
import VectorSource from 'ol/source/Vector.js';
import VectorLayer from 'ol/layer/Vector.js';
import { MapComponent } from '../map.component';
import { MeasureInteractionComponent, MeasureResult } from './measure.component';

describe('Measurement behavior and resource ownership', () => {
  let map: Map;
  let component: MeasureInteractionComponent;

  beforeEach(() => {
    map = new Map({ view: new View({ center: [0, 0], zoom: 2 }), controls: [], interactions: [] });
    component = new MeasureInteractionComponent({ instance: map } as MapComponent);
  });

  afterEach(() => {
    component.ngOnDestroy();
    map.dispose();
  });

  function completeLine(
    coordinates = [
      [0, 0],
      [1000, 0],
    ]
  ): MeasureResult {
    const complete = jasmine.createSpy('complete');
    component.measureComplete.subscribe(complete);
    component.instance.appendCoordinates(coordinates);
    component.instance.finishDrawing();
    expect(complete).toHaveBeenCalledTimes(1);
    return complete.calls.mostRecent().args[0];
  }

  it('persists completed lines, emits the same feature, and freezes a visible final label', () => {
    component.ngOnInit();
    const start = jasmine.createSpy('start');
    component.measureStart.subscribe(start);
    const result = completeLine();
    expect(result.type).toBe('LineString');
    expect(result.unit).toBe('metric');
    expect(result.measure).toBeCloseTo(998.88, 1);
    expect(result.formattedMeasure).toBe('1 km');
    expect(start).toHaveBeenCalledOnceWith(result.feature);
    expect((map.getLayers().item(0) as VectorLayer<VectorSource>).getSource().getFeatures()).toEqual([result.feature]);
    expect(map.getOverlays().getLength()).toBe(2);
    const frozen = map.getOverlays().item(0);
    expect(frozen.getElement().classList.contains('aol-measure-tooltip-static')).toBeTrue();
    expect(frozen.getElement().textContent).toBe(result.formattedMeasure);
    expect(frozen.getPosition()).toEqual([1000, 0]);
  });

  it('measures degrees using the map view projection instead of treating them as meters', () => {
    map.setView(new View({ projection: 'EPSG:4326', center: [0, 0], zoom: 2 }));
    component.ngOnInit();
    const result = completeLine([
      [0, 0],
      [1, 0],
    ]);
    expect(result.measure).toBeCloseTo(111195.08, 1);
    expect(result.formattedMeasure).toBe('111.2 km');
  });

  it('calculates polygon area in the view projection and formats metric square units', () => {
    map.setView(new View({ projection: 'EPSG:4326', center: [0, 0], zoom: 2 }));
    component.type = 'Polygon';
    component.ngOnInit();
    const complete = jasmine.createSpy('complete');
    component.measureComplete.subscribe(complete);
    const feature = new Feature(
      new Polygon([
        [
          [0, 0],
          [1, 0],
          [1, 1],
          [0, 1],
          [0, 0],
        ],
      ])
    );
    component.instance.dispatchEvent(new DrawEvent('drawend', feature));
    const result = complete.calls.mostRecent().args[0] as MeasureResult;
    expect(result.type).toBe('Polygon');
    expect(result.measure).toBeCloseTo(12363718145.18, 1);
    expect(result.formattedMeasure).toBe('12363.72 km<sup>2</sup>');
    expect(map.getOverlays().item(0).getElement().innerHTML).toBe(result.formattedMeasure);
  });

  for (const testCase of [
    { length: 10, expected: '32.77 ft' },
    { length: 2000, expected: '1.24 mi' },
  ]) {
    it(`formats a ${testCase.length} meter projected line as ${testCase.expected}`, () => {
      component.unit = 'imperial';
      component.ngOnInit();
      expect(
        completeLine([
          [0, 0],
          [testCase.length, 0],
        ]).formattedMeasure
      ).toBe(testCase.expected);
    });
  }

  it('formats small and large imperial areas', () => {
    component.unit = 'imperial';
    component.type = 'Polygon';
    component.ngOnInit();
    const complete = jasmine.createSpy('complete');
    component.measureComplete.subscribe(complete);
    for (const size of [10, 100]) {
      const feature = new Feature(
        new Polygon([
          [
            [0, 0],
            [size, 0],
            [size, size],
            [0, size],
            [0, 0],
          ],
        ])
      );
      component.instance.dispatchEvent(new DrawEvent('drawend', feature));
    }
    const results = complete.calls.allArgs().map(([result]) => result as MeasureResult);
    expect(results[0].formattedMeasure).toBe('1073.99 ft<sup>2</sup>');
    expect(results[1].formattedMeasure).toBe('2.47 acres');
  });

  it('clears an unfinished sketch so it cannot be committed or update the replacement tooltip', () => {
    component.ngOnInit();
    const start = jasmine.createSpy('start');
    const complete = jasmine.createSpy('complete');
    component.measureStart.subscribe(start);
    component.measureComplete.subscribe(complete);
    component.instance.appendCoordinates([
      [0, 0],
      [50, 0],
    ]);
    const sketch = start.calls.mostRecent().args[0] as Feature<LineString>;
    component.clearMeasurements();
    sketch.getGeometry().setCoordinates([
      [0, 0],
      [500, 0],
    ]);
    component.instance.finishDrawing();
    expect(complete).not.toHaveBeenCalled();
    expect(map.getOverlays().getLength()).toBe(1);
    expect(map.getOverlays().item(0).getElement().textContent).toBe('');
    expect(map.getOverlays().item(0).getPosition()).toBeUndefined();
  });

  it('removes completed measurements while preserving unrelated overlays and interactions', () => {
    const unrelatedOverlay = new Overlay({ element: document.createElement('div') });
    const unrelatedInteraction = new Interaction();
    map.addOverlay(unrelatedOverlay);
    map.addInteraction(unrelatedInteraction);
    component.ngOnInit();
    completeLine();
    component.clearMeasurements();
    expect((map.getLayers().item(0) as VectorLayer<VectorSource>).getSource().getFeatures()).toEqual([]);
    expect(map.getOverlays().getLength()).toBe(2);
    expect(map.getOverlays().getArray()).toContain(unrelatedOverlay);
    expect(map.getInteractions().getArray()).toEqual([unrelatedInteraction, component.instance]);
    component.ngOnDestroy();
    expect(map.getOverlays().getArray()).toEqual([unrelatedOverlay]);
    expect(map.getInteractions().getArray()).toEqual([unrelatedInteraction]);
    unrelatedOverlay.dispose();
    unrelatedInteraction.dispose();
  });

  it('resets an aborted sketch and immediately allows another measurement', () => {
    component.ngOnInit();
    component.instance.appendCoordinates([
      [0, 0],
      [10, 0],
    ]);
    component.instance.abortDrawing();
    expect(map.getOverlays().getLength()).toBe(1);
    expect(map.getOverlays().item(0).getElement().textContent).toBe('');
    expect(completeLine().measure).toBeGreaterThan(900);
  });

  it('recreates the draw tool for type changes, detaches old listeners, and preserves completed results', () => {
    component.ngOnInit();
    completeLine();
    const original = component.instance;
    const emit = spyOn(component.drawStart, 'emit');
    component.setMeasureType('Polygon');
    expect(map.getInteractions().getArray()).toEqual([component.instance]);
    expect(component.instance).not.toBe(original);
    expect(original.getMap()).toBeNull();
    original.dispatchEvent('drawstart');
    expect(emit).not.toHaveBeenCalled();
    expect(map.getOverlays().getLength()).toBe(2);
    const current = component.instance;
    component.setMeasureType('Polygon');
    expect(component.instance).toBe(current);
  });

  it('uses an external source without adding an internal layer or disposing caller-owned data', () => {
    const source = new VectorSource();
    const dispose = spyOn(source, 'dispose').and.callThrough();
    component.source = source;
    component.ngOnInit();
    const result = completeLine();
    expect(map.getLayers().getLength()).toBe(0);
    expect(source.getFeatures()).toEqual([result.feature]);
    component.ngOnDestroy();
    expect(dispose).not.toHaveBeenCalled();
    expect(source.getFeatures()).toEqual([result.feature]);
    source.dispose();
  });

  it('switches internal and external sources without leaving an obsolete layer or draw tool', () => {
    component.ngOnInit();
    const internalLayer = map.getLayers().item(0);
    const dispose = spyOn(internalLayer, 'dispose').and.callThrough();
    const source = new VectorSource();
    component.source = source;
    component.ngOnChanges({ source: new SimpleChange(undefined, source, false) });
    expect(dispose).toHaveBeenCalledTimes(1);
    expect(map.getLayers().getLength()).toBe(0);
    expect(source.getFeatures()).toEqual([]);
    completeLine();
    expect(source.getFeatures().length).toBe(1);
    component.source = undefined;
    component.ngOnChanges({ source: new SimpleChange(source, undefined, false) });
    expect(map.getLayers().getLength()).toBe(1);
    expect(map.getInteractions().getLength()).toBe(1);
    source.dispose();
  });

  it('updates the live label when units change and cleans up help pointer listeners', () => {
    component.showHelpTooltip = true;
    component.ngOnInit();
    component.instance.appendCoordinates([
      [0, 0],
      [10, 0],
    ]);
    component.unit = 'imperial';
    component.ngOnChanges({ unit: new SimpleChange('metric', 'imperial', false) });
    expect(map.getOverlays().item(0).getElement().textContent).toBe('32.77 ft');
    const event = new MapBrowserEvent('pointermove', map, new PointerEvent('pointermove'));
    event.coordinate = [1, 2];
    map.dispatchEvent(event);
    const help = map.getOverlays().item(1);
    expect(help.getElement().textContent).toContain('continue drawing the line');
    expect(help.getPosition()).toEqual([1, 2]);
    map.getViewport().dispatchEvent(new MouseEvent('mouseout'));
    expect(help.getElement().classList.contains('aol-measure-hidden')).toBeTrue();
    component.showHelpTooltip = false;
    component.ngOnChanges({ showHelpTooltip: new SimpleChange(true, false, false) });
    expect(map.hasListener('pointermove')).toBeFalse();
    expect(map.getOverlays().getLength()).toBe(1);
  });

  it('disposes owned layers, sources, overlays, interactions and unfinished geometry listeners', () => {
    component.ngOnInit();
    const source = (map.getLayers().item(0) as VectorLayer<VectorSource>).getSource() as VectorSource;
    const dispose = spyOn(source, 'dispose').and.callThrough();
    const start = jasmine.createSpy('start');
    component.measureStart.subscribe(start);
    component.instance.appendCoordinates([
      [0, 0],
      [50, 0],
    ]);
    const sketch = start.calls.mostRecent().args[0] as Feature<LineString>;
    component.ngOnDestroy();
    sketch.getGeometry().setCoordinates([
      [0, 0],
      [500, 0],
    ]);
    expect(dispose).toHaveBeenCalled();
    expect(map.getLayers().getLength()).toBe(0);
    expect(map.getOverlays().getLength()).toBe(0);
    expect(map.getInteractions().getLength()).toBe(0);
  });
});
