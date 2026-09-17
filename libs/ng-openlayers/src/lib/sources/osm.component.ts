import {
  AfterContentInit,
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Optional,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';
import OSM from 'ol/source/OSM.js';
import { AttributionLike } from 'ol/source/Source.js';
import { TileSourceEvent } from 'ol/source/Tile.js';
import { LoadFunction } from 'ol/Tile.js';
import { LayerTileComponent } from '../layers/layertile.component';
import { SourceComponent } from './source.component';
import { SourceXYZComponent } from './xyz.component';

@Component({
  selector: 'aol-source-osm',
  template: ` <div class="aol-source-osm"></div> `,
  providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceOsmComponent) }],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class SourceOsmComponent extends SourceXYZComponent implements AfterContentInit {
  @Input()
  attributions: AttributionLike;
  @Input()
  cacheSize: number;
  @Input()
  crossOrigin: string;
  @Input()
  maxZoom: number;
  @Input()
  opaque: boolean;
  @Input()
  reprojectionErrorThreshold: number;
  @Input()
  tileLoadFunction: LoadFunction;
  @Input()
  url: string;
  @Input()
  wrapX: boolean;

  @Output()
  tileLoadStart = new EventEmitter<TileSourceEvent>();
  @Output()
  tileLoadEnd = new EventEmitter<TileSourceEvent>();
  @Output()
  tileLoadError = new EventEmitter<TileSourceEvent>();

  instance: OSM;

  constructor(
    @Optional()
    protected layer?: LayerTileComponent
  ) {
    super(layer);
  }

  override init() {
    const previous = this.instance;
    this.instance = new OSM(this);
    this.instance.on('tileloadstart', (event: TileSourceEvent) => this.tileLoadStart.emit(event));
    this.instance.on('tileloadend', (event: TileSourceEvent) => this.tileLoadEnd.emit(event));
    this.instance.on('tileloaderror', (event: TileSourceEvent) => this.tileLoadError.emit(event));
    this.register(this.instance);
    previous?.dispose();
  }
}
