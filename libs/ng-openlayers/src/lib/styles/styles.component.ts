import {
  AfterContentInit,
  Component,
  ContentChildren,
  DestroyRef,
  inject,
  Optional,
  OnDestroy,
  QueryList,
  ChangeDetectionStrategy,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FeatureComponent } from '../feature.component';
import { LayerVectorComponent } from '../layers/layervector.component';
import { StyleComponent } from './style.component';
import Style from 'ol/style/Style.js';

@Component({
  selector: 'aol-styles',
  template: ` <ng-content></ng-content> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class StylesComponent implements AfterContentInit, OnDestroy {
  @ContentChildren(StyleComponent)
  styles: QueryList<StyleComponent>;

  private readonly host: FeatureComponent | LayerVectorComponent;
  private readonly destroyRef = inject(DestroyRef);
  private appliedStyles: Style[];

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
    const applyStyles = () => {
      this.appliedStyles = this.styles.map((style) => style.instance);
      this.host.instance.setStyle(this.appliedStyles);
    };
    applyStyles();
    this.styles.changes.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(applyStyles);
  }

  ngOnDestroy() {
    if (this.host.instance.getStyle() === this.appliedStyles) {
      this.host.instance.setStyle(undefined);
    }
  }
}
