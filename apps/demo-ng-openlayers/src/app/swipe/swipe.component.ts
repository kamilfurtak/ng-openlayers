import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import {
  CoordinateComponent,
  DefaultInteractionComponent,
  LayerTileComponent,
  MapComponent,
  SourceOsmComponent,
  SourceXYZComponent,
  ViewComponent,
} from 'ng-openlayers';
import RenderEvent from 'ol/render/Event';

@Component({
  selector: 'app-swipe',
  imports: [
    MapComponent,
    DefaultInteractionComponent,
    ViewComponent,
    CoordinateComponent,
    LayerTileComponent,
    SourceOsmComponent,
    SourceXYZComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <aol-map #map width="100%" height="100%">
      <aol-interaction-default />
      <aol-view [zoom]="5"><aol-coordinate [x]="2.181539" [y]="47.125488" srid="EPSG:4326" /></aol-view>
      <aol-layer-tile><aol-source-osm /></aol-layer-tile>
      <aol-layer-tile [prerender]="prerenderFunction" [postrender]="postrenderFunction">
        <aol-source-xyz
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        />
      </aol-layer-tile>
    </aol-map>
    <label class="swipe-control"
      >Layer comparison
      <input
        #slider
        type="range"
        min="2"
        max="98"
        [value]="swipeValue"
        (input)="setSwipe(slider.valueAsNumber)"
        aria-label="Layer comparison"
    /></label>
  `,
  styles: [
    `
      :host {
        display: block;
        height: 100%;
        position: relative;
      }
      .swipe-control {
        position: absolute;
        z-index: 2;
        bottom: 24px;
        left: 50%;
        transform: translateX(-50%);
        background: white;
        border: 1px solid #cad6cc;
        border-radius: 8px;
        padding: 10px 16px;
        font-size: 12px;
        display: flex;
        gap: 15px;
        align-items: center;
        max-width: 90%;
      }
      input {
        min-width: 100px;
        accent-color: #0c6555;
      }
    `,
  ],
})
export class SwipeComponent {
  @ViewChild('map', { static: true }) map: MapComponent;
  swipeValue = 50;
  readonly prerenderFunction = (event: RenderEvent): void => {
    const context = event.context as CanvasRenderingContext2D;
    if (!context) return;
    const width = (context.canvas.width * this.swipeValue) / 100;
    context.save();
    context.beginPath();
    context.rect(width, 0, context.canvas.width - width, context.canvas.height);
    context.clip();
  };
  readonly postrenderFunction = (event: RenderEvent): void => (event.context as CanvasRenderingContext2D)?.restore();
  setSwipe(value: number): void {
    this.swipeValue = value;
    this.map.instance.render();
  }
}
