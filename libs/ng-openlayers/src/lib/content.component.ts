import { Component, ElementRef, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'aol-content',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ContentComponent {
  constructor(public elementRef: ElementRef) {}
}
