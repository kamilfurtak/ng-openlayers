import { Component, Input, OnInit, forwardRef, ChangeDetectionStrategy } from '@angular/core';
import BingMaps from 'ol/source/BingMaps.js';
import { SourceComponent } from './source.component';
import { LayerTileComponent } from '../layers/layertile.component';
import { LoadFunction } from 'ol/Tile.js';

@Component({
  selector: 'aol-source-bingmaps',
  template: ` <div class="aol-source-bingmaps"></div> `,
  providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceBingmapsComponent) }],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class SourceBingmapsComponent extends SourceComponent implements OnInit {
  @Input()
  cacheSize: number;
  @Input()
  hidpi: boolean;
  @Input()
  culture: string;
  @Input()
  key: string;
  @Input()
  imagerySet: 'Road' | 'Aerial' | 'AerialWithLabels' | 'collinsBart' | 'ordnanceSurvey' = 'Aerial';
  @Input()
  maxZoom: number;
  @Input()
  reprojectionErrorThreshold: number;
  @Input()
  tileLoadFunction: LoadFunction;
  @Input()
  wrapX: boolean;

  instance: BingMaps;

  constructor(layer: LayerTileComponent) {
    super(layer);
  }

  ngOnInit() {
    this.instance = new BingMaps(this);
    this.host.instance.setSource(this.instance);
  }
}
