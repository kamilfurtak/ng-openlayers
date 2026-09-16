import { Component, OnDestroy, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { MapComponent } from '../map.component';
import Modify from 'ol/interaction/Modify.js';
import { Collection, Feature } from 'ol';
import Style from 'ol/style/Style.js';
import Vector from 'ol/source/Vector.js';
import { ModifyEvent } from 'ol/interaction/Modify.js';
import { StyleFunction } from 'ol/style/Style.js';
import { Condition } from 'ol/events/condition.js';
import { ObjectEvent } from 'ol/Object.js';
import { DrawEvent } from 'ol/interaction/Draw.js';
import BaseEvent from 'ol/events/Event.js';
import { EventsKey } from 'ol/events.js';
import { unByKey } from 'ol/Observable.js';

@Component({
  selector: 'aol-interaction-modify',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ModifyInteractionComponent implements OnInit, OnDestroy {
  @Input()
  condition?: Condition;
  @Input()
  deleteCondition?: Condition;
  @Input()
  pixelTolerance?: number;
  @Input()
  style?: Style | Style[] | StyleFunction;
  @Input()
  features: Collection<Feature>;
  @Input()
  wrapX?: boolean;
  @Input()
  source?: Vector;

  @Output()
  olChange = new EventEmitter<DrawEvent>();
  @Output()
  olChangeActive = new EventEmitter<ObjectEvent>();
  @Output()
  olError = new EventEmitter<BaseEvent>();
  @Output()
  olModifyEnd = new EventEmitter<ModifyEvent>();
  @Output()
  olModifyStart = new EventEmitter<ModifyEvent>();
  @Output()
  propertyChange = new EventEmitter<ObjectEvent>();

  instance: Modify;
  private eventKeys: EventsKey[] = [];

  constructor(private map: MapComponent) {}

  ngOnInit() {
    this.instance = new Modify(this);
    this.eventKeys = [
      this.instance.on('change', (event: DrawEvent) => this.olChange.emit(event)),
      this.instance.on('change:active', (event: ObjectEvent) => this.olChangeActive.emit(event)),
      this.instance.on('error', (event: BaseEvent) => this.olError.emit(event)),
      this.instance.on('modifyend', (event: ModifyEvent) => this.olModifyEnd.emit(event)),
      this.instance.on('modifystart', (event: ModifyEvent) => this.olModifyStart.emit(event)),
      this.instance.on('propertychange', (event: ObjectEvent) => this.propertyChange.emit(event)),
    ];
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy() {
    unByKey(this.eventKeys);
    this.eventKeys = [];
    this.map.instance.removeInteraction(this.instance);
    this.instance?.dispose();
  }
}
