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
    // Add click listener to validate vertices as they're added
    this.map.instance.on('click', this.onMapClick);
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

    //Binding onGeomChange function with drawing feature f. This function will be called only when you are drawing holes over a polygon.
    e.feature.getGeometry().on('change', this.onGeomChange);
  };

  /*
 This function will be called only when you are drawing holes and it will continously invoked on geometry change.
 */
  onGeomChange = (e: DrawEvent) => {
    const coordinates = e.target.getCoordinates()[0];

    // Only proceed if we have valid coordinates within the polygon
    if (coordinates.every((coord) => this.intersectedPolygon.intersectsCoordinate(coord))) {
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
    // this.map.instance.un('click', this.onMapClick);

    this.drawEnd.emit(this.intersectedPolygon);
  };

  onMapClick = (e: MapBrowserEvent<MouseEvent>) => {
    if (!this.isDrawing) return;

    const coordinate = this.map.instance.getCoordinateFromPixel(e.pixel);

    // Check if the coordinate is inside any of the holes
    const polygonHoles = this.intersectedPolygon.getLinearRings().slice(1);
    const isInsideHole = polygonHoles.some((hole) => {
      const polygonFromLinearRing = new Polygon([hole.getCoordinates()]);
      return polygonFromLinearRing.intersectsCoordinate(coordinate);
    });
    console.log('isInsideHole', isInsideHole);

    console.log('polygonIntersectsCoordinate', this.intersectedPolygon.intersectsCoordinate(coordinate));

    // Validate if the clicked point is inside the polygon
    if (!this.intersectedPolygon.intersectsCoordinate(coordinate)) {
      // Prevent adding the vertex by stopping the event propagation
      e.preventDefault();
      e.stopPropagation();
      console.error('Cannot add vertex outside the polygon boundary');
      // this.drawInteractionComponent.instance.removeLastPoint();
      this.drawInteractionComponent.instance.abortDrawing();
      // this.removeLastLinearRing();

      return false;
    }
  };

  removeLastLinearRing() {
    const polygon = this.foundFeaturePolygonToApplyEnclave.getGeometry() as Polygon;
    let coordinates = polygon.getCoordinates();
    coordinates = coordinates.slice(0, -1); // Remove the last linear ring
    const newPolygon = new Polygon(coordinates);
    this.foundFeaturePolygonToApplyEnclave.setGeometry(newPolygon);
    console.log('Last linear ring removed from polygon');
  }

  ngOnDestroy(): void {
    this.map.instance.un('click', this.onMapClick);
  }

  onDrawAbort(e: DrawEvent) {
    this.isDrawing = false;
    console.log('Draw aborted', e);
  }
}
