import { Component, Input, OnInit, forwardRef, ChangeDetectionStrategy } from '@angular/core';
import TileJSON from 'ol/source/TileJSON.js';
import { LayerTileComponent } from '../layers/layertile.component';
import { SourceComponent } from './source.component';

@Component({
  selector: 'aol-source-tilejson',
  template: ` <ng-content></ng-content> `,
  providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceTileJSONComponent) }],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class SourceTileJSONComponent extends SourceComponent implements OnInit {
  @Input()
  url: string;

  instance: TileJSON;

  constructor(layer: LayerTileComponent) {
    super(layer);
  }

  ngOnInit() {
    this.instance = new TileJSON(this);
    this.host.instance.setSource(this.instance);
  }
}
