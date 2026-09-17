import { Component, Input, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import ZoomToExtent from 'ol/control/ZoomToExtent.js';
import { MapComponent } from '../map.component';
import { Extent } from 'ol/extent.js';

@Component({
  selector: 'aol-control-zoomtoextent',
  template: ` <ng-content></ng-content> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ControlZoomToExtentComponent implements OnInit, OnDestroy {
  @Input()
  className: string;
  @Input()
  label: string | HTMLElement;
  @Input()
  tipLabel: string;
  @Input()
  extent: Extent;

  instance: ZoomToExtent;

  constructor(private map: MapComponent) {
    // console.log('instancing aol-control-zoomtoextent');
  }

  ngOnInit() {
    this.instance = new ZoomToExtent(this);
    this.map.instance.addControl(this.instance);
  }

  ngOnDestroy() {
    // console.log('removing aol-control-zoomtoextent');
    this.map.instance.removeControl(this.instance);
    this.instance.dispose();
  }
}
