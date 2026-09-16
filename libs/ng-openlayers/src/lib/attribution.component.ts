import { Component, ElementRef, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'aol-attribution',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class AttributionComponent implements OnInit {
  label: string;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.label = this.elementRef.nativeElement.innerHTML;
  }
}
