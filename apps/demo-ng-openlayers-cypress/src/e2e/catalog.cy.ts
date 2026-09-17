import { visitExample } from '../support/maps';

const examples = [
  ['basic', 'Basic'], ['map-position', 'Map position'], ['cursor-position', 'Cursor position'],
  ['display-geometry', 'Geometry types'], ['display-geojson-source', 'GeoJSON source'],
  ['draw-polygon', 'Draw polygon'], ['modify-polygon', 'Modify polygon'], ['side-by-side', 'Side by side'],
  ['swipe', 'Layer swipe'], ['overlay', 'HTML overlay'], ['color-select-hover', 'Hover and selection styles'],
  ['marker', 'Map markers'], ['cluster', 'Point clustering'], ['raster', 'Raster operations'],
  ['arcgis-image', 'ArcGIS image'], ['image-wms', 'WMS image events'],
  ['view-projection-update', 'View projection update'], ['overview', 'Overview map'],
  ['utf-grid', 'UTFGrid feature info'], ['image-static', 'Static image'], ['select-interaction', 'Select features'],
  ['tile-json', 'TileJSON'], ['graticule', 'Graticule'], ['draw-hole-in-polygon', 'Draw hole in polygon'],
  ['measure', 'Measure'], ['snap-interaction', 'Snap interaction'], ['styles-composition', 'Composed styles'],
] as const;

describe('Every public example', () => {
  for (const [slug, title] of examples) {
    it(`${slug}: renders a real map with its own navigation and metadata`, () => {
      visitExample(slug);
      cy.get('h1').should('have.length', 1).and('have.text', title);
      cy.title().should('equal', `${title} · Angular example | ng-openlayers`);
      const canonical = `https://ng-openlayers.furtak.dev/examples/${slug}/`;
      cy.get('link[rel="canonical"]').should('have.length', 1).and('have.attr', 'href', canonical);
      cy.get('meta[property="og:url"]').should('have.attr', 'content', canonical);
      cy.get('meta[name="description"]').invoke('attr', 'content').should('include', 'interactive Angular example');
      cy.get('#project-schema').invoke('text').then((value) => {
        const graph = JSON.parse(value)['@graph'];
        expect(graph[0].codeRepository).to.equal('https://github.com/kamilfurtak/ng-openlayers');
        expect(graph[1]).to.include({ '@type': 'TechArticle', headline: title, url: canonical });
      });
      cy.contains('a', 'View source').should('have.attr', 'href').and('match',
        /^https:\/\/github\.com\/kamilfurtak\/ng-openlayers\/blob\/master\/apps\/.*\.component\.ts$/);
      cy.get('.related-grid a').should('have.length', 3);
    });
  }
});

describe('Catalog and published content', () => {
  it('combines search and category filters, exposes an empty state and resets', () => {
    cy.visit('/');
    cy.get('h1').should('have.length', 1).and('have.text', 'Build maps.The Angular way.');
    cy.title().should('equal', 'ng-openlayers · OpenLayers maps for Angular');
    cy.get('link[rel="canonical"]').should('have.length', 1)
      .and('have.attr', 'href', 'https://ng-openlayers.furtak.dev/');
    cy.get('.example-card').should('have.length', 27);
    cy.get('[aria-label="Search examples"]').type('  POLYGON  ');
    cy.get('.example-card').should('have.length', 4);
    cy.contains('button', /^\s*Interactions\s*$/).click().should('have.attr', 'aria-pressed', 'true');
    cy.get('.example-card').should('have.length', 3);
    cy.get('[aria-label="Search examples"]').clear().type('no-such-example');
    cy.contains('h3', 'No examples found').should('be.visible');
    cy.get('.result-count').should('have.text', '0 examples');
    cy.contains('button', 'Reset filters').click();
    cy.get('.example-card').should('have.length', 27);
    cy.get('[aria-label="Search examples"]').should('have.value', '');
    cy.contains('button', 'All examples').should('have.attr', 'aria-pressed', 'true');
    cy.contains('button', /^\s*Interactions\s*$/).click();
    cy.get('.example-card').should('have.length', 6);
    cy.contains('.example-card', 'Measure').click();
    cy.title().should('equal', 'Measure · Angular example | ng-openlayers');
    cy.get('link[rel="canonical"]').should('have.attr', 'href', 'https://ng-openlayers.furtak.dev/examples/measure/');
  });

  it('navigates between lazy routes, updates metadata and tears maps down', () => {
    cy.visit('/');
    cy.contains('.example-card', 'Basic').click();
    cy.get('.ol-viewport').should('have.length', 1);
    cy.get('[aria-label="Increase longitude"]').click();
    cy.get('output[aria-label="Longitude"]').should('have.text', '6');
    cy.contains('.related-grid a', 'Map position').click();
    cy.get('h1').should('have.text', 'Map position');
    cy.get('link[rel="canonical"]').should('have.attr', 'href', 'https://ng-openlayers.furtak.dev/examples/map-position/');
    cy.get('.ol-viewport').should('have.length', 1);
    cy.go('back');
    cy.get('h1').should('have.text', 'Basic');
    cy.get('output[aria-label="Longitude"]').should('have.text', '5');
    cy.get('[aria-label="ng-openlayers home"]').click();
    cy.get('.ol-viewport').should('not.exist');
    cy.get('.example-card').should('have.length', 27);
    cy.get('#project-schema').invoke('text').then((text) => expect(JSON.parse(text)['@graph']).to.have.length(1));
    cy.contains('.example-card', 'Basic').click();
    cy.get('.ol-viewport').should('have.length', 1);
    cy.get('output[aria-label="Longitude"]').should('have.text', '5');
    cy.get('[aria-label="Increase longitude"]').click();
    cy.get('output[aria-label="Longitude"]').should('have.text', '6');
  });

  it('keeps prerendered content and native navigation usable when application JavaScript is blocked', () => {
    const blockedScripts: { document: Document; url: string }[] = [];
    cy.on('window:before:load', (window) => {
      window.document.addEventListener('securitypolicyviolation', (event) => {
        if (event.effectiveDirective === 'script-src-elem') {
          blockedScripts.push({ document: window.document, url: event.blockedURI });
        }
      });
    });
    const assertApplicationScriptBlocked = () => {
      cy.document().should((document) => {
        // The production bootstrap tag stays intact; a real browser CSP violation
        // proves it could not execute, rather than only examining HTML text.
        const main = document.querySelector<HTMLScriptElement>('script[src^="main-"]');
        expect(main, 'production application bootstrap').not.to.equal(null);
        expect(blockedScripts.some((blocked) => blocked.document === document && blocked.url === main?.src),
          'browser blocked the application bootstrap on this document').to.equal(true);
      });
      cy.get('.ol-viewport').should('not.exist');
    };
    cy.setCookie('ng_openlayers_test_disable_scripts', '1');
    cy.visit('/');
    assertApplicationScriptBlocked();
    cy.get('h1').should('have.text', 'Build maps.The Angular way.');
    cy.get('.example-card').should('have.length', 27);
    cy.document().then((homeDocument) => {
      cy.get('.example-card').first().click();
      cy.location('pathname').should('match', /^\/examples\/basic\/?$/);
      cy.document().should((exampleDocument) => expect(exampleDocument).not.to.equal(homeDocument));
    });
    assertApplicationScriptBlocked();
    cy.get('h1').should('have.text', 'Basic');
    cy.contains('a', 'View source').should('be.visible');
    cy.get('.map-placeholder').should('be.visible').and('contain.text', 'loads in your browser');
    cy.get('meta[name="description"]').should('have.attr', 'content').and('match', /zoom and opacity/);
    cy.get('#project-schema').invoke('text').then((schema) => {
      expect(JSON.parse(schema)['@graph'][0].codeRepository).to.equal('https://github.com/kamilfurtak/ng-openlayers');
    });
  });

  it('publishes complete prerendered content, sitemap, robots and a noindex 404', () => {
    cy.request('/sitemap.xml').then(({ body }) => {
      const paths = [...String(body).matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => new URL(match[1]).pathname);
      expect(paths.sort()).to.deep.equal(['/', ...examples.map(([slug]) => `/examples/${slug}/`)].sort());
    });
    // cy.request reads server HTML without executing its JavaScript.
    cy.request('/').its('body').then((html: string) => {
      const document = new DOMParser().parseFromString(html, 'text/html');
      expect(document.querySelectorAll('.example-card')).to.have.length(27);
      expect(document.querySelector('h1')?.textContent).to.contain('Build maps.');
    });
    cy.request('/examples/measure/').its('body').then((html: string) => {
      const document = new DOMParser().parseFromString(html, 'text/html');
      expect(document.querySelector('h1')?.textContent).to.equal('Measure');
      expect(document.querySelector('.map-placeholder')?.textContent).to.contain('loads in your browser');
      expect(document.querySelector('link[rel="canonical"]')?.getAttribute('href'))
        .to.equal('https://ng-openlayers.furtak.dev/examples/measure/');
    });
    cy.request('/robots.txt').its('body').should('include', 'https://ng-openlayers.furtak.dev/sitemap.xml');
    cy.request({ url: '/this-page-does-not-exist/', failOnStatusCode: false }).then(({ status, body }) => {
      expect(status).to.equal(404);
      const document = new DOMParser().parseFromString(body, 'text/html');
      expect(document.querySelector('meta[name="robots"]')?.getAttribute('content')).to.include('noindex');
    });
  });
});
