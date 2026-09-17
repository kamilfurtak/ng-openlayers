# Compatibility boundary

The packed-consumer test verifies Angular 22 compilation and linking, zoneless projection changes, coordinate rebinding, event uniqueness and disposal against the installed `ng-openlayers` package. OpenLayers imports resolve to existing ESM `.js` files.

This fixture uses JSDOM, so it does not validate canvas rendering. Real-browser map and interaction checks live in the main Cypress suite. Neither the fixture nor the demo's prerendering claims SSR support for OpenLayers itself or compatibility with future Angular majors.

TypeScript 6.0.x and Vitest 4.x follow the Angular 22 build tool's peer constraints. The lockfile was regenerated with npm 11; normal `npm ci` and the packed installation also pass with npm 10.9.8.
