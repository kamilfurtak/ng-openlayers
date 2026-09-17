import { Component, Input } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import VectorTile from 'ol/VectorTile.js';
import { FeatureLike } from 'ol/Feature.js';
import { MapComponent } from '../map.component';
import { TileGridComponent } from '../tilegrid.component';
import { TileGridWMTSComponent } from '../tilegridwmts.component';
import { FormatMVTComponent } from '../formats/mvt.component';
import { LayerTileComponent } from '../layers/layertile.component';
import { LayerVectorTileComponent } from '../layers/layervectortile.component';
import { SourceXYZComponent } from './xyz.component';
import { SourceTileWMTSComponent } from './tilewmts.component';
import { SourceVectorTileComponent } from './vectortile.component';

@Component({
  imports: [
    MapComponent,
    TileGridComponent,
    TileGridWMTSComponent,
    FormatMVTComponent,
    LayerTileComponent,
    LayerVectorTileComponent,
    SourceXYZComponent,
    SourceTileWMTSComponent,
    SourceVectorTileComponent,
  ],
  template: `<aol-map>
    <aol-layer-tile
      ><aol-source-xyz url="/xyz/{z}/{x}/{y}.png">
        <aol-tilegrid [maxZoom]="maxZoom" /> </aol-source-xyz
    ></aol-layer-tile>
    <aol-layer-tile
      ><aol-source-tilewmts url="/wmts" layer="roads" style="normal" matrixSet="test">
        <aol-tilegrid-wmts [origin]="[0, 0]" [resolutions]="[1]" [matrixIds]="matrixIds" /> </aol-source-tilewmts
    ></aol-layer-tile>
    <aol-layer-vectortile
      ><aol-source-vectortile url="/mvt/{z}/{x}/{y}.pbf">
        <aol-format-mvt [layers]="layers" />
        @if (customGrid) {
          <aol-tilegrid [maxZoom]="maxZoom" />
        }</aol-source-vectortile
    ></aol-layer-vectortile>
  </aol-map>`,
})
class ProjectedSourceHost {
  @Input() maxZoom = 3;
  @Input() matrixIds = ['zero'];
  @Input() layers = ['places'];
  @Input() customGrid = true;
}

// One point in the "places" MVT layer; actual decoding verifies effective parent configuration.
const pointTile = new Uint8Array([
  26, 24, 120, 2, 10, 6, 112, 108, 97, 99, 101, 115, 18, 9, 8, 7, 24, 1, 34, 3, 9, 2, 4, 40, 128, 32,
]);

describe('Projected source configuration propagation', () => {
  it('updates both XYZ and vector-tile pyramids after a projected grid input changes', () => {
    const fixture = TestBed.createComponent(ProjectedSourceHost);
    fixture.detectChanges();
    const xyz = fixture.debugElement.query(By.directive(SourceXYZComponent)).componentInstance as SourceXYZComponent;
    const vector = fixture.debugElement.query(By.directive(SourceVectorTileComponent))
      .componentInstance as SourceVectorTileComponent;
    const originals = [xyz.instance, vector.instance];
    const disposals = originals.map((source) => spyOn(source, 'dispose').and.callThrough());
    expect(xyz.instance.getTileGrid().getMaxZoom()).toBe(3);
    fixture.componentRef.setInput('maxZoom', 6);
    fixture.detectChanges();
    expect(xyz.instance.getTileGrid().getMaxZoom()).toBe(6);
    expect(vector.instance.getTileGrid().getMaxZoom()).toBe(6);
    for (const dispose of disposals) expect(dispose).toHaveBeenCalledTimes(1);
    const emit = spyOn(xyz.tileLoadEnd, 'emit');
    originals[0].dispatchEvent('tileloadend');
    expect(emit).not.toHaveBeenCalled();
    xyz.instance.dispatchEvent('tileloadend');
    expect(emit).toHaveBeenCalledTimes(1);
    fixture.destroy();
  });

  it('uses updated WMTS matrix IDs in generated tile request URLs', () => {
    const fixture = TestBed.createComponent(ProjectedSourceHost);
    fixture.detectChanges();
    const source = fixture.debugElement.query(By.directive(SourceTileWMTSComponent))
      .componentInstance as SourceTileWMTSComponent;
    const original = source.instance;
    fixture.componentRef.setInput('matrixIds', ['updated-zero']);
    fixture.detectChanges();
    const url = source.instance.getTileUrlFunction()([0, 0, 0], 1, source.instance.getProjection());
    expect(url).toContain('TileMatrix=updated-zero');
    expect(source.instance).not.toBe(original);
    fixture.destroy();
  });

  it('decodes subsequent tiles with the current projected MVT layer filter', () => {
    const fixture = TestBed.createComponent(ProjectedSourceHost);
    fixture.detectChanges();
    const source = fixture.debugElement.query(By.directive(SourceVectorTileComponent))
      .componentInstance as SourceVectorTileComponent;
    const loadTile = () => {
      source.instance.setTileLoadFunction((tile) => {
        const vectorTile = tile as VectorTile<FeatureLike>;
        vectorTile.setFeatures(vectorTile.getFormat().readFeatures(pointTile.buffer));
      });
      const tile = source.instance.getTile(0, 0, 0, 1, source.instance.getProjection());
      tile.load();
      return tile.getSourceTiles()[0].getFeatures();
    };
    expect(loadTile().length).toBe(1);
    fixture.componentRef.setInput('layers', ['roads']);
    fixture.detectChanges();
    expect(loadTile()).toEqual([]);
    fixture.destroy();
  });

  it('restores the default tile grid when projected content disappears and unsubscribes when destroyed', () => {
    const fixture = TestBed.createComponent(ProjectedSourceHost);
    fixture.detectChanges();
    const source = fixture.debugElement.query(By.directive(SourceVectorTileComponent))
      .componentInstance as SourceVectorTileComponent;
    const format = fixture.debugElement.query(By.directive(FormatMVTComponent)).componentInstance as FormatMVTComponent;
    fixture.componentRef.setInput('customGrid', false);
    fixture.detectChanges();
    expect(source.instance.getTileGrid().getMaxZoom()).toBeGreaterThan(3);
    fixture.destroy();
    const destroyedSource = source.instance;
    format.layers = ['places'];
    format.ngOnChanges();
    expect(source.instance).toBe(destroyedSource);
  });
});
