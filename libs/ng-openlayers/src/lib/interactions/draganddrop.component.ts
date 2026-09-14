import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DragAndDrop } from 'ol/interaction.js';
import FeatureFormat from 'ol/format/Feature.js';
import { MapComponent } from '../map.component';
import { ProjectionLike } from 'ol/proj.js';

@Component({
    selector: 'aol-interaction-draganddrop',
    template: '',
    standalone: true,
})
export class DragAndDropInteractionComponent implements OnInit, OnDestroy {
  @Input()
  formatConstructors: FeatureFormat[];
  @Input()
  projection: ProjectionLike;
  @Input()
  target: HTMLElement;

  instance: DragAndDrop;

  constructor(private map: MapComponent) {}

  ngOnInit() {
    this.instance = new DragAndDrop(this);
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
}
