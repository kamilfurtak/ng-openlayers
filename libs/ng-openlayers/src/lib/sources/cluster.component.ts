import {
  AfterContentInit,
  Component,
  ContentChild,
  forwardRef,
  Input,
  OnChanges,
  SimpleChanges,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Feature } from 'ol';
import { Point } from 'ol/geom.js';
import Cluster from 'ol/source/Cluster.js';
import Vector from 'ol/source/Vector.js';

import { LayerVectorComponent } from '../layers/layervector.component';
import { SourceComponent } from './source.component';
import { SourceVectorComponent } from './vector.component';

@Component({
  selector: 'aol-source-cluster',
  template: ` <ng-content></ng-content> `,
  providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceClusterComponent) }],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class SourceClusterComponent extends SourceComponent implements AfterContentInit, OnChanges {
  @Input()
  distance: number;
  @Input()
  minDistance: number;
  @Input()
  geometryFunction?: (feature: Feature) => Point;
  @Input()
  wrapX?: boolean;

  @ContentChild(SourceVectorComponent, { static: false })
  sourceVectorComponent: SourceVectorComponent;

  instance: Cluster;
  source: Vector;

  constructor(layer: LayerVectorComponent) {
    super(layer);
  }

  ngAfterContentInit() {
    this.source = this.sourceVectorComponent.instance;

    this.instance = new Cluster(this);
    this.host.instance.setSource(this.instance);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.instance && changes.hasOwnProperty('distance')) {
      this.instance.setDistance(this.distance);
    }
    if (this.instance && changes['minDistance']) {
      this.instance.setMinDistance(this.minDistance);
    }
  }

  override ngOnDestroy() {
    // Cluster subscribes to its wrapped source independently of the layer.
    this.instance?.setSource(null);
    super.ngOnDestroy();
  }
}
