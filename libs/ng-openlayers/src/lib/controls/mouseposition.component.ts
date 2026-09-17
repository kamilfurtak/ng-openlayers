import { Component, ElementRef, Input, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import MousePosition from 'ol/control/MousePosition.js';
import { MapComponent } from '../map.component';
import { CoordinateFormat } from 'ol/coordinate.js';
import { ProjectionLike } from 'ol/proj.js';

@Component({
  selector: 'aol-control-mouseposition',
  template: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ControlMousePositionComponent implements OnInit, OnDestroy {
  @Input()
  coordinateFormat: CoordinateFormat;
  @Input()
  projection: ProjectionLike;

  instance: MousePosition;
  target: HTMLElement;

  constructor(
    private map: MapComponent,
    private element: ElementRef
  ) {}

  ngOnInit() {
    this.target = this.element.nativeElement;
    // console.log('ol.control.MousePosition init: ', this);
    this.instance = new MousePosition(this);
    this.map.instance.addControl(this.instance);
  }

  ngOnDestroy() {
    // console.log('removing aol-control-mouseposition');
    this.map.instance.removeControl(this.instance);
    this.instance.dispose();
  }
}
