import { UntypedFormBuilder } from '@angular/forms';
import Feature from 'ol/Feature';
import View from 'ol/View';
import { LineString, Point, Polygon } from 'ol/geom';
import { fromLonLat } from 'ol/proj';
import { SelectEvent } from 'ol/interaction/Select';
import {
  DrawHoleInPolygonInteractionError,
  DrawHoleInPolygonInteractionErrorType,
  LayerVectorComponent,
  MeasureInteractionComponent,
  MeasureType,
  SourceUTFGridComponent,
  ViewComponent,
} from 'ng-openlayers';
import { BasicComponent } from './basic/basic.component';
import { CursorPositionComponent } from './cursor-position/cursor-position.component';
import { DrawHoleInPolygonComponent } from './draw-hole-in-polygon/draw-hole-in-polygon.component';
import { DrawPolygonComponent } from './draw-polygon/draw-polygon.component';
import { MapPositionComponent } from './map-position/map-position.component';
import { MeasureComponent } from './measure/measure.component';
import { ModifyPolygonComponent } from './modify-polygon/modify-polygon.component';
import { SelectInteractionComponent } from './select-interaction/select-interaction.component';
import { UTFGridComponent } from './utfgrid/utfgrid.component';
import { ViewProjectionUpdateComponent } from './view-projection-update/view-projection-update.component';

describe('Map control state', () => {
  beforeEach(() => spyOn(console, 'log'));

  it('keeps zoom and opacity inside their allowed range after repeated control clicks', () => {
    const component = new BasicComponent();
    for (let i = 0; i < 30; i++) {
      component.increaseZoom();
      component.increaseOpacity();
    }
    expect(component.zoom).toBe(18);
    expect(component.opacity).toBe(1);
    for (let i = 0; i < 30; i++) {
      component.decreaseZoom();
      component.decreaseOpacity();
    }
    expect(component.zoom).toBe(1);
    expect(component.opacity).toBe(0);
  });

  it('clamps coordinate controls to geographic bounds', () => {
    const component = new BasicComponent();
    component.lat = 90;
    component.lon = 180;
    component.increaseLat();
    component.increaseLon();
    expect([component.lon, component.lat]).toEqual([180, 90]);
    component.lat = -90;
    component.lon = -180;
    component.decreaseLat();
    component.decreaseLon();
    expect([component.lon, component.lat]).toEqual([-180, -90]);
  });

  it('converts cursor map coordinates into longitude and latitude', () => {
    const component = new CursorPositionComponent();
    component.dispatchCursor({ coordinate: fromLonLat([-73.5, 40.75]) });
    expect(component.lon).toBeCloseTo(-73.5, 6);
    expect(component.lat).toBeCloseTo(40.75, 6);
  });

  it('formats zero without a minus sign and wraps longitude in both directions', () => {
    const component = new CursorPositionComponent();
    expect(component.lonToString(0)).toBe('0.000000');
    expect(component.latToString(-0)).toBe('0.000000');
    expect(component.lonToString(-190)).toBe('170.000000');
    expect(component.lonToString(190)).toBe('-170.000000');
    expect(component.lonToString(-550)).toBe('170.000000');
  });

  it('reads actual view center and zoom when map movement completes', () => {
    const component = new MapPositionComponent(new UntypedFormBuilder());
    component.ngOnInit();
    component.view = { instance: new View({ center: fromLonLat([-2, 48]), zoom: 8 }) } as ViewComponent;
    component.startMoving();
    expect(component.moving).toBeTrue();
    component.displayCoordinates();
    expect(component.moving).toBeFalse();
    expect(component.currentLon).toBeCloseTo(-2, 6);
    expect(component.currentLat).toBeCloseTo(48, 6);
    expect(component.currentZoom).toBeCloseTo(8, 6);
  });

  it('changes the view projection only from a select element', () => {
    const component = new ViewProjectionUpdateComponent();
    component.projectionChange(new Event('change'));
    expect(component.viewProjection).toBe('EPSG:3857');
    const select = document.createElement('select');
    select.add(new Option('Geographic', 'EPSG:4326'));
    select.addEventListener('change', (event) => component.projectionChange(event));
    select.dispatchEvent(new Event('change'));
    expect(component.viewProjection).toBe('EPSG:4326');
    component.onResolutionChange();
    component.onResolutionChange();
    expect(component.resolutionEvents()).toBe(2);
  });
});

describe('Editing and selection results', () => {
  const ring = [
    [1, 44],
    [3, 44],
    [3, 46],
    [1, 46],
    [1, 44],
  ];
  const hole = [
    [1.5, 44.5],
    [2, 44.5],
    [2, 45],
    [1.5, 45],
    [1.5, 44.5],
  ];

  function projectedFeature(): Feature<Polygon> {
    return new Feature(new Polygon([ring, hole]).transform('EPSG:4326', 'EPSG:3857'));
  }

  it('exports a drawn rectangle as geographic GeoJSON without mutating the drawing geometry', () => {
    const component = new DrawPolygonComponent();
    const feature = projectedFeature();
    const original = feature.getGeometry().getCoordinates();
    component.drawMode();
    expect(component.isDrawing).toBeTrue();
    component.endDraw(feature);
    expect(component.feature.geometry.type).toBe('Polygon');
    expect(component.feature.geometry.coordinates[0][0][0]).toBeCloseTo(1, 6);
    expect(component.feature.geometry.coordinates[0][0][1]).toBeCloseTo(44, 6);
    expect(feature.getGeometry().getCoordinates()).toEqual(original);
  });

  it('preserves polygon holes and properties while exporting modified map geometry', () => {
    const component = new ModifyPolygonComponent();
    const feature = projectedFeature();
    feature.set('name', 'Edited polygon');
    component.modifyEnd(feature);
    expect(component.feature.geometry.coordinates.length).toBe(2);
    expect(component.feature.geometry.coordinates[1][0][0]).toBeCloseTo(1.5, 6);
    expect(component.feature.properties['name']).toBe('Edited polygon');
  });

  it('ignores empty and non-polygon modification selections', () => {
    const component = new ModifyPolygonComponent();
    const previous = component.feature;
    component.modifyEnd(undefined);
    component.modifyEnd(new Feature(new Point([0, 0])));
    expect(component.feature).toBe(previous);
  });

  it('converts completed hole drawings from the view projection before rendering them again', () => {
    const component = new DrawHoleInPolygonComponent();
    const feature = projectedFeature();
    const original = feature.getGeometry().getCoordinates();
    component.endHoleDraw(feature);
    expect(component.feature.geometry.coordinates.length).toBe(2);
    expect(component.feature.geometry.coordinates[0][0][0]).toBeCloseTo(1, 6);
    expect(component.feature.geometry.coordinates[1][0][1]).toBeCloseTo(44.5, 6);
    expect(feature.getGeometry().getCoordinates()).toEqual(original);
  });

  it('toggles hole drawing and presents actionable errors', () => {
    const component = new DrawHoleInPolygonComponent();
    component.drawHole();
    expect(component.isHoleDrawing).toBeTrue();
    component.drawHole();
    expect(component.isHoleDrawing).toBeFalse();
    component.onDrawError({
      type: DrawHoleInPolygonInteractionErrorType.DrawVertexOutsidePolygon,
    } as DrawHoleInPolygonInteractionError);
    expect(component.warning()).toContain('outside the polygon');
    component.onDrawError({
      type: DrawHoleInPolygonInteractionErrorType.MoPolygonFound,
    } as DrawHoleInPolygonInteractionError);
    expect(component.warning()).toContain('No polygon');
    component.onDrawError({
      type: DrawHoleInPolygonInteractionErrorType.NoLinearRingFoundToRemove,
    } as DrawHoleInPolygonInteractionError);
    expect(component.warning()).toContain('No linear ring');
  });

  it('tracks selected feature IDs across additions, repeated events and deselections', () => {
    const component = new SelectInteractionComponent();
    const first = new Feature(new Point([0, 0]));
    first.setId('marker-1');
    const second = new Feature(new Point([1, 1]));
    second.setId(0);
    const selection = (selected: Feature[], deselected: Feature[] = []) => ({ selected, deselected }) as SelectEvent;
    component.select(selection([first, second]));
    component.select(selection([first]));
    expect(component.selectedIds()).toEqual(['marker-1', 0]);
    component.select(selection([], [first]));
    expect(component.selectionLabel()).toBe('0');
    component.select(selection([], [second]));
    expect(component.selectionLabel()).toBe('None');
  });

  it('limits selection to the marker layer', () => {
    const component = new SelectInteractionComponent();
    const layer = {} as LayerVectorComponent['instance'];
    component.markersLayer = { instance: layer } as LayerVectorComponent;
    expect(component.isMarkerLayer(layer)).toBeTrue();
    expect(component.isMarkerLayer({} as LayerVectorComponent['instance'])).toBeFalse();
  });

  it('shows a completed measurement and clears both its interaction and output', () => {
    const component = new MeasureComponent();
    const clearMeasurements = jasmine.createSpy('clearMeasurements');
    component.measureInteraction = { clearMeasurements } as unknown as MeasureInteractionComponent;
    component.onMeasureComplete({
      feature: new Feature(
        new LineString([
          [0, 0],
          [100, 0],
        ])
      ),
      measure: 100,
      formattedMeasure: '100 m',
      type: MeasureType.LineString,
      unit: 'metric',
    });
    expect(component.lastMeasurement).toBe('100 m');
    component.clearMeasurements();
    expect(clearMeasurements).toHaveBeenCalledOnceWith();
    expect(component.lastMeasurement).toBe('-');
    component.measureInteraction = undefined;
    expect(() => component.clearMeasurements()).not.toThrow();
  });
});

describe('UTFGrid hover information', () => {
  let component: UTFGridComponent;
  let callbacks: Array<(data: unknown) => void>;

  beforeEach(() => {
    callbacks = [];
    component = new UTFGridComponent();
    component.UTFGrid = {
      instance: {
        forDataAtCoordinateAndResolution: (
          _coordinate: number[],
          _resolution: number,
          callback: (data: unknown) => void
        ) => callbacks.push(callback),
      },
    } as unknown as SourceUTFGridComponent;
    component.view = { instance: new View({ center: [0, 0], zoom: 2 }) } as ViewComponent;
  });

  it('shows valid data at the requested map coordinate', () => {
    const query = spyOn(component.UTFGrid.instance, 'forDataAtCoordinateAndResolution').and.callThrough();
    component.displayInfo([10, 20]);
    expect(query).toHaveBeenCalledWith([10, 20], component.view.instance.getResolution(), jasmine.any(Function), true);
    callbacks[0]({ label: 'Sample region' });
    expect(component.info()).toEqual({ label: 'Sample region' });
    expect(component.coords()).toEqual([10, 20]);
  });

  it('clears a previous label when hovering empty or malformed data', () => {
    for (const data of [null, undefined, 'label', { label: 42 }]) {
      component.info.set({ label: 'Previous region' });
      component.displayInfo([30, 40]);
      callbacks[callbacks.length - 1](data);
      expect(component.info()).toBeNull();
    }
  });

  it('ignores late responses for a coordinate the pointer has already left', () => {
    component.displayInfo([10, 20]);
    component.displayInfo([30, 40]);
    callbacks[1]({ label: 'Current region' });
    callbacks[0]({ label: 'Old region' });
    expect(component.info()).toEqual({ label: 'Current region' });
    expect(component.coords()).toEqual([30, 40]);
  });
});
