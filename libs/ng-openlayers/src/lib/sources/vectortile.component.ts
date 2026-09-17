import { Component, Input, forwardRef, ContentChild, AfterContentInit, ChangeDetectionStrategy } from '@angular/core';
import VectorTile from 'ol/source/VectorTile.js';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  set formatComponent(component: FormatComponent | undefined) {
    this.projectedFormat = component;
    this.observeContent('format', component?.instanceChange, (format) => {
      this.format = format;
      if (this.instance) this.init();
    });
    if (this.instance) {
      this.format = component?.instance;
      this.init();
    }
  }

  get formatComponent(): FormatComponent | undefined {
    return this.projectedFormat;
  }

  private projectedFormat?: FormatComponent;
  @ContentChild(TileGridComponent, { static: false })
  set tileGridComponent(component: TileGridComponent | undefined) {
    this.projectedGrid = component;
    this.observeContent('grid', component?.instanceChange, (grid) => {
      this.tileGrid = grid;
      if (this.instance) this.init();
    });
    if (this.instance) {
      this.tileGrid = component?.instance;
      this.init();
    }
  }

  get tileGridComponent(): TileGridComponent | undefined {
    return this.projectedGrid;
  }

  private projectedGrid?: TileGridComponent;

  public instance: VectorTile<FeatureLike>;
  format: FeatureFormat<FeatureLike>;
  tileGrid: TileGrid;

  constructor(layer: LayerVectorTileComponent) {
    super(layer);
  }

  /* need the children to construct the OL3 object */
  ngAfterContentInit() {
    this.format = this.formatComponent?.instance;
    this.tileGrid = this.tileGridComponent?.instance;
    this.init();
  }

  private init(): void {
    const previous = this.instance;
    this.instance = new VectorTile<FeatureLike>(this);
    this.host.instance.setSource(this.instance);
    previous?.dispose();
  }
}
