import {
  Component,
  Input,
  OnInit,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  EventEmitter,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';
import View from 'ol/View.js';
import { MapComponent } from './map.component';
import { ObjectEvent } from 'ol/Object.js';
import { Extent } from 'ol/extent.js';
import { Coordinate } from 'ol/coordinate.js';
import { ProjectionLike } from 'ol/proj.js';
import { DrawEvent } from 'ol/interaction/Draw.js';
import BaseEvent from 'ol/events/Event.js';
import { EventsKey } from 'ol/events.js';
import { unByKey } from 'ol/Observable.js';

@Component({
  selector: 'aol-view',
  template: ` <ng-content></ng-content> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ViewComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  constrainRotation: boolean | number;
  @Input()
  enableRotation: boolean;
  @Input()
  extent: Extent;
  @Input()
  maxResolution: number;
  @Input()
  minResolution: number;
  @Input()
  maxZoom: number;
  @Input()
  minZoom: number;
  @Input()
  resolution: number;
  @Input()
  resolutions: number[];
  @Input()
  rotation: number;
  @Input()
  zoom: number;
  @Input()
  zoomFactor: number;
  @Input()
  center: Coordinate;
  @Input()
  projection: ProjectionLike;
  @Input()
  constrainOnlyCenter: boolean;
  @Input()
  smoothExtentConstraint: boolean;
  @Input()
  constrainResolution: boolean;
  @Input()
  smoothResolutionConstraint: boolean;
  @Input()
  showFullExtent: boolean;
  @Input()
  multiWorld: boolean;

  @Input()
  zoomAnimation = false;

  @Output()
  olChange = new EventEmitter<DrawEvent>();
  @Output()
  changeCenter = new EventEmitter<ObjectEvent>();
  @Output()
  changeResolution = new EventEmitter<ObjectEvent>();
  @Output()
  changeRotation = new EventEmitter<ObjectEvent>();
  @Output()
  olError = new EventEmitter<BaseEvent>();
  @Output()
  propertyChange = new EventEmitter<ObjectEvent>();

  public instance: View;
  public componentType = 'view';
  private eventKeys: EventsKey[] = [];

  constructor(private host: MapComponent) {}

  ngOnInit(): void {
    this.replaceView();
  }

  private replaceView(): void {
    unByKey(this.eventKeys);
    this.instance?.cancelAnimations();
    this.instance = new View(this);
    this.eventKeys = [
      this.instance.on('change', (event: DrawEvent) => this.olChange.emit(event)),
      this.instance.on('change:center', (event: ObjectEvent) => this.changeCenter.emit(event)),
      this.instance.on('change:resolution', (event: ObjectEvent) => this.changeResolution.emit(event)),
      this.instance.on('change:rotation', (event: ObjectEvent) => this.changeRotation.emit(event)),
      this.instance.on('error', (event: BaseEvent) => this.olError.emit(event)),
      this.instance.on('propertychange', (event: ObjectEvent) => this.propertyChange.emit(event)),
    ];
    // Bind before publishing: projected coordinates react to change:view.
    this.host.instance.setView(this.instance);
  }

  ngOnChanges(changes: SimpleChanges) {
    const properties: Record<string, unknown> = {};
    if (!this.instance) {
      return;
    }
    if (Object.prototype.hasOwnProperty.call(changes, 'projection')) {
      this.replaceView();
    }
    for (const key in changes) {
      if (Object.prototype.hasOwnProperty.call(changes, key)) {
        switch (key) {
          case 'zoom':
            /** Work-around: setting the zoom via setProperties does not work. */
            if (this.zoomAnimation) {
              this.instance.animate({ zoom: changes[key].currentValue });
            } else {
              this.instance.setZoom(changes[key].currentValue);
            }
            break;
          case 'projection':
            break;
          case 'center':
            /** Work-around: setting the center via setProperties does not work. */
            this.instance.setCenter(changes[key].currentValue);
            break;
          default:
            break;
        }
        properties[key] = changes[key].currentValue;
      }
    }
    // console.log('changes detected in aol-view, setting new properties: ', properties);
    this.instance.setProperties(properties, false);
  }

  ngOnDestroy() {
    unByKey(this.eventKeys);
    this.eventKeys = [];
    this.instance?.cancelAnimations();
  }
}
