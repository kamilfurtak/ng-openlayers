import { Component, ContentChild, OnDestroy, OnInit } from '@angular/core';
import { Control } from 'ol/control';
import { MapComponent } from '../map.component';
import { ContentComponent } from '../content.component';

@Component({
    selector: 'aol-control',
    template: ` <ng-content></ng-content> `,
    standalone: true,
})
export class ControlComponent implements OnInit, OnDestroy {
  @ContentChild(ContentComponent, { static: true })
  content: ContentComponent;

  public componentType = 'control';
  instance: Control;
  element: HTMLElement;

  constructor(private map: MapComponent) {}

  ngOnInit() {
    if (this.content) {
      this.element = this.content.elementRef.nativeElement;
      this.instance = new Control(this);
      this.map.instance.addControl(this.instance);
    }
  }

  ngOnDestroy() {
    if (this.instance) {
      this.map.instance.removeControl(this.instance);
    }
  }
}
