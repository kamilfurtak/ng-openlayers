// https://geoknight.medium.com/draw-holes-in-openlayers-polygon-6df15a583137
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
      (drawEnd)="onDrawEnd($event)"
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
  drawEnd = new EventEmitter<Polygon>();
  instance: Draw;
  foundFeaturePolygonToApplyEnclave: Feature<Geometry>;
  private coordsLength: number;
  private intersectedPolygon: Polygon;
  private vectorLayer: VectorLayer<VectorSource>;
  private isDrawing = false;

  constructor(private map: MapComponent) {}

  ngAfterViewInit() {
    //Get Polygon geometry on drawstart that intersects with currently drawing holes.
    this.vectorLayer = this.map.instance
      .getLayers()
      .getArray()
      .find((l) => l instanceof VectorLayer) as VectorLayer<Vector>;
    // console.log('Vector Layer', this.vectorLayer);

    // this.drawInteractionComponent.instance.on('drawstart', this.onDrawStart);
    // this.drawInteractionComponent.instance.on('drawend', (event: DrawEvent) => this.drawEnd.emit(event));
    // Add click listener to validate vertices as they're added
    // this.map.instance.on('click', this.onMapClick);
  }

  onDrawStart = (e: DrawEvent) => {
    if (!this.vectorLayer) {
      alert('No vector layer found');
      e.target.abortDrawing();
      return;
    }

    //Get Polygon geometry on drawstart that intersects with currently drawing holes.
    this.vectorLayer.getSource().forEachFeatureIntersectingExtent(e.feature.getGeometry().getExtent(), (feature) => {
      this.foundFeaturePolygonToApplyEnclave = feature;
    });

    //Abort Polygon hole drawing when there is no feature underneath it.
    if (!this.foundFeaturePolygonToApplyEnclave) {
      alert('No Feature Found to draw holes');
      e.target.abortDrawing();
      return;
    }

    this.intersectedPolygon = this.foundFeaturePolygonToApplyEnclave.getGeometry() as Polygon;
    this.coordsLength = this.intersectedPolygon.getCoordinates().length;
    this.isDrawing = true;

    // Add click listener to validate vertices as they're added
    this.map.instance.on('click', this.onMapClick);
    //Binding onGeomChange function with drawing feature f. This function will be called only when you are drawing holes over a polygon.
    e.feature.getGeometry().on('change', this.onGeomChange);
  };

  /*
 This function will be called only when you are drawing holes and it will continously invoked on geometry change.
 */
  onGeomChange = (e: DrawEvent) => {
    const coordinates = e.target.getCoordinates()[0];
    // console.log('Invalid Coordinates', coordinates);

    // Only proceed if we have valid coordinates within the polygon
    if (coordinates.every((coord) => this.intersectedPolygon.intersectsCoordinate(coord))) {
      // console.log('Valid coordinates', coordinates);
      const linear_ring = new LinearRing(coordinates);
      const polygonCoordinates = this.intersectedPolygon.getCoordinates();
      const geom = new Polygon(polygonCoordinates.slice(0, this.coordsLength));

      //Add hole coordinates to polygon and reset the polygon geometry
      geom.appendLinearRing(linear_ring);
      this.foundFeaturePolygonToApplyEnclave.setGeometry(geom);
    }
  };
  staticStyle = new Style({
    // Line and Polygon Style
    // stroke: new Stroke({
    //   color: '#0e97fa',
    //   width: 4,
    // }),
    fill: new Fill({
      // color: 'rgba(0, 153, 255, 0.2)',
      color: 'rgba(0,0,0,0)',
    }),
  });

  /*
This function will be called when your hole drawing is finished.
*/
  onDrawEnd = (e: DrawEvent) => {
    this.isDrawing = false;
    this.map.instance.un('click', this.onMapClick);

    // console.log('Draw hole in polygon', e.feature.clone().getGeometry());
    this.drawEnd.emit(this.intersectedPolygon);
    // console.log('Draw hole in polygon', this.foundFeaturePolygonToApplyEnclave.getGeometry());
    // console.log('Draw hole in polygon', this.intersectedPolygon.getCoordinates());

    // setTimeout(() => {
    //   this.vectorLayer.getSource().removeFeature(e.feature);
    // }, 1000);
    // this.foundFeaturePolygonToApplyEnclave = undefined;
  };

  onMapClick = (e: MapBrowserEvent<MouseEvent>) => {
    if (!this.isDrawing || !this.intersectedPolygon) return;

    const coordinate = this.map.instance.getCoordinateFromPixel(e.pixel);

    // Validate if the clicked point is inside the polygon
    if (!this.intersectedPolygon.intersectsCoordinate(coordinate)) {
      // Prevent adding the vertex by stopping the event propagation
      e.preventDefault();
      e.stopPropagation();
      console.error('Cannot add vertex outside the polygon boundary');
      // this.drawInteractionComponent.instance.removeLastPoint();
      this.drawInteractionComponent.instance.finishDrawing();

      return false;
    }

    // this.currentCoordinates.push(coordinate);
  };

  ngOnDestroy(): void {
    this.map.instance.un('click', this.onMapClick);
  }

  onDrawAbort(e: DrawEvent) {
    console.log('Draw aborted', e);
  }

  removeHoles() {
    if (this.foundFeaturePolygonToApplyEnclave) {
      const originalPolygon = this.foundFeaturePolygonToApplyEnclave.getGeometry() as Polygon;
      const outerRing = originalPolygon.getLinearRing(0);
      const newPolygon = new Polygon([outerRing.getCoordinates()]);

      this.foundFeaturePolygonToApplyEnclave.setGeometry(newPolygon);
      console.log('Holes removed from polygon');
    } else {
      alert('No polygon with holes found.');
    }
  }

  checkIfPolygonHasHoles() {
    if (this.foundFeaturePolygonToApplyEnclave) {
      const originalPolygon = this.foundFeaturePolygonToApplyEnclave?.getGeometry() as Polygon;
      console.log('Holes', originalPolygon.getLinearRingCount());
      return originalPolygon.getLinearRingCount() > 1;
    }
  }
}
