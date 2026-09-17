import { SimpleChange } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import View from 'ol/View.js';
import Map from 'ol/Map.js';
import { fromLonLat } from 'ol/proj.js';
import { MapComponent } from './map.component';
import { ViewComponent } from './view.component';

describe('View input behavior', () => {
  let fixture: ComponentFixture<ViewComponent>;
  let map: Map;
  let component: ViewComponent;

  beforeEach(() => {
    map = new Map({ controls: [], interactions: [] });
    TestBed.configureTestingModule({
      imports: [ViewComponent],
      providers: [{ provide: MapComponent, useValue: { instance: map } }],
    });
    fixture = TestBed.createComponent(ViewComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('center', [0, 0]);
    fixture.componentRef.setInput('zoom', 5);
    fixture.detectChanges();
  });
  afterEach(() => {
    fixture.destroy();
    map.dispose();
  });

  it('updates resolution through the view constraints and preserves it on the next center change', () => {
    fixture.componentRef.setInput('resolution', 2000);
    fixture.detectChanges();
    component.instance.setCenter([10, 20]);
    expect(component.instance.getResolution()).toBeCloseTo(2000);
  });

  it('updates rotation and preserves it when another view property changes', () => {
    fixture.componentRef.setInput('rotation', 0.7);
    fixture.detectChanges();
    component.instance.setCenter([10, 20]);
    expect(component.instance.getRotation()).toBeCloseTo(0.7);
  });

  it('applies zoom bounds to subsequent user zoom changes', () => {
    fixture.componentRef.setInput('maxZoom', 8);
    fixture.componentRef.setInput('minZoom', 3);
    fixture.detectChanges();
    component.instance.setZoom(15);
    expect(component.instance.getZoom()).toBeCloseTo(8);
    component.instance.setZoom(1);
    expect(component.instance.getZoom()).toBeCloseTo(3);
  });

  it('updates constructor constraints without losing the user-controlled center or zoom', () => {
    component.instance.setCenter([100, 200]);
    component.instance.setZoom(7);
    fixture.componentRef.setInput('enableRotation', false);
    fixture.detectChanges();
    component.instance.setRotation(1);
    expect(component.instance.getRotation()).toBe(0);
    expect(component.instance.getCenter()).toEqual([100, 200]);
    expect(component.instance.getZoom()).toBeCloseTo(7);
  });

  it('transforms an existing center when the projection changes without a coordinate child', () => {
    component.instance.setCenter(fromLonLat([19, 50]));
    component.instance.setZoom(7);
    fixture.componentRef.setInput('projection', 'EPSG:4326');
    fixture.detectChanges();
    expect(component.instance.getCenter()[0]).toBeCloseTo(19);
    expect(component.instance.getCenter()[1]).toBeCloseTo(50);
    expect(component.instance.getZoom()).toBeCloseTo(7);
  });

  it('removes its owned view and stops animations on destroy', () => {
    const view = component.instance;
    const cancel = spyOn(view, 'cancelAnimations').and.callThrough();
    fixture.destroy();
    expect(cancel).toHaveBeenCalled();
    expect(map.getView()).not.toBe(view);
  });

  it('preserves an externally replaced view during teardown', () => {
    const external = new View({ center: [5, 6], zoom: 2 });
    map.setView(external);
    fixture.destroy();
    expect(map.getView()).toBe(external);
  });

  it('animates zoom only when enabled', () => {
    const animate = spyOn(component.instance, 'animate');
    component.zoomAnimation = true;
    component.ngOnChanges({ zoom: new SimpleChange(5, 6, false) });
    expect(animate).toHaveBeenCalledOnceWith({ zoom: 6 });
  });
});
