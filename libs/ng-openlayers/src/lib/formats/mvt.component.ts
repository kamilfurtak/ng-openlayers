import { Component, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormatComponent } from './format.component';
import MVT from 'ol/format/MVT.js';
import { FeatureClass, FeatureLike } from 'ol/Feature.js';

@Component({
  selector: 'aol-format-mvt',
  template: '',
  providers: [{ provide: FormatComponent, useExisting: forwardRef(() => FormatMVTComponent) }],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
