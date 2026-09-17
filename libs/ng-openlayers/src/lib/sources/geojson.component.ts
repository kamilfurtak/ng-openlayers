import { Component, Input, OnInit, forwardRef, ChangeDetectionStrategy } from '@angular/core';
import { LayerVectorComponent } from '../layers/layervector.component';
import { SourceComponent } from './source.component';
import FeatureFormat from 'ol/format/Feature.js';
import Vector from 'ol/source/Vector.js';
import GeoJSON from 'ol/format/GeoJSON.js';
import { ProjectionLike } from 'ol/proj.js';

@Component({
  selector: 'aol-source-geojson',
  template: ` <ng-content></ng-content> `,
  providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceGeoJSONComponent) }],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class SourceGeoJSONComponent extends SourceComponent implements OnInit {
  @Input()
  defaultDataProjection: ProjectionLike;
  @Input()
  featureProjection: ProjectionLike;
  @Input()
  geometryName: string;
  @Input()
  url: string;

  instance: Vector;
  format: FeatureFormat;

  constructor(layer: LayerVectorComponent) {
    super(layer);
  }

  ngOnInit() {
    this.format = new GeoJSON({
      dataProjection: this.defaultDataProjection,
      featureProjection: this.featureProjection,
      geometryName: this.geometryName,
    });
    this.instance = new Vector(this);
    this.host.instance.setSource(this.instance);
  }
}
