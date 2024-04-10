import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Feature } from 'ol';
import { DrawEvent } from 'ol/interaction/Draw';
import { Draw } from 'ol/interaction';
import { Vector } from 'ol/source';
import VectorLayer from 'ol/layer/Vector';
import { Geometry, LinearRing, Polygon } from 'ol/geom';
import { Fill, Style } from 'ol/style';
import { DrawInteractionComponent } from './draw.component';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-interaction-draw-hole-in-polygon',
  template: `
    <aol-interaction-draw #drawInstance type="Polygon" (drawEnd)="endDraw($event.feature)" [style]="staticStyle">
    </aol-interaction-draw>
  `,
})
export class DrawHoleInPolygonInteractionComponent implements OnInit, AfterViewInit {
  @ViewChild('drawInstance') drawInteractionComponent: DrawInteractionComponent;
  @Output()
  drawEnd = new EventEmitter<DrawEvent>();
  instance: Draw;
  private intersectedGeometryFeature: Feature<Geometry>;
  private coordsLength: number;
  private intersectedPolygon: Polygon;
  constructor(private map: MapComponent) {
    console.log(this.map);
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.drawInteractionComponent.instance.on('drawstart', this.onDrawStart);
    this.drawInteractionComponent.instance.on('drawend', (event: DrawEvent) => this.drawEnd.emit(event));
  }

  onDrawStart = (e: DrawEvent) => {
    const vector_layer = this.map.instance
      .getLayers()
      .getArray()
      .find((l) => l instanceof VectorLayer) as VectorLayer<Vector>;

    if (!vector_layer) {
      alert('No vector layer found');
      e.target.finishDrawing();
      return;
    }

    vector_layer.getSource().forEachFeatureIntersectingExtent(e.feature.getGeometry().getExtent(), (feature) => {
      this.intersectedGeometryFeature = feature;
    });
    if (!this.intersectedGeometryFeature) {
      alert('No Feature Found to draw holes');
      e.target.abortDrawing();
      return;
    }

    this.intersectedPolygon = this.intersectedGeometryFeature.getGeometry() as Polygon;

    this.coordsLength = this.intersectedPolygon.getCoordinates().length;

    //Binding onGeomChange function with drawing feature
    e.feature.getGeometry().on('change', this.onGeomChange);
  };

  onGeomChange = (e: DrawEvent) => {
    let linear_ring = new LinearRing(e.target.getCoordinates()[0]);
    let coordinates = this.intersectedPolygon.getCoordinates();
    let geom = new Polygon(coordinates.slice(0, this.coordsLength));
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
}
