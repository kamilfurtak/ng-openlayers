import { Component, forwardRef, Input, OnChanges, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
export class FormatMVTComponent extends FormatComponent implements OnInit, OnChanges {
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
  }

  ngOnInit() {
    if (!this.instance) this.ngOnChanges();
  }

  ngOnChanges() {
    this.instance = new MVT<FeatureLike>(this);
    this.instanceChange.emit(this.instance);
  }
}
