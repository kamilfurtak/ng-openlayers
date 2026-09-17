import { TestBed } from '@angular/core/testing';
import Feature from 'ol/Feature.js';
import WMTS from 'ol/tilegrid/WMTS.js';
import { TileGridComponent } from './tilegrid.component';
import { TileGridWMTSComponent } from './tilegridwmts.component';
import { FormatMVTComponent } from './formats/mvt.component';
import { FormatComponent } from './formats/format.component';

// A minimal Mapbox vector tile with one point in the "places" layer.
// Explicit protobuf bytes keep format tests independent of HTTP and other writers.
const pointTile = new Uint8Array([
  26, 24, 120, 2, 10, 6, 112, 108, 97, 99, 101, 115, 18, 9, 8, 7, 24, 1, 34, 3, 9, 2, 4, 40, 128, 32,
]);

describe('Tile grid construction and updates', () => {
  it('constructs a standard XYZ pyramid and applies changed zoom and tile-size inputs', () => {
    const fixture = TestBed.createComponent(TileGridComponent);
    fixture.componentRef.setInput('maxZoom', 3);
    fixture.componentRef.setInput('minZoom', 1);
    fixture.componentRef.setInput('tileSize', 256);
    fixture.detectChanges();
    const grid = fixture.componentInstance.instance;
    expect(grid.getMinZoom()).toBe(1);
    expect(grid.getMaxZoom()).toBe(3);
    expect(grid.getResolution(1)).toBeCloseTo(grid.getResolution(0) / 2, 8);
    fixture.componentRef.setInput('maxZoom', 5);
    fixture.componentRef.setInput('tileSize', 512);
    fixture.detectChanges();
    expect(fixture.componentInstance.instance.getMaxZoom()).toBe(5);
    expect(fixture.componentInstance.instance.getTileSize(1)).toBe(512);
    fixture.destroy();
  });

  it('honors explicit origins and resolutions for non-XYZ grids', () => {
    const fixture = TestBed.createComponent(TileGridComponent);
    fixture.componentRef.setInput('origin', [100, 200]);
    fixture.componentRef.setInput('resolutions', [8, 4, 2]);
    fixture.componentRef.setInput('tileSize', [128, 256]);
    fixture.detectChanges();
    expect(fixture.componentInstance.instance.getOrigin(0)).toEqual([100, 200]);
    expect(fixture.componentInstance.instance.getResolutions()).toEqual([8, 4, 2]);
    expect(fixture.componentInstance.instance.getTileSize(1)).toEqual([128, 256]);
    fixture.destroy();
  });

  it('preserves the WMTS subtype and matrix IDs after Angular input changes', () => {
    const fixture = TestBed.createComponent(TileGridWMTSComponent);
    fixture.componentRef.setInput('origin', [0, 256]);
    fixture.componentRef.setInput('resolutions', [2, 1]);
    fixture.componentRef.setInput('matrixIds', ['level-0', 'level-1']);
    fixture.detectChanges();
    expect(fixture.componentInstance.instance).toBeInstanceOf(WMTS);
    expect(fixture.componentInstance.instance.getMatrixId(1)).toBe('level-1');
    fixture.componentRef.setInput('resolutions', [4, 2, 1]);
    fixture.componentRef.setInput('matrixIds', ['a', 'b', 'c']);
    fixture.detectChanges();
    expect(fixture.componentInstance.instance).toBeInstanceOf(WMTS);
    expect(fixture.componentInstance.instance.getMatrixIds()).toEqual(['a', 'b', 'c']);
    expect(fixture.componentInstance.instance.getResolution(2)).toBe(1);
    fixture.destroy();
  });
});

describe('MVT format Angular inputs', () => {
  it('uses supplied feature class, geometry name, layer name and layer filters during decoding', () => {
    const fixture = TestBed.createComponent(FormatMVTComponent);
    fixture.componentRef.setInput('featureClass', Feature);
    fixture.componentRef.setInput('geometryName', 'shape');
    fixture.componentRef.setInput('layerName', 'sourceLayer');
    fixture.componentRef.setInput('layers', ['places']);
    fixture.detectChanges();
    expect(fixture.debugElement.injector.get(FormatComponent)).toBe(fixture.componentInstance);
    const features = fixture.componentInstance.instance.readFeatures(pointTile.buffer, { extent: [0, 0, 4096, 4096] });
    expect(features.length).toBe(1);
    const feature = features[0] as Feature;
    expect(feature).toBeInstanceOf(Feature);
    expect(feature.getId()).toBe(7);
    expect(feature.getGeometryName()).toBe('shape');
    expect(feature.getGeometry().getType()).toBe('Point');
    expect(feature.get('sourceLayer')).toBe('places');
    fixture.destroy();
  });

  it('honors an updated layer filter when decoding subsequent data', () => {
    const fixture = TestBed.createComponent(FormatMVTComponent);
    fixture.componentRef.setInput('layers', ['places']);
    fixture.detectChanges();
    expect(fixture.componentInstance.instance.readFeatures(pointTile.buffer).length).toBe(1);
    fixture.componentRef.setInput('layers', ['roads']);
    fixture.detectChanges();
    expect(fixture.componentInstance.instance.readFeatures(pointTile.buffer)).toEqual([]);
    fixture.destroy();
  });
});
