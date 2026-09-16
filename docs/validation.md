# Validation and maintenance

Use Node.js 24.15+ (or 22.22.3+) and the committed lockfiles:

```sh
npm ci
npm run lint
npm run test-ci
npm run build
npx playwright install chromium
npm run e2e
npm run test:consumer
npm audit
```

`test-ci` uses Jasmine/Karma and real OpenLayers objects in ChromeHeadless. Set `CHROME_BIN` if Chrome is not detected. `e2e` builds and serves the production static site. `test:consumer` installs the actual library tarball into an independent Angular 22 application and verifies compilation and lifecycle behavior without source aliases.

## Verified on 2026-09-16

- Clean install without legacy peer resolution; no npm audit vulnerabilities in the root or consumer installation.
- Lint for all three Nx projects.
- 55 library tests, 7 browser tests and 1 packaged-consumer lifecycle test.
- Production library build and 28 prerendered content pages, plus the example-index redirect and a standalone 404 page.
- Camofox visual inspection at desktop and mobile widths, DOM checks, live OSM map rendering and a map-control state change.

The dependency review leaves TypeScript at 6.0.3 and consumer Vitest at 4.1.11 to match Angular's supported peer ranges. Node type definitions follow the CI runtime's major. The demo uses Angular's default Baseline browser targets.

## Regression coverage

- Map disposal and event bridge cleanup; view replacement, projected coordinates and event rebinding.
- Layers and overlays attaching/detaching, layer property updates and render callback replacement/removal.
- Sources composed through custom Angular components and isolation between sibling maps.
- OSM/XYZ URL updates preserving source identity and subscriptions; replacement-source ownership.
- Dynamic style composition, flat vector styles and cluster spacing/cleanup.
- Draw abortion and interaction event cleanup, including snap/select/translate.
- Zone-based map setup outside Angular and re-entry only for subscribed map outputs.
- Browser navigation, map controls, projection changes, drawing, mobile search/filtering and keyboard-controlled swipe.
- All sitemap routes opening with distinct metadata and an initialized map; home and example content usable with JavaScript disabled.

Browser regression tiles are explicitly mocked to avoid depending on external providers. The all-route smoke test substitutes external responses and checks initialization/errors; it does not validate every provider's data or every example's complete interaction flow. Camofox's live tile check is separate from these deterministic tests.

## Measured boundaries

Library coverage: 40.26% statements, 29.26% branches, 31.44% functions and 41.03% lines. CI retains the existing floor of 30% statements/lines and 20% branches/functions. Many specialized sources and controls still need behavioral tests; these results do not prove absence of all memory leaks.

The library enforces `noImplicitAny` and the workspace uses strict Angular templates. Full TypeScript strict mode has not been enabled across the legacy API.

The production home page's initial JavaScript and CSS total approximately 331 kB before compression (about 91 kB estimated transfer). OpenLayers is loaded with the example routes. A 400 kB warning / 500 kB error budget protects initial assets. These are build sizes, not field performance or Core Web Vitals measurements.

Nx cache inputs include sources and shared package/TypeScript configuration. E2E also includes the Playwright configuration. Static content, canonical metadata, sitemap entries and JSON-LD are validated in the build/browser checks. Search-engine indexing is not asserted by these checks.

The CI workflow runs validation before GitHub Pages deployment. Npm publication remains a separate release action.

## Package presentation

`README.md` is canonical for GitHub and npm. `copy:lib:docs` checks package metadata freshness and README links, then includes that exact file with LICENSE and CHANGELOG in the built package. The site reads its description from the library manifest.

`npm run build:branding` regenerates the README SVG banner from the site's logo and map illustration. The matching 1200 × 630 PNG in `docs/assets/` is the social preview; render it again when changing the banner. The site copies that canonical PNG during its build, with the shared artwork included in the Nx cache inputs.
