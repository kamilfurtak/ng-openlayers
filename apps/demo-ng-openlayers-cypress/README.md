# Cypress production checks

Run `npm run e2e:cypress` from the repository root. This builds the prerendered
site, type-checks the Cypress project and runs headless Chrome against that build.
Chrome must be installed; `CYPRESS_BROWSER` can select another installed browser.
The runner owns port 4303 and fails if it is already occupied.

To rerun a spec against an existing production build:

```sh
node tools/run-cypress.mjs src/e2e/interactions.cy.ts
```

The suite checks all 27 example routes, catalog filtering and navigation, server
HTML and metadata, map input bindings, projection changes, drawing, selection,
vertex modification, snapping, holes, measurements, overlays, raster pixels,
UTFGrid data, clustering, image replacement and mobile layer comparison.
Map interactions use browser pointer events and rendered user results; they do
not call Angular debug APIs or modify OpenLayers instances directly.

Known external image providers receive finite image fixtures; the external
GeoJSON endpoint receives valid polygon data. Actual local assets, metadata and
UTFGrid files are served unchanged. Missing local resources and unknown external
hosts fail tests. This isolates application behavior from provider availability;
it does not establish that public tile services are currently operational.

No exceptions are suppressed, retries are disabled, and the suite has no timed
sleeps. Tests wait for their relevant DOM, network or rendering result. Source
canvases may legally be tainted by cross-origin images, so pixel assertions are
limited to the raster demo that explicitly supports image processing. The swipe
test observes the real clipping operation instead.

Failures produce screenshots in `test-results/cypress/screenshots`. The runner
writes a machine-readable summary to `test-results/cypress/results.json` and
returns a failure for test failures, startup failures or zero executed tests.
Playwright remains a separate regression suite, including keyboard interaction
and a browser session with JavaScript disabled.
