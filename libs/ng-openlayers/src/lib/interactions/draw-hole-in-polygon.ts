import { Component, EventEmitter, OnDestroy, Output, ViewChild } from '@angular/core';
import { Feature } from 'ol';
import { DrawEvent } from 'ol/interaction/Draw';
import { Geometry, LinearRing, Polygon } from 'ol/geom';
import { Fill, Style } from 'ol/style';
import { DrawInteractionComponent } from './draw.component';
import { MapComponent } from '../map.component';
import MapBrowserEvent from 'ol/MapBrowserEvent';
import { Condition, platformModifierKey } from 'ol/events/condition';
import { containsCoordinate } from 'ol/extent';
import VectorLayer from 'ol/layer/Vector';

export enum DrawHoleInPolygonInteractionErrorType {
  MoPolygonFound = 'noPolygonFound',
  DrawVertexOutsidePolygon = 'drawVertexOutsidePolygon',
  NoLinearRingFoundToRemove = 'noLinearRingFoundToRemove',
  NoVectorLayerFound = 'noVectorLayerFound',
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
  standalone: true,
  imports: [DrawInteractionComponent],
})
export class DrawHoleInPolygonInteractionComponent implements OnDestroy {
  @ViewChild('drawInstance') drawInteractionComponent: DrawInteractionComponent;
  @Output()
  drawEnd = new EventEmitter<Feature>();
  @Output()
  drawError = new EventEmitter<{
    type: DrawHoleInPolygonInteractionErrorType;
    event: DrawEvent | MapBrowserEvent<MouseEvent>;
    message: string;
  }>();

  foundFeatureToApplyEnclave: Feature<Geometry>;
  foundPolygonToApplyEnclave: Polygon;
  staticStyle = new Style({
    fill: new Fill({
      color: 'rgba(0,0,0,0)',
    }),
  });

  constructor(private map: MapComponent) {}

  onDrawStart = (e: DrawEvent) => {
    const startCoordinate = (e.feature.getGeometry() as Polygon).getCoordinates()[0][0];
    const startPixel = this.map.instance.getPixelFromCoordinate(startCoordinate);

    const foundFeatureLike = this.map.instance.forEachFeatureAtPixel(startPixel, (feature) => {
      return feature;
    });

    if (foundFeatureLike?.getGeometry().getType() === 'Polygon') {
      this.foundFeatureToApplyEnclave = foundFeatureLike as Feature<Geometry>;
      this.foundPolygonToApplyEnclave = this.foundFeatureToApplyEnclave.getGeometry() as Polygon;
      e.feature.getGeometry().on('change', this.onGeomChange);
      this.map.instance.on('click', this.onMapClick);
    } else {
      this.drawError.emit({
        type: DrawHoleInPolygonInteractionErrorType.MoPolygonFound,
        event: e,
        message: 'No polygon found to draw hole.',
      });
      console.warn('No polygon found to draw hole.');
      e.target.abortDrawing();
    }
  };

  onGeomChange = (e: DrawEvent) => {
    const coordinates = e.target.getCoordinates()[0];

    if (coordinates.every((coord) => this.foundPolygonToApplyEnclave.intersectsCoordinate(coord))) {
      const linear_ring = new LinearRing(coordinates);
      const polygonCoordinates = this.foundPolygonToApplyEnclave.getCoordinates();
      const coordsLength = this.foundPolygonToApplyEnclave.getCoordinates().length;

      const geom = new Polygon(polygonCoordinates.slice(0, coordsLength));

      geom.appendLinearRing(linear_ring);
      this.foundFeatureToApplyEnclave.setGeometry(geom);
    }
  };

  onDrawEnd = () => {
    console.log('onDrawEnd');
    this.map.instance.un('click', this.onMapClick);

    this.drawEnd.emit(new Feature(this.foundFeatureToApplyEnclave.getGeometry()));
  };

  onMapClick = (e: MapBrowserEvent<MouseEvent>) => {
    console.log('onMapClick', e);

    const coordinate = this.map.instance.getCoordinateFromPixel(e.pixel);

    if (!this.foundPolygonToApplyEnclave?.intersectsCoordinate(coordinate)) {
      e.preventDefault();
      e.stopPropagation();
      console.warn('Cannot add vertex outside the polygon');
      this.drawError.emit({
        type: DrawHoleInPolygonInteractionErrorType.DrawVertexOutsidePolygon,
        event: e,
        message: 'Cannot add vertex outside the polygon',
      });
      this.drawInteractionComponent.instance.removeLastPoint();

      return false;
    }
  };
  drawCondition: Condition = (e) => {
    const vectorLayer = this.map.instance
      .getLayers()
      .getArray()
      .find((l) => l instanceof VectorLayer);

    if (!vectorLayer) {
      this.drawError.emit({
        type: DrawHoleInPolygonInteractionErrorType.NoVectorLayerFound,
        event: e,
        message: 'No vector layer found',
      });
      return false;
    }

    const foundFeatureToRemoveEnclave = vectorLayer
      .getSource()
      .getClosestFeatureToCoordinate(e.coordinate, (feature) => {
        console.log(feature.getGeometry().intersectsCoordinate(e.coordinate));
        return feature.getGeometry().getType() === 'Polygon';
      });

    console.log('foundFeatureToApplyEnclave', foundFeatureToRemoveEnclave);

    const isPlatformModifierKey = platformModifierKey(e);
    if (isPlatformModifierKey && foundFeatureToRemoveEnclave) {
      this.checkAndRemoveHole(e, foundFeatureToRemoveEnclave);
      return false;
    }
    return true;
  };

  ngOnDestroy(): void {
    this.map.instance.un('click', this.onMapClick);
  }

  onDrawAbort(e: DrawEvent) {
    this.map.instance.un('click', this.onMapClick);

    console.log('onDrawAbort', e);
    const coordinates = (e.feature.getGeometry() as Polygon).getCoordinates()[0];
    console.log('coordinates', coordinates.length);
    if (coordinates.length > 2) {
      this.removeLastLinearRing();
    }
  }

  removeLastLinearRing() {
    const polygon = this.foundFeatureToApplyEnclave.getGeometry() as Polygon;
    let coordinates = polygon.getCoordinates();
    console.log('coordinates', coordinates);
    coordinates = coordinates.slice(0, -1); // Remove the last linear ring
    const newPolygon = new Polygon(coordinates);
    this.foundFeatureToApplyEnclave.setGeometry(newPolygon);
  }

  checkAndRemoveHole(e: MapBrowserEvent<MouseEvent>, foundFeatureToApplyEnclave: Feature<Geometry>) {
    const polygon = foundFeatureToApplyEnclave.getGeometry() as Polygon;
    let coordinates = polygon.getCoordinates();
    const coordinateIndex = coordinates.slice(1).findIndex((coordinate) => {
      const polygonFromLinearRing = new Polygon([coordinate], 'XY');
      return containsCoordinate(polygonFromLinearRing.getExtent(), e.coordinate);
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
      console.warn('No linear ring found to remove');
      return false;
    }
  }
}
