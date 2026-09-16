import { Component, OnDestroy, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import DragZoom from 'ol/interaction/DragZoom.js';
import { MapComponent } from '../map.component';
import { Condition } from 'ol/events/condition.js';

@Component({
  selector: 'aol-interaction-dragzoom',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class DragZoomInteractionComponent implements OnInit, OnDestroy {
  @Input()
  className: string;
  @Input()
  condition: Condition;
  @Input()
  duration: number;
  @Input()
  out: boolean;

  instance: DragZoom;

  constructor(private map: MapComponent) {}

  ngOnInit() {
    this.instance = new DragZoom(this);
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
}
