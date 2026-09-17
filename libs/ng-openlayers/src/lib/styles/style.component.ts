import {
  Component,
  Input,
  OnInit,
  OnChanges,
  OnDestroy,
  Optional,
  SimpleChanges,
  ChangeDetectionStrategy,
} from '@angular/core';
import Fill from 'ol/style/Fill.js';
import Image from 'ol/style/Image.js';
import Stroke from 'ol/style/Stroke.js';
import Style from 'ol/style/Style.js';
import Text from 'ol/style/Text.js';
import { Geometry } from 'ol/geom.js';
import { FeatureComponent } from '../feature.component';
import { LayerVectorComponent } from '../layers/layervector.component';
import { GeometryFunction } from 'ol/style/Style.js';

@Component({
  selector: 'aol-style',
  template: ` <ng-content></ng-content> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class StyleComponent implements OnInit, OnChanges, OnDestroy {
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

  ngOnChanges(changes: SimpleChanges) {
    if (!this.instance) return;
    if (changes.geometry) this.instance.setGeometry(this.geometry);
    if (changes.fill) this.instance.setFill(this.fill);
    if (changes.image) this.instance.setImage(this.image);
    if (changes.stroke) this.instance.setStroke(this.stroke);
    if (changes.text) this.instance.setText(this.text);
    if (changes.zIndex) this.instance.setZIndex(this.zIndex);
    this.update();
  }

  ngOnDestroy() {
    if (this.host.instance.getStyle() === this.instance) {
      this.host.instance.setStyle(undefined);
    }
  }
}
