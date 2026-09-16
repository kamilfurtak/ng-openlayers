# 22.0.0 (2026-09-16)

- **Breaking:** require Angular 22, OpenLayers 10.10+ and Proj4 2.22+.
- Update Angular, Nx, build, lint and test tooling; use direct OpenLayers module imports.
- Use OnPush components and run unobserved map pointer/render work outside Angular's zone.
- Add map `renderComplete`, `maxTilesLoading` and `moveTolerance`; fix `propertyChange` forwarding and map event types.
- Support reusable source/style/attribution wrapper components through ancestor injection.
- Preserve source instances when changing XYZ/OSM URLs; detach and dispose owned sources, layers and interactions.
- Add layer zoom limits, replaceable render callbacks, flat vector styles and cluster `minDistance`.
- Add drawing trace options and the backward-compatible `drawAbort` alias.
- Synchronize composed styles when child components change.
- Unify the npm and GitHub README, package metadata and site artwork; validate the packaged documentation before release.
- Redesign the example site with search, categories, lazy maps and 28 prerendered content pages with metadata and a sitemap.
- Replace retired demo endpoints and Hammer.js/toast dependencies with local fixtures and native controls.
- Expand regression tests and verify the actual npm tarball in an independent Angular 22 app.

# 21.2.0

- Support Angular 21 and 22, with a packed-package Angular 22 consumer checked in CI.
- Use explicit OpenLayers ESM module extensions so Node-based consumers can resolve the published bundle.
- Keep the existing Angular 21 browser and unit regression suite.

## 21.1.1 (2026-06-08)

This was a version bump only for ng-openlayers to align it with other projects, there were no code changes.

# 21.1.0 (2026-06-06)

### 🚀 Features

- Add `aol-interaction-measure` for drawing distance and area measurements with metric or imperial units.
- Add a measurement demo at `/examples/measure`.

# 21.0.0 (2026-06-06)

### 🚀 Features

- ⚠️ Update to Angular 21.

### ⚠️ Breaking Changes

- ⚠️ Angular peer dependencies now target Angular 21.

# 20.0.0 (2026-06-06)

### 🚀 Features

- ⚠️ Update to Angular 20.
- Refresh OpenLayers and supporting dependencies.
- Refresh README, package metadata, CI, GitHub Pages deployment, and npm publishing setup.

### ⚠️ Breaking Changes

- ⚠️ Angular peer dependencies now target Angular 20.

# 19.0.0 (2024-12-09)

### 🚀 Features

- ⚠️ Update to Angular 19

### ⚠️ Breaking Changes

- ⚠️ Update to Angular 19

## 18.1.0 (2024-11-29)

### 🚀 Features

- Introduced DrawHoleInPolygonComponent for drawing holes in polygons using OpenLayers (https://kamilfurtak.github.io/ng-openlayers/examples/draw-hole-in-polygon). feat: Add support for undoing the last point in Draw interaction by Ctrl+Z

# 18.0.0 (2024-11-14)

### 🚀 Features

- ⚠️ Bump Angular version to 18

### ⚠️ Breaking Changes

- ⚠️ Bump Angular version to 18
