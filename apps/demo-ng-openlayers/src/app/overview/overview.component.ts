import { Component } from '@angular/core';
import { SourceOsmComponent } from 'ng-openlayers';
import { LayerTileComponent } from 'ng-openlayers';
import { CoordinateComponent } from 'ng-openlayers';
import { ViewComponent } from 'ng-openlayers';
import { ControlOverviewMapComponent } from 'ng-openlayers';
import { DefaultControlComponent } from 'ng-openlayers';
import { DefaultInteractionComponent } from 'ng-openlayers';
import { MapComponent } from 'ng-openlayers';

@Component({
    selector: 'app-root',
    template: `
    <aol-map width="100%" height="100%">
      <aol-interaction-default></aol-interaction-default>
      <aol-control-defaults></aol-control-defaults>
      <aol-control-overviewmap></aol-control-overviewmap>
      <aol-view #view [zoom]="zoom">
        <aol-coordinate [x]="5" [y]="45" [srid]="'EPSG:4326'"></aol-coordinate>
      </aol-view>
      <aol-layer-tile #osm [opacity]="1"> <aol-source-osm></aol-source-osm> </aol-layer-tile>
    </aol-map>
  `,
    imports: [
        MapComponent,
        DefaultInteractionComponent,
        DefaultControlComponent,
        ControlOverviewMapComponent,
        ViewComponent,
        CoordinateComponent,
        LayerTileComponent,
        SourceOsmComponent,
    ]
})
export class OverviewComponent {
  public zoom = 15;
}
