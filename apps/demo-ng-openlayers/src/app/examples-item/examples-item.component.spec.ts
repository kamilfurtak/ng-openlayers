import { TestBed } from '@angular/core/testing';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { categoryFor } from '../example-list';
import { ExamplesItemComponent } from './examples-item.component';

describe('Example detail navigation', () => {
  let router: { url: string; events: Subject<NavigationEnd | NavigationStart> };
  let component: ExamplesItemComponent;

  beforeEach(() => {
    router = { url: '/examples/draw-polygon/?ref=catalog#map', events: new Subject() };
    TestBed.configureTestingModule({ providers: [{ provide: Router, useValue: router }] });
    component = TestBed.runInInjectionContext(() => new ExamplesItemComponent());
  });

  it('resolves a direct URL including its trailing slash, query and fragment', () => {
    expect(component.exampleInfo()?.title).toBe('Draw polygon');
    expect(component.related().length).toBe(3);
    expect(
      component
        .related()
        .every((item) => item.routerLink !== 'draw-polygon' && categoryFor(item.routerLink) === 'Interactions')
    ).toBeTrue();
  });

  it('changes metadata and related examples only after navigation completes', () => {
    router.url = '/examples/tile-json';
    router.events.next(new NavigationStart(1, router.url));
    expect(component.exampleInfo()?.routerLink).toBe('draw-polygon');
    router.events.next(new NavigationEnd(1, router.url, router.url));
    expect(component.exampleInfo()?.title).toBe('TileJSON');
    expect(component.related().every((item) => categoryFor(item.routerLink) === 'Data sources')).toBeTrue();
  });

  it('does not present a known example for an unknown route', () => {
    router.url = '/examples/not-a-demo';
    router.events.next(new NavigationEnd(1, router.url, router.url));
    expect(component.exampleInfo()).toBeUndefined();
  });
});
