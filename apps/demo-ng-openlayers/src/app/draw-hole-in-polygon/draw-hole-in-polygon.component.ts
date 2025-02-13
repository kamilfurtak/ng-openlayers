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
      <!-- Default interaction for basic panning and zooming -->
      <aol-interaction-default></aol-interaction-default>

      <!-- Conditional block: enable select interaction if selectInteractionEnabled is true -->
      @if (selectInteractionEnabled) {
        <!-- Select interaction allows users to click and select features -->
        <aol-interaction-select [wrapX]="true" #select></aol-interaction-select>

        <!-- Conditional block: enable modify interaction if modifyInteractionEnabled is true -->
        @if (modifyInteractionEnabled) {
          <!-- Modify interaction allows users to modify the selected feature -->
          <aol-interaction-modify
            #modify
            [features]="select.instance.getFeatures()"
            (olModifyEnd)="modifyEnd($event.features.getArray()[0])"
          ></aol-interaction-modify>
        }
      }

      <!-- Conditional block: enable hole drawing interaction when isHoleDrawing is true -->
      @if (isHoleDrawing) {
        <aol-interaction-draw-hole-in-polygon
          #drawHoleInteraction
          (drawEnd)="endHoleDraw($event)"
          (drawError)="onDrawError($event)"
        ></aol-interaction-draw-hole-in-polygon>
      }

      <!-- Define the map's view settings (zoom level and center coordinates) -->
      <aol-view [zoom]="7">
        <!-- Center of the map defined using aol-coordinate -->
        <aol-coordinate [x]="1.345" [y]="45.543" [srid]="'EPSG:4326'"></aol-coordinate>
      </aol-view>

      <!-- Tile layer with an OSM source as the base map -->
      <aol-layer-tile [opacity]="1">
        <aol-source-osm></aol-source-osm>
      </aol-layer-tile>

      <!-- Conditional rendering: display the polygon feature if it exists -->
      @if (feature) {
        <aol-layer-vector>
          <aol-source-vector>
            <aol-feature>
              <!-- Render polygon geometry -->
              <aol-geometry-polygon>
                <!-- The collection of coordinates for the polygon (and its holes) -->
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
      <!-- Button to toggle the hole drawing mode -->
      <button (click)="drawHole()">
        {{ isHoleDrawing ? 'End draw hole' : 'Start draw hole' }}
      </button>
      <!-- Checkbox to enable select interaction -->
      <div>
        <label>
          <input type="checkbox" [(ngModel)]="selectInteractionEnabled" />
          Enable Select Interaction
        </label>
      </div>
      <!-- Checkbox to enable modify interaction (only enabled if select is enabled) -->
      <div>
        <label>
          <input type="checkbox" [(ngModel)]="modifyInteractionEnabled" [disabled]="!selectInteractionEnabled" />
          Enable Modify Interaction
        </label>
      </div>

      <!-- Display the resulting GeoJSON feature -->
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
  ],
})
export class DrawHoleInPolygonComponent {
  // Access the draw-hole interaction instance in the template via ViewChild
  @ViewChild('drawHoleInteraction', { static: false })
  drawHoleInteraction!: DrawHoleInPolygonInteractionComponent;

  // GeoJSON formatter to convert features to and from GeoJSON format
  format: GeoJSON = new GeoJSON();

  // Define display projection (EPSG:3857) and input projection (EPSG:4326)
  displayProj = new Projection({ code: 'EPSG:3857' });
  inputProj = new Projection({ code: 'EPSG:4326' });
  // Define the initial polygon feature (GeoJSON) as the base shape on the map
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
  // selectInteractionEnabled and modifyInteractionEnabled control other interactions.
  isHoleDrawing = false;

  // Flags to control interactive behaviors:
  // isHoleDrawing toggles the hole drawing interaction,
  selectInteractionEnabled = false;
  modifyInteractionEnabled = false;

  // Inject the ToastrService to display warning notifications
  constructor(private toastr: ToastrService) {}

  /**
   * modifyEnd() is called when a feature modification is finished.
   * It converts the modified feature into a GeoJSON object and updates the component's feature.
   */
  modifyEnd(feature: OLFeature<Polygon>) {
    this.feature = this.format.writeFeatureObject(feature, {
      dataProjection: this.inputProj, // Source projection of the feature
      featureProjection: this.displayProj, // Projection used by the map
    }) as any;
  }

  /**
   * endHoleDraw() is triggered when the hole drawing interaction completes.
   * It extracts the geometry (including the new hole) and updates the feature accordingly.
   */
  endHoleDraw(feature: Feature) {
    // Cast the feature's geometry to a Polygon
    const olGeomPolygon = feature.getGeometry() as Polygon;
    // Update the feature property with the new coordinates (including the drawn hole)
    this.feature = {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Polygon',
        coordinates: olGeomPolygon.getCoordinates(),
      },
    };
  }

  /**
   * drawHole() toggles the hole drawing mode on or off.
   * When enabled, the hole drawing interaction is rendered and active on the map.
   */
  drawHole() {
    this.isHoleDrawing = !this.isHoleDrawing;
  }

  /**
   * onDrawError() handles errors during the hole drawing process.
   * Depending on the error type, it shows a warning message using Toastr.
   */
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
