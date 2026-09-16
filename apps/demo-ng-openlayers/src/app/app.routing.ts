import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./examples-list/examples-list.component').then((m) => m.ExamplesListComponent),
  },
  {
    path: 'examples',
    loadComponent: () => import('./examples-item/examples-item.component').then((m) => m.ExamplesItemComponent),
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/' },
      { path: 'basic', loadComponent: () => import('./basic/basic.component').then((m) => m.BasicComponent) },
      {
        path: 'map-position',
        loadComponent: () => import('./map-position/map-position.component').then((m) => m.MapPositionComponent),
      },
      {
        path: 'cursor-position',
        loadComponent: () =>
          import('./cursor-position/cursor-position.component').then((m) => m.CursorPositionComponent),
      },
      {
        path: 'display-geometry',
        loadComponent: () =>
          import('./display-geometry/display-geometry.component').then((m) => m.DisplayGeometryComponent),
      },
      {
        path: 'display-geojson-source',
        loadComponent: () =>
          import('./display-geojson-source/display-geojson-source.component').then(
            (m) => m.DisplayGeojsonSourceComponent
          ),
      },
      {
        path: 'draw-polygon',
        loadComponent: () => import('./draw-polygon/draw-polygon.component').then((m) => m.DrawPolygonComponent),
      },
      {
        path: 'modify-polygon',
        loadComponent: () => import('./modify-polygon/modify-polygon.component').then((m) => m.ModifyPolygonComponent),
      },
      {
        path: 'side-by-side',
        loadComponent: () => import('./side-by-side/side-by-side.component').then((m) => m.SideBySideComponent),
      },
      { path: 'swipe', loadComponent: () => import('./swipe/swipe.component').then((m) => m.SwipeComponent) },
      {
        path: 'overlay',
        loadComponent: () => import('./overlay/overlay-demo.component').then((m) => m.OverlayDemoComponent),
      },
      {
        path: 'color-select-hover',
        loadComponent: () =>
          import('./color-select-hover/color-select-hover.component').then((m) => m.ColorSelectHoverComponent),
      },
      { path: 'marker', loadComponent: () => import('./marker/marker.component').then((m) => m.MarkerComponent) },
      { path: 'cluster', loadComponent: () => import('./cluster/cluster.component').then((m) => m.ClusterComponent) },
      { path: 'raster', loadComponent: () => import('./raster/raster.component').then((m) => m.RasterComponent) },
      {
        path: 'arcgis-image',
        loadComponent: () => import('./arcgis-image/arcgis-image.component').then((m) => m.ArcgisImageComponent),
      },
      {
        path: 'image-wms',
        loadComponent: () => import('./image-wms/image-wms.component').then((m) => m.ImageWMSComponent),
      },
      {
        path: 'view-projection-update',
        loadComponent: () =>
          import('./view-projection-update/view-projection-update.component').then(
            (m) => m.ViewProjectionUpdateComponent
          ),
      },
      {
        path: 'overview',
        loadComponent: () => import('./overview/overview.component').then((m) => m.OverviewComponent),
      },
      { path: 'utf-grid', loadComponent: () => import('./utfgrid/utfgrid.component').then((m) => m.UTFGridComponent) },
      {
        path: 'image-static',
        loadComponent: () => import('./image-static/image-static.component').then((m) => m.ImageStaticComponent),
      },
      {
        path: 'select-interaction',
        loadComponent: () =>
          import('./select-interaction/select-interaction.component').then((m) => m.SelectInteractionComponent),
      },
      {
        path: 'tile-json',
        loadComponent: () => import('./tile-json/tile-json.component').then((m) => m.TileJsonComponent),
      },
      {
        path: 'graticule',
        loadComponent: () => import('./graticule/graticule-demo.component').then((m) => m.GraticuleDemoComponent),
      },
      {
        path: 'draw-hole-in-polygon',
        loadComponent: () =>
          import('./draw-hole-in-polygon/draw-hole-in-polygon.component').then((m) => m.DrawHoleInPolygonComponent),
      },
      { path: 'measure', loadComponent: () => import('./measure/measure.component').then((m) => m.MeasureComponent) },
      {
        path: 'snap-interaction',
        loadComponent: () =>
          import('./snap-interaction/snap-interaction.component').then((m) => m.SnapInteractionComponent),
      },
      {
        path: 'styles-composition',
        loadComponent: () =>
          import('./styles-composition/styles-composition.component').then((m) => m.StylesCompositionComponent),
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
