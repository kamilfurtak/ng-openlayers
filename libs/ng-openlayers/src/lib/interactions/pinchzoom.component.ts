import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { PinchZoom } from 'ol/interaction';
import { MapComponent } from '../map.component';

@Component({
    selector: 'aol-interaction-pinchzoom',
    template: '',
    standalone: true,
})
export class PinchZoomInteractionComponent implements OnInit, OnDestroy {
  @Input()
  duration: number;
  @Input()
  constrainResolution: boolean;

  instance: PinchZoom;

  constructor(private map: MapComponent) {}

  ngOnInit() {
    this.instance = new PinchZoom(this);
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
}
