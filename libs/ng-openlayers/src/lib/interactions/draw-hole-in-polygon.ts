import { AfterViewInit, Component, EventEmitter, Output, ViewChild } from '@angular/core';
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
    <aol-interaction-draw #drawInstance type="Polygon" (drawEnd)="onDrawEnd($event)" [style]="staticStyle">
    </aol-interaction-draw>
  `,
  standalone: true,
  imports: [DrawInteractionComponent],
})
export class DrawHoleInPolygonInteractionComponent implements AfterViewInit {
  @ViewChild('drawInstance') drawInteractionComponent: DrawInteractionComponent;
  @Output()
  drawEnd = new EventEmitter<Feature<Geometry>>();
  instance: Draw;
  private intersectedGeometryFeature: Feature<Geometry>;
  private coordsLength: number;
  private intersectedPolygon: Polygon;
  private vectorLayer: VectorLayer<VectorSource>;
  private isDrawing: boolean = false;

  constructor(private map: MapComponent) {}

  ngAfterViewInit() {
    //Get Polygon geometry on drawstart that intersects with currently drawing holes.
    this.vectorLayer = this.map.instance
      .getLayers()
      .getArray()
      .find((l) => l instanceof VectorLayer) as VectorLayer<Vector>;
    console.log('Vector Layer', this.vectorLayer);

    this.drawInteractionComponent.instance.on('drawstart', this.onDrawStart);
    // this.drawInteractionComponent.instance.on('drawend', (event: DrawEvent) => this.drawEnd.emit(event));
    // Add click listener to validate vertices as they're added
    this.map.instance.on('click', this.onMapClick);
  }

  onDrawStart = (e: DrawEvent) => {
    if (!this.vectorLayer) {
      alert('No vector layer found');
      e.target.finishDrawing();
      return;
    }

    this.vectorLayer.getSource().forEachFeatureIntersectingExtent(e.feature.getGeometry().getExtent(), (feature) => {
      this.intersectedGeometryFeature = feature;
    });
    if (!this.intersectedGeometryFeature) {
      alert('No Feature Found to draw holes');
      e.target.abortDrawing();
      return;
    }

    this.intersectedPolygon = this.intersectedGeometryFeature.getGeometry() as Polygon;

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
      geom.appendLinearRing(linear_ring);
      this.intersectedGeometryFeature.setGeometry(geom);
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

    console.log('Draw hole in polygon', e.feature.clone().getGeometry());
    this.drawEnd.emit(this.intersectedGeometryFeature);

    setTimeout(() => {
      this.vectorLayer.getSource().removeFeature(e.feature);
    }, 1000);
    this.intersectedGeometryFeature = undefined;
  };

  onMapClick = (e: MapBrowserEvent<MouseEvent>) => {
    if (!this.isDrawing || !this.intersectedPolygon) return;

    const coordinate = this.map.instance.getCoordinateFromPixel(e.pixel);

    // Validate if the clicked point is inside the polygon
    if (!this.intersectedPolygon.intersectsCoordinate(coordinate)) {
      // Prevent adding the vertex by stopping the event propagation
      e.preventDefault();
      e.stopPropagation();
      alert('Cannot add vertex outside the polygon boundary');
      return false;
    }

    // this.currentCoordinates.push(coordinate);
  };
}
