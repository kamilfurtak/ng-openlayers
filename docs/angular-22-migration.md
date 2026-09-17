# Migrating to ng-openlayers 22

This is a major release: upgrade Angular to 22 before installing ng-openlayers 22. Applications staying on Angular 21 can continue using ng-openlayers 21.2.x.

## Toolchain

The workspace uses Angular 22.1.7, Angular CLI/build 22.1.8, Nx 23.2.1, OpenLayers 10.10.0, Proj4 2.22.0 and ng-packagr 22.1.1. Official Angular and Nx migrations were applied. Use Node 24.15+ or 22.22.3+.

TypeScript remains on 6.0.3 because Angular 22 requires `>=6.0 <6.1`. The independent consumer uses Vitest 4.1.11 because Angular's test builder requires Vitest 4; Vitest 5 is outside its supported peer range. Jasmine/Karma regressions remain in the main workspace. Zone.js is only a test dependency, including a regression that explicitly runs with zone-based change detection.

ESLint uses flat configuration. The demo uses the application builder, standalone bootstrap, lazy routes and zoneless change detection. Hammer.js, ngx-toastr and unused legacy build/test packages were removed from the demo/toolchain. The lockfiles install without `--legacy-peer-deps`.

Nx currently pins a vulnerable smol-toml version. A narrow Nx override uses smol-toml 1.8.0, which fixes [GHSA-7w5x-hrqm-74c2](https://github.com/advisories/GHSA-7w5x-hrqm-74c2). Revisit the override when Nx updates that dependency.

## Application changes

1. Upgrade Angular using its supported migration path, then install ng-openlayers 22, OpenLayers 10.10+ and Proj4 2.22+.
2. Keep standalone imports or `AngularOpenlayersModule`; the existing decorator input/output API remains available.
3. Use template bindings or `ComponentRef.setInput()` when changing inputs. Library components now use `OnPush`; direct assignments do not schedule a view check or invoke `ngOnChanges`.
4. Handle `MapComponent.olChange` as an OpenLayers base event and `olPostRender` as a map event. These correct types replace the previous inaccurate draw/render event types.
5. Let each wrapper dispose the sources, layers and interactions it creates. If sharing an externally created source, manage its lifetime in the application. A removed wrapper will not clear a replacement source owned by somebody else.
6. In SSR/prerendered apps, keep OpenLayers maps inside a client-rendered boundary. See the README and demo's deferred example outlet.

Map outputs retain their existing names. The previously unforwarded `propertyChange` output now emits alongside `olPropertyChange`. `drawAbort` is an additional alias for `olDrawAbort`.

Constructor-only OpenLayers options are not made dynamically mutable by this migration. Existing legacy inputs ignored by modern OpenLayers remain deprecated compatibility fields; the README no longer presents them as active features.

## Site behavior

The home page and 27 example descriptions are prerendered as static HTML. Every content route has a unique title, description and canonical URL; the sitemap is generated from the actual output. Unknown paths receive a standalone noindex 404 page on GitHub Pages. Open Graph metadata uses the repository's social preview.

The catalog has search, category filters, keyboard-accessible links and a responsive layout. Maps load after their example route is opened. Swipe uses a native range input; UTFGrid and TileJSON use local metadata fixtures instead of the retired public Mapbox endpoint.

These changes make the content crawlable; indexing and ranking remain decisions made by search engines. Submit the generated sitemap through the site's Google Search Console property if it has not already been registered.
