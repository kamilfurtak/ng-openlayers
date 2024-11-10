import { Component } from '@angular/core';
import { Extent, getCenter } from 'ol/extent';
import Projection, { Options as ProjectionOptions } from 'ol/proj/Projection';
import { FormsModule } from '@angular/forms';
import { SourceImageStaticComponent } from 'ng-openlayers';
import { LayerImageComponent } from 'ng-openlayers';
import { ViewComponent } from 'ng-openlayers';
import { MapComponent } from 'ng-openlayers';

@Component({
    selector: 'app-root',
    template: `
    <aol-map [width]="'100%'" [height]="'100%'">
      <aol-view [projection]="projection" [zoom]="2" [center]="[512, 484]"> </aol-view>
      <aol-layer-image [opacity]="opacity" [extent]="extent">
        <aol-source-imagestatic [url]="url" [projection]="projection" [imageExtent]="extent"> </aol-source-imagestatic>
      </aol-layer-image>
    </aol-map>
    <div class="controls">
      Current image url:
      <select (change)="onUrlChange($event)">
        <option value="https://imgs.xkcd.com/comics/online_communities.png">
          https://imgs.xkcd.com/comics/online_communities.png
        </option>
        <option value="https://pbs.twimg.com/media/D7IgamEUEAA5DHE.jpg">
          https://pbs.twimg.com/media/D7IgamEUEAA5DHE.jpg
        </option>
      </select>
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

      .controls {
        width: 28%;
        padding: 1rem;
      }
    `,
    ],
    standalone: true,
    imports: [
        MapComponent,
        ViewComponent,
        LayerImageComponent,
        SourceImageStaticComponent,
        FormsModule,
    ],
})
export class ImageStaticComponent {
  public url = 'https://imgs.xkcd.com/comics/online_communities.png';
  public zoom = 5;
  public opacity = 1.0;
  extent: Extent = [0, 0, 1024, 968];

  po: ProjectionOptions = {
    code: 'xkcd-image',
    units: 'pixels',
    extent: [0, 0, 1024, 968],
  };

  projection = new Projection(this.po);

  getCenter = (ext) => getCenter(ext);

  onUrlChange(evt) {
    this.url = evt.target.value;
  }
}
