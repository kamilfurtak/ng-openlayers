import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet, NavigationEnd } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map } from 'rxjs';
import { categoryFor, examplesList, sourcePathFor } from '../example-list';
import { project } from '../project-info';

@Component({
  selector: 'app-examples-item',
  imports: [RouterLink, RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (exampleInfo(); as example) {
      <div class="example-page container">
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a routerLink="/" fragment="examples">Examples</a><span aria-hidden="true">/</span
          ><span>{{ example.title }}</span>
        </nav>
        <div class="example-heading">
          <div>
            <p class="eyebrow">{{ categoryFor(example.routerLink) }} · ANGULAR EXAMPLE</p>
            <h1>{{ example.title }}</h1>
            <p>{{ example.description }}</p>
          </div>
          <a class="button secondary" [href]="sourcePathFor(example.routerLink)">View source ↗</a>
        </div>
        <div class="demo-stage">
          @defer (on immediate) {
            <router-outlet />
          } @placeholder {
            <div class="map-placeholder">
              <span class="map-loading-icon" aria-hidden="true">⌖</span>
              <p>The interactive map loads in your browser.</p>
            </div>
          }
        </div>
        <div class="demo-footnote">
          <span>Built with Angular {{ project.angular }} + OpenLayers {{ project.openlayers }}</span>
          @if (example.openLayersLink) {
            <a [href]="example.openLayersLink" target="_blank" rel="noopener noreferrer">OpenLayers reference ↗</a>
          }
        </div>
        <section class="related-examples" aria-labelledby="related-title">
          <h2 id="related-title">Keep exploring</h2>
          <div class="related-grid">
            @for (item of related(); track item.routerLink) {
              <a [routerLink]="'/examples/' + item.routerLink"
                ><span>{{ item.title }}</span
                ><span aria-hidden="true">→</span></a
              >
            }
          </div>
        </section>
      </div>
    }
  `,
})
export class ExamplesItemComponent {
  private readonly router = inject(Router);
  private readonly url = toSignal(
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.router.url)
    ),
    { initialValue: this.router.url }
  );
  readonly project = project;
  readonly categoryFor = categoryFor;
  readonly sourcePathFor = sourcePathFor;
  readonly exampleInfo = computed(() =>
    examplesList.find((item) => this.url().split(/[?#]/)[0].replace(/\/$/, '') === '/examples/' + item.routerLink)
  );
  readonly related = computed(() =>
    examplesList
      .filter(
        (item) =>
          item !== this.exampleInfo() &&
          categoryFor(item.routerLink) === categoryFor(this.exampleInfo()?.routerLink ?? '')
      )
      .slice(0, 3)
  );
}
