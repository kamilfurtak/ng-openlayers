import { Component } from '@angular/core';
import {
  CoordinateComponent,
  DefaultControlComponent,
  DefaultInteractionComponent,
  FeatureComponent,
  GeometryPointComponent,
  LayerTileComponent,
  LayerVectorComponent,
  MapComponent,
  SourceOsmComponent,
  SourceVectorComponent,
  StyleCircleComponent,
  StyleComponent,
  StyleFillComponent,
  StylesComponent,
  StyleStrokeComponent,
  ViewComponent,
} from 'ng-openlayers';

@Component({
  selector: 'app-styles-composition',
  template: `
    <aol-map width="100%" height="100%">
      <aol-interaction-default></aol-interaction-default>
      <aol-control-defaults></aol-control-defaults>

      <aol-view [zoom]="12">
        <aol-coordinate [x]="-2.269282" [y]="46.987247" [srid]="'EPSG:4326'"></aol-coordinate>
      </aol-view>

      <aol-layer-tile [opacity]="1"> <aol-source-osm></aol-source-osm> </aol-layer-tile>

      <aol-layer-vector>
        <aol-source-vector>
          <aol-feature>
            <aol-geometry-point>
              <aol-coordinate [x]="marker.lon" [y]="marker.lat" [srid]="'EPSG:4326'"></aol-coordinate>
            </aol-geometry-point>
            <aol-styles>
              <aol-style [zIndex]="1">
                <aol-style-circle [radius]="24">
                  <aol-style-stroke [color]="'rgba(22, 125, 222, 0.18)'" [width]="18"></aol-style-stroke>
                  <aol-style-fill [color]="'rgba(22, 125, 222, 0.08)'"></aol-style-fill>
                </aol-style-circle>
              </aol-style>
              <aol-style [zIndex]="2">
                <aol-style-circle [radius]="12">
                  <aol-style-stroke [color]="'#ffffff'" [width]="4"></aol-style-stroke>
                  <aol-style-fill [color]="'#167dde'"></aol-style-fill>
                </aol-style-circle>
              </aol-style>
              <aol-style [zIndex]="3">
                <aol-style-circle [radius]="4">
                  <aol-style-fill [color]="'#0b2f57'"></aol-style-fill>
                </aol-style-circle>
              </aol-style>
            </aol-styles>
          </aol-feature>
        </aol-source-vector>
      </aol-layer-vector>
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
    StylesComponent,
    StyleComponent,
    StyleCircleComponent,
    StyleStrokeComponent,
    StyleFillComponent,
  ],
})
export class StylesCompositionComponent {
  marker = {
    lon: -2.264184,
    lat: 46.996207,
  };
}
