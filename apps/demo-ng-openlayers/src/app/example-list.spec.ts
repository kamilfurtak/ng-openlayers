import { routes } from './app.routing';
import { categories, categoryFor, examplesList, sourcePathFor } from './example-list';

describe('Published example contracts', () => {
  it('keeps every catalog card matched to one lazy route', () => {
    const exampleRoutes = routes.find((route) => route.path === 'examples').children.filter((route) => route.path);
    expect(exampleRoutes.map((route) => route.path).sort()).toEqual(examplesList.map((item) => item.routerLink).sort());
    expect(new Set(examplesList.map((item) => item.routerLink)).size).toBe(examplesList.length);
    expect(exampleRoutes.every((route) => !!route.loadComponent)).toBeTrue();
  });

  it('provides unique, descriptive titles and valid categories for every indexed page', () => {
    expect(new Set(examplesList.map((item) => item.title)).size).toBe(examplesList.length);
    for (const item of examplesList) {
      expect(item.description.length).withContext(item.routerLink).toBeGreaterThan(30);
      expect(categories as readonly string[]).toContain(categoryFor(item.routerLink));
      expect(sourcePathFor(item.routerLink)).toMatch(
        /^https:\/\/github\.com\/kamilfurtak\/ng-openlayers\/blob\/master\/apps\/demo-ng-openlayers\/src\/app\/.+\.component\.ts$/
      );
      if (item.openLayersLink) expect(new URL(item.openLayersLink).origin).toBe('https://openlayers.org');
    }
    for (const category of categories.slice(1)) {
      expect(examplesList.some((item) => categoryFor(item.routerLink) === category))
        .withContext(category)
        .toBeTrue();
    }
  });

  it('links exceptional source filenames to their actual locations', () => {
    expect(sourcePathFor('overlay')).toContain('/overlay/overlay-demo.component.ts');
    expect(sourcePathFor('graticule')).toContain('/graticule/graticule-demo.component.ts');
    expect(sourcePathFor('utf-grid')).toContain('/utfgrid/utfgrid.component.ts');
    expect(sourcePathFor('basic')).toContain('/basic/basic.component.ts');
  });
});
