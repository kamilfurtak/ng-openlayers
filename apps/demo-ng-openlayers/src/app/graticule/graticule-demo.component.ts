import { Component } from '@angular/core';
import { Stroke } from 'ol/style';
import { FormsModule } from '@angular/forms';
import {
  ControlFullScreenComponent,
  CoordinateComponent,
  DefaultControlComponent,
  DefaultInteractionComponent,
  GraticuleComponent,
  LayerTileComponent,
  MapComponent,
  SourceOsmComponent,
  ViewComponent,
} from 'ng-openlayers';

@Component({
    selector: 'app-root',
    template: `
    <aol-map width="100%" height="100%">
      <aol-interaction-default></aol-interaction-default>
      <aol-control-defaults></aol-control-defaults>
      <aol-control-fullscreen></aol-control-fullscreen>
      <aol-view [zoom]="zoom"> <aol-coordinate [x]="-10997148" [y]="4569099"></aol-coordinate> </aol-view>

      <aol-layer-tile>
        <aol-source-osm></aol-source-osm>
      </aol-layer-tile>

      @if (shownGraticule) {
        <aol-graticule [strokeStyle]="graticuleStyle" [showLabels]="true"></aol-graticule>
      }
    </aol-map>

    <div class="controls">
      <input type="checkbox" id="graticule" name="graticule" [(ngModel)]="shownGraticule" />
      <label for="graticule">Toggle graticule</label>
    </div>
  `,
    styles: [
        `
      :host {
        height: 100%;
        display: flex;
      }

      aol-map {
        width: 80%;
      }

      .controls {
        width: 18%;
        padding: 1rem;
      }
    `,
    ],
    imports: [
        MapComponent,
        DefaultInteractionComponent,
        DefaultControlComponent,
        ControlFullScreenComponent,
        ViewComponent,
        CoordinateComponent,
        LayerTileComponent,
        SourceOsmComponent,
        FormsModule,
        GraticuleComponent,
    ]
})
export class GraticuleDemoComponent {
  public zoom = 4;
  public opacity = 1.0;
  public shownGraticule = true;
  public graticuleStyle = new Stroke({
    color: 'rgba(255,120,0,0.9)',
    width: 2,
    lineDash: [0.5, 4],
  });
}
