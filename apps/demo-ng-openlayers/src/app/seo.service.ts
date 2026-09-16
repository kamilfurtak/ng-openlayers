import { DOCUMENT, inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs';
import { examplesList } from './example-list';
import { project } from './project-info';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly document = inject(DOCUMENT);
  private readonly router = inject(Router);
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);

  constructor() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntilDestroyed()
      )
      .subscribe(() => this.update());
    this.update();
  }

  private update(): void {
    const path = this.router.url.split(/[?#]/)[0].replace(/\/$/, '');
    const example = examplesList.find((item) => path === '/examples/' + item.routerLink);
    const title = example
      ? `${example.title} · Angular example | ng-openlayers`
      : 'ng-openlayers · OpenLayers maps for Angular';
    const description = example
      ? `${example.description} Explore the interactive Angular example and its TypeScript source with ng-openlayers.`
      : 'Build OpenLayers maps with Angular components. Explore interactive examples, standalone components, drawing, GeoJSON, styles and projections. Open source by Kamil Furtak.';
    const url = project.site + (example ? path + '/' : '/');
    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: description });
    for (const [name, content] of [
      ['title', title],
      ['description', description],
      ['url', url],
    ]) {
      this.meta.updateTag({ property: 'og:' + name, content });
    }
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    let canonical = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = this.document.createElement('link');
      canonical.rel = 'canonical';
      this.document.head.appendChild(canonical);
    }
    canonical.href = url;
    let structured = this.document.querySelector<HTMLScriptElement>('#project-schema');
    if (!structured) {
      structured = this.document.createElement('script');
      structured.id = 'project-schema';
      structured.type = 'application/ld+json';
      this.document.head.appendChild(structured);
    }
    structured.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'SoftwareSourceCode',
          '@id': project.site + '/#library',
          name: 'ng-openlayers',
          description: 'Declarative OpenLayers components for Angular.',
          url: project.site,
          codeRepository: project.repository,
          programmingLanguage: 'TypeScript',
          runtimePlatform: 'Angular ' + project.angular,
          version: project.version,
          license: project.repository + '/blob/master/LICENSE.md',
          author: { '@type': 'Person', name: 'Kamil Furtak', url: 'https://furtak.dev' },
        },
        ...(example
          ? [
              {
                '@type': 'TechArticle',
                headline: example.title,
                description: example.description,
                url,
                about: { '@id': project.site + '/#library' },
                author: { '@type': 'Person', name: 'Kamil Furtak', url: 'https://furtak.dev' },
              },
            ]
          : []),
      ],
    });
  }
}
