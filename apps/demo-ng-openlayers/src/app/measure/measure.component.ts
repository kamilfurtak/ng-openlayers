import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Feature } from 'ol';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  MapComponent,
  ViewComponent,
  LayerTileComponent,
  SourceOsmComponent,
  MeasureInteractionComponent,
  MeasureType,
} from 'ng-openlayers';

@Component({
  selector: 'app-measure',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MapComponent,
    ViewComponent,
    LayerTileComponent,
    SourceOsmComponent,
    MeasureInteractionComponent,
  ],
  template: `
    <div class="container">
      <div class="map-container">
        <aol-map width="100%" height="100%">
          <aol-view [zoom]="4" [center]="[0, 0]"></aol-view>
          <aol-layer-tile>
            <aol-source-osm></aol-source-osm>
          </aol-layer-tile>
          <aol-interaction-measure
            #measureInteraction
            [type]="measureType"
            [showHelpTooltip]="showHelpTooltip"
            (measureComplete)="onMeasureComplete($event)"
          ></aol-interaction-measure>
        </aol-map>
      </div>
      <div class="controls">
        <h3>Measurement Controls</h3>
        <div class="buttons">
          <button
            (click)="setMeasureType(MeasureType.LineString)"
            [class.active]="measureType === MeasureType.LineString"
          >
            Measure Distance
          </button>
          <button (click)="setMeasureType(MeasureType.Polygon)" [class.active]="measureType === MeasureType.Polygon">
            Measure Area
          </button>
          <button class="clear-btn" (click)="clearMeasurements()">Clear Measurements</button>
        </div>
        <div class="options">
          <label>
            <input type="checkbox" [(ngModel)]="showHelpTooltip" (change)="toggleHelpTooltip()" />
            Show help tooltips
          </label>
        </div>
        <div *ngIf="lastMeasurement" class="result">
          <h4>Last Measurement:</h4>
          <p [innerHTML]="lastMeasurement"></p>
        </div>
        <div class="info">
          <h4>How to use:</h4>
          <p>
            Select the type of measurement (distance or area), then click on the map to start measuring. Click again to
            add more points. Double-click to finish.
          </p>
          <p>Press Ctrl+Z to undo the last point.</p>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .container {
        display: flex;
        flex-direction: column;
        height: 100%;
      }
      .map-container {
        flex: 1;
        width: 100%;
        min-height: 400px;
      }
      .controls {
        padding: 10px;
        background: #f5f5f5;
        border-top: 1px solid #ddd;
      }
      .buttons {
        display: flex;
        gap: 10px;
        margin-bottom: 10px;
      }
      .options {
        margin-bottom: 10px;
      }
      button {
        padding: 8px 16px;
        background: #fff;
        border: 1px solid #ccc;
        border-radius: 4px;
        cursor: pointer;
      }
      button.active {
        background: #4285f4;
        color: white;
        border-color: #4285f4;
      }
      button.clear-btn {
        background: #f44336;
        color: white;
        border-color: #d32f2f;
        margin-left: auto;
      }
      .result {
        margin-top: 10px;
        padding: 10px;
        background: #fff;
        border: 1px solid #ddd;
        border-radius: 4px;
      }
      .info {
        margin-top: 10px;
        padding: 10px;
        background: #e1f5fe;
        border: 1px solid #81d4fa;
        border-radius: 4px;
      }
    `,
  ],
})
export class MeasureComponent implements AfterViewInit {
  @ViewChild('measureInteraction') measureInteraction: MeasureInteractionComponent;

  measureType = MeasureType.LineString;
  lastMeasurement: string;
  showHelpTooltip = false;
  MeasureType = MeasureType; // Make enum available in the template

  ngAfterViewInit() {
    // Ensure the component is properly initialized with the correct type
    setTimeout(() => {
      if (this.measureInteraction) {
        console.log('Initializing measure type:', this.measureType);
        this.measureInteraction.setMeasureType(this.measureType);
      }
    });
  }

  onMeasureComplete(event: { feature: Feature; measure: number; formattedMeasure: string }) {
    console.log('Measurement completed:', event);
    this.lastMeasurement = event.formattedMeasure;
  }

  setMeasureType(type: MeasureType) {
    console.log('Changing measure type from', this.measureType, 'to', type);
    this.measureType = type;

    // Need to wait for the view to be initialized if this is called early
    setTimeout(() => {
      if (this.measureInteraction) {
        console.log('Calling setMeasureType on interaction component');
        this.measureInteraction.setMeasureType(type);
      } else {
        console.warn('MeasureInteraction component reference not available');
      }
    });
  }

  toggleHelpTooltip() {
    if (this.measureInteraction) {
      this.measureInteraction.toggleHelpTooltip(this.showHelpTooltip);
    }
  }

  clearMeasurements() {
    if (this.measureInteraction) {
      this.measureInteraction.clearMeasurements();
      this.lastMeasurement = '';
    }
  }
}
