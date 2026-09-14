import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { DragRotateAndZoom } from 'ol/interaction.js';
import { MapComponent } from '../map.component';
import { Condition } from 'ol/events/condition.js';

@Component({
    selector: 'aol-interaction-dragrotateandzoom',
    template: '',
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
