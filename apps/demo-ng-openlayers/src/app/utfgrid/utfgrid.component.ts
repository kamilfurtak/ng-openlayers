import { Component, ViewChild, signal, ChangeDetectionStrategy } from '@angular/core';
import {
  ContentComponent,
  ControlFullScreenComponent,
  CoordinateComponent,
  DefaultControlComponent,
  DefaultInteractionComponent,
  LayerTileComponent,
  MapComponent,
  OverlayComponent,
  SourceOsmComponent,
  SourceUTFGridComponent,
  ViewComponent,
} from 'ng-openlayers';
import { Coordinate } from 'ol/coordinate';

@Component({
  selector: 'app-root',
  template: `
    <aol-map (pointerMove)="displayInfo($event.coordinate)">
      <aol-interaction-default></aol-interaction-default>
      <aol-control-defaults></aol-control-defaults>
      <aol-control-fullscreen></aol-control-fullscreen>
      <aol-view #view [zoom]="2" [center]="[3000000, 3000000]"></aol-view>
      <aol-layer-tile> <aol-source-osm></aol-source-osm> </aol-layer-tile>
      <aol-layer-tile>
        <aol-source-utfgrid #UTFGrid url="/assets/utfgrid/tilejson.json"></aol-source-utfgrid>
      </aol-layer-tile>
      @if (info(); as detail) {
        <aol-overlay [positioning]="'bottom-right'" [stopEvent]="false">
          <aol-coordinate [x]="coords()[0]" [y]="coords()[1]" [srid]="'EPSG:3857'"> </aol-coordinate>
          <aol-content>
            <span class="grid-label">{{ detail['label'] }}</span>
          </aol-content>
        </aol-overlay>
      }
    </aol-map>
  `,
  styles: [
    `
      .grid-label {
        background: white;
        padding: 10px 15px;
        border-radius: 5px;
        white-space: nowrap;
      }
      :host {
        height: 100%;
        display: flex;
      }

      aol-map {
        width: 100%;
        height: 100%;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MapComponent,
    DefaultInteractionComponent,
    DefaultControlComponent,
    ControlFullScreenComponent,
    ViewComponent,
    LayerTileComponent,
    SourceOsmComponent,
    SourceUTFGridComponent,
    OverlayComponent,
    CoordinateComponent,
    ContentComponent,
  ],
})
export class UTFGridComponent {
  @ViewChild('UTFGrid', { static: true }) UTFGrid: SourceUTFGridComponent;
  @ViewChild('view', { static: true }) view: ViewComponent;

  readonly info = signal<Record<string, string> | null>(null);
  readonly coords = signal<Coordinate>([0, 0]);

  displayInfo(c: Coordinate) {
    this.UTFGrid.instance.forDataAtCoordinateAndResolution(c, this.view.instance.getResolution(), (data) => {
      if (this.isUtfGridInfo(data)) {
        this.info.set(data);
        this.coords.set(c);
      }
    });
  }

  private isUtfGridInfo(data: unknown): data is Record<string, string> {
    return typeof data === 'object' && data !== null && typeof data['label'] === 'string';
  }
}
