import { Input, OnDestroy, Directive } from '@angular/core';
import Source from 'ol/source/Source.js';
import { AttributionLike } from 'ol/source/Source.js';

import { LayerComponent } from '../layers/layer.component';

type SourceLayerHost = LayerComponent & {
  instance: {
    getSource(): Source | null;
    setSource(source: Source | null): void;
  };
};

@Directive()
export abstract class SourceComponent implements OnDestroy {
  @Input()
  attributions: AttributionLike;

  public instance: Source;
  public componentType = 'source';

  protected constructor(protected host: SourceLayerHost) {}

  ngOnDestroy() {
    if (this.host?.instance?.getSource() === this.instance) {
      this.host.instance.setSource(null);
    }
    this.instance?.dispose();
  }

  protected register(s: Source) {
    if (this.host) {
      this.host.instance.setSource(s);
    }
  }
}
