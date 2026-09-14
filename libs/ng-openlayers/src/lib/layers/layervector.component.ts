import { Component, OnDestroy, OnInit, Input, Optional, OnChanges, SimpleChanges } from '@angular/core';
import { MapComponent } from '../map.component';
import { Vector } from 'ol/layer.js';
import VectorSource from 'ol/source/Vector.js';
import { Style } from 'ol/style.js';
import { StyleFunction } from 'ol/style/Style.js';
import { LayerComponent } from './layer.component';
import { LayerGroupComponent } from './layergroup.component';

@Component({
    selector: 'aol-layer-vector',
    template: ` <ng-content></ng-content> `,
    standalone: true,
})
export class LayerVectorComponent extends LayerComponent implements OnInit, OnDestroy, OnChanges {
  public override instance: Vector<VectorSource>;

  @Input()
  renderBuffer: number;

  @Input()
  style: Style | Style[] | StyleFunction;

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
  }
}
