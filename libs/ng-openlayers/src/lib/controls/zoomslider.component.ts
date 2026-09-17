import { Component, Input, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import ZoomSlider from 'ol/control/ZoomSlider.js';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-control-zoomslider',
  template: ` <ng-content></ng-content> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ControlZoomSliderComponent implements OnInit, OnDestroy {
  @Input()
  className: string;
  @Input()
  duration: number;
  @Input()
  maxResolution: number;
  @Input()
  minResolution: number;

  instance: ZoomSlider;

  constructor(private map: MapComponent) {
    // console.log('instancing aol-control-zoomslider');
  }

  ngOnInit() {
    this.instance = new ZoomSlider(this);
    this.map.instance.addControl(this.instance);
  }

  ngOnDestroy() {
    // console.log('removing aol-control-zoomslider');
    this.map.instance.removeControl(this.instance);
    this.instance.dispose();
  }
}
