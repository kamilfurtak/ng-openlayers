import { Component, ViewChild, ChangeDetectionStrategy, computed, signal } from '@angular/core';
import OlLayer from 'ol/layer/Layer.js';
import { SelectEvent } from 'ol/interaction/Select';
import {
  CoordinateComponent,
  DefaultInteractionComponent,
  FeatureComponent,
  GeometryPointComponent,
  LayerTileComponent,
  LayerVectorComponent,
  MapComponent,
  SourceOsmComponent,
  SourceVectorComponent,
  SelectInteractionComponent as MapSelectInteractionComponent,
  ViewComponent,
} from 'ng-openlayers';

@Component({
  selector: 'app-select-interaction',
  template: `
    <aol-map #map width="100%" height="100%">
      <aol-interaction-default></aol-interaction-default>

      <aol-interaction-select
        [layers]="isMarkerLayer"
        (olSelect)="select($event)"
        [wrapX]="false"
      ></aol-interaction-select>

      <aol-view [zoom]="5">
        <aol-coordinate [x]="1.4886" [y]="43.5554" [srid]="'EPSG:4326'"></aol-coordinate>
      </aol-view>

      <aol-layer-tile [opacity]="1">
        <aol-source-osm></aol-source-osm>
      </aol-layer-tile>

      <aol-layer-vector #markersLayer>
        <aol-source-vector #markersSource [wrapX]="false">
          <aol-feature id="marker-1">
            <aol-geometry-point>
              <aol-coordinate [x]="5" [y]="45" [srid]="'EPSG:4326'"></aol-coordinate>
            </aol-geometry-point>
          </aol-feature>
        </aol-source-vector>
      </aol-layer-vector>
    </aol-map>
    <div class="selection-status" role="status">
      <p>Click the point to select it. Click the background to clear the selection.</p>
      <p>
        Selected features: <output aria-label="Selected features">{{ selectedIds().length }}</output>
      </p>
      <p>
        Feature IDs: <output aria-label="Selected feature IDs">{{ selectionLabel() }}</output>
      </p>
    </div>
  `,
  styles: [
    `
      :host {
        display: flex;
        height: 100%;
        flex-direction: column;
      }
      aol-map {
        flex: 1;
        min-height: 0;
      }
      .selection-status {
        padding: 0.75rem 1rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MapComponent,
    DefaultInteractionComponent,
    ViewComponent,
    CoordinateComponent,
    LayerTileComponent,
    SourceOsmComponent,
    LayerVectorComponent,
    SourceVectorComponent,
    FeatureComponent,
    GeometryPointComponent,
    MapSelectInteractionComponent,
  ],
})
export class SelectInteractionComponent {
  @ViewChild('markersLayer', { static: true }) markersLayer: LayerVectorComponent;

  readonly selectedIds = signal<Array<string | number>>([]);
  readonly selectionLabel = computed(() => this.selectedIds().join(', ') || 'None');

  isMarkerLayer = (layer: OlLayer) => layer === this.markersLayer.instance;

  select($event: SelectEvent) {
    const removed = new Set($event.deselected.map((feature) => feature.getId()));
    const added = $event.selected.map((feature) => feature.getId()).filter((id) => id !== undefined);
    this.selectedIds.update((ids) => [...new Set([...ids.filter((id) => !removed.has(id)), ...added])]);
  }
}
