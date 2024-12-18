import { Component, ViewChild } from '@angular/core';
import OLFeature from 'ol/Feature';
import Projection from 'ol/proj/Projection';
import { GeoJSON } from 'ol/format';
import { Polygon } from 'ol/geom';
import { JsonPipe } from '@angular/common';
import {
  CollectionCoordinatesComponent,
  CoordinateComponent,
  DefaultInteractionComponent,
  DrawHoleInPolygonInteractionComponent,
  DrawHoleInPolygonInteractionError,
  DrawHoleInPolygonInteractionErrorType,
  FeatureComponent,
  GeometryPolygonComponent,
  LayerTileComponent,
  LayerVectorComponent,
  MapComponent,
  ModifyInteractionComponent,
  SelectInteractionComponent,
  SourceOsmComponent,
  SourceVectorComponent,
  ViewComponent,
} from 'ng-openlayers';
import { FormsModule } from '@angular/forms';
import { Feature } from 'ol';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-modify-polygon',
    template: `
    <aol-map #map width="100%" height="100%">
      <aol-interaction-default></aol-interaction-default>

      @if (selectInteractionEnabled) {
        <aol-interaction-select [wrapX]="true" #select></aol-interaction-select>

        @if (modifyInteractionEnabled) {
          <aol-interaction-modify
            #modify
            [features]="select.instance.getFeatures()"
            (olModifyEnd)="modifyEnd($event.features.getArray()[0])"
          ></aol-interaction-modify>
        }
      }

      @if (isHoleDrawing) {
        <aol-interaction-draw-hole-in-polygon
          #drawHoleInteraction
          (drawEnd)="endHoleDraw($event)"
          (drawError)="onDrawError($event)"
        ></aol-interaction-draw-hole-in-polygon>
      }

      <aol-view [zoom]="7">
        <aol-coordinate [x]="1.345" [y]="45.543" [srid]="'EPSG:4326'"></aol-coordinate>
      </aol-view>

      <aol-layer-tile [opacity]="1"> <aol-source-osm></aol-source-osm> </aol-layer-tile>

      @if (feature) {
        <aol-layer-vector>
          <aol-source-vector>
            <aol-feature>
              <aol-geometry-polygon>
                <aol-collection-coordinates [coordinates]="feature.geometry.coordinates" [srid]="'EPSG:4326'">
                </aol-collection-coordinates>
              </aol-geometry-polygon>
            </aol-feature>
          </aol-source-vector>
        </aol-layer-vector>
      }
    </aol-map>

    <div class="info">
      <p>
        Mode: ADD/REMOVE ENCLAVE. Start sketch by clicking inside the polygon area. To undo the drawn vertex, press the
        Ctrl+Z key. Finish sketch by moving the pointer closer to the first point and clicking once with left mouse
        button. Click on the selected enclave with the Ctrl key pressed to remove it. To remove the last drawn vertex,
        press the Ctrl+Z key.
      </p>
      <button (click)="drawHole()">
        {{ isHoleDrawing ? 'End draw hole' : 'Start draw hole' }}
      </button>
      <div>
        <label>
          <input type="checkbox" [(ngModel)]="selectInteractionEnabled" />
          Enable Select Interaction
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" [(ngModel)]="modifyInteractionEnabled" [disabled]="!selectInteractionEnabled" />
          Enable Modify Interaction
        </label>
      </div>

      <h3>Result</h3>
      <div class="code-container">
        <div>
          <pre>{{ feature | json }}</pre>
        </div>
      </div>
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
        SelectInteractionComponent,
        ModifyInteractionComponent,
        ViewComponent,
        CoordinateComponent,
        LayerTileComponent,
        SourceOsmComponent,
        LayerVectorComponent,
        SourceVectorComponent,
        FeatureComponent,
        GeometryPolygonComponent,
        CollectionCoordinatesComponent,
        JsonPipe,
        DrawHoleInPolygonInteractionComponent,
        FormsModule,
    ]
})
export class DrawHoleInPolygonComponent {
  @ViewChild('drawHoleInteraction', { static: false }) drawHoleInteraction!: DrawHoleInPolygonInteractionComponent;
  format: GeoJSON = new GeoJSON();
  displayProj = new Projection({ code: 'EPSG:3857' });
  inputProj = new Projection({ code: 'EPSG:4326' });

  constructor(private toastr: ToastrService) {}

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
  isHoleDrawing = false;
  selectInteractionEnabled = false;
  modifyInteractionEnabled = false;

  modifyEnd(feature: OLFeature<Polygon>) {
    this.feature = this.format.writeFeatureObject(feature, {
      dataProjection: this.inputProj,
      featureProjection: this.displayProj,
    }) as any;
  }

  endHoleDraw(feature: Feature) {
    const olGeomPolygon = feature.getGeometry() as Polygon;
    // olGeomPolygon.transform(new Projection({ code: 'EPSG:3857' }), new Projection({ code: 'EPSG:4326' }));
    this.feature = {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Polygon',
        coordinates: olGeomPolygon.getCoordinates(),
      },
    };
  }

  drawHole() {
    this.isHoleDrawing = !this.isHoleDrawing;
  }

  onDrawError($event: DrawHoleInPolygonInteractionError) {
    if ($event.type === DrawHoleInPolygonInteractionErrorType.MoPolygonFound) {
      this.toastr.warning('No polygon found to draw hole.');
    }
    if ($event.type === DrawHoleInPolygonInteractionErrorType.DrawVertexOutsidePolygon) {
      this.toastr.warning('Cannot add vertex outside the polygon');
    }
    if ($event.type === DrawHoleInPolygonInteractionErrorType.NoLinearRingFoundToRemove) {
      this.toastr.warning('No linear ring found to remove.');
    }
  }
}
