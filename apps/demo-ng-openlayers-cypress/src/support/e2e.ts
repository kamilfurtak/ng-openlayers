// Exercise production browser behavior with real local assets and finite external
// fixtures. Unknown providers and missing local assets fail instead of disappearing
// behind a catch-all image response or an uncaught-exception handler.
const imageHosts = new Set([
  'tile.openstreetmap.org',
  'a.tile.openstreetmap.org',
  'b.tile.openstreetmap.org',
  'c.tile.openstreetmap.org',
  'server.arcgisonline.com',
  'sampleserver1.arcgisonline.com',
  'ahocevar.com',
  'imgs.xkcd.com',
  'pbs.twimg.com',
]);

const tile = (color: string) => `<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256"><rect width="256" height="256" fill="${color}"/></svg>`;

beforeEach(() => {
  cy.intercept({ url: /^https?:\/\//, middleware: true }, (request) => {
    const url = new URL(request.url);
    if (url.origin === new URL(Cypress.config('baseUrl')!).origin) {
      if (url.pathname === '/assets/utfgrid/grid.json') request.alias = 'utfGrid';
      if (url.pathname === '/assets/utfgrid/tilejson.json') request.alias = 'utfGridMetadata';
      request.on('response', (response) => {
        expect(response.statusCode, `local resource ${url.pathname}`).to.be.lessThan(400);
      });
      return request.continue();
    }
    const headers = { 'access-control-allow-origin': '*', 'cache-control': 'no-store' };
    if (url.href === 'https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json') {
      return request.reply({
        headers,
        body: {
          type: 'FeatureCollection',
          features: [{
            type: 'Feature',
            id: 'FRA',
            properties: { name: 'France' },
            geometry: { type: 'Polygon', coordinates: [[[-5, 42], [8, 42], [8, 51], [-5, 51], [-5, 42]]] },
          }],
        },
      });
    }
    expect(imageHosts.has(url.hostname), `fixture for external host ${url.hostname}`).to.equal(true);
    if (url.href === 'https://pbs.twimg.com/media/D7IgamEUEAA5DHE.jpg') request.alias = 'alternateImage';
    request.reply({
      headers: { ...headers, 'content-type': 'image/svg+xml' },
      body: tile(url.hostname === 'server.arcgisonline.com' ? 'rgb(40,60,100)' : 'rgb(100,150,100)'),
    });
  });
});
