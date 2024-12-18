import { Component, OnInit } from '@angular/core';
import { StyleIconComponent } from 'ng-openlayers';
import { StyleComponent } from 'ng-openlayers';
import { GeometryPointComponent } from 'ng-openlayers';
import { FeatureComponent } from 'ng-openlayers';
import { SourceVectorComponent } from 'ng-openlayers';
import { LayerVectorComponent } from 'ng-openlayers';
import { SourceOsmComponent } from 'ng-openlayers';
import { LayerTileComponent } from 'ng-openlayers';
import { CoordinateComponent } from 'ng-openlayers';
import { ViewComponent } from 'ng-openlayers';
import { DefaultControlComponent } from 'ng-openlayers';
import { DefaultInteractionComponent } from 'ng-openlayers';
import { MapComponent } from 'ng-openlayers';

//

@Component({
    selector: 'app-display-marker',
    template: `
    <aol-map #map width="100%" height="100%">
      <aol-interaction-default></aol-interaction-default>
      <aol-control-defaults></aol-control-defaults>

      <aol-view [zoom]="12">
        <aol-coordinate [x]="-2.269282" [y]="46.987247" [srid]="'EPSG:4326'"></aol-coordinate>
      </aol-view>

      <aol-layer-tile [opacity]="1"> <aol-source-osm></aol-source-osm> </aol-layer-tile>

      @if (marker) {
        <aol-layer-vector>
          <aol-source-vector #markers>
            <aol-feature>
              <aol-geometry-point>
                <aol-coordinate [x]="marker.lon" [y]="marker.lat" [srid]="'EPSG:4326'"></aol-coordinate>
              </aol-geometry-point>
              <aol-style>
                <aol-style-icon
                  [src]="'assets/marker.svg'"
                  [anchor]="[0.5, 1]"
                  [anchorXUnits]="'fraction'"
                  [anchorYUnits]="'fraction'"
                  [scale]="2"
                  [anchorOrigin]="'top-left'"
                >
                </aol-style-icon>
              </aol-style>
            </aol-feature>
          </aol-source-vector>
        </aol-layer-vector>
      }
    </aol-map>
  `,
    imports: [
        MapComponent,
        DefaultInteractionComponent,
        DefaultControlComponent,
        ViewComponent,
        CoordinateComponent,
        LayerTileComponent,
        SourceOsmComponent,
        LayerVectorComponent,
        SourceVectorComponent,
        FeatureComponent,
        GeometryPointComponent,
        StyleComponent,
        StyleIconComponent,
    ]
})
export class MarkerComponent implements OnInit {
  constructor() {}

  feature = {
    type: 'Feature',
    properties: {},
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-2.3565673828124996, 46.92588289494367],
          [-2.1148681640624996, 46.92588289494367],
          [-2.1148681640624996, 47.04954010021555],
          [-2.3565673828124996, 47.04954010021555],
          [-2.3565673828124996, 46.92588289494367],
        ],
      ],
    },
  };

  marker = {
    lon: -2.264184,
    lat: 46.996207,
  };

  ngOnInit() {}
}
