import { AfterContentInit, Component, ContentChildren, Optional, QueryList } from '@angular/core';
import { FeatureComponent } from '../feature.component';
import { LayerVectorComponent } from '../layers/layervector.component';
import { StyleComponent } from './style.component';

@Component({
  selector: 'aol-styles',
  template: ` <ng-content></ng-content> `,
  standalone: true,
})
export class StylesComponent implements AfterContentInit {
  @ContentChildren(StyleComponent)
  styles: QueryList<StyleComponent>;

  private readonly host: FeatureComponent | LayerVectorComponent;

  constructor(@Optional() featureHost: FeatureComponent, @Optional() layerHost: LayerVectorComponent) {
    this.host = featureHost ? featureHost : layerHost;
    if (!this.host) {
      throw new Error('aol-styles must be applied to a feature or a layer');
    }
  }

  update() {
    this.host.instance.changed();
  }

  ngAfterContentInit() {
    this.host.instance.setStyle(this.styles.map((style) => style.instance));
  }
}
