import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import Map from 'ol/Map.js';
import { clearUserProjection, fromLonLat, useGeographic } from 'ol/proj.js';
import { CoordinateComponent } from './coordinate.component';
import { MapComponent } from './map.component';
import { ViewComponent } from './view.component';

@Component({
  selector: 'aol-view-coordinate-regression',
  imports: [MapComponent, ViewComponent, CoordinateComponent],
  template: `
    <aol-map width="300px" height="200px">
      <aol-view [zoom]="5" [projection]="projection" [enableRotation]="enableRotation">
        <aol-coordinate [x]="longitude" [y]="latitude" srid="EPSG:4326" />
      </aol-view>
    </aol-map>
  `,
})
class CoordinateViewHostComponent {
  @Input() projection = 'EPSG:3857';
  @Input() enableRotation = true;
  @Input() longitude = 1;
  @Input() latitude = 2;
}

describe('View replacement with a coordinate child', () => {
  let fixture: ComponentFixture<CoordinateViewHostComponent>;
  let view: ViewComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [CoordinateViewHostComponent] });
    fixture = TestBed.createComponent(CoordinateViewHostComponent);
    fixture.detectChanges();
    view = fixture.debugElement.query(By.directive(ViewComponent)).componentInstance;
    view.instance.setCenter(fromLonLat([19, 50]));
    view.instance.setZoom(7);
  });

  afterEach(() => fixture.destroy());

  it('retains the panned center when constructor constraints change', () => {
    const expected = view.instance.getCenter();
    fixture.componentRef.setInput('enableRotation', false);
    fixture.detectChanges();
    expect(view.instance.getCenter()[0]).toBeCloseTo(expected[0], 6);
    expect(view.instance.getCenter()[1]).toBeCloseTo(expected[1], 6);
    expect(view.instance.getZoom()).toBeCloseTo(7);
  });

  it('transforms the panned center when the projection changes instead of restoring initial coordinates', () => {
    fixture.componentRef.setInput('projection', 'EPSG:4326');
    fixture.detectChanges();
    expect(view.instance.getCenter()[0]).toBeCloseTo(19, 6);
    expect(view.instance.getCenter()[1]).toBeCloseTo(50, 6);
    expect(view.instance.getZoom()).toBeCloseTo(7);
  });

  it('still accepts explicitly changed coordinate inputs during projection replacement', () => {
    fixture.componentRef.setInput('longitude', -4);
    fixture.componentRef.setInput('latitude', 48);
    fixture.componentRef.setInput('projection', 'EPSG:4326');
    fixture.detectChanges();
    expect(view.instance.getCenter()[0]).toBeCloseTo(-4, 6);
    expect(view.instance.getCenter()[1]).toBeCloseTo(48, 6);
  });
});

describe('View replacement with OpenLayers user coordinates', () => {
  let fixture: ComponentFixture<ViewComponent>;
  let map: Map;

  beforeEach(() => {
    useGeographic();
    map = new Map({ controls: [], interactions: [] });
    TestBed.configureTestingModule({
      imports: [ViewComponent],
      providers: [{ provide: MapComponent, useValue: { instance: map } }],
    });
    fixture = TestBed.createComponent(ViewComponent);
    fixture.componentRef.setInput('center', [19, 50]);
    fixture.componentRef.setInput('zoom', 7);
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
    map.dispose();
    clearUserProjection();
  });

  it('does not transform a geographic user center twice when the view projection changes', () => {
    fixture.componentRef.setInput('projection', 'EPSG:4326');
    fixture.detectChanges();
    expect(fixture.componentInstance.instance.getCenter()[0]).toBeCloseTo(19, 6);
    expect(fixture.componentInstance.instance.getCenter()[1]).toBeCloseTo(50, 6);
  });
});
