import { Component, Input, OnDestroy, OnInit, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import Layer from 'ol/layer/Layer.js';
import { View } from 'ol';
import OverviewMap from 'ol/control/OverviewMap.js';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-control-overviewmap',
  template: ` <ng-content></ng-content> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ControlOverviewMapComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  collapsed: boolean;
  @Input()
  collapseLabel: string;
  @Input()
  collapsible: boolean;
  @Input()
  label: string;
  @Input()
  layers: Layer[];
  @Input()
  target: HTMLElement;
  @Input()
  tipLabel: string;
  @Input()
  view: View;

  instance: OverviewMap;

  constructor(private map: MapComponent) {}

  ngOnInit() {
    this.instance = new OverviewMap(this);
    this.map.instance.addControl(this.instance);
  }

  ngOnDestroy() {
    this.map.instance.removeControl(this.instance);
    this.instance.getOverviewMap().dispose();
    this.instance.dispose();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.instance != null && changes.hasOwnProperty('view')) {
      this.reloadInstance();
    }
  }

  private reloadInstance() {
    this.map.instance.removeControl(this.instance);
    this.instance.getOverviewMap().dispose();
    this.instance.dispose();
    this.instance = new OverviewMap(this);
    this.map.instance.addControl(this.instance);
  }
}
