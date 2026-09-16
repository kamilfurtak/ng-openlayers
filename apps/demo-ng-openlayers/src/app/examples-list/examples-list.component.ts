import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { categories, categoryFor, examplesList } from '../example-list';
import { project } from '../project-info';

@Component({
  selector: 'app-examples-list',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './examples-list.component.html',
})
export class ExamplesListComponent {
  readonly project = project;
  readonly examples = examplesList;
  readonly categories = categories;
  readonly categoryFor = categoryFor;
  readonly term = signal('');
  readonly category = signal('All examples');
  readonly copyLabel = signal('Copy');
  readonly list = computed(() => {
    const term = this.term().trim().toLowerCase();
    return examplesList.filter(
      (item) =>
        (this.category() === 'All examples' || categoryFor(item.routerLink) === this.category()) &&
        (!term || `${item.title} ${item.description} ${categoryFor(item.routerLink)}`.toLowerCase().includes(term))
    );
  });
  readonly quickStart = `<aol-map width="100%" height="420px">
  <aol-view [zoom]="12">
    <aol-coordinate [x]="19.945" [y]="50.065"
                    srid="EPSG:4326" />
  </aol-view>
  <aol-layer-tile>
    <aol-source-osm />
  </aol-layer-tile>
  <aol-interaction-default />
  <aol-control-defaults />
</aol-map>`;

  async copyInstall(): Promise<void> {
    try {
      await navigator.clipboard.writeText(project.install);
      this.copyLabel.set('Copied!');
    } catch {
      this.copyLabel.set('Select to copy');
    }
  }
}
