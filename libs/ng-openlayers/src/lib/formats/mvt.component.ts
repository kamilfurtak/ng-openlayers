import { Component, forwardRef, Input } from '@angular/core';
import { FormatComponent } from './format.component';
import { MVT } from 'ol/format';
import { FeatureClass, FeatureLike } from 'ol/Feature';

@Component({
    selector: 'aol-format-mvt',
    template: '',
    providers: [{ provide: FormatComponent, useExisting: forwardRef(() => FormatMVTComponent) }],
    standalone: true,
})
export class FormatMVTComponent extends FormatComponent {
  @Input()
  featureClass: FeatureClass;
  @Input()
  geometryName: string;
  @Input()
  layerName: string;
  @Input()
  layers: string[];

  instance: MVT<FeatureLike>;

  constructor() {
    super();
    this.instance = new MVT<FeatureLike>(this);
  }
}
