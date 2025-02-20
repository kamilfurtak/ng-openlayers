import { AfterViewInit, Component, ContentChildren, Host, QueryList } from '@angular/core';
import { SourceComponent } from './sources/source.component';
import { AttributionComponent } from './attribution.component';

@Component({
  selector: 'aol-attributions',
  template: '<ng-content></ng-content>',
  standalone: true,
})
export class AttributionsComponent implements AfterViewInit {
  @ContentChildren(AttributionComponent)
  attributions: QueryList<AttributionComponent>;

  instance: Array<string>;

  constructor(@Host() private source: SourceComponent) {}

  /* we can do this at the very end */
  ngAfterViewInit() {
    if (this.attributions.length) {
      this.instance = this.attributions.map((cmp) => cmp.label);
      // console.log('setting attributions:', this.instance);
      this.source.instance.setAttributions(this.instance);
    }
  }
}
