import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { DragBox } from 'ol/interaction.js';
import { MapComponent } from '../map.component';
import { Condition } from 'ol/events/condition.js';
import { EndCondition } from 'ol/interaction/DragBox.js';

@Component({
    selector: 'aol-interaction-dragbox',
    template: '',
    standalone: true,
})
export class DragBoxInteractionComponent implements OnInit, OnDestroy {
  @Input()
  className: string;
  @Input()
  condition: Condition;
  @Input()
  boxEndCondition: EndCondition;

  instance: DragBox;

  constructor(private map: MapComponent) {}

  ngOnInit() {
    this.instance = new DragBox(this);
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
}
