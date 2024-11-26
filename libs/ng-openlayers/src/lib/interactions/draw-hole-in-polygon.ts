import { AfterViewInit, Component, EventEmitter, OnDestroy, Output, ViewChild } from '@angular/core';
import { Feature } from 'ol';
import { DrawEvent } from 'ol/interaction/Draw';
import { Draw } from 'ol/interaction';
import { Vector } from 'ol/source';
import VectorLayer from 'ol/layer/Vector';
import { Geometry, LinearRing, Polygon } from 'ol/geom';
import { Fill, Style } from 'ol/style';
import { DrawInteractionComponent } from './draw.component';
import { MapComponent } from '../map.component';
import VectorSource from 'ol/source/Vector';
import MapBrowserEvent from 'ol/MapBrowserEvent';

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
    >
    </aol-interaction-draw>
  `,
  standalone: true,
  imports: [DrawInteractionComponent],
})
export class DrawHoleInPolygonInteractionComponent implements AfterViewInit, OnDestroy {
  @ViewChild('drawInstance') drawInteractionComponent: DrawInteractionComponent;
  @Output()
  drawEnd = new EventEmitter<Feature>();
  instance: Draw;
  foundFeaturePolygonToApplyEnclave: Feature<Geometry>;
  private coordsLength: number;
  private intersectedPolygon: Polygon;
  private vectorLayer: VectorLayer<VectorSource>;
  private isDrawing = false;

  constructor(private map: MapComponent) {}

  ngAfterViewInit() {
    this.map.instance.on('click', this.onMapClick);
  }

  onDrawStart = (e: DrawEvent) => {
    this.vectorLayer = this.map.instance
      .getLayers()
      .getArray()
      .find((l) => l instanceof VectorLayer) as VectorLayer<Vector>;

    if (!this.vectorLayer) {
      console.warn('No vector layer found');
      e.target.abortDrawing();
      return;
    }

    const startCoordinate = (e.feature.getGeometry() as Polygon).getCoordinates()[0][0];
    const startPixel = this.map.instance.getPixelFromCoordinate(startCoordinate);
    console.log('startPixel', startPixel);

    const foundFeatureLike = this.map.instance.forEachFeatureAtPixel(startPixel, (feature) => {
      return feature;
    });

    console.log('foundFeatureLike', foundFeatureLike);

    this.vectorLayer.getSource().forEachFeatureIntersectingExtent(e.feature.getGeometry().getExtent(), (feature) => {
      this.foundFeaturePolygonToApplyEnclave = feature;
    });

    if (!this.foundFeaturePolygonToApplyEnclave) {
      console.warn('No Feature Found to draw holes');
      e.target.abortDrawing();
      return;
    }

    this.intersectedPolygon = this.foundFeaturePolygonToApplyEnclave.getGeometry() as Polygon;
    this.coordsLength = this.intersectedPolygon.getCoordinates().length;
    this.isDrawing = true;

    e.feature.getGeometry().on('change', this.onGeomChange);
  };

  onGeomChange = (e: DrawEvent) => {
    const coordinates = e.target.getCoordinates()[0];

    if (coordinates.every((coord) => this.intersectedPolygon.intersectsCoordinate(coord))) {
      const linear_ring = new LinearRing(coordinates);
      const polygonCoordinates = this.intersectedPolygon.getCoordinates();
      const geom = new Polygon(polygonCoordinates.slice(0, this.coordsLength));

      geom.appendLinearRing(linear_ring);
      this.foundFeaturePolygonToApplyEnclave.setGeometry(geom);
    }
  };
  staticStyle = new Style({
    fill: new Fill({
      color: 'rgba(0,0,0,0)',
    }),
  });

  onDrawEnd = () => {
    console.log('onDrawEnd');
    this.isDrawing = false;

    this.drawEnd.emit(new Feature(this.foundFeaturePolygonToApplyEnclave.getGeometry()));
  };

  onMapClick = (e: MapBrowserEvent<MouseEvent>) => {
    if (!this.isDrawing) return;

    const coordinate = this.map.instance.getCoordinateFromPixel(e.pixel);

    if (!this.intersectedPolygon.intersectsCoordinate(coordinate)) {
      e.preventDefault();
      e.stopPropagation();
      console.error('Cannot add vertex outside the polygon');
      this.drawInteractionComponent.instance.removeLastPoint();

      return false;
    }
  };

  ngOnDestroy(): void {
    this.map.instance.un('click', this.onMapClick);
  }

  onDrawAbort(e: DrawEvent) {
    console.log('onDrawAbort', e);
    // this.removeLastLinearRing();
    this.isDrawing = false;
  }

  removeLastLinearRing() {
    const polygon = this.foundFeaturePolygonToApplyEnclave.getGeometry() as Polygon;
    let coordinates = polygon.getCoordinates();
    coordinates = coordinates.slice(0, -1); // Remove the last linear ring
    const newPolygon = new Polygon(coordinates);
    this.foundFeaturePolygonToApplyEnclave.setGeometry(newPolygon);
    console.log('Last linear ring removed from polygon');
  }
}
