import { Directive, EventEmitter, Output } from '@angular/core';
import { FeatureLike } from 'ol/Feature.js';
import FeatureFormat from 'ol/format/Feature.js';

@Directive()
export class FormatComponent {
  @Output() readonly instanceChange = new EventEmitter<FeatureFormat<FeatureLike>>();
  public instance: FeatureFormat<FeatureLike>;
  public componentType = 'format';
}
