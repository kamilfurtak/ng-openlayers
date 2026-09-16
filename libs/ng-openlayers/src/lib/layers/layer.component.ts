import { OnDestroy, OnInit, OnChanges, Input, SimpleChanges, Directive } from '@angular/core';
import BaseLayer from 'ol/layer/Base.js';
import Event from 'ol/events/Event.js';
import { MapComponent } from '../map.component';
import { LayerGroupComponent } from './layergroup.component';
import { Extent } from 'ol/extent.js';
import { EventsKey } from 'ol/events.js';
import { unByKey } from 'ol/Observable.js';

type RenderableLayer = BaseLayer & {
  on(type: 'prerender' | 'postrender', listener: (evt: Event) => void): EventsKey;
  un(type: 'prerender' | 'postrender', listener: (evt: Event) => void): void;
};

@Directive()
export abstract class LayerComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  opacity: number;
  @Input()
  visible: boolean;
  @Input()
  extent: Extent;
  @Input()
  zIndex: number;
  @Input()
  minResolution: number;
  @Input()
  maxResolution: number;
  @Input()
  minZoom: number;
  @Input()
  maxZoom: number;

  @Input()
  prerender: (evt: Event) => void;
  @Input()
  postrender: (evt: Event) => void;

  public instance: BaseLayer;
  public componentType = 'layer';
  private renderKeys: Partial<Record<'prerender' | 'postrender', EventsKey>> = {};

  protected constructor(protected host: MapComponent | LayerGroupComponent) {}

  ngOnInit() {
    this.bindRenderEvent('prerender', this.prerender);
    this.bindRenderEvent('postrender', this.postrender);
    this.host.instance.getLayers().push(this.instance);
  }

  ngOnDestroy() {
    unByKey(Object.values(this.renderKeys));
    this.renderKeys = {};
    this.host.instance.getLayers().remove(this.instance);
    this.instance?.dispose();
  }

  private bindRenderEvent(type: 'prerender' | 'postrender', listener: (evt: Event) => void) {
    if (this.renderKeys[type]) unByKey(this.renderKeys[type]);
    delete this.renderKeys[type];
    if (listener) this.renderKeys[type] = (this.instance as RenderableLayer).on(type, listener);
  }

  ngOnChanges(changes: SimpleChanges) {
    const properties: Record<string, unknown> = {};
    if (!this.instance) {
      return;
    }
    for (const key in changes) {
      if (changes.hasOwnProperty(key)) {
        if (key === 'prerender' || key === 'postrender') {
          this.bindRenderEvent(key, changes[key].currentValue);
        } else {
          properties[key] = changes[key].currentValue;
        }
      }
    }
    // console.log('changes detected in aol-layer, setting new properties: ', properties);
    this.instance.setProperties(properties, false);
  }
}
