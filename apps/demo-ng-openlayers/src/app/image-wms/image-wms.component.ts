import { Component, OnInit } from '@angular/core';
import { SourceImageWMSComponent } from 'ng-openlayers';
import { LayerImageComponent } from 'ng-openlayers';
import { CoordinateComponent } from 'ng-openlayers';
import { ViewComponent } from 'ng-openlayers';
import { DefaultInteractionComponent } from 'ng-openlayers';
import { MapComponent } from 'ng-openlayers';

@Component({
    selector: 'app-root',
    template: `
    <aol-map #map width="100%" height="100%">
      <aol-interaction-default></aol-interaction-default>
      <aol-view zoom="4"> <aol-coordinate [x]="-10997148" [y]="4569099"></aol-coordinate> </aol-view>
      <aol-layer-image>
        <aol-source-imagewms
          [url]="'https://ahocevar.com/geoserver/wms'"
          [params]="params"
          [serverType]="'geoserver'"
          (imageLoadStart)="imageLoadStart()"
          (imageLoadEnd)="imageLoadEnd()"
        ></aol-source-imagewms>
      </aol-layer-image>
    </aol-map>
  `,
    styles: [
        `
      map {
        background: #e0eced;
      }
    `,
    ],
    imports: [
        MapComponent,
        DefaultInteractionComponent,
        ViewComponent,
        CoordinateComponent,
        LayerImageComponent,
        SourceImageWMSComponent,
    ]
})
export class ImageWMSComponent implements OnInit {
  constructor() {}

  params = { LAYERS: 'topp:states' };

  ngOnInit() {}

  imageLoadStart() {
    console.log('image starts loading at: ' + new Date());
  }

  imageLoadEnd() {
    console.log('image ends loading at: ' + new Date());
  }
}
