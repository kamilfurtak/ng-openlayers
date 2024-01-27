"use strict";
(self["webpackChunkdemo_ngx_ol"] = self["webpackChunkdemo_ngx_ol"] || []).push([["main"],{

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class AppComponent {
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 5,
    vars: 0,
    consts: [["routerLink", "/"], [1, "main-container"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header")(1, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "ngx-openlayer demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
    styles: ["header[_ngcontent-%COMP%] {\n        top: 0;\n        height: 75px;\n        width: 100%;\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: space-between;\n        z-index: 4;\n        background-color: #202124;\n        color: #fff;\n        font-family: Roboto, sans-serif;\n        font-size: 16px;\n        opacity: 1;\n        box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);\n      }\n\n      header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n        padding-left: 1rem;\n        cursor: pointer;\n      }\n\n      .main-container[_ngcontent-%COMP%] {\n        height: calc(100% - 72px);\n        background-color: white;\n        margin: 0px;\n        overflow: auto;\n      }\n    \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxNQUFNO1FBQ04sWUFBWTtRQUNaLFdBQVc7UUFFWCxhQUFhO1FBQ2IsZUFBZTtRQUVmLDhCQUE4QjtRQUM5QixVQUFVO1FBQ1YseUJBQXlCO1FBQ3pCLFdBQVc7UUFDWCwrQkFBK0I7UUFDL0IsZUFBZTtRQUNmLFVBQVU7UUFDVixnSEFBZ0g7TUFDbEg7O01BRUE7UUFDRSxrQkFBa0I7UUFDbEIsZUFBZTtNQUNqQjs7TUFFQTtRQUNFLHlCQUF5QjtRQUN6Qix1QkFBdUI7UUFDdkIsV0FBVztRQUNYLGNBQWM7TUFDaEIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIGhlYWRlciB7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgaGVpZ2h0OiA3NXB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICB6LWluZGV4OiA0O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMTI0O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNHB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgICAgfVxuXG4gICAgICBoZWFkZXIgaDEge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cblxuICAgICAgLm1haW4tY29udGFpbmVyIHtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA3MnB4KTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgIH1cbiAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var ngx_ol__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-ol */ 5587);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.routing */ 34);
/* harmony import */ var _arcgis_image_arcgis_image_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./arcgis-image/arcgis-image.component */ 5526);
/* harmony import */ var _basic_basic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic/basic.component */ 1865);
/* harmony import */ var _cluster_cluster_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cluster/cluster.component */ 9505);
/* harmony import */ var _color_select_hover_color_select_hover_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./color-select-hover/color-select-hover.component */ 5633);
/* harmony import */ var _cursor_position_cursor_position_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cursor-position/cursor-position.component */ 6185);
/* harmony import */ var _display_geojson_source_display_geojson_source_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./display-geojson-source/display-geojson-source.component */ 5298);
/* harmony import */ var _display_geometry_display_geometry_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./display-geometry/display-geometry.component */ 4774);
/* harmony import */ var _draw_polygon_draw_polygon_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./draw-polygon/draw-polygon.component */ 8055);
/* harmony import */ var _examples_item_examples_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples-item/examples-item.component */ 3516);
/* harmony import */ var _examples_list_examples_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples-list/examples-list.component */ 6010);
/* harmony import */ var _graticule_graticule_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./graticule/graticule.component */ 7846);
/* harmony import */ var _image_static_image_static_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./image-static/image-static.component */ 8305);
/* harmony import */ var _image_wms_image_wms_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./image-wms/image-wms.component */ 6399);
/* harmony import */ var _map_position_map_position_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./map-position/map-position.component */ 5294);
/* harmony import */ var _marker_marker_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./marker/marker.component */ 4622);
/* harmony import */ var _modify_polygon_modify_polygon_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modify-polygon/modify-polygon.component */ 2646);
/* harmony import */ var _overlay_overlay_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./overlay/overlay.component */ 3263);
/* harmony import */ var _overview_overview_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./overview/overview.component */ 1290);
/* harmony import */ var _raster_raster_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./raster/raster.component */ 3954);
/* harmony import */ var _select_interaction_select_interaction_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./select-interaction/select-interaction.component */ 2617);
/* harmony import */ var _side_by_side_side_by_side_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./side-by-side/side-by-side.component */ 1947);
/* harmony import */ var _swipe_swipe_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./swipe/swipe.component */ 8994);
/* harmony import */ var _tile_json_tile_json_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./tile-json/tile-json.component */ 2093);
/* harmony import */ var _utfgrid_utfgrid_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./utfgrid/utfgrid.component */ 2999);
/* harmony import */ var _view_projection_update_view_projection_update_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./view-projection-update/view-projection-update.component */ 5503);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/core */ 1699);































class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_28__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.FormsModule, _app_routing__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, ngx_ol__WEBPACK_IMPORTED_MODULE_30__.AngularOpenlayersModule, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.ReactiveFormsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_28__.HammerModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _basic_basic_component__WEBPACK_IMPORTED_MODULE_3__.BasicComponent, _cluster_cluster_component__WEBPACK_IMPORTED_MODULE_4__.ClusterComponent, _raster_raster_component__WEBPACK_IMPORTED_MODULE_20__.RasterComponent, _examples_list_examples_list_component__WEBPACK_IMPORTED_MODULE_11__.ExamplesListComponent, _examples_item_examples_item_component__WEBPACK_IMPORTED_MODULE_10__.ExamplesItemComponent, _map_position_map_position_component__WEBPACK_IMPORTED_MODULE_15__.MapPositionComponent, _cursor_position_cursor_position_component__WEBPACK_IMPORTED_MODULE_6__.CursorPositionComponent, _display_geometry_display_geometry_component__WEBPACK_IMPORTED_MODULE_8__.DisplayGeometryComponent, _display_geojson_source_display_geojson_source_component__WEBPACK_IMPORTED_MODULE_7__.DisplayGeojsonSourceComponent, _draw_polygon_draw_polygon_component__WEBPACK_IMPORTED_MODULE_9__.DrawPolygonComponent, _modify_polygon_modify_polygon_component__WEBPACK_IMPORTED_MODULE_17__.ModifyPolygonComponent, _side_by_side_side_by_side_component__WEBPACK_IMPORTED_MODULE_22__.SideBySideComponent, _swipe_swipe_component__WEBPACK_IMPORTED_MODULE_23__.SwipeComponent, _overlay_overlay_component__WEBPACK_IMPORTED_MODULE_18__.OverlayComponent, _color_select_hover_color_select_hover_component__WEBPACK_IMPORTED_MODULE_5__.ColorSelectHoverComponent, _marker_marker_component__WEBPACK_IMPORTED_MODULE_16__.MarkerComponent, _arcgis_image_arcgis_image_component__WEBPACK_IMPORTED_MODULE_2__.ArcgisImageComponent, _utfgrid_utfgrid_component__WEBPACK_IMPORTED_MODULE_25__.UTFGridComponent, _image_wms_image_wms_component__WEBPACK_IMPORTED_MODULE_14__.ImageWMSComponent, _select_interaction_select_interaction_component__WEBPACK_IMPORTED_MODULE_21__.SelectInteractionComponent, _image_static_image_static_component__WEBPACK_IMPORTED_MODULE_13__.ImageStaticComponent, _tile_json_tile_json_component__WEBPACK_IMPORTED_MODULE_24__.TileJsonComponent, _overview_overview_component__WEBPACK_IMPORTED_MODULE_19__.OverviewComponent, _view_projection_update_view_projection_update_component__WEBPACK_IMPORTED_MODULE_26__.ViewProjectionUpdateComponent, _graticule_graticule_component__WEBPACK_IMPORTED_MODULE_12__.GraticuleComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_28__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.FormsModule, _app_routing__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, ngx_ol__WEBPACK_IMPORTED_MODULE_30__.AngularOpenlayersModule, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.ReactiveFormsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_28__.HammerModule]
  });
})();

/***/ }),

/***/ 34:
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _cluster_cluster_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cluster/cluster.component */ 9505);
/* harmony import */ var _basic_basic_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic/basic.component */ 1865);
/* harmony import */ var _raster_raster_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./raster/raster.component */ 3954);
/* harmony import */ var _examples_list_examples_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./examples-list/examples-list.component */ 6010);
/* harmony import */ var _examples_item_examples_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./examples-item/examples-item.component */ 3516);
/* harmony import */ var _map_position_map_position_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map-position/map-position.component */ 5294);
/* harmony import */ var _cursor_position_cursor_position_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cursor-position/cursor-position.component */ 6185);
/* harmony import */ var _display_geometry_display_geometry_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./display-geometry/display-geometry.component */ 4774);
/* harmony import */ var _display_geojson_source_display_geojson_source_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./display-geojson-source/display-geojson-source.component */ 5298);
/* harmony import */ var _draw_polygon_draw_polygon_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./draw-polygon/draw-polygon.component */ 8055);
/* harmony import */ var _modify_polygon_modify_polygon_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modify-polygon/modify-polygon.component */ 2646);
/* harmony import */ var _side_by_side_side_by_side_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./side-by-side/side-by-side.component */ 1947);
/* harmony import */ var _swipe_swipe_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./swipe/swipe.component */ 8994);
/* harmony import */ var _overlay_overlay_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./overlay/overlay.component */ 3263);
/* harmony import */ var _color_select_hover_color_select_hover_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./color-select-hover/color-select-hover.component */ 5633);
/* harmony import */ var _marker_marker_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./marker/marker.component */ 4622);
/* harmony import */ var _arcgis_image_arcgis_image_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./arcgis-image/arcgis-image.component */ 5526);
/* harmony import */ var _image_wms_image_wms_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./image-wms/image-wms.component */ 6399);
/* harmony import */ var _view_projection_update_view_projection_update_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./view-projection-update/view-projection-update.component */ 5503);
/* harmony import */ var _utfgrid_utfgrid_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./utfgrid/utfgrid.component */ 2999);
/* harmony import */ var _overview_overview_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./overview/overview.component */ 1290);
/* harmony import */ var _tile_json_tile_json_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./tile-json/tile-json.component */ 2093);
/* harmony import */ var _select_interaction_select_interaction_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./select-interaction/select-interaction.component */ 2617);
/* harmony import */ var _image_static_image_static_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./image-static/image-static.component */ 8305);
/* harmony import */ var _graticule_graticule_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./graticule/graticule.component */ 7846);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/core */ 1699);




























const routes = [{
  path: '',
  component: _examples_list_examples_list_component__WEBPACK_IMPORTED_MODULE_3__.ExamplesListComponent
}, {
  path: 'examples',
  component: _examples_item_examples_item_component__WEBPACK_IMPORTED_MODULE_4__.ExamplesItemComponent,
  children: [{
    path: 'basic',
    component: _basic_basic_component__WEBPACK_IMPORTED_MODULE_1__.BasicComponent
  }, {
    path: 'map-position',
    component: _map_position_map_position_component__WEBPACK_IMPORTED_MODULE_5__.MapPositionComponent
  }, {
    path: 'cursor-position',
    component: _cursor_position_cursor_position_component__WEBPACK_IMPORTED_MODULE_6__.CursorPositionComponent
  }, {
    path: 'display-geometry',
    component: _display_geometry_display_geometry_component__WEBPACK_IMPORTED_MODULE_7__.DisplayGeometryComponent
  }, {
    path: 'display-geojson-source',
    component: _display_geojson_source_display_geojson_source_component__WEBPACK_IMPORTED_MODULE_8__.DisplayGeojsonSourceComponent
  }, {
    path: 'draw-polygon',
    component: _draw_polygon_draw_polygon_component__WEBPACK_IMPORTED_MODULE_9__.DrawPolygonComponent
  }, {
    path: 'modify-polygon',
    component: _modify_polygon_modify_polygon_component__WEBPACK_IMPORTED_MODULE_10__.ModifyPolygonComponent
  }, {
    path: 'side-by-side',
    component: _side_by_side_side_by_side_component__WEBPACK_IMPORTED_MODULE_11__.SideBySideComponent
  }, {
    path: 'swipe',
    component: _swipe_swipe_component__WEBPACK_IMPORTED_MODULE_12__.SwipeComponent
  }, {
    path: 'overlay',
    component: _overlay_overlay_component__WEBPACK_IMPORTED_MODULE_13__.OverlayComponent
  }, {
    path: 'color-select-hover',
    component: _color_select_hover_color_select_hover_component__WEBPACK_IMPORTED_MODULE_14__.ColorSelectHoverComponent
  }, {
    path: 'marker',
    component: _marker_marker_component__WEBPACK_IMPORTED_MODULE_15__.MarkerComponent
  }, {
    path: 'cluster',
    component: _cluster_cluster_component__WEBPACK_IMPORTED_MODULE_0__.ClusterComponent
  }, {
    path: 'raster',
    component: _raster_raster_component__WEBPACK_IMPORTED_MODULE_2__.RasterComponent
  }, {
    path: 'arcgis-image',
    component: _arcgis_image_arcgis_image_component__WEBPACK_IMPORTED_MODULE_16__.ArcgisImageComponent
  }, {
    path: 'image-wms',
    component: _image_wms_image_wms_component__WEBPACK_IMPORTED_MODULE_17__.ImageWMSComponent
  }, {
    path: 'view-projection-update',
    component: _view_projection_update_view_projection_update_component__WEBPACK_IMPORTED_MODULE_18__.ViewProjectionUpdateComponent
  }, {
    path: 'overview',
    component: _overview_overview_component__WEBPACK_IMPORTED_MODULE_20__.OverviewComponent
  }, {
    path: 'utf-grid',
    component: _utfgrid_utfgrid_component__WEBPACK_IMPORTED_MODULE_19__.UTFGridComponent
  }, {
    path: 'image-static',
    component: _image_static_image_static_component__WEBPACK_IMPORTED_MODULE_23__.ImageStaticComponent
  }, {
    path: 'select-interaction',
    component: _select_interaction_select_interaction_component__WEBPACK_IMPORTED_MODULE_22__.SelectInteractionComponent
  }, {
    path: 'tile-json',
    component: _tile_json_tile_json_component__WEBPACK_IMPORTED_MODULE_21__.TileJsonComponent
  }, {
    path: 'graticule',
    component: _graticule_graticule_component__WEBPACK_IMPORTED_MODULE_24__.GraticuleComponent
  }]
}, {
  path: '**',
  redirectTo: ''
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_26__.RouterModule.forRoot(routes, {}), _angular_router__WEBPACK_IMPORTED_MODULE_26__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_26__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_26__.RouterModule]
  });
})();

/***/ }),

/***/ 5526:
/*!********************************************************!*\
  !*** ./src/app/arcgis-image/arcgis-image.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArcgisImageComponent: () => (/* binding */ ArcgisImageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var ngx_ol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-ol */ 5587);


class ArcgisImageComponent {
  constructor() {
    this.zoom = 4;
    this.opacity = 1.0;
  }
  imageLoadStart() {
    console.log('image starts loading at: ' + new Date());
  }
  imageLoadEnd() {
    console.log('image ends loading at: ' + new Date());
  }
  static #_ = this.ɵfac = function ArcgisImageComponent_Factory(t) {
    return new (t || ArcgisImageComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ArcgisImageComponent,
    selectors: [["app-root"]],
    decls: 10,
    vars: 4,
    consts: [[3, "zoom"], [3, "x", "y"], ["projection", "EPSG:3857", "url", "https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Specialty/ESRI_StateCityHighway_USA/MapServer", 3, "ratio", "imageLoadStart", "imageLoadEnd"]],
    template: function ArcgisImageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-map");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "aol-interaction-default")(2, "aol-control-defaults")(3, "aol-control-fullscreen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "aol-view", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "aol-coordinate", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "aol-layer-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "aol-source-osm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "aol-layer-image")(9, "aol-source-imagearcgisrest", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("imageLoadStart", function ArcgisImageComponent_Template_aol_source_imagearcgisrest_imageLoadStart_9_listener() {
          return ctx.imageLoadStart();
        })("imageLoadEnd", function ArcgisImageComponent_Template_aol_source_imagearcgisrest_imageLoadEnd_9_listener() {
          return ctx.imageLoadEnd();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zoom", ctx.zoom);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", -10997148)("y", 4569099);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", 1);
      }
    },
    dependencies: [ngx_ol__WEBPACK_IMPORTED_MODULE_1__.MapComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.ViewComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.LayerImageComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.LayerTileComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.SourceOsmComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.SourceImageArcGISRestComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.CoordinateComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.DefaultControlComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.ControlFullScreenComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.DefaultInteractionComponent],
    styles: ["[_nghost-%COMP%] {\n        height: 100%;\n        display: flex;\n      }\n\n      aol-map[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100%;\n      }\n    \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXJjZ2lzLWltYWdlL2FyY2dpcy1pbWFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0UsWUFBWTtRQUNaLGFBQWE7TUFDZjs7TUFFQTtRQUNFLFdBQVc7UUFDWCxZQUFZO01BQ2QiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIDpob3N0IHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgfVxuXG4gICAgICBhb2wtbWFwIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIH1cbiAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 1865:
/*!******************************************!*\
  !*** ./src/app/basic/basic.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BasicComponent: () => (/* binding */ BasicComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var ngx_ol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-ol */ 5587);


const _c0 = () => [0.5, 1];
class BasicComponent {
  constructor() {
    this.zoom = 15;
    this.opacity = 1.0;
    this.width = 5;
    this.lon = 5;
    this.lat = 45;
  }
  increaseZoom() {
    this.zoom = Math.min(this.zoom + 1, 18);
    console.log('zoom: ', this.zoom);
  }
  decreaseZoom() {
    this.zoom = Math.max(this.zoom - 1, 1);
    console.log('zoom: ', this.zoom);
  }
  increaseLat() {
    this.lat = Math.max(-90, Math.min(90, this.lat + 1));
    console.log('lat: ', this.lat);
  }
  decreaseLat() {
    this.lat = Math.max(-90, Math.min(90, this.lat - 1));
    console.log('lat: ', this.lat);
  }
  increaseLon() {
    this.lon = Math.max(-180, Math.min(180, this.lat + 1));
    console.log('lon: ', this.lon);
  }
  decreaseLon() {
    this.lon = Math.max(-180, Math.min(180, this.lat - 1));
    console.log('lon: ', this.lon);
  }
  increaseOpacity() {
    this.opacity = Math.min(this.opacity + 0.1, 1);
    console.log('opacity: ', this.opacity);
  }
  decreaseOpacity() {
    this.opacity = Math.max(this.opacity - 0.1, 0);
    console.log('opacity: ', this.opacity);
  }
  changeResolution(evt) {
    console.log('Resolution changed:', evt);
  }
  changeCenter(evt) {
    console.log('Center changed:', evt);
  }
  changeZoom(evt) {
    console.log('Zoom changed:', evt);
  }
  static #_ = this.ɵfac = function BasicComponent_Factory(t) {
    return new (t || BasicComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: BasicComponent,
    selectors: [["app-root"]],
    decls: 48,
    vars: 25,
    consts: [[3, "width", "height"], [3, "zoom", "changeResolution", "changeZoom", "changeCenter"], [3, "x", "y", "srid"], [3, "opacity"], [3, "radius"], [3, "color", "width"], [3, "color"], [3, "src", "anchor", "anchorXUnits", "anchorYUnits", "scale", "anchorOrigin"], [1, "controls"], [3, "click"]],
    template: function BasicComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-map", 0)(1, "aol-view", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changeResolution", function BasicComponent_Template_aol_view_changeResolution_1_listener($event) {
          return ctx.changeResolution($event);
        })("changeZoom", function BasicComponent_Template_aol_view_changeZoom_1_listener($event) {
          return ctx.changeZoom($event);
        })("changeCenter", function BasicComponent_Template_aol_view_changeCenter_1_listener($event) {
          return ctx.changeCenter($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "aol-coordinate", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "aol-layer-tile", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "aol-source-osm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "aol-layer-vector", 3)(6, "aol-source-vector")(7, "aol-feature")(8, "aol-geometry-point");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "aol-coordinate", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "aol-style")(11, "aol-style-circle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "aol-style-stroke", 5)(13, "aol-style-fill", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "aol-feature")(15, "aol-geometry-point");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "aol-coordinate", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "aol-style");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "aol-style-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8)(20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "opacity:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BasicComponent_Template_button_click_22_listener() {
          return ctx.increaseOpacity();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BasicComponent_Template_button_click_24_listener() {
          return ctx.decreaseOpacity();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "zoom:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BasicComponent_Template_button_click_29_listener() {
          return ctx.increaseZoom();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BasicComponent_Template_button_click_31_listener() {
          return ctx.decreaseZoom();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "latitude:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BasicComponent_Template_button_click_36_listener() {
          return ctx.increaseLat();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BasicComponent_Template_button_click_38_listener() {
          return ctx.decreaseLat();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "longitude:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BasicComponent_Template_button_click_43_listener() {
          return ctx.increaseLon();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BasicComponent_Template_button_click_45_listener() {
          return ctx.decreaseLon();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", "100%")("height", "100%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zoom", ctx.zoom);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", 5)("y", 45)("srid", "EPSG:4326");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opacity", ctx.opacity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opacity", ctx.opacity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", 5)("y", 45)("srid", "EPSG:4326");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("radius", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "black")("width", ctx.width);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "green");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", 5.1)("y", 45.1)("srid", "EPSG:4326");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/marker.png")("anchor", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c0))("anchorXUnits", "fraction")("anchorYUnits", "fraction")("scale", 0.1)("anchorOrigin", "top-left");
      }
    },
    dependencies: [ngx_ol__WEBPACK_IMPORTED_MODULE_1__.MapComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.ViewComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.LayerTileComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.LayerVectorComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.SourceOsmComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.SourceVectorComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.FeatureComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.GeometryPointComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.CoordinateComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.StyleComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.StyleCircleComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.StyleFillComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.StyleIconComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.StyleStrokeComponent],
    styles: ["[_nghost-%COMP%] {\n        height: 100%;\n        display: flex;\n      }\n\n      aol-map[_ngcontent-%COMP%] {\n        width: 70%;\n      }\n\n      .controls[_ngcontent-%COMP%] {\n        width: 28%;\n        padding: 1rem;\n      }\n    \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYmFzaWMvYmFzaWMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDTTtRQUNFLFlBQVk7UUFDWixhQUFhO01BQ2Y7O01BRUE7UUFDRSxVQUFVO01BQ1o7O01BRUE7UUFDRSxVQUFVO1FBQ1YsYUFBYTtNQUNmIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIH1cblxuICAgICAgYW9sLW1hcCB7XG4gICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICB9XG5cbiAgICAgIC5jb250cm9scyB7XG4gICAgICAgIHdpZHRoOiAyOCU7XG4gICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICB9XG4gICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9505:
/*!**********************************************!*\
  !*** ./src/app/cluster/cluster.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClusterComponent: () => (/* binding */ ClusterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var ngx_ol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-ol */ 5587);




function ClusterComponent_aol_feature_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-feature")(1, "aol-geometry-point");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "aol-coordinate", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", p_r1.x)("y", p_r1.y)("srid", "EPSG:4326");
  }
}
const _c0 = () => [1.47, 43.545];
const _c1 = () => [1.51, 43.545];
const _c2 = () => [1.51, 43.565];
const _c3 = () => [1.47, 43.565];
const _c4 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
const _c5 = a0 => [a0];
const _c6 = () => [255, 0, 0, 0.1];
class ClusterComponent {
  constructor() {
    this.distance = 60;
    this.points = [];
  }
  ngOnInit() {
    // Generate random points
    const nbPoints = 2000;
    for (let i = 0; i < nbPoints; ++i) {
      this.points.push({
        x: this.getRandomInRange(1.47, 1.51, 4),
        y: this.getRandomInRange(43.545, 43.565, 4)
      });
    }
  }
  getRandomInRange(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
  }
  static #_ = this.ɵfac = function ClusterComponent_Factory(t) {
    return new (t || ClusterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ClusterComponent,
    selectors: [["app-cluster"]],
    decls: 30,
    vars: 31,
    consts: [[3, "width", "height"], [3, "zoom"], [3, "x", "y", "srid"], [3, "opacity"], [3, "distance"], [4, "ngFor", "ngForOf"], [3, "radius"], [3, "color"], [3, "coordinates", "srid"], [3, "color", "width"], [1, "control"], ["type", "range", "min", "0", "max", "255", 3, "ngModel", "ngModelChange"]],
    template: function ClusterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-map", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "aol-interaction-default")(2, "aol-control-defaults")(3, "aol-control-fullscreen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "aol-view", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "aol-coordinate", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "aol-layer-tile", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "aol-source-osm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "aol-layer-vector")(9, "aol-source-cluster", 4)(10, "aol-source-vector");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ClusterComponent_aol_feature_11_Template, 3, 3, "aol-feature", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "aol-style")(13, "aol-style-circle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "aol-style-stroke", 7)(15, "aol-style-fill", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "aol-layer-vector")(17, "aol-source-vector")(18, "aol-feature")(19, "aol-geometry-polygon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "aol-collection-coordinates", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "aol-style");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "aol-style-stroke", 9)(23, "aol-style-fill", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10)(25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Distance : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ClusterComponent_Template_input_ngModelChange_27_listener($event) {
          return ctx.distance = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", "100%")("height", "100%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zoom", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", 1.4886)("y", 43.5554)("srid", "EPSG:4326");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opacity", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("distance", ctx.distance);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.points);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("radius", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "#fff");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "#3399CC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("coordinates", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](23, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c3))))("srid", "EPSG:4326");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "red")("width", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.distance);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" (", ctx.distance, ")");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RangeValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, ngx_ol__WEBPACK_IMPORTED_MODULE_3__.MapComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_3__.ViewComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_3__.LayerTileComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_3__.LayerVectorComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_3__.SourceOsmComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_3__.SourceClusterComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_3__.SourceVectorComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_3__.FeatureComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_3__.GeometryPointComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_3__.GeometryPolygonComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_3__.CoordinateComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_3__.CollectionCoordinatesComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_3__.StyleComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_3__.StyleCircleComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_3__.StyleFillComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_3__.StyleStrokeComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_3__.DefaultControlComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_3__.ControlFullScreenComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_3__.DefaultInteractionComponent],
    styles: ["[_nghost-%COMP%] {\n        height: 100%;\n        display: flex;\n        flex-direction: column;\n      }\n\n      aol-map[_ngcontent-%COMP%] {\n        flex: 1 1 auto;\n      }\n\n      .control[_ngcontent-%COMP%] {\n        flex: 0 0 auto;\n        display: flex;\n        align-items: center;\n        justify-content: flex-start;\n        margin: 20px;\n      }\n    \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY2x1c3Rlci9jbHVzdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxZQUFZO1FBQ1osYUFBYTtRQUNiLHNCQUFzQjtNQUN4Qjs7TUFFQTtRQUNFLGNBQWM7TUFDaEI7O01BRUE7UUFDRSxjQUFjO1FBQ2QsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQiwyQkFBMkI7UUFDM0IsWUFBWTtNQUNkIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIH1cblxuICAgICAgYW9sLW1hcCB7XG4gICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgfVxuXG4gICAgICAuY29udHJvbCB7XG4gICAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIG1hcmdpbjogMjBweDtcbiAgICAgIH1cbiAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 5633:
/*!********************************************************************!*\
  !*** ./src/app/color-select-hover/color-select-hover.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ColorSelectHoverComponent: () => (/* binding */ ColorSelectHoverComponent)
/* harmony export */ });
/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/style */ 1832);
/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/style */ 2089);
/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/style */ 9527);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var ngx_ol__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-ol */ 5587);




const _c0 = ["map"];
const _c1 = ["aoiLayerVector"];
function ColorSelectHoverComponent_aol_layer_vector_11_aol_style_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-style");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "aol-style-stroke", 12)(2, "aol-style-fill", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "white");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "rgba(90, 17, 26, 0.3)");
  }
}
function ColorSelectHoverComponent_aol_layer_vector_11_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-style");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "aol-style-stroke", 12)(2, "aol-style-fill", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "rgba(90, 17, 26)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "rgba(90, 17, 26, 0.5)");
  }
}
function ColorSelectHoverComponent_aol_layer_vector_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-layer-vector", null, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ColorSelectHoverComponent_aol_layer_vector_11_aol_style_2_Template, 3, 2, "aol-style", 8)(3, ColorSelectHoverComponent_aol_layer_vector_11_ng_template_3_Template, 3, 2, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "aol-source-vector")(6, "aol-feature", 10)(7, "aol-geometry-polygon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "aol-collection-coordinates", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const f_r3 = ctx.$implicit;
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", f_r3.id === ctx_r2.hoveredFeatureId)("ngIfElse", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", f_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("coordinates", f_r3.geometry.coordinates)("srid", "EPSG:4326");
  }
}
class ColorSelectHoverComponent {
  constructor() {
    this.features = {
      type: 'FeatureCollection',
      features: [{
        id: 1,
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'Polygon',
          coordinates: [[[-1.4501953125, 48.40003249610685], [2.13134765625, 48.40003249610685], [2.13134765625, 50.13466432216694], [-1.4501953125, 50.13466432216694], [-1.4501953125, 48.40003249610685]]]
        }
      }, {
        id: 2,
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'Polygon',
          coordinates: [[[5.3173828125, 47.368594345213374], [9.29443359375, 47.368594345213374], [9.29443359375, 49.36806633482156], [5.3173828125, 49.36806633482156], [5.3173828125, 47.368594345213374]]]
        }
      }, {
        id: 3,
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'Polygon',
          coordinates: [[[-3.3837890625, 43.61221676817573], [1.51611328125, 43.61221676817573], [1.51611328125, 46.694667307773116], [-3.3837890625, 46.694667307773116], [-3.3837890625, 43.61221676817573]]]
        }
      }, {
        id: 4,
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'Polygon',
          coordinates: [[[4.50439453125, 42.342305278572816], [9.16259765625, 42.342305278572816], [9.16259765625, 45.66012730272194], [4.50439453125, 45.66012730272194], [4.50439453125, 42.342305278572816]]]
        }
      }]
    };
    this.styleInteratiselected = new ol_style__WEBPACK_IMPORTED_MODULE_1__["default"]({
      fill: new ol_style__WEBPACK_IMPORTED_MODULE_2__["default"]({
        color: 'rgba(0, 153, 255, 0.1)'
      }),
      stroke: new ol_style__WEBPACK_IMPORTED_MODULE_3__["default"]({
        color: 'rgba(0, 153, 255)',
        width: 3
      })
    });
  }
  ngOnInit() {}
  changeFeatureHovered(event) {
    const hit = this.map.instance.forEachFeatureAtPixel(event.pixel, f => f, {
      layerFilter: inLayer(...this.aoiLayerVector.toArray()),
      hitTolerance: 10
    });
    if (!hit && this.hoveredFeatureId) {
      this.hoveredFeatureId = null;
    }
    if (hit && hit.getId() !== this.hoveredFeatureId) {
      this.hoveredFeatureId = hit.getId();
    }
  }
  static #_ = this.ɵfac = function ColorSelectHoverComponent_Factory(t) {
    return new (t || ColorSelectHoverComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ColorSelectHoverComponent,
    selectors: [["app-color-select-hover"]],
    viewQuery: function ColorSelectHoverComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.map = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.aoiLayerVector = _t);
      }
    },
    decls: 12,
    vars: 8,
    consts: [["width", "100%", "height", "100%", 3, "pointerMove"], ["map", ""], ["select", ""], [3, "zoom"], [3, "x", "y", "srid"], [3, "opacity"], [4, "ngFor", "ngForOf"], ["aoiLayerVector", ""], [4, "ngIf", "ngIfElse"], ["notHovered", ""], [3, "id"], [3, "coordinates", "srid"], ["width", "3", 3, "color"], [3, "color"]],
    template: function ColorSelectHoverComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-map", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pointerMove", function ColorSelectHoverComponent_Template_aol_map_pointerMove_0_listener($event) {
          return ctx.changeFeatureHovered($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "aol-interaction-default")(3, "aol-control-defaults")(4, "aol-interaction-select", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "aol-view", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "aol-coordinate", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "aol-layer-tile", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "aol-source-osm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "aol-layer-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ColorSelectHoverComponent_aol_layer_vector_11_Template, 9, 5, "aol-layer-vector", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.styleInteratiselected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zoom", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", 1.4886)("y", 43.5554)("srid", "EPSG:4326");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opacity", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.features.features);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, ngx_ol__WEBPACK_IMPORTED_MODULE_5__.MapComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_5__.ViewComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_5__.LayerGroupComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_5__.LayerTileComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_5__.LayerVectorComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_5__.SourceOsmComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_5__.SourceVectorComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_5__.FeatureComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_5__.GeometryPolygonComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_5__.CoordinateComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_5__.CollectionCoordinatesComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_5__.StyleComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_5__.StyleFillComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_5__.StyleStrokeComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_5__.DefaultControlComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_5__.DefaultInteractionComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_5__.SelectInteractionComponent],
    encapsulation: 2
  });
}
function inLayer(...layers) {
  return l => layers.some(layer => layer.instance === l);
}

/***/ }),

/***/ 6185:
/*!**************************************************************!*\
  !*** ./src/app/cursor-position/cursor-position.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CursorPositionComponent: () => (/* binding */ CursorPositionComponent)
/* harmony export */ });
/* harmony import */ var ol_proj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ol/proj */ 6395);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var ngx_ol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-ol */ 5587);



class CursorPositionComponent {
  constructor() {
    this.lon = 0;
    this.lat = 0;
  }
  ngOnInit() {}
  dispatchCursor(event) {
    const coordinates = event.coordinate;
    this.lon = (0,ol_proj__WEBPACK_IMPORTED_MODULE_0__.transform)(coordinates, 'EPSG:3857', 'EPSG:4326')[0];
    this.lat = (0,ol_proj__WEBPACK_IMPORTED_MODULE_0__.transform)(coordinates, 'EPSG:3857', 'EPSG:4326')[1];
  }
  latToString(lat) {
    return toSexagesimal(lat, '', '-');
  }
  lonToString(lon) {
    return toSexagesimal(lon, '', '-');
  }
  static #_ = this.ɵfac = function CursorPositionComponent_Factory(t) {
    return new (t || CursorPositionComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: CursorPositionComponent,
    selectors: [["app-cursor-position"]],
    decls: 16,
    vars: 7,
    consts: [["width", "100%", "height", "100%", 3, "pointerMove"], ["map", ""], [3, "zoom"], [3, "x", "y", "srid"], [3, "opacity"], [1, "info"], [1, "cursor-coordinates"]],
    template: function CursorPositionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "aol-map", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pointerMove", function CursorPositionComponent_Template_aol_map_pointerMove_0_listener($event) {
          return ctx.dispatchCursor($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "aol-interaction-default")(3, "aol-control-defaults");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "aol-view", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "aol-coordinate", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "aol-layer-tile", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "aol-source-osm");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5)(9, "div", 6)(10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Cursor coordinates");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("zoom", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("x", 1.4886)("y", 43.5554)("srid", "EPSG:4326");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("opacity", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Longitude: ", ctx.lonToString(ctx.lon), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Latitude: ", ctx.latToString(ctx.lat), "");
      }
    },
    dependencies: [ngx_ol__WEBPACK_IMPORTED_MODULE_2__.MapComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.ViewComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.LayerTileComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.SourceOsmComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.CoordinateComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.DefaultControlComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.DefaultInteractionComponent],
    styles: ["[_nghost-%COMP%] {\n        height: 100%;\n        display: flex;\n      }\n\n      aol-map[_ngcontent-%COMP%] {\n        width: 70%;\n      }\n\n      .info[_ngcontent-%COMP%] {\n        width: 28%;\n        padding: 1rem;\n      }\n\n      .cursor-coordinates[_ngcontent-%COMP%] {\n        display: flex;\n        flex-direction: column;\n      }\n    \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY3Vyc29yLXBvc2l0aW9uL2N1cnNvci1wb3NpdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0UsWUFBWTtRQUNaLGFBQWE7TUFDZjs7TUFFQTtRQUNFLFVBQVU7TUFDWjs7TUFFQTtRQUNFLFVBQVU7UUFDVixhQUFhO01BQ2Y7O01BRUE7UUFDRSxhQUFhO1FBQ2Isc0JBQXNCO01BQ3hCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIH1cblxuICAgICAgYW9sLW1hcCB7XG4gICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICB9XG5cbiAgICAgIC5pbmZvIHtcbiAgICAgICAgd2lkdGg6IDI4JTtcbiAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgIH1cblxuICAgICAgLmN1cnNvci1jb29yZGluYXRlcyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICB9XG4gICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}
function toSexagesimal(value, positiveSuffix, negativeSuffix) {
  const modValue = (value + 180) % 360 - 180;
  return (modValue > 0 ? positiveSuffix : negativeSuffix) + Math.abs(modValue).toFixed(6);
}

/***/ }),

/***/ 5298:
/*!****************************************************************************!*\
  !*** ./src/app/display-geojson-source/display-geojson-source.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DisplayGeojsonSourceComponent: () => (/* binding */ DisplayGeojsonSourceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var ngx_ol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-ol */ 5587);


class DisplayGeojsonSourceComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function DisplayGeojsonSourceComponent_Factory(t) {
    return new (t || DisplayGeojsonSourceComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: DisplayGeojsonSourceComponent,
    selectors: [["app-display-geojson-source"]],
    decls: 13,
    vars: 6,
    consts: [["width", "100%", "height", "100%"], ["map", ""], [3, "zoom"], [3, "x", "y", "srid"], [3, "opacity"], [3, "url"]],
    template: function DisplayGeojsonSourceComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-map", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "aol-interaction-default")(3, "aol-control-defaults");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "aol-view", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "aol-coordinate", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "aol-layer-tile", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "aol-source-osm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "aol-layer-group")(9, "aol-layer-vector")(10, "aol-source-vector")(11, "aol-feature");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "aol-source-geojson", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zoom", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", 1.4886)("y", 43.5554)("srid", "EPSG:4326");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opacity", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("url", "https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json");
      }
    },
    dependencies: [ngx_ol__WEBPACK_IMPORTED_MODULE_1__.MapComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.ViewComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.LayerGroupComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.LayerTileComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.LayerVectorComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.SourceOsmComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.SourceVectorComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.SourceGeoJSONComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.FeatureComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.CoordinateComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.DefaultControlComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.DefaultInteractionComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 4774:
/*!****************************************************************!*\
  !*** ./src/app/display-geometry/display-geometry.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DisplayGeometryComponent: () => (/* binding */ DisplayGeometryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var ngx_ol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-ol */ 5587);



function DisplayGeometryComponent_aol_layer_vector_9_aol_source_vector_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-source-vector")(1, "aol-style");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "aol-style-stroke", 8)(3, "aol-style-fill", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "aol-feature")(5, "aol-geometry-polygon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "aol-collection-coordinates", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const feature_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "rgba(90, 17, 26)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "rgba(90, 17, 26, 0.5)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("coordinates", feature_r2.geometry.coordinates)("srid", "EPSG:4326");
  }
}
function DisplayGeometryComponent_aol_layer_vector_9_aol_source_vector_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-source-vector")(1, "aol-feature")(2, "aol-geometry-point");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "aol-coordinate", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "aol-style")(5, "aol-style-circle", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "aol-style-stroke", 12)(7, "aol-style-fill", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const feature_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", feature_r2.geometry.coordinates[0])("y", feature_r2.geometry.coordinates[1])("srid", "EPSG:4326");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("radius", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "black")("width", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "green");
  }
}
function DisplayGeometryComponent_aol_layer_vector_9_aol_source_vector_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-source-vector")(1, "aol-feature")(2, "aol-geometry-linestring");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "aol-collection-coordinates", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const feature_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("coordinates", feature_r2.geometry.coordinates)("srid", "EPSG:4326");
  }
}
function DisplayGeometryComponent_aol_layer_vector_9_aol_source_vector_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-source-vector")(1, "aol-feature")(2, "aol-geometry-circle", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "aol-coordinate", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "aol-style");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "aol-style-stroke", 14)(6, "aol-style-fill", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const feature_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("radius", feature_r2.geometry.radius);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", feature_r2.geometry.coordinates[0])("y", feature_r2.geometry.coordinates[1]);
  }
}
function DisplayGeometryComponent_aol_layer_vector_9_aol_source_vector_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-source-vector")(1, "aol-feature")(2, "aol-geometry-multipoint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "aol-collection-coordinates", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "aol-style")(5, "aol-style-circle", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "aol-style-stroke", 12)(7, "aol-style-fill", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const feature_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("coordinates", feature_r2.geometry.coordinates)("srid", "EPSG:4326");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("radius", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "black")("width", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "green");
  }
}
function DisplayGeometryComponent_aol_layer_vector_9_aol_source_vector_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-source-vector")(1, "aol-feature")(2, "aol-geometry-multilinestring");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "aol-collection-coordinates", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const feature_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("coordinates", feature_r2.geometry.coordinates)("srid", "EPSG:4326");
  }
}
function DisplayGeometryComponent_aol_layer_vector_9_aol_source_vector_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-source-vector")(1, "aol-style");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "aol-style-stroke", 16)(3, "aol-style-fill", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "aol-feature")(5, "aol-geometry-multipolygon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "aol-collection-coordinates", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const feature_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "rgba(81, 15.3, 23.4)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "rgba(81, 15.3, 23.4, 0.4)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("coordinates", feature_r2.geometry.coordinates)("srid", "EPSG:4326");
  }
}
function DisplayGeometryComponent_aol_layer_vector_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-layer-vector", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DisplayGeometryComponent_aol_layer_vector_9_aol_source_vector_1_Template, 7, 4, "aol-source-vector", 7)(2, DisplayGeometryComponent_aol_layer_vector_9_aol_source_vector_2_Template, 8, 7, "aol-source-vector", 7)(3, DisplayGeometryComponent_aol_layer_vector_9_aol_source_vector_3_Template, 4, 2, "aol-source-vector", 7)(4, DisplayGeometryComponent_aol_layer_vector_9_aol_source_vector_4_Template, 7, 3, "aol-source-vector", 7)(5, DisplayGeometryComponent_aol_layer_vector_9_aol_source_vector_5_Template, 8, 6, "aol-source-vector", 7)(6, DisplayGeometryComponent_aol_layer_vector_9_aol_source_vector_6_Template, 4, 2, "aol-source-vector", 7)(7, DisplayGeometryComponent_aol_layer_vector_9_aol_source_vector_7_Template, 7, 4, "aol-source-vector", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const feature_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", feature_r2.geometry.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "Polygon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "LineString");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "Circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "MultiPoint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "MultiLineString");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "MultiPolygon");
  }
}
class DisplayGeometryComponent {
  constructor() {
    this.features = [{
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Polygon',
        coordinates: [[[-1.131591796875, 47.03269459852135], [0.98876953125, 47.03269459852135], [0.98876953125, 48.356249029540734], [-1.131591796875, 48.356249029540734], [-1.131591796875, 47.03269459852135]]]
      }
    }, {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Point',
        coordinates: [2.8125, 49.61782831211117]
      }
    }, {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'LineString',
        coordinates: [[1.856689453125, 49.102645497788814], [5.009765625, 48.95858066440977], [6.1083984375, 47.96785877999251], [6.85546875, 48.71271258145237], [5.064697265625, 49.62494564650146]]
      }
    }, {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Circle',
        coordinates: [3.1060516834259033, 45.78940226200967],
        radius: 50000
      }
    }, {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'MultiPoint',
        coordinates: [[0, 45], [0.5, 45], [1, 45]]
      }
    }, {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'MultiLineString',
        coordinates: [[[0, 44], [1, 44], [2, 44.5]], [[0.5, 43.8], [1.5, 43.8], [2.5, 44.3]], [[1, 43.6], [2, 43.6], [3, 44.1]]]
      }
    }, {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'MultiPolygon',
        coordinates: [[[[4, 45], [4.5, 44.5], [4, 44], [4, 45]]], [[[5, 45], [5.5, 44.5], [5, 44], [5, 45]]], [[[6, 45], [6.5, 44.5], [6, 44], [6, 45]]]]
      }
    }];
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function DisplayGeometryComponent_Factory(t) {
    return new (t || DisplayGeometryComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: DisplayGeometryComponent,
    selectors: [["app-display-geometry"]],
    decls: 10,
    vars: 6,
    consts: [["width", "100%", "height", "100%"], ["map", ""], [3, "zoom"], [3, "x", "y", "srid"], [3, "opacity"], [3, "ngSwitch", 4, "ngFor", "ngForOf"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["width", "3", 3, "color"], [3, "color"], [3, "coordinates", "srid"], [3, "radius"], [3, "color", "width"], ["srid", "EPSG:4326", 3, "x", "y"], ["color", "blue", "width", "2"], ["color", "rgba(255, 255, 0, 0.5)"], ["width", "2", 3, "color"]],
    template: function DisplayGeometryComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-map", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "aol-interaction-default")(3, "aol-control-defaults");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "aol-view", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "aol-coordinate", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "aol-layer-tile", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "aol-source-osm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "aol-layer-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DisplayGeometryComponent_aol_layer_vector_9_Template, 8, 8, "aol-layer-vector", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zoom", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", 1)("y", 46.292896)("srid", "EPSG:4326");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opacity", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.features);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgSwitchCase, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.MapComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.ViewComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.LayerGroupComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.LayerTileComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.LayerVectorComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.SourceOsmComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.SourceVectorComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.FeatureComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.GeometryLinestringComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.GeometryMultiLinestringComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.GeometryMultiPointComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.GeometryMultiPolygonComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.GeometryPointComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.GeometryPolygonComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.GeometryCircleComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.CoordinateComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.CollectionCoordinatesComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.StyleComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.StyleCircleComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.StyleFillComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.StyleStrokeComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.DefaultControlComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.DefaultInteractionComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 8055:
/*!********************************************************!*\
  !*** ./src/app/draw-polygon/draw-polygon.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DrawPolygonComponent: () => (/* binding */ DrawPolygonComponent)
/* harmony export */ });
/* harmony import */ var ol_interaction_Draw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/interaction/Draw */ 8934);
/* harmony import */ var ol_proj_Projection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/proj/Projection */ 4714);
/* harmony import */ var ol_geom_Polygon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/geom/Polygon */ 6646);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var ngx_ol__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-ol */ 5587);






function DrawPolygonComponent_aol_interaction_draw_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-interaction-draw", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drawEnd", function DrawPolygonComponent_aol_interaction_draw_3_Template_aol_interaction_draw_drawEnd_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.endDraw($event.feature));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("geometryFunction", ctx_r1.drawBoxGeometryFunction);
  }
}
function DrawPolygonComponent_aol_layer_vector_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-layer-vector")(1, "aol-source-vector")(2, "aol-feature")(3, "aol-geometry-polygon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "aol-collection-coordinates", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("coordinates", ctx_r2.feature.geometry.coordinates)("srid", "EPSG:4326");
  }
}
class DrawPolygonComponent {
  constructor() {
    this.isDrawing = false;
    this.drawBoxGeometryFunction = (0,ol_interaction_Draw__WEBPACK_IMPORTED_MODULE_1__.createBox)();
  }
  ngOnInit() {}
  drawMode() {
    this.isDrawing = !this.isDrawing;
  }
  endDraw(feature) {
    const olGeomPolygon = (0,ol_geom_Polygon__WEBPACK_IMPORTED_MODULE_2__.fromExtent)(feature.getGeometry().getExtent());
    olGeomPolygon.transform(new ol_proj_Projection__WEBPACK_IMPORTED_MODULE_3__["default"]({
      code: 'EPSG:3857'
    }), new ol_proj_Projection__WEBPACK_IMPORTED_MODULE_3__["default"]({
      code: 'EPSG:4326'
    }));
    this.feature = {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Polygon',
        coordinates: [olGeomPolygon.getCoordinates()[0]]
      }
    };
  }
  static #_ = this.ɵfac = function DrawPolygonComponent_Factory(t) {
    return new (t || DrawPolygonComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: DrawPolygonComponent,
    selectors: [["app-draw-polygon"]],
    decls: 19,
    vars: 11,
    consts: [["width", "100%", "height", "100%"], ["map", ""], ["type", "Circle", 3, "geometryFunction", "drawEnd", 4, "ngIf"], [3, "zoom"], [3, "x", "y", "srid"], [3, "opacity"], [4, "ngIf"], [1, "info"], [1, "draw-section"], [3, "click"], ["type", "Circle", 3, "geometryFunction", "drawEnd"], [3, "coordinates", "srid"]],
    template: function DrawPolygonComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-map", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "aol-interaction-default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DrawPolygonComponent_aol_interaction_draw_3_Template, 1, 1, "aol-interaction-draw", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "aol-view", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "aol-coordinate", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "aol-layer-tile", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "aol-source-osm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DrawPolygonComponent_aol_layer_vector_8_Template, 5, 2, "aol-layer-vector", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7)(10, "div", 8)(11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DrawPolygonComponent_Template_button_click_11_listener() {
          return ctx.drawMode();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Result");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "code")(16, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDrawing);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zoom", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", 1.4886)("y", 43.5554)("srid", "EPSG:4326");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opacity", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.feature);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.isDrawing ? "End draw" : "Start draw");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 9, ctx.feature));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, ngx_ol__WEBPACK_IMPORTED_MODULE_5__.MapComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_5__.ViewComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_5__.LayerTileComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_5__.LayerVectorComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_5__.SourceOsmComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_5__.SourceVectorComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_5__.FeatureComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_5__.GeometryPolygonComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_5__.CoordinateComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_5__.CollectionCoordinatesComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_5__.DefaultInteractionComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_5__.DrawInteractionComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.JsonPipe],
    styles: ["[_nghost-%COMP%] {\n        height: 100%;\n        display: flex;\n      }\n\n      aol-map[_ngcontent-%COMP%] {\n        width: 70%;\n      }\n\n      .info[_ngcontent-%COMP%] {\n        width: 28%;\n        padding: 1rem;\n      }\n    \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZHJhdy1wb2x5Z29uL2RyYXctcG9seWdvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0UsWUFBWTtRQUNaLGFBQWE7TUFDZjs7TUFFQTtRQUNFLFVBQVU7TUFDWjs7TUFFQTtRQUNFLFVBQVU7UUFDVixhQUFhO01BQ2YiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIDpob3N0IHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgfVxuXG4gICAgICBhb2wtbWFwIHtcbiAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgIH1cblxuICAgICAgLmluZm8ge1xuICAgICAgICB3aWR0aDogMjglO1xuICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgfVxuICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 8544:
/*!*********************************!*\
  !*** ./src/app/example-list.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   examplesList: () => (/* binding */ examplesList)
/* harmony export */ });
const examplesList = [{
  title: 'Basic',
  description: 'Basic example. Demonstrates zoom and opacity.',
  routerLink: 'basic'
}, {
  title: 'Map position',
  description: 'Map longitude, latitude and zoom.',
  routerLink: 'map-position'
}, {
  title: 'Cursor position',
  description: 'Example of a mouse position control, outside the map.',
  routerLink: 'cursor-position',
  openLayersLink: 'https://openlayers.org/en/latest/examples/mouse-position.html'
}, {
  title: 'Display geometry',
  description: 'Example of geojson features : point, polygon, linestring, circle, multi-point, multi-linestring, multi-polygon.',
  routerLink: 'display-geometry',
  openLayersLink: 'https://openlayers.org/en/latest/examples/geojson.html'
}, {
  title: 'Display geometry from a geojson file',
  description: 'Example of using aol-source-geojson',
  routerLink: 'display-geojson-source',
  openLayersLink: 'https://openlayers.org/en/latest/examples/vector-layer.html'
}, {
  title: 'Draw polygon',
  description: 'Example of using aol-interaction-draw',
  routerLink: 'draw-polygon',
  openLayersLink: 'https://openlayers.org/en/latest/examples/draw-features.html'
}, {
  title: 'Modify polygon',
  description: 'Example of using aol-interaction-modify',
  routerLink: 'modify-polygon',
  openLayersLink: 'https://openlayers.org/en/latest/examples/modify-features.html'
}, {
  title: 'Side by side',
  description: 'Compare 2 maps side by side',
  routerLink: 'side-by-side'
}, {
  title: 'Swipe',
  description: 'Compare 2 layers tile with swipe',
  routerLink: 'swipe',
  openLayersLink: 'https://openlayers.org/en/latest/examples/layer-swipe.html'
}, {
  title: 'Overlay',
  description: 'Example of using aol-overlay',
  routerLink: 'overlay',
  openLayersLink: 'https://openlayers.org/en/latest/examples/overlay.html'
}, {
  title: 'Change color when feature is selected or hovered',
  description: 'Change aol-style on hover or on select',
  routerLink: 'color-select-hover',
  openLayersLink: 'https://openlayers.org/en/latest/examples/vector-layer.html'
}, {
  title: 'Marker',
  description: 'Display marker with svg on specific point',
  routerLink: 'marker',
  openLayersLink: 'https://openlayers.org/en/latest/examples/icon-color.html'
}, {
  title: 'Cluster',
  description: 'Example of using aol-source-cluster. This example shows how to do clustering on point features.',
  routerLink: 'cluster',
  openLayersLink: 'https://openlayers.org/en/latest/examples/cluster.html'
}, {
  title: 'Raster',
  description: 'Example of using raster to perform pixel-based operations. Adjust brightness and contrast in this case.',
  routerLink: 'raster'
}, {
  title: 'Image ArcGIS',
  description: 'Example of using aol-source-imagearcgisrest. This example display exported image of MapServer ArcGis endpoint.',
  routerLink: 'arcgis-image',
  openLayersLink: 'https://openlayers.org/en/latest/examples/arcgis-image.html'
}, {
  title: 'Image Load Events',
  description: 'Example of using aol-source-imagewms. This example listens to image loading events.',
  routerLink: 'image-wms',
  openLayersLink: 'https://openlayers.org/en/latest/examples/image-load-events.html'
}, {
  title: 'View projection update',
  description: 'Dynamically update view projection.',
  routerLink: 'view-projection-update'
}, {
  title: 'Overview',
  description: 'Overview of map',
  routerLink: 'overview',
  openLayersLink: 'https://openlayers.org/en/latest/examples/overviewmap.html'
}, {
  title: 'UTF Grid',
  description: 'Example of using aol-source-utfgrid. This example display country flag in an overlay on hover',
  routerLink: 'utf-grid',
  openLayersLink: 'https://openlayers.org/en/latest/examples/utfgrid.html'
}, {
  title: 'Image static',
  description: 'Example of using aol-source-imagestatic.',
  routerLink: 'image-static',
  openLayersLink: 'https://openlayers.org/en/latest/examples/static-image.html'
}, {
  title: 'Select intercation static',
  description: 'Example of using select intercation',
  routerLink: 'select-interaction',
  openLayersLink: 'https://openlayers.org/en/latest/examples/select-features.html'
}, {
  title: 'Tile Json',
  description: 'Example of using aol-source-tilejson. This example display mapbox json',
  routerLink: 'tile-json',
  openLayersLink: 'https://openlayers.org/en/latest/examples/tilejson.html'
}, {
  title: 'Graticule',
  description: 'Example of using aol-graticule. This example shows how to add a graticule overlay to a map',
  routerLink: 'graticule',
  openLayersLink: 'https://openlayers.org/en/latest/examples/graticule.html'
}];

/***/ }),

/***/ 3516:
/*!**********************************************************!*\
  !*** ./src/app/examples-item/examples-item.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExamplesItemComponent: () => (/* binding */ ExamplesItemComponent)
/* harmony export */ });
/* harmony import */ var _example_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../example-list */ 8544);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);




function ExamplesItemComponent_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6)(1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r1.exampleInfo.openLayersLink, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.exampleInfo.openLayersLink, " ");
  }
}
function ExamplesItemComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2)(1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ExamplesItemComponent_div_0_div_5_Template, 3, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.exampleInfo.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.exampleInfo.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.exampleInfo.openLayersLink);
  }
}
class ExamplesItemComponent {
  constructor(router) {
    this.router = router;
  }
  ngOnInit() {
    this.exampleInfo = _example_list__WEBPACK_IMPORTED_MODULE_0__.examplesList.find(item => this.router.url.includes(item.routerLink));
  }
  static #_ = this.ɵfac = function ExamplesItemComponent_Factory(t) {
    return new (t || ExamplesItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ExamplesItemComponent,
    selectors: [["app-examples-item"]],
    decls: 3,
    vars: 1,
    consts: [["class", "example-info", 4, "ngIf"], [1, "example"], [1, "example-info"], [1, "title"], [1, "description"], ["class", "open-layers-link", 4, "ngIf"], [1, "open-layers-link"], ["target", "_blank", 3, "href"]],
    template: function ExamplesItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ExamplesItemComponent_div_0_Template, 6, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.exampleInfo);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
    styles: ["[_nghost-%COMP%] {\n        height: 100%;\n        display: flex;\n        flex-direction: column;\n      }\n\n      .example-info[_ngcontent-%COMP%] {\n        flex: 0 1 auto;\n        padding: 2rem 1rem;\n        display: flex;\n        flex-direction: column;\n        font-family: Roboto, Arial, sans-serif;\n      }\n\n      .example-info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n        font-family: Roboto, sans-serif;\n        margin-top: 0px;\n        color: rgba(0, 0, 0, 0.87);\n        font-size: 25px;\n        font-weight: 700;\n        padding-bottom: 0.5rem;\n      }\n      .example-info[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n        color: rgba(0, 0, 0, 0.6);\n        line-height: 24px;\n        padding-bottom: 0.5rem;\n      }\n      .example-info[_ngcontent-%COMP%]   .open-layers-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        margin-bottom: 0px;\n        color: rgba(0, 0, 0, 0.6);\n        font-size: 12px;\n      }\n\n      .example[_ngcontent-%COMP%] {\n        flex: 1 1 auto;\n      }\n    \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZXhhbXBsZXMtaXRlbS9leGFtcGxlcy1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxZQUFZO1FBQ1osYUFBYTtRQUNiLHNCQUFzQjtNQUN4Qjs7TUFFQTtRQUNFLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixzQ0FBc0M7TUFDeEM7O01BRUE7UUFDRSwrQkFBK0I7UUFDL0IsZUFBZTtRQUNmLDBCQUEwQjtRQUMxQixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLHNCQUFzQjtNQUN4QjtNQUNBO1FBQ0UseUJBQXlCO1FBQ3pCLGlCQUFpQjtRQUNqQixzQkFBc0I7TUFDeEI7TUFDQTtRQUNFLGtCQUFrQjtRQUNsQix5QkFBeUI7UUFDekIsZUFBZTtNQUNqQjs7TUFFQTtRQUNFLGNBQWM7TUFDaEIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIDpob3N0IHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgfVxuXG4gICAgICAuZXhhbXBsZS1pbmZvIHtcbiAgICAgICAgZmxleDogMCAxIGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDJyZW0gMXJlbTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICB9XG5cbiAgICAgIC5leGFtcGxlLWluZm8gLnRpdGxlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xuICAgICAgfVxuICAgICAgLmV4YW1wbGUtaW5mbyAuZGVzY3JpcHRpb24ge1xuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbiAgICAgIH1cbiAgICAgIC5leGFtcGxlLWluZm8gLm9wZW4tbGF5ZXJzLWxpbmsgYSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgfVxuXG4gICAgICAuZXhhbXBsZSB7XG4gICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgfVxuICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 6010:
/*!**********************************************************!*\
  !*** ./src/app/examples-list/examples-list.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExamplesListComponent: () => (/* binding */ ExamplesListComponent)
/* harmony export */ });
/* harmony import */ var _example_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../example-list */ 8544);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);





function ExamplesListComponent_div_4_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExamplesListComponent_div_4_div_5_Template_div_click_0_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const example_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", example_r1.openLayersLink, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](example_r1.openLayersLink);
  }
}
function ExamplesListComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5)(1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ExamplesListComponent_div_4_div_5_Template, 3, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const example_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "examples/" + example_r1.routerLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](example_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](example_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", example_r1.openLayersLink);
  }
}
class ExamplesListComponent {
  constructor(fb) {
    this.fb = fb;
    this.list = _example_list__WEBPACK_IMPORTED_MODULE_0__.examplesList;
  }
  ngOnInit() {
    this.form = this.fb.group({
      term: ''
    });
    this.form.get('term').valueChanges.subscribe(() => {
      const termValue = this.form.get('term').value.toLowerCase();
      if (!termValue.trim()) {
        this.list = _example_list__WEBPACK_IMPORTED_MODULE_0__.examplesList;
      } else {
        this.list = this.list.filter(item => item.title && item.title.toLowerCase().includes(termValue) || item.description && item.description.toLowerCase().includes(termValue));
      }
    });
  }
  static #_ = this.ɵfac = function ExamplesListComponent_Factory(t) {
    return new (t || ExamplesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormBuilder));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ExamplesListComponent,
    selectors: [["app-examples-list"]],
    decls: 5,
    vars: 2,
    consts: [[1, "search"], [3, "formGroup"], ["type", "text", "formControlName", "term", "placeholder", "Search"], [1, "wrapper"], ["class", "example-item", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "example-item", 3, "routerLink"], [1, "title"], [1, "description"], ["class", "open-layers-link", 3, "click", 4, "ngIf"], [1, "open-layers-link", 3, "click"], ["target", "_blank", 3, "href"]],
    template: function ExamplesListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ExamplesListComponent_div_4_Template, 6, 4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.list);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
    styles: [".search[_ngcontent-%COMP%] {\n        display: flex;\n        justify-content: center;\n        padding: 1rem;\n      }\n      .example-item[_ngcontent-%COMP%] {\n        display: flex;\n        flex-direction: column;\n        padding: 10px;\n        background-color: #f5f5f5;\n        height: 140px;\n        margin: 10px 0;\n        overflow: auto;\n        line-height: 1.42857143;\n        color: black;\n        font-family: Roboto, Arial, sans-serif;\n        font-weight: 400;\n        cursor: pointer;\n      }\n\n      .example-item[_ngcontent-%COMP%]:hover {\n        background-color: #ddd;\n      }\n\n      .wrapper[_ngcontent-%COMP%] {\n        display: grid;\n        grid-template-columns: repeat(3, 1fr);\n        grid-gap: 10px;\n        grid-auto-rows: minmax(100px, auto);\n      }\n\n      .title[_ngcontent-%COMP%] {\n        margin-top: 0px;\n        color: rgba(0, 0, 0, 0.87);\n        font-size: 18px;\n        font-weight: 500;\n        padding-bottom: 0.5rem;\n      }\n\n      .description[_ngcontent-%COMP%] {\n        color: rgba(0, 0, 0, 0.6);\n        line-height: 24px;\n        padding-bottom: 0.5rem;\n      }\n\n      .open-layers-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        margin-bottom: 0px;\n        color: rgba(0, 0, 0, 0.6);\n        font-size: 12px;\n      }\n    \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZXhhbXBsZXMtbGlzdC9leGFtcGxlcy1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLGFBQWE7TUFDZjtNQUNBO1FBQ0UsYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixhQUFhO1FBQ2IseUJBQXlCO1FBQ3pCLGFBQWE7UUFDYixjQUFjO1FBQ2QsY0FBYztRQUNkLHVCQUF1QjtRQUN2QixZQUFZO1FBQ1osc0NBQXNDO1FBQ3RDLGdCQUFnQjtRQUNoQixlQUFlO01BQ2pCOztNQUVBO1FBQ0Usc0JBQXNCO01BQ3hCOztNQUVBO1FBQ0UsYUFBYTtRQUNiLHFDQUFxQztRQUNyQyxjQUFjO1FBQ2QsbUNBQW1DO01BQ3JDOztNQUVBO1FBQ0UsZUFBZTtRQUNmLDBCQUEwQjtRQUMxQixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLHNCQUFzQjtNQUN4Qjs7TUFFQTtRQUNFLHlCQUF5QjtRQUN6QixpQkFBaUI7UUFDakIsc0JBQXNCO01BQ3hCOztNQUVBO1FBQ0Usa0JBQWtCO1FBQ2xCLHlCQUF5QjtRQUN6QixlQUFlO01BQ2pCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAuc2VhcmNoIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICB9XG4gICAgICAuZXhhbXBsZS1pdGVtIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICAgICAgaGVpZ2h0OiAxNDBweDtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuXG4gICAgICAuZXhhbXBsZS1pdGVtOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgICAgIH1cblxuICAgICAgLndyYXBwZXIge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICAgICAgICBncmlkLWdhcDogMTBweDtcbiAgICAgICAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCgxMDBweCwgYXV0byk7XG4gICAgICB9XG5cbiAgICAgIC50aXRsZSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbiAgICAgIH1cblxuICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG4gICAgICB9XG5cbiAgICAgIC5vcGVuLWxheWVycy1saW5rIGEge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIH1cbiAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 7846:
/*!**************************************************!*\
  !*** ./src/app/graticule/graticule.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GraticuleComponent: () => (/* binding */ GraticuleComponent)
/* harmony export */ });
/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/style */ 9527);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var ngx_ol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-ol */ 5587);





function GraticuleComponent_aol_graticule_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "aol-graticule", 7);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("strokeStyle", ctx_r0.graticuleStyle)("showLabels", true);
  }
}
class GraticuleComponent {
  constructor() {
    this.zoom = 4;
    this.opacity = 1.0;
    this.shownGraticule = true;
    this.graticuleStyle = new ol_style__WEBPACK_IMPORTED_MODULE_1__["default"]({
      color: 'rgba(255,120,0,0.9)',
      width: 2,
      lineDash: [0.5, 4]
    });
  }
  static #_ = this.ɵfac = function GraticuleComponent_Factory(t) {
    return new (t || GraticuleComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: GraticuleComponent,
    selectors: [["app-root"]],
    decls: 13,
    vars: 5,
    consts: [["width", "100%", "height", "100%"], [3, "zoom"], [3, "x", "y"], [3, "strokeStyle", "showLabels", 4, "ngIf"], [1, "controls"], ["type", "checkbox", "id", "graticule", "name", "graticule", 3, "ngModel", "ngModelChange"], ["for", "graticule"], [3, "strokeStyle", "showLabels"]],
    template: function GraticuleComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-map", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "aol-interaction-default")(2, "aol-control-defaults")(3, "aol-control-fullscreen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "aol-view", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "aol-coordinate", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "aol-layer-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "aol-source-osm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, GraticuleComponent_aol_graticule_8_Template, 1, 2, "aol-graticule", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4)(10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GraticuleComponent_Template_input_ngModelChange_10_listener($event) {
          return ctx.shownGraticule = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Toggle graticule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zoom", ctx.zoom);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", -10997148)("y", 4569099);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.shownGraticule);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.shownGraticule);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, ngx_ol__WEBPACK_IMPORTED_MODULE_4__.MapComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_4__.ViewComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_4__.GraticuleComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_4__.LayerTileComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_4__.SourceOsmComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_4__.CoordinateComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_4__.DefaultControlComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_4__.ControlFullScreenComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_4__.DefaultInteractionComponent],
    styles: ["[_nghost-%COMP%] {\n        height: 100%;\n        display: flex;\n      }\n\n      aol-map[_ngcontent-%COMP%] {\n        width: 80%;\n      }\n\n      .controls[_ngcontent-%COMP%] {\n        width: 18%;\n        padding: 1rem;\n      }\n    \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZ3JhdGljdWxlL2dyYXRpY3VsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0UsWUFBWTtRQUNaLGFBQWE7TUFDZjs7TUFFQTtRQUNFLFVBQVU7TUFDWjs7TUFFQTtRQUNFLFVBQVU7UUFDVixhQUFhO01BQ2YiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIDpob3N0IHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgfVxuXG4gICAgICBhb2wtbWFwIHtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgIH1cblxuICAgICAgLmNvbnRyb2xzIHtcbiAgICAgICAgd2lkdGg6IDE4JTtcbiAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgIH1cbiAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 8305:
/*!********************************************************!*\
  !*** ./src/app/image-static/image-static.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageStaticComponent: () => (/* binding */ ImageStaticComponent)
/* harmony export */ });
/* harmony import */ var ol_extent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/extent */ 3133);
/* harmony import */ var ol_proj_Projection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ol/proj/Projection */ 4714);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var ngx_ol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-ol */ 5587);





const _c0 = () => [512, 484];
class ImageStaticComponent {
  constructor() {
    this.url = 'https://imgs.xkcd.com/comics/online_communities.png';
    this.zoom = 5;
    this.opacity = 1.0;
    this.extent = [0, 0, 1024, 968];
    this.po = {
      code: 'xkcd-image',
      units: 'pixels',
      extent: [0, 0, 1024, 968]
    };
    this.projection = new ol_proj_Projection__WEBPACK_IMPORTED_MODULE_0__["default"](this.po);
    this.getCenter = ext => (0,ol_extent__WEBPACK_IMPORTED_MODULE_1__.getCenter)(ext);
  }
  onUrlChange(evt) {
    this.url = evt.target.value;
  }
  static #_ = this.ɵfac = function ImageStaticComponent_Factory(t) {
    return new (t || ImageStaticComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ImageStaticComponent,
    selectors: [["app-root"]],
    decls: 11,
    vars: 11,
    consts: [[3, "width", "height"], [3, "projection", "zoom", "center"], [3, "opacity", "extent"], [3, "url", "projection", "imageExtent"], [1, "controls"], [3, "change"], ["value", "https://imgs.xkcd.com/comics/online_communities.png"], ["value", "https://pbs.twimg.com/media/D7IgamEUEAA5DHE.jpg"]],
    template: function ImageStaticComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "aol-map", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "aol-view", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "aol-layer-image", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "aol-source-imagestatic", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Current image url: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ImageStaticComponent_Template_select_change_6_listener($event) {
          return ctx.onUrlChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "https://imgs.xkcd.com/comics/online_communities.png ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "https://pbs.twimg.com/media/D7IgamEUEAA5DHE.jpg ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("width", "100%")("height", "100%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("projection", ctx.projection)("zoom", 2)("center", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](10, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("opacity", ctx.opacity)("extent", ctx.extent);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("url", ctx.url)("projection", ctx.projection)("imageExtent", ctx.extent);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], ngx_ol__WEBPACK_IMPORTED_MODULE_4__.MapComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_4__.ViewComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_4__.LayerImageComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_4__.SourceImageStaticComponent],
    styles: ["[_nghost-%COMP%] {\n        height: 100%;\n        display: flex;\n      }\n\n      aol-map[_ngcontent-%COMP%] {\n        width: 70%;\n      }\n\n      .controls[_ngcontent-%COMP%] {\n        width: 28%;\n        padding: 1rem;\n      }\n    \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaW1hZ2Utc3RhdGljL2ltYWdlLXN0YXRpYy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0UsWUFBWTtRQUNaLGFBQWE7TUFDZjs7TUFFQTtRQUNFLFVBQVU7TUFDWjs7TUFFQTtRQUNFLFVBQVU7UUFDVixhQUFhO01BQ2YiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIDpob3N0IHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgfVxuXG4gICAgICBhb2wtbWFwIHtcbiAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgIH1cblxuICAgICAgLmNvbnRyb2xzIHtcbiAgICAgICAgd2lkdGg6IDI4JTtcbiAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgIH1cbiAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 6399:
/*!**************************************************!*\
  !*** ./src/app/image-wms/image-wms.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageWMSComponent: () => (/* binding */ ImageWMSComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var ngx_ol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-ol */ 5587);


class ImageWMSComponent {
  constructor() {
    this.params = {
      LAYERS: 'topp:states'
    };
  }
  ngOnInit() {}
  imageLoadStart() {
    console.log('image starts loading at: ' + new Date());
  }
  imageLoadEnd() {
    console.log('image ends loading at: ' + new Date());
  }
  static #_ = this.ɵfac = function ImageWMSComponent_Factory(t) {
    return new (t || ImageWMSComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ImageWMSComponent,
    selectors: [["app-root"]],
    decls: 7,
    vars: 5,
    consts: [["width", "100%", "height", "100%"], ["map", ""], ["zoom", "4"], [3, "x", "y"], [3, "url", "params", "serverType", "imageLoadStart", "imageLoadEnd"]],
    template: function ImageWMSComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-map", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "aol-interaction-default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "aol-view", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "aol-coordinate", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "aol-layer-image")(6, "aol-source-imagewms", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("imageLoadStart", function ImageWMSComponent_Template_aol_source_imagewms_imageLoadStart_6_listener() {
          return ctx.imageLoadStart();
        })("imageLoadEnd", function ImageWMSComponent_Template_aol_source_imagewms_imageLoadEnd_6_listener() {
          return ctx.imageLoadEnd();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", -10997148)("y", 4569099);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("url", "https://ahocevar.com/geoserver/wms")("params", ctx.params)("serverType", "geoserver");
      }
    },
    dependencies: [ngx_ol__WEBPACK_IMPORTED_MODULE_1__.MapComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.ViewComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.LayerImageComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.SourceImageWMSComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.CoordinateComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.DefaultInteractionComponent],
    styles: ["map[_ngcontent-%COMP%] {\n        background: #e0eced;\n      }\n    \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaW1hZ2Utd21zL2ltYWdlLXdtcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0UsbUJBQW1CO01BQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICBtYXAge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZTBlY2VkO1xuICAgICAgfVxuICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 5294:
/*!********************************************************!*\
  !*** ./src/app/map-position/map-position.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MapPositionComponent: () => (/* binding */ MapPositionComponent)
/* harmony export */ });
/* harmony import */ var ol_proj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ol/proj */ 6395);
/* harmony import */ var ol_proj_Projection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/proj/Projection */ 4714);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var ngx_ol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-ol */ 5587);





const _c0 = ["map"];
const _c1 = ["view"];
class MapPositionComponent {
  constructor(fb) {
    this.fb = fb;
    this.displayProj = new ol_proj_Projection__WEBPACK_IMPORTED_MODULE_1__["default"]({
      code: 'EPSG:3857'
    });
    this.inputProj = new ol_proj_Projection__WEBPACK_IMPORTED_MODULE_1__["default"]({
      code: 'EPSG:4326'
    });
    this.moving = false;
    this.currentZoom = 0;
    this.currentLon = 0;
    this.currentLat = 0;
  }
  ngOnInit() {
    this.form = this.fb.group({
      x: 1.4886,
      y: 43.5554,
      zoom: 4
    });
  }
  displayCoordinates() {
    this.moving = false;
    this.currentZoom = this.view.instance.getZoom();
    [this.currentLon, this.currentLat] = (0,ol_proj__WEBPACK_IMPORTED_MODULE_0__.transform)(this.view.instance.getCenter(), this.displayProj, this.inputProj);
  }
  startMoving() {
    this.moving = true;
  }
  static #_ = this.ɵfac = function MapPositionComponent_Factory(t) {
    return new (t || MapPositionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormBuilder));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: MapPositionComponent,
    selectors: [["app-map-position"]],
    viewQuery: function MapPositionComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.map = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.view = _t.first);
      }
    },
    decls: 35,
    vars: 8,
    consts: [["width", "100%", "height", "100%", 3, "moveStart", "moveEnd"], ["map", ""], [3, "zoom"], ["view", ""], ["srid", "EPSG:4326", 3, "x", "y"], [3, "opacity"], [1, "info"], [1, "current-coordinates"], [1, "update-coordinates"], [3, "formGroup"], [1, "row"], ["min", "0", "type", "number", "formControlName", "x"], ["min", "0", "type", "number", "formControlName", "y"], ["min", "0", "type", "number", "formControlName", "zoom"]],
    template: function MapPositionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "aol-map", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("moveStart", function MapPositionComponent_Template_aol_map_moveStart_0_listener() {
          return ctx.startMoving();
        })("moveEnd", function MapPositionComponent_Template_aol_map_moveEnd_0_listener() {
          return ctx.displayCoordinates();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "aol-interaction-default")(3, "aol-control-defaults");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "aol-view", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "aol-coordinate", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "aol-layer-tile", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "aol-source-osm");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6)(10, "div", 7)(11, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Map coordinates");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 8)(20, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Update coordinates");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "form", 9)(23, "div", 10)(24, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Longitude:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 10)(28, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Latitude:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 10)(32, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Zoom:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("zoom", ctx.form.get("zoom").value);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("x", ctx.form.get("x").value)("y", ctx.form.get("y").value);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("opacity", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Longitude: ", ctx.moving ? "----" : ctx.currentLon, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Latitude: ", ctx.moving ? "----" : ctx.currentLat, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Zoom: ", ctx.moving ? "----" : ctx.currentZoom, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MinValidator, ngx_ol__WEBPACK_IMPORTED_MODULE_4__.MapComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_4__.ViewComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_4__.LayerTileComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_4__.SourceOsmComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_4__.CoordinateComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_4__.DefaultControlComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_4__.DefaultInteractionComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName],
    styles: ["[_nghost-%COMP%] {\n        height: 100%;\n        display: flex;\n      }\n\n      aol-map[_ngcontent-%COMP%] {\n        width: 70%;\n      }\n\n      .info[_ngcontent-%COMP%] {\n        width: 28%;\n        padding: 1rem;\n      }\n\n      .current-coordinates[_ngcontent-%COMP%] {\n        display: flex;\n        flex-direction: column;\n      }\n\n      .update-coordinates[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n        display: flex;\n        flex-direction: column;\n      }\n\n      .row[_ngcontent-%COMP%] {\n        padding: 1rem;\n      }\n\n      .row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n        min-width: 5rem;\n        display: inline-block;\n        float: left;\n      }\n\n      .row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n        width: calc(50% - 5rem);\n        display: inline-block;\n        float: left;\n      }\n    \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFwLXBvc2l0aW9uL21hcC1wb3NpdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0UsWUFBWTtRQUNaLGFBQWE7TUFDZjs7TUFFQTtRQUNFLFVBQVU7TUFDWjs7TUFFQTtRQUNFLFVBQVU7UUFDVixhQUFhO01BQ2Y7O01BRUE7UUFDRSxhQUFhO1FBQ2Isc0JBQXNCO01BQ3hCOztNQUVBO1FBQ0UsYUFBYTtRQUNiLHNCQUFzQjtNQUN4Qjs7TUFFQTtRQUNFLGFBQWE7TUFDZjs7TUFFQTtRQUNFLGVBQWU7UUFDZixxQkFBcUI7UUFDckIsV0FBVztNQUNiOztNQUVBO1FBQ0UsdUJBQXVCO1FBQ3ZCLHFCQUFxQjtRQUNyQixXQUFXO01BQ2IiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIDpob3N0IHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgfVxuXG4gICAgICBhb2wtbWFwIHtcbiAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgIH1cblxuICAgICAgLmluZm8ge1xuICAgICAgICB3aWR0aDogMjglO1xuICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgfVxuXG4gICAgICAuY3VycmVudC1jb29yZGluYXRlcyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICB9XG5cbiAgICAgIC51cGRhdGUtY29vcmRpbmF0ZXMgZm9ybSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICB9XG5cbiAgICAgIC5yb3cge1xuICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgfVxuXG4gICAgICAucm93IGxhYmVsIHtcbiAgICAgICAgbWluLXdpZHRoOiA1cmVtO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgfVxuXG4gICAgICAucm93IGlucHV0IHtcbiAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gNXJlbSk7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICB9XG4gICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4622:
/*!********************************************!*\
  !*** ./src/app/marker/marker.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MarkerComponent: () => (/* binding */ MarkerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var ngx_ol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-ol */ 5587);



const _c0 = () => [0.5, 1];
function MarkerComponent_aol_layer_vector_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-layer-vector")(1, "aol-source-vector", null, 6)(3, "aol-feature")(4, "aol-geometry-point");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "aol-coordinate", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "aol-style");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "aol-style-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", ctx_r1.marker.lon)("y", ctx_r1.marker.lat)("srid", "EPSG:4326");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/marker.svg")("anchor", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0))("anchorXUnits", "fraction")("anchorYUnits", "fraction")("scale", 2)("anchorOrigin", "top-left");
  }
}
//
class MarkerComponent {
  constructor() {
    this.feature = {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Polygon',
        coordinates: [[[-2.3565673828124996, 46.92588289494367], [-2.1148681640624996, 46.92588289494367], [-2.1148681640624996, 47.04954010021555], [-2.3565673828124996, 47.04954010021555], [-2.3565673828124996, 46.92588289494367]]]
      }
    };
    this.marker = {
      lon: -2.264184,
      lat: 46.996207
    };
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function MarkerComponent_Factory(t) {
    return new (t || MarkerComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MarkerComponent,
    selectors: [["app-display-marker"]],
    decls: 9,
    vars: 6,
    consts: [["width", "100%", "height", "100%"], ["map", ""], [3, "zoom"], [3, "x", "y", "srid"], [3, "opacity"], [4, "ngIf"], ["markers", ""], [3, "src", "anchor", "anchorXUnits", "anchorYUnits", "scale", "anchorOrigin"]],
    template: function MarkerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-map", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "aol-interaction-default")(3, "aol-control-defaults");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "aol-view", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "aol-coordinate", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "aol-layer-tile", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "aol-source-osm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MarkerComponent_aol_layer_vector_8_Template, 8, 10, "aol-layer-vector", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zoom", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", -2.269282)("y", 46.987247)("srid", "EPSG:4326");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opacity", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.marker);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.MapComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.ViewComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.LayerTileComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.LayerVectorComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.SourceOsmComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.SourceVectorComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.FeatureComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.GeometryPointComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.CoordinateComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.StyleComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.StyleIconComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.DefaultControlComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.DefaultInteractionComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 2646:
/*!************************************************************!*\
  !*** ./src/app/modify-polygon/modify-polygon.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModifyPolygonComponent: () => (/* binding */ ModifyPolygonComponent)
/* harmony export */ });
/* harmony import */ var ol_proj_Projection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/proj/Projection */ 4714);
/* harmony import */ var ol_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/format */ 8625);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var ngx_ol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-ol */ 5587);





function ModifyPolygonComponent_aol_layer_vector_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-layer-vector")(1, "aol-source-vector")(2, "aol-feature")(3, "aol-geometry-polygon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "aol-collection-coordinates", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("coordinates", ctx_r3.feature.geometry.coordinates)("srid", "EPSG:4326");
  }
}
class ModifyPolygonComponent {
  constructor() {
    this.format = new ol_format__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.displayProj = new ol_proj_Projection__WEBPACK_IMPORTED_MODULE_2__["default"]({
      code: 'EPSG:3857'
    });
    this.inputProj = new ol_proj_Projection__WEBPACK_IMPORTED_MODULE_2__["default"]({
      code: 'EPSG:4326'
    });
    this.feature = {
      geometry: {
        coordinates: [[[-1.7138671875, 43.35713822211053], [4.515380859375, 43.35713822211053], [4.515380859375, 47.76886840424207], [-1.7138671875, 47.76886840424207], [-1.7138671875, 43.35713822211053]]],
        type: 'Polygon'
      },
      properties: {},
      type: 'Feature'
    };
  }
  ngOnInit() {}
  modifyEnd(feature) {
    this.feature = this.format.writeFeatureObject(feature, {
      dataProjection: this.inputProj,
      featureProjection: this.displayProj
    });
  }
  static #_ = this.ɵfac = function ModifyPolygonComponent_Factory(t) {
    return new (t || ModifyPolygonComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ModifyPolygonComponent,
    selectors: [["app-modify-polygon"]],
    decls: 19,
    vars: 11,
    consts: [["width", "100%", "height", "100%"], ["map", ""], [3, "wrapX"], ["select", ""], [3, "features", "modifyEnd"], ["modify", ""], [3, "zoom"], [3, "x", "y", "srid"], [3, "opacity"], [4, "ngIf"], [1, "info"], [3, "coordinates", "srid"]],
    template: function ModifyPolygonComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-map", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "aol-interaction-default")(3, "aol-interaction-select", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "aol-interaction-modify", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("modifyEnd", function ModifyPolygonComponent_Template_aol_interaction_modify_modifyEnd_5_listener($event) {
          return ctx.modifyEnd($event.features.getArray()[0]);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "aol-view", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "aol-coordinate", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "aol-layer-tile", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "aol-source-osm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ModifyPolygonComponent_aol_layer_vector_11_Template, 5, 2, "aol-layer-vector", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10)(13, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Result");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "code")(16, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("wrapX", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("features", _r1.instance.getFeatures());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zoom", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", 1.4886)("y", 43.5554)("srid", "EPSG:4326");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opacity", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.feature);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 9, ctx.feature));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, ngx_ol__WEBPACK_IMPORTED_MODULE_4__.MapComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_4__.ViewComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_4__.LayerTileComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_4__.LayerVectorComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_4__.SourceOsmComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_4__.SourceVectorComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_4__.FeatureComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_4__.GeometryPolygonComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_4__.CoordinateComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_4__.CollectionCoordinatesComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_4__.DefaultInteractionComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_4__.SelectInteractionComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_4__.ModifyInteractionComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.JsonPipe],
    styles: ["[_nghost-%COMP%] {\n        height: 100%;\n        display: flex;\n      }\n\n      aol-map[_ngcontent-%COMP%] {\n        width: 70%;\n      }\n\n      .info[_ngcontent-%COMP%] {\n        width: 28%;\n        padding: 1rem;\n      }\n    \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kaWZ5LXBvbHlnb24vbW9kaWZ5LXBvbHlnb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDTTtRQUNFLFlBQVk7UUFDWixhQUFhO01BQ2Y7O01BRUE7UUFDRSxVQUFVO01BQ1o7O01BRUE7UUFDRSxVQUFVO1FBQ1YsYUFBYTtNQUNmIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIH1cblxuICAgICAgYW9sLW1hcCB7XG4gICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICB9XG5cbiAgICAgIC5pbmZvIHtcbiAgICAgICAgd2lkdGg6IDI4JTtcbiAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgIH1cbiAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 3263:
/*!**********************************************!*\
  !*** ./src/app/overlay/overlay.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OverlayComponent: () => (/* binding */ OverlayComponent)
/* harmony export */ });
/* harmony import */ var ol_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ol/format */ 8625);
/* harmony import */ var ol_geom_Polygon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/geom/Polygon */ 6646);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var ngx_ol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-ol */ 5587);




class OverlayComponent {
  constructor() {
    this.geoJsonFormat = new ol_format__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.feature = {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Polygon',
        coordinates: [[[-2.3565673828124996, 46.92588289494367], [-2.1148681640624996, 46.92588289494367], [-2.1148681640624996, 47.04954010021555], [-2.3565673828124996, 47.04954010021555], [-2.3565673828124996, 46.92588289494367]]]
      }
    };
    this.tooltip = {
      lon: 0,
      lat: 0,
      text: 'Lorem ipsum dolor sit amet'
    };
  }
  ngOnInit() {
    const olFeature = this.geoJsonFormat.readFeature(this.feature);
    const olGeomPolygon = (0,ol_geom_Polygon__WEBPACK_IMPORTED_MODULE_1__.fromExtent)(olFeature.getGeometry().getExtent());
    [, this.tooltip.lat, this.tooltip.lon] = olGeomPolygon.getExtent();
  }
  static #_ = this.ɵfac = function OverlayComponent_Factory(t) {
    return new (t || OverlayComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: OverlayComponent,
    selectors: [["app-display-overlay"]],
    decls: 18,
    vars: 13,
    consts: [["width", "100%", "height", "100%"], ["map", ""], [3, "zoom"], [3, "x", "y", "srid"], [3, "opacity"], [3, "coordinates", "srid"], [3, "positioning", "stopEvent"], [1, "tooltip", "tooltip-static"]],
    template: function OverlayComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "aol-map", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "aol-interaction-default")(3, "aol-control-defaults");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "aol-view", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "aol-coordinate", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "aol-layer-tile", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "aol-source-osm");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "aol-layer-vector")(9, "aol-source-vector")(10, "aol-feature")(11, "aol-geometry-polygon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "aol-collection-coordinates", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "aol-overlay", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "aol-coordinate", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "aol-content")(16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("zoom", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("x", -2.269282)("y", 46.987247)("srid", "EPSG:4326");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("opacity", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("coordinates", ctx.feature.geometry.coordinates)("srid", "EPSG:4326");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("positioning", "center-center")("stopEvent", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("x", ctx.tooltip.lon)("y", ctx.tooltip.lat)("srid", "EPSG:4326");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.tooltip.text);
      }
    },
    dependencies: [ngx_ol__WEBPACK_IMPORTED_MODULE_3__.MapComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_3__.ViewComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_3__.LayerTileComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_3__.LayerVectorComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_3__.SourceOsmComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_3__.SourceVectorComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_3__.FeatureComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_3__.GeometryPolygonComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_3__.CoordinateComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_3__.CollectionCoordinatesComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_3__.DefaultControlComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_3__.DefaultInteractionComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_3__.OverlayComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_3__.ContentComponent],
    styles: [".tooltip[_ngcontent-%COMP%] {\n        margin-top: 35%;\n        right: 50%;\n        position: relative;\n        border-radius: 4px;\n        color: white;\n        padding: 4px 8px;\n        white-space: nowrap;\n      }\n\n      .tooltip-static[_ngcontent-%COMP%] {\n        background-color: #000000;\n        color: white;\n        border: 1px solid white;\n      }\n    \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvb3ZlcmxheS9vdmVybGF5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxlQUFlO1FBQ2YsVUFBVTtRQUNWLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixtQkFBbUI7TUFDckI7O01BRUE7UUFDRSx5QkFBeUI7UUFDekIsWUFBWTtRQUNaLHVCQUF1QjtNQUN6QiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgLnRvb2x0aXAge1xuICAgICAgICBtYXJnaW4tdG9wOiAzNSU7XG4gICAgICAgIHJpZ2h0OiA1MCU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICB9XG5cbiAgICAgIC50b29sdGlwLXN0YXRpYyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgICB9XG4gICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1290:
/*!************************************************!*\
  !*** ./src/app/overview/overview.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OverviewComponent: () => (/* binding */ OverviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var ngx_ol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-ol */ 5587);


class OverviewComponent {
  constructor() {
    this.zoom = 15;
  }
  static #_ = this.ɵfac = function OverviewComponent_Factory(t) {
    return new (t || OverviewComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: OverviewComponent,
    selectors: [["app-root"]],
    decls: 10,
    vars: 5,
    consts: [["width", "100%", "height", "100%"], [3, "zoom"], ["view", ""], [3, "x", "y", "srid"], [3, "opacity"], ["osm", ""]],
    template: function OverviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-map", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "aol-interaction-default")(2, "aol-control-defaults")(3, "aol-control-overviewmap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "aol-view", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "aol-coordinate", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "aol-layer-tile", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "aol-source-osm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zoom", ctx.zoom);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", 5)("y", 45)("srid", "EPSG:4326");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opacity", 1);
      }
    },
    dependencies: [ngx_ol__WEBPACK_IMPORTED_MODULE_1__.MapComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.ViewComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.LayerTileComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.SourceOsmComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.CoordinateComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.DefaultControlComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.ControlOverviewMapComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.DefaultInteractionComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 3954:
/*!********************************************!*\
  !*** ./src/app/raster/raster.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RasterComponent: () => (/* binding */ RasterComponent),
/* harmony export */   rasterOperation: () => (/* binding */ rasterOperation)
/* harmony export */ });
/* harmony import */ var ngx_ol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-ol */ 5587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);





function RasterComponent_aol_source_osm_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "aol-source-osm");
  }
}
function RasterComponent_aol_source_xyz_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "aol-source-xyz", 11);
  }
}
class RasterComponent {
  constructor() {
    this.operation = rasterOperation;
    this.brightness = 0;
    this.contrast = 0;
    this.selectLayer = 'osm';
  }
  beforeOperations(event) {
    const data = event.data;
    data.brightness = this.brightness;
    data.contrast = this.contrast;
  }
  updateRaster() {
    this.rasterSource.instance.refresh();
  }
  static #_ = this.ɵfac = function RasterComponent_Factory(t) {
    return new (t || RasterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: RasterComponent,
    selectors: [["app-raster"]],
    viewQuery: function RasterComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](ngx_ol__WEBPACK_IMPORTED_MODULE_1__.SourceRasterComponent, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.rasterSource = _t.first);
      }
    },
    decls: 30,
    vars: 13,
    consts: [["width", "100%", "height", "100%"], [3, "zoom"], [3, "x", "y", "srid"], ["threads", "4", "operationType", "image", 3, "operation", "beforeOperations"], [4, "ngIf"], ["url", "https://c.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=0e6fc415256d4fbb9b5166a718591d71", "crossOrigin", "", 4, "ngIf"], [1, "controls"], ["type", "radio", "name", "layer", "value", "osm", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "layer", "value", "xyz", 3, "ngModel", "ngModelChange"], [1, "control"], ["type", "range", "min", "-255", "max", "255", 3, "ngModel", "ngModelChange", "input"], ["url", "https://c.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=0e6fc415256d4fbb9b5166a718591d71", "crossOrigin", ""]],
    template: function RasterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-map", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "aol-interaction-default")(2, "aol-control-defaults")(3, "aol-control-fullscreen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "aol-view", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "aol-coordinate", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "aol-layer-image")(7, "aol-source-raster", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("beforeOperations", function RasterComponent_Template_aol_source_raster_beforeOperations_7_listener($event) {
          return ctx.beforeOperations($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RasterComponent_aol_source_osm_8_Template, 1, 0, "aol-source-osm", 4)(9, RasterComponent_aol_source_xyz_9_Template, 1, 0, "aol-source-xyz", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6)(11, "form")(12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RasterComponent_Template_input_ngModelChange_12_listener($event) {
          return ctx.selectLayer = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "OSM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RasterComponent_Template_input_ngModelChange_15_listener($event) {
          return ctx.selectLayer = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "XYZ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9)(19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Contrast : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RasterComponent_Template_input_ngModelChange_21_listener($event) {
          return ctx.contrast = $event;
        })("input", function RasterComponent_Template_input_input_21_listener() {
          return ctx.updateRaster();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9)(25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Brightness : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RasterComponent_Template_input_ngModelChange_27_listener($event) {
          return ctx.brightness = $event;
        })("input", function RasterComponent_Template_input_input_27_listener() {
          return ctx.updateRaster();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zoom", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", 1.4886)("y", 43.5554)("srid", "EPSG:4326");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("operation", ctx.operation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectLayer === "osm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectLayer === "xyz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectLayer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectLayer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contrast);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" (", ctx.contrast, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.brightness);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" (", ctx.brightness, ")");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RangeValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.MapComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.ViewComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.LayerImageComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.SourceOsmComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.SourceXYZComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.SourceRasterComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.CoordinateComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.DefaultControlComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.ControlFullScreenComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.DefaultInteractionComponent],
    styles: ["[_nghost-%COMP%] {\n        height: 100%;\n        display: flex;\n      }\n\n      aol-map[_ngcontent-%COMP%] {\n        width: 70%;\n      }\n\n      .controls[_ngcontent-%COMP%] {\n        width: 28%;\n        padding: 1rem;\n      }\n\n      .control[_ngcontent-%COMP%] {\n        display: flex;\n        align-items: center;\n        justify-content: flex-start;\n        margin: 20px;\n      }\n    \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmFzdGVyL3Jhc3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0UsWUFBWTtRQUNaLGFBQWE7TUFDZjs7TUFFQTtRQUNFLFVBQVU7TUFDWjs7TUFFQTtRQUNFLFVBQVU7UUFDVixhQUFhO01BQ2Y7O01BRUE7UUFDRSxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLDJCQUEyQjtRQUMzQixZQUFZO01BQ2QiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIDpob3N0IHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgfVxuXG4gICAgICBhb2wtbWFwIHtcbiAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgIH1cblxuICAgICAgLmNvbnRyb2xzIHtcbiAgICAgICAgd2lkdGg6IDI4JTtcbiAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgIH1cblxuICAgICAgLmNvbnRyb2wge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIG1hcmdpbjogMjBweDtcbiAgICAgIH1cbiAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}
/**
 * @see https://github.com/canastro/image-filter-brightness/blob/master/src/transform.js
 * @see https://github.com/canastro/image-filter-contrast/blob/master/src/transform.js
 */
function rasterOperation(imageDatas, data) {
  const [imageData] = imageDatas;
  const pixels = imageData.data;
  const pixelsLength = pixels.length;
  const factor = 259 * (data.contrast + 255) / (255 * (259 - data.contrast));
  for (let i = 0; i < pixelsLength; i += 4) {
    pixels[i] += data.brightness;
    pixels[i + 1] += data.brightness;
    pixels[i + 2] += data.brightness;
    pixels[i] = factor * (pixels[i] - 128) + 128;
    pixels[i + 1] = factor * (pixels[i + 1] - 128) + 128;
    pixels[i + 2] = factor * (pixels[i + 2] - 128) + 128;
  }
  return imageData;
}

/***/ }),

/***/ 2617:
/*!********************************************************************!*\
  !*** ./src/app/select-interaction/select-interaction.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectInteractionComponent: () => (/* binding */ SelectInteractionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var ngx_ol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-ol */ 5587);


const _c0 = ["markersLayer"];
class SelectInteractionComponent {
  constructor() {
    this.isMarkerLayer = layer => layer === this.markersLayer.instance;
  }
  select($event) {
    console.log($event);
  }
  static #_ = this.ɵfac = function SelectInteractionComponent_Factory(t) {
    return new (t || SelectInteractionComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SelectInteractionComponent,
    selectors: [["app-select-interaction"]],
    viewQuery: function SelectInteractionComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.markersLayer = _t.first);
      }
    },
    decls: 15,
    vars: 11,
    consts: [["width", "100%", "height", "100%"], ["map", ""], [3, "layers", "wrapX", "olSelect"], [3, "zoom"], [3, "x", "y", "srid"], [3, "opacity"], ["markersLayer", ""], [3, "wrapX"], ["markersSource", ""]],
    template: function SelectInteractionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-map", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "aol-interaction-default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "aol-interaction-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("olSelect", function SelectInteractionComponent_Template_aol_interaction_select_olSelect_3_listener($event) {
          return ctx.select($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "aol-view", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "aol-coordinate", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "aol-layer-tile", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "aol-source-osm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "aol-layer-vector", null, 6)(10, "aol-source-vector", 7, 8)(12, "aol-feature")(13, "aol-geometry-point");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "aol-coordinate", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("layers", ctx.isMarkerLayer)("wrapX", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zoom", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", 1.4886)("y", 43.5554)("srid", "EPSG:4326");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opacity", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("wrapX", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", 5)("y", 45)("srid", "EPSG:4326");
      }
    },
    dependencies: [ngx_ol__WEBPACK_IMPORTED_MODULE_1__.MapComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.ViewComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.LayerTileComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.LayerVectorComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.SourceOsmComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.SourceVectorComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.FeatureComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.GeometryPointComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.CoordinateComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.DefaultInteractionComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.SelectInteractionComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 1947:
/*!********************************************************!*\
  !*** ./src/app/side-by-side/side-by-side.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SideBySideComponent: () => (/* binding */ SideBySideComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var ngx_ol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-ol */ 5587);


const _c0 = ["secondMap"];
const _c1 = ["view"];
class SideBySideComponent {
  constructor() {}
  ngOnInit() {}
  ngAfterViewInit() {
    this.secondMap.instance.setView(this.view.instance);
  }
  static #_ = this.ɵfac = function SideBySideComponent_Factory(t) {
    return new (t || SideBySideComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SideBySideComponent,
    selectors: [["app-side-by-side"]],
    viewQuery: function SideBySideComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.secondMap = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.view = _t.first);
      }
    },
    decls: 13,
    vars: 7,
    consts: [[3, "width", "height"], ["map", ""], [3, "zoom"], ["view", ""], [3, "x", "y", "srid"], [3, "opacity"], ["width", "100%", "height", "100%"], ["secondMap", ""], ["url", "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"]],
    template: function SideBySideComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-map", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "aol-interaction-default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "aol-view", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "aol-coordinate", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "aol-layer-tile", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "aol-source-osm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "aol-map", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "aol-interaction-default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "aol-layer-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "aol-source-xyz", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", "100%")("height", "100%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zoom", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", 2.181539)("y", 47.125488)("srid", "EPSG:4326");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opacity", 1);
      }
    },
    dependencies: [ngx_ol__WEBPACK_IMPORTED_MODULE_1__.MapComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.ViewComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.LayerTileComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.SourceOsmComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.SourceXYZComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.CoordinateComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.DefaultInteractionComponent],
    styles: ["[_nghost-%COMP%] {\n        height: 100%;\n        display: flex;\n      }\n\n      aol-map[_ngcontent-%COMP%] {\n        width: 50%;\n      }\n    \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2lkZS1ieS1zaWRlL3NpZGUtYnktc2lkZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0UsWUFBWTtRQUNaLGFBQWE7TUFDZjs7TUFFQTtRQUNFLFVBQVU7TUFDWiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgOmhvc3Qge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB9XG5cbiAgICAgIGFvbC1tYXAge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgfVxuICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 8994:
/*!******************************************!*\
  !*** ./src/app/swipe/swipe.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SwipeComponent: () => (/* binding */ SwipeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var ngx_ol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-ol */ 5587);


const _c0 = ["map"];
class SwipeComponent {
  constructor() {
    this.swipeValue = 50;
    this.swipeOffsetToCenter = 0;
    this.positionPx = 0;
    this.startX = 0;
    this.paddingSize = 16;
  }
  ngOnInit() {
    this.prerenderFunction = this.prerender();
    this.postrenderFunction = this.postrender();
  }
  onWindowResize(event) {
    this.resetSwipeValues();
  }
  prerender() {
    return event => {
      const ctx = event.context;
      const width = ctx.canvas.width * (this.swipeValue / 100);
      ctx.save();
      ctx.beginPath();
      ctx.rect(width, 0, ctx.canvas.width - width, ctx.canvas.height);
      ctx.clip();
    };
  }
  postrender() {
    return event => {
      const ctx = event.context;
      ctx.restore();
    };
  }
  resetSwipeValues() {
    this.startX = 0;
    this.swipeOffsetToCenter = 0;
    this.swipeValue = 50;
    this.positionPx = 0;
  }
  onPanStart() {
    this.startX = this.swipeOffsetToCenter;
  }
  onPan(event) {
    event.preventDefault();
    const swipePercentageMax = 98;
    const swipePercentageMin = 2;
    const maxPercentage = 0.48;
    this.swipeOffsetToCenter = this.startX + event.deltaX;
    const screenSizePx = event.srcEvent.view.innerWidth - this.paddingSize;
    this.positionPx = screenSizePx / 2 + this.swipeOffsetToCenter;
    this.swipeValue = this.positionPx / screenSizePx * 100;
    const isDraggingButtonOutsideOnRight = this.swipeOffsetToCenter > maxPercentage * screenSizePx;
    const isDraggingButtonOutsideOnLeft = this.swipeOffsetToCenter < -maxPercentage * screenSizePx;
    if (isDraggingButtonOutsideOnRight) {
      this.swipeOffsetToCenter = maxPercentage * screenSizePx;
      this.swipeValue = swipePercentageMax;
    }
    if (isDraggingButtonOutsideOnLeft) {
      this.swipeOffsetToCenter = -maxPercentage * screenSizePx;
      this.swipeValue = swipePercentageMin;
    }
    this.map.instance.render();
  }
  static #_ = this.ɵfac = function SwipeComponent_Factory(t) {
    return new (t || SwipeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SwipeComponent,
    selectors: [["app-swipe"]],
    viewQuery: function SwipeComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.map = _t.first);
      }
    },
    hostBindings: function SwipeComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function SwipeComponent_resize_HostBindingHandler($event) {
          return ctx.onWindowResize($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
      }
    },
    decls: 12,
    vars: 9,
    consts: [["width", "100%", "height", "100%"], ["map", ""], [3, "zoom"], ["view", ""], [3, "x", "y", "srid"], [3, "opacity"], [3, "prerender", "postrender"], ["url", "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"], [1, "swipe-button", 3, "panstart", "panmove"]],
    template: function SwipeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-map", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "aol-interaction-default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "aol-view", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "aol-coordinate", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "aol-layer-tile", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "aol-source-osm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "aol-layer-tile", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "aol-source-xyz", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("panstart", function SwipeComponent_Template_button_panstart_10_listener() {
          return ctx.onPanStart();
        })("panmove", function SwipeComponent_Template_button_panmove_10_listener($event) {
          return ctx.onPan($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " <> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zoom", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", 2.181539)("y", 47.125488)("srid", "EPSG:4326");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opacity", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("prerender", ctx.prerenderFunction)("postrender", ctx.postrenderFunction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-left", ctx.swipeOffsetToCenter, "px");
      }
    },
    dependencies: [ngx_ol__WEBPACK_IMPORTED_MODULE_1__.MapComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.ViewComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.LayerTileComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.SourceOsmComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.SourceXYZComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.CoordinateComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.DefaultInteractionComponent],
    styles: [".swipe-button[_ngcontent-%COMP%] {\n        box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14),\n          0 1px 18px 0 rgba(0, 0, 0, 0.12);\n        background-color: #0a2340;\n        color: white;\n        cursor: pointer;\n        left: calc(50% - 27px);\n        position: absolute;\n        top: 60%;\n        box-sizing: border-box;\n        border: none;\n        display: inline-block;\n        white-space: nowrap;\n        text-decoration: none;\n        vertical-align: baseline;\n        text-align: center;\n        margin: 0;\n        line-height: 36px;\n        border-radius: 2px;\n        min-width: 0;\n        width: 40px;\n        height: 40px;\n      }\n    \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3dpcGUvc3dpcGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDTTtRQUNFOzBDQUNrQztRQUNsQyx5QkFBeUI7UUFDekIsWUFBWTtRQUNaLGVBQWU7UUFDZixzQkFBc0I7UUFDdEIsa0JBQWtCO1FBQ2xCLFFBQVE7UUFDUixzQkFBc0I7UUFDdEIsWUFBWTtRQUNaLHFCQUFxQjtRQUNyQixtQkFBbUI7UUFDbkIscUJBQXFCO1FBQ3JCLHdCQUF3QjtRQUN4QixrQkFBa0I7UUFDbEIsU0FBUztRQUNULGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLFdBQVc7UUFDWCxZQUFZO01BQ2QiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIC5zd2lwZS1idXR0b24ge1xuICAgICAgICBib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAgICAgICAgIDAgMXB4IDE4cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGEyMzQwO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgbGVmdDogY2FsYyg1MCUgLSAyN3B4KTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDYwJTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgbWluLXdpZHRoOiAwO1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgfVxuICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 2093:
/*!**************************************************!*\
  !*** ./src/app/tile-json/tile-json.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TileJsonComponent: () => (/* binding */ TileJsonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var ngx_ol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-ol */ 5587);


class TileJsonComponent {
  constructor() {}
  static #_ = this.ɵfac = function TileJsonComponent_Factory(t) {
    return new (t || TileJsonComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TileJsonComponent,
    selectors: [["app-tile-json"]],
    decls: 8,
    vars: 4,
    consts: [["width", "100%", "height", "100%"], ["map", ""], [3, "zoom"], [3, "x", "y", "srid"], ["url", "https://a.tiles.mapbox.com/v3/aj.1x1-degrees.json"]],
    template: function TileJsonComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-map", 0, 1)(2, "aol-view", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "aol-coordinate", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "aol-interaction-default")(5, "aol-control-defaults");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "aol-layer-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "aol-source-tilejson", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zoom", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", -2.269282)("y", 46.987247)("srid", "EPSG:4326");
      }
    },
    dependencies: [ngx_ol__WEBPACK_IMPORTED_MODULE_1__.MapComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.ViewComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.LayerTileComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.SourceTileJSONComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.CoordinateComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.DefaultControlComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_1__.DefaultInteractionComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 2999:
/*!**********************************************!*\
  !*** ./src/app/utfgrid/utfgrid.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UTFGridComponent: () => (/* binding */ UTFGridComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var ngx_ol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-ol */ 5587);



const _c0 = ["UTFGrid"];
const _c1 = ["view"];
function UTFGridComponent_aol_overlay_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-overlay", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "aol-coordinate", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "aol-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("positioning", "BOTTOM_RIGHT")("stopEvent", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", ctx_r2.coords[0])("y", ctx_r2.coords[1])("srid", "EPSG:3857");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "data:image/png;base64," + ctx_r2.info["flag_png"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
const _c2 = () => [3000000, 3000000];
class UTFGridComponent {
  constructor() {
    this.key = 'pk.eyJ1IjoieWFrb3VzdCIsImEiOiJjanVkc3Y0b2cwNWppM3lwaXd5M3JidHRzIn0.rJmuWPJnuKA9MJ9z5RPKZw';
  }
  displayInfo(c) {
    this.UTFGrid.instance.forDataAtCoordinateAndResolution(c, this.view.instance.getResolution(), data => {
      if (data !== null && data !== undefined && data !== '') {
        this.info = data;
        this.coords = c;
      }
    });
  }
  static #_ = this.ɵfac = function UTFGridComponent_Factory(t) {
    return new (t || UTFGridComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: UTFGridComponent,
    selectors: [["app-root"]],
    viewQuery: function UTFGridComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.UTFGrid = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.view = _t.first);
      }
    },
    decls: 12,
    vars: 5,
    consts: [[3, "pointerMove"], [3, "zoom", "center"], ["view", ""], [3, "url"], ["UTFGrid", ""], [3, "positioning", "stopEvent", 4, "ngIf"], [3, "positioning", "stopEvent"], [3, "x", "y", "srid"], [3, "src"]],
    template: function UTFGridComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-map", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pointerMove", function UTFGridComponent_Template_aol_map_pointerMove_0_listener($event) {
          return ctx.displayInfo($event.coordinate);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "aol-interaction-default")(2, "aol-control-defaults")(3, "aol-control-fullscreen")(4, "aol-view", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "aol-layer-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "aol-source-osm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "aol-layer-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "aol-source-utfgrid", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, UTFGridComponent_aol_overlay_11_Template, 4, 6, "aol-overlay", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zoom", 2)("center", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("url", "https://api.tiles.mapbox.com/v4/mapbox.geography-class.json?secure&access_token=" + ctx.key);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.coords && ctx.info);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.MapComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.ViewComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.LayerTileComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.SourceOsmComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.SourceUTFGridComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.CoordinateComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.DefaultControlComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.ControlFullScreenComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.DefaultInteractionComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.OverlayComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.ContentComponent],
    styles: ["[_nghost-%COMP%] {\n        height: 100%;\n        display: flex;\n      }\n\n      aol-map[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100%;\n      }\n    \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdXRmZ3JpZC91dGZncmlkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxZQUFZO1FBQ1osYUFBYTtNQUNmOztNQUVBO1FBQ0UsV0FBVztRQUNYLFlBQVk7TUFDZCIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgOmhvc3Qge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB9XG5cbiAgICAgIGFvbC1tYXAge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 5503:
/*!****************************************************************************!*\
  !*** ./src/app/view-projection-update/view-projection-update.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ViewProjectionUpdateComponent: () => (/* binding */ ViewProjectionUpdateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var ngx_ol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-ol */ 5587);



const _c0 = () => [0.5, 1];
class ViewProjectionUpdateComponent {
  constructor() {
    this.viewProjection = 'EPSG:3857';
  }
  projectionChange(evt) {
    console.log(`Projection changed to ${evt.target.value}`);
    this.viewProjection = evt.target.value;
  }
  static #_ = this.ɵfac = function ViewProjectionUpdateComponent_Factory(t) {
    return new (t || ViewProjectionUpdateComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ViewProjectionUpdateComponent,
    selectors: [["app-root"]],
    decls: 27,
    vars: 24,
    consts: [[3, "width", "height"], [3, "zoom", "projection"], [3, "x", "y", "srid"], [3, "radius"], [3, "color", "width"], [3, "color"], [3, "src", "anchor", "anchorXUnits", "anchorYUnits", "scale", "anchorOrigin"], [1, "controls"], [3, "change"], ["value", "EPSG:3857"], ["value", "EPSG:4326"]],
    template: function ViewProjectionUpdateComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-map", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "aol-interaction-default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "aol-view", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "aol-coordinate", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "aol-layer-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "aol-source-osm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "aol-layer-vector")(7, "aol-source-vector")(8, "aol-feature")(9, "aol-geometry-point");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "aol-coordinate", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "aol-style")(12, "aol-style-circle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "aol-style-stroke", 4)(14, "aol-style-fill", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "aol-feature")(16, "aol-geometry-point");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "aol-coordinate", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "aol-style");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "aol-style-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Current projection: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ViewProjectionUpdateComponent_Template_select_change_22_listener($event) {
          return ctx.projectionChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "EPSG:3857");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "EPSG:4326");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", "100%")("height", "100%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zoom", 2)("projection", ctx.viewProjection);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", 0)("y", 0)("srid", "EPSG:4326");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", 5)("y", 45)("srid", "EPSG:4326");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("radius", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "black")("width", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "green");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", 5.1)("y", 45.1)("srid", "EPSG:4326");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/marker.png")("anchor", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c0))("anchorXUnits", "fraction")("anchorYUnits", "fraction")("scale", 0.1)("anchorOrigin", "top-left");
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"], ngx_ol__WEBPACK_IMPORTED_MODULE_2__.MapComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.ViewComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.LayerTileComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.LayerVectorComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.SourceOsmComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.SourceVectorComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.FeatureComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.GeometryPointComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.CoordinateComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.StyleComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.StyleCircleComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.StyleFillComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.StyleIconComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.StyleStrokeComponent, ngx_ol__WEBPACK_IMPORTED_MODULE_2__.DefaultInteractionComponent],
    styles: ["[_nghost-%COMP%] {\n        height: 100%;\n        display: flex;\n      }\n\n      aol-map[_ngcontent-%COMP%] {\n        width: 70%;\n      }\n\n      .controls[_ngcontent-%COMP%] {\n        width: 28%;\n        padding: 1rem;\n      }\n    \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlldy1wcm9qZWN0aW9uLXVwZGF0ZS92aWV3LXByb2plY3Rpb24tdXBkYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxZQUFZO1FBQ1osYUFBYTtNQUNmOztNQUVBO1FBQ0UsVUFBVTtNQUNaOztNQUVBO1FBQ0UsVUFBVTtRQUNWLGFBQWE7TUFDZiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgOmhvc3Qge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB9XG5cbiAgICAgIGFvbC1tYXAge1xuICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgfVxuXG4gICAgICAuY29udHJvbHMge1xuICAgICAgICB3aWR0aDogMjglO1xuICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgfVxuICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ 4700);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ 8629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ 553);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule).catch(err => console.log(err));

/***/ }),

/***/ 5587:
/*!*************************************************!*\
  !*** ./dist/ngx-ol/fesm2022/achimha-ngx-ol.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AngularOpenlayersModule: () => (/* binding */ AngularOpenlayersModule),
/* harmony export */   AttributionComponent: () => (/* binding */ AttributionComponent),
/* harmony export */   AttributionsComponent: () => (/* binding */ AttributionsComponent),
/* harmony export */   CollectionCoordinatesComponent: () => (/* binding */ CollectionCoordinatesComponent),
/* harmony export */   ContentComponent: () => (/* binding */ ContentComponent),
/* harmony export */   ControlAttributionComponent: () => (/* binding */ ControlAttributionComponent),
/* harmony export */   ControlComponent: () => (/* binding */ ControlComponent),
/* harmony export */   ControlFullScreenComponent: () => (/* binding */ ControlFullScreenComponent),
/* harmony export */   ControlMousePositionComponent: () => (/* binding */ ControlMousePositionComponent),
/* harmony export */   ControlOverviewMapComponent: () => (/* binding */ ControlOverviewMapComponent),
/* harmony export */   ControlRotateComponent: () => (/* binding */ ControlRotateComponent),
/* harmony export */   ControlScaleLineComponent: () => (/* binding */ ControlScaleLineComponent),
/* harmony export */   ControlZoomComponent: () => (/* binding */ ControlZoomComponent),
/* harmony export */   ControlZoomSliderComponent: () => (/* binding */ ControlZoomSliderComponent),
/* harmony export */   ControlZoomToExtentComponent: () => (/* binding */ ControlZoomToExtentComponent),
/* harmony export */   CoordinateComponent: () => (/* binding */ CoordinateComponent),
/* harmony export */   DefaultControlComponent: () => (/* binding */ DefaultControlComponent),
/* harmony export */   DefaultInteractionComponent: () => (/* binding */ DefaultInteractionComponent),
/* harmony export */   DoubleClickZoomInteractionComponent: () => (/* binding */ DoubleClickZoomInteractionComponent),
/* harmony export */   DragAndDropInteractionComponent: () => (/* binding */ DragAndDropInteractionComponent),
/* harmony export */   DragBoxInteractionComponent: () => (/* binding */ DragBoxInteractionComponent),
/* harmony export */   DragPanInteractionComponent: () => (/* binding */ DragPanInteractionComponent),
/* harmony export */   DragRotateAndZoomInteractionComponent: () => (/* binding */ DragRotateAndZoomInteractionComponent),
/* harmony export */   DragRotateInteractionComponent: () => (/* binding */ DragRotateInteractionComponent),
/* harmony export */   DragZoomInteractionComponent: () => (/* binding */ DragZoomInteractionComponent),
/* harmony export */   DrawInteractionComponent: () => (/* binding */ DrawInteractionComponent),
/* harmony export */   FeatureComponent: () => (/* binding */ FeatureComponent),
/* harmony export */   FormatMVTComponent: () => (/* binding */ FormatMVTComponent),
/* harmony export */   GeometryCircleComponent: () => (/* binding */ GeometryCircleComponent),
/* harmony export */   GeometryLinestringComponent: () => (/* binding */ GeometryLinestringComponent),
/* harmony export */   GeometryMultiLinestringComponent: () => (/* binding */ GeometryMultiLinestringComponent),
/* harmony export */   GeometryMultiPointComponent: () => (/* binding */ GeometryMultiPointComponent),
/* harmony export */   GeometryMultiPolygonComponent: () => (/* binding */ GeometryMultiPolygonComponent),
/* harmony export */   GeometryPointComponent: () => (/* binding */ GeometryPointComponent),
/* harmony export */   GeometryPolygonComponent: () => (/* binding */ GeometryPolygonComponent),
/* harmony export */   GraticuleComponent: () => (/* binding */ GraticuleComponent),
/* harmony export */   KeyboardPanInteractionComponent: () => (/* binding */ KeyboardPanInteractionComponent),
/* harmony export */   KeyboardZoomInteractionComponent: () => (/* binding */ KeyboardZoomInteractionComponent),
/* harmony export */   LayerComponent: () => (/* binding */ LayerComponent),
/* harmony export */   LayerGroupComponent: () => (/* binding */ LayerGroupComponent),
/* harmony export */   LayerImageComponent: () => (/* binding */ LayerImageComponent),
/* harmony export */   LayerTileComponent: () => (/* binding */ LayerTileComponent),
/* harmony export */   LayerVectorComponent: () => (/* binding */ LayerVectorComponent),
/* harmony export */   LayerVectorTileComponent: () => (/* binding */ LayerVectorTileComponent),
/* harmony export */   MapComponent: () => (/* binding */ MapComponent),
/* harmony export */   ModifyInteractionComponent: () => (/* binding */ ModifyInteractionComponent),
/* harmony export */   MouseWheelZoomInteractionComponent: () => (/* binding */ MouseWheelZoomInteractionComponent),
/* harmony export */   OverlayComponent: () => (/* binding */ OverlayComponent),
/* harmony export */   PinchZoomInteractionComponent: () => (/* binding */ PinchZoomInteractionComponent),
/* harmony export */   SelectInteractionComponent: () => (/* binding */ SelectInteractionComponent),
/* harmony export */   SimpleGeometryComponent: () => (/* binding */ SimpleGeometryComponent),
/* harmony export */   SourceBingmapsComponent: () => (/* binding */ SourceBingmapsComponent),
/* harmony export */   SourceClusterComponent: () => (/* binding */ SourceClusterComponent),
/* harmony export */   SourceComponent: () => (/* binding */ SourceComponent),
/* harmony export */   SourceGeoJSONComponent: () => (/* binding */ SourceGeoJSONComponent),
/* harmony export */   SourceImageArcGISRestComponent: () => (/* binding */ SourceImageArcGISRestComponent),
/* harmony export */   SourceImageStaticComponent: () => (/* binding */ SourceImageStaticComponent),
/* harmony export */   SourceImageWMSComponent: () => (/* binding */ SourceImageWMSComponent),
/* harmony export */   SourceOsmComponent: () => (/* binding */ SourceOsmComponent),
/* harmony export */   SourceRasterComponent: () => (/* binding */ SourceRasterComponent),
/* harmony export */   SourceTileJSONComponent: () => (/* binding */ SourceTileJSONComponent),
/* harmony export */   SourceTileWMSComponent: () => (/* binding */ SourceTileWMSComponent),
/* harmony export */   SourceTileWMTSComponent: () => (/* binding */ SourceTileWMTSComponent),
/* harmony export */   SourceUTFGridComponent: () => (/* binding */ SourceUTFGridComponent),
/* harmony export */   SourceVectorComponent: () => (/* binding */ SourceVectorComponent),
/* harmony export */   SourceVectorTileComponent: () => (/* binding */ SourceVectorTileComponent),
/* harmony export */   SourceXYZComponent: () => (/* binding */ SourceXYZComponent),
/* harmony export */   StyleCircleComponent: () => (/* binding */ StyleCircleComponent),
/* harmony export */   StyleComponent: () => (/* binding */ StyleComponent),
/* harmony export */   StyleFillComponent: () => (/* binding */ StyleFillComponent),
/* harmony export */   StyleIconComponent: () => (/* binding */ StyleIconComponent),
/* harmony export */   StyleStrokeComponent: () => (/* binding */ StyleStrokeComponent),
/* harmony export */   StyleTextComponent: () => (/* binding */ StyleTextComponent),
/* harmony export */   TileGridComponent: () => (/* binding */ TileGridComponent),
/* harmony export */   TileGridWMTSComponent: () => (/* binding */ TileGridWMTSComponent),
/* harmony export */   TranslateInteractionComponent: () => (/* binding */ TranslateInteractionComponent),
/* harmony export */   ViewComponent: () => (/* binding */ ViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var ol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol */ 5814);
/* harmony import */ var ol__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol */ 2148);
/* harmony import */ var ol__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol */ 7696);
/* harmony import */ var ol_source__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/source */ 4664);
/* harmony import */ var ol_source__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ol/source */ 4620);
/* harmony import */ var ol_source__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ol/source */ 5780);
/* harmony import */ var ol_source__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ol/source */ 3797);
/* harmony import */ var ol_source__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ol/source */ 9778);
/* harmony import */ var ol_source__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ol/source */ 5541);
/* harmony import */ var ol_source__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ol/source */ 7129);
/* harmony import */ var ol_source__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ol/source */ 6558);
/* harmony import */ var ol_source__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ol/source */ 3756);
/* harmony import */ var ol_source__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ol/source */ 8782);
/* harmony import */ var ol_source__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ol/source */ 4735);
/* harmony import */ var ol_source__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ol/source */ 5839);
/* harmony import */ var ol_source__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ol/source */ 1757);
/* harmony import */ var ol_layer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/layer */ 3786);
/* harmony import */ var ol_layer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/layer */ 3395);
/* harmony import */ var ol_layer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/layer */ 1429);
/* harmony import */ var ol_layer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ol/layer */ 922);
/* harmony import */ var ol_layer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ol/layer */ 2585);
/* harmony import */ var ol_View__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/View */ 9186);
/* harmony import */ var ol_tilegrid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ol/tilegrid */ 7586);
/* harmony import */ var ol_tilegrid_TileGrid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ol/tilegrid/TileGrid */ 9890);
/* harmony import */ var ol_tilegrid_WMTS__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ol/tilegrid/WMTS */ 3907);
/* harmony import */ var ol_format__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ol/format */ 8625);
/* harmony import */ var ol_format__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ol/format */ 5977);
/* harmony import */ var ol_source_ImageArcGISRest__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ol/source/ImageArcGISRest */ 4040);
/* harmony import */ var ol_geom__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ol/geom */ 2796);
/* harmony import */ var ol_geom__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ol/geom */ 8789);
/* harmony import */ var ol_geom__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ol/geom */ 8265);
/* harmony import */ var ol_geom__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ol/geom */ 870);
/* harmony import */ var ol_geom__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ol/geom */ 282);
/* harmony import */ var ol_geom__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ol/geom */ 8746);
/* harmony import */ var ol_geom__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ol/geom */ 6646);
/* harmony import */ var ol_proj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ol/proj */ 6395);
/* harmony import */ var ol_Overlay__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ol/Overlay */ 7553);
/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ol/style */ 1832);
/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ol/style */ 6294);
/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ol/style */ 5536);
/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ol/style */ 9527);
/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ol/style */ 3587);
/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ol/style */ 2089);
/* harmony import */ var ol_control__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ol/control */ 5356);
/* harmony import */ var ol_control__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ol/control */ 4107);
/* harmony import */ var ol_control__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ol/control */ 8766);
/* harmony import */ var ol_control__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ol/control */ 7929);
/* harmony import */ var ol_control__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ol/control */ 2626);
/* harmony import */ var ol_control__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ol/control */ 7743);
/* harmony import */ var ol_control__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ol/control */ 3084);
/* harmony import */ var ol_control__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ol/control */ 975);
/* harmony import */ var ol_control__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ol/control */ 2101);
/* harmony import */ var ol_control__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ol/control */ 3383);
/* harmony import */ var ol_control_MousePosition__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ol/control/MousePosition */ 4439);
/* harmony import */ var ol_interaction__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ol/interaction */ 2194);
/* harmony import */ var ol_interaction__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ol/interaction */ 8038);
/* harmony import */ var ol_interaction__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ol/interaction */ 546);
/* harmony import */ var ol_interaction__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ol/interaction */ 5521);
/* harmony import */ var ol_interaction__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ol/interaction */ 4599);
/* harmony import */ var ol_interaction__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ol/interaction */ 7563);
/* harmony import */ var ol_interaction__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ol/interaction */ 140);
/* harmony import */ var ol_interaction__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ol/interaction */ 1910);
/* harmony import */ var ol_interaction__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ol/interaction */ 9720);
/* harmony import */ var ol_interaction__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ol/interaction */ 8415);
/* harmony import */ var ol_interaction__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ol/interaction */ 8934);
/* harmony import */ var ol_interaction__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ol/interaction */ 4843);
/* harmony import */ var ol_interaction__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ol/interaction */ 4952);
/* harmony import */ var ol_interaction__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ol/interaction */ 8597);
/* harmony import */ var ol_interaction__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ol/interaction */ 1338);
/* harmony import */ var ol_interaction__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ol/interaction */ 510);



















const _c0 = ["*"];
class MapComponent {
  constructor(host) {
    this.host = host;
    this.width = '100%';
    this.height = '100%';
    this.olChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.olChangeLayerGroup = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.olChangeSize = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.olChangeTarget = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.olChangeView = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.olClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.dblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.olError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.loadEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.loadStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.moveEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.moveStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.pointerDrag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.pointerMove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.olPostCompose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.olPostRender = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.olPreCompose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.olPropertyChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.postRender = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.propertyChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.singleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.componentType = 'map';
    // we pass empty arrays to not get default controls/interactions because we have our own directives
    this.controls = [];
    this.interactions = [];
  }
  ngOnInit() {
    // console.log('creating ol.Map instance with:', this);
    this.instance = new ol__WEBPACK_IMPORTED_MODULE_2__["default"](this);
    this.instance.setTarget(this.host.nativeElement.firstElementChild);
    this.instance.on('change', event => this.olChange.emit(event));
    this.instance.on('change:layergroup', event => this.olChangeLayerGroup.emit(event));
    this.instance.on('change:size', event => this.olChangeSize.emit(event));
    this.instance.on('change:target', event => this.olChangeTarget.emit(event));
    this.instance.on('change:view', event => this.olChangeView.emit(event));
    this.instance.on('click', event => this.olClick.emit(event));
    this.instance.on('dblclick', event => this.dblClick.emit(event));
    this.instance.on('error', event => this.olError.emit(event));
    this.instance.on('loadend', event => this.loadEnd.emit(event));
    this.instance.on('loadstart', event => this.loadStart.emit(event));
    this.instance.on('moveend', event => this.moveEnd.emit(event));
    this.instance.on('movestart', event => this.moveStart.emit(event));
    this.instance.on('pointerdrag', event => this.pointerDrag.emit(event));
    this.instance.on('pointermove', event => this.pointerMove.emit(event));
    this.instance.on('postcompose', event => this.olPostCompose.emit(event));
    this.instance.on('postrender', event => this.olPostRender.emit(event));
    this.instance.on('postrender', event => this.postRender.emit(event));
    this.instance.on('precompose', event => this.olPreCompose.emit(event));
    this.instance.on('propertychange', event => this.olPropertyChange.emit(event));
    this.instance.on('singleclick', event => this.singleClick.emit(event));
  }
  ngOnChanges(changes) {
    const properties = {};
    if (!this.instance) {
      return;
    }
    for (const key in changes) {
      if (changes.hasOwnProperty(key)) {
        properties[key] = changes[key].currentValue;
      }
    }
    // console.log('changes detected in aol-map, setting new properties: ', properties);
    this.instance.setProperties(properties, false);
  }
  ngAfterViewInit() {
    this.instance.updateSize();
  }
  static #_ = this.ɵfac = function MapComponent_Factory(t) {
    return new (t || MapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MapComponent,
    selectors: [["aol-map"]],
    inputs: {
      width: "width",
      height: "height",
      pixelRatio: "pixelRatio",
      keyboardEventTarget: "keyboardEventTarget",
      loadTilesWhileAnimating: "loadTilesWhileAnimating",
      loadTilesWhileInteracting: "loadTilesWhileInteracting",
      logo: "logo",
      renderer: "renderer"
    },
    outputs: {
      olChange: "olChange",
      olChangeLayerGroup: "olChangeLayerGroup",
      olChangeSize: "olChangeSize",
      olChangeTarget: "olChangeTarget",
      olChangeView: "olChangeView",
      olClick: "olClick",
      dblClick: "dblClick",
      olError: "olError",
      loadEnd: "loadEnd",
      loadStart: "loadStart",
      moveEnd: "moveEnd",
      moveStart: "moveStart",
      pointerDrag: "pointerDrag",
      pointerMove: "pointerMove",
      olPostCompose: "olPostCompose",
      olPostRender: "olPostRender",
      olPreCompose: "olPreCompose",
      olPropertyChange: "olPropertyChange",
      postRender: "postRender",
      propertyChange: "propertyChange",
      singleClick: "singleClick"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
    ngContentSelectors: _c0,
    decls: 2,
    vars: 4,
    template: function MapComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx.width)("height", ctx.height);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MapComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-map',
      template: `
    <div [style.width]="width" [style.height]="height"></div>
    <ng-content></ng-content>
  `
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
  }], {
    width: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    height: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    pixelRatio: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    keyboardEventTarget: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    loadTilesWhileAnimating: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    loadTilesWhileInteracting: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    logo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    renderer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    olChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    olChangeLayerGroup: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    olChangeSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    olChangeTarget: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    olChangeView: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    olClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    dblClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    olError: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    loadEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    loadStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    moveEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    moveStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    pointerDrag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    pointerMove: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    olPostCompose: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    olPostRender: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    olPreCompose: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    olPropertyChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    postRender: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    propertyChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    singleClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }]
  });
})();

// eslint-disable-next-line @angular-eslint/directive-class-suffix
class LayerComponent {
  constructor(host) {
    this.host = host;
    this.componentType = 'layer';
  }
  ngOnInit() {
    if (this.prerender !== null && this.prerender !== undefined) {
      this.instance.on('prerender', this.prerender);
    }
    if (this.postrender !== null && this.postrender !== undefined) {
      this.instance.on('postrender', this.postrender);
    }
    this.host.instance.getLayers().push(this.instance);
  }
  ngOnDestroy() {
    this.host.instance.getLayers().remove(this.instance);
  }
  ngOnChanges(changes) {
    const properties = {};
    if (!this.instance) {
      return;
    }
    for (const key in changes) {
      if (changes.hasOwnProperty(key)) {
        properties[key] = changes[key].currentValue;
        if (key === 'prerender') {
          this.instance.un('prerender', changes[key].previousValue);
          this.instance.on('prerender', changes[key].currentValue);
        }
        if (key === 'postrender') {
          this.instance.un('postrender', changes[key].previousValue);
          this.instance.on('postrender', changes[key].currentValue);
        }
      }
    }
    // console.log('changes detected in aol-layer, setting new properties: ', properties);
    this.instance.setProperties(properties, false);
  }
  static #_ = this.ɵfac = function LayerComponent_Factory(t) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinvalidFactory"]();
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: LayerComponent,
    inputs: {
      opacity: "opacity",
      visible: "visible",
      extent: "extent",
      zIndex: "zIndex",
      minResolution: "minResolution",
      maxResolution: "maxResolution",
      prerender: "prerender",
      postrender: "postrender"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LayerComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
  }], () => [{
    type: undefined
  }], {
    opacity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    extent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    zIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    minResolution: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    maxResolution: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    prerender: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    postrender: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

// eslint-disable-next-line @angular-eslint/directive-class-suffix
class SourceComponent {
  constructor(host) {
    this.host = host;
    this.componentType = 'source';
  }
  ngOnDestroy() {
    if (this.host && this.host.instance) {
      this.host.instance.setSource(null);
    }
  }
  register(s) {
    if (this.host) {
      this.host.instance.setSource(s);
    }
  }
  static #_ = this.ɵfac = function SourceComponent_Factory(t) {
    return new (t || SourceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LayerComponent));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: SourceComponent,
    inputs: {
      attributions: "attributions"
    }
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SourceComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
  }], () => [{
    type: LayerComponent
  }], {
    attributions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
class LayerGroupComponent extends LayerComponent {
  constructor(map, group) {
    super(group || map);
  }
  ngOnInit() {
    // console.log(`creating ol.layer.Group instance with:`, this);
    this.instance = new ol_layer__WEBPACK_IMPORTED_MODULE_3__["default"](this);
    super.ngOnInit();
  }
  static #_ = this.ɵfac = function LayerGroupComponent_Factory(t) {
    return new (t || LayerGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LayerGroupComponent, 12));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: LayerGroupComponent,
    selectors: [["aol-layer-group"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function LayerGroupComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LayerGroupComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-layer-group',
      template: ` <ng-content></ng-content> `
    }]
  }], () => [{
    type: MapComponent
  }, {
    type: LayerGroupComponent,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.SkipSelf
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
    }]
  }], null);
})();
class LayerVectorComponent extends LayerComponent {
  constructor(map, group) {
    super(group || map);
  }
  ngOnInit() {
    // console.log('creating ol.layer.Vector instance with:', this);
    this.instance = new ol_layer__WEBPACK_IMPORTED_MODULE_4__["default"](this);
    super.ngOnInit();
  }
  ngOnChanges(changes) {
    super.ngOnChanges(changes);
  }
  static #_ = this.ɵfac = function LayerVectorComponent_Factory(t) {
    return new (t || LayerVectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LayerGroupComponent, 8));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: LayerVectorComponent,
    selectors: [["aol-layer-vector"]],
    inputs: {
      renderBuffer: "renderBuffer",
      style: "style",
      updateWhileAnimating: "updateWhileAnimating",
      updateWhileInteracting: "updateWhileInteracting"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function LayerVectorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LayerVectorComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-layer-vector',
      template: ` <ng-content></ng-content> `
    }]
  }], () => [{
    type: MapComponent
  }, {
    type: LayerGroupComponent,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
    }]
  }], {
    renderBuffer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    updateWhileAnimating: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    updateWhileInteracting: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
class SourceVectorComponent extends SourceComponent {
  constructor(layer) {
    super(layer);
  }
  ngOnInit() {
    this.instance = new ol_source__WEBPACK_IMPORTED_MODULE_5__["default"](this);
    this.host.instance.setSource(this.instance);
  }
  static #_ = this.ɵfac = function SourceVectorComponent_Factory(t) {
    return new (t || SourceVectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LayerVectorComponent, 1));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SourceVectorComponent,
    selectors: [["aol-source-vector"]],
    inputs: {
      overlaps: "overlaps",
      useSpatialIndex: "useSpatialIndex",
      wrapX: "wrapX",
      url: "url",
      format: "format",
      strategy: "strategy"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
      provide: SourceComponent,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => SourceVectorComponent)
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function SourceVectorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SourceVectorComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-source-vector',
      template: ` <ng-content></ng-content> `,
      providers: [{
        provide: SourceComponent,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => SourceVectorComponent)
      }]
    }]
  }], () => [{
    type: LayerVectorComponent,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Host
    }]
  }], {
    overlaps: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    useSpatialIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    wrapX: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    url: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    format: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    strategy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
class FeatureComponent {
  constructor(host) {
    this.host = host;
    this.componentType = 'feature';
  }
  ngOnInit() {
    this.instance = new ol__WEBPACK_IMPORTED_MODULE_6__["default"]();
    if (this.id !== undefined) {
      this.instance.setId(this.id);
    }
    this.host.instance.addFeature(this.instance);
  }
  ngOnDestroy() {
    this.host.instance.removeFeature(this.instance);
  }
  ngOnChanges(changes) {
    if (this.instance) {
      this.instance.setId(this.id);
    }
  }
  static #_ = this.ɵfac = function FeatureComponent_Factory(t) {
    return new (t || FeatureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](SourceVectorComponent));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: FeatureComponent,
    selectors: [["aol-feature"]],
    inputs: {
      id: "id"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function FeatureComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FeatureComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-feature',
      template: ` <ng-content></ng-content> `
    }]
  }], () => [{
    type: SourceVectorComponent
  }], {
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

// eslint-disable-next-line @angular-eslint/directive-class-suffix
class SimpleGeometryComponent {
  constructor(map, host) {
    this.map = map;
    this.host = host;
    this.componentType = 'simple-geometry';
  }
  ngOnInit() {
    this.host.instance.setGeometry(this.instance);
  }
  static #_ = this.ɵfac = function SimpleGeometryComponent_Factory(t) {
    return new (t || SimpleGeometryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FeatureComponent));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: SimpleGeometryComponent,
    inputs: {
      srid: "srid"
    }
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SimpleGeometryComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
  }], () => [{
    type: MapComponent
  }, {
    type: FeatureComponent
  }], {
    srid: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
class ViewComponent {
  constructor(host) {
    this.host = host;
    this.zoomAnimation = false;
    this.olChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.changeCenter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.changeResolution = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.changeRotation = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.olError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.propertyChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.componentType = 'view';
  }
  ngOnInit() {
    // console.log('creating ol.View instance with: ', this);
    this.instance = new ol_View__WEBPACK_IMPORTED_MODULE_7__["default"](this);
    this.host.instance.setView(this.instance);
    this.instance.on('change', event => this.olChange.emit(event));
    this.instance.on('change:center', event => this.changeCenter.emit(event));
    this.instance.on('change:resolution', event => this.changeResolution.emit(event));
    this.instance.on('change:rotation', event => this.changeRotation.emit(event));
    this.instance.on('error', event => this.olError.emit(event));
    this.instance.on('propertychange', event => this.propertyChange.emit(event));
  }
  ngOnChanges(changes) {
    const properties = {};
    if (!this.instance) {
      return;
    }
    for (const key in changes) {
      if (changes.hasOwnProperty(key)) {
        switch (key) {
          case 'zoom':
            /** Work-around: setting the zoom via setProperties does not work. */
            if (this.zoomAnimation) {
              this.instance.animate({
                zoom: changes[key].currentValue
              });
            } else {
              this.instance.setZoom(changes[key].currentValue);
            }
            break;
          case 'projection':
            this.instance = new ol_View__WEBPACK_IMPORTED_MODULE_7__["default"](this);
            this.host.instance.setView(this.instance);
            break;
          case 'center':
            /** Work-around: setting the center via setProperties does not work. */
            this.instance.setCenter(changes[key].currentValue);
            break;
          default:
            break;
        }
        properties[key] = changes[key].currentValue;
      }
    }
    // console.log('changes detected in aol-view, setting new properties: ', properties);
    this.instance.setProperties(properties, false);
  }
  ngOnDestroy() {
    // console.log('removing aol-view');
  }
  static #_ = this.ɵfac = function ViewComponent_Factory(t) {
    return new (t || ViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ViewComponent,
    selectors: [["aol-view"]],
    inputs: {
      constrainRotation: "constrainRotation",
      enableRotation: "enableRotation",
      extent: "extent",
      maxResolution: "maxResolution",
      minResolution: "minResolution",
      maxZoom: "maxZoom",
      minZoom: "minZoom",
      resolution: "resolution",
      resolutions: "resolutions",
      rotation: "rotation",
      zoom: "zoom",
      zoomFactor: "zoomFactor",
      center: "center",
      projection: "projection",
      constrainOnlyCenter: "constrainOnlyCenter",
      smoothExtentConstraint: "smoothExtentConstraint",
      constrainResolution: "constrainResolution",
      smoothResolutionConstraint: "smoothResolutionConstraint",
      showFullExtent: "showFullExtent",
      multiWorld: "multiWorld",
      zoomAnimation: "zoomAnimation"
    },
    outputs: {
      olChange: "olChange",
      changeCenter: "changeCenter",
      changeResolution: "changeResolution",
      changeRotation: "changeRotation",
      olError: "olError",
      propertyChange: "propertyChange"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ViewComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-view',
      template: ` <ng-content></ng-content> `
    }]
  }], () => [{
    type: MapComponent
  }], {
    constrainRotation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    enableRotation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    extent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    maxResolution: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    minResolution: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    maxZoom: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    minZoom: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    resolution: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    resolutions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    rotation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    zoom: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    zoomFactor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    center: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    projection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    constrainOnlyCenter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    smoothExtentConstraint: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    constrainResolution: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    smoothResolutionConstraint: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    showFullExtent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    multiWorld: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    zoomAnimation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    olChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    changeCenter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    changeResolution: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    changeRotation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    olError: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    propertyChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }]
  });
})();
class GraticuleComponent {
  constructor(map) {
    this.map = map;
    this.componentType = 'graticule';
  }
  ngOnChanges(changes) {
    const properties = {};
    if (!this.instance) {
      return;
    }
    for (const key in changes) {
      if (changes.hasOwnProperty(key)) {
        properties[key] = changes[key].currentValue;
      }
    }
    if (properties) {
      this.instance = new ol__WEBPACK_IMPORTED_MODULE_8__["default"](properties);
    }
    this.instance.setMap(this.map.instance);
  }
  ngAfterContentInit() {
    this.instance = new ol__WEBPACK_IMPORTED_MODULE_8__["default"]({
      strokeStyle: this.strokeStyle,
      showLabels: this.showLabels,
      lonLabelPosition: this.lonLabelPosition,
      latLabelPosition: this.latLabelPosition
    });
    this.instance.setMap(this.map.instance);
  }
  ngOnDestroy() {
    this.instance.setMap(null);
  }
  static #_ = this.ɵfac = function GraticuleComponent_Factory(t) {
    return new (t || GraticuleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: GraticuleComponent,
    selectors: [["aol-graticule"]],
    inputs: {
      strokeStyle: "strokeStyle",
      showLabels: "showLabels",
      lonLabelPosition: "lonLabelPosition",
      latLabelPosition: "latLabelPosition"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function GraticuleComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GraticuleComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-graticule',
      template: '<ng-content></ng-content>'
    }]
  }], () => [{
    type: MapComponent
  }], {
    strokeStyle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    showLabels: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    lonLabelPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    latLabelPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
class LayerImageComponent extends LayerComponent {
  constructor(map, group) {
    super(group || map);
  }
  ngOnInit() {
    this.instance = new ol_layer__WEBPACK_IMPORTED_MODULE_9__["default"](this);
    super.ngOnInit();
  }
  ngOnChanges(changes) {
    super.ngOnChanges(changes);
  }
  static #_ = this.ɵfac = function LayerImageComponent_Factory(t) {
    return new (t || LayerImageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LayerGroupComponent, 8));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: LayerImageComponent,
    selectors: [["aol-layer-image"]],
    inputs: {
      opacity: "opacity",
      visible: "visible",
      extent: "extent",
      minResolution: "minResolution",
      maxResolution: "maxResolution",
      zIndex: "zIndex"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function LayerImageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LayerImageComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-layer-image',
      template: ` <ng-content></ng-content> `
    }]
  }], () => [{
    type: MapComponent
  }, {
    type: LayerGroupComponent,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
    }]
  }], {
    opacity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    extent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    minResolution: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    maxResolution: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    zIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
class LayerTileComponent extends LayerComponent {
  constructor(map, group) {
    super(group || map);
  }
  ngOnInit() {
    // console.log('creating ol.layer.Tile instance with:', this);
    this.instance = new ol_layer__WEBPACK_IMPORTED_MODULE_10__["default"](this);
    super.ngOnInit();
  }
  ngOnChanges(changes) {
    super.ngOnChanges(changes);
  }
  static #_ = this.ɵfac = function LayerTileComponent_Factory(t) {
    return new (t || LayerTileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LayerGroupComponent, 8));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: LayerTileComponent,
    selectors: [["aol-layer-tile"]],
    inputs: {
      preload: "preload",
      useInterimTilesOnError: "useInterimTilesOnError"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function LayerTileComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LayerTileComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-layer-tile',
      template: ` <ng-content></ng-content> `
    }]
  }], () => [{
    type: MapComponent
  }, {
    type: LayerGroupComponent,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
    }]
  }], {
    preload: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    useInterimTilesOnError: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
class LayerVectorTileComponent extends LayerComponent {
  constructor(map, group) {
    super(group || map);
  }
  ngOnInit() {
    // console.log('creating ol.layer.VectorTile instance with:', this);
    this.instance = new ol_layer__WEBPACK_IMPORTED_MODULE_11__["default"](this);
    super.ngOnInit();
  }
  ngOnChanges(changes) {
    super.ngOnChanges(changes);
  }
  static #_ = this.ɵfac = function LayerVectorTileComponent_Factory(t) {
    return new (t || LayerVectorTileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LayerGroupComponent, 8));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: LayerVectorTileComponent,
    selectors: [["aol-layer-vectortile"]],
    inputs: {
      renderBuffer: "renderBuffer",
      renderMode: "renderMode",
      renderOrder: "renderOrder",
      style: "style",
      updateWhileAnimating: "updateWhileAnimating",
      updateWhileInteracting: "updateWhileInteracting",
      visible: "visible"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function LayerVectorTileComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LayerVectorTileComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-layer-vectortile',
      template: ` <ng-content></ng-content> `
    }]
  }], () => [{
    type: MapComponent
  }, {
    type: LayerGroupComponent,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
    }]
  }], {
    renderBuffer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    renderMode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    renderOrder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    updateWhileAnimating: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    updateWhileInteracting: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
class TileGridComponent {
  ngOnInit() {
    if (!this.resolutions) {
      this.instance = (0,ol_tilegrid__WEBPACK_IMPORTED_MODULE_12__.createXYZ)(this);
    } else {
      this.instance = new ol_tilegrid_TileGrid__WEBPACK_IMPORTED_MODULE_13__["default"](this);
    }
  }
  ngOnChanges(changes) {
    if (!this.resolutions) {
      this.instance = (0,ol_tilegrid__WEBPACK_IMPORTED_MODULE_12__.createXYZ)(this);
    } else {
      this.instance = new ol_tilegrid_TileGrid__WEBPACK_IMPORTED_MODULE_13__["default"](this);
    }
  }
  static #_ = this.ɵfac = function TileGridComponent_Factory(t) {
    return new (t || TileGridComponent)();
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: TileGridComponent,
    selectors: [["aol-tilegrid"]],
    inputs: {
      extent: "extent",
      maxZoom: "maxZoom",
      minZoom: "minZoom",
      tileSize: "tileSize",
      origin: "origin",
      resolutions: "resolutions"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
    decls: 0,
    vars: 0,
    template: function TileGridComponent_Template(rf, ctx) {},
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TileGridComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-tilegrid',
      template: ''
    }]
  }], null, {
    extent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    maxZoom: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    minZoom: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    tileSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    origin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    resolutions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
class SourceXYZComponent extends SourceComponent {
  constructor(layer) {
    super(layer);
    this.layer = layer;
    this.tileLoadStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.tileLoadEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.tileLoadError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  ngAfterContentInit() {
    if (this.tileGridXYZ) {
      this.tileGrid = this.tileGridXYZ.instance;
    }
    this.init();
  }
  ngOnChanges(changes) {
    const properties = {};
    if (!this.instance) {
      return;
    }
    for (const key in changes) {
      if (changes.hasOwnProperty(key)) {
        properties[key] = changes[key].currentValue;
      }
    }
    this.instance.setProperties(properties, false);
    if (changes.hasOwnProperty('url')) {
      this.init();
    }
  }
  init() {
    this.instance = new ol_source__WEBPACK_IMPORTED_MODULE_14__["default"](this);
    this.instance.on('tileloadstart', event => this.tileLoadStart.emit(event));
    this.instance.on('tileloadend', event => this.tileLoadEnd.emit(event));
    this.instance.on('tileloaderror', event => this.tileLoadError.emit(event));
    this.register(this.instance);
  }
  static #_ = this.ɵfac = function SourceXYZComponent_Factory(t) {
    return new (t || SourceXYZComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LayerTileComponent, 9));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SourceXYZComponent,
    selectors: [["aol-source-xyz"]],
    contentQueries: function SourceXYZComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, TileGridComponent, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.tileGridXYZ = _t.first);
      }
    },
    inputs: {
      cacheSize: "cacheSize",
      crossOrigin: "crossOrigin",
      opaque: "opaque",
      projection: "projection",
      reprojectionErrorThreshold: "reprojectionErrorThreshold",
      minZoom: "minZoom",
      maxZoom: "maxZoom",
      tileGrid: "tileGrid",
      tileLoadFunction: "tileLoadFunction",
      tilePixelRatio: "tilePixelRatio",
      tileSize: "tileSize",
      tileUrlFunction: "tileUrlFunction",
      url: "url",
      urls: "urls",
      wrapX: "wrapX"
    },
    outputs: {
      tileLoadStart: "tileLoadStart",
      tileLoadEnd: "tileLoadEnd",
      tileLoadError: "tileLoadError"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
      provide: SourceComponent,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => SourceXYZComponent)
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function SourceXYZComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SourceXYZComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-source-xyz',
      template: ` <ng-content></ng-content> `,
      providers: [{
        provide: SourceComponent,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => SourceXYZComponent)
      }]
    }]
  }], () => [{
    type: LayerTileComponent,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Host
    }]
  }], {
    cacheSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    crossOrigin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    opaque: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    projection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    reprojectionErrorThreshold: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    minZoom: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    maxZoom: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    tileGrid: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    tileLoadFunction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    tilePixelRatio: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    tileSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    tileUrlFunction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    url: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    urls: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    wrapX: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    tileGridXYZ: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChild,
      args: [TileGridComponent, {
        static: false
      }]
    }],
    tileLoadStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    tileLoadEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    tileLoadError: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }]
  });
})();
class SourceOsmComponent extends SourceXYZComponent {
  constructor(layer) {
    super(layer);
    this.layer = layer;
    this.tileLoadStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.tileLoadEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.tileLoadError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  ngAfterContentInit() {
    if (this.tileGridXYZ) {
      this.tileGrid = this.tileGridXYZ.instance;
    }
    this.instance = new ol_source__WEBPACK_IMPORTED_MODULE_15__["default"](this);
    this.instance.on('tileloadstart', event => this.tileLoadStart.emit(event));
    this.instance.on('tileloadend', event => this.tileLoadEnd.emit(event));
    this.instance.on('tileloaderror', event => this.tileLoadError.emit(event));
    this.register(this.instance);
  }
  static #_ = this.ɵfac = function SourceOsmComponent_Factory(t) {
    return new (t || SourceOsmComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LayerTileComponent, 9));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SourceOsmComponent,
    selectors: [["aol-source-osm"]],
    inputs: {
      attributions: "attributions",
      cacheSize: "cacheSize",
      crossOrigin: "crossOrigin",
      maxZoom: "maxZoom",
      opaque: "opaque",
      reprojectionErrorThreshold: "reprojectionErrorThreshold",
      tileLoadFunction: "tileLoadFunction",
      url: "url",
      wrapX: "wrapX"
    },
    outputs: {
      tileLoadStart: "tileLoadStart",
      tileLoadEnd: "tileLoadEnd",
      tileLoadError: "tileLoadError"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
      provide: SourceComponent,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => SourceOsmComponent)
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
    decls: 1,
    vars: 0,
    consts: [[1, "aol-source-osm"]],
    template: function SourceOsmComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SourceOsmComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-source-osm',
      template: ` <div class="aol-source-osm"></div> `,
      providers: [{
        provide: SourceComponent,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => SourceOsmComponent)
      }]
    }]
  }], () => [{
    type: LayerTileComponent,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Host
    }]
  }], {
    attributions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    cacheSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    crossOrigin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    maxZoom: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    opaque: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    reprojectionErrorThreshold: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    tileLoadFunction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    url: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    wrapX: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    tileLoadStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    tileLoadEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    tileLoadError: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }]
  });
})();
class SourceBingmapsComponent extends SourceComponent {
  constructor(layer) {
    super(layer);
    this.imagerySet = 'Aerial';
  }
  ngOnInit() {
    this.instance = new ol_source__WEBPACK_IMPORTED_MODULE_16__["default"](this);
    this.host.instance.setSource(this.instance);
  }
  static #_ = this.ɵfac = function SourceBingmapsComponent_Factory(t) {
    return new (t || SourceBingmapsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LayerTileComponent, 1));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SourceBingmapsComponent,
    selectors: [["aol-source-bingmaps"]],
    inputs: {
      cacheSize: "cacheSize",
      hidpi: "hidpi",
      culture: "culture",
      key: "key",
      imagerySet: "imagerySet",
      maxZoom: "maxZoom",
      reprojectionErrorThreshold: "reprojectionErrorThreshold",
      tileLoadFunction: "tileLoadFunction",
      wrapX: "wrapX"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
      provide: SourceComponent,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => SourceBingmapsComponent)
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
    decls: 1,
    vars: 0,
    consts: [[1, "aol-source-bingmaps"]],
    template: function SourceBingmapsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SourceBingmapsComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-source-bingmaps',
      template: ` <div class="aol-source-bingmaps"></div> `,
      providers: [{
        provide: SourceComponent,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => SourceBingmapsComponent)
      }]
    }]
  }], () => [{
    type: LayerTileComponent,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Host
    }]
  }], {
    cacheSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    hidpi: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    culture: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    key: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    imagerySet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    maxZoom: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    reprojectionErrorThreshold: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    tileLoadFunction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    wrapX: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
class SourceClusterComponent extends SourceComponent {
  constructor(layer) {
    super(layer);
  }
  ngAfterContentInit() {
    this.source = this.sourceVectorComponent.instance;
    this.instance = new ol_source__WEBPACK_IMPORTED_MODULE_17__["default"](this);
    this.host.instance.setSource(this.instance);
  }
  ngOnChanges(changes) {
    if (this.instance && changes.hasOwnProperty('distance')) {
      this.instance.setDistance(this.distance);
    }
  }
  static #_ = this.ɵfac = function SourceClusterComponent_Factory(t) {
    return new (t || SourceClusterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LayerVectorComponent, 1));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SourceClusterComponent,
    selectors: [["aol-source-cluster"]],
    contentQueries: function SourceClusterComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, SourceVectorComponent, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sourceVectorComponent = _t.first);
      }
    },
    inputs: {
      distance: "distance",
      geometryFunction: "geometryFunction",
      wrapX: "wrapX"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
      provide: SourceComponent,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => SourceClusterComponent)
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function SourceClusterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SourceClusterComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-source-cluster',
      template: ` <ng-content></ng-content> `,
      providers: [{
        provide: SourceComponent,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => SourceClusterComponent)
      }]
    }]
  }], () => [{
    type: LayerVectorComponent,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Host
    }]
  }], {
    distance: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    geometryFunction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    wrapX: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    sourceVectorComponent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChild,
      args: [SourceVectorComponent, {
        static: false
      }]
    }]
  });
})();
class TileGridWMTSComponent extends TileGridComponent {
  ngOnInit() {
    this.instance = new ol_tilegrid_WMTS__WEBPACK_IMPORTED_MODULE_18__["default"](this);
  }
  static #_ = this.ɵfac = /* @__PURE__ */(() => {
    let ɵTileGridWMTSComponent_BaseFactory;
    return function TileGridWMTSComponent_Factory(t) {
      return (ɵTileGridWMTSComponent_BaseFactory || (ɵTileGridWMTSComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](TileGridWMTSComponent)))(t || TileGridWMTSComponent);
    };
  })();
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: TileGridWMTSComponent,
    selectors: [["aol-tilegrid-wmts"]],
    inputs: {
      origin: "origin",
      origins: "origins",
      resolutions: "resolutions",
      matrixIds: "matrixIds",
      sizes: "sizes",
      tileSizes: "tileSizes",
      widths: "widths"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
    decls: 0,
    vars: 0,
    template: function TileGridWMTSComponent_Template(rf, ctx) {},
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TileGridWMTSComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-tilegrid-wmts',
      template: ''
    }]
  }], null, {
    origin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    origins: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    resolutions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    matrixIds: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    sizes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    tileSizes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    widths: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
class SourceTileWMTSComponent extends SourceComponent {
  constructor(layer) {
    super(layer);
    this.tileLoadStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.tileLoadEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.tileLoadError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  ngOnChanges(changes) {
    const properties = {};
    if (!this.instance) {
      return;
    }
    for (const key in changes) {
      if (changes.hasOwnProperty(key)) {
        switch (key) {
          case 'url':
            this.url = changes[key].currentValue;
            this.setLayerSource();
            break;
          default:
            break;
        }
        properties[key] = changes[key].currentValue;
      }
    }
    this.instance.setProperties(properties, false);
  }
  setLayerSource() {
    this.instance = new ol_source__WEBPACK_IMPORTED_MODULE_19__["default"](this);
    this.instance.on('tileloadstart', event => this.tileLoadStart.emit(event));
    this.instance.on('tileloadend', event => this.tileLoadEnd.emit(event));
    this.instance.on('tileloaderror', event => this.tileLoadError.emit(event));
    this.host.instance.setSource(this.instance);
  }
  ngAfterContentInit() {
    if (this.tileGridWMTS) {
      this.tileGrid = this.tileGridWMTS.instance;
      this.setLayerSource();
    }
  }
  static #_ = this.ɵfac = function SourceTileWMTSComponent_Factory(t) {
    return new (t || SourceTileWMTSComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LayerTileComponent, 1));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SourceTileWMTSComponent,
    selectors: [["aol-source-tilewmts"]],
    contentQueries: function SourceTileWMTSComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, TileGridWMTSComponent, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.tileGridWMTS = _t.first);
      }
    },
    inputs: {
      cacheSize: "cacheSize",
      crossOrigin: "crossOrigin",
      tileGrid: "tileGrid",
      projection: "projection",
      reprojectionErrorThreshold: "reprojectionErrorThreshold",
      requestEncoding: "requestEncoding",
      layer: "layer",
      style: "style",
      tileClass: "tileClass",
      tilePixelRatio: "tilePixelRatio",
      version: "version",
      format: "format",
      matrixSet: "matrixSet",
      dimensions: "dimensions",
      url: "url",
      tileLoadFunction: "tileLoadFunction",
      urls: "urls",
      wrapX: "wrapX"
    },
    outputs: {
      tileLoadStart: "tileLoadStart",
      tileLoadEnd: "tileLoadEnd",
      tileLoadError: "tileLoadError"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
      provide: SourceComponent,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => SourceTileWMTSComponent)
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function SourceTileWMTSComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SourceTileWMTSComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-source-tilewmts',
      template: ` <ng-content></ng-content> `,
      providers: [{
        provide: SourceComponent,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => SourceTileWMTSComponent)
      }]
    }]
  }], () => [{
    type: LayerTileComponent,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Host
    }]
  }], {
    cacheSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    crossOrigin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    tileGrid: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    projection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    reprojectionErrorThreshold: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    requestEncoding: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    layer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    tileClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    tilePixelRatio: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    version: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    format: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    matrixSet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    dimensions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    url: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    tileLoadFunction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    urls: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    wrapX: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    tileLoadStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    tileLoadEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    tileLoadError: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    tileGridWMTS: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChild,
      args: [TileGridWMTSComponent, {
        static: false
      }]
    }]
  });
})();
class FormatComponent {
  constructor() {
    this.componentType = 'format';
  }
}
class SourceVectorTileComponent extends SourceComponent {
  constructor(layer) {
    super(layer);
  }
  /* need the children to construct the OL3 object */
  ngAfterContentInit() {
    this.format = this.formatComponent.instance;
    this.tileGrid = this.tileGridComponent.instance;
    // console.log('creating ol.source.VectorTile instance with:', this);
    this.instance = new ol_source__WEBPACK_IMPORTED_MODULE_20__["default"](this);
    this.host.instance.setSource(this.instance);
  }
  static #_ = this.ɵfac = function SourceVectorTileComponent_Factory(t) {
    return new (t || SourceVectorTileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LayerVectorTileComponent, 1));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SourceVectorTileComponent,
    selectors: [["aol-source-vectortile"]],
    contentQueries: function SourceVectorTileComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, FormatComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, TileGridComponent, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.formatComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.tileGridComponent = _t.first);
      }
    },
    inputs: {
      cacheSize: "cacheSize",
      overlaps: "overlaps",
      projection: "projection",
      tilePixelRatio: "tilePixelRatio",
      tileUrlFunction: "tileUrlFunction",
      url: "url",
      urls: "urls",
      wrapX: "wrapX"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
      provide: SourceComponent,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => SourceVectorTileComponent)
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function SourceVectorTileComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SourceVectorTileComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-source-vectortile',
      template: ` <ng-content></ng-content> `,
      providers: [{
        provide: SourceComponent,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => SourceVectorTileComponent)
      }]
    }]
  }], () => [{
    type: LayerVectorTileComponent,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Host
    }]
  }], {
    cacheSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    overlaps: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    projection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    tilePixelRatio: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    tileUrlFunction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    url: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    urls: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    wrapX: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    formatComponent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChild,
      args: [FormatComponent, {
        static: false
      }]
    }],
    tileGridComponent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChild,
      args: [TileGridComponent, {
        static: false
      }]
    }]
  });
})();
class SourceTileWMSComponent extends SourceComponent {
  constructor(layer) {
    super(layer);
  }
  ngOnInit() {
    this.instance = new ol_source__WEBPACK_IMPORTED_MODULE_21__["default"](this);
    this.host.instance.setSource(this.instance);
  }
  ngOnChanges(changes) {
    if (this.instance && changes.hasOwnProperty('params')) {
      this.instance.updateParams(this.params);
    }
  }
  static #_ = this.ɵfac = function SourceTileWMSComponent_Factory(t) {
    return new (t || SourceTileWMSComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LayerTileComponent, 1));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SourceTileWMSComponent,
    selectors: [["aol-source-tilewms"]],
    inputs: {
      cacheSize: "cacheSize",
      crossOrigin: "crossOrigin",
      gutter: "gutter",
      hidpi: "hidpi",
      params: "params",
      projection: "projection",
      reprojectionErrorThreshold: "reprojectionErrorThreshold",
      serverType: "serverType",
      tileGrid: "tileGrid",
      tileLoadFunction: "tileLoadFunction",
      url: "url",
      urls: "urls",
      wrapX: "wrapX"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
      provide: SourceComponent,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => SourceTileWMSComponent)
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function SourceTileWMSComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SourceTileWMSComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-source-tilewms',
      template: ` <ng-content></ng-content> `,
      providers: [{
        provide: SourceComponent,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => SourceTileWMSComponent)
      }]
    }]
  }], () => [{
    type: LayerTileComponent,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Host
    }]
  }], {
    cacheSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    crossOrigin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    gutter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    hidpi: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    params: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    projection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    reprojectionErrorThreshold: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    serverType: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    tileGrid: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    tileLoadFunction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    url: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    urls: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    wrapX: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
class SourceTileJSONComponent extends SourceComponent {
  constructor(layer) {
    super(layer);
  }
  ngOnInit() {
    this.instance = new ol_source__WEBPACK_IMPORTED_MODULE_22__["default"](this);
    this.host.instance.setSource(this.instance);
  }
  static #_ = this.ɵfac = function SourceTileJSONComponent_Factory(t) {
    return new (t || SourceTileJSONComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LayerTileComponent, 1));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SourceTileJSONComponent,
    selectors: [["aol-source-tilejson"]],
    inputs: {
      url: "url"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
      provide: SourceComponent,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => SourceTileJSONComponent)
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function SourceTileJSONComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SourceTileJSONComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-source-tilejson',
      template: ` <ng-content></ng-content> `,
      providers: [{
        provide: SourceComponent,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => SourceTileJSONComponent)
      }]
    }]
  }], () => [{
    type: LayerTileComponent,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Host
    }]
  }], {
    url: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
class SourceGeoJSONComponent extends SourceComponent {
  constructor(layer) {
    super(layer);
  }
  ngOnInit() {
    this.format = new ol_format__WEBPACK_IMPORTED_MODULE_23__["default"](this);
    this.instance = new ol_source__WEBPACK_IMPORTED_MODULE_5__["default"](this);
    this.host.instance.setSource(this.instance);
  }
  static #_ = this.ɵfac = function SourceGeoJSONComponent_Factory(t) {
    return new (t || SourceGeoJSONComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LayerVectorComponent, 1));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SourceGeoJSONComponent,
    selectors: [["aol-source-geojson"]],
    inputs: {
      defaultDataProjection: "defaultDataProjection",
      featureProjection: "featureProjection",
      geometryName: "geometryName",
      url: "url"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
      provide: SourceComponent,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => SourceGeoJSONComponent)
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function SourceGeoJSONComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SourceGeoJSONComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-source-geojson',
      template: ` <ng-content></ng-content> `,
      providers: [{
        provide: SourceComponent,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => SourceGeoJSONComponent)
      }]
    }]
  }], () => [{
    type: LayerVectorComponent,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Host
    }]
  }], {
    defaultDataProjection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    featureProjection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    geometryName: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    url: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
class SourceImageStaticComponent extends SourceComponent {
  constructor(layer) {
    super(layer);
    this.imageLoadStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.imageLoadEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.imageLoadError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  setLayerSource() {
    this.instance = new ol_source__WEBPACK_IMPORTED_MODULE_24__["default"](this);
    this.host.instance.setSource(this.instance);
    this.instance.on('imageloadstart', event => this.imageLoadStart.emit(event));
    this.instance.on('imageloadend', event => this.imageLoadEnd.emit(event));
    this.instance.on('imageloaderror', event => this.imageLoadError.emit(event));
  }
  ngOnInit() {
    this.setLayerSource();
  }
  ngOnChanges(changes) {
    const properties = {};
    if (!this.instance) {
      return;
    }
    for (const key in changes) {
      if (changes.hasOwnProperty(key)) {
        switch (key) {
          case 'url':
            this.url = changes[key].currentValue;
            this.setLayerSource();
            break;
          default:
            break;
        }
        properties[key] = changes[key].currentValue;
      }
    }
    this.instance.setProperties(properties, false);
  }
  static #_ = this.ɵfac = function SourceImageStaticComponent_Factory(t) {
    return new (t || SourceImageStaticComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LayerImageComponent, 1));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SourceImageStaticComponent,
    selectors: [["aol-source-imagestatic"]],
    inputs: {
      projection: "projection",
      imageExtent: "imageExtent",
      url: "url",
      attributions: "attributions",
      crossOrigin: "crossOrigin",
      imageLoadFunction: "imageLoadFunction",
      imageSize: "imageSize"
    },
    outputs: {
      imageLoadStart: "imageLoadStart",
      imageLoadEnd: "imageLoadEnd",
      imageLoadError: "imageLoadError"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
      provide: SourceComponent,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => SourceImageStaticComponent)
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function SourceImageStaticComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SourceImageStaticComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-source-imagestatic',
      template: ` <ng-content></ng-content> `,
      providers: [{
        provide: SourceComponent,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => SourceImageStaticComponent)
      }]
    }]
  }], () => [{
    type: LayerImageComponent,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Host
    }]
  }], {
    projection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    imageExtent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    url: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    attributions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    crossOrigin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    imageLoadFunction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    imageSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    imageLoadStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    imageLoadEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    imageLoadError: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }]
  });
})();
class SourceImageWMSComponent extends SourceComponent {
  constructor(layer) {
    super(layer);
    this.imageLoadStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.imageLoadEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.imageLoadError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  ngOnInit() {
    this.instance = new ol_source__WEBPACK_IMPORTED_MODULE_25__["default"](this);
    this.host.instance.setSource(this.instance);
    this.instance.on('imageloadstart', event => this.imageLoadStart.emit(event));
    this.instance.on('imageloadend', event => this.imageLoadEnd.emit(event));
    this.instance.on('imageloaderror', event => this.imageLoadError.emit(event));
  }
  ngOnChanges(changes) {
    if (this.instance && changes.hasOwnProperty('params')) {
      this.instance.updateParams(this.params);
    }
  }
  static #_ = this.ɵfac = function SourceImageWMSComponent_Factory(t) {
    return new (t || SourceImageWMSComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LayerImageComponent, 1));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SourceImageWMSComponent,
    selectors: [["aol-source-imagewms"]],
    inputs: {
      attributions: "attributions",
      crossOrigin: "crossOrigin",
      hidpi: "hidpi",
      serverType: "serverType",
      imageLoadFunction: "imageLoadFunction",
      params: "params",
      projection: "projection",
      ratio: "ratio",
      resolutions: "resolutions",
      url: "url"
    },
    outputs: {
      imageLoadStart: "imageLoadStart",
      imageLoadEnd: "imageLoadEnd",
      imageLoadError: "imageLoadError"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
      provide: SourceComponent,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => SourceImageWMSComponent)
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function SourceImageWMSComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SourceImageWMSComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-source-imagewms',
      template: ` <ng-content></ng-content> `,
      providers: [{
        provide: SourceComponent,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => SourceImageWMSComponent)
      }]
    }]
  }], () => [{
    type: LayerImageComponent,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Host
    }]
  }], {
    attributions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    crossOrigin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    hidpi: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    serverType: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    imageLoadFunction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    params: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    projection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    ratio: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    resolutions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    url: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    imageLoadStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    imageLoadEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    imageLoadError: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }]
  });
})();
class SourceImageArcGISRestComponent extends SourceComponent {
  constructor(layer) {
    super(layer);
    this.ratio = 1.5;
    this.imageLoadStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.imageLoadEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.imageLoadError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  ngOnInit() {
    this.instance = new ol_source_ImageArcGISRest__WEBPACK_IMPORTED_MODULE_26__["default"](this);
    this.host.instance.setSource(this.instance);
    this.instance.on('imageloadstart', event => this.imageLoadStart.emit(event));
    this.instance.on('imageloadend', event => this.imageLoadEnd.emit(event));
    this.instance.on('imageloaderror', event => this.imageLoadError.emit(event));
  }
  ngOnChanges(changes) {
    if (this.instance && changes.hasOwnProperty('params')) {
      this.instance.updateParams(this.params);
    }
  }
  static #_ = this.ɵfac = function SourceImageArcGISRestComponent_Factory(t) {
    return new (t || SourceImageArcGISRestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LayerImageComponent, 1));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SourceImageArcGISRestComponent,
    selectors: [["aol-source-imagearcgisrest"]],
    inputs: {
      projection: "projection",
      url: "url",
      attributions: "attributions",
      crossOrigin: "crossOrigin",
      imageLoadFunction: "imageLoadFunction",
      params: "params",
      ratio: "ratio",
      resolutions: "resolutions",
      wrapX: "wrapX"
    },
    outputs: {
      imageLoadStart: "imageLoadStart",
      imageLoadEnd: "imageLoadEnd",
      imageLoadError: "imageLoadError"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
      provide: SourceComponent,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => SourceImageArcGISRestComponent)
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function SourceImageArcGISRestComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SourceImageArcGISRestComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-source-imagearcgisrest',
      template: ` <ng-content></ng-content> `,
      providers: [{
        provide: SourceComponent,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => SourceImageArcGISRestComponent)
      }]
    }]
  }], () => [{
    type: LayerImageComponent,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Host
    }]
  }], {
    projection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    url: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    attributions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    crossOrigin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    imageLoadFunction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    params: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    ratio: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    resolutions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    wrapX: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    imageLoadStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    imageLoadEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    imageLoadError: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }]
  });
})();
class SourceRasterComponent extends SourceComponent {
  set source(sourceComponent) {
    this.sources = [sourceComponent.instance];
    if (this.instance) {
      // Openlayer doesn't handle sources update. Just recreate Raster instance.
      this.init();
    }
  }
  constructor(layer) {
    super(layer);
    this.beforeOperations = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.afterOperations = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.sources = [];
  }
  ngAfterContentInit() {
    this.init();
  }
  init() {
    this.instance = new ol_source__WEBPACK_IMPORTED_MODULE_27__["default"](this);
    this.instance.on('beforeoperations', event => this.beforeOperations.emit(event));
    this.instance.on('afteroperations', event => this.afterOperations.emit(event));
    this.register(this.instance);
  }
  static #_ = this.ɵfac = function SourceRasterComponent_Factory(t) {
    return new (t || SourceRasterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LayerImageComponent, 1));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SourceRasterComponent,
    selectors: [["aol-source-raster"]],
    contentQueries: function SourceRasterComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, SourceComponent, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.source = _t.first);
      }
    },
    inputs: {
      operation: "operation",
      threads: "threads",
      lib: "lib",
      operationType: "operationType"
    },
    outputs: {
      beforeOperations: "beforeOperations",
      afterOperations: "afterOperations"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
      provide: SourceComponent,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => SourceRasterComponent)
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function SourceRasterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SourceRasterComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-source-raster',
      template: ` <ng-content></ng-content> `,
      providers: [{
        provide: SourceComponent,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => SourceRasterComponent)
      }]
    }]
  }], () => [{
    type: LayerImageComponent,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Host
    }]
  }], {
    operation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    threads: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    lib: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    operationType: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    beforeOperations: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    afterOperations: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    source: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChild,
      args: [SourceComponent, {
        static: false
      }]
    }]
  });
})();
class GeometryCircleComponent extends SimpleGeometryComponent {
  get radius() {
    return this.instance.getRadius();
  }
  set radius(radius) {
    this.instance.setRadius(radius);
  }
  constructor(map, host) {
    super(map, host);
    this.componentType = 'geometry-circle';
    // defaulting coordinates to [0,0]. To be overridden in child component.
    this.instance = new ol_geom__WEBPACK_IMPORTED_MODULE_28__["default"]([0, 0]);
  }
  static #_ = this.ɵfac = function GeometryCircleComponent_Factory(t) {
    return new (t || GeometryCircleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FeatureComponent));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: GeometryCircleComponent,
    selectors: [["aol-geometry-circle"]],
    inputs: {
      radius: "radius"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function GeometryCircleComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GeometryCircleComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-geometry-circle',
      template: ` <ng-content></ng-content> `
    }]
  }], () => [{
    type: MapComponent
  }, {
    type: FeatureComponent
  }], {
    radius: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
class GeometryLinestringComponent extends SimpleGeometryComponent {
  constructor(map, host) {
    super(map, host);
    this.componentType = 'geometry-linestring';
  }
  ngOnInit() {
    this.instance = new ol_geom__WEBPACK_IMPORTED_MODULE_29__["default"]([[0, 0], [1, 1]]);
    super.ngOnInit();
  }
  static #_ = this.ɵfac = function GeometryLinestringComponent_Factory(t) {
    return new (t || GeometryLinestringComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FeatureComponent));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: GeometryLinestringComponent,
    selectors: [["aol-geometry-linestring"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function GeometryLinestringComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GeometryLinestringComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-geometry-linestring',
      template: ` <ng-content></ng-content> `
    }]
  }], () => [{
    type: MapComponent
  }, {
    type: FeatureComponent
  }], null);
})();
class GeometryMultiLinestringComponent extends SimpleGeometryComponent {
  constructor(map, host) {
    super(map, host);
    this.componentType = 'geometry-multilinestring';
  }
  ngOnInit() {
    this.instance = new ol_geom__WEBPACK_IMPORTED_MODULE_30__["default"]([[[0, 0], [1, 1]]]);
    super.ngOnInit();
  }
  static #_ = this.ɵfac = function GeometryMultiLinestringComponent_Factory(t) {
    return new (t || GeometryMultiLinestringComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FeatureComponent));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: GeometryMultiLinestringComponent,
    selectors: [["aol-geometry-multilinestring"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function GeometryMultiLinestringComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GeometryMultiLinestringComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-geometry-multilinestring',
      template: ` <ng-content></ng-content> `
    }]
  }], () => [{
    type: MapComponent
  }, {
    type: FeatureComponent
  }], null);
})();
class GeometryMultiPointComponent extends SimpleGeometryComponent {
  constructor(map, host) {
    super(map, host);
    this.componentType = 'geometry-multipoint';
  }
  ngOnInit() {
    this.instance = new ol_geom__WEBPACK_IMPORTED_MODULE_31__["default"]([[0, 0], [1, 1]]);
    super.ngOnInit();
  }
  static #_ = this.ɵfac = function GeometryMultiPointComponent_Factory(t) {
    return new (t || GeometryMultiPointComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FeatureComponent));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: GeometryMultiPointComponent,
    selectors: [["aol-geometry-multipoint"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function GeometryMultiPointComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GeometryMultiPointComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-geometry-multipoint',
      template: ` <ng-content></ng-content> `
    }]
  }], () => [{
    type: MapComponent
  }, {
    type: FeatureComponent
  }], null);
})();
class GeometryMultiPolygonComponent extends SimpleGeometryComponent {
  constructor(map, host) {
    super(map, host);
    this.componentType = 'geometry-multipolygon';
  }
  ngOnInit() {
    this.instance = new ol_geom__WEBPACK_IMPORTED_MODULE_32__["default"]([[[[0, 0], [1, 1], [0, 1]]]]);
    super.ngOnInit();
  }
  static #_ = this.ɵfac = function GeometryMultiPolygonComponent_Factory(t) {
    return new (t || GeometryMultiPolygonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FeatureComponent));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: GeometryMultiPolygonComponent,
    selectors: [["aol-geometry-multipolygon"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function GeometryMultiPolygonComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GeometryMultiPolygonComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-geometry-multipolygon',
      template: ` <ng-content></ng-content> `
    }]
  }], () => [{
    type: MapComponent
  }, {
    type: FeatureComponent
  }], null);
})();
class GeometryPointComponent extends SimpleGeometryComponent {
  constructor(map, host) {
    super(map, host);
    this.componentType = 'geometry-point';
  }
  ngOnInit() {
    this.instance = new ol_geom__WEBPACK_IMPORTED_MODULE_33__["default"]([0, 0]);
    super.ngOnInit();
  }
  static #_ = this.ɵfac = function GeometryPointComponent_Factory(t) {
    return new (t || GeometryPointComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FeatureComponent));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: GeometryPointComponent,
    selectors: [["aol-geometry-point"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function GeometryPointComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GeometryPointComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-geometry-point',
      template: ` <ng-content></ng-content> `
    }]
  }], () => [{
    type: MapComponent
  }, {
    type: FeatureComponent
  }], null);
})();
class GeometryPolygonComponent extends SimpleGeometryComponent {
  constructor(map, host) {
    super(map, host);
    this.componentType = 'geometry-polygon';
  }
  ngOnInit() {
    this.instance = new ol_geom__WEBPACK_IMPORTED_MODULE_34__["default"]([[[0, 0], [1, 1], [0, 1]]]);
    super.ngOnInit();
  }
  static #_ = this.ɵfac = function GeometryPolygonComponent_Factory(t) {
    return new (t || GeometryPolygonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FeatureComponent));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: GeometryPolygonComponent,
    selectors: [["aol-geometry-polygon"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function GeometryPolygonComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GeometryPolygonComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-geometry-polygon',
      template: ` <ng-content></ng-content> `
    }]
  }], () => [{
    type: MapComponent
  }, {
    type: FeatureComponent
  }], null);
})();
class ContentComponent {
  constructor(elementRef) {
    this.elementRef = elementRef;
  }
  static #_ = this.ɵfac = function ContentComponent_Factory(t) {
    return new (t || ContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ContentComponent,
    selectors: [["aol-content"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ContentComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ContentComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-content',
      template: '<ng-content></ng-content>'
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
  }], null);
})();
class OverlayComponent {
  constructor(map) {
    this.map = map;
    this.componentType = 'overlay';
  }
  ngOnInit() {
    if (this.content) {
      this.element = this.content.elementRef.nativeElement;
      this.instance = new ol_Overlay__WEBPACK_IMPORTED_MODULE_35__["default"](this);
      this.map.instance.addOverlay(this.instance);
    }
  }
  ngOnDestroy() {
    if (this.instance) {
      this.map.instance.removeOverlay(this.instance);
    }
  }
  static #_ = this.ɵfac = function OverlayComponent_Factory(t) {
    return new (t || OverlayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: OverlayComponent,
    selectors: [["aol-overlay"]],
    contentQueries: function OverlayComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, ContentComponent, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
      }
    },
    inputs: {
      id: "id",
      offset: "offset",
      positioning: "positioning",
      stopEvent: "stopEvent",
      insertFirst: "insertFirst",
      autoPan: "autoPan",
      autoPanAnimation: "autoPanAnimation",
      autoPanMargin: "autoPanMargin"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function OverlayComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OverlayComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-overlay',
      template: '<ng-content></ng-content>'
    }]
  }], () => [{
    type: MapComponent
  }], {
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChild,
      args: [ContentComponent, {
        static: true
      }]
    }],
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    offset: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    positioning: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    stopEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    insertFirst: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    autoPan: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    autoPanAnimation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    autoPanMargin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
class CoordinateComponent {
  constructor(map, viewHost, geometryPointHost, geometryCircleHost, overlayHost) {
    this.map = map;
    this.srid = 'EPSG:3857';
    this.mapSrid = 'EPSG:3857';
    // console.log('instancing aol-coordinate');
    if (geometryPointHost !== null) {
      this.host = geometryPointHost;
    } else if (geometryCircleHost !== null) {
      this.host = geometryCircleHost;
    } else if (viewHost !== null) {
      this.host = viewHost;
    } else if (overlayHost !== null) {
      this.host = overlayHost;
    }
  }
  ngOnInit() {
    this.map.instance.on('change:view', e => this.onMapViewChanged(e));
    this.mapSrid = this.map.instance.getView().getProjection().getCode();
    this.transformCoordinates();
  }
  ngOnChanges(changes) {
    this.transformCoordinates();
  }
  onMapViewChanged(event) {
    this.mapSrid = event.target.get(event.key).getProjection().getCode();
    this.transformCoordinates();
  }
  transformCoordinates() {
    let transformedCoordinates;
    if (this.srid === this.mapSrid) {
      transformedCoordinates = [this.x, this.y];
    } else {
      transformedCoordinates = (0,ol_proj__WEBPACK_IMPORTED_MODULE_0__.transform)([this.x, this.y], this.srid, this.mapSrid);
    }
    switch (this.host.componentType) {
      case 'geometry-point':
        this.host.instance.setCoordinates(transformedCoordinates);
        break;
      case 'geometry-circle':
      case 'view':
        this.host.instance.setCenter(transformedCoordinates);
        break;
      case 'overlay':
        this.host.instance.setPosition(transformedCoordinates);
        break;
    }
  }
  static #_ = this.ɵfac = function CoordinateComponent_Factory(t) {
    return new (t || CoordinateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ViewComponent, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GeometryPointComponent, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GeometryCircleComponent, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](OverlayComponent, 8));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: CoordinateComponent,
    selectors: [["aol-coordinate"]],
    inputs: {
      x: "x",
      y: "y",
      srid: "srid"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
    decls: 1,
    vars: 0,
    consts: [[1, "aol-coordinate"]],
    template: function CoordinateComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CoordinateComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-coordinate',
      template: ` <div class="aol-coordinate"></div> `
    }]
  }], () => [{
    type: MapComponent
  }, {
    type: ViewComponent,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
    }]
  }, {
    type: GeometryPointComponent,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
    }]
  }, {
    type: GeometryCircleComponent,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
    }]
  }, {
    type: OverlayComponent,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
    }]
  }], {
    x: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    y: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    srid: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
class CollectionCoordinatesComponent {
  constructor(map, geometryLinestring, geometryPolygon, geometryMultipoint, geometryMultilinestring, geometryMultipolygon) {
    this.map = map;
    this.srid = 'EPSG:3857';
    this.mapSrid = 'EPSG:3857';
    if (!!geometryLinestring) {
      this.host = geometryLinestring;
    } else if (!!geometryPolygon) {
      this.host = geometryPolygon;
    } else if (!!geometryMultipoint) {
      this.host = geometryMultipoint;
    } else if (!!geometryMultilinestring) {
      this.host = geometryMultilinestring;
    } else if (!!geometryMultipolygon) {
      this.host = geometryMultipolygon;
    } else {
      throw new Error('aol-collection-coordinates must be a child of a geometry component');
    }
  }
  ngOnInit() {
    this.map.instance.on('change:view', e => this.onMapViewChanged(e));
    this.mapSrid = this.map.instance.getView().getProjection().getCode();
    this.transformCoordinates();
  }
  ngOnChanges(changes) {
    this.transformCoordinates();
  }
  onMapViewChanged(event) {
    this.mapSrid = event.target.get(event.key).getProjection().getCode();
    this.transformCoordinates();
  }
  transformCoordinates() {
    let transformedCoordinates;
    if (this.srid === this.mapSrid) {
      transformedCoordinates = this.coordinates;
    } else {
      switch (this.host.componentType) {
        case 'geometry-linestring':
        case 'geometry-multipoint':
          transformedCoordinates = this.coordinates.map(c => (0,ol_proj__WEBPACK_IMPORTED_MODULE_0__.transform)(c, this.srid, this.mapSrid));
          break;
        case 'geometry-polygon':
        case 'geometry-multilinestring':
          transformedCoordinates = this.coordinates.map(cc => cc.map(c => (0,ol_proj__WEBPACK_IMPORTED_MODULE_0__.transform)(c, this.srid, this.mapSrid)));
          break;
        case 'geometry-multipolygon':
          transformedCoordinates = this.coordinates.map(ccc => ccc.map(cc => cc.map(c => (0,ol_proj__WEBPACK_IMPORTED_MODULE_0__.transform)(c, this.srid, this.mapSrid))));
          break;
      }
    }
    this.host.instance.setCoordinates(transformedCoordinates);
  }
  static #_ = this.ɵfac = function CollectionCoordinatesComponent_Factory(t) {
    return new (t || CollectionCoordinatesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GeometryLinestringComponent, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GeometryPolygonComponent, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GeometryMultiPointComponent, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GeometryMultiLinestringComponent, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GeometryMultiPolygonComponent, 8));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: CollectionCoordinatesComponent,
    selectors: [["aol-collection-coordinates"]],
    inputs: {
      coordinates: "coordinates",
      srid: "srid"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
    decls: 1,
    vars: 0,
    consts: [[1, "aol-collection-coordinates"]],
    template: function CollectionCoordinatesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CollectionCoordinatesComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-collection-coordinates',
      template: ` <div class="aol-collection-coordinates"></div> `
    }]
  }], () => [{
    type: MapComponent
  }, {
    type: GeometryLinestringComponent,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
    }]
  }, {
    type: GeometryPolygonComponent,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
    }]
  }, {
    type: GeometryMultiPointComponent,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
    }]
  }, {
    type: GeometryMultiLinestringComponent,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
    }]
  }, {
    type: GeometryMultiPolygonComponent,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
    }]
  }], {
    coordinates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    srid: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
class StyleComponent {
  constructor(featureHost, layerHost) {
    this.componentType = 'style';
    // console.log('creating aol-style');
    this.host = !!featureHost ? featureHost : layerHost;
    if (!this.host) {
      throw new Error('aol-style must be applied to a feature or a layer');
    }
  }
  update() {
    // console.log('updating style\'s host: ', this.host);
    this.host.instance.changed();
  }
  ngOnInit() {
    // console.log('creating aol-style instance with: ', this);
    this.instance = new ol_style__WEBPACK_IMPORTED_MODULE_36__["default"](this);
    this.host.instance.setStyle(this.instance);
  }
  static #_ = this.ɵfac = function StyleComponent_Factory(t) {
    return new (t || StyleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FeatureComponent, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LayerVectorComponent, 8));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: StyleComponent,
    selectors: [["aol-style"]],
    inputs: {
      geometry: "geometry",
      fill: "fill",
      image: "image",
      stroke: "stroke",
      text: "text",
      zIndex: "zIndex"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function StyleComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StyleComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-style',
      template: ` <ng-content></ng-content> `
    }]
  }], () => [{
    type: FeatureComponent,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
    }]
  }, {
    type: LayerVectorComponent,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
    }]
  }], {
    geometry: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    fill: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    image: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    stroke: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    text: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    zIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
class StyleCircleComponent {
  constructor(host) {
    this.host = host;
    this.componentType = 'style-circle';
  }
  /**
   * WORK-AROUND: since the re-rendering is not triggered on style change
   * we trigger a radius change.
   * see openlayers #6233 and #5775
   */
  update() {
    if (!!this.instance) {
      // console.log('setting ol.style.Circle instance\'s radius');
      this.instance.setRadius(this.radius);
    }
    this.host.update();
  }
  ngAfterContentInit() {
    // console.log('creating ol.style.Circle instance with: ', this);
    this.instance = new ol_style__WEBPACK_IMPORTED_MODULE_37__["default"](this);
    this.host.instance.setImage(this.instance);
    this.host.update();
  }
  ngOnChanges(changes) {
    if (!this.instance) {
      return;
    }
    if (changes.radius) {
      this.instance.setRadius(changes.radius.currentValue);
    }
    // console.log('changes detected in aol-style-circle, setting new radius: ', changes['radius'].currentValue);
  }
  ngOnDestroy() {
    // console.log('removing aol-style-circle');
    this.host.instance.setImage(null);
  }
  static #_ = this.ɵfac = function StyleCircleComponent_Factory(t) {
    return new (t || StyleCircleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](StyleComponent, 1));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: StyleCircleComponent,
    selectors: [["aol-style-circle"]],
    inputs: {
      fill: "fill",
      radius: "radius",
      snapToPixel: "snapToPixel",
      stroke: "stroke"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function StyleCircleComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StyleCircleComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-style-circle',
      template: ` <ng-content></ng-content> `
    }]
  }], () => [{
    type: StyleComponent,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Host
    }]
  }], {
    fill: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    radius: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    snapToPixel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    stroke: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
class StyleTextComponent {
  constructor(host) {
    this.host = host;
    this.componentType = 'style-text';
    if (!host) {
      throw new Error('aol-style-text must be a descendant of aol-style');
    }
    // console.log('creating aol-style-text with: ', this);
  }
  ngOnInit() {
    // console.log('creating ol.style.Text instance with: ', this);
    this.instance = new ol_style__WEBPACK_IMPORTED_MODULE_38__["default"](this);
    this.host.instance.setText(this.instance);
  }
  ngOnChanges(changes) {
    if (!this.instance) {
      return;
    }
    if (changes.font) {
      this.instance.setFont(changes.font.currentValue);
    }
    if (changes.offsetX) {
      this.instance.setOffsetX(changes.offsetX.currentValue);
    }
    if (changes.offsetY) {
      this.instance.setOffsetY(changes.offsetY.currentValue);
    }
    if (changes.scale) {
      this.instance.setScale(changes.scale.currentValue);
    }
    if (changes.rotation) {
      this.instance.setRotation(changes.rotation.currentValue);
    }
    if (changes.text) {
      this.instance.setText(changes.text.currentValue);
    }
    if (changes.textAlign) {
      this.instance.setTextAlign(changes.textAlign.currentValue);
    }
    if (changes.textBaseLine) {
      this.instance.setTextBaseline(changes.textBaseLine.currentValue);
    }
    this.host.update();
    // console.log('changes detected in aol-style-text, setting new properties: ', changes);
  }
  update() {}
  static #_ = this.ɵfac = function StyleTextComponent_Factory(t) {
    return new (t || StyleTextComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](StyleComponent, 8));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: StyleTextComponent,
    selectors: [["aol-style-text"]],
    inputs: {
      font: "font",
      offsetX: "offsetX",
      offsetY: "offsetY",
      scale: "scale",
      rotateWithView: "rotateWithView",
      rotation: "rotation",
      text: "text",
      textAlign: "textAlign",
      textBaseLine: "textBaseLine"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
    decls: 1,
    vars: 0,
    consts: [[1, "aol-style-text"]],
    template: function StyleTextComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StyleTextComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-style-text',
      template: ` <div class="aol-style-text"></div> `
    }]
  }], () => [{
    type: StyleComponent,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
    }]
  }], {
    font: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    offsetX: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    offsetY: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    scale: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    rotateWithView: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    rotation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    text: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    textAlign: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    textBaseLine: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
class StyleStrokeComponent {
  constructor(styleHost, styleCircleHost, styleTextHost) {
    if (!styleHost) {
      throw new Error('aol-style-stroke must be a descendant of aol-style');
    }
    if (!!styleTextHost) {
      this.host = styleTextHost;
    } else if (!!styleCircleHost) {
      this.host = styleCircleHost;
    } else {
      this.host = styleHost;
    }
    // console.log('creating aol-style-stroke with: ', this);
  }
  ngOnInit() {
    // console.log('creating ol.style.Stroke instance with: ', this);
    this.instance = new ol_style__WEBPACK_IMPORTED_MODULE_39__["default"](this);
    switch (this.host.componentType) {
      case 'style':
        this.host.instance.setStroke(this.instance);
        // console.log('setting ol.style instance\'s stroke:', this.host);
        break;
      case 'style-text':
        this.host.instance.setStroke(this.instance);
        break;
      case 'style-circle':
        this.host.stroke = this.instance;
        // console.log('setting ol.style.circle instance\'s stroke:', this.host);
        break;
      default:
        throw new Error('unknown host type: ' + this.host);
      // break;
    }
  }
  ngOnChanges(changes) {
    if (!this.instance) {
      return;
    }
    if (changes.color) {
      this.instance.setColor(changes.color.currentValue);
    }
    if (changes.lineCap) {
      this.instance.setLineCap(changes.lineCap.currentValue);
    }
    if (changes.lineDash) {
      this.instance.setLineDash(changes.lineDash.currentValue);
    }
    if (changes.lineJoin) {
      this.instance.setLineJoin(changes.lineJoin.currentValue);
    }
    if (changes.miterLimit) {
      this.instance.setMiterLimit(changes.miterLimit.currentValue);
    }
    if (changes.width) {
      this.instance.setWidth(changes.width.currentValue);
    }
    this.host.update();
    // console.log('changes detected in aol-style-stroke, setting new properties: ', changes);
  }
  static #_ = this.ɵfac = function StyleStrokeComponent_Factory(t) {
    return new (t || StyleStrokeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](StyleComponent, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](StyleCircleComponent, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](StyleTextComponent, 8));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: StyleStrokeComponent,
    selectors: [["aol-style-stroke"]],
    inputs: {
      color: "color",
      lineCap: "lineCap",
      lineDash: "lineDash",
      lineJoin: "lineJoin",
      miterLimit: "miterLimit",
      width: "width"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
    decls: 1,
    vars: 0,
    consts: [[1, "aol-style-stroke"]],
    template: function StyleStrokeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StyleStrokeComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-style-stroke',
      template: ` <div class="aol-style-stroke"></div> `
    }]
  }], () => [{
    type: StyleComponent,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
    }]
  }, {
    type: StyleCircleComponent,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
    }]
  }, {
    type: StyleTextComponent,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
    }]
  }], {
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    lineCap: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    lineDash: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    lineJoin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    miterLimit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    width: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
class StyleIconComponent {
  constructor(host) {
    this.host = host;
  }
  ngOnInit() {
    // console.log('creating ol.style.Icon instance with: ', this);
    this.instance = new ol_style__WEBPACK_IMPORTED_MODULE_40__["default"](this);
    this.host.instance.setImage(this.instance);
  }
  ngOnChanges(changes) {
    if (!this.instance) {
      return;
    }
    if (changes.opacity) {
      this.instance.setOpacity(changes.opacity.currentValue);
    }
    if (changes.rotation) {
      this.instance.setRotation(changes.rotation.currentValue);
    }
    if (changes.scale) {
      this.instance.setScale(changes.scale.currentValue);
    }
    if (changes.src) {
      this.instance = new ol_style__WEBPACK_IMPORTED_MODULE_40__["default"](this);
      this.host.instance.setImage(this.instance);
    }
    this.host.update();
    // console.log('changes detected in aol-style-icon: ', changes);
  }
  static #_ = this.ɵfac = function StyleIconComponent_Factory(t) {
    return new (t || StyleIconComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](StyleComponent, 1));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: StyleIconComponent,
    selectors: [["aol-style-icon"]],
    inputs: {
      anchor: "anchor",
      anchorXUnits: "anchorXUnits",
      anchorYUnits: "anchorYUnits",
      anchorOrigin: "anchorOrigin",
      color: "color",
      crossOrigin: "crossOrigin",
      img: "img",
      offset: "offset",
      offsetOrigin: "offsetOrigin",
      opacity: "opacity",
      scale: "scale",
      snapToPixel: "snapToPixel",
      rotateWithView: "rotateWithView",
      rotation: "rotation",
      size: "size",
      imgSize: "imgSize",
      src: "src"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
    decls: 1,
    vars: 0,
    consts: [[1, "aol-style-icon"]],
    template: function StyleIconComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StyleIconComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-style-icon',
      template: ` <div class="aol-style-icon"></div> `
    }]
  }], () => [{
    type: StyleComponent,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Host
    }]
  }], {
    anchor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    anchorXUnits: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    anchorYUnits: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    anchorOrigin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    crossOrigin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    img: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    offset: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    offsetOrigin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    opacity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    scale: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    snapToPixel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    rotateWithView: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    rotation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    size: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    imgSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    src: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
class StyleFillComponent {
  constructor(styleHost, styleCircleHost, styleTextHost) {
    if (!styleHost) {
      throw new Error('aol-style-stroke must be a descendant of aol-style');
    }
    if (!!styleTextHost) {
      this.host = styleTextHost;
    } else if (!!styleCircleHost) {
      this.host = styleCircleHost;
    } else {
      this.host = styleHost;
    }
    // console.log('creating aol-style-fill with: ', this);
  }
  ngOnInit() {
    // console.log('creating ol.style.Fill instance with: ', this);
    this.instance = new ol_style__WEBPACK_IMPORTED_MODULE_41__["default"](this);
    switch (this.host.componentType) {
      case 'style':
        this.host.instance.setFill(this.instance);
        // console.log('setting ol.style instance\'s fill:', this.host);
        break;
      case 'style-text':
        this.host.instance.setFill(this.instance);
        break;
      case 'style-circle':
        this.host.fill = this.instance;
        // console.log('setting ol.style.circle instance\'s fill:', this.host);
        break;
      default:
        throw new Error('unknown host type: ' + this.host);
    }
  }
  ngOnChanges(changes) {
    if (!this.instance) {
      return;
    }
    if (changes.color) {
      this.instance.setColor(changes.color.currentValue);
    }
    this.host.update();
    // console.log('changes detected in aol-style-fill, setting new color: ', changes);
  }
  static #_ = this.ɵfac = function StyleFillComponent_Factory(t) {
    return new (t || StyleFillComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](StyleComponent, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](StyleCircleComponent, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](StyleTextComponent, 8));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: StyleFillComponent,
    selectors: [["aol-style-fill"]],
    inputs: {
      color: "color"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
    decls: 1,
    vars: 0,
    consts: [[1, "aol-style-fill"]],
    template: function StyleFillComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StyleFillComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-style-fill',
      template: ` <div class="aol-style-fill"></div> `
    }]
  }], () => [{
    type: StyleComponent,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
    }]
  }, {
    type: StyleCircleComponent,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
    }]
  }, {
    type: StyleTextComponent,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
    }]
  }], {
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
class DefaultControlComponent {
  constructor(map) {
    this.map = map;
  }
  ngOnInit() {
    // console.log('ol.control.defaults init: ', this);
    this.instance = (0,ol_control__WEBPACK_IMPORTED_MODULE_42__.defaults)(this);
    this.instance.forEach(c => this.map.instance.addControl(c));
  }
  ngOnDestroy() {
    // console.log('removing aol-control-defaults');
    this.instance.forEach(c => this.map.instance.removeControl(c));
  }
  static #_ = this.ɵfac = function DefaultControlComponent_Factory(t) {
    return new (t || DefaultControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: DefaultControlComponent,
    selectors: [["aol-control-defaults"]],
    inputs: {
      attribution: "attribution",
      attributionOptions: "attributionOptions",
      rotate: "rotate",
      rotateOptions: "rotateOptions",
      zoom: "zoom",
      zoomOptions: "zoomOptions"
    },
    decls: 0,
    vars: 0,
    template: function DefaultControlComponent_Template(rf, ctx) {},
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultControlComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-control-defaults',
      template: ''
    }]
  }], () => [{
    type: MapComponent
  }], {
    attribution: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    attributionOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    rotate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    rotateOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    zoom: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    zoomOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
class ControlComponent {
  constructor(map) {
    this.map = map;
    this.componentType = 'control';
  }
  ngOnInit() {
    if (this.content) {
      this.element = this.content.elementRef.nativeElement;
      this.instance = new ol_control__WEBPACK_IMPORTED_MODULE_43__["default"](this);
      this.map.instance.addControl(this.instance);
    }
  }
  ngOnDestroy() {
    if (this.instance) {
      this.map.instance.removeControl(this.instance);
    }
  }
  static #_ = this.ɵfac = function ControlComponent_Factory(t) {
    return new (t || ControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ControlComponent,
    selectors: [["aol-control"]],
    contentQueries: function ControlComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, ContentComponent, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
      }
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ControlComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ControlComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-control',
      template: ` <ng-content></ng-content> `
    }]
  }], () => [{
    type: MapComponent
  }], {
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChild,
      args: [ContentComponent, {
        static: true
      }]
    }]
  });
})();
class ControlAttributionComponent {
  constructor(map, element) {
    this.map = map;
    this.element = element;
    this.componentType = 'control';
  }
  ngOnInit() {
    this.target = this.element.nativeElement;
    // console.log('ol.control.Attribution init: ', this);
    this.instance = new ol_control__WEBPACK_IMPORTED_MODULE_44__["default"](this);
    this.map.instance.addControl(this.instance);
  }
  ngOnDestroy() {
    // console.log('removing aol-control-attribution');
    this.map.instance.removeControl(this.instance);
  }
  static #_ = this.ɵfac = function ControlAttributionComponent_Factory(t) {
    return new (t || ControlAttributionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ControlAttributionComponent,
    selectors: [["aol-control-attribution"]],
    inputs: {
      collapsible: "collapsible"
    },
    decls: 0,
    vars: 0,
    template: function ControlAttributionComponent_Template(rf, ctx) {},
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ControlAttributionComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-control-attribution',
      template: ``
    }]
  }], () => [{
    type: MapComponent
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
  }], {
    collapsible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
class ControlFullScreenComponent {
  constructor(map) {
    this.map = map;
    // console.log('instancing aol-control-fullscreen');
  }
  ngOnInit() {
    this.instance = new ol_control__WEBPACK_IMPORTED_MODULE_45__["default"](this);
    this.map.instance.addControl(this.instance);
  }
  ngOnDestroy() {
    // console.log('removing aol-control-fullscreen');
    this.map.instance.removeControl(this.instance);
  }
  static #_ = this.ɵfac = function ControlFullScreenComponent_Factory(t) {
    return new (t || ControlFullScreenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ControlFullScreenComponent,
    selectors: [["aol-control-fullscreen"]],
    inputs: {
      className: "className",
      label: "label",
      labelActive: "labelActive",
      tipLabel: "tipLabel",
      keys: "keys"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ControlFullScreenComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ControlFullScreenComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-control-fullscreen',
      template: ` <ng-content></ng-content> `
    }]
  }], () => [{
    type: MapComponent
  }], {
    className: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    label: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    labelActive: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    tipLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    keys: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
class ControlMousePositionComponent {
  constructor(map, element) {
    this.map = map;
    this.element = element;
  }
  ngOnInit() {
    this.target = this.element.nativeElement;
    // console.log('ol.control.MousePosition init: ', this);
    this.instance = new ol_control_MousePosition__WEBPACK_IMPORTED_MODULE_46__["default"](this);
    this.map.instance.addControl(this.instance);
  }
  ngOnDestroy() {
    // console.log('removing aol-control-mouseposition');
    this.map.instance.removeControl(this.instance);
  }
  static #_ = this.ɵfac = function ControlMousePositionComponent_Factory(t) {
    return new (t || ControlMousePositionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ControlMousePositionComponent,
    selectors: [["aol-control-mouseposition"]],
    inputs: {
      coordinateFormat: "coordinateFormat",
      projection: "projection"
    },
    decls: 0,
    vars: 0,
    template: function ControlMousePositionComponent_Template(rf, ctx) {},
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ControlMousePositionComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-control-mouseposition',
      template: ``
    }]
  }], () => [{
    type: MapComponent
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
  }], {
    coordinateFormat: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    projection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
class ControlOverviewMapComponent {
  constructor(map) {
    this.map = map;
  }
  ngOnInit() {
    this.instance = new ol_control__WEBPACK_IMPORTED_MODULE_47__["default"](this);
    this.map.instance.addControl(this.instance);
  }
  ngOnDestroy() {
    this.map.instance.removeControl(this.instance);
  }
  ngOnChanges(changes) {
    if (this.instance != null && changes.hasOwnProperty('view')) {
      this.reloadInstance();
    }
  }
  reloadInstance() {
    this.map.instance.removeControl(this.instance);
    this.instance = new ol_control__WEBPACK_IMPORTED_MODULE_47__["default"](this);
    this.map.instance.addControl(this.instance);
  }
  static #_ = this.ɵfac = function ControlOverviewMapComponent_Factory(t) {
    return new (t || ControlOverviewMapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ControlOverviewMapComponent,
    selectors: [["aol-control-overviewmap"]],
    inputs: {
      collapsed: "collapsed",
      collapseLabel: "collapseLabel",
      collapsible: "collapsible",
      label: "label",
      layers: "layers",
      target: "target",
      tipLabel: "tipLabel",
      view: "view"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ControlOverviewMapComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ControlOverviewMapComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-control-overviewmap',
      template: ` <ng-content></ng-content> `
    }]
  }], () => [{
    type: MapComponent
  }], {
    collapsed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    collapseLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    collapsible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    label: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    layers: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    target: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    tipLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    view: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
class ControlRotateComponent {
  constructor(map) {
    this.map = map;
    // console.log('instancing aol-control-rotate');
  }
  ngOnInit() {
    this.instance = new ol_control__WEBPACK_IMPORTED_MODULE_48__["default"](this);
    this.map.instance.addControl(this.instance);
  }
  ngOnDestroy() {
    // console.log('removing aol-control-rotate');
    this.map.instance.removeControl(this.instance);
  }
  static #_ = this.ɵfac = function ControlRotateComponent_Factory(t) {
    return new (t || ControlRotateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ControlRotateComponent,
    selectors: [["aol-control-rotate"]],
    inputs: {
      className: "className",
      label: "label",
      tipLabel: "tipLabel",
      duration: "duration",
      autoHide: "autoHide"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ControlRotateComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ControlRotateComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-control-rotate',
      template: ` <ng-content></ng-content> `
    }]
  }], () => [{
    type: MapComponent
  }], {
    className: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    label: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    tipLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    duration: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    autoHide: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
class ControlScaleLineComponent {
  constructor(map) {
    this.map = map;
  }
  ngOnInit() {
    this.instance = new ol_control__WEBPACK_IMPORTED_MODULE_49__["default"](this);
    this.map.instance.addControl(this.instance);
  }
  ngOnDestroy() {
    this.map.instance.removeControl(this.instance);
  }
  static #_ = this.ɵfac = function ControlScaleLineComponent_Factory(t) {
    return new (t || ControlScaleLineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ControlScaleLineComponent,
    selectors: [["aol-control-scaleline"]],
    inputs: {
      units: "units"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ControlScaleLineComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ControlScaleLineComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-control-scaleline',
      template: ` <ng-content></ng-content> `
    }]
  }], () => [{
    type: MapComponent
  }], {
    units: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
class ControlZoomComponent {
  constructor(map) {
    this.map = map;
    // console.log('instancing aol-control-zoom');
  }
  ngOnInit() {
    this.instance = new ol_control__WEBPACK_IMPORTED_MODULE_50__["default"](this);
    this.map.instance.addControl(this.instance);
  }
  ngOnDestroy() {
    // console.log('removing aol-control-zoom');
    this.map.instance.removeControl(this.instance);
  }
  static #_ = this.ɵfac = function ControlZoomComponent_Factory(t) {
    return new (t || ControlZoomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ControlZoomComponent,
    selectors: [["aol-control-zoom"]],
    inputs: {
      duration: "duration",
      zoomInLabel: "zoomInLabel",
      zoomOutLabel: "zoomOutLabel",
      zoomInTipLabel: "zoomInTipLabel",
      zoomOutTipLabel: "zoomOutTipLabel",
      delta: "delta"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ControlZoomComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ControlZoomComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-control-zoom',
      template: ` <ng-content></ng-content> `
    }]
  }], () => [{
    type: MapComponent
  }], {
    duration: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    zoomInLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    zoomOutLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    zoomInTipLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    zoomOutTipLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    delta: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
class ControlZoomSliderComponent {
  constructor(map) {
    this.map = map;
    // console.log('instancing aol-control-zoomslider');
  }
  ngOnInit() {
    this.instance = new ol_control__WEBPACK_IMPORTED_MODULE_51__["default"](this);
    this.map.instance.addControl(this.instance);
  }
  ngOnDestroy() {
    // console.log('removing aol-control-zoomslider');
    this.map.instance.removeControl(this.instance);
  }
  static #_ = this.ɵfac = function ControlZoomSliderComponent_Factory(t) {
    return new (t || ControlZoomSliderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ControlZoomSliderComponent,
    selectors: [["aol-control-zoomslider"]],
    inputs: {
      className: "className",
      duration: "duration",
      maxResolution: "maxResolution",
      minResolution: "minResolution"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ControlZoomSliderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ControlZoomSliderComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-control-zoomslider',
      template: ` <ng-content></ng-content> `
    }]
  }], () => [{
    type: MapComponent
  }], {
    className: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    duration: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    maxResolution: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    minResolution: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
class ControlZoomToExtentComponent {
  constructor(map) {
    this.map = map;
    // console.log('instancing aol-control-zoomtoextent');
  }
  ngOnInit() {
    this.instance = new ol_control__WEBPACK_IMPORTED_MODULE_52__["default"](this);
    this.map.instance.addControl(this.instance);
  }
  ngOnDestroy() {
    // console.log('removing aol-control-zoomtoextent');
    this.map.instance.removeControl(this.instance);
  }
  static #_ = this.ɵfac = function ControlZoomToExtentComponent_Factory(t) {
    return new (t || ControlZoomToExtentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ControlZoomToExtentComponent,
    selectors: [["aol-control-zoomtoextent"]],
    inputs: {
      className: "className",
      label: "label",
      tipLabel: "tipLabel",
      extent: "extent"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ControlZoomToExtentComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ControlZoomToExtentComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-control-zoomtoextent',
      template: ` <ng-content></ng-content> `
    }]
  }], () => [{
    type: MapComponent
  }], {
    className: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    label: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    tipLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    extent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
class FormatMVTComponent extends FormatComponent {
  constructor() {
    super();
    this.instance = new ol_format__WEBPACK_IMPORTED_MODULE_53__["default"](this);
  }
  static #_ = this.ɵfac = function FormatMVTComponent_Factory(t) {
    return new (t || FormatMVTComponent)();
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: FormatMVTComponent,
    selectors: [["aol-format-mvt"]],
    inputs: {
      featureClass: "featureClass",
      geometryName: "geometryName",
      layerName: "layerName",
      layers: "layers"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
      provide: FormatComponent,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => FormatMVTComponent)
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
    decls: 0,
    vars: 0,
    template: function FormatMVTComponent_Template(rf, ctx) {},
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FormatMVTComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-format-mvt',
      template: '',
      providers: [{
        provide: FormatComponent,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => FormatMVTComponent)
      }]
    }]
  }], () => [], {
    featureClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    geometryName: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    layerName: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    layers: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
class DefaultInteractionComponent {
  constructor(map) {
    this.map = map;
  }
  ngOnInit() {
    this.instance = (0,ol_interaction__WEBPACK_IMPORTED_MODULE_54__.defaults)(this);
    this.instance.forEach(i => this.map.instance.addInteraction(i));
  }
  ngOnDestroy() {
    this.instance.forEach(i => this.map.instance.removeInteraction(i));
  }
  static #_ = this.ɵfac = function DefaultInteractionComponent_Factory(t) {
    return new (t || DefaultInteractionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: DefaultInteractionComponent,
    selectors: [["aol-interaction-default"]],
    inputs: {
      altShiftDragRotate: "altShiftDragRotate",
      onFocusOnly: "onFocusOnly",
      doubleClickZoom: "doubleClickZoom",
      keyboard: "keyboard",
      mouseWheelZoom: "mouseWheelZoom",
      shiftDragZoom: "shiftDragZoom",
      dragPan: "dragPan",
      pinchRotate: "pinchRotate",
      pinchZoom: "pinchZoom",
      zoomDelta: "zoomDelta",
      zoomDuration: "zoomDuration"
    },
    decls: 0,
    vars: 0,
    template: function DefaultInteractionComponent_Template(rf, ctx) {},
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultInteractionComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-interaction-default',
      template: ''
    }]
  }], () => [{
    type: MapComponent
  }], {
    altShiftDragRotate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    onFocusOnly: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    doubleClickZoom: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    keyboard: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    mouseWheelZoom: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    shiftDragZoom: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    dragPan: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    pinchRotate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    pinchZoom: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    zoomDelta: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    zoomDuration: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
class DoubleClickZoomInteractionComponent {
  constructor(map) {
    this.map = map;
  }
  ngOnInit() {
    this.instance = new ol_interaction__WEBPACK_IMPORTED_MODULE_55__["default"](this);
    this.map.instance.addInteraction(this.instance);
  }
  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
  static #_ = this.ɵfac = function DoubleClickZoomInteractionComponent_Factory(t) {
    return new (t || DoubleClickZoomInteractionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: DoubleClickZoomInteractionComponent,
    selectors: [["aol-interaction-doubleclickzoom"]],
    inputs: {
      duration: "duration",
      delta: "delta"
    },
    decls: 0,
    vars: 0,
    template: function DoubleClickZoomInteractionComponent_Template(rf, ctx) {},
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DoubleClickZoomInteractionComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-interaction-doubleclickzoom',
      template: ''
    }]
  }], () => [{
    type: MapComponent
  }], {
    duration: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    delta: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
class DragAndDropInteractionComponent {
  constructor(map) {
    this.map = map;
  }
  ngOnInit() {
    this.instance = new ol_interaction__WEBPACK_IMPORTED_MODULE_56__["default"](this);
    this.map.instance.addInteraction(this.instance);
  }
  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
  static #_ = this.ɵfac = function DragAndDropInteractionComponent_Factory(t) {
    return new (t || DragAndDropInteractionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: DragAndDropInteractionComponent,
    selectors: [["aol-interaction-draganddrop"]],
    inputs: {
      formatConstructors: "formatConstructors",
      projection: "projection",
      target: "target"
    },
    decls: 0,
    vars: 0,
    template: function DragAndDropInteractionComponent_Template(rf, ctx) {},
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DragAndDropInteractionComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-interaction-draganddrop',
      template: ''
    }]
  }], () => [{
    type: MapComponent
  }], {
    formatConstructors: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    projection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    target: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
class DragBoxInteractionComponent {
  constructor(map) {
    this.map = map;
  }
  ngOnInit() {
    this.instance = new ol_interaction__WEBPACK_IMPORTED_MODULE_57__["default"](this);
    this.map.instance.addInteraction(this.instance);
  }
  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
  static #_ = this.ɵfac = function DragBoxInteractionComponent_Factory(t) {
    return new (t || DragBoxInteractionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: DragBoxInteractionComponent,
    selectors: [["aol-interaction-dragbox"]],
    inputs: {
      className: "className",
      condition: "condition",
      boxEndCondition: "boxEndCondition"
    },
    decls: 0,
    vars: 0,
    template: function DragBoxInteractionComponent_Template(rf, ctx) {},
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DragBoxInteractionComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-interaction-dragbox',
      template: ''
    }]
  }], () => [{
    type: MapComponent
  }], {
    className: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    condition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    boxEndCondition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
class DragPanInteractionComponent {
  constructor(map) {
    this.map = map;
  }
  ngOnInit() {
    this.instance = new ol_interaction__WEBPACK_IMPORTED_MODULE_58__["default"](this);
    this.map.instance.addInteraction(this.instance);
  }
  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
  static #_ = this.ɵfac = function DragPanInteractionComponent_Factory(t) {
    return new (t || DragPanInteractionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: DragPanInteractionComponent,
    selectors: [["aol-interaction-dragpan"]],
    inputs: {
      condition: "condition",
      kinetic: "kinetic"
    },
    decls: 0,
    vars: 0,
    template: function DragPanInteractionComponent_Template(rf, ctx) {},
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DragPanInteractionComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-interaction-dragpan',
      template: ''
    }]
  }], () => [{
    type: MapComponent
  }], {
    condition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    kinetic: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
class DragRotateInteractionComponent {
  constructor(map) {
    this.map = map;
  }
  ngOnInit() {
    this.instance = new ol_interaction__WEBPACK_IMPORTED_MODULE_59__["default"](this);
    this.map.instance.addInteraction(this.instance);
  }
  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
  static #_ = this.ɵfac = function DragRotateInteractionComponent_Factory(t) {
    return new (t || DragRotateInteractionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: DragRotateInteractionComponent,
    selectors: [["aol-interaction-dragrotate"]],
    inputs: {
      condition: "condition",
      duration: "duration"
    },
    decls: 0,
    vars: 0,
    template: function DragRotateInteractionComponent_Template(rf, ctx) {},
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DragRotateInteractionComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-interaction-dragrotate',
      template: ''
    }]
  }], () => [{
    type: MapComponent
  }], {
    condition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    duration: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
class DragRotateAndZoomInteractionComponent {
  constructor(map) {
    this.map = map;
  }
  ngOnInit() {
    this.instance = new ol_interaction__WEBPACK_IMPORTED_MODULE_60__["default"](this);
    this.map.instance.addInteraction(this.instance);
  }
  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
  static #_ = this.ɵfac = function DragRotateAndZoomInteractionComponent_Factory(t) {
    return new (t || DragRotateAndZoomInteractionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: DragRotateAndZoomInteractionComponent,
    selectors: [["aol-interaction-dragrotateandzoom"]],
    inputs: {
      condition: "condition",
      duration: "duration"
    },
    decls: 0,
    vars: 0,
    template: function DragRotateAndZoomInteractionComponent_Template(rf, ctx) {},
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DragRotateAndZoomInteractionComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-interaction-dragrotateandzoom',
      template: ''
    }]
  }], () => [{
    type: MapComponent
  }], {
    condition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    duration: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
class DragZoomInteractionComponent {
  constructor(map) {
    this.map = map;
  }
  ngOnInit() {
    this.instance = new ol_interaction__WEBPACK_IMPORTED_MODULE_61__["default"](this);
    this.map.instance.addInteraction(this.instance);
  }
  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
  static #_ = this.ɵfac = function DragZoomInteractionComponent_Factory(t) {
    return new (t || DragZoomInteractionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: DragZoomInteractionComponent,
    selectors: [["aol-interaction-dragzoom"]],
    inputs: {
      className: "className",
      condition: "condition",
      duration: "duration",
      out: "out"
    },
    decls: 0,
    vars: 0,
    template: function DragZoomInteractionComponent_Template(rf, ctx) {},
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DragZoomInteractionComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-interaction-dragzoom',
      template: ''
    }]
  }], () => [{
    type: MapComponent
  }], {
    className: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    condition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    duration: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    out: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
class MouseWheelZoomInteractionComponent {
  constructor(map) {
    this.map = map;
  }
  ngOnInit() {
    this.instance = new ol_interaction__WEBPACK_IMPORTED_MODULE_62__["default"](this);
    this.map.instance.addInteraction(this.instance);
  }
  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
  static #_ = this.ɵfac = function MouseWheelZoomInteractionComponent_Factory(t) {
    return new (t || MouseWheelZoomInteractionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MouseWheelZoomInteractionComponent,
    selectors: [["aol-interaction-mousewheelzoom"]],
    inputs: {
      duration: "duration",
      timeout: "timeout",
      useAnchor: "useAnchor"
    },
    decls: 0,
    vars: 0,
    template: function MouseWheelZoomInteractionComponent_Template(rf, ctx) {},
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MouseWheelZoomInteractionComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-interaction-mousewheelzoom',
      template: ''
    }]
  }], () => [{
    type: MapComponent
  }], {
    duration: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    timeout: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    useAnchor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
class PinchZoomInteractionComponent {
  constructor(map) {
    this.map = map;
  }
  ngOnInit() {
    this.instance = new ol_interaction__WEBPACK_IMPORTED_MODULE_63__["default"](this);
    this.map.instance.addInteraction(this.instance);
  }
  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
  static #_ = this.ɵfac = function PinchZoomInteractionComponent_Factory(t) {
    return new (t || PinchZoomInteractionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: PinchZoomInteractionComponent,
    selectors: [["aol-interaction-pinchzoom"]],
    inputs: {
      duration: "duration",
      constrainResolution: "constrainResolution"
    },
    decls: 0,
    vars: 0,
    template: function PinchZoomInteractionComponent_Template(rf, ctx) {},
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PinchZoomInteractionComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-interaction-pinchzoom',
      template: ''
    }]
  }], () => [{
    type: MapComponent
  }], {
    duration: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    constrainResolution: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
class DrawInteractionComponent {
  constructor(map) {
    this.map = map;
    this.olChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.olChangeActive = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.olDrawAbort = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.drawEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.drawStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.olError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.propertyChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  ngOnInit() {
    this.instance = new ol_interaction__WEBPACK_IMPORTED_MODULE_64__["default"](this);
    this.instance.on('change', event => this.olChange.emit(event));
    this.instance.on('change:active', event => this.olChangeActive.emit(event));
    this.instance.on('drawabort', event => this.olDrawAbort.emit(event));
    this.instance.on('drawend', event => this.drawEnd.emit(event));
    this.instance.on('drawstart', event => this.drawStart.emit(event));
    this.instance.on('error', event => this.olError.emit(event));
    this.instance.on('propertychange', event => this.propertyChange.emit(event));
    this.map.instance.addInteraction(this.instance);
  }
  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
  static #_ = this.ɵfac = function DrawInteractionComponent_Factory(t) {
    return new (t || DrawInteractionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: DrawInteractionComponent,
    selectors: [["aol-interaction-draw"]],
    inputs: {
      clickTolerance: "clickTolerance",
      features: "features",
      source: "source",
      snapTolerance: "snapTolerance",
      type: "type",
      maxPoints: "maxPoints",
      minPoints: "minPoints",
      finishCondition: "finishCondition",
      style: "style",
      geometryFunction: "geometryFunction",
      geometryName: "geometryName",
      condition: "condition",
      freehandCondition: "freehandCondition",
      freehand: "freehand",
      wrapX: "wrapX"
    },
    outputs: {
      olChange: "olChange",
      olChangeActive: "olChangeActive",
      olDrawAbort: "olDrawAbort",
      drawEnd: "drawEnd",
      drawStart: "drawStart",
      olError: "olError",
      propertyChange: "propertyChange"
    },
    decls: 0,
    vars: 0,
    template: function DrawInteractionComponent_Template(rf, ctx) {},
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DrawInteractionComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-interaction-draw',
      template: ''
    }]
  }], () => [{
    type: MapComponent
  }], {
    clickTolerance: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    features: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    source: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    snapTolerance: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    maxPoints: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    minPoints: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    finishCondition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    geometryFunction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    geometryName: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    condition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    freehandCondition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    freehand: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    wrapX: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    olChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    olChangeActive: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    olDrawAbort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    drawEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    drawStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    olError: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    propertyChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }]
  });
})();
class KeyboardPanInteractionComponent {
  constructor(map) {
    this.map = map;
  }
  ngOnInit() {
    this.instance = new ol_interaction__WEBPACK_IMPORTED_MODULE_65__["default"](this);
    this.map.instance.addInteraction(this.instance);
  }
  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
  static #_ = this.ɵfac = function KeyboardPanInteractionComponent_Factory(t) {
    return new (t || KeyboardPanInteractionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: KeyboardPanInteractionComponent,
    selectors: [["aol-interaction-keyboardpan"]],
    inputs: {
      duration: "duration",
      pixelDelta: "pixelDelta"
    },
    decls: 0,
    vars: 0,
    template: function KeyboardPanInteractionComponent_Template(rf, ctx) {},
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](KeyboardPanInteractionComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-interaction-keyboardpan',
      template: ''
    }]
  }], () => [{
    type: MapComponent
  }], {
    duration: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    pixelDelta: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
class KeyboardZoomInteractionComponent {
  constructor(map) {
    this.map = map;
  }
  ngOnInit() {
    this.instance = new ol_interaction__WEBPACK_IMPORTED_MODULE_66__["default"](this);
    this.map.instance.addInteraction(this.instance);
  }
  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
  static #_ = this.ɵfac = function KeyboardZoomInteractionComponent_Factory(t) {
    return new (t || KeyboardZoomInteractionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: KeyboardZoomInteractionComponent,
    selectors: [["aol-interaction-keyboardpan"]],
    inputs: {
      duration: "duration",
      delta: "delta"
    },
    decls: 0,
    vars: 0,
    template: function KeyboardZoomInteractionComponent_Template(rf, ctx) {},
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](KeyboardZoomInteractionComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-interaction-keyboardpan',
      template: ''
    }]
  }], () => [{
    type: MapComponent
  }], {
    duration: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    delta: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
class SelectInteractionComponent {
  constructor(map) {
    this.map = map;
    this.olChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.olChangeActive = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.olError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.propertyChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.olSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  ngOnInit() {
    this.instance = new ol_interaction__WEBPACK_IMPORTED_MODULE_67__["default"](this);
    this.instance.on('change', event => this.olChange.emit(event));
    this.instance.on('change:active', event => this.olChangeActive.emit(event));
    this.instance.on('error', event => this.olError.emit(event));
    this.instance.on('propertychange', event => this.propertyChange.emit(event));
    this.instance.on('select', event => this.olSelect.emit(event));
    this.map.instance.addInteraction(this.instance);
  }
  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
  static #_ = this.ɵfac = function SelectInteractionComponent_Factory(t) {
    return new (t || SelectInteractionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SelectInteractionComponent,
    selectors: [["aol-interaction-select"]],
    inputs: {
      addCondition: "addCondition",
      condition: "condition",
      layers: "layers",
      style: "style",
      removeCondition: "removeCondition",
      toggleCondition: "toggleCondition",
      multi: "multi",
      features: "features",
      filter: "filter",
      wrapX: "wrapX"
    },
    outputs: {
      olChange: "olChange",
      olChangeActive: "olChangeActive",
      olError: "olError",
      propertyChange: "propertyChange",
      olSelect: "olSelect"
    },
    decls: 0,
    vars: 0,
    template: function SelectInteractionComponent_Template(rf, ctx) {},
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SelectInteractionComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-interaction-select',
      template: ''
    }]
  }], () => [{
    type: MapComponent
  }], {
    addCondition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    condition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    layers: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    removeCondition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    toggleCondition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    multi: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    features: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    filter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    wrapX: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    olChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    olChangeActive: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    olError: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    propertyChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    olSelect: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }]
  });
})();
class ModifyInteractionComponent {
  constructor(map) {
    this.map = map;
    this.olChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.olChangeActive = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.olError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.olModifyEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.olModifyStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.propertyChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  ngOnInit() {
    this.instance = new ol_interaction__WEBPACK_IMPORTED_MODULE_68__["default"](this);
    this.instance.on('change', event => this.olChange.emit(event));
    this.instance.on('change:active', event => this.olChangeActive.emit(event));
    this.instance.on('error', event => this.olError.emit(event));
    this.instance.on('modifyend', event => this.olModifyEnd.emit(event));
    this.instance.on('modifystart', event => this.olModifyStart.emit(event));
    this.instance.on('propertychange', event => this.propertyChange.emit(event));
    this.map.instance.addInteraction(this.instance);
  }
  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
  static #_ = this.ɵfac = function ModifyInteractionComponent_Factory(t) {
    return new (t || ModifyInteractionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ModifyInteractionComponent,
    selectors: [["aol-interaction-modify"]],
    inputs: {
      condition: "condition",
      deleteCondition: "deleteCondition",
      pixelTolerance: "pixelTolerance",
      style: "style",
      features: "features",
      wrapX: "wrapX",
      source: "source"
    },
    outputs: {
      olChange: "olChange",
      olChangeActive: "olChangeActive",
      olError: "olError",
      olModifyEnd: "olModifyEnd",
      olModifyStart: "olModifyStart",
      propertyChange: "propertyChange"
    },
    decls: 0,
    vars: 0,
    template: function ModifyInteractionComponent_Template(rf, ctx) {},
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ModifyInteractionComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-interaction-modify',
      template: ''
    }]
  }], () => [{
    type: MapComponent
  }], {
    condition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    deleteCondition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    pixelTolerance: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    features: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    wrapX: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    source: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    olChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    olChangeActive: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    olError: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    olModifyEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    olModifyStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    propertyChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }]
  });
})();
class TranslateInteractionComponent {
  constructor(map) {
    this.map = map;
    this.olChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.olChangeActive = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.olError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.propertyChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.translateEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.translateStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.translating = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  ngOnInit() {
    this.instance = new ol_interaction__WEBPACK_IMPORTED_MODULE_69__["default"](this);
    this.instance.on('change', event => this.olChange.emit(event));
    this.instance.on('change:active', event => this.olChangeActive.emit(event));
    this.instance.on('error', event => this.olError.emit(event));
    this.instance.on('propertychange', event => this.propertyChange.emit(event));
    this.instance.on('translateend', event => this.translateEnd.emit(event));
    this.instance.on('translatestart', event => this.translateStart.emit(event));
    this.instance.on('translating', event => this.translating.emit(event));
    this.map.instance.addInteraction(this.instance);
  }
  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
  static #_ = this.ɵfac = function TranslateInteractionComponent_Factory(t) {
    return new (t || TranslateInteractionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: TranslateInteractionComponent,
    selectors: [["aol-interaction-translate"]],
    inputs: {
      features: "features",
      layers: "layers",
      hitTolerance: "hitTolerance"
    },
    outputs: {
      olChange: "olChange",
      olChangeActive: "olChangeActive",
      olError: "olError",
      propertyChange: "propertyChange",
      translateEnd: "translateEnd",
      translateStart: "translateStart",
      translating: "translating"
    },
    decls: 0,
    vars: 0,
    template: function TranslateInteractionComponent_Template(rf, ctx) {},
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TranslateInteractionComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-interaction-translate',
      template: ''
    }]
  }], () => [{
    type: MapComponent
  }], {
    features: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    layers: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    hitTolerance: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    olChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    olChangeActive: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    olError: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    propertyChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    translateEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    translateStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    translating: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }]
  });
})();
class AttributionComponent {
  constructor(elementRef) {
    this.elementRef = elementRef;
  }
  ngOnInit() {
    this.label = this.elementRef.nativeElement.innerHTML;
  }
  static #_ = this.ɵfac = function AttributionComponent_Factory(t) {
    return new (t || AttributionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AttributionComponent,
    selectors: [["aol-attribution"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function AttributionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AttributionComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-attribution',
      template: '<ng-content></ng-content>'
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
  }], null);
})();
class AttributionsComponent {
  constructor(source) {
    this.source = source;
  }
  /* we can do this at the very end */
  ngAfterViewInit() {
    if (this.attributions.length) {
      this.instance = this.attributions.map(cmp => cmp.label);
      // console.log('setting attributions:', this.instance);
      this.source.instance.setAttributions(this.instance);
    }
  }
  static #_ = this.ɵfac = function AttributionsComponent_Factory(t) {
    return new (t || AttributionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](SourceComponent, 1));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AttributionsComponent,
    selectors: [["aol-attributions"]],
    contentQueries: function AttributionsComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, AttributionComponent, 4);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.attributions = _t);
      }
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function AttributionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AttributionsComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-attributions',
      template: '<ng-content></ng-content>'
    }]
  }], () => [{
    type: SourceComponent,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Host
    }]
  }], {
    attributions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChildren,
      args: [AttributionComponent]
    }]
  });
})();
class SourceUTFGridComponent extends SourceComponent {
  constructor(layer) {
    super(layer);
  }
  ngOnInit() {
    this.instance = new ol_source__WEBPACK_IMPORTED_MODULE_70__["default"](this);
    this.host.instance.setSource(this.instance);
  }
  static #_ = this.ɵfac = function SourceUTFGridComponent_Factory(t) {
    return new (t || SourceUTFGridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LayerTileComponent, 1));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SourceUTFGridComponent,
    selectors: [["aol-source-utfgrid"]],
    inputs: {
      tileJSON: "tileJSON",
      url: "url"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
      provide: SourceComponent,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => SourceUTFGridComponent)
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function SourceUTFGridComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SourceUTFGridComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'aol-source-utfgrid',
      template: ` <ng-content></ng-content> `,
      providers: [{
        provide: SourceComponent,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => SourceUTFGridComponent)
      }]
    }]
  }], () => [{
    type: LayerTileComponent,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Host
    }]
  }], {
    tileJSON: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    url: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/*
 * Public API Surface of ngx-ol
 */
const COMPONENTS = [MapComponent, ViewComponent, GraticuleComponent, LayerGroupComponent, LayerImageComponent, LayerTileComponent, LayerVectorComponent, LayerVectorTileComponent, SourceOsmComponent, SourceBingmapsComponent, SourceClusterComponent, SourceUTFGridComponent, SourceVectorComponent, SourceXYZComponent, SourceVectorTileComponent, SourceTileWMSComponent, SourceTileWMTSComponent, SourceTileJSONComponent, SourceGeoJSONComponent, SourceImageStaticComponent, SourceImageWMSComponent, SourceImageArcGISRestComponent, SourceRasterComponent, FeatureComponent, GeometryLinestringComponent, GeometryMultiLinestringComponent, GeometryMultiPointComponent, GeometryMultiPolygonComponent, GeometryPointComponent, GeometryPolygonComponent, GeometryCircleComponent, CoordinateComponent, CollectionCoordinatesComponent, StyleComponent, StyleCircleComponent, StyleFillComponent, StyleIconComponent, StyleStrokeComponent, StyleTextComponent, DefaultControlComponent, ControlComponent, ControlAttributionComponent, ControlFullScreenComponent, ControlMousePositionComponent, ControlOverviewMapComponent, ControlRotateComponent, ControlScaleLineComponent, ControlZoomComponent, ControlZoomSliderComponent, ControlZoomToExtentComponent, FormatMVTComponent, TileGridComponent, TileGridWMTSComponent, DefaultInteractionComponent, DoubleClickZoomInteractionComponent, DragAndDropInteractionComponent, DragBoxInteractionComponent, DragPanInteractionComponent, DragRotateInteractionComponent, DragRotateAndZoomInteractionComponent, DragZoomInteractionComponent, MouseWheelZoomInteractionComponent, PinchZoomInteractionComponent, DrawInteractionComponent, SelectInteractionComponent, ModifyInteractionComponent, TranslateInteractionComponent, OverlayComponent, ContentComponent, AttributionsComponent, AttributionComponent];
class AngularOpenlayersModule {
  static #_ = this.ɵfac = function AngularOpenlayersModule_Factory(t) {
    return new (t || AngularOpenlayersModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: AngularOpenlayersModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_71__.CommonModule]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AngularOpenlayersModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      declarations: COMPONENTS,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_71__.CommonModule],
      exports: COMPONENTS
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map