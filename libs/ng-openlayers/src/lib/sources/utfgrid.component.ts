import { Component, Input, OnInit, forwardRef, ChangeDetectionStrategy } from '@angular/core';
import { SourceComponent } from './source.component';
import { LayerTileComponent } from '../layers/layertile.component';
import UTFGrid from 'ol/source/UTFGrid.js';
import { Config } from 'ol/source/TileJSON.js';

@Component({
  selector: 'aol-source-utfgrid',
  template: ` <ng-content></ng-content> `,
  providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceUTFGridComponent) }],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class SourceUTFGridComponent extends SourceComponent implements OnInit {
  @Input() tileJSON: Config;
  @Input() url: string;

  instance: UTFGrid;

  constructor(layer: LayerTileComponent) {
    super(layer);
  }

  ngOnInit() {
    this.instance = new UTFGrid(this);
    this.host.instance.setSource(this.instance);
  }
}
