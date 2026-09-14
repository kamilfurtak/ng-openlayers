import { Component, Input, SimpleChange } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import View from 'ol/View.js';
import { MapComponent } from './map.component';
import { ViewComponent } from './view.component';
import { CoordinateComponent } from './coordinate.component';

@Component({
  selector: 'aol-test-host',
  standalone: true,
  imports: [MapComponent, ViewComponent, CoordinateComponent],
  template: `
    <aol-map width="300px" height="200px">
      <aol-view [zoom]="5" [projection]="projection">
        @if (showCoordinate) {
          <aol-coordinate [x]="19" [y]="50" srid="EPSG:4326" />
        }
      </aol-view>
    </aol-map>
  `,
})
class TestHostComponent {
  @Input() projection = 'EPSG:3857';
  @Input() showCoordinate = true;
}

describe('Map and view ownership', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let map: MapComponent;
  let view: ViewComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [TestHostComponent] });
    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
    map = fixture.debugElement.query(By.directive(MapComponent)).componentInstance;
    view = fixture.debugElement.query(By.directive(ViewComponent)).componentInstance;
  });

  it('detaches and disposes the map when the Angular tree is destroyed', () => {
    const instance = map.instance;
    const dispose = spyOn(instance, 'dispose').and.callThrough();
    const emit = spyOn(map.moveEnd, 'emit');
    fixture.destroy();
    expect(dispose).toHaveBeenCalledTimes(1);
    expect(instance.getTargetElement()).toBeNull();
    instance.dispatchEvent('moveend');
    expect(emit).not.toHaveBeenCalled();
  });

  it('does not disturb a second independent map on destroy', () => {
    const sibling = TestBed.createComponent(TestHostComponent);
    sibling.detectChanges();
    const other: MapComponent = sibling.debugElement.query(By.directive(MapComponent)).componentInstance;
    fixture.destroy();
    expect(other.instance.getTarget()).toBeTruthy();
    other.instance.getView().setZoom(8);
    expect(other.instance.getView().getZoom()).toBeCloseTo(8);
    sibling.destroy();
  });

  it('keeps coordinates synchronized with the new projection', () => {
    fixture.componentRef.setInput('projection', 'EPSG:4326');
    fixture.detectChanges();
    expect(map.instance.getView()).toBe(view.instance);
    expect(view.instance.getProjection().getCode()).toBe('EPSG:4326');
    expect(view.instance.getCenter()).toEqual([19, 50]);
  });

  for (const [event, output] of [
    ['change', 'olChange'],
    ['change:center', 'changeCenter'],
    ['change:resolution', 'changeResolution'],
    ['change:rotation', 'changeRotation'],
    ['error', 'olError'],
    ['propertychange', 'propertyChange'],
  ] as const) {
    it(`rebinds ${event} exactly once after repeated projection changes`, () => {
      const oldView = view.instance;
      for (const projection of ['EPSG:4326', 'EPSG:3857', 'EPSG:4326']) {
        fixture.componentRef.setInput('projection', projection);
        fixture.detectChanges();
      }
      const emit = spyOn(view[output], 'emit');
      view.instance.dispatchEvent(event);
      expect(emit).toHaveBeenCalledTimes(1);
      emit.calls.reset();
      oldView.dispatchEvent(event);
      expect(emit).not.toHaveBeenCalled();
      fixture.destroy();
      view.instance.dispatchEvent(event);
      expect(emit).not.toHaveBeenCalled();
    });
  }

  it('applies projection, center and zoom together irrespective of change order', () => {
    view.projection = 'EPSG:4326';
    view.center = [10, 20];
    view.zoom = 7;
    view.ngOnChanges({
      zoom: new SimpleChange(5, 7, false),
      center: new SimpleChange(undefined, [10, 20], false),
      projection: new SimpleChange('EPSG:3857', 'EPSG:4326', false),
    });
    expect(view.instance.getCenter()).toEqual([10, 20]);
    expect(view.instance.getZoom()).toBeCloseTo(7);
  });

  it('does not keep a removed coordinate subscribed to map view changes', () => {
    fixture.componentRef.setInput('showCoordinate', false);
    fixture.detectChanges();
    const setCenter = spyOn(view.instance, 'setCenter').and.callThrough();
    map.instance.setView(new View({ center: [0, 0], zoom: 2 }));
    expect(setCenter).not.toHaveBeenCalled();
  });
});
