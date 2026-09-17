import { Component, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import Icon from 'ol/style/Icon.js';

// TODO https://github.com/openlayers/openlayers/issues/12694
// import IconAnchorUnits from 'ol/style/IconAnchorUnits';
// import IconOrigin from 'ol/style/IconOrigin';
import { StyleComponent } from './style.component';
import { IconAnchorUnits, IconOrigin } from 'ol/style/Icon.js';

@Component({
  selector: 'aol-style-icon',
  template: ` <div class="aol-style-icon"></div> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class StyleIconComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  anchor: [number, number];
  @Input()
  anchorXUnits: IconAnchorUnits;
  @Input()
  anchorYUnits: IconAnchorUnits;
  @Input()
  anchorOrigin: IconOrigin;
  @Input()
  color: [number, number, number, number];
  @Input()
  crossOrigin: string | null;
  @Input()
  img: HTMLCanvasElement | HTMLImageElement;
  @Input()
  offset: [number, number];
  @Input()
  offsetOrigin: IconOrigin;
  @Input()
  opacity: number;
  @Input()
  scale: number;
  @Input()
  snapToPixel: boolean;
  @Input()
  rotateWithView: boolean;
  @Input()
  rotation: number;
  @Input()
  size: [number, number];
  @Input()
  imgSize: [number, number];
  @Input()
  src: string;

  public instance: Icon;

  constructor(private host: StyleComponent) {}

  ngOnInit() {
    // console.log('creating ol.style.Icon instance with: ', this);
    this.instance = new Icon(this);
    this.host.instance.setImage(this.instance);
    this.host.update();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!this.instance) {
      return;
    }
    if (changes.opacity) {
      this.instance.setOpacity(changes.opacity.currentValue);
    }
    if (changes.rotation) {
      this.instance.setRotation(changes.rotation.currentValue);
    }
    if (changes.scale) {
      this.instance.setScale(changes.scale.currentValue);
    }
    if (changes.anchor) this.instance.setAnchor(this.anchor);
    if (changes.rotateWithView) this.instance.setRotateWithView(this.rotateWithView);
    if (changes.src) {
      this.instance = new Icon(this);
      this.host.instance.setImage(this.instance);
    }
    this.host.update();
    // console.log('changes detected in aol-style-icon: ', changes);
  }

  ngOnDestroy() {
    if (this.host.instance.getImage() === this.instance) {
      this.host.instance.setImage(null);
      this.host.update();
    }
  }
}
