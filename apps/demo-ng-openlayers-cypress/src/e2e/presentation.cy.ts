import { afterMapPaint, movePointer, viewport, visitExample } from '../support/maps';

function canvasSnapshot($canvases: JQuery<HTMLElement>): string {
  return [...$canvases].map((canvas) => (canvas as HTMLCanvasElement).toDataURL()).join('\n');
}

describe('Presentation and data sources', () => {
  it('keeps the HTML overlay visible at its geographic anchor after zooming', () => {
    visitExample('overlay');
    cy.get('.ol-overlay-container').contains('An HTML overlay anchored to the map').should('be.visible');
    cy.get('.ol-zoom-in').click();
    cy.get('.ol-overlay-container').contains('An HTML overlay anchored to the map').should('be.visible');
  });

  it('reveals the local UTFGrid feature label after pointer movement', () => {
    visitExample('utf-grid');
    cy.wait('@utfGridMetadata').its('response.statusCode').should('equal', 200);
    afterMapPaint();
    cy.get(viewport).then(($viewport) => {
      movePointer({ x: $viewport[0].clientWidth / 2, y: $viewport[0].clientHeight / 2 });
    });
    cy.wait('@utfGrid').its('response.statusCode').should('equal', 200);
    cy.get('.grid-label').should('be.visible').and('have.text', 'Sample feature · local UTFGrid data');
  });

  it('updates actual raster pixels for brightness and switches source', () => {
    visitExample('raster');
    const assertPixel = (expected: number[]) => cy.get('.demo-stage canvas').first().should(($canvas) => {
      const canvas = $canvas[0] as HTMLCanvasElement;
      const pixel = canvas.getContext('2d')!.getImageData(canvas.width / 2, canvas.height / 2, 1, 1).data;
      expect([...pixel]).to.deep.equal(expected);
    });
    assertPixel([100, 150, 100, 255]);
    cy.get('[aria-label="Brightness"]').invoke('val', 30).trigger('input');
    assertPixel([130, 180, 130, 255]);
    cy.get('[aria-label="Satellite imagery"]').check().should('be.checked');
    assertPixel([70, 90, 130, 255]);
    cy.get('[aria-label="OpenStreetMap"]').check().should('be.checked');
    assertPixel([130, 180, 130, 255]);
  });

  it('changes layer clipping on input and preserves mobile navigation', () => {
    cy.viewport(390, 844);
    cy.visit('/', {
      onBeforeLoad(window) {
        // Observe the real canvas operation without reading a cross-origin image.
        cy.spy(window.CanvasRenderingContext2D.prototype, 'rect').as('clipRectangle');
      },
    });
    cy.document().its('documentElement.scrollWidth').should('be.lte', 390);
    cy.contains('a', 'Explore examples').click();
    cy.get('[aria-label="Search examples"]').should('be.visible').and(($search) => {
      const bounds = $search[0].getBoundingClientRect();
      expect(bounds.top).to.be.at.least(0);
      expect(bounds.bottom).to.be.at.most(844);
    }).type('swipe');
    cy.get('.example-card').should('have.length', 1).click();
    cy.get('[aria-label="Layer comparison"]').should('have.value', '50').and('be.visible').focus();
    cy.press(Cypress.Keyboard.Keys.RIGHT);
    cy.get('[aria-label="Layer comparison"]').should('have.value', '51');
    cy.get('@clipRectangle').should('have.been.called');
    cy.get('[aria-label="Layer comparison"]').invoke('val', 80).trigger('input');
    cy.get<Cypress.Agent<sinon.SinonSpy>>('@clipRectangle').should((spy) => {
      const clippedAt80Percent = spy.getCalls().some((call) => {
        const [x, y, width, height] = call.args;
        const canvas = (call.thisValue as CanvasRenderingContext2D).canvas;
        return Math.abs(x / canvas.width - 0.8) < 1e-8 && y === 0 &&
          Math.abs(width - (canvas.width - x)) < 1e-8 && height === canvas.height;
      });
      expect(clippedAt80Percent, 'a redraw clips the layer at the new slider position').to.equal(true);
    });
    cy.document().its('documentElement.scrollWidth').should('be.lte', 390);
    cy.get('[aria-label="ng-openlayers home"]').click();
    cy.get('.example-card').should('have.length', 27);
    cy.get('.ol-viewport').should('not.exist');
  });

  it('updates clustering distance and redraws the cluster layer', () => {
    visitExample('cluster');
    cy.get('.demo-stage canvas').then(($canvases) => {
      const before = canvasSnapshot($canvases);
      cy.get('[aria-label="Cluster distance"]').invoke('val', 100).trigger('input').should('have.value', '100');
      cy.get('.demo-stage canvas').should(($updated) => expect(canvasSnapshot($updated)).not.to.equal(before));
    });
  });

  it('loads another static image when the selected source URL changes', () => {
    visitExample('image-static');
    cy.get('[aria-label="Image URL"]').select('https://pbs.twimg.com/media/D7IgamEUEAA5DHE.jpg');
    cy.wait('@alternateImage').its('response.statusCode').should('equal', 200);
    cy.get('.demo-stage canvas').should('be.visible');
  });

  it('creates two independent maps and removes both during client navigation', () => {
    visitExample('side-by-side');
    cy.get('.demo-stage .ol-viewport').should('have.length', 2);
    cy.get('.demo-stage .ol-viewport').each(($map) => expect($map[0].clientWidth).to.be.greaterThan(100));
    cy.get('[aria-label="ng-openlayers home"]').click();
    cy.get('.ol-viewport').should('not.exist');
    cy.get('.example-card').should('have.length', 27);
  });
});
