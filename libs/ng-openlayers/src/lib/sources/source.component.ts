import { Input, OnDestroy, Directive } from '@angular/core';
import Source from 'ol/source/Source.js';
import { AttributionLike } from 'ol/source/Source.js';
import { Observable, Subscription } from 'rxjs';

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
  private readonly contentSubscriptions = new Map<string, Subscription>();

  protected constructor(protected host: SourceLayerHost) {}

  ngOnDestroy() {
    this.contentSubscriptions.forEach((subscription) => subscription.unsubscribe());
    this.contentSubscriptions.clear();
    if (this.host?.instance?.getSource() === this.instance) {
      this.host.instance.setSource(null);
    }
    this.instance?.dispose();
  }

  protected observeContent<T>(name: string, changes: Observable<T> | undefined, update: (instance: T) => void): void {
    this.contentSubscriptions.get(name)?.unsubscribe();
    this.contentSubscriptions.delete(name);
    if (changes) this.contentSubscriptions.set(name, changes.subscribe(update));
  }

  protected register(s: Source) {
    if (this.host) {
      this.host.instance.setSource(s);
    }
  }
}
