import {
  AfterContentInit,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Graticule } from 'ol';
import Stroke from 'ol/style/Stroke.js';
import { MapComponent } from './map.component';

@Component({
  selector: 'aol-graticule',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class GraticuleComponent implements AfterContentInit, OnChanges, OnDestroy {
  @Input()
  strokeStyle: Stroke;
  @Input()
  showLabels: boolean;
  @Input()
  lonLabelPosition: number;
  @Input()
  latLabelPosition: number;

  instance: Graticule;
  public componentType = 'graticule';

  constructor(private map: MapComponent) {}

  ngOnChanges(changes: SimpleChanges) {
    if (!this.instance || !Object.keys(changes).length) {
      return;
    }
    this.instance.setMap(null);
    this.instance.dispose();
    this.ngAfterContentInit();
  }

  ngAfterContentInit(): void {
    this.instance = new Graticule({
      strokeStyle: this.strokeStyle,
      showLabels: this.showLabels,
      lonLabelPosition: this.lonLabelPosition,
      latLabelPosition: this.latLabelPosition,
    });
    this.instance.setMap(this.map.instance);
  }

  ngOnDestroy(): void {
    if (this.instance) {
      this.instance.setMap(null);
      this.instance.dispose();
    }
  }
}
