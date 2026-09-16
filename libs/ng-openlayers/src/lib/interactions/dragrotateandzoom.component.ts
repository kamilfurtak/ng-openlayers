import { Component, OnDestroy, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import DragRotateAndZoom from 'ol/interaction/DragRotateAndZoom.js';
import { MapComponent } from '../map.component';
import { Condition } from 'ol/events/condition.js';

@Component({
  selector: 'aol-interaction-dragrotateandzoom',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class DragRotateAndZoomInteractionComponent implements OnInit, OnDestroy {
  @Input()
  condition: Condition;
  @Input()
  duration: number;

  instance: DragRotateAndZoom;

  constructor(private map: MapComponent) {}

  ngOnInit() {
    this.instance = new DragRotateAndZoom(this);
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
}
