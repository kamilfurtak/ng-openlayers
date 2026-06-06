import { Input, OnDestroy, Directive } from '@angular/core';
import Source from 'ol/source/Source';
import { AttributionLike } from 'ol/source/Source';

import { LayerComponent } from '../layers/layer.component';

type SourceLayerHost = LayerComponent & {
  instance: {
    setSource(source: Source | null): void;
  };
};

@Directive()
// eslint-disable-next-line @angular-eslint/directive-class-suffix
export abstract class SourceComponent implements OnDestroy {
  @Input()
  attributions: AttributionLike;

  public instance: Source;
  public componentType = 'source';

  protected constructor(protected host: SourceLayerHost) {}

  ngOnDestroy() {
    if (this.host && this.host.instance) {
      this.host.instance.setSource(null);
    }
  }

  protected register(s: Source) {
    if (this.host) {
      this.host.instance.setSource(s);
    }
  }
}
