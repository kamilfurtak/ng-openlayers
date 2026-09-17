import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import Collection from 'ol/Collection.js';
import Feature from 'ol/Feature.js';
import Map from 'ol/Map.js';
import MapBrowserEvent from 'ol/MapBrowserEvent.js';
import View from 'ol/View.js';
import Point from 'ol/geom/Point.js';
import Interaction from 'ol/interaction/Interaction.js';
import VectorSource from 'ol/source/Vector.js';
import { MapComponent } from '../map.component';
import { DefaultInteractionComponent } from './default.component';
import { DoubleClickZoomInteractionComponent } from './doubleclickzoom.component';
import { DragAndDropInteractionComponent } from './draganddrop.component';
import { DragBoxInteractionComponent } from './dragbox.component';
import { DragPanInteractionComponent } from './dragpan.component';
import { DragRotateInteractionComponent } from './dragrotate.component';
import { DragRotateAndZoomInteractionComponent } from './dragrotateandzoom.component';
import { DragZoomInteractionComponent } from './dragzoom.component';
import { KeyboardPanInteractionComponent } from './keyboardpan.component';
import { KeyboardZoomInteractionComponent } from './keyboardzoom.component';
import { MouseWheelZoomInteractionComponent } from './mousewheelzoom.component';
import { PinchZoomInteractionComponent } from './pinchzoom.component';
import { ModifyInteractionComponent } from './modify.component';
import { SelectInteractionComponent } from './select.component';
import { SnapInteractionComponent } from './snap.component';
import { TranslateInteractionComponent } from './translate.component';
import { DrawInteractionComponent } from './draw.component';

@Component({
  imports: [MapComponent, KeyboardPanInteractionComponent, KeyboardZoomInteractionComponent],
  template: `<aol-map
    ><aol-interaction-keyboardpan [duration]="0" /> <aol-interaction-keyboardzoom [duration]="0" [delta]="2"
  /></aol-map>`,
})
class KeyboardHost {}

describe('Interaction ownership and keyboard behavior', () => {
  let map: Map;
  let host: MapComponent;

  beforeEach(() => {
    map = new Map({ view: new View({ center: [0, 0], zoom: 2 }), controls: [], interactions: [] });
    host = { instance: map } as MapComponent;
  });

  afterEach(() => map.dispose());

  for (const ComponentType of [
    DoubleClickZoomInteractionComponent,
    DragAndDropInteractionComponent,
    DragBoxInteractionComponent,
    DragPanInteractionComponent,
    DragRotateInteractionComponent,
    DragRotateAndZoomInteractionComponent,
    DragZoomInteractionComponent,
    KeyboardPanInteractionComponent,
    KeyboardZoomInteractionComponent,
    MouseWheelZoomInteractionComponent,
    PinchZoomInteractionComponent,
  ]) {
    it(`removes only its own ${ComponentType.name} and releases its OpenLayers event listeners`, () => {
      const unrelated = new Interaction();
      map.addInteraction(unrelated);
      const component = new ComponentType(host);
      component.ngOnInit();
      const interaction = component.instance;
      const callback = jasmine.createSpy('callback');
      interaction.on('change', callback);
      expect(map.getInteractions().getArray()).toEqual([unrelated, interaction]);
      component.ngOnDestroy();
      expect(map.getInteractions().getArray()).toEqual([unrelated]);
      expect(interaction.getMap()).toBeNull();
      interaction.changed();
      expect(callback).not.toHaveBeenCalled();
      unrelated.dispose();
    });
  }

  it('honors disabled default interactions and destroys the whole owned collection', () => {
    const component = new DefaultInteractionComponent(host);
    component.altShiftDragRotate = false;
    component.doubleClickZoom = false;
    component.keyboard = false;
    component.mouseWheelZoom = false;
    component.shiftDragZoom = false;
    component.pinchRotate = false;
    component.pinchZoom = false;
    component.ngOnInit();
    expect(component.instance.getLength()).toBe(1);
    const pan = component.instance.item(0);
    const callback = jasmine.createSpy('callback');
    pan.on('change', callback);
    component.ngOnDestroy();
    expect(map.getInteractions().getLength()).toBe(0);
    pan.changed();
    expect(callback).not.toHaveBeenCalled();
  });

  it('allows pan and zoom together as standalone components with distinct keyboard behavior', () => {
    const fixture = TestBed.createComponent(KeyboardHost);
    fixture.detectChanges();
    const mapComponent = fixture.debugElement.query(By.directive(MapComponent)).componentInstance as MapComponent;
    const pan = fixture.debugElement.query(By.directive(KeyboardPanInteractionComponent))
      .componentInstance as KeyboardPanInteractionComponent;
    const zoom = fixture.debugElement.query(By.directive(KeyboardZoomInteractionComponent))
      .componentInstance as KeyboardZoomInteractionComponent;
    mapComponent.instance.setView(new View({ center: [0, 0], zoom: 3 }));
    const event = new KeyboardEvent('keydown', { key: '+', bubbles: true });
    Object.defineProperty(event, 'target', { value: document.body });
    const browserEvent = new MapBrowserEvent('keydown', mapComponent.instance, event);
    expect(zoom.instance.handleEvent(browserEvent)).toBeFalse();
    expect(mapComponent.instance.getView().getZoom()).toBe(5);
    const arrow = new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true });
    Object.defineProperty(arrow, 'target', { value: document.body });
    expect(pan.instance.handleEvent(new MapBrowserEvent('keydown', mapComponent.instance, arrow))).toBeFalse();
    expect(mapComponent.instance.getView().getCenter()[0]).toBeGreaterThan(0);
    fixture.destroy();
  });

  it('preserves externally supplied source/features while releasing modify, select, snap and translate', () => {
    const feature = new Feature(new Point([0, 0]));
    const features = new Collection([feature]);
    const source = new VectorSource({ features });
    const components = [
      new ModifyInteractionComponent(host),
      new SelectInteractionComponent(host),
      new SnapInteractionComponent(host),
      new TranslateInteractionComponent(host),
    ];
    for (const component of components) {
      component.features = features;
      component.ngOnInit();
    }
    for (const component of components) component.ngOnDestroy();
    feature.getGeometry().setCoordinates([10, 20]);
    expect(features.getArray()).toEqual([feature]);
    expect(source.getFeatures()).toEqual([feature]);
    expect(map.getInteractions().getLength()).toBe(0);
    source.dispose();
  });

  it('commits drawn features into the supplied source and releases output listeners after removal', () => {
    const source = new VectorSource();
    const component = new DrawInteractionComponent(host);
    component.type = 'LineString';
    component.source = source;
    component.ngOnInit();
    const start = jasmine.createSpy('start');
    const end = jasmine.createSpy('end');
    component.drawStart.subscribe(start);
    component.drawEnd.subscribe(end);
    component.instance.appendCoordinates([
      [0, 0],
      [10, 10],
      [20, 20],
    ]);
    component.handleKeydown();
    component.instance.finishDrawing();
    expect(start).toHaveBeenCalledTimes(1);
    expect(end).toHaveBeenCalledTimes(1);
    expect(source.getFeatures()).toEqual([end.calls.mostRecent().args[0].feature]);
    expect(source.getFeatures()[0].getGeometry()['getCoordinates']()).toEqual([
      [0, 0],
      [10, 10],
    ]);
    component.ngOnDestroy();
    component.instance.dispatchEvent('drawend');
    expect(end).toHaveBeenCalledTimes(1);
    expect(source.getFeatures().length).toBe(1);
    source.dispose();
  });
});
