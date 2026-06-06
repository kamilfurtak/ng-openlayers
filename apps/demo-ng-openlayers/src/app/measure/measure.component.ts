import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  DefaultControlComponent,
  DefaultInteractionComponent,
  LayerTileComponent,
  MapComponent,
  MeasureInteractionComponent,
  MeasureResult,
  MeasureType,
  MeasureUnit,
  SourceOsmComponent,
  ViewComponent,
} from 'ng-openlayers';

@Component({
  selector: 'app-measure',
  template: `
    <aol-map width="100%" height="100%">
      <aol-interaction-default></aol-interaction-default>
      <aol-control-defaults></aol-control-defaults>

      <aol-view [zoom]="5" [center]="[166000, 5380000]"></aol-view>
      <aol-layer-tile [opacity]="1"> <aol-source-osm></aol-source-osm> </aol-layer-tile>

      <aol-interaction-measure
        #measureInteraction
        [showHelpTooltip]="showHelpTooltip"
        [type]="measureType"
        [unit]="unit"
        (measureComplete)="onMeasureComplete($event)"
      ></aol-interaction-measure>
    </aol-map>

    <div class="info">
      <h3>Measure</h3>

      <label>
        Type
        <select [(ngModel)]="measureType">
          <option [ngValue]="MeasureType.LineString">Distance</option>
          <option [ngValue]="MeasureType.Polygon">Area</option>
        </select>
      </label>

      <label>
        Units
        <select [(ngModel)]="unit">
          <option ngValue="metric">Metric</option>
          <option ngValue="imperial">Imperial</option>
        </select>
      </label>

      <label class="checkbox">
        <input type="checkbox" [(ngModel)]="showHelpTooltip" />
        Help tooltip
      </label>

      <button type="button" (click)="clearMeasurements()">Clear</button>

      <h3>Result</h3>
      <p [innerHTML]="lastMeasurement"></p>
    </div>
  `,
  styles: [
    `
      :host {
        display: flex;
        height: 100%;
      }

      aol-map {
        width: 70%;
      }

      .info {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        padding: 1rem;
        width: 28%;
      }

      label {
        display: flex;
        flex-direction: column;
        gap: 0.35rem;
      }

      .checkbox {
        align-items: center;
        flex-direction: row;
      }

      select,
      button {
        min-height: 2.25rem;
      }
    `,
  ],
  imports: [
    FormsModule,
    MapComponent,
    DefaultInteractionComponent,
    DefaultControlComponent,
    ViewComponent,
    LayerTileComponent,
    SourceOsmComponent,
    MeasureInteractionComponent,
  ],
})
export class MeasureComponent {
  @ViewChild('measureInteraction')
  measureInteraction?: MeasureInteractionComponent;

  readonly MeasureType = MeasureType;
  measureType: MeasureType = MeasureType.LineString;
  unit: MeasureUnit = 'metric';
  showHelpTooltip = true;
  lastMeasurement = '-';

  onMeasureComplete(result: MeasureResult): void {
    this.lastMeasurement = result.formattedMeasure;
  }

  clearMeasurements(): void {
    this.measureInteraction?.clearMeasurements();
    this.lastMeasurement = '-';
  }
}
