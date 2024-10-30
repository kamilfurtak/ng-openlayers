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
  drawEnd = new EventEmitter<DrawEvent>();
  instance: Draw;
  private intersectedGeometryFeature: Feature<Geometry>;
  private coordsLength: number;
  private intersectedPolygon: Polygon;
  private vectorLayer: VectorLayer<VectorSource>;
  constructor(private map: MapComponent) {}

  ngAfterViewInit() {
    //Get Polygon geometry on drawstart that intersects with currently drawing holes.
     this.vectorLayer = this.map.instance
      .getLayers()
      .getArray()
      .find((l) => l instanceof VectorLayer) as VectorLayer<Vector>;

    this.drawInteractionComponent.instance.on('drawstart', this.onDrawStart);
    this.drawInteractionComponent.instance.on('drawend', (event: DrawEvent) => this.drawEnd.emit(event));
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

    //Binding onGeomChange function with drawing feature f. This function will be called only when you are drawing holes over a polygon.
    e.feature.getGeometry().on('change', this.onGeomChange);
  };

  /*
 This function will be called only when you are drawing holes and it will continously invoked on geometry change.
 */
  onGeomChange = (e: DrawEvent) => {
    const linear_ring = new LinearRing(e.target.getCoordinates()[0]);

    const coordinates = this.intersectedPolygon.getCoordinates();
    const geom = new Polygon(coordinates.slice(0, this.coordsLength));

    geom.appendLinearRing(linear_ring);
    console.log('Geom', geom.getArea());
    this.intersectedGeometryFeature.setGeometry(geom);
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

  endDraw(feature: Feature) {
    console.log('Draw hole in polygon', feature);
  }

  /*
This function will be called when your hole drawing is finished.
*/
  onDrawEnd =(e) => {
    console.log('Draw hole in polygon', e.feature);
    setTimeout(() => {
      this.vectorLayer.getSource().removeFeature(e.feature);
    }, 1000);
    this.intersectedGeometryFeature = undefined;
  }
}
