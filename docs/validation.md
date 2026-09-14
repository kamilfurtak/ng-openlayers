# Validation and maintenance

Use Node.js 24 and the committed lockfile:

```sh
npm ci --legacy-peer-deps --include=optional
npm run lint
npm run test-ci
npm run build
npx playwright install chromium
npm run e2e
```

`test-ci` uses Jasmine/Karma with real OpenLayers objects and ChromeHeadless.
Set `CHROME_BIN` to your Chromium executable if it is not found automatically.
The library compiler additionally enforces `noImplicitAny`; this is an incremental
improvement, not a claim that the whole legacy workspace uses full strict mode.

## What the regression suite protects

- Angular map destruction disposes the owned OpenLayers map and event bridges.
- Replacing a view rebinds all outputs once and unsubscribes the previous view.
- Projected coordinates follow projection changes and unsubscribe on removal.
- Layers and overlays attach/detach; layer opacity updates in place.
- Draw and modify interactions detach and no longer forward events after removal.
- Browser tests exercise demo navigation, controls, repeated projection changes,
  polygon drawing and disabling the drawing interaction.

The browser suite uses an explicitly mocked OSM tile response to remain deterministic;
it does not validate third-party tile availability. Unit tests do not measure heap
retention or prove the absence of every possible memory leak.

## Coverage boundary

The September 2026 maintenance run executed 45 unit tests and 3 browser tests.
Line coverage was 31.47%, up from the previously recorded 16.34%; many specialized
sources, styles and controls still need behavioral tests. CI prevents regression
below 30% statements/lines and 20% branches/functions. These are a starting floor,
not a target or evidence of comprehensive coverage. Improve it alongside actual
bug fixes rather than adding assertion-free tests.

Nx cache inputs include project sources and shared TypeScript/package configuration;
E2E also includes the Playwright config. Source edits must invalidate previous results.

The CI workflow runs lint, tests, production library/demo builds and browser tests
before deploying the demo. Npm publishing remains a separate explicit release path.
