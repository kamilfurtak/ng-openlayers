import { DOCUMENT } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { examplesList } from './example-list';
import { project } from './project-info';
import { SeoService } from './seo.service';

describe('Route SEO', () => {
  let page: Document;
  let router: { url: string; events: Subject<NavigationEnd | NavigationStart> };

  beforeEach(() => {
    page = document.implementation.createHTMLDocument('');
    router = { url: '/', events: new Subject() };
    TestBed.configureTestingModule({
      providers: [
        SeoService,
        Title,
        Meta,
        { provide: DOCUMENT, useValue: page },
        { provide: Router, useValue: router },
      ],
    });
  });

  function navigate(url: string): void {
    router.url = url;
    router.events.next(new NavigationEnd(1, url, url));
  }

  function schema(): { '@graph': Array<Record<string, unknown>> } {
    return JSON.parse(page.querySelector('#project-schema').textContent);
  }

  it('creates homepage metadata and software schema without needing a browser window', () => {
    TestBed.inject(SeoService);
    expect(page.title).toBe('ng-openlayers · OpenLayers maps for Angular');
    expect(page.querySelector('meta[name="description"]')?.getAttribute('content')).toBe(project.description);
    expect(page.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.href).toBe(project.site + '/');
    expect(schema()['@graph']).toEqual([
      jasmine.objectContaining({
        '@type': 'SoftwareSourceCode',
        version: project.version,
        codeRepository: project.repository,
      }),
    ]);
  });

  it('updates title, sharing metadata and article schema for every catalog route', () => {
    TestBed.inject(SeoService);
    for (const example of examplesList) {
      navigate(`/examples/${example.routerLink}/?ref=search#map`);
      const title = `${example.title} · Angular example | ng-openlayers`;
      const url = `${project.site}/examples/${example.routerLink}/`;
      expect(page.title).withContext(example.routerLink).toBe(title);
      expect(page.querySelector('meta[property="og:title"]')?.getAttribute('content')).toBe(title);
      expect(page.querySelector('meta[name="twitter:title"]')?.getAttribute('content')).toBe(title);
      expect(page.querySelector('meta[name="description"]')?.getAttribute('content')).toContain(example.description);
      expect(page.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.href).toBe(url);
      expect(schema()['@graph'][1]).toEqual(
        jasmine.objectContaining({ '@type': 'TechArticle', headline: example.title, url })
      );
    }
    expect(page.querySelectorAll('link[rel="canonical"]').length).toBe(1);
    expect(page.querySelectorAll('#project-schema').length).toBe(1);
    expect(page.querySelectorAll('meta[name="description"]').length).toBe(1);
  });

  it('reuses prerendered head elements and removes stale article data on the homepage', () => {
    page.head.innerHTML =
      '<link rel="canonical" href="https://old.example"><script id="project-schema" type="application/ld+json">{}</script>';
    const canonical = page.querySelector('link');
    const structured = page.querySelector('script');
    router.url = '/examples/measure';
    TestBed.inject(SeoService);
    navigate('/?ref=npm#examples');
    expect(page.querySelector('link')).toBe(canonical);
    expect(page.querySelector('script')).toBe(structured);
    expect(schema()['@graph'].length).toBe(1);
    expect(page.querySelector('meta[property="og:url"]')?.getAttribute('content')).toBe(project.site + '/');
  });

  it('ignores unfinished navigation and stops updates when its injector is destroyed', () => {
    TestBed.inject(SeoService);
    const title = page.title;
    router.url = '/examples/basic';
    router.events.next(new NavigationStart(1, router.url));
    expect(page.title).toBe(title);
    TestBed.resetTestingModule();
    navigate('/examples/measure');
    expect(page.title).toBe(title);
  });
});
