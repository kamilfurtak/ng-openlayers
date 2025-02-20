import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { DragRotate } from 'ol/interaction';
import { MapComponent } from '../map.component';
import { Condition } from 'ol/events/condition';

@Component({
    selector: 'aol-interaction-dragrotate',
    template: '',
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
  }
}
