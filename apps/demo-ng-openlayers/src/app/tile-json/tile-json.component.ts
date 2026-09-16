import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SourceTileJSONComponent } from 'ng-openlayers';
import { LayerTileComponent } from 'ng-openlayers';
import { DefaultControlComponent } from 'ng-openlayers';
import { DefaultInteractionComponent } from 'ng-openlayers';
import { CoordinateComponent } from 'ng-openlayers';
import { ViewComponent } from 'ng-openlayers';
import { MapComponent } from 'ng-openlayers';

@Component({
  selector: 'app-tile-json',
  template: `
    <aol-map #map width="100%" height="100%">
      <aol-view [zoom]="3">
        <aol-coordinate [x]="-2.269282" [y]="46.987247" [srid]="'EPSG:4326'"></aol-coordinate>
      </aol-view>

      <aol-interaction-default></aol-interaction-default>
      <aol-control-defaults></aol-control-defaults>
      <aol-layer-tile>
        <aol-source-tilejson url="/assets/tilejson.json"></aol-source-tilejson>
      </aol-layer-tile>
    </aol-map>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MapComponent,
    ViewComponent,
    CoordinateComponent,
    DefaultInteractionComponent,
    DefaultControlComponent,
    LayerTileComponent,
    SourceTileJSONComponent,
  ],
})
export class TileJsonComponent {
  constructor() {}
}
