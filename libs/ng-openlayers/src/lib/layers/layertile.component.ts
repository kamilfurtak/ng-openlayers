import { Component, OnDestroy, OnInit, Input, Optional, OnChanges, SimpleChanges } from '@angular/core';
import { Tile } from 'ol/layer';
import TileSource from 'ol/source/Tile';
import { MapComponent } from '../map.component';
import { LayerComponent } from './layer.component';
import { LayerGroupComponent } from './layergroup.component';

@Component({
    selector: 'aol-layer-tile',
    template: ` <ng-content></ng-content> `,
    standalone: true,
})
export class LayerTileComponent extends LayerComponent implements OnInit, OnDestroy, OnChanges {
  public override instance: Tile<TileSource>;

  @Input()
  preload: number;
  @Input()
  useInterimTilesOnError: boolean;

  constructor(map: MapComponent, @Optional() group?: LayerGroupComponent) {
    super(group || map);
  }

  ngOnInit() {
    // console.log('creating ol.layer.Tile instance with:', this);
    this.instance = new Tile(this);
    super.ngOnInit();
  }

  ngOnChanges(changes: SimpleChanges) {
    super.ngOnChanges(changes);
  }
}
