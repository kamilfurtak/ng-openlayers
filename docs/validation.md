# Validation and maintenance

Use Node.js 24.15+ (or 22.22.3+) and the committed lockfiles:

```sh
npm ci
npm run lint
npm run test-ci
npm run build
npm run e2e
npm run test:consumer
npm audit
```

`npm run test:all` runs lint, both unit suites, the Cypress production browser suite and the packaged consumer. Install Chrome first. `test` is a finite run; `test:watch:lib` and `test:watch:demo` start individual unit watchers.

`test-ci` uses Jasmine/Karma with real OpenLayers objects in ChromeHeadless. Demo tests run without Zone.js, matching the application. Library tests also include explicit zone-based event-boundary coverage. Set `CHROME_BIN` if Chrome is not detected.

Cypress 16.1 runs Chrome against the production static site on its own port 4303. Its runner owns and closes that server, fails on an occupied port, browser failure, failed tests or zero tests, and saves a JSON result and failure screenshots under `test-results/cypress/`. See the [Cypress guide](../apps/demo-ng-openlayers-cypress/README.md) for focused runs and fixture boundaries. Cypress also checks native keyboard input and navigation with application JavaScript blocked by a test-server Content Security Policy. The production HTML and scripts remain unmodified; browser policy-violation events prove the bootstrap was blocked. `e2e:cypress` remains an alias for `e2e`.

`test:consumer` builds and installs the actual npm tarball into an independent Angular 22 application. It verifies compilation and zoneless lifecycle behavior without source aliases or npm linking. It does not publish a package.

## Regression coverage

| Area                    | Behavior checked                                                                                                                                                                                              |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Map and view            | Every event output, observed zone entry, disposal, animation cancellation, simultaneous inputs, resolution/rotation/zoom constraints, projection changes, panned camera state and OpenLayers user coordinates |
| Geometry and features   | Coordinate projection, point/circle/collection updates, feature IDs, conditional geometry removal, sibling isolation and replacement ownership                                                                |
| Sources                 | URL updates, source replacement and disposal, cluster content changes, raster content swaps, GeoJSON projections, projected WMTS/XYZ/vector grids and MVT changes                                             |
| Layers and styles       | Nested groups, visibility/opacity/zoom ranges, render callbacks, flat/vector-tile styles, dynamic style collections, child fill/stroke/text/icon updates and cleanup                                          |
| Controls and overlays   | Attachment/removal, owned control disposal, overview-map replacement, overlay offset/positioning, graticule replacement and WMTS subtype                                                                      |
| Editing and measurement | Draw abortion, selection/snap/translation events, keyboard pan/zoom, distance/area in metric and imperial units, projected measurements, sketch cancellation, polygon-hole removal and restoration            |
| Demo state              | Search/categories/empty state, clipboard feedback, catalog/route contracts, SEO metadata, cursor formatting, geometry export, UTFGrid stale/empty responses, raster pixel transforms and canvas clipping      |
| Browser flows           | All 27 examples, hydrated client navigation, map forms, drawing/modifying/selecting/snapping, hole editing, measurements, raster source/brightness changes, UTFGrid labels, overlays, mobile search and swipe |
| Static distribution     | Prerendered descriptions, canonical URLs, JSON-LD, sitemap, 404/noindex, no-JavaScript content, packaged documentation and independent consumer                                                               |

Browser provider responses are deterministic fixtures. Local scripts, icons, metadata and UTFGrid data are served normally; Cypress fails on missing local resources or an unrecognized external provider. Real OpenLayers handles interactions and canvas rendering. Raster assertions inspect actual pixel values; a general canvas presence check alone does not prove a provider rendered correctly. Camofox live-provider inspection is separate from mocked browser regressions.

## Verified on 2026-09-17

- 190 library unit tests and 40 zoneless demo unit tests passed.
- All 48 Cypress scenarios passed, including all 27 example routes.
- The built 22.0.1 tarball compiled and passed its independent Angular 22.1.7 consumer lifecycle test.
- Root and independent-consumer npm audits reported zero vulnerabilities.
- Camofox live inspection verified desktop rendering, first-hover UTFGrid data and an unclipped overlay at 390 px.

| Project | Statements | Branches | Functions | Lines |
| --- | ---: | ---: | ---: | ---: |
| Library | 92.03% | 81.81% | 87.61% | 94.54% |
| Demo | 79.4% | 94.87% | 54.34% | 86.5% |

## Coverage and CI

Unit coverage reports include HTML, LCOV and JSON summaries under `coverage/ng-openlayers` and `coverage/demo-ng-openlayers`. Nx restores those output directories on unit cache hits. The Cypress suite always executes; it cannot replay a cached success. The shared TypeScript alias gives Nx an explicit dependency from the demo to the library, so library edits invalidate its build and tests.

Enforced global coverage floors:

| Project | Statements | Branches | Functions | Lines |
| ------- | ---------: | -------: | --------: | ----: |
| Library |        85% |      75% |       80% |   90% |
| Demo    |        75% |      90% |       50% |   80% |

CI runs the checks before GitHub Pages deployment and publishes coverage, browser reports and failure screenshots as an artifact. Npm publication runs only for a release commit after successful validation.

The dependency review keeps TypeScript 6.0.3 and consumer Vitest 4.1.11 within Angular 22's supported peer ranges. Node type definitions follow the CI runtime's major. The demo uses Angular's default Baseline browser targets.

## Boundaries

Coverage measures executed, instrumented code; it does not prove every OpenLayers option, browser, external provider or possible input combination. No tests assert the absence of every memory leak. Polygon-hole regressions cover selection, vertex checks, removal and cancellation; they do not establish full topology validation for self-intersecting geometry.

The library enforces `noImplicitAny` and the workspace uses strict Angular templates. Full TypeScript strict mode has not been enabled across the legacy API. Many constructor-only control/source options still require recreating their Angular component; view constraints and projected grid/format changes have dedicated replacement behavior.

OpenLayers maps require a browser DOM/canvas. The home page and 27 example descriptions are prerendered; the map canvas itself is not rendered on the server. A 400 kB warning / 500 kB error budget protects initial site assets. Build sizes are not field performance or Core Web Vitals measurements. Technical metadata checks do not guarantee Google indexing or ranking.

## Package presentation

`README.md` is canonical for GitHub and npm. `copy:lib:docs` checks package metadata freshness and README links, then includes that exact file with LICENSE and CHANGELOG in the built package. The site reads its description from the library manifest.

`npm run build:branding` regenerates the README SVG banner from the site's logo and map illustration. The matching 1200 × 630 PNG in `docs/assets/` is the social preview; render it again when changing the banner. The site copies that canonical PNG during its build, with the shared artwork included in the Nx cache inputs.
