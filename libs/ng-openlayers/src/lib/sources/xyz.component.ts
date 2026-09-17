import {
  AfterContentInit,
  Component,
  ContentChild,
  EventEmitter,
  forwardRef,
  Input,
  OnChanges,
  Optional,
  Output,
  SimpleChanges,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Size } from 'ol/size.js';
import XYZ from 'ol/source/XYZ.js';
import { TileSourceEvent } from 'ol/source/Tile.js';
import { LoadFunction, UrlFunction } from 'ol/Tile.js';
import TileGrid from 'ol/tilegrid/TileGrid.js';

import { LayerTileComponent } from '../layers/layertile.component';
import { TileGridComponent } from '../tilegrid.component';
import { SourceComponent } from './source.component';

@Component({
  selector: 'aol-source-xyz',
  template: ` <ng-content></ng-content> `,
  providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceXYZComponent) }],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class SourceXYZComponent extends SourceComponent implements AfterContentInit, OnChanges {
  @Input()
  cacheSize: number;
  @Input()
  crossOrigin: string;
  @Input()
  opaque: boolean;
  @Input()
  projection: string;
  @Input()
  reprojectionErrorThreshold: number;
  @Input()
  minZoom: number;
  @Input()
  maxZoom: number;
  @Input()
  tileGrid: TileGrid;
  @Input()
  tileLoadFunction?: LoadFunction;
  @Input()
  tilePixelRatio: number;
  @Input()
  tileSize: number | Size;
  @Input()
  tileUrlFunction?: UrlFunction;
  @Input()
  url: string;
  @Input()
  urls: string[];
  @Input()
  wrapX: boolean;

  @ContentChild(TileGridComponent, { static: false })
  set tileGridXYZ(component: TileGridComponent | undefined) {
    this.gridComponent = component;
    this.observeContent('grid', component?.instanceChange, (grid) => {
      this.tileGrid = grid;
      if (this.instance) this.init();
    });
    if (this.instance) {
      this.tileGrid = component?.instance;
      this.init();
    }
  }

  get tileGridXYZ(): TileGridComponent | undefined {
    return this.gridComponent;
  }

  private gridComponent?: TileGridComponent;

  @Output()
  tileLoadStart = new EventEmitter<TileSourceEvent>();
  @Output()
  tileLoadEnd = new EventEmitter<TileSourceEvent>();
  @Output()
  tileLoadError = new EventEmitter<TileSourceEvent>();

  instance: XYZ;

  constructor(
    @Optional()
    protected layer?: LayerTileComponent
  ) {
    super(layer);
  }

  ngAfterContentInit() {
    if (this.tileGridXYZ) {
      this.tileGrid = this.tileGridXYZ.instance;
    }
    this.init();
  }

  ngOnChanges(changes: SimpleChanges) {
    const properties: Record<string, unknown> = {};

    if (!this.instance) {
      return;
    }
    for (const key in changes) {
      if (changes.hasOwnProperty(key)) {
        properties[key] = changes[key].currentValue;
      }
    }

    this.instance.setProperties(properties, false);
    // Keep the source subtype, cache and event subscriptions when URLs change.
    if (changes['urls']) {
      this.instance.setUrls(this.urls);
    } else if (changes['url']) {
      this.instance.setUrl(this.url);
    }
    if (changes['attributions']) {
      this.instance.setAttributions(this.attributions);
    }
  }

  init() {
    const previous = this.instance;
    this.instance = new XYZ(this);

    this.instance.on('tileloadstart', (event: TileSourceEvent) => this.tileLoadStart.emit(event));
    this.instance.on('tileloadend', (event: TileSourceEvent) => this.tileLoadEnd.emit(event));
    this.instance.on('tileloaderror', (event: TileSourceEvent) => this.tileLoadError.emit(event));

    this.register(this.instance);
    previous?.dispose();
  }
}
