import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { createXYZ } from 'ol/tilegrid.js';
import TileGrid from 'ol/tilegrid/TileGrid.js';
import { Extent } from 'ol/extent.js';
import { Coordinate } from 'ol/coordinate.js';
import { Size } from 'ol/size.js';

@Component({
    selector: 'aol-tilegrid',
    template: '',
    standalone: true,
})
export class TileGridComponent implements OnInit, OnChanges {
  @Input()
  extent: Extent;
  @Input()
  maxZoom: number;
  @Input()
  minZoom: number;
  @Input()
  tileSize: number | Size;
  @Input()
  origin?: Coordinate;
  @Input()
  resolutions: number[];

  instance: TileGrid;

  ngOnInit() {
    if (!this.resolutions) {
      this.instance = createXYZ(this);
    } else {
      this.instance = new TileGrid(this);
    }
  }

  ngOnChanges() {
    if (!this.resolutions) {
      this.instance = createXYZ(this);
    } else {
      this.instance = new TileGrid(this);
    }
  }
}
