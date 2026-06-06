import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Collection, Feature } from 'ol';
import BaseEvent from 'ol/events/Event';
import { SnapEvent } from 'ol/events/SnapEvent';
import { Snap } from 'ol/interaction';
import { ObjectEvent } from 'ol/Object';
import { Vector } from 'ol/source';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-interaction-snap',
  template: '',
  standalone: true,
})
export class SnapInteractionComponent implements OnInit, OnDestroy {
  @Input()
  features?: Collection<Feature>;
  @Input()
  source?: Vector;
  @Input()
  edge?: boolean;
  @Input()
  vertex?: boolean;
  @Input()
  pixelTolerance?: number;

  @Output()
  olChange = new EventEmitter<BaseEvent>();
  @Output()
  propertyChange = new EventEmitter<ObjectEvent>();
  @Output()
  snap = new EventEmitter<SnapEvent>();

  instance: Snap;

  constructor(private map: MapComponent) {}

  ngOnInit() {
    this.instance = new Snap(this);

    this.instance.on('change', (event: BaseEvent) => this.olChange.emit(event));
    this.instance.on('propertychange', (event: ObjectEvent) => this.propertyChange.emit(event));
    this.instance.on('snap', (event: SnapEvent) => this.snap.emit(event));

    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
}
