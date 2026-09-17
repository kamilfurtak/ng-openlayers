import {
  Component,
  ContentChild,
  Input,
  OnDestroy,
  OnInit,
  OnChanges,
  SimpleChanges,
  ChangeDetectionStrategy,
} from '@angular/core';
import { MapComponent } from './map.component';
import Overlay, { PanOptions, PanIntoViewOptions, Positioning } from 'ol/Overlay.js';
import { ContentComponent } from './content.component';

@Component({
  selector: 'aol-overlay',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class OverlayComponent implements OnInit, OnChanges, OnDestroy {
  @ContentChild(ContentComponent, { static: true })
  content: ContentComponent;

  @Input()
  id: number | string;
  @Input()
  offset: number[];
  @Input()
  positioning: Positioning;
  @Input()
  stopEvent: boolean;
  @Input()
  insertFirst: boolean;
  @Input()
  autoPan: boolean | PanIntoViewOptions;
  @Input()
  autoPanAnimation: PanOptions;
  @Input()
  autoPanMargin: number;

  componentType = 'overlay';
  instance: Overlay;
  element: HTMLElement;

  constructor(private map: MapComponent) {}

  ngOnInit() {
    if (this.content) {
      this.element = this.content.elementRef.nativeElement;
      this.instance = new Overlay({
        ...this,
        autoPan:
          this.autoPan === true ? { animation: this.autoPanAnimation, margin: this.autoPanMargin } : this.autoPan,
      });
      this.map.instance.addOverlay(this.instance);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!this.instance) return;
    if (changes.offset) this.instance.setOffset(this.offset ?? [0, 0]);
    if (changes.positioning) this.instance.setPositioning(this.positioning ?? 'top-left');
  }

  ngOnDestroy() {
    if (this.instance) {
      this.map.instance.removeOverlay(this.instance);
      this.instance.dispose();
    }
  }
}
