import { Component, Input, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import KeyboardZoom from 'ol/interaction/KeyboardZoom.js';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-interaction-keyboardzoom',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class KeyboardZoomInteractionComponent implements OnInit, OnDestroy {
  @Input()
  duration: number;
  @Input()
  delta: number;

  instance: KeyboardZoom;

  constructor(private map: MapComponent) {}

  ngOnInit() {
    this.instance = new KeyboardZoom(this);
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
    this.instance?.dispose();
  }
}
