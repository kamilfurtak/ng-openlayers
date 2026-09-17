import { Component, Input, SimpleChange } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import Feature from 'ol/Feature.js';
import Map from 'ol/Map.js';
import Point from 'ol/geom/Point.js';
import MVT from 'ol/format/MVT.js';
import XYZ from 'ol/source/XYZ.js';
import VectorSource from 'ol/source/Vector.js';
import WMTS from 'ol/tilegrid/WMTS.js';
import { MapComponent } from '../map.component';
import { LayerImageComponent } from '../layers/layerimage.component';
import { LayerTileComponent } from '../layers/layertile.component';
import { LayerVectorComponent } from '../layers/layervector.component';
import { LayerVectorTileComponent } from '../layers/layervectortile.component';
import { FormatComponent } from '../formats/format.component';
import { SourceComponent } from './source.component';
import { SourceXYZComponent } from './xyz.component';
import { SourceImageStaticComponent } from './imagestatic.component';
import { SourceImageWMSComponent } from './imagewms.component';
import { SourceImageArcGISRestComponent } from './imagearcgisrest.component';
import { SourceTileWMSComponent } from './tilewms.component';
import { SourceTileWMTSComponent } from './tilewmts.component';
import { SourceRasterComponent } from './raster.component';
import { SourceGeoJSONComponent } from './geojson.component';
import { SourceVectorTileComponent } from './vectortile.component';
import { SourceClusterComponent } from './cluster.component';
import { SourceVectorComponent } from './vector.component';

@Component({
  imports: [MapComponent, LayerVectorComponent, SourceVectorComponent, SourceClusterComponent],
  template: `<aol-map
    ><aol-layer-vector
      ><aol-source-cluster [distance]="40">
        @if (visible) {
          <aol-source-vector />
        }</aol-source-cluster></aol-layer-vector
  ></aol-map>`,
})
class DynamicClusterHost {
  @Input() visible = false;
}

describe('Source updates, composition and ownership', () => {
  let map: Map;
  let tile: LayerTileComponent;
  let vector: LayerVectorComponent;
  let image: LayerImageComponent;
  let vectorTile: LayerVectorTileComponent;
  let components: SourceComponent[];

  beforeEach(() => {
    map = new Map({ controls: [], interactions: [] });
    const host = { instance: map } as MapComponent;
    tile = new LayerTileComponent(host);
    vector = new LayerVectorComponent(host);
    image = new LayerImageComponent(host);
    vectorTile = new LayerVectorTileComponent(host);
    for (const layer of [tile, vector, image, vectorTile]) layer.ngOnInit();
    components = [];
  });

  afterEach(() => {
    for (const component of components) component.ngOnDestroy();
    for (const layer of [tile, vector, image, vectorTile]) layer.ngOnDestroy();
    map.dispose();
  });

  it('updates XYZ URL arrays and attribution in place, preserving tile events until destruction', () => {
    const source = new SourceXYZComponent(tile);
    components.push(source);
    source.url = '/before/{z}/{x}/{y}.png';
    source.ngAfterContentInit();
    const original = source.instance;
    source.urls = ['/a/{z}/{x}/{y}.png', '/b/{z}/{x}/{y}.png'];
    source.attributions = 'Example attribution';
    source.ngOnChanges({
      urls: new SimpleChange(undefined, source.urls, false),
      attributions: new SimpleChange(undefined, source.attributions, false),
    });
    expect(source.instance).toBe(original);
    expect(source.instance.getUrls()).toEqual(source.urls);
    expect(source.instance.getAttributions()(null)).toEqual(['Example attribution']);
    const emit = spyOn(source.tileLoadError, 'emit');
    original.dispatchEvent('tileloaderror');
    expect(emit).toHaveBeenCalledTimes(1);
    source.ngOnDestroy();
    original.dispatchEvent('tileloaderror');
    expect(emit).toHaveBeenCalledTimes(1);
    expect(tile.instance.getSource()).toBeNull();
  });

  it('replaces a static image when its extent changes and releases the old image listeners', () => {
    const source = new SourceImageStaticComponent(image);
    components.push(source);
    source.url = '/image.png';
    source.imageExtent = [0, 0, 10, 10];
    source.ngOnInit();
    const original = source.instance;
    const dispose = spyOn(original, 'dispose').and.callThrough();
    const emit = spyOn(source.imageLoadEnd, 'emit');
    source.imageExtent = [0, 0, 20, 30];
    source.ngOnChanges({ imageExtent: new SimpleChange([0, 0, 10, 10], source.imageExtent, false) });
    expect(source.instance.getImageExtent()).toEqual([0, 0, 20, 30]);
    expect(image.instance.getSource()).toBe(source.instance);
    expect(dispose).toHaveBeenCalledTimes(1);
    original.dispatchEvent('imageloadend');
    expect(emit).not.toHaveBeenCalled();
    source.instance.dispatchEvent('imageloadend');
    expect(emit).toHaveBeenCalledTimes(1);
  });

  it('updates only static image attribution without rebuilding the source', () => {
    const source = new SourceImageStaticComponent(image);
    components.push(source);
    source.url = '/image.png';
    source.imageExtent = [0, 0, 10, 10];
    source.ngOnInit();
    const original = source.instance;
    source.attributions = 'Updated';
    source.ngOnChanges({ attributions: new SimpleChange(undefined, 'Updated', false) });
    expect(source.instance).toBe(original);
    expect(source.instance.getAttributions()(null)).toEqual(['Updated']);
  });

  it('merges WMS and ArcGIS request parameters without replacing their source objects', () => {
    const sources = [
      new SourceImageWMSComponent(image),
      new SourceImageArcGISRestComponent(image),
      new SourceTileWMSComponent(tile),
    ];
    components.push(...sources);
    for (const source of sources) {
      source.url = '/service';
      source.params = { LAYERS: 'roads', VERSION: '1.3.0' };
      source.ngOnInit();
      const original = source.instance;
      source.params = { LAYERS: 'water' };
      source.ngOnChanges({ params: new SimpleChange(undefined, source.params, false) });
      expect(source.instance).toBe(original);
      expect(source.instance.getParams()).toEqual({ LAYERS: 'water', VERSION: '1.3.0' });
    }
  });

  it('forwards image load start, success and error events and releases subscriptions', () => {
    const sources = [new SourceImageWMSComponent(image), new SourceImageArcGISRestComponent(image)];
    components.push(...sources);
    for (const source of sources) {
      source.url = '/service';
      source.ngOnInit();
      const starts = spyOn(source.imageLoadStart, 'emit');
      const ends = spyOn(source.imageLoadEnd, 'emit');
      const errors = spyOn(source.imageLoadError, 'emit');
      for (const event of ['imageloadstart', 'imageloadend', 'imageloaderror']) source.instance.dispatchEvent(event);
      for (const emit of [starts, ends, errors]) expect(emit).toHaveBeenCalledTimes(1);
      source.ngOnDestroy();
      for (const event of ['imageloadstart', 'imageloadend', 'imageloaderror']) source.instance.dispatchEvent(event);
      for (const emit of [starts, ends, errors]) expect(emit).toHaveBeenCalledTimes(1);
    }
  });

  it('accepts an explicit WMTS tile grid and updates URL/dimensions without dropping subscriptions', () => {
    const source = new SourceTileWMTSComponent(tile);
    components.push(source);
    source.tileGrid = new WMTS({ origin: [0, 0], resolutions: [1], matrixIds: ['0'] });
    source.url = '/wmts';
    source.layer = 'roads';
    source.style = 'normal';
    source.matrixSet = 'test';
    source.dimensions = { time: '2020' };
    source.ngAfterContentInit();
    const original = source.instance;
    expect(tile.instance.getSource()).toBe(original);
    expect(original.getTileGrid()).toBe(source.tileGrid);
    source.url = '/new-wmts';
    source.dimensions = { time: '2026' };
    source.ngOnChanges({
      url: new SimpleChange('/wmts', source.url, false),
      dimensions: new SimpleChange(undefined, source.dimensions, false),
    });
    expect(source.instance).toBe(original);
    expect(original.getUrls()).toEqual(['/new-wmts']);
    expect(original.getDimensions()).toEqual({ time: '2026' });
    const emit = spyOn(source.tileLoadEnd, 'emit');
    original.dispatchEvent('tileloadend');
    expect(emit).toHaveBeenCalledTimes(1);
  });

  it('rebuilds raster operations when child content changes and tolerates content removal', () => {
    const child = new XYZ({ url: '/{z}/{x}/{y}.png' });
    const source = new SourceRasterComponent(image);
    components.push(source);
    source.threads = 0;
    source.operation = (pixels) => pixels[0];
    source.source = Object.assign(new SourceXYZComponent(), { instance: child });
    source.ngAfterContentInit();
    const original = source.instance;
    const dispose = spyOn(original, 'dispose').and.callThrough();
    const emit = spyOn(source.beforeOperations, 'emit');
    source.source = undefined;
    expect(source.sources).toEqual([]);
    expect(image.instance.getSource()).toBe(source.instance);
    expect(dispose).toHaveBeenCalledTimes(1);
    original.dispatchEvent('beforeoperations');
    expect(emit).not.toHaveBeenCalled();
    source.instance.dispatchEvent('beforeoperations');
    expect(emit).toHaveBeenCalledTimes(1);
    child.dispose();
  });

  it('uses the requested GeoJSON data projection while reading feature geometries', () => {
    const source = new SourceGeoJSONComponent(vector);
    components.push(source);
    source.defaultDataProjection = 'EPSG:3857';
    source.featureProjection = 'EPSG:3857';
    source.ngOnInit();
    const feature = source.format.readFeature({
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [1000, 2000] },
      properties: { name: 'place' },
    }) as Feature<Point>;
    expect(feature.getGeometry().getCoordinates()).toEqual([1000, 2000]);
    expect(feature.get('name')).toBe('place');
  });

  it('allows the OpenLayers default vector tile grid when only the format is projected', () => {
    const source = new SourceVectorTileComponent(vectorTile);
    components.push(source);
    source.formatComponent = Object.assign(new FormatComponent(), { instance: new MVT() });
    source.url = '/tiles/{z}/{x}/{y}.pbf';
    expect(() => source.ngAfterContentInit()).not.toThrow();
    expect(vectorTile.instance.getSource()).toBe(source.instance);
    expect(source.instance.getTileGrid()).toBeDefined();
  });

  it('maintains the cluster wrapper when its vector child is inserted, removed and recreated', () => {
    const fixture = TestBed.createComponent(DynamicClusterHost);
    fixture.detectChanges();
    const cluster = fixture.debugElement.query(By.directive(SourceClusterComponent))
      .componentInstance as SourceClusterComponent;
    const layer = fixture.debugElement.query(By.directive(LayerVectorComponent))
      .componentInstance as LayerVectorComponent;
    const wrapper = cluster.instance;
    expect(wrapper.getSource()).toBeNull();
    fixture.componentRef.setInput('visible', true);
    fixture.detectChanges();
    const first = fixture.debugElement.query(By.directive(SourceVectorComponent))
      .componentInstance as SourceVectorComponent;
    expect(wrapper.getSource()).toBe(first.instance);
    expect(layer.instance.getSource()).toBe(wrapper);
    fixture.componentRef.setInput('visible', false);
    fixture.detectChanges();
    expect(wrapper.getSource()).toBeNull();
    expect(layer.instance.getSource()).toBe(wrapper);
    fixture.componentRef.setInput('visible', true);
    fixture.detectChanges();
    const second = fixture.debugElement.query(By.directive(SourceVectorComponent))
      .componentInstance as SourceVectorComponent;
    expect(wrapper.getSource()).toBe(second.instance);
    expect(second.instance).not.toBe(first.instance);
    expect(layer.instance.getSource()).toBe(wrapper);
    fixture.destroy();
  });

  it('clusters close points and recalculates groups after distance changes', () => {
    const input = new VectorSource({ features: [new Feature(new Point([0, 0])), new Feature(new Point([5, 0]))] });
    const source = new SourceClusterComponent(vector);
    components.push(source);
    source.distance = 10;
    source.sourceVectorComponent = Object.assign(new SourceVectorComponent(vector), { instance: input });
    source.ngAfterContentInit();
    source.instance.loadFeatures([-100, -100, 100, 100], 1, null);
    expect(source.instance.getFeatures().length).toBe(1);
    expect(source.instance.getFeatures()[0].get('features').length).toBe(2);
    source.distance = 1;
    source.ngOnChanges({ distance: new SimpleChange(10, 1, false) });
    expect(source.instance.getFeatures().length).toBe(2);
    source.ngOnDestroy();
    input.addFeature(new Feature(new Point([1, 1])));
    expect(source.instance.getSource()).toBeNull();
    input.dispose();
  });
});
