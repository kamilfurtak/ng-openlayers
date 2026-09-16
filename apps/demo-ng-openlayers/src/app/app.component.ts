import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SeoService } from './seo.service';
import { project } from './project-info';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a class="skip-link" href="#main">Skip to content</a>
    <header class="site-header">
      <div class="container header-inner">
        <a class="brand" routerLink="/" aria-label="ng-openlayers home">
          <img src="/assets/logo.svg" width="32" height="32" alt="" />
          ng-openlayers
        </a>
        <nav aria-label="Main navigation">
          <a routerLink="/" fragment="examples">Examples</a>
          <a routerLink="/" fragment="get-started">Get started</a>
          <a class="github-link" [href]="project.repository">GitHub <span aria-hidden="true">↗</span></a>
        </nav>
      </div>
    </header>
    <main id="main"><router-outlet /></main>
    <footer class="site-footer container">
      <div>
        <a class="brand" routerLink="/">ng-openlayers</a>
        <p>Declarative maps. Open possibilities.</p>
      </div>
      <div class="footer-links">
        <a href="https://furtak.dev">Built by Kamil Furtak ↗</a>
        <a [href]="project.repository + '/blob/master/LICENSE.md'">MPL-2.0 license</a>
        <a href="https://github.com/sponsors/kamilfurtak">Sponsor the project</a>
      </div>
    </footer>
  `,
})
export class AppComponent {
  readonly project = project;
  private readonly seo = inject(SeoService);
}
