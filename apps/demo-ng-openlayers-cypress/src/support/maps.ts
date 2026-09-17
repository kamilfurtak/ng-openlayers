export const viewport = '.demo-stage .ol-viewport';

export function visitExample(slug: string): void {
  cy.visit(`/examples/${slug}/`);
  cy.get(viewport).first().should('be.visible');
  cy.get('.demo-stage .ol-layer canvas').first().should('be.visible').and(($canvas) => {
    const canvas = $canvas[0] as HTMLCanvasElement;
    expect(canvas.width).to.be.greaterThan(0);
    expect(canvas.height).to.be.greaterThan(0);
  });
}

export interface Pixel { x: number; y: number }

export function afterMapPaint(): void {
  cy.window().then((window) => new Cypress.Promise<void>((resolve) => {
    // Angular's scheduled binding update and OpenLayers' next render each get a
    // browser frame. This is a rendering boundary, not an elapsed-time delay.
    window.requestAnimationFrame(() => window.requestAnimationFrame(() => resolve()));
  }));
}

// Independent Web Mercator projection of the documented example coordinates.
// Tests use actual DOM pointer input; no Angular debugging API or map internals.
export function pixelFor(
  coordinate: [number, number],
  center: [number, number] = [1.4886, 43.5554],
  zoom = 5,
): Cypress.Chainable<Pixel> {
  const project = ([lon, lat]: [number, number]): [number, number] => [
    6378137 * lon * Math.PI / 180,
    6378137 * Math.log(Math.tan(Math.PI / 4 + lat * Math.PI / 360)),
  ];
  const [x, y] = project(coordinate);
  const [centerX, centerY] = project(center);
  const resolution = 2 * Math.PI * 6378137 / 256 / 2 ** zoom;
  return cy.get(viewport).first().then(($viewport) => ({
    x: $viewport[0].clientWidth / 2 + (x - centerX) / resolution,
    y: $viewport[0].clientHeight / 2 - (y - centerY) / resolution,
  }));
}

export function movePointer(point: Pixel): void {
  cy.get(viewport).first().trigger('pointermove', point.x, point.y, {
    eventConstructor: 'PointerEvent', pointerId: 1, pointerType: 'mouse', isPrimary: true,
    buttons: 0,
  });
}

export function dragPointer(from: Pixel, to: Pixel): void {
  movePointer(from);
  cy.get(viewport).first().trigger('pointerdown', from.x, from.y, {
    eventConstructor: 'PointerEvent', pointerId: 1, pointerType: 'mouse', isPrimary: true,
    button: 0, buttons: 1,
  });
  // A short sequence of actual pointer events crosses OpenLayers' drag tolerance.
  for (const fraction of [0.25, 0.5, 0.75, 1]) {
    cy.get(viewport).first().trigger('pointermove',
      from.x + (to.x - from.x) * fraction, from.y + (to.y - from.y) * fraction, {
        eventConstructor: 'PointerEvent', pointerId: 1, pointerType: 'mouse', isPrimary: true,
        button: 0, buttons: 1,
      });
  }
  cy.get(viewport).first().trigger('pointerup', to.x, to.y, {
    eventConstructor: 'PointerEvent', pointerId: 1, pointerType: 'mouse', isPrimary: true,
    button: 0, buttons: 0,
  });
}
