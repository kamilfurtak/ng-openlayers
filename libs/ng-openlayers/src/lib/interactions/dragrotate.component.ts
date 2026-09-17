import { Component, OnDestroy, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import DragRotate from 'ol/interaction/DragRotate.js';
import { MapComponent } from '../map.component';
import { Condition } from 'ol/events/condition.js';

@Component({
  selector: 'aol-interaction-dragrotate',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class DragRotateInteractionComponent implements OnInit, OnDestroy {
  @Input()
  condition: Condition;
  @Input()
  duration: number;

  instance: DragRotate;

  constructor(private map: MapComponent) {}

  ngOnInit() {
    this.instance = new DragRotate(this);
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
    this.instance?.dispose();
  }
}
