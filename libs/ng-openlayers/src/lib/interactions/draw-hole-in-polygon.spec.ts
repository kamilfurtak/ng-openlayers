import Feature from 'ol/Feature.js';
import Map from 'ol/Map.js';
import MapBrowserEvent from 'ol/MapBrowserEvent.js';
import View from 'ol/View.js';
import Polygon from 'ol/geom/Polygon.js';
import Draw, { DrawEvent } from 'ol/interaction/Draw.js';
import Group from 'ol/layer/Group.js';
import VectorLayer from 'ol/layer/Vector.js';
import VectorSource from 'ol/source/Vector.js';
import { MapComponent } from '../map.component';
import { DrawInteractionComponent } from './draw.component';
import { DrawHoleInPolygonInteractionComponent, DrawHoleInPolygonInteractionErrorType } from './draw-hole-in-polygon';

const exterior = [
  [0, 0],
  [20, 0],
  [20, 20],
  [0, 20],
  [0, 0],
];
const existingHole = [
  [12, 12],
  [16, 12],
  [16, 16],
  [12, 16],
  [12, 12],
];
const newHole = [
  [2, 2],
  [5, 2],
  [5, 5],
  [2, 2],
];

describe('Drawing and removing polygon holes', () => {
  let map: Map;
  let component: DrawHoleInPolygonInteractionComponent;
  let feature: Feature<Polygon>;
  let source: VectorSource<Feature<Polygon>>;
  let draw: Draw;

  beforeEach(() => {
    map = new Map({ view: new View({ center: [0, 0], zoom: 2 }), controls: [], interactions: [] });
    feature = new Feature(new Polygon([exterior, existingHole]));
    source = new VectorSource({ features: [feature] });
    map.addLayer(new VectorLayer({ source }));
    component = new DrawHoleInPolygonInteractionComponent({ instance: map } as MapComponent);
    draw = new Draw({ type: 'Polygon' });
    component.drawInteractionComponent = { instance: draw } as DrawInteractionComponent;
    spyOn(map, 'getPixelFromCoordinate').and.returnValue([20, 20]);
    spyOn(map, 'forEachFeatureAtPixel').and.returnValue(feature);
  });

  afterEach(() => {
    component.ngOnDestroy();
    draw.dispose();
    source.dispose();
    map.dispose();
  });

  function sketch(ring = newHole): Feature<Polygon> {
    const current = new Feature(new Polygon([ring]));
    component.onDrawStart(new DrawEvent('drawstart', current));
    return current;
  }

  function click(coordinate: number[], modifier = false): MapBrowserEvent {
    const event = new MapBrowserEvent(
      'click',
      map,
      new PointerEvent('click', { ctrlKey: modifier, metaKey: modifier })
    );
    event.coordinate = coordinate;
    event.pixel = [20, 20];
    return event;
  }

  it('previews a new ring and commits it without replacing existing holes', () => {
    const complete = jasmine.createSpy('complete');
    component.drawEnd.subscribe(complete);
    const current = sketch();
    current.getGeometry().setCoordinates([newHole]);
    expect(feature.getGeometry().getCoordinates()).toEqual([exterior, existingHole, newHole]);
    component.onDrawEnd();
    expect(complete).toHaveBeenCalledTimes(1);
    const emitted = complete.calls.mostRecent().args[0] as Feature<Polygon>;
    expect(emitted.getGeometry().getCoordinates()).toEqual(feature.getGeometry().getCoordinates());
    expect(emitted.getGeometry()).not.toBe(feature.getGeometry());
    const committed = feature.getGeometry();
    current.getGeometry().setCoordinates([
      [
        [3, 3],
        [4, 3],
        [4, 4],
        [3, 3],
      ],
    ]);
    expect(feature.getGeometry()).toBe(committed);
    expect(map.hasListener('click')).toBeFalse();
  });

  it('restores the original polygon when a preview is aborted', () => {
    const original = feature.getGeometry();
    const current = sketch();
    current.getGeometry().setCoordinates([newHole]);
    component.onDrawAbort(new DrawEvent('drawabort', current));
    expect(feature.getGeometry()).toBe(original);
    current.getGeometry().setCoordinates([newHole]);
    expect(feature.getGeometry()).toBe(original);
    expect(map.hasListener('click')).toBeFalse();
  });

  it('ignores an old sketch abort after another sketch has started', () => {
    const previous = sketch();
    previous.getGeometry().setCoordinates([newHole]);
    const current = sketch();
    current.getGeometry().setCoordinates([newHole]);
    const preview = feature.getGeometry();
    component.onDrawAbort(new DrawEvent('drawabort', previous));
    expect(feature.getGeometry()).toBe(preview);
    expect(map.hasListener('click')).toBeTrue();
  });

  it('does not remove a pre-existing ring when an invalid sketch is aborted before any preview', () => {
    const original = feature.getGeometry();
    const outside = [
      [30, 30],
      [31, 30],
      [31, 31],
      [30, 30],
    ];
    const current = sketch(outside);
    current.getGeometry().setCoordinates([outside]);
    component.onDrawAbort(new DrawEvent('drawabort', current));
    expect(feature.getGeometry()).toBe(original);
    expect(feature.getGeometry().getLinearRingCount()).toBe(2);
  });

  it('cancels an unfinished preview and removes the geometry listener when destroyed', () => {
    const original = feature.getGeometry();
    const current = sketch();
    current.getGeometry().setCoordinates([newHole]);
    component.ngOnDestroy();
    current.getGeometry().setCoordinates([newHole]);
    expect(feature.getGeometry()).toBe(original);
    expect(map.hasListener('click')).toBeFalse();
  });

  it('reports an absent polygon, aborts safely, and tolerates the resulting abort event', () => {
    (map.forEachFeatureAtPixel as jasmine.Spy).and.returnValue(undefined);
    const abort = spyOn(draw, 'abortDrawing');
    const error = jasmine.createSpy('error');
    component.drawError.subscribe(error);
    const current = sketch();
    expect(abort).toHaveBeenCalledTimes(1);
    expect(error.calls.mostRecent().args[0].type).toBe(DrawHoleInPolygonInteractionErrorType.MoPolygonFound);
    expect(() => component.onDrawAbort(new DrawEvent('drawabort', current))).not.toThrow();
    expect(feature.getGeometry().getLinearRingCount()).toBe(2);
  });

  it('rejects vertices outside the polygon and prevents the map click from continuing', () => {
    sketch();
    const remove = spyOn(draw, 'removeLastPoint');
    const error = jasmine.createSpy('error');
    component.drawError.subscribe(error);
    const event = click([30, 30]);
    spyOn(map, 'getCoordinateFromPixel').and.returnValue([30, 30]);
    const prevent = spyOn(event, 'preventDefault');
    const stop = spyOn(event, 'stopPropagation');
    expect(component.onMapClick(event)).toBeFalse();
    expect(remove).toHaveBeenCalledTimes(1);
    expect(prevent).toHaveBeenCalled();
    expect(stop).toHaveBeenCalled();
    expect(error.calls.mostRecent().args[0].type).toBe(DrawHoleInPolygonInteractionErrorType.DrawVertexOutsidePolygon);
  });

  it('removes exactly the hole containing the click and preserves the outer ring', () => {
    feature.setGeometry(new Polygon([exterior, existingHole, newHole]));
    const complete = jasmine.createSpy('complete');
    component.drawEnd.subscribe(complete);
    expect(component.checkAndRemoveHole(click([13, 13]), feature)).toBeTrue();
    expect(feature.getGeometry().getCoordinates()).toEqual([exterior, newHole]);
    expect(complete).toHaveBeenCalledOnceWith(feature);
  });

  it('does not remove a concave hole when the click is only inside its bounding box', () => {
    const concaveHole = [
      [2, 2],
      [8, 2],
      [8, 4],
      [4, 4],
      [4, 8],
      [2, 8],
      [2, 2],
    ];
    feature.setGeometry(new Polygon([exterior, concaveHole]));
    const original = feature.getGeometry();
    const error = jasmine.createSpy('error');
    component.drawError.subscribe(error);
    expect(component.checkAndRemoveHole(click([6, 6]), feature)).toBeFalse();
    expect(feature.getGeometry()).toBe(original);
    expect(error.calls.mostRecent().args[0].type).toBe(DrawHoleInPolygonInteractionErrorType.NoLinearRingFoundToRemove);
  });

  it('finds vector layers nested inside groups for modifier-click removal', () => {
    const layer = map.getLayers().item(0);
    map.removeLayer(layer);
    map.addLayer(new Group({ layers: [new Group({ layers: [layer] })] }));
    expect(component.drawCondition(click([13, 13], true))).toBeFalse();
    expect(feature.getGeometry().getCoordinates()).toEqual([exterior]);
  });

  it('handles a vector layer with no source and reports maps with no vector layers', () => {
    map.getLayers().clear();
    map.addLayer(new VectorLayer());
    expect(() => component.drawCondition(click([1, 1], true))).not.toThrow();
    map.getLayers().clear();
    const error = jasmine.createSpy('error');
    component.drawError.subscribe(error);
    expect(component.drawCondition(click([1, 1]))).toBeFalse();
    expect(error.calls.mostRecent().args[0].type).toBe(DrawHoleInPolygonInteractionErrorType.NoVectorLayerFound);
  });

  it('never removes the exterior ring when asked to remove the last ring', () => {
    component.foundFeatureToApplyEnclave = feature;
    component.removeLastLinearRing();
    component.removeLastLinearRing();
    expect(feature.getGeometry().getCoordinates()).toEqual([exterior]);
  });
});
