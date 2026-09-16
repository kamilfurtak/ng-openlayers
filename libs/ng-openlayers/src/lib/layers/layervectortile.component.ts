import { Component, OnInit, Input, Optional, SimpleChanges, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import VectorTile from 'ol/layer/VectorTile.js';
import VectorTileSource from 'ol/source/VectorTile.js';
import Style from 'ol/style/Style.js';
import { MapComponent } from '../map.component';
import { LayerComponent } from './layer.component';
import { LayerGroupComponent } from './layergroup.component';
import { StyleFunction } from 'ol/style/Style.js';
import { VectorTileRenderType } from 'ol/layer/VectorTile.js';
import { OrderFunction } from 'ol/render.js';
import { BackgroundColor } from 'ol/layer/Base.js';

@Component({
  selector: 'aol-layer-vectortile',
  template: ` <ng-content></ng-content> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class LayerVectorTileComponent extends LayerComponent implements OnInit, OnChanges {
  public override instance: VectorTile<VectorTileSource>;

  @Input()
  renderBuffer: number;
  @Input()
  renderMode: VectorTileRenderType;
  @Input()
  renderOrder: OrderFunction;
  @Input()
  style: Style | Style[] | StyleFunction;
  @Input()
  updateWhileAnimating: boolean;
  @Input()
  updateWhileInteracting: boolean;
  @Input()
  visible: boolean;
  @Input()
  declutter: string | number | boolean;
  @Input()
  background: BackgroundColor;
  @Input()
  preload: number;
  @Input()
  useInterimTilesOnError: boolean;
  @Input()
  cacheSize: number;

  constructor(map: MapComponent, @Optional() group?: LayerGroupComponent) {
    super(group || map);
  }

  ngOnInit() {
    // console.log('creating ol.layer.VectorTile instance with:', this);
    this.instance = new VectorTile(this);
    super.ngOnInit();
  }

  ngOnChanges(changes: SimpleChanges) {
    super.ngOnChanges(changes);
  }
}
