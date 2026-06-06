import { Component, Input, OnChanges, OnInit, Optional } from '@angular/core';
import { transform } from 'ol/proj';
import { ObjectEvent } from 'ol/Object';
import { MapComponent } from './map.component';
import { GeometryPointComponent } from './geom/geometrypoint.component';
import { GeometryCircleComponent } from './geom/geometrycircle.component';
import { ViewComponent } from './view.component';
import { OverlayComponent } from './overlay.component';

type CoordinateHost = {
  componentType: string;
  instance: {
    setCenter?: (coordinate: number[]) => void;
    setCoordinates?: (coordinate: number[]) => void;
    setPosition?: (coordinate: number[]) => void;
  };
};

@Component({
  selector: 'aol-coordinate',
  template: ` <div class="aol-coordinate"></div> `,
  standalone: true,
})
export class CoordinateComponent implements OnChanges, OnInit {
  @Input()
  x: number;
  @Input()
  y: number;
  @Input()
  srid = 'EPSG:3857';

  private host: CoordinateHost;
  private mapSrid = 'EPSG:3857';

  constructor(
    private map: MapComponent,
    @Optional() viewHost: ViewComponent,
    @Optional() geometryPointHost: GeometryPointComponent,
    @Optional() geometryCircleHost: GeometryCircleComponent,
    @Optional() overlayHost: OverlayComponent
  ) {
    // console.log('instancing aol-coordinate');
    if (geometryPointHost !== null) {
      this.host = geometryPointHost as unknown as CoordinateHost;
    } else if (geometryCircleHost !== null) {
      this.host = geometryCircleHost as unknown as CoordinateHost;
    } else if (viewHost !== null) {
      this.host = viewHost as unknown as CoordinateHost;
    } else if (overlayHost !== null) {
      this.host = overlayHost as unknown as CoordinateHost;
    }
  }

  ngOnInit() {
    this.map.instance.on('change:view', (e) => this.onMapViewChanged(e));
    this.mapSrid = this.map.instance.getView().getProjection().getCode();
    this.transformCoordinates();
  }

  ngOnChanges() {
    this.transformCoordinates();
  }

  private onMapViewChanged(event: ObjectEvent) {
    this.mapSrid = event.target.get(event.key).getProjection().getCode();
    this.transformCoordinates();
  }

  private transformCoordinates() {
    let transformedCoordinates: number[];

    if (this.srid === this.mapSrid) {
      transformedCoordinates = [this.x, this.y];
    } else {
      transformedCoordinates = transform([this.x, this.y], this.srid, this.mapSrid);
    }

    switch (this.host.componentType) {
      case 'geometry-point':
        this.host.instance.setCoordinates?.(transformedCoordinates);
        break;
      case 'geometry-circle':
      case 'view':
        this.host.instance.setCenter?.(transformedCoordinates);
        break;
      case 'overlay':
        this.host.instance.setPosition?.(transformedCoordinates);
        break;
    }
  }
}
