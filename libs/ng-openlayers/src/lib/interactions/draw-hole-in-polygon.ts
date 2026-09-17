import { Component, EventEmitter, OnDestroy, Output, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { Feature } from 'ol';
import { Coordinate } from 'ol/coordinate.js';
import { DrawEvent } from 'ol/interaction/Draw.js';
import { Geometry, LinearRing, Polygon } from 'ol/geom.js';
import BaseEvent from 'ol/events/Event.js';
import { EventsKey } from 'ol/events.js';
import { unByKey } from 'ol/Observable.js';
import Fill from 'ol/style/Fill.js';
import Style from 'ol/style/Style.js';
import { DrawInteractionComponent } from './draw.component';
import { MapComponent } from '../map.component';
import MapBrowserEvent from 'ol/MapBrowserEvent.js';
import { Condition, platformModifierKey } from 'ol/events/condition.js';
import VectorLayer from 'ol/layer/Vector.js';

export enum DrawHoleInPolygonInteractionErrorType {
  MoPolygonFound = 'noPolygonFound',
  DrawVertexOutsidePolygon = 'drawVertexOutsidePolygon',
  NoLinearRingFoundToRemove = 'noLinearRingFoundToRemove',
  NoVectorLayerFound = 'noVectorLayerFound',
}

export interface DrawHoleInPolygonInteractionError {
  type: DrawHoleInPolygonInteractionErrorType;
  event: DrawEvent | MapBrowserEvent;
  message: string;
}

@Component({
  selector: 'aol-interaction-draw-hole-in-polygon',
  template: `
    <aol-interaction-draw
      #drawInstance
      type="Polygon"
      (drawEnd)="onDrawEnd()"
      (drawStart)="onDrawStart($event)"
      (olDrawAbort)="onDrawAbort($event)"
      [style]="staticStyle"
      [condition]="drawCondition"
    >
    </aol-interaction-draw>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DrawInteractionComponent],
})
export class DrawHoleInPolygonInteractionComponent implements OnDestroy {
  @ViewChild('drawInstance') drawInteractionComponent: DrawInteractionComponent;
  @Output()
  drawEnd = new EventEmitter<Feature>();
  @Output()
  drawError = new EventEmitter<DrawHoleInPolygonInteractionError>();

  foundFeatureToApplyEnclave: Feature<Geometry>;
  foundPolygonToApplyEnclave: Polygon;
  private geometryChangeKey?: EventsKey;
  private originalGeometry?: Polygon;
  staticStyle = new Style({
    fill: new Fill({
      color: 'rgba(0,0,0,0)',
    }),
  });

  constructor(private map: MapComponent) {}

  onDrawStart = (event: DrawEvent) => {
    this.cancelSketch();
    const geometry = event.feature.getGeometry();
    if (!(geometry instanceof Polygon)) return;
    const startCoordinate = geometry.getCoordinates()[0][0];
    const startPixel = this.map.instance.getPixelFromCoordinate(startCoordinate);
    const feature = this.map.instance.forEachFeatureAtPixel(startPixel, (candidate) => {
      return candidate instanceof Feature && candidate.getGeometry() instanceof Polygon ? candidate : undefined;
    });

    if (feature) {
      this.foundFeatureToApplyEnclave = feature;
      this.foundPolygonToApplyEnclave = feature.getGeometry() as Polygon;
      this.originalGeometry = this.foundPolygonToApplyEnclave;
      this.geometryChangeKey = geometry.on('change', this.onGeomChange);
      this.map.instance.on('click', this.onMapClick);
    } else {
      this.drawError.emit({
        type: DrawHoleInPolygonInteractionErrorType.MoPolygonFound,
        event,
        message: 'No polygon found to draw hole.',
      });
      this.drawInteractionComponent.instance.abortDrawing();
    }
  };

  onGeomChange = (event: BaseEvent) => {
    if (!this.originalGeometry) return;
    const coordinates: Coordinate[] = (event.target as Polygon).getCoordinates()[0];
    if (coordinates.every((coordinate) => this.originalGeometry.intersectsCoordinate(coordinate))) {
      const geometry = this.originalGeometry.clone();
      geometry.appendLinearRing(new LinearRing(coordinates));
      this.foundFeatureToApplyEnclave.setGeometry(geometry);
    }
  };

  onDrawEnd = () => {
    if (!this.originalGeometry) return;
    const feature = this.foundFeatureToApplyEnclave;
    this.releaseSketch();
    this.drawEnd.emit(new Feature(feature.getGeometry().clone()));
  };

  onMapClick = (event: MapBrowserEvent) => {
    const coordinate = this.map.instance.getCoordinateFromPixel(event.pixel);
    if (!this.foundPolygonToApplyEnclave?.intersectsCoordinate(coordinate)) {
      event.preventDefault();
      event.stopPropagation();
      this.drawError.emit({
        type: DrawHoleInPolygonInteractionErrorType.DrawVertexOutsidePolygon,
        event,
        message: 'Cannot add vertex outside the polygon',
      });
      this.drawInteractionComponent.instance.removeLastPoint();
      return false;
    }
  };

  drawCondition: Condition = (event) => {
    const layers = this.map.instance.getAllLayers().filter((layer) => layer instanceof VectorLayer);
    if (layers.length === 0) {
      this.drawError.emit({
        type: DrawHoleInPolygonInteractionErrorType.NoVectorLayerFound,
        event,
        message: 'No vector layer found',
      });
      return false;
    }

    if (!platformModifierKey(event)) return true;
    for (const layer of layers) {
      const source = layer.getSource();
      const feature = source?.getClosestFeatureToCoordinate(event.coordinate, (candidate: Feature<Geometry>) => {
        const geometry = candidate.getGeometry();
        return (
          geometry instanceof Polygon &&
          new Polygon([geometry.getCoordinates()[0]]).intersectsCoordinate(event.coordinate)
        );
      });
      if (feature) {
        this.checkAndRemoveHole(event, feature);
        return false;
      }
    }
    return true;
  };

  ngOnDestroy(): void {
    this.cancelSketch();
  }

  onDrawAbort(event: DrawEvent) {
    if (this.geometryChangeKey && this.geometryChangeKey.target !== event.feature.getGeometry()) return;
    this.cancelSketch();
  }

  private releaseSketch(): void {
    this.map.instance.un('click', this.onMapClick);
    if (this.geometryChangeKey) unByKey(this.geometryChangeKey);
    this.geometryChangeKey = undefined;
    this.originalGeometry = undefined;
  }

  private cancelSketch(): void {
    if (this.originalGeometry) this.foundFeatureToApplyEnclave.setGeometry(this.originalGeometry);
    this.releaseSketch();
  }

  removeLastLinearRing() {
    const polygon = this.foundFeatureToApplyEnclave?.getGeometry();
    if (polygon instanceof Polygon && polygon.getLinearRingCount() > 1) {
      this.foundFeatureToApplyEnclave.setGeometry(new Polygon(polygon.getCoordinates().slice(0, -1)));
    }
  }

  checkAndRemoveHole(e: MapBrowserEvent, foundFeatureToApplyEnclave: Feature<Geometry>) {
    const polygon = foundFeatureToApplyEnclave.getGeometry() as Polygon;
    let coordinates = polygon.getCoordinates();
    const coordinateIndex = coordinates.slice(1).findIndex((coordinate) => {
      const polygonFromLinearRing = new Polygon([coordinate], 'XY');
      return polygonFromLinearRing.intersectsCoordinate(e.coordinate);
    });

    if (coordinateIndex > -1) {
      coordinates = coordinates.filter((_, index) => index !== coordinateIndex + 1);
      const newPolygon = new Polygon(coordinates);
      foundFeatureToApplyEnclave.setGeometry(newPolygon);

      this.drawEnd.emit(foundFeatureToApplyEnclave);

      return true;
    } else {
      this.drawError.emit({
        type: DrawHoleInPolygonInteractionErrorType.NoLinearRingFoundToRemove,
        event: e,
        message: 'No linear ring found to remove',
      });
      return false;
    }
  }
}
