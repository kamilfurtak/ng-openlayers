export const examplesList = [
  {
    title: 'Basic',
    description: 'Adjust longitude, latitude, zoom and opacity through Angular input bindings.',
    routerLink: 'basic',
  },
  {
    title: 'Map position',
    description: 'Keep coordinate inputs and the map view in sync as you pan and zoom.',
    routerLink: 'map-position',
  },
  {
    title: 'Cursor position',
    description: 'Display the cursor coordinates in a mouse position control outside the map.',
    routerLink: 'cursor-position',
    openLayersLink: 'https://openlayers.org/en/latest/examples/mouse-position.html',
  },
  {
    title: 'Geometry types',
    description: 'Render points, lines, circles and polygon geometries from GeoJSON.',
    routerLink: 'display-geometry',
    openLayersLink: 'https://openlayers.org/en/latest/examples/geojson.html',
  },
  {
    title: 'GeoJSON source',
    description: 'Load geographic features from a GeoJSON file and style them in a vector layer.',
    routerLink: 'display-geojson-source',
    openLayersLink: 'https://openlayers.org/en/latest/examples/vector-layer.html',
  },
  {
    title: 'Draw polygon',
    description: 'Draw a polygon on the map and control the drawing interaction from Angular.',
    routerLink: 'draw-polygon',
    openLayersLink: 'https://openlayers.org/en/latest/examples/draw-features.html',
  },
  {
    title: 'Modify polygon',
    description: 'Edit polygon vertices and read the updated geometry through interaction events.',
    routerLink: 'modify-polygon',
    openLayersLink: 'https://openlayers.org/en/latest/examples/modify-features.html',
  },
  {
    title: 'Side by side',
    description: 'Compare two map layers with synchronized panning and zooming.',
    routerLink: 'side-by-side',
  },
  {
    title: 'Layer swipe',
    description: 'Compare a street map and satellite imagery with a keyboard-accessible slider.',
    routerLink: 'swipe',
    openLayersLink: 'https://openlayers.org/en/latest/examples/layer-swipe.html',
  },
  {
    title: 'HTML overlay',
    description: 'Anchor custom HTML content to a geographic coordinate.',
    routerLink: 'overlay',
    openLayersLink: 'https://openlayers.org/en/latest/examples/overlay.html',
  },
  {
    title: 'Hover and selection styles',
    description: 'Change feature colors when the pointer hovers or a feature is selected.',
    routerLink: 'color-select-hover',
    openLayersLink: 'https://openlayers.org/en/latest/examples/vector-layer.html',
  },
  {
    title: 'Map markers',
    description: 'Place an SVG marker at a coordinate and customize its icon style.',
    routerLink: 'marker',
    openLayersLink: 'https://openlayers.org/en/latest/examples/icon-color.html',
  },
  {
    title: 'Point clustering',
    description: 'Group nearby point features into clusters as the map resolution changes.',
    routerLink: 'cluster',
    openLayersLink: 'https://openlayers.org/en/latest/examples/cluster.html',
  },
  {
    title: 'Raster operations',
    description: 'Adjust image brightness and contrast with pixel-based raster operations.',
    routerLink: 'raster',
  },
  {
    title: 'ArcGIS image',
    description: 'Display a map image exported by an ArcGIS MapServer endpoint.',
    routerLink: 'arcgis-image',
    openLayersLink: 'https://openlayers.org/en/latest/examples/arcgis-image.html',
  },
  {
    title: 'WMS image events',
    description: 'Load a WMS map image and observe its loading events.',
    routerLink: 'image-wms',
    openLayersLink: 'https://openlayers.org/en/latest/examples/image-load-events.html',
  },
  {
    title: 'View projection update',
    description: 'Switch view projections while preserving coordinate and resolution event bindings.',
    routerLink: 'view-projection-update',
  },
  {
    title: 'Overview map',
    description: 'Add a small overview control to show the main map in its wider context.',
    routerLink: 'overview',
    openLayersLink: 'https://openlayers.org/en/latest/examples/overviewmap.html',
  },
  {
    title: 'UTFGrid feature info',
    description: 'Read feature information on hover using a local UTFGrid sample dataset.',
    routerLink: 'utf-grid',
    openLayersLink: 'https://openlayers.org/en/latest/examples/utfgrid.html',
  },
  {
    title: 'Static image',
    description: 'Place a single image on a map using a defined extent and projection.',
    routerLink: 'image-static',
    openLayersLink: 'https://openlayers.org/en/latest/examples/static-image.html',
  },
  {
    title: 'Select features',
    description: 'Select vector features on the map and inspect the current selection.',
    routerLink: 'select-interaction',
    openLayersLink: 'https://openlayers.org/en/latest/examples/select-features.html',
  },
  {
    title: 'TileJSON',
    description: 'Configure a tile source from a local TileJSON definition.',
    routerLink: 'tile-json',
    openLayersLink: 'https://openlayers.org/en/latest/examples/tilejson.html',
  },
  {
    title: 'Graticule',
    description: 'Draw a geographic coordinate grid with labels over the map.',
    routerLink: 'graticule',
    openLayersLink: 'https://openlayers.org/en/latest/examples/graticule.html',
  },
  {
    title: 'Draw hole in polygon',
    description: 'Draw an interior ring in a polygon. Use Ctrl/Cmd-click to remove a hole.',
    routerLink: 'draw-hole-in-polygon',
  },
  {
    title: 'Measure',
    description: 'Measure distance and area with configurable metric or imperial units.',
    routerLink: 'measure',
    openLayersLink: 'https://openlayers.org/en/latest/examples/measure.html',
  },
  {
    title: 'Snap interaction',
    description: 'Snap drawing and editing operations to existing feature vertices.',
    routerLink: 'snap-interaction',
    openLayersLink: 'https://openlayers.org/en/latest/examples/snap.html',
  },
  {
    title: 'Composed styles',
    description: 'Combine multiple styles to render a feature with several visual treatments.',
    routerLink: 'styles-composition',
    openLayersLink: 'https://openlayers.org/en/latest/examples/polygon-styles.html',
  },
];

export const categories = ['All examples', 'Essentials', 'Data sources', 'Interactions', 'Presentation'] as const;
const categorySlugs: Record<string, readonly string[]> = {
  Essentials: ['basic', 'map-position', 'cursor-position', 'display-geometry', 'view-projection-update'],
  Interactions: [
    'draw-polygon',
    'modify-polygon',
    'select-interaction',
    'draw-hole-in-polygon',
    'measure',
    'snap-interaction',
  ],
  Presentation: [
    'side-by-side',
    'swipe',
    'overlay',
    'color-select-hover',
    'marker',
    'overview',
    'graticule',
    'styles-composition',
  ],
};
export function categoryFor(slug: string): string {
  return Object.keys(categorySlugs).find((category) => categorySlugs[category].includes(slug)) ?? 'Data sources';
}
export function sourcePathFor(slug: string): string {
  const exceptions: Record<string, string> = {
    overlay: 'overlay/overlay-demo',
    graticule: 'graticule/graticule-demo',
    'utf-grid': 'utfgrid/utfgrid',
  };
  return (
    'https://github.com/kamilfurtak/ng-openlayers/blob/master/apps/demo-ng-openlayers/src/app/' +
    (exceptions[slug] ?? `${slug}/${slug}`) +
    '.component.ts'
  );
}
