import { afterMapPaint, dragPointer, movePointer, pixelFor, viewport, visitExample } from '../support/maps';

describe('Map bindings and interactions', () => {
  it('updates coordinates and opacity and enforces the zoom limit', () => {
    visitExample('basic');
    for (const field of ['Longitude', 'Latitude']) {
      const initial = field === 'Longitude' ? 5 : 45;
      cy.get(`[aria-label="Increase ${field.toLowerCase()}"]`).click();
      cy.get(`output[aria-label="${field}"]`).should('have.text', String(initial + 1));
      cy.get(`[aria-label="Decrease ${field.toLowerCase()}"]`).click();
      cy.get(`output[aria-label="${field}"]`).should('have.text', String(initial));
    }
    cy.get('[aria-label="Decrease opacity"]').click();
    cy.get('output[aria-label="Opacity"]').should('have.text', '0.9');
    cy.get('[aria-label="Increase opacity"]').click().click();
    cy.get('output[aria-label="Opacity"]').should('have.text', '1');
    cy.get('[aria-label="Increase zoom"]').click();
    cy.get('output[aria-label="Zoom"]').should('have.text', '16');
    cy.get('[aria-label="Increase zoom"]').click().click().click();
    cy.get('output[aria-label="Zoom"]').should('have.text', '18');
    cy.get('[aria-label="Decrease zoom"]').click();
    cy.get('output[aria-label="Zoom"]').should('have.text', '17');
  });

  it('keeps resolution outputs connected through repeated projection replacements', () => {
    visitExample('view-projection-update');
    for (const projection of ['EPSG:4326', 'EPSG:3857', 'EPSG:4326']) {
      cy.get('[aria-label="Projection"]').select(projection).should('have.value', projection);
      afterMapPaint();
      cy.get('output[aria-label="Active projection"]').should('have.text', projection);
      cy.get('output[aria-label="Resolution events"]').invoke('text').then((before) => {
        cy.contains('button', 'Increase zoom').click();
        cy.get('output[aria-label="Resolution events"]').should('have.text', String(Number(before) + 1));
      });
      cy.get('.demo-stage .ol-layer canvas').first().should('be.visible');
    }
  });

  it('updates map position from the form and reports a subsequent pan', () => {
    visitExample('map-position');
    cy.get('#map-x').clear().type('5');
    cy.get('#map-y').clear().type('45');
    cy.get('#map-zoom').clear().type('6').blur();
    cy.get('.current-coordinates').should('contain.text', 'Longitude: 5').and('contain.text', 'Latitude: 45')
      .and('contain.text', 'Zoom: 6');
    cy.get('.current-coordinates').invoke('text').then((before) => {
      dragPointer({ x: 200, y: 200 }, { x: 280, y: 240 });
      cy.get('.current-coordinates').should('not.have.text', before).and('not.contain.text', '----');
    });
  });

  it('reports geographic cursor coordinates from actual pointer movement', () => {
    visitExample('cursor-position');
    cy.get(viewport).then(($viewport) => {
      movePointer({ x: $viewport[0].clientWidth / 2, y: $viewport[0].clientHeight / 2 });
    });
    cy.get('.cursor-coordinates').should(($coordinates) => {
      const values = $coordinates.text().match(/-?\d+\.\d+/g)!.map(Number);
      // Browser click coordinates round fractional CSS pixels.
      expect(values[0]).to.be.closeTo(1.4886, 0.0002);
      expect(values[1]).to.be.closeTo(43.5554, 0.0002);
    });
  });

  it('draws a rectangle, emits geographic GeoJSON and disables drawing', () => {
    visitExample('draw-polygon');
    cy.contains('button', 'Start draw').click();
    cy.get(viewport).click(120, 140).click(260, 270);
    cy.get('.demo-stage pre').should(($pre) => {
      const feature = JSON.parse($pre.text());
      expect(feature.geometry.type).to.equal('Polygon');
      const ring = feature.geometry.coordinates[0];
      expect(ring).to.have.length(5);
      expect(ring[0]).to.deep.equal(ring[4]);
      for (const [lon, lat] of ring) {
        expect(Math.abs(lon)).to.be.lessThan(180);
        expect(Math.abs(lat)).to.be.lessThan(90);
      }
    }).invoke('text').then((before) => {
      cy.contains('button', 'End draw').click();
      cy.get(viewport).click(150, 150).click(300, 300);
      cy.get('.demo-stage pre').should('have.text', before);
    });
  });

  it('selects a point, exposes its ID and clears it on a background click', () => {
    visitExample('select-interaction');
    cy.get('output[aria-label="Selected features"]').should('have.text', '0');
    pixelFor([5, 45]).then(({ x, y }) => cy.get(viewport).click(x, y));
    cy.get('output[aria-label="Selected features"]').should('have.text', '1');
    cy.get('output[aria-label="Selected feature IDs"]').should('have.text', 'marker-1');
    cy.get(viewport).click(60, 60);
    cy.get('output[aria-label="Selected features"]').should('have.text', '0');
    cy.get('output[aria-label="Selected feature IDs"]').should('have.text', 'None');
  });

  it('drags a selected polygon vertex and emits changed geographic coordinates', () => {
    visitExample('modify-polygon');
    pixelFor([1.5, 45]).then(({ x, y }) => cy.get(viewport).click(x, y));
    cy.get('output[aria-label="Selected features"]').should('have.text', '1');
    cy.get('.demo-stage pre').invoke('text').then((before) => {
      pixelFor([-1.7138671875, 43.35713822211053]).then((point) => {
        dragPointer(point, { x: point.x - 35, y: point.y + 25 });
      });
      cy.get('.demo-stage pre').should('not.have.text', before).and(($pre) => {
        const ring = JSON.parse($pre.text()).geometry.coordinates[0];
        expect(ring[0]).to.deep.equal(ring[ring.length - 1]);
        expect(ring[0][0]).to.be.lessThan(-1.7138671875);
        expect(ring[0][1]).to.be.lessThan(43.35713822211053);
      });
    });
  });

  it('snaps a pointer to a known vertex and emits its map coordinate', () => {
    visitExample('snap-interaction');
    cy.get('output[aria-label="Snap events"]').should('have.text', '0');
    pixelFor([-1.7138671875, 43.35713822211053]).then(movePointer);
    cy.get('output[aria-label="Snap events"]').invoke('text').should((text) => expect(Number(text)).to.be.greaterThan(0));
    cy.get('output[aria-label="Last vertex"]').invoke('text').should('match', /^-\d+\.\d{2}, \d+\.\d{2}$/);
  });

  it('measures metric distance, clears it, then measures imperial area', () => {
    visitExample('measure');
    cy.get(viewport).click(120, 140).dblclick(270, 250);
    cy.get('output[aria-label="Measurement result"]').should('contain.text', 'km');
    cy.get('.aol-measure-tooltip-static').should('have.length', 1);
    cy.contains('button', /^\s*Clear\s*$/).click();
    cy.get('output[aria-label="Measurement result"]').should('have.text', '-');
    cy.get('.aol-measure-tooltip-static').should('not.exist');
    cy.get('app-measure select').first().select('Area');
    cy.get('app-measure select').last().select('Imperial');
    cy.get('app-measure input[type="checkbox"]').uncheck().should('not.be.checked');
    cy.get(viewport).click(150, 140).click(320, 140).click(320, 280).click(150, 140);
    cy.get('output[aria-label="Measurement result"]').invoke('text').should('match', /^\d+(\.\d+)? acres$/);
  });

  it('draws a hole with geographic coordinates and removes it using Ctrl/Cmd-click', () => {
    visitExample('draw-hole-in-polygon');
    cy.get('.demo-stage input[type="checkbox"]').last().should('be.disabled');
    cy.get('.demo-stage input[type="checkbox"]').first().check();
    cy.get('.demo-stage input[type="checkbox"]').last().should('be.enabled');
    cy.get('.demo-stage input[type="checkbox"]').first().uncheck();
    cy.contains('button', 'Start draw hole').click();
    cy.get(viewport).click(220, 160).click(320, 160).click(320, 260).click(220, 160);
    cy.get('.demo-stage pre').should(($pre) => {
      const coordinates = JSON.parse($pre.text()).geometry.coordinates;
      expect(coordinates).to.have.length(2);
      for (const [lon, lat] of coordinates[1]) {
        expect(lon).to.be.within(-1.72, 4.52);
        expect(lat).to.be.within(43.35, 47.78);
      }
    });
    cy.get(viewport).click(295, 180, Cypress.platform === 'darwin' ? { metaKey: true } : { ctrlKey: true });
    cy.get('.demo-stage pre').should(($pre) => expect(JSON.parse($pre.text()).geometry.coordinates).to.have.length(1));
    cy.contains('button', 'End draw hole').click();
    cy.contains('button', 'Start draw hole').should('be.visible');
  });
});
