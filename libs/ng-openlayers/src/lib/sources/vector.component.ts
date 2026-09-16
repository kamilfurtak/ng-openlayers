import { Component, Input, OnInit, forwardRef, ChangeDetectionStrategy } from '@angular/core';
import Vector from 'ol/source/Vector.js';
import Feature from 'ol/format/Feature.js';
import { LayerVectorComponent } from '../layers/layervector.component';
import { SourceComponent } from './source.component';
import { LoadingStrategy } from 'ol/source/Vector.js';

@Component({
  selector: 'aol-source-vector',
  template: ` <ng-content></ng-content> `,
  providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceVectorComponent) }],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class SourceVectorComponent extends SourceComponent implements OnInit {
  @Input()
  overlaps: boolean;
  @Input()
  useSpatialIndex: boolean;
  @Input()
  wrapX: boolean;
  @Input()
  url: string;
  @Input()
  format: Feature;
  @Input()
  strategy: LoadingStrategy;

  instance: Vector;

  constructor(layer: LayerVectorComponent) {
    super(layer);
  }

  ngOnInit() {
    this.instance = new Vector(this);
    this.host.instance.setSource(this.instance);
  }
}
