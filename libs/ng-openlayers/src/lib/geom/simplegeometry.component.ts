import { Input, OnInit, OnDestroy, Directive } from '@angular/core';
import { FeatureComponent } from '../feature.component';
import { MapComponent } from '../map.component';
import SimpleGeometry from 'ol/geom/SimpleGeometry.js';

@Directive()
export abstract class SimpleGeometryComponent implements OnInit, OnDestroy {
  @Input() srid: string;

  public instance: SimpleGeometry;
  public componentType = 'simple-geometry';

  protected constructor(
    protected map: MapComponent,
    protected host: FeatureComponent
  ) {}

  ngOnInit() {
    this.host.instance.setGeometry(this.instance);
  }

  ngOnDestroy() {
    if (this.host.instance.getGeometry() === this.instance) {
      this.host.instance.setGeometry(undefined);
    }
  }
}
