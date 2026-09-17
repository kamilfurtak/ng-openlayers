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
import View, { ViewOptions } from 'ol/View.js';
import { MapComponent } from './map.component';
import { ObjectEvent } from 'ol/Object.js';
import { Extent } from 'ol/extent.js';
import { Coordinate } from 'ol/coordinate.js';
import { ProjectionLike, transform, getUserProjection } from 'ol/proj.js';
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
  olChange = new EventEmitter<BaseEvent>();
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

  private replaceView(changes: SimpleChanges = {}): void {
    const previous = this.instance;
    const options: ViewOptions = Object.fromEntries(
      (
        [
          'constrainRotation',
          'enableRotation',
          'extent',
          'maxResolution',
          'minResolution',
          'maxZoom',
          'minZoom',
          'resolution',
          'resolutions',
          'rotation',
          'zoom',
          'zoomFactor',
          'center',
          'projection',
          'constrainOnlyCenter',
          'smoothExtentConstraint',
          'constrainResolution',
          'smoothResolutionConstraint',
          'showFullExtent',
          'multiWorld',
        ] as const
      ).map((key) => [key, this[key]])
    );
    if (previous) {
      options.center = previous.getCenter();
      options.rotation = previous.getRotation();
      options.resolution = previous.getResolution();
      options.zoom = undefined;
      if (changes['projection']) {
        if (options.center && !getUserProjection()) {
          options.center = transform(options.center, previous.getProjection(), options.projection ?? 'EPSG:3857');
        }
        options.resolution = undefined;
        options.zoom = previous.getZoom();
      }
      for (const key of ['center', 'rotation', 'resolution', 'zoom'] as const) {
        if (changes[key]) Object.assign(options, { [key]: changes[key].currentValue });
      }
      if (changes['zoom'] && !changes['resolution']) options.resolution = undefined;
    }
    unByKey(this.eventKeys);
    previous?.cancelAnimations();
    this.instance = new View(options);
    this.eventKeys = [
      this.instance.on('change', (event: BaseEvent) => this.olChange.emit(event)),
      this.instance.on('change:center', (event: ObjectEvent) => this.changeCenter.emit(event)),
      this.instance.on('change:resolution', (event: ObjectEvent) => this.changeResolution.emit(event)),
      this.instance.on('change:rotation', (event: ObjectEvent) => this.changeRotation.emit(event)),
      this.instance.on('error', (event: BaseEvent) => this.olError.emit(event)),
      this.instance.on('propertychange', (event: ObjectEvent) => this.propertyChange.emit(event)),
    ];
    // Bind before publishing: projected coordinates react to change:view.
    this.host.instance.setView(this.instance);
    // Coordinate children also observe change:view. Preserve the current camera
    // after they update their projection, including a user-panned center.
    if (previous && options.center) this.instance.setCenter(options.center);
    previous?.dispose();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!this.instance) return;
    const setters = new Set([
      'zoom',
      'center',
      'rotation',
      'resolution',
      'minZoom',
      'maxZoom',
      'constrainResolution',
      'zoomAnimation',
    ]);
    // OpenLayers constraints are initialized in the constructor; setProperties alone
    // updates observable metadata but leaves those constraints and target state stale.
    if (Object.keys(changes).some((key) => !setters.has(key))) {
      this.replaceView(changes);
    }
    for (const key of ['minZoom', 'maxZoom', 'constrainResolution', 'center', 'rotation', 'resolution', 'zoom']) {
      if (!changes[key]) continue;
      const value = changes[key].currentValue;
      switch (key) {
        case 'minZoom':
          this.instance.setMinZoom(value);
          break;
        case 'maxZoom':
          this.instance.setMaxZoom(value);
          break;
        case 'constrainResolution':
          this.instance.setConstrainResolution(value);
          break;
        case 'center':
          this.instance.setCenter(value);
          break;
        case 'rotation':
          this.instance.setRotation(value);
          break;
        case 'resolution':
          this.instance.setResolution(value);
          break;
        case 'zoom':
          if (this.zoomAnimation) this.instance.animate({ zoom: value });
          else this.instance.setZoom(value);
          break;
      }
    }
  }

  ngOnDestroy() {
    unByKey(this.eventKeys);
    this.eventKeys = [];
    this.instance?.cancelAnimations();
    if (this.instance && this.host.instance.getView() === this.instance) this.host.instance.setView(undefined);
    this.instance?.dispose();
  }
}
