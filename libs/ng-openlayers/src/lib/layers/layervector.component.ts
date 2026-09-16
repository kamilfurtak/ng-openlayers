import {
  Component,
  OnDestroy,
  OnInit,
  Input,
  Optional,
  OnChanges,
  SimpleChanges,
  ChangeDetectionStrategy,
} from '@angular/core';
import { MapComponent } from '../map.component';
import Vector from 'ol/layer/Vector.js';
import VectorSource from 'ol/source/Vector.js';
import { StyleLike } from 'ol/style/Style.js';
import { FlatStyleLike } from 'ol/style/flat.js';
import { LayerComponent } from './layer.component';
import { LayerGroupComponent } from './layergroup.component';

@Component({
  selector: 'aol-layer-vector',
  template: ` <ng-content></ng-content> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class LayerVectorComponent extends LayerComponent implements OnInit, OnDestroy, OnChanges {
  public override instance: Vector<VectorSource>;

  @Input()
  renderBuffer: number;

  @Input()
  style: StyleLike | FlatStyleLike;

  @Input()
  updateWhileAnimating: boolean;

  @Input()
  updateWhileInteracting: boolean;

  constructor(map: MapComponent, @Optional() group?: LayerGroupComponent) {
    super(group || map);
  }

  ngOnInit() {
    // console.log('creating ol.layer.Vector instance with:', this);
    this.instance = new Vector(this);
    super.ngOnInit();
  }

  ngOnChanges(changes: SimpleChanges) {
    super.ngOnChanges(changes);
    if (this.instance && changes['style']) this.instance.setStyle(this.style);
  }
}
