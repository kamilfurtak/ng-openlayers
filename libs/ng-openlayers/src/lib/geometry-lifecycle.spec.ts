import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import Point from 'ol/geom/Point.js';
import View from 'ol/View.js';
import { fromLonLat } from 'ol/proj.js';
import { MapComponent } from './map.component';
import { ViewComponent } from './view.component';
import { LayerVectorComponent } from './layers/layervector.component';
import { SourceVectorComponent } from './sources/vector.component';
import { FeatureComponent } from './feature.component';
import { CoordinateComponent } from './coordinate.component';
import { CollectionCoordinatesComponent } from './collectioncoordinates.component';
import { GeometryPointComponent } from './geom/geometrypoint.component';
import { GeometryCircleComponent } from './geom/geometrycircle.component';
import { GeometryLinestringComponent } from './geom/geometrylinestring.component';
import { GeometryMultiPointComponent } from './geom/geometrymultipoint.component';
import { GeometryPolygonComponent } from './geom/geometrypolygon.component';
import { GeometryMultiLinestringComponent } from './geom/geometrymultilinestring.component';
import { GeometryMultiPolygonComponent } from './geom/geometrymultipolygon.component';

@Component({
  selector: 'aol-geometry-test',
  imports: [
    MapComponent,
    ViewComponent,
    LayerVectorComponent,
    SourceVectorComponent,
    FeatureComponent,
    CoordinateComponent,
    CollectionCoordinatesComponent,
    GeometryPointComponent,
    GeometryCircleComponent,
    GeometryLinestringComponent,
    GeometryMultiPointComponent,
    GeometryPolygonComponent,
    GeometryMultiLinestringComponent,
    GeometryMultiPolygonComponent,
  ],
  template: `
    <aol-map width="300px" height="200px">
      <aol-view [center]="[0, 0]" [zoom]="2" />
      <aol-layer-vector
        ><aol-source-vector>
          @if (showFeature) {
            <aol-feature [id]="featureId">
              @if (showPoint) {
                <aol-geometry-point><aol-coordinate [x]="longitude" [y]="50" srid="EPSG:4326" /></aol-geometry-point>
              }
            </aol-feature>
          }
          <aol-feature id="circle"
            ><aol-geometry-circle [radius]="radius"
              ><aol-coordinate [x]="longitude" [y]="50" srid="EPSG:4326" /></aol-geometry-circle
          ></aol-feature>
          <aol-feature id="line"
            ><aol-geometry-linestring
              ><aol-collection-coordinates [coordinates]="points" srid="EPSG:4326" /></aol-geometry-linestring
          ></aol-feature>
          <aol-feature id="multipoint"
            ><aol-geometry-multipoint
              ><aol-collection-coordinates [coordinates]="points" srid="EPSG:4326" /></aol-geometry-multipoint
          ></aol-feature>
          <aol-feature id="polygon"
            ><aol-geometry-polygon
              ><aol-collection-coordinates [coordinates]="rings" srid="EPSG:4326" /></aol-geometry-polygon
          ></aol-feature>
          <aol-feature id="multiline"
            ><aol-geometry-multilinestring
              ><aol-collection-coordinates [coordinates]="rings" srid="EPSG:4326" /></aol-geometry-multilinestring
          ></aol-feature>
          <aol-feature id="multipolygon"
            ><aol-geometry-multipolygon
              ><aol-collection-coordinates [coordinates]="polygons" srid="EPSG:4326" /></aol-geometry-multipolygon
          ></aol-feature> </aol-source-vector
      ></aol-layer-vector>
    </aol-map>
  `,
})
class GeometryHostComponent {
  @Input() showFeature = true;
  @Input() showPoint = true;
  @Input() featureId: string | number | undefined = 0;
  @Input() longitude = 20;
  @Input() radius = 100;
  @Input() points = [
    [20, 50],
    [21, 51],
  ];
  readonly rings = [
    [
      [20, 50],
      [21, 50],
      [21, 51],
      [20, 50],
    ],
  ];
  readonly polygons = [this.rings];
}

describe('Geometry and feature lifecycle', () => {
  let fixture: ComponentFixture<GeometryHostComponent>;
  let map: MapComponent;
  let source: SourceVectorComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [GeometryHostComponent] });
    fixture = TestBed.createComponent(GeometryHostComponent);
    fixture.detectChanges();
    map = fixture.debugElement.query(By.directive(MapComponent)).componentInstance;
    source = fixture.debugElement.query(By.directive(SourceVectorComponent)).componentInstance;
  });
  afterEach(() => fixture.destroy());

  it('updates and clears feature IDs in the vector source index, including zero', () => {
    const feature = source.instance.getFeatureById(0);
    expect(feature).toBeDefined();
    fixture.componentRef.setInput('featureId', 'updated');
    fixture.detectChanges();
    expect(source.instance.getFeatureById(0)).toBeNull();
    expect(source.instance.getFeatureById('updated')).toBe(feature);
    fixture.componentRef.setInput('featureId', undefined);
    fixture.detectChanges();
    expect(source.instance.getFeatureById('updated')).toBeNull();
    expect(source.instance.hasFeature(feature)).toBeTrue();
  });

  it('removes only its owned feature while preserving the sibling features', () => {
    fixture.componentRef.setInput('showFeature', false);
    fixture.detectChanges();
    expect(source.instance.getFeatureById(0)).toBeNull();
    expect(source.instance.getFeatures().length).toBe(6);
    expect(source.instance.getFeatureById('circle')).not.toBeNull();
  });

  it('projects coordinates, updates inputs in place and preserves the circle radius', () => {
    const point = fixture.debugElement.query(By.directive(GeometryPointComponent))
      .componentInstance as GeometryPointComponent;
    const circle = fixture.debugElement.query(By.directive(GeometryCircleComponent))
      .componentInstance as GeometryCircleComponent;
    const original = point.instance;
    expect(point.instance.getCoordinates()).toEqual(fromLonLat([20, 50]));
    expect(circle.instance.getCenter()).toEqual(fromLonLat([20, 50]));
    fixture.componentRef.setInput('longitude', 22);
    fixture.componentRef.setInput('radius', 250);
    fixture.detectChanges();
    expect(point.instance).toBe(original);
    expect(point.instance.getCoordinates()).toEqual(fromLonLat([22, 50]));
    expect(circle.instance.getCenter()).toEqual(fromLonLat([22, 50]));
    expect(circle.instance.getRadius()).toBe(250);
  });

  it('reprojects every coordinate nesting level from the original input on a view change', () => {
    const components = [
      GeometryLinestringComponent,
      GeometryMultiPointComponent,
      GeometryPolygonComponent,
      GeometryMultiLinestringComponent,
      GeometryMultiPolygonComponent,
    ];
    const originalInputs = JSON.stringify([fixture.componentInstance.points, fixture.componentInstance.polygons]);
    map.instance.setView(new View({ projection: 'EPSG:4326', center: [20, 50], zoom: 2 }));
    for (const component of components) {
      const geometry = fixture.debugElement.query(By.directive(component)).componentInstance;
      const expected =
        component === GeometryMultiPolygonComponent
          ? fixture.componentInstance.polygons
          : component === GeometryPolygonComponent || component === GeometryMultiLinestringComponent
            ? fixture.componentInstance.rings
            : fixture.componentInstance.points;
      expect(geometry.instance.getCoordinates()).withContext(component.name).toEqual(expected);
    }
    expect(JSON.stringify([fixture.componentInstance.points, fixture.componentInstance.polygons])).toBe(originalInputs);
    const point = fixture.debugElement.query(By.directive(GeometryPointComponent))
      .componentInstance as GeometryPointComponent;
    expect(point.instance.getCoordinates()).toEqual([20, 50]);
  });

  it('updates collection inputs in place and leaves caller arrays unchanged', () => {
    const line = fixture.debugElement.query(By.directive(GeometryLinestringComponent))
      .componentInstance as GeometryLinestringComponent;
    const original = line.instance;
    const points = [
      [10, 45],
      [11, 46],
      [12, 47],
    ];
    fixture.componentRef.setInput('points', points);
    fixture.detectChanges();
    expect(line.instance).toBe(original);
    expect(line.instance.getCoordinates()).toEqual(points.map((point) => fromLonLat(point)));
    expect(points).toEqual([
      [10, 45],
      [11, 46],
      [12, 47],
    ]);
  });

  it('keeps existing coordinates while a view is absent and resumes on its replacement', () => {
    const point = fixture.debugElement.query(By.directive(GeometryPointComponent))
      .componentInstance as GeometryPointComponent;
    const line = fixture.debugElement.query(By.directive(GeometryLinestringComponent))
      .componentInstance as GeometryLinestringComponent;
    expect(() => map.instance.setView(undefined)).not.toThrow();
    expect(point.instance.getCoordinates()).toEqual(fromLonLat([20, 50]));
    map.instance.setView(new View({ projection: 'EPSG:4326' }));
    expect(point.instance.getCoordinates()).toEqual([20, 50]);
    expect(line.instance.getCoordinates()).toEqual(fixture.componentInstance.points);
  });

  it('detaches a conditionally removed geometry and stops coordinate view subscriptions', () => {
    const point = fixture.debugElement.query(By.directive(GeometryPointComponent))
      .componentInstance as GeometryPointComponent;
    const setCoordinates = spyOn(point.instance, 'setCoordinates').and.callThrough();
    fixture.componentRef.setInput('showPoint', false);
    fixture.detectChanges();
    expect(source.instance.getFeatureById(0).getGeometry()).toBeUndefined();
    setCoordinates.calls.reset();
    map.instance.setView(new View({ projection: 'EPSG:4326' }));
    expect(setCoordinates).not.toHaveBeenCalled();
  });

  it('does not detach a geometry supplied by another owner during component removal', () => {
    const feature = source.instance.getFeatureById(0);
    const replacement = new Point([1, 2]);
    feature.setGeometry(replacement);
    fixture.componentRef.setInput('showPoint', false);
    fixture.detectChanges();
    expect(feature.getGeometry()).toBe(replacement);
  });
});
