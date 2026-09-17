import { Component, Input, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import DoubleClickZoom from 'ol/interaction/DoubleClickZoom.js';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-interaction-doubleclickzoom',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class DoubleClickZoomInteractionComponent implements OnInit, OnDestroy {
  @Input()
  duration: number;
  @Input()
  delta: number;

  instance: DoubleClickZoom;

  constructor(private map: MapComponent) {}

  ngOnInit() {
    this.instance = new DoubleClickZoom(this);
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
    this.instance?.dispose();
  }
}
