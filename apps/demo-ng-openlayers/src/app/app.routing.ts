import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClusterComponent } from './cluster/cluster.component';
import { BasicComponent } from './basic/basic.component';
import { RasterComponent } from './raster/raster.component';
import { ExamplesListComponent } from './examples-list/examples-list.component';
import { ExamplesItemComponent } from './examples-item/examples-item.component';
import { MapPositionComponent } from './map-position/map-position.component';
import { CursorPositionComponent } from './cursor-position/cursor-position.component';
import { DisplayGeometryComponent } from './display-geometry/display-geometry.component';
import { DisplayGeojsonSourceComponent } from './display-geojson-source/display-geojson-source.component';
import { DrawPolygonComponent } from './draw-polygon/draw-polygon.component';
import { ModifyPolygonComponent } from './modify-polygon/modify-polygon.component';
import { SideBySideComponent } from './side-by-side/side-by-side.component';
import { SwipeComponent } from './swipe/swipe.component';
import { ColorSelectHoverComponent } from './color-select-hover/color-select-hover.component';
import { MarkerComponent } from './marker/marker.component';
import { ArcgisImageComponent } from './arcgis-image/arcgis-image.component';
import { ImageWMSComponent } from './image-wms/image-wms.component';
import { ViewProjectionUpdateComponent } from './view-projection-update/view-projection-update.component';
import { UTFGridComponent } from './utfgrid/utfgrid.component';
import { OverviewComponent } from './overview/overview.component';
import { TileJsonComponent } from './tile-json/tile-json.component';
import { SelectInteractionComponent } from './select-interaction/select-interaction.component';
import { ImageStaticComponent } from './image-static/image-static.component';
import { OverlayDemoComponent } from './overlay/overlay-demo.component';
import { GraticuleDemoComponent } from './graticule/graticule-demo.component';
import { DrawHoleInPolygonComponent } from './draw-hole-in-polygon/draw-hole-in-polygon.component';

const routes: Routes = [
  { path: '', component: ExamplesListComponent },
  {
    path: 'examples',
    component: ExamplesItemComponent,
    children: [
      { path: 'basic', component: BasicComponent },
      { path: 'map-position', component: MapPositionComponent },
      { path: 'cursor-position', component: CursorPositionComponent },
      { path: 'display-geometry', component: DisplayGeometryComponent },
      { path: 'display-geojson-source', component: DisplayGeojsonSourceComponent },
      { path: 'draw-polygon', component: DrawPolygonComponent },
      { path: 'modify-polygon', component: ModifyPolygonComponent },
      { path: 'side-by-side', component: SideBySideComponent },
      { path: 'swipe', component: SwipeComponent },
      { path: 'overlay', component: OverlayDemoComponent },
      { path: 'color-select-hover', component: ColorSelectHoverComponent },
      { path: 'marker', component: MarkerComponent },
      { path: 'cluster', component: ClusterComponent },
      { path: 'raster', component: RasterComponent },
      { path: 'arcgis-image', component: ArcgisImageComponent },
      { path: 'image-wms', component: ImageWMSComponent },
      { path: 'view-projection-update', component: ViewProjectionUpdateComponent },
      { path: 'overview', component: OverviewComponent },
      { path: 'utf-grid', component: UTFGridComponent },
      { path: 'image-static', component: ImageStaticComponent },
      { path: 'select-interaction', component: SelectInteractionComponent },
      { path: 'tile-json', component: TileJsonComponent },
      { path: 'graticule', component: GraticuleDemoComponent },
      { path: 'draw-hole-in-polygon', component: DrawHoleInPolygonComponent },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
