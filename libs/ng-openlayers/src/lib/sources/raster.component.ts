import {
  AfterContentInit,
  Component,
  ContentChild,
  EventEmitter,
  forwardRef,
  Input,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';
import Raster from 'ol/source/Raster.js';
import Source from 'ol/source/Source.js';
import { Operation, RasterSourceEvent } from 'ol/source/Raster.js';

import { LayerImageComponent } from '../layers/layerimage.component';
import { SourceComponent } from './source.component';

@Component({
  selector: 'aol-source-raster',
  template: ` <ng-content></ng-content> `,
  providers: [
    {
      provide: SourceComponent,
      useExisting: forwardRef(() => SourceRasterComponent),
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class SourceRasterComponent extends SourceComponent implements AfterContentInit {
  @Input()
  operation?: Operation;
  @Input()
  threads?: number;
  @Input()
  lib?: Record<string, unknown>;
  @Input()
  operationType?: 'pixel' | 'image';

  @Output()
  beforeOperations = new EventEmitter<RasterSourceEvent>();
  @Output()
  afterOperations = new EventEmitter<RasterSourceEvent>();

  instance: Raster;
  sources: Source[] = [];

  @ContentChild(SourceComponent, { static: false })
  set source(sourceComponent: SourceComponent) {
    this.sources = [sourceComponent.instance];
    if (this.instance) {
      // Openlayer doesn't handle sources update. Just recreate Raster instance.
      this.init();
    }
  }

  constructor(layer: LayerImageComponent) {
    super(layer);
  }

  ngAfterContentInit() {
    this.init();
  }

  init() {
    this.instance = new Raster(this);
    this.instance.on('beforeoperations', (event: RasterSourceEvent) => this.beforeOperations.emit(event));
    this.instance.on('afteroperations', (event: RasterSourceEvent) => this.afterOperations.emit(event));
    this.register(this.instance);
  }
}
