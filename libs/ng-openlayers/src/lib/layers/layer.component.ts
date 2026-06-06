import { OnDestroy, OnInit, OnChanges, Input, SimpleChanges, Directive } from '@angular/core';
import BaseLayer from 'ol/layer/Base';
import Event from 'ol/events/Event';
import { MapComponent } from '../map.component';
import { LayerGroupComponent } from './layergroup.component';
import { Extent } from 'ol/extent';

type RenderableLayer = BaseLayer & {
  on(type: 'prerender' | 'postrender', listener: (evt: Event) => void): unknown;
  un(type: 'prerender' | 'postrender', listener: (evt: Event) => void): void;
};

@Directive()
// eslint-disable-next-line @angular-eslint/directive-class-suffix
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
  prerender: (evt: Event) => void;
  @Input()
  postrender: (evt: Event) => void;

  public instance: BaseLayer;
  public componentType = 'layer';

  protected constructor(protected host: MapComponent | LayerGroupComponent) {}

  ngOnInit() {
    if (this.prerender !== null && this.prerender !== undefined) {
      (this.instance as RenderableLayer).on('prerender', this.prerender);
    }
    if (this.postrender !== null && this.postrender !== undefined) {
      (this.instance as RenderableLayer).on('postrender', this.postrender);
    }
    this.host.instance.getLayers().push(this.instance);
  }

  ngOnDestroy() {
    this.host.instance.getLayers().remove(this.instance);
  }

  ngOnChanges(changes: SimpleChanges) {
    const properties: Record<string, unknown> = {};
    if (!this.instance) {
      return;
    }
    for (const key in changes) {
      if (changes.hasOwnProperty(key)) {
        properties[key] = changes[key].currentValue;
        if (key === 'prerender') {
          (this.instance as RenderableLayer).un('prerender', changes[key].previousValue);
          (this.instance as RenderableLayer).on('prerender', changes[key].currentValue);
        }
        if (key === 'postrender') {
          (this.instance as RenderableLayer).un('postrender', changes[key].previousValue);
          (this.instance as RenderableLayer).on('postrender', changes[key].currentValue);
        }
      }
    }
    // console.log('changes detected in aol-layer, setting new properties: ', properties);
    this.instance.setProperties(properties, false);
  }
}
