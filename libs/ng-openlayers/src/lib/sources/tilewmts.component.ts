import {
  Component,
  Input,
  forwardRef,
  AfterContentInit,
  ContentChild,
  SimpleChanges,
  OnChanges,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { LayerTileComponent } from '../layers/layertile.component';
import { SourceComponent } from './source.component';
import { TileGridWMTSComponent } from '../tilegridwmts.component';
import SourceWMTS from 'ol/source/WMTS.js';
import WMTS from 'ol/tilegrid/WMTS.js';
import { ProjectionLike } from 'ol/proj.js';
import { LoadFunction } from 'ol/Tile.js';
import { TileSourceEvent } from 'ol/source/Tile.js';
import { RequestEncoding } from 'ol/source/WMTS.js';
import ImageTile from 'ol/ImageTile.js';

@Component({
  selector: 'aol-source-tilewmts',
  template: ` <ng-content></ng-content> `,
  providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceTileWMTSComponent) }],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class SourceTileWMTSComponent extends SourceComponent implements AfterContentInit, OnChanges {
  @Input()
  cacheSize?: number;
  @Input()
  crossOrigin?: string;
  @Input()
  tileGrid: WMTS;
  @Input()
  projection: ProjectionLike;
  @Input()
  reprojectionErrorThreshold?: number;
  @Input()
  requestEncoding?: RequestEncoding | undefined;
  @Input()
  layer: string;
  @Input()
  style: string;
  @Input()
  tileClass?: typeof ImageTile;
  @Input()
  tilePixelRatio?: number;
  @Input()
  version?: string;
  @Input()
  format?: string;
  @Input()
  matrixSet: string;
  @Input()
  dimensions?: Record<string, unknown>;
  @Input()
  url?: string;
  @Input()
  tileLoadFunction?: LoadFunction;
  @Input()
  urls?: string[];
  @Input()
  wrapX?: boolean;

  @Output()
  tileLoadStart = new EventEmitter<TileSourceEvent>();
  @Output()
  tileLoadEnd = new EventEmitter<TileSourceEvent>();
  @Output()
  tileLoadError = new EventEmitter<TileSourceEvent>();

  @ContentChild(TileGridWMTSComponent, { static: false })
  set tileGridWMTS(component: TileGridWMTSComponent | undefined) {
    this.gridComponent = component;
    this.observeContent('grid', component?.instanceChange, () => {
      this.tileGrid = component.instance;
      if (this.instance) this.setLayerSource();
    });
    if (this.instance && component) {
      this.tileGrid = component.instance;
      this.setLayerSource();
    }
  }

  get tileGridWMTS(): TileGridWMTSComponent | undefined {
    return this.gridComponent;
  }

  private gridComponent?: TileGridWMTSComponent;

  instance: SourceWMTS;

  constructor(layer: LayerTileComponent) {
    super(layer);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!this.instance) return;
    if (changes.urls) this.instance.setUrls(this.urls);
    else if (changes.url) this.instance.setUrl(this.url);
    if (changes.dimensions) this.instance.updateDimensions(this.dimensions);
    if (changes.attributions) this.instance.setAttributions(this.attributions);
  }

  setLayerSource(): void {
    const previous = this.instance;
    this.instance = new SourceWMTS(this);
    this.instance.on('tileloadstart', (event: TileSourceEvent) => this.tileLoadStart.emit(event));
    this.instance.on('tileloadend', (event: TileSourceEvent) => this.tileLoadEnd.emit(event));
    this.instance.on('tileloaderror', (event: TileSourceEvent) => this.tileLoadError.emit(event));
    this.host.instance.setSource(this.instance);
    previous?.dispose();
  }

  ngAfterContentInit(): void {
    if (this.tileGridWMTS) {
      this.tileGrid = this.tileGridWMTS.instance;
    }
    this.setLayerSource();
  }
}
