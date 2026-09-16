import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';
import { MapComponent } from '../map.component';
import Draw from 'ol/interaction/Draw.js';
import { Collection, Feature } from 'ol';
import Vector from 'ol/source/Vector.js';
import Style from 'ol/style/Style.js';
import { DrawEvent, GeometryFunction, Options as DrawOptions } from 'ol/interaction/Draw.js';
import { StyleFunction } from 'ol/style/Style.js';
import { Condition } from 'ol/events/condition.js';
import { Type } from 'ol/geom/Geometry.js';
import { ObjectEvent } from 'ol/Object.js';
import BaseEvent from 'ol/events/Event.js';
import { EventsKey } from 'ol/events.js';
import { unByKey } from 'ol/Observable.js';

@Component({
  selector: 'aol-interaction-draw',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class DrawInteractionComponent implements OnInit, OnDestroy {
  @Input()
  clickTolerance?: number;
  @Input()
  features?: Collection<Feature>;
  @Input()
  source?: Vector;
  @Input()
  snapTolerance?: number;
  @Input()
  type: Type;
  @Input()
  maxPoints?: number;
  @Input()
  minPoints?: number;
  @Input()
  finishCondition?: Condition;
  @Input()
  style?: Style | Style[] | StyleFunction;
  @Input()
  geometryFunction?: GeometryFunction;
  @Input()
  geometryName?: string;
  @Input()
  condition?: Condition;
  @Input()
  freehandCondition?: Condition;
  @Input()
  freehand?: boolean;
  @Input()
  wrapX?: boolean;
  @Input()
  trace?: DrawOptions['trace'];
  @Input()
  traceSource?: Vector;

  @Output()
  olChange = new EventEmitter<DrawEvent>();
  @Output()
  olChangeActive = new EventEmitter<ObjectEvent>();
  @Output()
  olDrawAbort = new EventEmitter<DrawEvent>();
  @Output()
  drawAbort = new EventEmitter<DrawEvent>();
  @Output()
  drawEnd = new EventEmitter<DrawEvent>();
  @Output()
  drawStart = new EventEmitter<DrawEvent>();
  @Output()
  olError = new EventEmitter<BaseEvent>();
  @Output()
  propertyChange = new EventEmitter<ObjectEvent>();

  instance: Draw;
  private eventKeys: EventsKey[] = [];

  constructor(private map: MapComponent) {}

  ngOnInit() {
    this.instance = new Draw(this);
    this.eventKeys = [
      this.instance.on('change', (event: DrawEvent) => this.olChange.emit(event)),
      this.instance.on('change:active', (event: ObjectEvent) => this.olChangeActive.emit(event)),
      this.instance.on('drawabort', (event: DrawEvent) => {
        this.olDrawAbort.emit(event);
        this.drawAbort.emit(event);
      }),
      this.instance.on('drawend', (event: DrawEvent) => this.drawEnd.emit(event)),
      this.instance.on('drawstart', (event: DrawEvent) => this.drawStart.emit(event)),
      this.instance.on('error', (event: BaseEvent) => this.olError.emit(event)),
      this.instance.on('propertychange', (event: ObjectEvent) => this.propertyChange.emit(event)),
    ];
    this.map.instance.addInteraction(this.instance);
  }

  @HostListener('window:keydown.control.z')
  handleKeydown() {
    this.instance.removeLastPoint();
  }

  ngOnDestroy() {
    unByKey(this.eventKeys);
    this.eventKeys = [];
    this.map.instance.removeInteraction(this.instance);
    this.instance?.dispose();
  }
}
