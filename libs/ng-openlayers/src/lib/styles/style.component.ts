import { Component, Input, OnInit, Optional } from '@angular/core';
import { Fill, Image, Stroke, Style, Text } from 'ol/style';
import { Geometry } from 'ol/geom';
import { FeatureComponent } from '../feature.component';
import { LayerVectorComponent } from '../layers/layervector.component';
import { GeometryFunction } from 'ol/style/Style';

@Component({
  selector: 'aol-style',
  template: ` <ng-content></ng-content> `,
  standalone: true,
})
export class StyleComponent implements OnInit {
  @Input()
  geometry: string | Geometry | GeometryFunction;
  @Input()
  fill: Fill;
  @Input()
  image: Image;
  @Input()
  stroke: Stroke;
  @Input()
  text: Text;
  @Input()
  zIndex: number;

  public instance: Style;
  public componentType = 'style';
  private readonly host: FeatureComponent | LayerVectorComponent;

  constructor(@Optional() featureHost: FeatureComponent, @Optional() layerHost: LayerVectorComponent) {
    // console.log('creating aol-style');
    this.host = featureHost ? featureHost : layerHost;
    if (!this.host) {
      throw new Error('aol-style must be applied to a feature or a layer');
    }
  }

  update() {
    // console.log('updating style\'s host: ', this.host);
    this.host.instance.changed();
  }

  ngOnInit() {
    // console.log('creating aol-style instance with: ', this);
    this.instance = new Style(this);
    this.host.instance.setStyle(this.instance);
  }
}
