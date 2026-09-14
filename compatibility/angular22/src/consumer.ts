import { Component, signal } from '@angular/core';
import { MapComponent, ViewComponent, CoordinateComponent } from 'ng-openlayers';
@Component({
  selector: 'compat-root', standalone: true,
  imports: [MapComponent, ViewComponent, CoordinateComponent],
  template: `<aol-map width="320px" height="240px"><aol-view [zoom]="5" [projection]="projection()"><aol-coordinate [x]="19" [y]="50" srid="EPSG:4326" /></aol-view></aol-map>`,
})
export class Consumer { projection = signal('EPSG:3857'); }
