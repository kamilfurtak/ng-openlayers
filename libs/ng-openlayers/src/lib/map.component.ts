import {
  AfterViewInit,
  ChangeDetectionStrategy,
  inject,
  NgZone,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  OnDestroy,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Map } from 'ol';
import MapBrowserEvent from 'ol/MapBrowserEvent.js';
import MapEvent from 'ol/MapEvent.js';
import { ObjectEvent } from 'ol/Object.js';
import RenderEvent from 'ol/render/Event.js';
import Control from 'ol/control/Control.js';
import Interaction from 'ol/interaction/Interaction.js';
import BaseEvent from 'ol/events/Event.js';
import { ProjectionCode, ProjectionCodeDefinition } from './map.model';
import { register } from 'ol/proj/proj4.js';
import proj4 from 'proj4';
import { EventsKey } from 'ol/events.js';
import { unByKey } from 'ol/Observable.js';

let projectionsRegistered = false;

@Component({
  selector: 'aol-map',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div [style.width]="width" [style.height]="height" tabindex="0"></div>
    <ng-content></ng-content>
  `,
  standalone: true,
})
export class MapComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
  @Input()
  width = '100%';
  @Input()
  height = '100%';
  @Input()
  pixelRatio: number;
  @Input()
  keyboardEventTarget: HTMLElement | string;
  @Input()
  loadTilesWhileAnimating: boolean;
  @Input()
  loadTilesWhileInteracting: boolean;
  @Input()
  logo: string | boolean;
  @Input()
  renderer: 'canvas' | 'webgl';

  @Input()
  maxTilesLoading: number;
  @Input()
  moveTolerance: number;

  @Output()
  renderComplete = new EventEmitter<RenderEvent>();

  @Output()
  olChange = new EventEmitter<BaseEvent>();
  @Output()
  olChangeLayerGroup = new EventEmitter<ObjectEvent>();
  @Output()
  olChangeSize = new EventEmitter<ObjectEvent>();
  @Output()
  olChangeTarget = new EventEmitter<ObjectEvent>();
  @Output()
  olChangeView = new EventEmitter<ObjectEvent>();
  @Output()
  olClick = new EventEmitter<MapBrowserEvent>();
  @Output()
  dblClick = new EventEmitter<MapBrowserEvent>();
  @Output()
  olError = new EventEmitter<BaseEvent>();
  @Output()
  loadEnd = new EventEmitter<MapEvent>();
  @Output()
  loadStart = new EventEmitter<MapEvent>();
  @Output()
  moveEnd = new EventEmitter<MapEvent>();
  @Output()
  moveStart = new EventEmitter<MapEvent>();
  @Output()
  pointerDrag = new EventEmitter<MapBrowserEvent>();
  @Output()
  pointerMove = new EventEmitter<MapBrowserEvent>();
  @Output()
  olPostCompose = new EventEmitter<RenderEvent>();
  @Output()
  olPostRender = new EventEmitter<MapEvent>();
  @Output()
  olPreCompose = new EventEmitter<RenderEvent>();
  @Output()
  olPropertyChange = new EventEmitter<ObjectEvent>();
  @Output()
  postRender = new EventEmitter<MapEvent>();
  @Output()
  propertyChange = new EventEmitter<ObjectEvent>();
  @Output()
  singleClick = new EventEmitter<MapBrowserEvent>();

  public instance: Map;
  public componentType = 'map';
  private eventKeys: EventsKey[] = [];
  private readonly zone = inject(NgZone);

  // we pass empty arrays to not get default controls/interactions because we have our own directives
  controls: Control[] = [];
  interactions: Interaction[] = [];

  constructor(private host: ElementRef) {}

  ngOnInit() {
    this.zone.runOutsideAngular(() => this.createMap());
  }

  private createMap() {
    // console.log('creating ol.Map instance with:', this);
    this.setProjectionDefinitions();
    this.instance = new Map(this);
    this.instance.setTarget(this.host.nativeElement.firstElementChild);
    this.eventKeys = [
      this.instance.on('change', (event: BaseEvent) => this.emit(this.olChange, event)),
      this.instance.on('change:layergroup', (event: ObjectEvent) => this.emit(this.olChangeLayerGroup, event)),
      this.instance.on('change:size', (event: ObjectEvent) => this.emit(this.olChangeSize, event)),
      this.instance.on('change:target', (event: ObjectEvent) => this.emit(this.olChangeTarget, event)),
      this.instance.on('change:view', (event: ObjectEvent) => this.emit(this.olChangeView, event)),
      this.instance.on('click', (event: MapBrowserEvent) => this.emit(this.olClick, event)),
      this.instance.on('dblclick', (event: MapBrowserEvent) => this.emit(this.dblClick, event)),
      this.instance.on('error', (event: BaseEvent) => this.emit(this.olError, event)),
      this.instance.on('loadend', (event: MapEvent) => this.emit(this.loadEnd, event)),
      this.instance.on('loadstart', (event: MapEvent) => this.emit(this.loadStart, event)),
      this.instance.on('moveend', (event: MapEvent) => this.emit(this.moveEnd, event)),
      this.instance.on('movestart', (event: MapEvent) => this.emit(this.moveStart, event)),
      this.instance.on('pointerdrag', (event: MapBrowserEvent) => this.emit(this.pointerDrag, event)),
      this.instance.on('pointermove', (event: MapBrowserEvent) => this.emit(this.pointerMove, event)),
      this.instance.on('postcompose', (event: RenderEvent) => this.emit(this.olPostCompose, event)),
      this.instance.on('postrender', (event: MapEvent) => this.emit(this.olPostRender, event)),
      this.instance.on('postrender', (event: MapEvent) => this.emit(this.postRender, event)),
      this.instance.on('precompose', (event: RenderEvent) => this.emit(this.olPreCompose, event)),
      this.instance.on('propertychange', (event: ObjectEvent) => {
        this.emit(this.olPropertyChange, event);
        this.emit(this.propertyChange, event);
      }),
      this.instance.on('rendercomplete', (event: RenderEvent) => this.emit(this.renderComplete, event)),
      this.instance.on('singleclick', (event: MapBrowserEvent) => this.emit(this.singleClick, event)),
    ];
  }

  ngOnChanges(changes: SimpleChanges) {
    const properties: Record<string, unknown> = {};
    if (!this.instance) {
      return;
    }
    for (const key in changes) {
      if (Object.prototype.hasOwnProperty.call(changes, key)) {
        properties[key] = changes[key].currentValue;
      }
    }
    // console.log('changes detected in aol-map, setting new properties: ', properties);
    this.zone.runOutsideAngular(() => this.instance.setProperties(properties, false));
  }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => this.instance.updateSize());
  }

  ngOnDestroy(): void {
    unByKey(this.eventKeys);
    this.eventKeys = [];
    // OpenLayers owns its renderer, target observers and interaction handlers.
    this.instance?.dispose();
  }

  private emit<T>(output: EventEmitter<T>, event: T): void {
    // Pointer and render events must not schedule Angular work without a consumer.
    if (output.observed) {
      this.zone.run(() => output.emit(event));
    }
  }

  private setProjectionDefinitions(): void {
    if (projectionsRegistered) return;
    proj4.defs(ProjectionCode.Pl2000zone5, ProjectionCodeDefinition.Pl2000zone5);
    proj4.defs(ProjectionCode.Pl2000zone6, ProjectionCodeDefinition.Pl2000zone6);
    proj4.defs(ProjectionCode.Pl2000zone7, ProjectionCodeDefinition.Pl2000zone7);
    proj4.defs(ProjectionCode.Pl2000zone8, ProjectionCodeDefinition.Pl2000zone8);
    register(proj4);
    projectionsRegistered = true;
  }
}
