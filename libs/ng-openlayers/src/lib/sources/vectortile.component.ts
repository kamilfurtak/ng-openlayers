import { Component, Host, Input, forwardRef, ContentChild, AfterContentInit } from '@angular/core';
import { VectorTile } from 'ol/source.js';
import { FeatureLike } from 'ol/Feature.js';
import FeatureFormat from 'ol/format/Feature.js';
import TileGrid from 'ol/tilegrid/TileGrid.js';
import { LayerVectorTileComponent } from '../layers/layervectortile.component';
import { FormatComponent } from '../formats/format.component';
import { TileGridComponent } from '../tilegrid.component';
import { SourceComponent } from './source.component';
import { ProjectionLike } from 'ol/proj.js';
import { UrlFunction } from 'ol/Tile.js';

@Component({
    selector: 'aol-source-vectortile',
    template: ` <ng-content></ng-content> `,
    providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceVectorTileComponent) }],
    standalone: true,
})
export class SourceVectorTileComponent extends SourceComponent implements AfterContentInit {
  @Input()
  cacheSize: number;
  @Input()
  overlaps: boolean;
  @Input()
  projection: ProjectionLike;
  @Input()
  tilePixelRatio: number;
  @Input()
  tileUrlFunction: UrlFunction;
  @Input()
  url: string;
  @Input()
  urls: string[];
  @Input()
  wrapX: boolean;

  @ContentChild(FormatComponent, { static: false })
  formatComponent: FormatComponent;
  @ContentChild(TileGridComponent, { static: false })
  tileGridComponent: TileGridComponent;

  public instance: VectorTile<FeatureLike>;
  format: FeatureFormat<FeatureLike>;
  tileGrid: TileGrid;

  constructor(@Host() layer: LayerVectorTileComponent) {
    super(layer);
  }

  /* need the children to construct the OL3 object */
  ngAfterContentInit() {
    this.format = this.formatComponent.instance;
    this.tileGrid = this.tileGridComponent.instance;
    // console.log('creating ol.source.VectorTile instance with:', this);
    this.instance = new VectorTile<FeatureLike>(this);
    this.host.instance.setSource(this.instance);
  }
}
