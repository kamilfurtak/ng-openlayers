import { Component, Input, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import MouseWheelZoom from 'ol/interaction/MouseWheelZoom.js';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-interaction-mousewheelzoom',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class MouseWheelZoomInteractionComponent implements OnInit, OnDestroy {
  @Input()
  duration: number;
  @Input()
  timeout: number;
  @Input()
  useAnchor: boolean;

  instance: MouseWheelZoom;

  constructor(private map: MapComponent) {}

  ngOnInit() {
    this.instance = new MouseWheelZoom(this);
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
    this.instance?.dispose();
  }
}
