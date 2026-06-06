import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import Feature from 'ol/Feature';
import MapBrowserEvent from 'ol/MapBrowserEvent';
import Overlay from 'ol/Overlay';
import { unByKey } from 'ol/Observable';
import { ObjectEvent } from 'ol/Object';
import { EventsKey } from 'ol/events';
import BaseEvent from 'ol/events/Event';
import { Geometry, LineString, Polygon } from 'ol/geom';
import { Type } from 'ol/geom/Geometry';
import { Draw } from 'ol/interaction';
import { DrawEvent } from 'ol/interaction/Draw';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { getArea, getLength } from 'ol/sphere';
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';
import { StyleFunction } from 'ol/style/Style';
import { MapComponent } from '../map.component';

export const MeasureType = {
  LineString: 'LineString',
  Polygon: 'Polygon',
} as const;

export type MeasureType = (typeof MeasureType)[keyof typeof MeasureType];
export type MeasureUnit = 'metric' | 'imperial';

export interface MeasureResult {
  feature: Feature<Geometry>;
  formattedMeasure: string;
  measure: number;
  type: MeasureType;
  unit: MeasureUnit;
}

@Component({
  selector: 'aol-interaction-measure',
  template: '',
  styleUrls: ['./measure.component.css'],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
})
export class MeasureInteractionComponent implements OnChanges, OnDestroy, OnInit {
  @Input()
  source?: VectorSource;
  @Input()
  style?: Style | Style[] | StyleFunction;
  @Input()
  type: MeasureType = MeasureType.LineString;
  @Input()
  unit: MeasureUnit = 'metric';
  @Input()
  showHelpTooltip = false;

  @Output()
  measureComplete = new EventEmitter<MeasureResult>();
  @Output()
  measureStart = new EventEmitter<Feature<Geometry>>();
  @Output()
  drawEnd = new EventEmitter<DrawEvent>();
  @Output()
  drawStart = new EventEmitter<DrawEvent>();
  @Output()
  olChange = new EventEmitter<BaseEvent>();
  @Output()
  olChangeActive = new EventEmitter<ObjectEvent>();
  @Output()
  olError = new EventEmitter<BaseEvent>();
  @Output()
  propertyChange = new EventEmitter<ObjectEvent>();

  instance: Draw;

  private readonly internalSource = new VectorSource();
  private internalLayer?: VectorLayer<VectorSource>;
  private measureTooltip?: Overlay;
  private measureTooltipElement?: HTMLElement;
  private helpTooltip?: Overlay;
  private helpTooltipElement?: HTMLElement;
  private sketch?: Feature<Geometry>;
  private geometryChangeKey?: EventsKey;
  private pointerMoveKey?: EventsKey;
  private readonly staticMeasureOverlays: Overlay[] = [];

  private readonly defaultStyle = new Style({
    fill: new Fill({
      color: 'rgba(255, 255, 255, 0.2)',
    }),
    stroke: new Stroke({
      color: '#2f6fed',
      width: 2,
    }),
    image: new CircleStyle({
      radius: 5,
      fill: new Fill({
        color: '#2f6fed',
      }),
      stroke: new Stroke({
        color: '#fff',
        width: 2,
      }),
    }),
  });

  constructor(private map: MapComponent) {}

  ngOnInit(): void {
    this.syncInternalLayer();
    this.createMeasureTooltip();
    this.syncHelpTooltip();
    this.createInteraction();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.instance) {
      return;
    }

    if (changes.source || changes.style) {
      this.syncInternalLayer();
    }

    if (changes.source || changes.style || changes.type) {
      this.recreateInteraction();
    }

    if (changes.showHelpTooltip) {
      this.syncHelpTooltip();
    }
  }

  setMeasureType(type: MeasureType): void {
    if (this.type === type) {
      return;
    }

    this.type = type;

    if (this.instance) {
      this.recreateInteraction();
    }
  }

  clearMeasurements(): void {
    this.activeSource.clear();
    this.staticMeasureOverlays.forEach((overlay) => this.map.instance.removeOverlay(overlay));
    this.staticMeasureOverlays.length = 0;
    this.resetActiveMeasureTooltip();
  }

  ngOnDestroy(): void {
    this.removeInteraction();
    this.removeInternalLayer();
    this.removeHelpTooltip();
    this.removeMeasureTooltip();
    this.staticMeasureOverlays.forEach((overlay) => this.map.instance.removeOverlay(overlay));
    this.staticMeasureOverlays.length = 0;

    if (this.geometryChangeKey) {
      unByKey(this.geometryChangeKey);
    }
  }

  private get activeSource(): VectorSource {
    return this.source ?? this.internalSource;
  }

  private createInteraction(): void {
    this.instance = new Draw({
      source: this.activeSource,
      style: this.style ?? this.defaultStyle,
      type: this.type as Type,
    });
    this.instance.on('change', (event: BaseEvent) => this.olChange.emit(event));
    this.instance.on('change:active', (event: ObjectEvent) => this.olChangeActive.emit(event));
    this.instance.on('drawend', (event: DrawEvent) => this.handleDrawEnd(event));
    this.instance.on('drawstart', (event: DrawEvent) => this.handleDrawStart(event));
    this.instance.on('error', (event: BaseEvent) => this.olError.emit(event));
    this.instance.on('propertychange', (event: ObjectEvent) => this.propertyChange.emit(event));
    this.map.instance.addInteraction(this.instance);
  }

  private recreateInteraction(): void {
    this.sketch = undefined;

    if (this.geometryChangeKey) {
      unByKey(this.geometryChangeKey);
      this.geometryChangeKey = undefined;
    }

    this.removeInteraction();
    this.createInteraction();
  }

  private removeInteraction(): void {
    if (this.instance) {
      this.map.instance.removeInteraction(this.instance);
    }
  }

  private syncInternalLayer(): void {
    if (this.source) {
      this.removeInternalLayer();
      return;
    }

    if (!this.internalLayer) {
      this.internalLayer = new VectorLayer({
        source: this.internalSource,
        style: this.style ?? this.defaultStyle,
      });
      this.map.instance.addLayer(this.internalLayer);
      return;
    }

    this.internalLayer.setStyle(this.style ?? this.defaultStyle);
  }

  private removeInternalLayer(): void {
    if (!this.internalLayer) {
      return;
    }

    this.map.instance.removeLayer(this.internalLayer);
    this.internalLayer = undefined;
  }

  private handleDrawStart(event: DrawEvent): void {
    this.sketch = event.feature;
    this.measureStart.emit(event.feature);
    this.drawStart.emit(event);

    const geometry = event.feature.getGeometry();
    if (!geometry) {
      return;
    }

    this.geometryChangeKey = geometry.on('change', (geometryEvent: BaseEvent) => {
      this.updateMeasureTooltip(geometryEvent.target as Geometry);
    });
  }

  private handleDrawEnd(event: DrawEvent): void {
    const result = this.getMeasureResult(event.feature);

    if (result) {
      this.measureComplete.emit(result);
    }

    this.drawEnd.emit(event);
    this.freezeActiveMeasureTooltip();
    this.sketch = undefined;

    if (this.geometryChangeKey) {
      unByKey(this.geometryChangeKey);
      this.geometryChangeKey = undefined;
    }

    this.createMeasureTooltip();
  }

  private getMeasureResult(feature: Feature<Geometry>): MeasureResult | undefined {
    const geometry = feature.getGeometry();

    if (geometry instanceof Polygon) {
      const measure = getArea(geometry);

      return {
        feature,
        formattedMeasure: this.formatArea(measure),
        measure,
        type: MeasureType.Polygon,
        unit: this.unit,
      };
    }

    if (geometry instanceof LineString) {
      const measure = getLength(geometry);

      return {
        feature,
        formattedMeasure: this.formatLength(measure),
        measure,
        type: MeasureType.LineString,
        unit: this.unit,
      };
    }

    return undefined;
  }

  private updateMeasureTooltip(geometry: Geometry): void {
    const result = this.getMeasureFromGeometry(geometry);

    if (!result || !this.measureTooltip || !this.measureTooltipElement) {
      return;
    }

    this.measureTooltipElement.innerHTML = result.formattedMeasure;
    this.measureTooltip.setPosition(result.tooltipCoordinate);
  }

  private getMeasureFromGeometry(
    geometry: Geometry
  ): { formattedMeasure: string; tooltipCoordinate: number[] } | undefined {
    if (geometry instanceof Polygon) {
      return {
        formattedMeasure: this.formatArea(getArea(geometry)),
        tooltipCoordinate: geometry.getInteriorPoint().getCoordinates(),
      };
    }

    if (geometry instanceof LineString) {
      return {
        formattedMeasure: this.formatLength(getLength(geometry)),
        tooltipCoordinate: geometry.getLastCoordinate(),
      };
    }

    return undefined;
  }

  private formatLength(length: number): string {
    if (this.unit === 'imperial') {
      const feet = length * 3.28084;

      return feet > 5280 ? `${Math.round((feet / 5280) * 100) / 100} mi` : `${Math.round(feet * 100) / 100} ft`;
    }

    return length > 100 ? `${Math.round((length / 1000) * 100) / 100} km` : `${Math.round(length * 100) / 100} m`;
  }

  private formatArea(area: number): string {
    if (this.unit === 'imperial') {
      const squareFeet = area * 10.7639;

      return squareFeet > 43560
        ? `${Math.round((squareFeet / 43560) * 100) / 100} acres`
        : `${Math.round(squareFeet * 100) / 100} ft<sup>2</sup>`;
    }

    return area > 10000
      ? `${Math.round((area / 1000000) * 100) / 100} km<sup>2</sup>`
      : `${Math.round(area * 100) / 100} m<sup>2</sup>`;
  }

  private createMeasureTooltip(): void {
    this.measureTooltipElement = document.createElement('div');
    this.measureTooltipElement.className = 'aol-measure-tooltip';
    this.measureTooltip = new Overlay({
      element: this.measureTooltipElement,
      offset: [0, -15],
      positioning: 'bottom-center',
      stopEvent: false,
      insertFirst: false,
    });
    this.map.instance.addOverlay(this.measureTooltip);
  }

  private freezeActiveMeasureTooltip(): void {
    if (!this.measureTooltip || !this.measureTooltipElement) {
      return;
    }

    this.measureTooltipElement.className = 'aol-measure-tooltip aol-measure-tooltip-static';
    this.measureTooltip.setOffset([0, -7]);
    this.staticMeasureOverlays.push(this.measureTooltip);
    this.measureTooltip = undefined;
    this.measureTooltipElement = undefined;
  }

  private resetActiveMeasureTooltip(): void {
    this.removeMeasureTooltip();
    this.createMeasureTooltip();
  }

  private removeMeasureTooltip(): void {
    if (this.measureTooltip) {
      this.map.instance.removeOverlay(this.measureTooltip);
      this.measureTooltip = undefined;
    }

    this.measureTooltipElement?.remove();
    this.measureTooltipElement = undefined;
  }

  private syncHelpTooltip(): void {
    if (this.showHelpTooltip) {
      this.createHelpTooltip();
      return;
    }

    this.removeHelpTooltip();
  }

  private createHelpTooltip(): void {
    if (this.helpTooltip) {
      return;
    }

    this.helpTooltipElement = document.createElement('div');
    this.helpTooltipElement.className = 'aol-measure-tooltip aol-measure-tooltip-help aol-measure-hidden';
    this.helpTooltip = new Overlay({
      element: this.helpTooltipElement,
      offset: [15, 0],
      positioning: 'center-left',
    });
    this.map.instance.addOverlay(this.helpTooltip);
    this.pointerMoveKey = this.map.instance.on('pointermove', (event: MapBrowserEvent<PointerEvent>) => {
      this.handlePointerMove(event);
    });
    this.map.instance.getViewport().addEventListener('mouseout', this.handleMouseOut);
  }

  private removeHelpTooltip(): void {
    if (this.pointerMoveKey) {
      unByKey(this.pointerMoveKey);
      this.pointerMoveKey = undefined;
    }

    this.map.instance.getViewport().removeEventListener('mouseout', this.handleMouseOut);

    if (this.helpTooltip) {
      this.map.instance.removeOverlay(this.helpTooltip);
      this.helpTooltip = undefined;
    }

    this.helpTooltipElement?.remove();
    this.helpTooltipElement = undefined;
  }

  private readonly handlePointerMove = (event: MapBrowserEvent<PointerEvent>): void => {
    if (event.dragging || !this.helpTooltip || !this.helpTooltipElement) {
      return;
    }

    this.helpTooltipElement.innerHTML = this.helpMessage;
    this.helpTooltip.setPosition(event.coordinate);
    this.helpTooltipElement.classList.remove('aol-measure-hidden');
  };

  private readonly handleMouseOut = (): void => {
    this.helpTooltipElement?.classList.add('aol-measure-hidden');
  };

  private get helpMessage(): string {
    const geometry = this.sketch?.getGeometry();

    if (geometry instanceof Polygon) {
      return 'Click to continue drawing the polygon';
    }

    if (geometry instanceof LineString) {
      return 'Click to continue drawing the line';
    }

    return 'Click to start measuring';
  }
}
