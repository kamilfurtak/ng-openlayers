import { Component, ChangeDetectionStrategy } from '@angular/core';
import GeoJSON from 'ol/format/GeoJSON.js';
import {
  CollectionCoordinatesComponent,
  ContentComponent,
  CoordinateComponent,
  DefaultControlComponent,
  DefaultInteractionComponent,
  FeatureComponent,
  GeometryPolygonComponent,
  LayerTileComponent,
  LayerVectorComponent,
  MapComponent,
  OverlayComponent,
  SourceOsmComponent,
  SourceVectorComponent,
  ViewComponent,
} from 'ng-openlayers';

@Component({
  selector: 'app-display-overlay',
  template: `
    <aol-map #map width="100%" height="100%">
      <aol-interaction-default></aol-interaction-default>
      <aol-control-defaults></aol-control-defaults>

      <aol-view [zoom]="11">
        <aol-coordinate [x]="-2.269282" [y]="46.987247" [srid]="'EPSG:4326'"></aol-coordinate>
      </aol-view>

      <aol-layer-tile [opacity]="1"> <aol-source-osm></aol-source-osm> </aol-layer-tile>

      <aol-layer-vector>
        <aol-source-vector>
          <aol-feature>
            <aol-geometry-polygon>
              <aol-collection-coordinates
                [coordinates]="feature.geometry.coordinates"
                [srid]="'EPSG:4326'"
              ></aol-collection-coordinates>
            </aol-geometry-polygon>
          </aol-feature>
        </aol-source-vector>
      </aol-layer-vector>

      <aol-overlay [positioning]="'center-center'" [stopEvent]="false">
        <aol-coordinate [x]="tooltip.lon" [y]="tooltip.lat" [srid]="'EPSG:4326'"> </aol-coordinate>
        <aol-content>
          <div class="tooltip tooltip-static">{{ tooltip.text }}</div>
        </aol-content>
      </aol-overlay>
    </aol-map>
  `,
  styles: [
    `
      .tooltip {
        max-width: min(260px, 70vw);
        text-align: center;
        border-radius: 4px;
        color: white;
        padding: 4px 8px;
        white-space: normal;
      }

      .tooltip-static {
        background-color: #000000;
        color: white;
        border: 1px solid white;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
    GeometryPolygonComponent,
    CollectionCoordinatesComponent,
    ContentComponent,
    OverlayComponent,
  ],
})
export class OverlayDemoComponent {
  geoJsonFormat = new GeoJSON();

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

  tooltip = {
    lon: -2.269282,
    lat: 46.987247,
    text: 'An HTML overlay anchored to the map',
  };
}
