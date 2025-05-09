import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { MapComponent } from '../map.component';
import { Feature, Overlay } from 'ol';
import { Geometry, LineString, Polygon } from 'ol/geom';
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';
import { DrawEvent } from 'ol/interaction/Draw';
import { unByKey } from 'ol/Observable';
import { getArea, getLength } from 'ol/sphere';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import { DrawInteractionComponent } from './draw.component';
import { Type } from 'ol/geom/Geometry';

export enum MeasureType {
  LineString = 'LineString',
  Polygon = 'Polygon',
}

@Component({
  selector: 'aol-interaction-measure',
  template: `
    <aol-interaction-draw
      #drawInstance
      [type]="type"
      [source]="source"
      (drawEnd)="onDrawEnd($event)"
      (drawStart)="onDrawStart($event)"
      [style]="staticStyle"
    >
    </aol-interaction-draw>
  `,
  standalone: true,
  styleUrls: ['./measure.component.css'],
  imports: [DrawInteractionComponent],
  encapsulation: ViewEncapsulation.None,
})
export class MeasureInteractionComponent implements OnInit, OnChanges, OnDestroy {
  @ViewChild('drawInstance') drawInteractionComponent: DrawInteractionComponent;

  @Input() type: Type = MeasureType.Polygon;
  @Input() source?: VectorSource;
  @Input() unit: 'metric' | 'imperial' = 'metric';
  @Input() showHelpTooltip = false;

  @Output() measureComplete = new EventEmitter<{ feature: Feature; measure: number; formattedMeasure: string }>();
  @Output() measureStart = new EventEmitter<Feature>();

  staticStyle = new Style({
    fill: new Fill({
      color: 'rgba(255, 255, 255, 0.2)',
    }),
    stroke: new Stroke({
      color: 'rgba(0, 0, 0, 0.5)',
      lineDash: [10, 10],
      width: 2,
    }),
    image: new CircleStyle({
      radius: 5,
      stroke: new Stroke({
        color: 'rgba(0, 0, 0, 0.7)',
      }),
      fill: new Fill({
        color: 'rgba(255, 255, 255, 0.2)',
      }),
    }),
  });

  private measureTooltipElement: HTMLElement | null;
  private measureTooltip: Overlay;
  private helpTooltipElement: HTMLElement | null;
  private helpTooltip: Overlay;
  private sketch: Feature<Geometry> | null;
  private listener: any;
  private vector: VectorLayer<VectorSource>;

  constructor(private map: MapComponent) {}

  ngOnInit() {
    // Create vector layer if not provided
    if (!this.source) {
      this.source = new VectorSource();
      this.vector = new VectorLayer({
        source: this.source,
        style: {
          'fill-color': 'rgba(255, 255, 255, 0.2)',
          'stroke-color': '#ffcc33',
          'stroke-width': 2,
          'circle-radius': 7,
          'circle-fill-color': '#ffcc33',
        },
      });
      this.map.instance.addLayer(this.vector);
    }

    this.createMeasureTooltip();

    if (this.showHelpTooltip) {
      this.createHelpTooltip();
      // Add pointer move handler to show help messages
      this.map.instance.on('pointermove', this.pointerMoveHandler);

      // Handle mouseout event
      this.map.instance.getViewport().addEventListener('mouseout', this.onMouseOut);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    // Monitor changes to the type input
    if (changes.type && !changes.type.firstChange && this.drawInteractionComponent) {
      console.log('Measure type changed to:', this.type);

      // We need to recreate the draw interaction with the new type
      setTimeout(() => {
        // First remove the existing interaction from the map
        if (this.drawInteractionComponent.instance) {
          this.map.instance.removeInteraction(this.drawInteractionComponent.instance);
        }

        // Then recreate it with the new type
        this.drawInteractionComponent.ngOnDestroy();
        this.drawInteractionComponent.ngOnInit();
      });
    }
  }

  private onMouseOut = () => {
    if (this.helpTooltipElement) {
      this.helpTooltipElement.classList.add('hidden');
    }
  };

  onDrawStart(e: DrawEvent) {
    this.sketch = e.feature;
    this.measureStart.emit(this.sketch);

    let tooltipCoord;

    this.listener = this.sketch.getGeometry()?.on('change', (evt) => {
      const geom = evt.target;
      let output = '';
      let measure = 0;

      if (geom instanceof Polygon) {
        measure = getArea(geom);
        output = this.formatArea(measure);
        tooltipCoord = geom.getInteriorPoint().getCoordinates();
      } else if (geom instanceof LineString) {
        measure = getLength(geom);
        output = this.formatLength(measure);
        tooltipCoord = geom.getLastCoordinate();
      }

      if (this.measureTooltipElement) {
        this.measureTooltipElement.innerHTML = output;
        this.measureTooltip.setPosition(tooltipCoord);
      }
    });
  }

  onDrawEnd(e: DrawEvent) {
    let measure = 0;
    let formattedMeasure = '';
    const geometry = e.feature.getGeometry();

    if (geometry instanceof Polygon) {
      measure = getArea(geometry);
      formattedMeasure = this.formatArea(measure);
    } else if (geometry instanceof LineString) {
      measure = getLength(geometry);
      formattedMeasure = this.formatLength(measure);
    }

    this.measureComplete.emit({
      feature: e.feature,
      measure,
      formattedMeasure,
    });

    if (this.measureTooltipElement) {
      this.measureTooltipElement.className = 'ol-tooltip ol-tooltip-static';
      this.measureTooltip.setOffset([0, -7]);
    }

    // unset sketch and listener
    this.sketch = null;
    if (this.listener) {
      unByKey(this.listener);
    }

    // Create a new tooltip
    this.measureTooltipElement = null;
    this.createMeasureTooltip();
  }

  private formatLength(length: number): string {
    let output;
    if (this.unit === 'metric') {
      if (length > 100) {
        output = Math.round((length / 1000) * 100) / 100 + ' km';
      } else {
        output = Math.round(length * 100) / 100 + ' m';
      }
    } else {
      // Imperial units
      const feetPerMeter = 3.28084;
      const milesPerFeet = 1 / 5280;
      const feet = length * feetPerMeter;

      if (feet > 5280) {
        output = Math.round(feet * milesPerFeet * 100) / 100 + ' mi';
      } else {
        output = Math.round(feet * 100) / 100 + ' ft';
      }
    }
    return output;
  }

  private formatArea(area: number): string {
    let output;
    if (this.unit === 'metric') {
      if (area > 10000) {
        output = Math.round((area / 1000000) * 100) / 100 + ' km<sup>2</sup>';
      } else {
        output = Math.round(area * 100) / 100 + ' m<sup>2</sup>';
      }
    } else {
      // Imperial units
      const squareFeetPerSquareMeter = 10.7639;
      const squareFeet = area * squareFeetPerSquareMeter;
      const acresPerSquareFoot = 1 / 43560;

      if (squareFeet > 43560) {
        output = Math.round(squareFeet * acresPerSquareFoot * 100) / 100 + ' acres';
      } else {
        output = Math.round(squareFeet * 100) / 100 + ' ft<sup>2</sup>';
      }
    }
    return output;
  }

  private pointerMoveHandler = (evt) => {
    if (evt.dragging || !this.showHelpTooltip) {
      return;
    }

    let helpMsg = 'Click to start measuring';

    if (this.sketch) {
      const geom = this.sketch.getGeometry();
      if (geom instanceof Polygon) {
        helpMsg = 'Click to continue drawing the polygon';
      } else if (geom instanceof LineString) {
        helpMsg = 'Click to continue drawing the line';
      }
    }

    if (this.helpTooltipElement) {
      this.helpTooltipElement.innerHTML = helpMsg;
      this.helpTooltip.setPosition(evt.coordinate);
      this.helpTooltipElement.classList.remove('hidden');
    }
  };

  private createMeasureTooltip() {
    if (this.measureTooltipElement) {
      this.measureTooltipElement.remove();
    }
    this.measureTooltipElement = document.createElement('div');
    this.measureTooltipElement.className = 'ol-tooltip ol-tooltip-measure';
    this.measureTooltip = new Overlay({
      element: this.measureTooltipElement,
      offset: [0, -15],
      positioning: 'bottom-center',
      stopEvent: false,
      insertFirst: false,
    });
    this.map.instance.addOverlay(this.measureTooltip);
  }

  private createHelpTooltip() {
    if (this.helpTooltipElement) {
      this.helpTooltipElement.remove();
    }
    this.helpTooltipElement = document.createElement('div');
    this.helpTooltipElement.className = 'ol-tooltip hidden';
    this.helpTooltip = new Overlay({
      element: this.helpTooltipElement,
      offset: [15, 0],
      positioning: 'center-left',
    });
    this.map.instance.addOverlay(this.helpTooltip);
  }

  /**
   * Updates the measure type (LineString or Polygon)
   */
  public setMeasureType(type: MeasureType) {
    console.log('Setting measure type to:', type);
    this.type = type;

    // We need to force re-creation of the draw interaction when type changes
    if (this.drawInteractionComponent && this.drawInteractionComponent.instance) {
      // Remove existing interaction
      this.map.instance.removeInteraction(this.drawInteractionComponent.instance);

      // Create a new one with the updated type
      setTimeout(() => {
        this.drawInteractionComponent.ngOnDestroy();
        this.drawInteractionComponent.ngOnInit();
      });
    }
  }

  /**
   * Toggle the help tooltip visibility
   */
  public toggleHelpTooltip(show: boolean) {
    const wasShowing = this.showHelpTooltip;
    this.showHelpTooltip = show;

    if (show && !wasShowing) {
      this.createHelpTooltip();
      this.map.instance.on('pointermove', this.pointerMoveHandler);
      this.map.instance.getViewport().addEventListener('mouseout', this.onMouseOut);
    } else if (!show && wasShowing) {
      if (this.helpTooltip) {
        this.map.instance.removeOverlay(this.helpTooltip);
      }
      if (this.helpTooltipElement) {
        this.helpTooltipElement.remove();
      }
      this.map.instance.un('pointermove', this.pointerMoveHandler);
      this.map.instance.getViewport().removeEventListener('mouseout', this.onMouseOut);
    }
  }

  ngOnDestroy() {
    if (this.showHelpTooltip) {
      this.map.instance.un('pointermove', this.pointerMoveHandler);
      this.map.instance.getViewport().removeEventListener('mouseout', this.onMouseOut);
    }

    if (this.measureTooltip) {
      this.map.instance.removeOverlay(this.measureTooltip);
    }

    if (this.helpTooltip) {
      this.map.instance.removeOverlay(this.helpTooltip);
    }

    if (this.measureTooltipElement) {
      this.measureTooltipElement.remove();
    }

    if (this.helpTooltipElement) {
      this.helpTooltipElement.remove();
    }

    if (this.vector && !this.source) {
      this.map.instance.removeLayer(this.vector);
    }
  }
}
