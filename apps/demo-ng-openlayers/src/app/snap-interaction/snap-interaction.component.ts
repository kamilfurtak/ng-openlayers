import { Component } from '@angular/core';
import {
  CollectionCoordinatesComponent,
  CoordinateComponent,
  DefaultControlComponent,
  DefaultInteractionComponent,
  FeatureComponent,
  GeometryPolygonComponent,
  LayerTileComponent,
  LayerVectorComponent,
  MapComponent,
  SnapInteractionComponent as NgOpenlayersSnapInteractionComponent,
  SourceOsmComponent,
  SourceVectorComponent,
  StyleComponent,
  StyleFillComponent,
  StyleStrokeComponent,
  ViewComponent,
} from 'ng-openlayers';
import { SnapEvent } from 'ol/events/SnapEvent';

@Component({
  selector: 'app-snap-interaction',
  template: `
    <aol-map width="100%" height="100%">
      <aol-interaction-default></aol-interaction-default>
      <aol-control-defaults></aol-control-defaults>

      <aol-view [zoom]="5">
        <aol-coordinate [x]="1.4886" [y]="43.5554" [srid]="'EPSG:4326'"></aol-coordinate>
      </aol-view>

      <aol-layer-tile [opacity]="1"> <aol-source-osm></aol-source-osm> </aol-layer-tile>

      <aol-layer-vector>
        <aol-style>
          <aol-style-stroke [color]="'#167dde'" [width]="3"></aol-style-stroke>
          <aol-style-fill [color]="'rgba(22, 125, 222, 0.18)'"></aol-style-fill>
        </aol-style>
        <aol-source-vector #vectorSource>
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

      <aol-interaction-snap [pixelTolerance]="50" [source]="vectorSource.instance" (snap)="onSnap($event)">
      </aol-interaction-snap>
    </aol-map>

    <div class="info">
      <h3>Result</h3>
      <p>Snap events: {{ snapCount }}</p>
      <p>Last vertex: {{ lastVertex }}</p>
    </div>
  `,
  styles: [
    `
      :host {
        height: 100%;
        display: flex;
      }

      aol-map {
        width: 70%;
      }

      .info {
        width: 28%;
        padding: 1rem;
      }
    `,
  ],
  imports: [
    MapComponent,
    DefaultInteractionComponent,
    DefaultControlComponent,
    ViewComponent,
    CoordinateComponent,
    LayerTileComponent,
    SourceOsmComponent,
    LayerVectorComponent,
    StyleComponent,
    StyleStrokeComponent,
    StyleFillComponent,
    SourceVectorComponent,
    FeatureComponent,
    GeometryPolygonComponent,
    CollectionCoordinatesComponent,
    NgOpenlayersSnapInteractionComponent,
  ],
})
export class SnapInteractionComponent {
  snapCount = 0;
  lastVertex = '-';

  feature = {
    geometry: {
      coordinates: [
        [
          [-1.7138671875, 43.35713822211053],
          [4.515380859375, 43.35713822211053],
          [4.515380859375, 47.76886840424207],
          [-1.7138671875, 47.76886840424207],
          [-1.7138671875, 43.35713822211053],
        ],
      ],
      type: 'Polygon',
    },
    properties: {},
    type: 'Feature',
  };

  onSnap(event: SnapEvent) {
    this.snapCount += 1;
    this.lastVertex = event.vertex.map((coordinate) => coordinate.toFixed(2)).join(', ');
  }
}
