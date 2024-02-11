"use strict";
(self["webpackChunkdemo_ng_openlayers"] = self["webpackChunkdemo_ng_openlayers"] || []).push([["main"],{

/***/ 2951:
/*!**********************************************************!*\
  !*** ./apps/demo-ng-openlayers/src/app/app.component.ts ***!
  \**********************************************************/
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "ng-openlayers demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
    styles: ["header[_ngcontent-%COMP%] {\n        top: 0;\n        height: 75px;\n        width: 100%;\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: space-between;\n        z-index: 4;\n        background-color: #202124;\n        color: #fff;\n        font-family: Roboto, sans-serif;\n        font-size: 16px;\n        opacity: 1;\n        box-shadow:\n          0 2px 4px -1px rgba(0, 0, 0, 0.2),\n          0 4px 5px 0 rgba(0, 0, 0, 0.14),\n          0 1px 10px 0 rgba(0, 0, 0, 0.12);\n      }\n\n      header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n        padding-left: 1rem;\n        cursor: pointer;\n      }\n\n      .main-container[_ngcontent-%COMP%] {\n        height: calc(100% - 72px);\n        background-color: white;\n        margin: 0px;\n        overflow: auto;\n      }\n    \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvZGVtby1uZy1vcGVubGF5ZXJzL3NyYy9hcHAvYXBwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxNQUFNO1FBQ04sWUFBWTtRQUNaLFdBQVc7UUFFWCxhQUFhO1FBQ2IsZUFBZTtRQUVmLDhCQUE4QjtRQUM5QixVQUFVO1FBQ1YseUJBQXlCO1FBQ3pCLFdBQVc7UUFDWCwrQkFBK0I7UUFDL0IsZUFBZTtRQUNmLFVBQVU7UUFDVjs7OzBDQUdrQztNQUNwQzs7TUFFQTtRQUNFLGtCQUFrQjtRQUNsQixlQUFlO01BQ2pCOztNQUVBO1FBQ0UseUJBQXlCO1FBQ3pCLHVCQUF1QjtRQUN2QixXQUFXO1FBQ1gsY0FBYztNQUNoQiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgaGVhZGVyIHtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBoZWlnaHQ6IDc1cHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIHotaW5kZXg6IDQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIxMjQ7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIGJveC1zaGFkb3c6XG4gICAgICAgICAgMCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAgICAgICAgIDAgNHB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgICAgICAgMCAxcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgICB9XG5cbiAgICAgIGhlYWRlciBoMSB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuXG4gICAgICAubWFpbi1jb250YWluZXIge1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDcycHgpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgfVxuICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 9692:
/*!*******************************************************!*\
  !*** ./apps/demo-ng-openlayers/src/app/app.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 2951);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.routing */ 8248);
/* harmony import */ var _arcgis_image_arcgis_image_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./arcgis-image/arcgis-image.component */ 4228);
/* harmony import */ var _basic_basic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic/basic.component */ 8903);
/* harmony import */ var _cluster_cluster_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cluster/cluster.component */ 9708);
/* harmony import */ var _color_select_hover_color_select_hover_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./color-select-hover/color-select-hover.component */ 9944);
/* harmony import */ var _cursor_position_cursor_position_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cursor-position/cursor-position.component */ 9614);
/* harmony import */ var _display_geojson_source_display_geojson_source_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./display-geojson-source/display-geojson-source.component */ 1514);
/* harmony import */ var _display_geometry_display_geometry_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./display-geometry/display-geometry.component */ 2322);
/* harmony import */ var _draw_polygon_draw_polygon_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./draw-polygon/draw-polygon.component */ 874);
/* harmony import */ var _examples_item_examples_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples-item/examples-item.component */ 8269);
/* harmony import */ var _examples_list_examples_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples-list/examples-list.component */ 5253);
/* harmony import */ var _graticule_graticule_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./graticule/graticule.component */ 5206);
/* harmony import */ var _image_static_image_static_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./image-static/image-static.component */ 8468);
/* harmony import */ var _image_wms_image_wms_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./image-wms/image-wms.component */ 8174);
/* harmony import */ var _map_position_map_position_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./map-position/map-position.component */ 809);
/* harmony import */ var _marker_marker_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./marker/marker.component */ 3162);
/* harmony import */ var _modify_polygon_modify_polygon_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modify-polygon/modify-polygon.component */ 1256);
/* harmony import */ var _overlay_overlay_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./overlay/overlay.component */ 2032);
/* harmony import */ var _overview_overview_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./overview/overview.component */ 3506);
/* harmony import */ var _raster_raster_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./raster/raster.component */ 8578);
/* harmony import */ var _select_interaction_select_interaction_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./select-interaction/select-interaction.component */ 6824);
/* harmony import */ var _side_by_side_side_by_side_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./side-by-side/side-by-side.component */ 2289);
/* harmony import */ var _swipe_swipe_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./swipe/swipe.component */ 412);
/* harmony import */ var _tile_json_tile_json_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./tile-json/tile-json.component */ 928);
/* harmony import */ var _utfgrid_utfgrid_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./utfgrid/utfgrid.component */ 2093);
/* harmony import */ var _view_projection_update_view_projection_update_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./view-projection-update/view-projection-update.component */ 3748);
/* harmony import */ var _libs_ng_openlayers_src_public_api__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../../libs/ng-openlayers/src/public-api */ 8972);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/core */ 1699);































class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_29__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormsModule, _app_routing__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _libs_ng_openlayers_src_public_api__WEBPACK_IMPORTED_MODULE_27__.AngularOpenlayersModule, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.ReactiveFormsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_29__.HammerModule, _libs_ng_openlayers_src_public_api__WEBPACK_IMPORTED_MODULE_27__.AngularOpenlayersModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _basic_basic_component__WEBPACK_IMPORTED_MODULE_3__.BasicComponent, _cluster_cluster_component__WEBPACK_IMPORTED_MODULE_4__.ClusterComponent, _raster_raster_component__WEBPACK_IMPORTED_MODULE_20__.RasterComponent, _examples_list_examples_list_component__WEBPACK_IMPORTED_MODULE_11__.ExamplesListComponent, _examples_item_examples_item_component__WEBPACK_IMPORTED_MODULE_10__.ExamplesItemComponent, _map_position_map_position_component__WEBPACK_IMPORTED_MODULE_15__.MapPositionComponent, _cursor_position_cursor_position_component__WEBPACK_IMPORTED_MODULE_6__.CursorPositionComponent, _display_geometry_display_geometry_component__WEBPACK_IMPORTED_MODULE_8__.DisplayGeometryComponent, _display_geojson_source_display_geojson_source_component__WEBPACK_IMPORTED_MODULE_7__.DisplayGeojsonSourceComponent, _draw_polygon_draw_polygon_component__WEBPACK_IMPORTED_MODULE_9__.DrawPolygonComponent, _modify_polygon_modify_polygon_component__WEBPACK_IMPORTED_MODULE_17__.ModifyPolygonComponent, _side_by_side_side_by_side_component__WEBPACK_IMPORTED_MODULE_22__.SideBySideComponent, _swipe_swipe_component__WEBPACK_IMPORTED_MODULE_23__.SwipeComponent, _overlay_overlay_component__WEBPACK_IMPORTED_MODULE_18__.OverlayComponent, _color_select_hover_color_select_hover_component__WEBPACK_IMPORTED_MODULE_5__.ColorSelectHoverComponent, _marker_marker_component__WEBPACK_IMPORTED_MODULE_16__.MarkerComponent, _arcgis_image_arcgis_image_component__WEBPACK_IMPORTED_MODULE_2__.ArcgisImageComponent, _utfgrid_utfgrid_component__WEBPACK_IMPORTED_MODULE_25__.UTFGridComponent, _image_wms_image_wms_component__WEBPACK_IMPORTED_MODULE_14__.ImageWMSComponent, _select_interaction_select_interaction_component__WEBPACK_IMPORTED_MODULE_21__.SelectInteractionComponent, _image_static_image_static_component__WEBPACK_IMPORTED_MODULE_13__.ImageStaticComponent, _tile_json_tile_json_component__WEBPACK_IMPORTED_MODULE_24__.TileJsonComponent, _overview_overview_component__WEBPACK_IMPORTED_MODULE_19__.OverviewComponent, _view_projection_update_view_projection_update_component__WEBPACK_IMPORTED_MODULE_26__.ViewProjectionUpdateComponent, _graticule_graticule_component__WEBPACK_IMPORTED_MODULE_12__.GraticuleComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_29__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormsModule, _app_routing__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _libs_ng_openlayers_src_public_api__WEBPACK_IMPORTED_MODULE_27__.AngularOpenlayersModule, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.ReactiveFormsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_29__.HammerModule, _libs_ng_openlayers_src_public_api__WEBPACK_IMPORTED_MODULE_27__.AngularOpenlayersModule]
  });
})();

/***/ }),

/***/ 8248:
/*!********************************************************!*\
  !*** ./apps/demo-ng-openlayers/src/app/app.routing.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _cluster_cluster_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cluster/cluster.component */ 9708);
/* harmony import */ var _basic_basic_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic/basic.component */ 8903);
/* harmony import */ var _raster_raster_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./raster/raster.component */ 8578);
/* harmony import */ var _examples_list_examples_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./examples-list/examples-list.component */ 5253);
/* harmony import */ var _examples_item_examples_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./examples-item/examples-item.component */ 8269);
/* harmony import */ var _map_position_map_position_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map-position/map-position.component */ 809);
/* harmony import */ var _cursor_position_cursor_position_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cursor-position/cursor-position.component */ 9614);
/* harmony import */ var _display_geometry_display_geometry_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./display-geometry/display-geometry.component */ 2322);
/* harmony import */ var _display_geojson_source_display_geojson_source_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./display-geojson-source/display-geojson-source.component */ 1514);
/* harmony import */ var _draw_polygon_draw_polygon_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./draw-polygon/draw-polygon.component */ 874);
/* harmony import */ var _modify_polygon_modify_polygon_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modify-polygon/modify-polygon.component */ 1256);
/* harmony import */ var _side_by_side_side_by_side_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./side-by-side/side-by-side.component */ 2289);
/* harmony import */ var _swipe_swipe_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./swipe/swipe.component */ 412);
/* harmony import */ var _overlay_overlay_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./overlay/overlay.component */ 2032);
/* harmony import */ var _color_select_hover_color_select_hover_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./color-select-hover/color-select-hover.component */ 9944);
/* harmony import */ var _marker_marker_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./marker/marker.component */ 3162);
/* harmony import */ var _arcgis_image_arcgis_image_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./arcgis-image/arcgis-image.component */ 4228);
/* harmony import */ var _image_wms_image_wms_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./image-wms/image-wms.component */ 8174);
/* harmony import */ var _view_projection_update_view_projection_update_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./view-projection-update/view-projection-update.component */ 3748);
/* harmony import */ var _utfgrid_utfgrid_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./utfgrid/utfgrid.component */ 2093);
/* harmony import */ var _overview_overview_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./overview/overview.component */ 3506);
/* harmony import */ var _tile_json_tile_json_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./tile-json/tile-json.component */ 928);
/* harmony import */ var _select_interaction_select_interaction_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./select-interaction/select-interaction.component */ 6824);
/* harmony import */ var _image_static_image_static_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./image-static/image-static.component */ 8468);
/* harmony import */ var _graticule_graticule_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./graticule/graticule.component */ 5206);
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

/***/ 4228:
/*!********************************************************************************!*\
  !*** ./apps/demo-ng-openlayers/src/app/arcgis-image/arcgis-image.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArcgisImageComponent: () => (/* binding */ ArcgisImageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _libs_ng_openlayers_src_lib_map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/map.component */ 7478);
/* harmony import */ var _libs_ng_openlayers_src_lib_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/view.component */ 8525);
/* harmony import */ var _libs_ng_openlayers_src_lib_layers_layerimage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/layers/layerimage.component */ 5089);
/* harmony import */ var _libs_ng_openlayers_src_lib_layers_layertile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/layers/layertile.component */ 2474);
/* harmony import */ var _libs_ng_openlayers_src_lib_sources_osm_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/sources/osm.component */ 1537);
/* harmony import */ var _libs_ng_openlayers_src_lib_sources_imagearcgisrest_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/sources/imagearcgisrest.component */ 1483);
/* harmony import */ var _libs_ng_openlayers_src_lib_coordinate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/coordinate.component */ 2339);
/* harmony import */ var _libs_ng_openlayers_src_lib_controls_default_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/controls/default.component */ 5976);
/* harmony import */ var _libs_ng_openlayers_src_lib_controls_fullscreen_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/controls/fullscreen.component */ 7921);
/* harmony import */ var _libs_ng_openlayers_src_lib_interactions_default_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/interactions/default.component */ 7362);











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
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
    type: ArcgisImageComponent,
    selectors: [["app-root"]],
    decls: 10,
    vars: 4,
    consts: [[3, "zoom"], [3, "x", "y"], ["projection", "EPSG:3857", "url", "https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Specialty/ESRI_StateCityHighway_USA/MapServer", 3, "ratio", "imageLoadStart", "imageLoadEnd"]],
    template: function ArcgisImageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "aol-map");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "aol-interaction-default")(2, "aol-control-defaults")(3, "aol-control-fullscreen");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "aol-view", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "aol-coordinate", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "aol-layer-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "aol-source-osm");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "aol-layer-image")(9, "aol-source-imagearcgisrest", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("imageLoadStart", function ArcgisImageComponent_Template_aol_source_imagearcgisrest_imageLoadStart_9_listener() {
          return ctx.imageLoadStart();
        })("imageLoadEnd", function ArcgisImageComponent_Template_aol_source_imagearcgisrest_imageLoadEnd_9_listener() {
          return ctx.imageLoadEnd();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("zoom", ctx.zoom);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("x", -10997148)("y", 4569099);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ratio", 1);
      }
    },
    dependencies: [_libs_ng_openlayers_src_lib_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent, _libs_ng_openlayers_src_lib_view_component__WEBPACK_IMPORTED_MODULE_1__.ViewComponent, _libs_ng_openlayers_src_lib_layers_layerimage_component__WEBPACK_IMPORTED_MODULE_2__.LayerImageComponent, _libs_ng_openlayers_src_lib_layers_layertile_component__WEBPACK_IMPORTED_MODULE_3__.LayerTileComponent, _libs_ng_openlayers_src_lib_sources_osm_component__WEBPACK_IMPORTED_MODULE_4__.SourceOsmComponent, _libs_ng_openlayers_src_lib_sources_imagearcgisrest_component__WEBPACK_IMPORTED_MODULE_5__.SourceImageArcGISRestComponent, _libs_ng_openlayers_src_lib_coordinate_component__WEBPACK_IMPORTED_MODULE_6__.CoordinateComponent, _libs_ng_openlayers_src_lib_controls_default_component__WEBPACK_IMPORTED_MODULE_7__.DefaultControlComponent, _libs_ng_openlayers_src_lib_controls_fullscreen_component__WEBPACK_IMPORTED_MODULE_8__.ControlFullScreenComponent, _libs_ng_openlayers_src_lib_interactions_default_component__WEBPACK_IMPORTED_MODULE_9__.DefaultInteractionComponent],
    styles: ["[_nghost-%COMP%] {\n        height: 100%;\n        display: flex;\n      }\n\n      aol-map[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100%;\n      }\n    \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvZGVtby1uZy1vcGVubGF5ZXJzL3NyYy9hcHAvYXJjZ2lzLWltYWdlL2FyY2dpcy1pbWFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0UsWUFBWTtRQUNaLGFBQWE7TUFDZjs7TUFFQTtRQUNFLFdBQVc7UUFDWCxZQUFZO01BQ2QiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIDpob3N0IHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgfVxuXG4gICAgICBhb2wtbWFwIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIH1cbiAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 8903:
/*!******************************************************************!*\
  !*** ./apps/demo-ng-openlayers/src/app/basic/basic.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BasicComponent: () => (/* binding */ BasicComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _libs_ng_openlayers_src_lib_map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/map.component */ 7478);
/* harmony import */ var _libs_ng_openlayers_src_lib_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/view.component */ 8525);
/* harmony import */ var _libs_ng_openlayers_src_lib_layers_layertile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/layers/layertile.component */ 2474);
/* harmony import */ var _libs_ng_openlayers_src_lib_layers_layervector_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/layers/layervector.component */ 3649);
/* harmony import */ var _libs_ng_openlayers_src_lib_sources_osm_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/sources/osm.component */ 1537);
/* harmony import */ var _libs_ng_openlayers_src_lib_sources_vector_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/sources/vector.component */ 2263);
/* harmony import */ var _libs_ng_openlayers_src_lib_feature_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/feature.component */ 4374);
/* harmony import */ var _libs_ng_openlayers_src_lib_geom_geometrypoint_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/geom/geometrypoint.component */ 707);
/* harmony import */ var _libs_ng_openlayers_src_lib_coordinate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/coordinate.component */ 2339);
/* harmony import */ var _libs_ng_openlayers_src_lib_styles_style_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/styles/style.component */ 5960);
/* harmony import */ var _libs_ng_openlayers_src_lib_styles_circle_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/styles/circle.component */ 5425);
/* harmony import */ var _libs_ng_openlayers_src_lib_styles_fill_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/styles/fill.component */ 4078);
/* harmony import */ var _libs_ng_openlayers_src_lib_styles_icon_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/styles/icon.component */ 2856);
/* harmony import */ var _libs_ng_openlayers_src_lib_styles_stroke_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/styles/stroke.component */ 2020);















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
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
    type: BasicComponent,
    selectors: [["app-root"]],
    decls: 48,
    vars: 25,
    consts: [[3, "width", "height"], [3, "zoom", "changeResolution", "changeZoom", "changeCenter"], [3, "x", "y", "srid"], [3, "opacity"], [3, "radius"], [3, "color", "width"], [3, "color"], [3, "src", "anchor", "anchorXUnits", "anchorYUnits", "scale", "anchorOrigin"], [1, "controls"], [3, "click"]],
    template: function BasicComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "aol-map", 0)(1, "aol-view", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("changeResolution", function BasicComponent_Template_aol_view_changeResolution_1_listener($event) {
          return ctx.changeResolution($event);
        })("changeZoom", function BasicComponent_Template_aol_view_changeZoom_1_listener($event) {
          return ctx.changeZoom($event);
        })("changeCenter", function BasicComponent_Template_aol_view_changeCenter_1_listener($event) {
          return ctx.changeCenter($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "aol-coordinate", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "aol-layer-tile", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "aol-source-osm");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "aol-layer-vector", 3)(6, "aol-source-vector")(7, "aol-feature")(8, "aol-geometry-point");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](9, "aol-coordinate", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "aol-style")(11, "aol-style-circle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](12, "aol-style-stroke", 5)(13, "aol-style-fill", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "aol-feature")(15, "aol-geometry-point");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](16, "aol-coordinate", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "aol-style");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](18, "aol-style-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "div", 8)(20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](21, "opacity:");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function BasicComponent_Template_button_click_22_listener() {
          return ctx.increaseOpacity();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](23, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function BasicComponent_Template_button_click_24_listener() {
          return ctx.decreaseOpacity();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](25, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](28, "zoom:");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](29, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function BasicComponent_Template_button_click_29_listener() {
          return ctx.increaseZoom();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](30, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](31, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function BasicComponent_Template_button_click_31_listener() {
          return ctx.decreaseZoom();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](32, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](35, "latitude:");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](36, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function BasicComponent_Template_button_click_36_listener() {
          return ctx.increaseLat();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](37, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](38, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function BasicComponent_Template_button_click_38_listener() {
          return ctx.decreaseLat();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](39, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](42, "longitude:");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](43, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function BasicComponent_Template_button_click_43_listener() {
          return ctx.increaseLon();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](44, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](45, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function BasicComponent_Template_button_click_45_listener() {
          return ctx.decreaseLon();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](46, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("width", "100%")("height", "100%");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("zoom", ctx.zoom);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("x", 5)("y", 45)("srid", "EPSG:4326");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("opacity", ctx.opacity);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("opacity", ctx.opacity);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("x", 5)("y", 45)("srid", "EPSG:4326");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("radius", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("color", "black")("width", ctx.width);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("color", "green");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("x", 5.1)("y", 45.1)("srid", "EPSG:4326");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("src", "assets/marker.png")("anchor", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](24, _c0))("anchorXUnits", "fraction")("anchorYUnits", "fraction")("scale", 0.1)("anchorOrigin", "top-left");
      }
    },
    dependencies: [_libs_ng_openlayers_src_lib_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent, _libs_ng_openlayers_src_lib_view_component__WEBPACK_IMPORTED_MODULE_1__.ViewComponent, _libs_ng_openlayers_src_lib_layers_layertile_component__WEBPACK_IMPORTED_MODULE_2__.LayerTileComponent, _libs_ng_openlayers_src_lib_layers_layervector_component__WEBPACK_IMPORTED_MODULE_3__.LayerVectorComponent, _libs_ng_openlayers_src_lib_sources_osm_component__WEBPACK_IMPORTED_MODULE_4__.SourceOsmComponent, _libs_ng_openlayers_src_lib_sources_vector_component__WEBPACK_IMPORTED_MODULE_5__.SourceVectorComponent, _libs_ng_openlayers_src_lib_feature_component__WEBPACK_IMPORTED_MODULE_6__.FeatureComponent, _libs_ng_openlayers_src_lib_geom_geometrypoint_component__WEBPACK_IMPORTED_MODULE_7__.GeometryPointComponent, _libs_ng_openlayers_src_lib_coordinate_component__WEBPACK_IMPORTED_MODULE_8__.CoordinateComponent, _libs_ng_openlayers_src_lib_styles_style_component__WEBPACK_IMPORTED_MODULE_9__.StyleComponent, _libs_ng_openlayers_src_lib_styles_circle_component__WEBPACK_IMPORTED_MODULE_10__.StyleCircleComponent, _libs_ng_openlayers_src_lib_styles_fill_component__WEBPACK_IMPORTED_MODULE_11__.StyleFillComponent, _libs_ng_openlayers_src_lib_styles_icon_component__WEBPACK_IMPORTED_MODULE_12__.StyleIconComponent, _libs_ng_openlayers_src_lib_styles_stroke_component__WEBPACK_IMPORTED_MODULE_13__.StyleStrokeComponent],
    styles: ["[_nghost-%COMP%] {\n        height: 100%;\n        display: flex;\n      }\n\n      aol-map[_ngcontent-%COMP%] {\n        width: 70%;\n      }\n\n      .controls[_ngcontent-%COMP%] {\n        width: 28%;\n        padding: 1rem;\n      }\n    \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvZGVtby1uZy1vcGVubGF5ZXJzL3NyYy9hcHAvYmFzaWMvYmFzaWMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDTTtRQUNFLFlBQVk7UUFDWixhQUFhO01BQ2Y7O01BRUE7UUFDRSxVQUFVO01BQ1o7O01BRUE7UUFDRSxVQUFVO1FBQ1YsYUFBYTtNQUNmIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIH1cblxuICAgICAgYW9sLW1hcCB7XG4gICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICB9XG5cbiAgICAgIC5jb250cm9scyB7XG4gICAgICAgIHdpZHRoOiAyOCU7XG4gICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICB9XG4gICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9708:
/*!**********************************************************************!*\
  !*** ./apps/demo-ng-openlayers/src/app/cluster/cluster.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClusterComponent: () => (/* binding */ ClusterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _libs_ng_openlayers_src_lib_map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/map.component */ 7478);
/* harmony import */ var _libs_ng_openlayers_src_lib_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/view.component */ 8525);
/* harmony import */ var _libs_ng_openlayers_src_lib_layers_layertile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/layers/layertile.component */ 2474);
/* harmony import */ var _libs_ng_openlayers_src_lib_layers_layervector_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/layers/layervector.component */ 3649);
/* harmony import */ var _libs_ng_openlayers_src_lib_sources_osm_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/sources/osm.component */ 1537);
/* harmony import */ var _libs_ng_openlayers_src_lib_sources_cluster_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/sources/cluster.component */ 4019);
/* harmony import */ var _libs_ng_openlayers_src_lib_sources_vector_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/sources/vector.component */ 2263);
/* harmony import */ var _libs_ng_openlayers_src_lib_feature_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/feature.component */ 4374);
/* harmony import */ var _libs_ng_openlayers_src_lib_geom_geometrypoint_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/geom/geometrypoint.component */ 707);
/* harmony import */ var _libs_ng_openlayers_src_lib_geom_geometrypolygon_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/geom/geometrypolygon.component */ 7750);
/* harmony import */ var _libs_ng_openlayers_src_lib_coordinate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/coordinate.component */ 2339);
/* harmony import */ var _libs_ng_openlayers_src_lib_collectioncoordinates_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/collectioncoordinates.component */ 6495);
/* harmony import */ var _libs_ng_openlayers_src_lib_styles_style_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/styles/style.component */ 5960);
/* harmony import */ var _libs_ng_openlayers_src_lib_styles_circle_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/styles/circle.component */ 5425);
/* harmony import */ var _libs_ng_openlayers_src_lib_styles_fill_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/styles/fill.component */ 4078);
/* harmony import */ var _libs_ng_openlayers_src_lib_styles_stroke_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/styles/stroke.component */ 2020);
/* harmony import */ var _libs_ng_openlayers_src_lib_controls_default_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/controls/default.component */ 5976);
/* harmony import */ var _libs_ng_openlayers_src_lib_controls_fullscreen_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/controls/fullscreen.component */ 7921);
/* harmony import */ var _libs_ng_openlayers_src_lib_interactions_default_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/interactions/default.component */ 7362);






















function ClusterComponent_aol_feature_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "aol-feature")(1, "aol-geometry-point");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](2, "aol-coordinate", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("x", p_r1.x)("y", p_r1.y)("srid", "EPSG:4326");
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
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({
    type: ClusterComponent,
    selectors: [["app-cluster"]],
    decls: 30,
    vars: 31,
    consts: [[3, "width", "height"], [3, "zoom"], [3, "x", "y", "srid"], [3, "opacity"], [3, "distance"], [4, "ngFor", "ngForOf"], [3, "radius"], [3, "color"], [3, "coordinates", "srid"], [3, "color", "width"], [1, "control"], ["type", "range", "min", "0", "max", "255", 3, "ngModel", "ngModelChange"]],
    template: function ClusterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "aol-map", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "aol-interaction-default")(2, "aol-control-defaults")(3, "aol-control-fullscreen");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "aol-view", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](5, "aol-coordinate", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "aol-layer-tile", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](7, "aol-source-osm");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "aol-layer-vector")(9, "aol-source-cluster", 4)(10, "aol-source-vector");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](11, ClusterComponent_aol_feature_11_Template, 3, 3, "aol-feature", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](12, "aol-style")(13, "aol-style-circle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](14, "aol-style-stroke", 7)(15, "aol-style-fill", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](16, "aol-layer-vector")(17, "aol-source-vector")(18, "aol-feature")(19, "aol-geometry-polygon");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](20, "aol-collection-coordinates", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](21, "aol-style");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](22, "aol-style-stroke", 9)(23, "aol-style-fill", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](24, "div", 10)(25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](26, "Distance : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](27, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function ClusterComponent_Template_input_ngModelChange_27_listener($event) {
          return ctx.distance = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("width", "100%")("height", "100%");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("zoom", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("x", 1.4886)("y", 43.5554)("srid", "EPSG:4326");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("opacity", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("distance", ctx.distance);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx.points);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("radius", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("color", "#fff");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("color", "#3399CC");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("coordinates", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction1"](28, _c5, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction4"](23, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](19, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](20, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](21, _c2), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](22, _c3))))("srid", "EPSG:4326");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("color", "red")("width", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("color", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](30, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModel", ctx.distance);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" (", ctx.distance, ")");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.RangeValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgModel, _libs_ng_openlayers_src_lib_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent, _libs_ng_openlayers_src_lib_view_component__WEBPACK_IMPORTED_MODULE_1__.ViewComponent, _libs_ng_openlayers_src_lib_layers_layertile_component__WEBPACK_IMPORTED_MODULE_2__.LayerTileComponent, _libs_ng_openlayers_src_lib_layers_layervector_component__WEBPACK_IMPORTED_MODULE_3__.LayerVectorComponent, _libs_ng_openlayers_src_lib_sources_osm_component__WEBPACK_IMPORTED_MODULE_4__.SourceOsmComponent, _libs_ng_openlayers_src_lib_sources_cluster_component__WEBPACK_IMPORTED_MODULE_5__.SourceClusterComponent, _libs_ng_openlayers_src_lib_sources_vector_component__WEBPACK_IMPORTED_MODULE_6__.SourceVectorComponent, _libs_ng_openlayers_src_lib_feature_component__WEBPACK_IMPORTED_MODULE_7__.FeatureComponent, _libs_ng_openlayers_src_lib_geom_geometrypoint_component__WEBPACK_IMPORTED_MODULE_8__.GeometryPointComponent, _libs_ng_openlayers_src_lib_geom_geometrypolygon_component__WEBPACK_IMPORTED_MODULE_9__.GeometryPolygonComponent, _libs_ng_openlayers_src_lib_coordinate_component__WEBPACK_IMPORTED_MODULE_10__.CoordinateComponent, _libs_ng_openlayers_src_lib_collectioncoordinates_component__WEBPACK_IMPORTED_MODULE_11__.CollectionCoordinatesComponent, _libs_ng_openlayers_src_lib_styles_style_component__WEBPACK_IMPORTED_MODULE_12__.StyleComponent, _libs_ng_openlayers_src_lib_styles_circle_component__WEBPACK_IMPORTED_MODULE_13__.StyleCircleComponent, _libs_ng_openlayers_src_lib_styles_fill_component__WEBPACK_IMPORTED_MODULE_14__.StyleFillComponent, _libs_ng_openlayers_src_lib_styles_stroke_component__WEBPACK_IMPORTED_MODULE_15__.StyleStrokeComponent, _libs_ng_openlayers_src_lib_controls_default_component__WEBPACK_IMPORTED_MODULE_16__.DefaultControlComponent, _libs_ng_openlayers_src_lib_controls_fullscreen_component__WEBPACK_IMPORTED_MODULE_17__.ControlFullScreenComponent, _libs_ng_openlayers_src_lib_interactions_default_component__WEBPACK_IMPORTED_MODULE_18__.DefaultInteractionComponent],
    styles: ["[_nghost-%COMP%] {\n        height: 100%;\n        display: flex;\n        flex-direction: column;\n      }\n\n      aol-map[_ngcontent-%COMP%] {\n        flex: 1 1 auto;\n      }\n\n      .control[_ngcontent-%COMP%] {\n        flex: 0 0 auto;\n        display: flex;\n        align-items: center;\n        justify-content: flex-start;\n        margin: 20px;\n      }\n    \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvZGVtby1uZy1vcGVubGF5ZXJzL3NyYy9hcHAvY2x1c3Rlci9jbHVzdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxZQUFZO1FBQ1osYUFBYTtRQUNiLHNCQUFzQjtNQUN4Qjs7TUFFQTtRQUNFLGNBQWM7TUFDaEI7O01BRUE7UUFDRSxjQUFjO1FBQ2QsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQiwyQkFBMkI7UUFDM0IsWUFBWTtNQUNkIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIH1cblxuICAgICAgYW9sLW1hcCB7XG4gICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgfVxuXG4gICAgICAuY29udHJvbCB7XG4gICAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIG1hcmdpbjogMjBweDtcbiAgICAgIH1cbiAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 9944:
/*!********************************************************************************************!*\
  !*** ./apps/demo-ng-openlayers/src/app/color-select-hover/color-select-hover.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ColorSelectHoverComponent: () => (/* binding */ ColorSelectHoverComponent)
/* harmony export */ });
/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ol/style */ 1832);
/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ol/style */ 2089);
/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ol/style */ 9527);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _libs_ng_openlayers_src_lib_map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/map.component */ 7478);
/* harmony import */ var _libs_ng_openlayers_src_lib_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/view.component */ 8525);
/* harmony import */ var _libs_ng_openlayers_src_lib_layers_layergroup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/layers/layergroup.component */ 853);
/* harmony import */ var _libs_ng_openlayers_src_lib_layers_layertile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/layers/layertile.component */ 2474);
/* harmony import */ var _libs_ng_openlayers_src_lib_layers_layervector_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/layers/layervector.component */ 3649);
/* harmony import */ var _libs_ng_openlayers_src_lib_sources_osm_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/sources/osm.component */ 1537);
/* harmony import */ var _libs_ng_openlayers_src_lib_sources_vector_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/sources/vector.component */ 2263);
/* harmony import */ var _libs_ng_openlayers_src_lib_feature_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/feature.component */ 4374);
/* harmony import */ var _libs_ng_openlayers_src_lib_geom_geometrypolygon_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/geom/geometrypolygon.component */ 7750);
/* harmony import */ var _libs_ng_openlayers_src_lib_coordinate_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/coordinate.component */ 2339);
/* harmony import */ var _libs_ng_openlayers_src_lib_collectioncoordinates_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/collectioncoordinates.component */ 6495);
/* harmony import */ var _libs_ng_openlayers_src_lib_styles_style_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/styles/style.component */ 5960);
/* harmony import */ var _libs_ng_openlayers_src_lib_styles_fill_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/styles/fill.component */ 4078);
/* harmony import */ var _libs_ng_openlayers_src_lib_styles_stroke_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/styles/stroke.component */ 2020);
/* harmony import */ var _libs_ng_openlayers_src_lib_controls_default_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/controls/default.component */ 5976);
/* harmony import */ var _libs_ng_openlayers_src_lib_interactions_default_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/interactions/default.component */ 7362);
/* harmony import */ var _libs_ng_openlayers_src_lib_interactions_select_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/interactions/select.component */ 8359);




















const _c0 = ["map"];
const _c1 = ["aoiLayerVector"];
function ColorSelectHoverComponent_aol_layer_vector_11_aol_style_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "aol-style");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "aol-style-stroke", 12)(2, "aol-style-fill", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("color", "white");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("color", "rgba(90, 17, 26, 0.3)");
  }
}
function ColorSelectHoverComponent_aol_layer_vector_11_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "aol-style");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "aol-style-stroke", 12)(2, "aol-style-fill", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("color", "rgba(90, 17, 26)");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("color", "rgba(90, 17, 26, 0.5)");
  }
}
function ColorSelectHoverComponent_aol_layer_vector_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "aol-layer-vector", null, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](2, ColorSelectHoverComponent_aol_layer_vector_11_aol_style_2_Template, 3, 2, "aol-style", 8)(3, ColorSelectHoverComponent_aol_layer_vector_11_ng_template_3_Template, 3, 2, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "aol-source-vector")(6, "aol-feature", 10)(7, "aol-geometry-polygon");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](8, "aol-collection-coordinates", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const f_r3 = ctx.$implicit;
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](4);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", f_r3.id === ctx_r2.hoveredFeatureId)("ngIfElse", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("id", f_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("coordinates", f_r3.geometry.coordinates)("srid", "EPSG:4326");
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
    this.styleInteratiselected = new ol_style__WEBPACK_IMPORTED_MODULE_18__["default"]({
      fill: new ol_style__WEBPACK_IMPORTED_MODULE_19__["default"]({
        color: 'rgba(0, 153, 255, 0.1)'
      }),
      stroke: new ol_style__WEBPACK_IMPORTED_MODULE_20__["default"]({
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
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineComponent"]({
    type: ColorSelectHoverComponent,
    selectors: [["app-color-select-hover"]],
    viewQuery: function ColorSelectHoverComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵloadQuery"]()) && (ctx.map = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵloadQuery"]()) && (ctx.aoiLayerVector = _t);
      }
    },
    decls: 12,
    vars: 8,
    consts: [["width", "100%", "height", "100%", 3, "pointerMove"], ["map", ""], ["select", ""], [3, "zoom"], [3, "x", "y", "srid"], [3, "opacity"], [4, "ngFor", "ngForOf"], ["aoiLayerVector", ""], [4, "ngIf", "ngIfElse"], ["notHovered", ""], [3, "id"], [3, "coordinates", "srid"], ["width", "3", 3, "color"], [3, "color"]],
    template: function ColorSelectHoverComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "aol-map", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("pointerMove", function ColorSelectHoverComponent_Template_aol_map_pointerMove_0_listener($event) {
          return ctx.changeFeatureHovered($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](2, "aol-interaction-default")(3, "aol-control-defaults")(4, "aol-interaction-select", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "aol-view", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](7, "aol-coordinate", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "aol-layer-tile", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](9, "aol-source-osm");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](10, "aol-layer-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](11, ColorSelectHoverComponent_aol_layer_vector_11_Template, 9, 5, "aol-layer-vector", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵstyleMap"](ctx.styleInteratiselected);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("zoom", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("x", 1.4886)("y", 43.5554)("srid", "EPSG:4326");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("opacity", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx.features.features);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _libs_ng_openlayers_src_lib_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent, _libs_ng_openlayers_src_lib_view_component__WEBPACK_IMPORTED_MODULE_1__.ViewComponent, _libs_ng_openlayers_src_lib_layers_layergroup_component__WEBPACK_IMPORTED_MODULE_2__.LayerGroupComponent, _libs_ng_openlayers_src_lib_layers_layertile_component__WEBPACK_IMPORTED_MODULE_3__.LayerTileComponent, _libs_ng_openlayers_src_lib_layers_layervector_component__WEBPACK_IMPORTED_MODULE_4__.LayerVectorComponent, _libs_ng_openlayers_src_lib_sources_osm_component__WEBPACK_IMPORTED_MODULE_5__.SourceOsmComponent, _libs_ng_openlayers_src_lib_sources_vector_component__WEBPACK_IMPORTED_MODULE_6__.SourceVectorComponent, _libs_ng_openlayers_src_lib_feature_component__WEBPACK_IMPORTED_MODULE_7__.FeatureComponent, _libs_ng_openlayers_src_lib_geom_geometrypolygon_component__WEBPACK_IMPORTED_MODULE_8__.GeometryPolygonComponent, _libs_ng_openlayers_src_lib_coordinate_component__WEBPACK_IMPORTED_MODULE_9__.CoordinateComponent, _libs_ng_openlayers_src_lib_collectioncoordinates_component__WEBPACK_IMPORTED_MODULE_10__.CollectionCoordinatesComponent, _libs_ng_openlayers_src_lib_styles_style_component__WEBPACK_IMPORTED_MODULE_11__.StyleComponent, _libs_ng_openlayers_src_lib_styles_fill_component__WEBPACK_IMPORTED_MODULE_12__.StyleFillComponent, _libs_ng_openlayers_src_lib_styles_stroke_component__WEBPACK_IMPORTED_MODULE_13__.StyleStrokeComponent, _libs_ng_openlayers_src_lib_controls_default_component__WEBPACK_IMPORTED_MODULE_14__.DefaultControlComponent, _libs_ng_openlayers_src_lib_interactions_default_component__WEBPACK_IMPORTED_MODULE_15__.DefaultInteractionComponent, _libs_ng_openlayers_src_lib_interactions_select_component__WEBPACK_IMPORTED_MODULE_16__.SelectInteractionComponent],
    encapsulation: 2
  });
}
function inLayer(...layers) {
  return l => layers.some(layer => layer.instance === l);
}

/***/ }),

/***/ 9614:
/*!**************************************************************************************!*\
  !*** ./apps/demo-ng-openlayers/src/app/cursor-position/cursor-position.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CursorPositionComponent: () => (/* binding */ CursorPositionComponent)
/* harmony export */ });
/* harmony import */ var ol_proj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ol/proj */ 6395);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _libs_ng_openlayers_src_lib_map_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/map.component */ 7478);
/* harmony import */ var _libs_ng_openlayers_src_lib_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/view.component */ 8525);
/* harmony import */ var _libs_ng_openlayers_src_lib_layers_layertile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/layers/layertile.component */ 2474);
/* harmony import */ var _libs_ng_openlayers_src_lib_sources_osm_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/sources/osm.component */ 1537);
/* harmony import */ var _libs_ng_openlayers_src_lib_coordinate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/coordinate.component */ 2339);
/* harmony import */ var _libs_ng_openlayers_src_lib_controls_default_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/controls/default.component */ 5976);
/* harmony import */ var _libs_ng_openlayers_src_lib_interactions_default_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/interactions/default.component */ 7362);









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
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: CursorPositionComponent,
    selectors: [["app-cursor-position"]],
    decls: 16,
    vars: 7,
    consts: [["width", "100%", "height", "100%", 3, "pointerMove"], ["map", ""], [3, "zoom"], [3, "x", "y", "srid"], [3, "opacity"], [1, "info"], [1, "cursor-coordinates"]],
    template: function CursorPositionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "aol-map", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("pointerMove", function CursorPositionComponent_Template_aol_map_pointerMove_0_listener($event) {
          return ctx.dispatchCursor($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "aol-interaction-default")(3, "aol-control-defaults");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "aol-view", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "aol-coordinate", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "aol-layer-tile", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "aol-source-osm");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 5)(9, "div", 6)(10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "Cursor coordinates");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("zoom", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("x", 1.4886)("y", 43.5554)("srid", "EPSG:4326");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("opacity", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Longitude: ", ctx.lonToString(ctx.lon), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Latitude: ", ctx.latToString(ctx.lat), "");
      }
    },
    dependencies: [_libs_ng_openlayers_src_lib_map_component__WEBPACK_IMPORTED_MODULE_1__.MapComponent, _libs_ng_openlayers_src_lib_view_component__WEBPACK_IMPORTED_MODULE_2__.ViewComponent, _libs_ng_openlayers_src_lib_layers_layertile_component__WEBPACK_IMPORTED_MODULE_3__.LayerTileComponent, _libs_ng_openlayers_src_lib_sources_osm_component__WEBPACK_IMPORTED_MODULE_4__.SourceOsmComponent, _libs_ng_openlayers_src_lib_coordinate_component__WEBPACK_IMPORTED_MODULE_5__.CoordinateComponent, _libs_ng_openlayers_src_lib_controls_default_component__WEBPACK_IMPORTED_MODULE_6__.DefaultControlComponent, _libs_ng_openlayers_src_lib_interactions_default_component__WEBPACK_IMPORTED_MODULE_7__.DefaultInteractionComponent],
    styles: ["[_nghost-%COMP%] {\n        height: 100%;\n        display: flex;\n      }\n\n      aol-map[_ngcontent-%COMP%] {\n        width: 70%;\n      }\n\n      .info[_ngcontent-%COMP%] {\n        width: 28%;\n        padding: 1rem;\n      }\n\n      .cursor-coordinates[_ngcontent-%COMP%] {\n        display: flex;\n        flex-direction: column;\n      }\n    \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvZGVtby1uZy1vcGVubGF5ZXJzL3NyYy9hcHAvY3Vyc29yLXBvc2l0aW9uL2N1cnNvci1wb3NpdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0UsWUFBWTtRQUNaLGFBQWE7TUFDZjs7TUFFQTtRQUNFLFVBQVU7TUFDWjs7TUFFQTtRQUNFLFVBQVU7UUFDVixhQUFhO01BQ2Y7O01BRUE7UUFDRSxhQUFhO1FBQ2Isc0JBQXNCO01BQ3hCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIH1cblxuICAgICAgYW9sLW1hcCB7XG4gICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICB9XG5cbiAgICAgIC5pbmZvIHtcbiAgICAgICAgd2lkdGg6IDI4JTtcbiAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgIH1cblxuICAgICAgLmN1cnNvci1jb29yZGluYXRlcyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICB9XG4gICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}
function toSexagesimal(value, positiveSuffix, negativeSuffix) {
  const modValue = (value + 180) % 360 - 180;
  return (modValue > 0 ? positiveSuffix : negativeSuffix) + Math.abs(modValue).toFixed(6);
}

/***/ }),

/***/ 1514:
/*!****************************************************************************************************!*\
  !*** ./apps/demo-ng-openlayers/src/app/display-geojson-source/display-geojson-source.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DisplayGeojsonSourceComponent: () => (/* binding */ DisplayGeojsonSourceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _libs_ng_openlayers_src_lib_map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/map.component */ 7478);
/* harmony import */ var _libs_ng_openlayers_src_lib_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/view.component */ 8525);
/* harmony import */ var _libs_ng_openlayers_src_lib_layers_layergroup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/layers/layergroup.component */ 853);
/* harmony import */ var _libs_ng_openlayers_src_lib_layers_layertile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/layers/layertile.component */ 2474);
/* harmony import */ var _libs_ng_openlayers_src_lib_layers_layervector_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/layers/layervector.component */ 3649);
/* harmony import */ var _libs_ng_openlayers_src_lib_sources_osm_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/sources/osm.component */ 1537);
/* harmony import */ var _libs_ng_openlayers_src_lib_sources_vector_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/sources/vector.component */ 2263);
/* harmony import */ var _libs_ng_openlayers_src_lib_sources_geojson_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/sources/geojson.component */ 4520);
/* harmony import */ var _libs_ng_openlayers_src_lib_feature_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/feature.component */ 4374);
/* harmony import */ var _libs_ng_openlayers_src_lib_coordinate_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/coordinate.component */ 2339);
/* harmony import */ var _libs_ng_openlayers_src_lib_controls_default_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/controls/default.component */ 5976);
/* harmony import */ var _libs_ng_openlayers_src_lib_interactions_default_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/interactions/default.component */ 7362);













class DisplayGeojsonSourceComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function DisplayGeojsonSourceComponent_Factory(t) {
    return new (t || DisplayGeojsonSourceComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
    type: DisplayGeojsonSourceComponent,
    selectors: [["app-display-geojson-source"]],
    decls: 13,
    vars: 6,
    consts: [["width", "100%", "height", "100%"], ["map", ""], [3, "zoom"], [3, "x", "y", "srid"], [3, "opacity"], [3, "url"]],
    template: function DisplayGeojsonSourceComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "aol-map", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "aol-interaction-default")(3, "aol-control-defaults");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "aol-view", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](5, "aol-coordinate", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "aol-layer-tile", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](7, "aol-source-osm");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "aol-layer-group")(9, "aol-layer-vector")(10, "aol-source-vector")(11, "aol-feature");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "aol-source-geojson", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("zoom", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("x", 1.4886)("y", 43.5554)("srid", "EPSG:4326");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("opacity", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("url", "https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json");
      }
    },
    dependencies: [_libs_ng_openlayers_src_lib_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent, _libs_ng_openlayers_src_lib_view_component__WEBPACK_IMPORTED_MODULE_1__.ViewComponent, _libs_ng_openlayers_src_lib_layers_layergroup_component__WEBPACK_IMPORTED_MODULE_2__.LayerGroupComponent, _libs_ng_openlayers_src_lib_layers_layertile_component__WEBPACK_IMPORTED_MODULE_3__.LayerTileComponent, _libs_ng_openlayers_src_lib_layers_layervector_component__WEBPACK_IMPORTED_MODULE_4__.LayerVectorComponent, _libs_ng_openlayers_src_lib_sources_osm_component__WEBPACK_IMPORTED_MODULE_5__.SourceOsmComponent, _libs_ng_openlayers_src_lib_sources_vector_component__WEBPACK_IMPORTED_MODULE_6__.SourceVectorComponent, _libs_ng_openlayers_src_lib_sources_geojson_component__WEBPACK_IMPORTED_MODULE_7__.SourceGeoJSONComponent, _libs_ng_openlayers_src_lib_feature_component__WEBPACK_IMPORTED_MODULE_8__.FeatureComponent, _libs_ng_openlayers_src_lib_coordinate_component__WEBPACK_IMPORTED_MODULE_9__.CoordinateComponent, _libs_ng_openlayers_src_lib_controls_default_component__WEBPACK_IMPORTED_MODULE_10__.DefaultControlComponent, _libs_ng_openlayers_src_lib_interactions_default_component__WEBPACK_IMPORTED_MODULE_11__.DefaultInteractionComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 2322:
/*!****************************************************************************************!*\
  !*** ./apps/demo-ng-openlayers/src/app/display-geometry/display-geometry.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DisplayGeometryComponent: () => (/* binding */ DisplayGeometryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _libs_ng_openlayers_src_lib_map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/map.component */ 7478);
/* harmony import */ var _libs_ng_openlayers_src_lib_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/view.component */ 8525);
/* harmony import */ var _libs_ng_openlayers_src_lib_layers_layergroup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/layers/layergroup.component */ 853);
/* harmony import */ var _libs_ng_openlayers_src_lib_layers_layertile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/layers/layertile.component */ 2474);
/* harmony import */ var _libs_ng_openlayers_src_lib_layers_layervector_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/layers/layervector.component */ 3649);
/* harmony import */ var _libs_ng_openlayers_src_lib_sources_osm_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/sources/osm.component */ 1537);
/* harmony import */ var _libs_ng_openlayers_src_lib_sources_vector_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/sources/vector.component */ 2263);
/* harmony import */ var _libs_ng_openlayers_src_lib_feature_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/feature.component */ 4374);
/* harmony import */ var _libs_ng_openlayers_src_lib_geom_geometrylinestring_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/geom/geometrylinestring.component */ 3759);
/* harmony import */ var _libs_ng_openlayers_src_lib_geom_geometrymultilinestring_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/geom/geometrymultilinestring.component */ 3027);
/* harmony import */ var _libs_ng_openlayers_src_lib_geom_geometrymultipoint_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/geom/geometrymultipoint.component */ 950);
/* harmony import */ var _libs_ng_openlayers_src_lib_geom_geometrymultipolygon_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/geom/geometrymultipolygon.component */ 9330);
/* harmony import */ var _libs_ng_openlayers_src_lib_geom_geometrypoint_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/geom/geometrypoint.component */ 707);
/* harmony import */ var _libs_ng_openlayers_src_lib_geom_geometrypolygon_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/geom/geometrypolygon.component */ 7750);
/* harmony import */ var _libs_ng_openlayers_src_lib_geom_geometrycircle_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/geom/geometrycircle.component */ 2276);
/* harmony import */ var _libs_ng_openlayers_src_lib_coordinate_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/coordinate.component */ 2339);
/* harmony import */ var _libs_ng_openlayers_src_lib_collectioncoordinates_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/collectioncoordinates.component */ 6495);
/* harmony import */ var _libs_ng_openlayers_src_lib_styles_style_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/styles/style.component */ 5960);
/* harmony import */ var _libs_ng_openlayers_src_lib_styles_circle_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/styles/circle.component */ 5425);
/* harmony import */ var _libs_ng_openlayers_src_lib_styles_fill_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/styles/fill.component */ 4078);
/* harmony import */ var _libs_ng_openlayers_src_lib_styles_stroke_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/styles/stroke.component */ 2020);
/* harmony import */ var _libs_ng_openlayers_src_lib_controls_default_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/controls/default.component */ 5976);
/* harmony import */ var _libs_ng_openlayers_src_lib_interactions_default_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/interactions/default.component */ 7362);

























function DisplayGeometryComponent_aol_layer_vector_9_aol_source_vector_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "aol-source-vector")(1, "aol-style");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](2, "aol-style-stroke", 8)(3, "aol-style-fill", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](4, "aol-feature")(5, "aol-geometry-polygon");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](6, "aol-collection-coordinates", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const feature_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("color", "rgba(90, 17, 26)");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("color", "rgba(90, 17, 26, 0.5)");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("coordinates", feature_r2.geometry.coordinates)("srid", "EPSG:4326");
  }
}
function DisplayGeometryComponent_aol_layer_vector_9_aol_source_vector_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "aol-source-vector")(1, "aol-feature")(2, "aol-geometry-point");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](3, "aol-coordinate", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](4, "aol-style")(5, "aol-style-circle", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](6, "aol-style-stroke", 12)(7, "aol-style-fill", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const feature_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("x", feature_r2.geometry.coordinates[0])("y", feature_r2.geometry.coordinates[1])("srid", "EPSG:4326");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("radius", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("color", "black")("width", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("color", "green");
  }
}
function DisplayGeometryComponent_aol_layer_vector_9_aol_source_vector_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "aol-source-vector")(1, "aol-feature")(2, "aol-geometry-linestring");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](3, "aol-collection-coordinates", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const feature_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("coordinates", feature_r2.geometry.coordinates)("srid", "EPSG:4326");
  }
}
function DisplayGeometryComponent_aol_layer_vector_9_aol_source_vector_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "aol-source-vector")(1, "aol-feature")(2, "aol-geometry-circle", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](3, "aol-coordinate", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](4, "aol-style");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](5, "aol-style-stroke", 14)(6, "aol-style-fill", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const feature_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("radius", feature_r2.geometry.radius);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("x", feature_r2.geometry.coordinates[0])("y", feature_r2.geometry.coordinates[1]);
  }
}
function DisplayGeometryComponent_aol_layer_vector_9_aol_source_vector_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "aol-source-vector")(1, "aol-feature")(2, "aol-geometry-multipoint");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](3, "aol-collection-coordinates", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](4, "aol-style")(5, "aol-style-circle", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](6, "aol-style-stroke", 12)(7, "aol-style-fill", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const feature_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("coordinates", feature_r2.geometry.coordinates)("srid", "EPSG:4326");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("radius", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("color", "black")("width", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("color", "green");
  }
}
function DisplayGeometryComponent_aol_layer_vector_9_aol_source_vector_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "aol-source-vector")(1, "aol-feature")(2, "aol-geometry-multilinestring");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](3, "aol-collection-coordinates", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const feature_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("coordinates", feature_r2.geometry.coordinates)("srid", "EPSG:4326");
  }
}
function DisplayGeometryComponent_aol_layer_vector_9_aol_source_vector_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "aol-source-vector")(1, "aol-style");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](2, "aol-style-stroke", 16)(3, "aol-style-fill", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](4, "aol-feature")(5, "aol-geometry-multipolygon");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](6, "aol-collection-coordinates", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const feature_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("color", "rgba(81, 15.3, 23.4)");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("color", "rgba(81, 15.3, 23.4, 0.4)");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("coordinates", feature_r2.geometry.coordinates)("srid", "EPSG:4326");
  }
}
function DisplayGeometryComponent_aol_layer_vector_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "aol-layer-vector", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](1, DisplayGeometryComponent_aol_layer_vector_9_aol_source_vector_1_Template, 7, 4, "aol-source-vector", 7)(2, DisplayGeometryComponent_aol_layer_vector_9_aol_source_vector_2_Template, 8, 7, "aol-source-vector", 7)(3, DisplayGeometryComponent_aol_layer_vector_9_aol_source_vector_3_Template, 4, 2, "aol-source-vector", 7)(4, DisplayGeometryComponent_aol_layer_vector_9_aol_source_vector_4_Template, 7, 3, "aol-source-vector", 7)(5, DisplayGeometryComponent_aol_layer_vector_9_aol_source_vector_5_Template, 8, 6, "aol-source-vector", 7)(6, DisplayGeometryComponent_aol_layer_vector_9_aol_source_vector_6_Template, 4, 2, "aol-source-vector", 7)(7, DisplayGeometryComponent_aol_layer_vector_9_aol_source_vector_7_Template, 7, 4, "aol-source-vector", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const feature_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngSwitch", feature_r2.geometry.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngSwitchCase", "Polygon");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngSwitchCase", "Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngSwitchCase", "LineString");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngSwitchCase", "Circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngSwitchCase", "MultiPoint");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngSwitchCase", "MultiLineString");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngSwitchCase", "MultiPolygon");
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
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineComponent"]({
    type: DisplayGeometryComponent,
    selectors: [["app-display-geometry"]],
    decls: 10,
    vars: 6,
    consts: [["width", "100%", "height", "100%"], ["map", ""], [3, "zoom"], [3, "x", "y", "srid"], [3, "opacity"], [3, "ngSwitch", 4, "ngFor", "ngForOf"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["width", "3", 3, "color"], [3, "color"], [3, "coordinates", "srid"], [3, "radius"], [3, "color", "width"], ["srid", "EPSG:4326", 3, "x", "y"], ["color", "blue", "width", "2"], ["color", "rgba(255, 255, 0, 0.5)"], ["width", "2", 3, "color"]],
    template: function DisplayGeometryComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "aol-map", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](2, "aol-interaction-default")(3, "aol-control-defaults");
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](4, "aol-view", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](5, "aol-coordinate", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](6, "aol-layer-tile", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](7, "aol-source-osm");
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](8, "aol-layer-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](9, DisplayGeometryComponent_aol_layer_vector_9_Template, 8, 8, "aol-layer-vector", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("zoom", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("x", 1)("y", 46.292896)("srid", "EPSG:4326");
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("opacity", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngForOf", ctx.features);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_24__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgSwitchCase, _libs_ng_openlayers_src_lib_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent, _libs_ng_openlayers_src_lib_view_component__WEBPACK_IMPORTED_MODULE_1__.ViewComponent, _libs_ng_openlayers_src_lib_layers_layergroup_component__WEBPACK_IMPORTED_MODULE_2__.LayerGroupComponent, _libs_ng_openlayers_src_lib_layers_layertile_component__WEBPACK_IMPORTED_MODULE_3__.LayerTileComponent, _libs_ng_openlayers_src_lib_layers_layervector_component__WEBPACK_IMPORTED_MODULE_4__.LayerVectorComponent, _libs_ng_openlayers_src_lib_sources_osm_component__WEBPACK_IMPORTED_MODULE_5__.SourceOsmComponent, _libs_ng_openlayers_src_lib_sources_vector_component__WEBPACK_IMPORTED_MODULE_6__.SourceVectorComponent, _libs_ng_openlayers_src_lib_feature_component__WEBPACK_IMPORTED_MODULE_7__.FeatureComponent, _libs_ng_openlayers_src_lib_geom_geometrylinestring_component__WEBPACK_IMPORTED_MODULE_8__.GeometryLinestringComponent, _libs_ng_openlayers_src_lib_geom_geometrymultilinestring_component__WEBPACK_IMPORTED_MODULE_9__.GeometryMultiLinestringComponent, _libs_ng_openlayers_src_lib_geom_geometrymultipoint_component__WEBPACK_IMPORTED_MODULE_10__.GeometryMultiPointComponent, _libs_ng_openlayers_src_lib_geom_geometrymultipolygon_component__WEBPACK_IMPORTED_MODULE_11__.GeometryMultiPolygonComponent, _libs_ng_openlayers_src_lib_geom_geometrypoint_component__WEBPACK_IMPORTED_MODULE_12__.GeometryPointComponent, _libs_ng_openlayers_src_lib_geom_geometrypolygon_component__WEBPACK_IMPORTED_MODULE_13__.GeometryPolygonComponent, _libs_ng_openlayers_src_lib_geom_geometrycircle_component__WEBPACK_IMPORTED_MODULE_14__.GeometryCircleComponent, _libs_ng_openlayers_src_lib_coordinate_component__WEBPACK_IMPORTED_MODULE_15__.CoordinateComponent, _libs_ng_openlayers_src_lib_collectioncoordinates_component__WEBPACK_IMPORTED_MODULE_16__.CollectionCoordinatesComponent, _libs_ng_openlayers_src_lib_styles_style_component__WEBPACK_IMPORTED_MODULE_17__.StyleComponent, _libs_ng_openlayers_src_lib_styles_circle_component__WEBPACK_IMPORTED_MODULE_18__.StyleCircleComponent, _libs_ng_openlayers_src_lib_styles_fill_component__WEBPACK_IMPORTED_MODULE_19__.StyleFillComponent, _libs_ng_openlayers_src_lib_styles_stroke_component__WEBPACK_IMPORTED_MODULE_20__.StyleStrokeComponent, _libs_ng_openlayers_src_lib_controls_default_component__WEBPACK_IMPORTED_MODULE_21__.DefaultControlComponent, _libs_ng_openlayers_src_lib_interactions_default_component__WEBPACK_IMPORTED_MODULE_22__.DefaultInteractionComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 874:
/*!********************************************************************************!*\
  !*** ./apps/demo-ng-openlayers/src/app/draw-polygon/draw-polygon.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DrawPolygonComponent: () => (/* binding */ DrawPolygonComponent)
/* harmony export */ });
/* harmony import */ var ol_interaction_Draw__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ol/interaction/Draw */ 8934);
/* harmony import */ var ol_proj_Projection__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ol/proj/Projection */ 4714);
/* harmony import */ var ol_geom_Polygon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ol/geom/Polygon */ 6646);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _libs_ng_openlayers_src_lib_map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/map.component */ 7478);
/* harmony import */ var _libs_ng_openlayers_src_lib_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/view.component */ 8525);
/* harmony import */ var _libs_ng_openlayers_src_lib_layers_layertile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/layers/layertile.component */ 2474);
/* harmony import */ var _libs_ng_openlayers_src_lib_layers_layervector_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/layers/layervector.component */ 3649);
/* harmony import */ var _libs_ng_openlayers_src_lib_sources_osm_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/sources/osm.component */ 1537);
/* harmony import */ var _libs_ng_openlayers_src_lib_sources_vector_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/sources/vector.component */ 2263);
/* harmony import */ var _libs_ng_openlayers_src_lib_feature_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/feature.component */ 4374);
/* harmony import */ var _libs_ng_openlayers_src_lib_geom_geometrypolygon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/geom/geometrypolygon.component */ 7750);
/* harmony import */ var _libs_ng_openlayers_src_lib_coordinate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/coordinate.component */ 2339);
/* harmony import */ var _libs_ng_openlayers_src_lib_collectioncoordinates_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/collectioncoordinates.component */ 6495);
/* harmony import */ var _libs_ng_openlayers_src_lib_interactions_default_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/interactions/default.component */ 7362);
/* harmony import */ var _libs_ng_openlayers_src_lib_interactions_draw_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/interactions/draw.component */ 1543);

















function DrawPolygonComponent_aol_interaction_draw_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "aol-interaction-draw", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("drawEnd", function DrawPolygonComponent_aol_interaction_draw_3_Template_aol_interaction_draw_drawEnd_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.endDraw($event.feature));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("geometryFunction", ctx_r1.drawBoxGeometryFunction);
  }
}
function DrawPolygonComponent_aol_layer_vector_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "aol-layer-vector")(1, "aol-source-vector")(2, "aol-feature")(3, "aol-geometry-polygon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](4, "aol-collection-coordinates", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("coordinates", ctx_r2.feature.geometry.coordinates)("srid", "EPSG:4326");
  }
}
class DrawPolygonComponent {
  constructor() {
    this.isDrawing = false;
    this.drawBoxGeometryFunction = (0,ol_interaction_Draw__WEBPACK_IMPORTED_MODULE_13__.createBox)();
  }
  ngOnInit() {}
  drawMode() {
    this.isDrawing = !this.isDrawing;
  }
  endDraw(feature) {
    const olGeomPolygon = (0,ol_geom_Polygon__WEBPACK_IMPORTED_MODULE_14__.fromExtent)(feature.getGeometry().getExtent());
    olGeomPolygon.transform(new ol_proj_Projection__WEBPACK_IMPORTED_MODULE_15__["default"]({
      code: 'EPSG:3857'
    }), new ol_proj_Projection__WEBPACK_IMPORTED_MODULE_15__["default"]({
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
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
    type: DrawPolygonComponent,
    selectors: [["app-draw-polygon"]],
    decls: 19,
    vars: 11,
    consts: [["width", "100%", "height", "100%"], ["map", ""], ["type", "Circle", 3, "geometryFunction", "drawEnd", 4, "ngIf"], [3, "zoom"], [3, "x", "y", "srid"], [3, "opacity"], [4, "ngIf"], [1, "info"], [1, "draw-section"], [3, "click"], ["type", "Circle", 3, "geometryFunction", "drawEnd"], [3, "coordinates", "srid"]],
    template: function DrawPolygonComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "aol-map", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "aol-interaction-default");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, DrawPolygonComponent_aol_interaction_draw_3_Template, 1, 1, "aol-interaction-draw", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "aol-view", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](5, "aol-coordinate", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "aol-layer-tile", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](7, "aol-source-osm");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, DrawPolygonComponent_aol_layer_vector_8_Template, 5, 2, "aol-layer-vector", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "div", 7)(10, "div", 8)(11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function DrawPolygonComponent_Template_button_click_11_listener() {
          return ctx.drawMode();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14, "Result");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "code")(16, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](18, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.isDrawing);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("zoom", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("x", 1.4886)("y", 43.5554)("srid", "EPSG:4326");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("opacity", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.feature);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx.isDrawing ? "End draw" : "Start draw");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](18, 9, ctx.feature));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _libs_ng_openlayers_src_lib_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent, _libs_ng_openlayers_src_lib_view_component__WEBPACK_IMPORTED_MODULE_1__.ViewComponent, _libs_ng_openlayers_src_lib_layers_layertile_component__WEBPACK_IMPORTED_MODULE_2__.LayerTileComponent, _libs_ng_openlayers_src_lib_layers_layervector_component__WEBPACK_IMPORTED_MODULE_3__.LayerVectorComponent, _libs_ng_openlayers_src_lib_sources_osm_component__WEBPACK_IMPORTED_MODULE_4__.SourceOsmComponent, _libs_ng_openlayers_src_lib_sources_vector_component__WEBPACK_IMPORTED_MODULE_5__.SourceVectorComponent, _libs_ng_openlayers_src_lib_feature_component__WEBPACK_IMPORTED_MODULE_6__.FeatureComponent, _libs_ng_openlayers_src_lib_geom_geometrypolygon_component__WEBPACK_IMPORTED_MODULE_7__.GeometryPolygonComponent, _libs_ng_openlayers_src_lib_coordinate_component__WEBPACK_IMPORTED_MODULE_8__.CoordinateComponent, _libs_ng_openlayers_src_lib_collectioncoordinates_component__WEBPACK_IMPORTED_MODULE_9__.CollectionCoordinatesComponent, _libs_ng_openlayers_src_lib_interactions_default_component__WEBPACK_IMPORTED_MODULE_10__.DefaultInteractionComponent, _libs_ng_openlayers_src_lib_interactions_draw_component__WEBPACK_IMPORTED_MODULE_11__.DrawInteractionComponent, _angular_common__WEBPACK_IMPORTED_MODULE_16__.JsonPipe],
    styles: ["[_nghost-%COMP%] {\n        height: 100%;\n        display: flex;\n      }\n\n      aol-map[_ngcontent-%COMP%] {\n        width: 70%;\n      }\n\n      .info[_ngcontent-%COMP%] {\n        width: 28%;\n        padding: 1rem;\n      }\n    \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvZGVtby1uZy1vcGVubGF5ZXJzL3NyYy9hcHAvZHJhdy1wb2x5Z29uL2RyYXctcG9seWdvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0UsWUFBWTtRQUNaLGFBQWE7TUFDZjs7TUFFQTtRQUNFLFVBQVU7TUFDWjs7TUFFQTtRQUNFLFVBQVU7UUFDVixhQUFhO01BQ2YiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIDpob3N0IHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgfVxuXG4gICAgICBhb2wtbWFwIHtcbiAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgIH1cblxuICAgICAgLmluZm8ge1xuICAgICAgICB3aWR0aDogMjglO1xuICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgfVxuICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 14:
/*!*********************************************************!*\
  !*** ./apps/demo-ng-openlayers/src/app/example-list.ts ***!
  \*********************************************************/
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

/***/ 8269:
/*!**********************************************************************************!*\
  !*** ./apps/demo-ng-openlayers/src/app/examples-item/examples-item.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExamplesItemComponent: () => (/* binding */ ExamplesItemComponent)
/* harmony export */ });
/* harmony import */ var _example_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../example-list */ 14);
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
    styles: ["[_nghost-%COMP%] {\n        height: 100%;\n        display: flex;\n        flex-direction: column;\n      }\n\n      .example-info[_ngcontent-%COMP%] {\n        flex: 0 1 auto;\n        padding: 2rem 1rem;\n        display: flex;\n        flex-direction: column;\n        font-family: Roboto, Arial, sans-serif;\n      }\n\n      .example-info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n        font-family: Roboto, sans-serif;\n        margin-top: 0px;\n        color: rgba(0, 0, 0, 0.87);\n        font-size: 25px;\n        font-weight: 700;\n        padding-bottom: 0.5rem;\n      }\n      .example-info[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n        color: rgba(0, 0, 0, 0.6);\n        line-height: 24px;\n        padding-bottom: 0.5rem;\n      }\n      .example-info[_ngcontent-%COMP%]   .open-layers-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        margin-bottom: 0px;\n        color: rgba(0, 0, 0, 0.6);\n        font-size: 12px;\n      }\n\n      .example[_ngcontent-%COMP%] {\n        flex: 1 1 auto;\n      }\n    \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvZGVtby1uZy1vcGVubGF5ZXJzL3NyYy9hcHAvZXhhbXBsZXMtaXRlbS9leGFtcGxlcy1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxZQUFZO1FBQ1osYUFBYTtRQUNiLHNCQUFzQjtNQUN4Qjs7TUFFQTtRQUNFLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixzQ0FBc0M7TUFDeEM7O01BRUE7UUFDRSwrQkFBK0I7UUFDL0IsZUFBZTtRQUNmLDBCQUEwQjtRQUMxQixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLHNCQUFzQjtNQUN4QjtNQUNBO1FBQ0UseUJBQXlCO1FBQ3pCLGlCQUFpQjtRQUNqQixzQkFBc0I7TUFDeEI7TUFDQTtRQUNFLGtCQUFrQjtRQUNsQix5QkFBeUI7UUFDekIsZUFBZTtNQUNqQjs7TUFFQTtRQUNFLGNBQWM7TUFDaEIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIDpob3N0IHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgfVxuXG4gICAgICAuZXhhbXBsZS1pbmZvIHtcbiAgICAgICAgZmxleDogMCAxIGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDJyZW0gMXJlbTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICB9XG5cbiAgICAgIC5leGFtcGxlLWluZm8gLnRpdGxlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xuICAgICAgfVxuICAgICAgLmV4YW1wbGUtaW5mbyAuZGVzY3JpcHRpb24ge1xuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbiAgICAgIH1cbiAgICAgIC5leGFtcGxlLWluZm8gLm9wZW4tbGF5ZXJzLWxpbmsgYSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgfVxuXG4gICAgICAuZXhhbXBsZSB7XG4gICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgfVxuICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 5253:
/*!**********************************************************************************!*\
  !*** ./apps/demo-ng-openlayers/src/app/examples-list/examples-list.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExamplesListComponent: () => (/* binding */ ExamplesListComponent)
/* harmony export */ });
/* harmony import */ var _example_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../example-list */ 14);
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
    styles: [".search[_ngcontent-%COMP%] {\n        display: flex;\n        justify-content: center;\n        padding: 1rem;\n      }\n      .example-item[_ngcontent-%COMP%] {\n        display: flex;\n        flex-direction: column;\n        padding: 10px;\n        background-color: #f5f5f5;\n        height: 140px;\n        margin: 10px 0;\n        overflow: auto;\n        line-height: 1.42857143;\n        color: black;\n        font-family: Roboto, Arial, sans-serif;\n        font-weight: 400;\n        cursor: pointer;\n      }\n\n      .example-item[_ngcontent-%COMP%]:hover {\n        background-color: #ddd;\n      }\n\n      .wrapper[_ngcontent-%COMP%] {\n        display: grid;\n        grid-template-columns: repeat(3, 1fr);\n        grid-gap: 10px;\n        grid-auto-rows: minmax(100px, auto);\n      }\n\n      .title[_ngcontent-%COMP%] {\n        margin-top: 0px;\n        color: rgba(0, 0, 0, 0.87);\n        font-size: 18px;\n        font-weight: 500;\n        padding-bottom: 0.5rem;\n      }\n\n      .description[_ngcontent-%COMP%] {\n        color: rgba(0, 0, 0, 0.6);\n        line-height: 24px;\n        padding-bottom: 0.5rem;\n      }\n\n      .open-layers-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        margin-bottom: 0px;\n        color: rgba(0, 0, 0, 0.6);\n        font-size: 12px;\n      }\n    \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvZGVtby1uZy1vcGVubGF5ZXJzL3NyYy9hcHAvZXhhbXBsZXMtbGlzdC9leGFtcGxlcy1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLGFBQWE7TUFDZjtNQUNBO1FBQ0UsYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixhQUFhO1FBQ2IseUJBQXlCO1FBQ3pCLGFBQWE7UUFDYixjQUFjO1FBQ2QsY0FBYztRQUNkLHVCQUF1QjtRQUN2QixZQUFZO1FBQ1osc0NBQXNDO1FBQ3RDLGdCQUFnQjtRQUNoQixlQUFlO01BQ2pCOztNQUVBO1FBQ0Usc0JBQXNCO01BQ3hCOztNQUVBO1FBQ0UsYUFBYTtRQUNiLHFDQUFxQztRQUNyQyxjQUFjO1FBQ2QsbUNBQW1DO01BQ3JDOztNQUVBO1FBQ0UsZUFBZTtRQUNmLDBCQUEwQjtRQUMxQixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLHNCQUFzQjtNQUN4Qjs7TUFFQTtRQUNFLHlCQUF5QjtRQUN6QixpQkFBaUI7UUFDakIsc0JBQXNCO01BQ3hCOztNQUVBO1FBQ0Usa0JBQWtCO1FBQ2xCLHlCQUF5QjtRQUN6QixlQUFlO01BQ2pCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAuc2VhcmNoIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICB9XG4gICAgICAuZXhhbXBsZS1pdGVtIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICAgICAgaGVpZ2h0OiAxNDBweDtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuXG4gICAgICAuZXhhbXBsZS1pdGVtOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgICAgIH1cblxuICAgICAgLndyYXBwZXIge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICAgICAgICBncmlkLWdhcDogMTBweDtcbiAgICAgICAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCgxMDBweCwgYXV0byk7XG4gICAgICB9XG5cbiAgICAgIC50aXRsZSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbiAgICAgIH1cblxuICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG4gICAgICB9XG5cbiAgICAgIC5vcGVuLWxheWVycy1saW5rIGEge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIH1cbiAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 5206:
/*!**************************************************************************!*\
  !*** ./apps/demo-ng-openlayers/src/app/graticule/graticule.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GraticuleComponent: () => (/* binding */ GraticuleComponent)
/* harmony export */ });
/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ol/style */ 9527);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _libs_ng_openlayers_src_lib_map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/map.component */ 7478);
/* harmony import */ var _libs_ng_openlayers_src_lib_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/view.component */ 8525);
/* harmony import */ var _libs_ng_openlayers_src_lib_graticule_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/graticule.component */ 7357);
/* harmony import */ var _libs_ng_openlayers_src_lib_layers_layertile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/layers/layertile.component */ 2474);
/* harmony import */ var _libs_ng_openlayers_src_lib_sources_osm_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/sources/osm.component */ 1537);
/* harmony import */ var _libs_ng_openlayers_src_lib_coordinate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/coordinate.component */ 2339);
/* harmony import */ var _libs_ng_openlayers_src_lib_controls_default_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/controls/default.component */ 5976);
/* harmony import */ var _libs_ng_openlayers_src_lib_controls_fullscreen_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/controls/fullscreen.component */ 7921);
/* harmony import */ var _libs_ng_openlayers_src_lib_interactions_default_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/interactions/default.component */ 7362);













function GraticuleComponent_aol_graticule_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "aol-graticule", 7);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("strokeStyle", ctx_r0.graticuleStyle)("showLabels", true);
  }
}
class GraticuleComponent {
  constructor() {
    this.zoom = 4;
    this.opacity = 1.0;
    this.shownGraticule = true;
    this.graticuleStyle = new ol_style__WEBPACK_IMPORTED_MODULE_10__["default"]({
      color: 'rgba(255,120,0,0.9)',
      width: 2,
      lineDash: [0.5, 4]
    });
  }
  static #_ = this.ɵfac = function GraticuleComponent_Factory(t) {
    return new (t || GraticuleComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: GraticuleComponent,
    selectors: [["app-root"]],
    decls: 13,
    vars: 5,
    consts: [["width", "100%", "height", "100%"], [3, "zoom"], [3, "x", "y"], [3, "strokeStyle", "showLabels", 4, "ngIf"], [1, "controls"], ["type", "checkbox", "id", "graticule", "name", "graticule", 3, "ngModel", "ngModelChange"], ["for", "graticule"], [3, "strokeStyle", "showLabels"]],
    template: function GraticuleComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "aol-map", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "aol-interaction-default")(2, "aol-control-defaults")(3, "aol-control-fullscreen");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "aol-view", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "aol-coordinate", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "aol-layer-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "aol-source-osm");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, GraticuleComponent_aol_graticule_8_Template, 1, 2, "aol-graticule", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 4)(10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function GraticuleComponent_Template_input_ngModelChange_10_listener($event) {
          return ctx.shownGraticule = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "Toggle graticule");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("zoom", ctx.zoom);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("x", -10997148)("y", 4569099);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.shownGraticule);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.shownGraticule);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _libs_ng_openlayers_src_lib_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent, _libs_ng_openlayers_src_lib_view_component__WEBPACK_IMPORTED_MODULE_1__.ViewComponent, _libs_ng_openlayers_src_lib_graticule_component__WEBPACK_IMPORTED_MODULE_2__.GraticuleComponent, _libs_ng_openlayers_src_lib_layers_layertile_component__WEBPACK_IMPORTED_MODULE_3__.LayerTileComponent, _libs_ng_openlayers_src_lib_sources_osm_component__WEBPACK_IMPORTED_MODULE_4__.SourceOsmComponent, _libs_ng_openlayers_src_lib_coordinate_component__WEBPACK_IMPORTED_MODULE_5__.CoordinateComponent, _libs_ng_openlayers_src_lib_controls_default_component__WEBPACK_IMPORTED_MODULE_6__.DefaultControlComponent, _libs_ng_openlayers_src_lib_controls_fullscreen_component__WEBPACK_IMPORTED_MODULE_7__.ControlFullScreenComponent, _libs_ng_openlayers_src_lib_interactions_default_component__WEBPACK_IMPORTED_MODULE_8__.DefaultInteractionComponent],
    styles: ["[_nghost-%COMP%] {\n        height: 100%;\n        display: flex;\n      }\n\n      aol-map[_ngcontent-%COMP%] {\n        width: 80%;\n      }\n\n      .controls[_ngcontent-%COMP%] {\n        width: 18%;\n        padding: 1rem;\n      }\n    \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvZGVtby1uZy1vcGVubGF5ZXJzL3NyYy9hcHAvZ3JhdGljdWxlL2dyYXRpY3VsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0UsWUFBWTtRQUNaLGFBQWE7TUFDZjs7TUFFQTtRQUNFLFVBQVU7TUFDWjs7TUFFQTtRQUNFLFVBQVU7UUFDVixhQUFhO01BQ2YiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIDpob3N0IHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgfVxuXG4gICAgICBhb2wtbWFwIHtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgIH1cblxuICAgICAgLmNvbnRyb2xzIHtcbiAgICAgICAgd2lkdGg6IDE4JTtcbiAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgIH1cbiAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 8468:
/*!********************************************************************************!*\
  !*** ./apps/demo-ng-openlayers/src/app/image-static/image-static.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageStaticComponent: () => (/* binding */ ImageStaticComponent)
/* harmony export */ });
/* harmony import */ var ol_extent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/extent */ 3133);
/* harmony import */ var ol_proj_Projection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/proj/Projection */ 4714);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _libs_ng_openlayers_src_lib_map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/map.component */ 7478);
/* harmony import */ var _libs_ng_openlayers_src_lib_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/view.component */ 8525);
/* harmony import */ var _libs_ng_openlayers_src_lib_layers_layerimage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/layers/layerimage.component */ 5089);
/* harmony import */ var _libs_ng_openlayers_src_lib_sources_imagestatic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/sources/imagestatic.component */ 4796);








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
    this.projection = new ol_proj_Projection__WEBPACK_IMPORTED_MODULE_4__["default"](this.po);
    this.getCenter = ext => (0,ol_extent__WEBPACK_IMPORTED_MODULE_5__.getCenter)(ext);
  }
  onUrlChange(evt) {
    this.url = evt.target.value;
  }
  static #_ = this.ɵfac = function ImageStaticComponent_Factory(t) {
    return new (t || ImageStaticComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: ImageStaticComponent,
    selectors: [["app-root"]],
    decls: 11,
    vars: 11,
    consts: [[3, "width", "height"], [3, "projection", "zoom", "center"], [3, "opacity", "extent"], [3, "url", "projection", "imageExtent"], [1, "controls"], [3, "change"], ["value", "https://imgs.xkcd.com/comics/online_communities.png"], ["value", "https://pbs.twimg.com/media/D7IgamEUEAA5DHE.jpg"]],
    template: function ImageStaticComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "aol-map", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "aol-view", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "aol-layer-image", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "aol-source-imagestatic", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " Current image url: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function ImageStaticComponent_Template_select_change_6_listener($event) {
          return ctx.onUrlChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, " https://imgs.xkcd.com/comics/online_communities.png ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, " https://pbs.twimg.com/media/D7IgamEUEAA5DHE.jpg ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("width", "100%")("height", "100%");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("projection", ctx.projection)("zoom", 2)("center", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](10, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("opacity", ctx.opacity)("extent", ctx.extent);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("url", ctx.url)("projection", ctx.projection)("imageExtent", ctx.extent);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _libs_ng_openlayers_src_lib_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent, _libs_ng_openlayers_src_lib_view_component__WEBPACK_IMPORTED_MODULE_1__.ViewComponent, _libs_ng_openlayers_src_lib_layers_layerimage_component__WEBPACK_IMPORTED_MODULE_2__.LayerImageComponent, _libs_ng_openlayers_src_lib_sources_imagestatic_component__WEBPACK_IMPORTED_MODULE_3__.SourceImageStaticComponent],
    styles: ["[_nghost-%COMP%] {\n        height: 100%;\n        display: flex;\n      }\n\n      aol-map[_ngcontent-%COMP%] {\n        width: 70%;\n      }\n\n      .controls[_ngcontent-%COMP%] {\n        width: 28%;\n        padding: 1rem;\n      }\n    \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvZGVtby1uZy1vcGVubGF5ZXJzL3NyYy9hcHAvaW1hZ2Utc3RhdGljL2ltYWdlLXN0YXRpYy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0UsWUFBWTtRQUNaLGFBQWE7TUFDZjs7TUFFQTtRQUNFLFVBQVU7TUFDWjs7TUFFQTtRQUNFLFVBQVU7UUFDVixhQUFhO01BQ2YiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIDpob3N0IHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgfVxuXG4gICAgICBhb2wtbWFwIHtcbiAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgIH1cblxuICAgICAgLmNvbnRyb2xzIHtcbiAgICAgICAgd2lkdGg6IDI4JTtcbiAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgIH1cbiAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 8174:
/*!**************************************************************************!*\
  !*** ./apps/demo-ng-openlayers/src/app/image-wms/image-wms.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageWMSComponent: () => (/* binding */ ImageWMSComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _libs_ng_openlayers_src_lib_map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/map.component */ 7478);
/* harmony import */ var _libs_ng_openlayers_src_lib_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/view.component */ 8525);
/* harmony import */ var _libs_ng_openlayers_src_lib_layers_layerimage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/layers/layerimage.component */ 5089);
/* harmony import */ var _libs_ng_openlayers_src_lib_sources_imagewms_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/sources/imagewms.component */ 8317);
/* harmony import */ var _libs_ng_openlayers_src_lib_coordinate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/coordinate.component */ 2339);
/* harmony import */ var _libs_ng_openlayers_src_lib_interactions_default_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/interactions/default.component */ 7362);







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
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: ImageWMSComponent,
    selectors: [["app-root"]],
    decls: 7,
    vars: 5,
    consts: [["width", "100%", "height", "100%"], ["map", ""], ["zoom", "4"], [3, "x", "y"], [3, "url", "params", "serverType", "imageLoadStart", "imageLoadEnd"]],
    template: function ImageWMSComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "aol-map", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "aol-interaction-default");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "aol-view", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "aol-coordinate", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "aol-layer-image")(6, "aol-source-imagewms", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("imageLoadStart", function ImageWMSComponent_Template_aol_source_imagewms_imageLoadStart_6_listener() {
          return ctx.imageLoadStart();
        })("imageLoadEnd", function ImageWMSComponent_Template_aol_source_imagewms_imageLoadEnd_6_listener() {
          return ctx.imageLoadEnd();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("x", -10997148)("y", 4569099);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("url", "https://ahocevar.com/geoserver/wms")("params", ctx.params)("serverType", "geoserver");
      }
    },
    dependencies: [_libs_ng_openlayers_src_lib_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent, _libs_ng_openlayers_src_lib_view_component__WEBPACK_IMPORTED_MODULE_1__.ViewComponent, _libs_ng_openlayers_src_lib_layers_layerimage_component__WEBPACK_IMPORTED_MODULE_2__.LayerImageComponent, _libs_ng_openlayers_src_lib_sources_imagewms_component__WEBPACK_IMPORTED_MODULE_3__.SourceImageWMSComponent, _libs_ng_openlayers_src_lib_coordinate_component__WEBPACK_IMPORTED_MODULE_4__.CoordinateComponent, _libs_ng_openlayers_src_lib_interactions_default_component__WEBPACK_IMPORTED_MODULE_5__.DefaultInteractionComponent],
    styles: ["map[_ngcontent-%COMP%] {\n        background: #e0eced;\n      }\n    \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvZGVtby1uZy1vcGVubGF5ZXJzL3NyYy9hcHAvaW1hZ2Utd21zL2ltYWdlLXdtcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0UsbUJBQW1CO01BQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICBtYXAge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZTBlY2VkO1xuICAgICAgfVxuICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 809:
/*!********************************************************************************!*\
  !*** ./apps/demo-ng-openlayers/src/app/map-position/map-position.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MapPositionComponent: () => (/* binding */ MapPositionComponent)
/* harmony export */ });
/* harmony import */ var ol_proj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ol/proj */ 6395);
/* harmony import */ var ol_proj_Projection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/proj/Projection */ 4714);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _libs_ng_openlayers_src_lib_map_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/map.component */ 7478);
/* harmony import */ var _libs_ng_openlayers_src_lib_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/view.component */ 8525);
/* harmony import */ var _libs_ng_openlayers_src_lib_layers_layertile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/layers/layertile.component */ 2474);
/* harmony import */ var _libs_ng_openlayers_src_lib_sources_osm_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/sources/osm.component */ 1537);
/* harmony import */ var _libs_ng_openlayers_src_lib_coordinate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/coordinate.component */ 2339);
/* harmony import */ var _libs_ng_openlayers_src_lib_controls_default_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/controls/default.component */ 5976);
/* harmony import */ var _libs_ng_openlayers_src_lib_interactions_default_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/interactions/default.component */ 7362);











const _c0 = ["map"];
const _c1 = ["view"];
class MapPositionComponent {
  constructor(fb) {
    this.fb = fb;
    this.displayProj = new ol_proj_Projection__WEBPACK_IMPORTED_MODULE_8__["default"]({
      code: 'EPSG:3857'
    });
    this.inputProj = new ol_proj_Projection__WEBPACK_IMPORTED_MODULE_8__["default"]({
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
    return new (t || MapPositionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.UntypedFormBuilder));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: MapPositionComponent,
    selectors: [["app-map-position"]],
    viewQuery: function MapPositionComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c1, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.map = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.view = _t.first);
      }
    },
    decls: 35,
    vars: 8,
    consts: [["width", "100%", "height", "100%", 3, "moveStart", "moveEnd"], ["map", ""], [3, "zoom"], ["view", ""], ["srid", "EPSG:4326", 3, "x", "y"], [3, "opacity"], [1, "info"], [1, "current-coordinates"], [1, "update-coordinates"], [3, "formGroup"], [1, "row"], ["min", "0", "type", "number", "formControlName", "x"], ["min", "0", "type", "number", "formControlName", "y"], ["min", "0", "type", "number", "formControlName", "zoom"]],
    template: function MapPositionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "aol-map", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("moveStart", function MapPositionComponent_Template_aol_map_moveStart_0_listener() {
          return ctx.startMoving();
        })("moveEnd", function MapPositionComponent_Template_aol_map_moveEnd_0_listener() {
          return ctx.displayCoordinates();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "aol-interaction-default")(3, "aol-control-defaults");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "aol-view", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "aol-coordinate", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "aol-layer-tile", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "aol-source-osm");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 6)(10, "div", 7)(11, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "Map coordinates");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "div", 8)(20, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, "Update coordinates");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "form", 9)(23, "div", 10)(24, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25, "Longitude:");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](26, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "div", 10)(28, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29, "Latitude:");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](30, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "div", 10)(32, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33, "Zoom:");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](34, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("zoom", ctx.form.get("zoom").value);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("x", ctx.form.get("x").value)("y", ctx.form.get("y").value);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("opacity", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Longitude: ", ctx.moving ? "----" : ctx.currentLon, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Latitude: ", ctx.moving ? "----" : ctx.currentLat, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Zoom: ", ctx.moving ? "----" : ctx.currentZoom, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.form);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.MinValidator, _libs_ng_openlayers_src_lib_map_component__WEBPACK_IMPORTED_MODULE_1__.MapComponent, _libs_ng_openlayers_src_lib_view_component__WEBPACK_IMPORTED_MODULE_2__.ViewComponent, _libs_ng_openlayers_src_lib_layers_layertile_component__WEBPACK_IMPORTED_MODULE_3__.LayerTileComponent, _libs_ng_openlayers_src_lib_sources_osm_component__WEBPACK_IMPORTED_MODULE_4__.SourceOsmComponent, _libs_ng_openlayers_src_lib_coordinate_component__WEBPACK_IMPORTED_MODULE_5__.CoordinateComponent, _libs_ng_openlayers_src_lib_controls_default_component__WEBPACK_IMPORTED_MODULE_6__.DefaultControlComponent, _libs_ng_openlayers_src_lib_interactions_default_component__WEBPACK_IMPORTED_MODULE_7__.DefaultInteractionComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName],
    styles: ["[_nghost-%COMP%] {\n        height: 100%;\n        display: flex;\n      }\n\n      aol-map[_ngcontent-%COMP%] {\n        width: 70%;\n      }\n\n      .info[_ngcontent-%COMP%] {\n        width: 28%;\n        padding: 1rem;\n      }\n\n      .current-coordinates[_ngcontent-%COMP%] {\n        display: flex;\n        flex-direction: column;\n      }\n\n      .update-coordinates[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n        display: flex;\n        flex-direction: column;\n      }\n\n      .row[_ngcontent-%COMP%] {\n        padding: 1rem;\n      }\n\n      .row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n        min-width: 5rem;\n        display: inline-block;\n        float: left;\n      }\n\n      .row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n        width: calc(50% - 5rem);\n        display: inline-block;\n        float: left;\n      }\n    \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvZGVtby1uZy1vcGVubGF5ZXJzL3NyYy9hcHAvbWFwLXBvc2l0aW9uL21hcC1wb3NpdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0UsWUFBWTtRQUNaLGFBQWE7TUFDZjs7TUFFQTtRQUNFLFVBQVU7TUFDWjs7TUFFQTtRQUNFLFVBQVU7UUFDVixhQUFhO01BQ2Y7O01BRUE7UUFDRSxhQUFhO1FBQ2Isc0JBQXNCO01BQ3hCOztNQUVBO1FBQ0UsYUFBYTtRQUNiLHNCQUFzQjtNQUN4Qjs7TUFFQTtRQUNFLGFBQWE7TUFDZjs7TUFFQTtRQUNFLGVBQWU7UUFDZixxQkFBcUI7UUFDckIsV0FBVztNQUNiOztNQUVBO1FBQ0UsdUJBQXVCO1FBQ3ZCLHFCQUFxQjtRQUNyQixXQUFXO01BQ2IiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIDpob3N0IHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgfVxuXG4gICAgICBhb2wtbWFwIHtcbiAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgIH1cblxuICAgICAgLmluZm8ge1xuICAgICAgICB3aWR0aDogMjglO1xuICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgfVxuXG4gICAgICAuY3VycmVudC1jb29yZGluYXRlcyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICB9XG5cbiAgICAgIC51cGRhdGUtY29vcmRpbmF0ZXMgZm9ybSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICB9XG5cbiAgICAgIC5yb3cge1xuICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgfVxuXG4gICAgICAucm93IGxhYmVsIHtcbiAgICAgICAgbWluLXdpZHRoOiA1cmVtO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgfVxuXG4gICAgICAucm93IGlucHV0IHtcbiAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gNXJlbSk7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICB9XG4gICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3162:
/*!********************************************************************!*\
  !*** ./apps/demo-ng-openlayers/src/app/marker/marker.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MarkerComponent: () => (/* binding */ MarkerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _libs_ng_openlayers_src_lib_map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/map.component */ 7478);
/* harmony import */ var _libs_ng_openlayers_src_lib_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/view.component */ 8525);
/* harmony import */ var _libs_ng_openlayers_src_lib_layers_layertile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/layers/layertile.component */ 2474);
/* harmony import */ var _libs_ng_openlayers_src_lib_layers_layervector_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/layers/layervector.component */ 3649);
/* harmony import */ var _libs_ng_openlayers_src_lib_sources_osm_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/sources/osm.component */ 1537);
/* harmony import */ var _libs_ng_openlayers_src_lib_sources_vector_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/sources/vector.component */ 2263);
/* harmony import */ var _libs_ng_openlayers_src_lib_feature_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/feature.component */ 4374);
/* harmony import */ var _libs_ng_openlayers_src_lib_geom_geometrypoint_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/geom/geometrypoint.component */ 707);
/* harmony import */ var _libs_ng_openlayers_src_lib_coordinate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/coordinate.component */ 2339);
/* harmony import */ var _libs_ng_openlayers_src_lib_styles_style_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/styles/style.component */ 5960);
/* harmony import */ var _libs_ng_openlayers_src_lib_styles_icon_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/styles/icon.component */ 2856);
/* harmony import */ var _libs_ng_openlayers_src_lib_controls_default_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/controls/default.component */ 5976);
/* harmony import */ var _libs_ng_openlayers_src_lib_interactions_default_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/interactions/default.component */ 7362);















const _c0 = () => [0.5, 1];
function MarkerComponent_aol_layer_vector_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "aol-layer-vector")(1, "aol-source-vector", null, 6)(3, "aol-feature")(4, "aol-geometry-point");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](5, "aol-coordinate", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "aol-style");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](7, "aol-style-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("x", ctx_r1.marker.lon)("y", ctx_r1.marker.lat)("srid", "EPSG:4326");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("src", "assets/marker.svg")("anchor", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](9, _c0))("anchorXUnits", "fraction")("anchorYUnits", "fraction")("scale", 2)("anchorOrigin", "top-left");
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
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
    type: MarkerComponent,
    selectors: [["app-display-marker"]],
    decls: 9,
    vars: 6,
    consts: [["width", "100%", "height", "100%"], ["map", ""], [3, "zoom"], [3, "x", "y", "srid"], [3, "opacity"], [4, "ngIf"], ["markers", ""], [3, "src", "anchor", "anchorXUnits", "anchorYUnits", "scale", "anchorOrigin"]],
    template: function MarkerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "aol-map", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "aol-interaction-default")(3, "aol-control-defaults");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "aol-view", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](5, "aol-coordinate", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "aol-layer-tile", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](7, "aol-source-osm");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](8, MarkerComponent_aol_layer_vector_8_Template, 8, 10, "aol-layer-vector", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("zoom", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("x", -2.269282)("y", 46.987247)("srid", "EPSG:4326");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("opacity", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.marker);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _libs_ng_openlayers_src_lib_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent, _libs_ng_openlayers_src_lib_view_component__WEBPACK_IMPORTED_MODULE_1__.ViewComponent, _libs_ng_openlayers_src_lib_layers_layertile_component__WEBPACK_IMPORTED_MODULE_2__.LayerTileComponent, _libs_ng_openlayers_src_lib_layers_layervector_component__WEBPACK_IMPORTED_MODULE_3__.LayerVectorComponent, _libs_ng_openlayers_src_lib_sources_osm_component__WEBPACK_IMPORTED_MODULE_4__.SourceOsmComponent, _libs_ng_openlayers_src_lib_sources_vector_component__WEBPACK_IMPORTED_MODULE_5__.SourceVectorComponent, _libs_ng_openlayers_src_lib_feature_component__WEBPACK_IMPORTED_MODULE_6__.FeatureComponent, _libs_ng_openlayers_src_lib_geom_geometrypoint_component__WEBPACK_IMPORTED_MODULE_7__.GeometryPointComponent, _libs_ng_openlayers_src_lib_coordinate_component__WEBPACK_IMPORTED_MODULE_8__.CoordinateComponent, _libs_ng_openlayers_src_lib_styles_style_component__WEBPACK_IMPORTED_MODULE_9__.StyleComponent, _libs_ng_openlayers_src_lib_styles_icon_component__WEBPACK_IMPORTED_MODULE_10__.StyleIconComponent, _libs_ng_openlayers_src_lib_controls_default_component__WEBPACK_IMPORTED_MODULE_11__.DefaultControlComponent, _libs_ng_openlayers_src_lib_interactions_default_component__WEBPACK_IMPORTED_MODULE_12__.DefaultInteractionComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 1256:
/*!************************************************************************************!*\
  !*** ./apps/demo-ng-openlayers/src/app/modify-polygon/modify-polygon.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModifyPolygonComponent: () => (/* binding */ ModifyPolygonComponent)
/* harmony export */ });
/* harmony import */ var ol_proj_Projection__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ol/proj/Projection */ 4714);
/* harmony import */ var ol_format__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ol/format */ 8625);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _libs_ng_openlayers_src_lib_map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/map.component */ 7478);
/* harmony import */ var _libs_ng_openlayers_src_lib_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/view.component */ 8525);
/* harmony import */ var _libs_ng_openlayers_src_lib_layers_layertile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/layers/layertile.component */ 2474);
/* harmony import */ var _libs_ng_openlayers_src_lib_layers_layervector_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/layers/layervector.component */ 3649);
/* harmony import */ var _libs_ng_openlayers_src_lib_sources_osm_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/sources/osm.component */ 1537);
/* harmony import */ var _libs_ng_openlayers_src_lib_sources_vector_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/sources/vector.component */ 2263);
/* harmony import */ var _libs_ng_openlayers_src_lib_feature_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/feature.component */ 4374);
/* harmony import */ var _libs_ng_openlayers_src_lib_geom_geometrypolygon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/geom/geometrypolygon.component */ 7750);
/* harmony import */ var _libs_ng_openlayers_src_lib_coordinate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/coordinate.component */ 2339);
/* harmony import */ var _libs_ng_openlayers_src_lib_collectioncoordinates_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/collectioncoordinates.component */ 6495);
/* harmony import */ var _libs_ng_openlayers_src_lib_interactions_default_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/interactions/default.component */ 7362);
/* harmony import */ var _libs_ng_openlayers_src_lib_interactions_select_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/interactions/select.component */ 8359);
/* harmony import */ var _libs_ng_openlayers_src_lib_interactions_modify_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/interactions/modify.component */ 6510);

















function ModifyPolygonComponent_aol_layer_vector_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "aol-layer-vector")(1, "aol-source-vector")(2, "aol-feature")(3, "aol-geometry-polygon");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](4, "aol-collection-coordinates", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("coordinates", ctx_r3.feature.geometry.coordinates)("srid", "EPSG:4326");
  }
}
class ModifyPolygonComponent {
  constructor() {
    this.format = new ol_format__WEBPACK_IMPORTED_MODULE_14__["default"]();
    this.displayProj = new ol_proj_Projection__WEBPACK_IMPORTED_MODULE_15__["default"]({
      code: 'EPSG:3857'
    });
    this.inputProj = new ol_proj_Projection__WEBPACK_IMPORTED_MODULE_15__["default"]({
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
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
    type: ModifyPolygonComponent,
    selectors: [["app-modify-polygon"]],
    decls: 19,
    vars: 11,
    consts: [["width", "100%", "height", "100%"], ["map", ""], [3, "wrapX"], ["select", ""], [3, "features", "modifyEnd"], ["modify", ""], [3, "zoom"], [3, "x", "y", "srid"], [3, "opacity"], [4, "ngIf"], [1, "info"], [3, "coordinates", "srid"]],
    template: function ModifyPolygonComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "aol-map", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "aol-interaction-default")(3, "aol-interaction-select", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "aol-interaction-modify", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("modifyEnd", function ModifyPolygonComponent_Template_aol_interaction_modify_modifyEnd_5_listener($event) {
          return ctx.modifyEnd($event.features.getArray()[0]);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "aol-view", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "aol-coordinate", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "aol-layer-tile", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](10, "aol-source-osm");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](11, ModifyPolygonComponent_aol_layer_vector_11_Template, 5, 2, "aol-layer-vector", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "div", 10)(13, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14, "Result");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "code")(16, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](18, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("wrapX", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("features", _r1.instance.getFeatures());
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("zoom", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("x", 1.4886)("y", 43.5554)("srid", "EPSG:4326");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("opacity", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.feature);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](18, 9, ctx.feature));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _libs_ng_openlayers_src_lib_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent, _libs_ng_openlayers_src_lib_view_component__WEBPACK_IMPORTED_MODULE_1__.ViewComponent, _libs_ng_openlayers_src_lib_layers_layertile_component__WEBPACK_IMPORTED_MODULE_2__.LayerTileComponent, _libs_ng_openlayers_src_lib_layers_layervector_component__WEBPACK_IMPORTED_MODULE_3__.LayerVectorComponent, _libs_ng_openlayers_src_lib_sources_osm_component__WEBPACK_IMPORTED_MODULE_4__.SourceOsmComponent, _libs_ng_openlayers_src_lib_sources_vector_component__WEBPACK_IMPORTED_MODULE_5__.SourceVectorComponent, _libs_ng_openlayers_src_lib_feature_component__WEBPACK_IMPORTED_MODULE_6__.FeatureComponent, _libs_ng_openlayers_src_lib_geom_geometrypolygon_component__WEBPACK_IMPORTED_MODULE_7__.GeometryPolygonComponent, _libs_ng_openlayers_src_lib_coordinate_component__WEBPACK_IMPORTED_MODULE_8__.CoordinateComponent, _libs_ng_openlayers_src_lib_collectioncoordinates_component__WEBPACK_IMPORTED_MODULE_9__.CollectionCoordinatesComponent, _libs_ng_openlayers_src_lib_interactions_default_component__WEBPACK_IMPORTED_MODULE_10__.DefaultInteractionComponent, _libs_ng_openlayers_src_lib_interactions_select_component__WEBPACK_IMPORTED_MODULE_11__.SelectInteractionComponent, _libs_ng_openlayers_src_lib_interactions_modify_component__WEBPACK_IMPORTED_MODULE_12__.ModifyInteractionComponent, _angular_common__WEBPACK_IMPORTED_MODULE_16__.JsonPipe],
    styles: ["[_nghost-%COMP%] {\n        height: 100%;\n        display: flex;\n      }\n\n      aol-map[_ngcontent-%COMP%] {\n        width: 70%;\n      }\n\n      .info[_ngcontent-%COMP%] {\n        width: 28%;\n        padding: 1rem;\n      }\n    \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvZGVtby1uZy1vcGVubGF5ZXJzL3NyYy9hcHAvbW9kaWZ5LXBvbHlnb24vbW9kaWZ5LXBvbHlnb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDTTtRQUNFLFlBQVk7UUFDWixhQUFhO01BQ2Y7O01BRUE7UUFDRSxVQUFVO01BQ1o7O01BRUE7UUFDRSxVQUFVO1FBQ1YsYUFBYTtNQUNmIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIH1cblxuICAgICAgYW9sLW1hcCB7XG4gICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICB9XG5cbiAgICAgIC5pbmZvIHtcbiAgICAgICAgd2lkdGg6IDI4JTtcbiAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgIH1cbiAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 2032:
/*!**********************************************************************!*\
  !*** ./apps/demo-ng-openlayers/src/app/overlay/overlay.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OverlayComponent: () => (/* binding */ OverlayComponent)
/* harmony export */ });
/* harmony import */ var ol_format__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ol/format */ 8625);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _libs_ng_openlayers_src_lib_map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/map.component */ 7478);
/* harmony import */ var _libs_ng_openlayers_src_lib_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/view.component */ 8525);
/* harmony import */ var _libs_ng_openlayers_src_lib_layers_layertile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/layers/layertile.component */ 2474);
/* harmony import */ var _libs_ng_openlayers_src_lib_layers_layervector_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/layers/layervector.component */ 3649);
/* harmony import */ var _libs_ng_openlayers_src_lib_sources_osm_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/sources/osm.component */ 1537);
/* harmony import */ var _libs_ng_openlayers_src_lib_sources_vector_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/sources/vector.component */ 2263);
/* harmony import */ var _libs_ng_openlayers_src_lib_feature_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/feature.component */ 4374);
/* harmony import */ var _libs_ng_openlayers_src_lib_geom_geometrypolygon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/geom/geometrypolygon.component */ 7750);
/* harmony import */ var _libs_ng_openlayers_src_lib_coordinate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/coordinate.component */ 2339);
/* harmony import */ var _libs_ng_openlayers_src_lib_collectioncoordinates_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/collectioncoordinates.component */ 6495);
/* harmony import */ var _libs_ng_openlayers_src_lib_controls_default_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/controls/default.component */ 5976);
/* harmony import */ var _libs_ng_openlayers_src_lib_interactions_default_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/interactions/default.component */ 7362);
/* harmony import */ var _libs_ng_openlayers_src_lib_overlay_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/overlay.component */ 1025);
/* harmony import */ var _libs_ng_openlayers_src_lib_content_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/content.component */ 7105);
















class OverlayComponent {
  constructor() {
    this.geoJsonFormat = new ol_format__WEBPACK_IMPORTED_MODULE_14__["default"]();
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
  static #_ = this.ɵfac = function OverlayComponent_Factory(t) {
    return new (t || OverlayComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
    type: OverlayComponent,
    selectors: [["app-display-overlay"]],
    decls: 18,
    vars: 13,
    consts: [["width", "100%", "height", "100%"], ["map", ""], [3, "zoom"], [3, "x", "y", "srid"], [3, "opacity"], [3, "coordinates", "srid"], [3, "positioning", "stopEvent"], [1, "tooltip", "tooltip-static"]],
    template: function OverlayComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "aol-map", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "aol-interaction-default")(3, "aol-control-defaults");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "aol-view", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](5, "aol-coordinate", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "aol-layer-tile", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](7, "aol-source-osm");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "aol-layer-vector")(9, "aol-source-vector")(10, "aol-feature")(11, "aol-geometry-polygon");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](12, "aol-collection-coordinates", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "aol-overlay", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](14, "aol-coordinate", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "aol-content")(16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("zoom", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("x", -2.269282)("y", 46.987247)("srid", "EPSG:4326");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("opacity", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("coordinates", ctx.feature.geometry.coordinates)("srid", "EPSG:4326");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("positioning", "center-center")("stopEvent", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("x", ctx.tooltip.lon)("y", ctx.tooltip.lat)("srid", "EPSG:4326");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx.tooltip.text);
      }
    },
    dependencies: [_libs_ng_openlayers_src_lib_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent, _libs_ng_openlayers_src_lib_view_component__WEBPACK_IMPORTED_MODULE_1__.ViewComponent, _libs_ng_openlayers_src_lib_layers_layertile_component__WEBPACK_IMPORTED_MODULE_2__.LayerTileComponent, _libs_ng_openlayers_src_lib_layers_layervector_component__WEBPACK_IMPORTED_MODULE_3__.LayerVectorComponent, _libs_ng_openlayers_src_lib_sources_osm_component__WEBPACK_IMPORTED_MODULE_4__.SourceOsmComponent, _libs_ng_openlayers_src_lib_sources_vector_component__WEBPACK_IMPORTED_MODULE_5__.SourceVectorComponent, _libs_ng_openlayers_src_lib_feature_component__WEBPACK_IMPORTED_MODULE_6__.FeatureComponent, _libs_ng_openlayers_src_lib_geom_geometrypolygon_component__WEBPACK_IMPORTED_MODULE_7__.GeometryPolygonComponent, _libs_ng_openlayers_src_lib_coordinate_component__WEBPACK_IMPORTED_MODULE_8__.CoordinateComponent, _libs_ng_openlayers_src_lib_collectioncoordinates_component__WEBPACK_IMPORTED_MODULE_9__.CollectionCoordinatesComponent, _libs_ng_openlayers_src_lib_controls_default_component__WEBPACK_IMPORTED_MODULE_10__.DefaultControlComponent, _libs_ng_openlayers_src_lib_interactions_default_component__WEBPACK_IMPORTED_MODULE_11__.DefaultInteractionComponent, _libs_ng_openlayers_src_lib_overlay_component__WEBPACK_IMPORTED_MODULE_12__.OverlayComponent, _libs_ng_openlayers_src_lib_content_component__WEBPACK_IMPORTED_MODULE_13__.ContentComponent],
    styles: [".tooltip[_ngcontent-%COMP%] {\n        margin-top: 35%;\n        right: 50%;\n        position: relative;\n        border-radius: 4px;\n        color: white;\n        padding: 4px 8px;\n        white-space: nowrap;\n      }\n\n      .tooltip-static[_ngcontent-%COMP%] {\n        background-color: #000000;\n        color: white;\n        border: 1px solid white;\n      }\n    \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvZGVtby1uZy1vcGVubGF5ZXJzL3NyYy9hcHAvb3ZlcmxheS9vdmVybGF5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxlQUFlO1FBQ2YsVUFBVTtRQUNWLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixtQkFBbUI7TUFDckI7O01BRUE7UUFDRSx5QkFBeUI7UUFDekIsWUFBWTtRQUNaLHVCQUF1QjtNQUN6QiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgLnRvb2x0aXAge1xuICAgICAgICBtYXJnaW4tdG9wOiAzNSU7XG4gICAgICAgIHJpZ2h0OiA1MCU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICB9XG5cbiAgICAgIC50b29sdGlwLXN0YXRpYyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgICB9XG4gICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3506:
/*!************************************************************************!*\
  !*** ./apps/demo-ng-openlayers/src/app/overview/overview.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OverviewComponent: () => (/* binding */ OverviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _libs_ng_openlayers_src_lib_map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/map.component */ 7478);
/* harmony import */ var _libs_ng_openlayers_src_lib_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/view.component */ 8525);
/* harmony import */ var _libs_ng_openlayers_src_lib_layers_layertile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/layers/layertile.component */ 2474);
/* harmony import */ var _libs_ng_openlayers_src_lib_sources_osm_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/sources/osm.component */ 1537);
/* harmony import */ var _libs_ng_openlayers_src_lib_coordinate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/coordinate.component */ 2339);
/* harmony import */ var _libs_ng_openlayers_src_lib_controls_default_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/controls/default.component */ 5976);
/* harmony import */ var _libs_ng_openlayers_src_lib_controls_overviewmap_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/controls/overviewmap.component */ 4865);
/* harmony import */ var _libs_ng_openlayers_src_lib_interactions_default_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/interactions/default.component */ 7362);









class OverviewComponent {
  constructor() {
    this.zoom = 15;
  }
  static #_ = this.ɵfac = function OverviewComponent_Factory(t) {
    return new (t || OverviewComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: OverviewComponent,
    selectors: [["app-root"]],
    decls: 10,
    vars: 5,
    consts: [["width", "100%", "height", "100%"], [3, "zoom"], ["view", ""], [3, "x", "y", "srid"], [3, "opacity"], ["osm", ""]],
    template: function OverviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "aol-map", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "aol-interaction-default")(2, "aol-control-defaults")(3, "aol-control-overviewmap");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "aol-view", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "aol-coordinate", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "aol-layer-tile", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "aol-source-osm");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("zoom", ctx.zoom);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("x", 5)("y", 45)("srid", "EPSG:4326");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("opacity", 1);
      }
    },
    dependencies: [_libs_ng_openlayers_src_lib_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent, _libs_ng_openlayers_src_lib_view_component__WEBPACK_IMPORTED_MODULE_1__.ViewComponent, _libs_ng_openlayers_src_lib_layers_layertile_component__WEBPACK_IMPORTED_MODULE_2__.LayerTileComponent, _libs_ng_openlayers_src_lib_sources_osm_component__WEBPACK_IMPORTED_MODULE_3__.SourceOsmComponent, _libs_ng_openlayers_src_lib_coordinate_component__WEBPACK_IMPORTED_MODULE_4__.CoordinateComponent, _libs_ng_openlayers_src_lib_controls_default_component__WEBPACK_IMPORTED_MODULE_5__.DefaultControlComponent, _libs_ng_openlayers_src_lib_controls_overviewmap_component__WEBPACK_IMPORTED_MODULE_6__.ControlOverviewMapComponent, _libs_ng_openlayers_src_lib_interactions_default_component__WEBPACK_IMPORTED_MODULE_7__.DefaultInteractionComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 8578:
/*!********************************************************************!*\
  !*** ./apps/demo-ng-openlayers/src/app/raster/raster.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RasterComponent: () => (/* binding */ RasterComponent),
/* harmony export */   rasterOperation: () => (/* binding */ rasterOperation)
/* harmony export */ });
/* harmony import */ var ng_openlayers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-openlayers */ 8972);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _libs_ng_openlayers_src_lib_map_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/map.component */ 7478);
/* harmony import */ var _libs_ng_openlayers_src_lib_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/view.component */ 8525);
/* harmony import */ var _libs_ng_openlayers_src_lib_layers_layerimage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/layers/layerimage.component */ 5089);
/* harmony import */ var _libs_ng_openlayers_src_lib_sources_osm_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/sources/osm.component */ 1537);
/* harmony import */ var _libs_ng_openlayers_src_lib_sources_xyz_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/sources/xyz.component */ 5831);
/* harmony import */ var _libs_ng_openlayers_src_lib_sources_raster_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/sources/raster.component */ 8827);
/* harmony import */ var _libs_ng_openlayers_src_lib_coordinate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/coordinate.component */ 2339);
/* harmony import */ var _libs_ng_openlayers_src_lib_controls_default_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/controls/default.component */ 5976);
/* harmony import */ var _libs_ng_openlayers_src_lib_controls_fullscreen_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/controls/fullscreen.component */ 7921);
/* harmony import */ var _libs_ng_openlayers_src_lib_interactions_default_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/interactions/default.component */ 7362);














function RasterComponent_aol_source_osm_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "aol-source-osm");
  }
}
function RasterComponent_aol_source_xyz_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "aol-source-xyz", 11);
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
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
    type: RasterComponent,
    selectors: [["app-raster"]],
    viewQuery: function RasterComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](ng_openlayers__WEBPACK_IMPORTED_MODULE_0__.SourceRasterComponent, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.rasterSource = _t.first);
      }
    },
    decls: 30,
    vars: 13,
    consts: [["width", "100%", "height", "100%"], [3, "zoom"], [3, "x", "y", "srid"], ["threads", "4", "operationType", "image", 3, "operation", "beforeOperations"], [4, "ngIf"], ["url", "https://c.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=0e6fc415256d4fbb9b5166a718591d71", "crossOrigin", "", 4, "ngIf"], [1, "controls"], ["type", "radio", "name", "layer", "value", "osm", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "layer", "value", "xyz", 3, "ngModel", "ngModelChange"], [1, "control"], ["type", "range", "min", "-255", "max", "255", 3, "ngModel", "ngModelChange", "input"], ["url", "https://c.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=0e6fc415256d4fbb9b5166a718591d71", "crossOrigin", ""]],
    template: function RasterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "aol-map", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "aol-interaction-default")(2, "aol-control-defaults")(3, "aol-control-fullscreen");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "aol-view", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "aol-coordinate", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "aol-layer-image")(7, "aol-source-raster", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("beforeOperations", function RasterComponent_Template_aol_source_raster_beforeOperations_7_listener($event) {
          return ctx.beforeOperations($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](8, RasterComponent_aol_source_osm_8_Template, 1, 0, "aol-source-osm", 4)(9, RasterComponent_aol_source_xyz_9_Template, 1, 0, "aol-source-xyz", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "div", 6)(11, "form")(12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function RasterComponent_Template_input_ngModelChange_12_listener($event) {
          return ctx.selectLayer = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13, "OSM");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function RasterComponent_Template_input_ngModelChange_15_listener($event) {
          return ctx.selectLayer = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16, "XYZ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "div", 9)(19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20, "Contrast : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function RasterComponent_Template_input_ngModelChange_21_listener($event) {
          return ctx.contrast = $event;
        })("input", function RasterComponent_Template_input_input_21_listener() {
          return ctx.updateRaster();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "div", 9)(25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](26, "Brightness : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function RasterComponent_Template_input_ngModelChange_27_listener($event) {
          return ctx.brightness = $event;
        })("input", function RasterComponent_Template_input_input_27_listener() {
          return ctx.updateRaster();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("zoom", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("x", 1.4886)("y", 43.5554)("srid", "EPSG:4326");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("operation", ctx.operation);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectLayer === "osm");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectLayer === "xyz");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.selectLayer);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.selectLayer);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.contrast);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" (", ctx.contrast, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.brightness);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" (", ctx.brightness, ")");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.RangeValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgForm, _libs_ng_openlayers_src_lib_map_component__WEBPACK_IMPORTED_MODULE_1__.MapComponent, _libs_ng_openlayers_src_lib_view_component__WEBPACK_IMPORTED_MODULE_2__.ViewComponent, _libs_ng_openlayers_src_lib_layers_layerimage_component__WEBPACK_IMPORTED_MODULE_3__.LayerImageComponent, _libs_ng_openlayers_src_lib_sources_osm_component__WEBPACK_IMPORTED_MODULE_4__.SourceOsmComponent, _libs_ng_openlayers_src_lib_sources_xyz_component__WEBPACK_IMPORTED_MODULE_5__.SourceXYZComponent, _libs_ng_openlayers_src_lib_sources_raster_component__WEBPACK_IMPORTED_MODULE_6__.SourceRasterComponent, _libs_ng_openlayers_src_lib_coordinate_component__WEBPACK_IMPORTED_MODULE_7__.CoordinateComponent, _libs_ng_openlayers_src_lib_controls_default_component__WEBPACK_IMPORTED_MODULE_8__.DefaultControlComponent, _libs_ng_openlayers_src_lib_controls_fullscreen_component__WEBPACK_IMPORTED_MODULE_9__.ControlFullScreenComponent, _libs_ng_openlayers_src_lib_interactions_default_component__WEBPACK_IMPORTED_MODULE_10__.DefaultInteractionComponent],
    styles: ["[_nghost-%COMP%] {\n        height: 100%;\n        display: flex;\n      }\n\n      aol-map[_ngcontent-%COMP%] {\n        width: 70%;\n      }\n\n      .controls[_ngcontent-%COMP%] {\n        width: 28%;\n        padding: 1rem;\n      }\n\n      .control[_ngcontent-%COMP%] {\n        display: flex;\n        align-items: center;\n        justify-content: flex-start;\n        margin: 20px;\n      }\n    \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvZGVtby1uZy1vcGVubGF5ZXJzL3NyYy9hcHAvcmFzdGVyL3Jhc3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0UsWUFBWTtRQUNaLGFBQWE7TUFDZjs7TUFFQTtRQUNFLFVBQVU7TUFDWjs7TUFFQTtRQUNFLFVBQVU7UUFDVixhQUFhO01BQ2Y7O01BRUE7UUFDRSxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLDJCQUEyQjtRQUMzQixZQUFZO01BQ2QiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIDpob3N0IHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgfVxuXG4gICAgICBhb2wtbWFwIHtcbiAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgIH1cblxuICAgICAgLmNvbnRyb2xzIHtcbiAgICAgICAgd2lkdGg6IDI4JTtcbiAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgIH1cblxuICAgICAgLmNvbnRyb2wge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIG1hcmdpbjogMjBweDtcbiAgICAgIH1cbiAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
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

/***/ 6824:
/*!********************************************************************************************!*\
  !*** ./apps/demo-ng-openlayers/src/app/select-interaction/select-interaction.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectInteractionComponent: () => (/* binding */ SelectInteractionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _libs_ng_openlayers_src_lib_map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/map.component */ 7478);
/* harmony import */ var _libs_ng_openlayers_src_lib_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/view.component */ 8525);
/* harmony import */ var _libs_ng_openlayers_src_lib_layers_layertile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/layers/layertile.component */ 2474);
/* harmony import */ var _libs_ng_openlayers_src_lib_layers_layervector_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/layers/layervector.component */ 3649);
/* harmony import */ var _libs_ng_openlayers_src_lib_sources_osm_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/sources/osm.component */ 1537);
/* harmony import */ var _libs_ng_openlayers_src_lib_sources_vector_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/sources/vector.component */ 2263);
/* harmony import */ var _libs_ng_openlayers_src_lib_feature_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/feature.component */ 4374);
/* harmony import */ var _libs_ng_openlayers_src_lib_geom_geometrypoint_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/geom/geometrypoint.component */ 707);
/* harmony import */ var _libs_ng_openlayers_src_lib_coordinate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/coordinate.component */ 2339);
/* harmony import */ var _libs_ng_openlayers_src_lib_interactions_default_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/interactions/default.component */ 7362);
/* harmony import */ var _libs_ng_openlayers_src_lib_interactions_select_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/interactions/select.component */ 8359);












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
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
    type: SelectInteractionComponent,
    selectors: [["app-select-interaction"]],
    viewQuery: function SelectInteractionComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c0, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.markersLayer = _t.first);
      }
    },
    decls: 15,
    vars: 11,
    consts: [["width", "100%", "height", "100%"], ["map", ""], [3, "layers", "wrapX", "olSelect"], [3, "zoom"], [3, "x", "y", "srid"], [3, "opacity"], ["markersLayer", ""], [3, "wrapX"], ["markersSource", ""]],
    template: function SelectInteractionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "aol-map", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "aol-interaction-default");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "aol-interaction-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("olSelect", function SelectInteractionComponent_Template_aol_interaction_select_olSelect_3_listener($event) {
          return ctx.select($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "aol-view", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "aol-coordinate", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "aol-layer-tile", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "aol-source-osm");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "aol-layer-vector", null, 6)(10, "aol-source-vector", 7, 8)(12, "aol-feature")(13, "aol-geometry-point");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](14, "aol-coordinate", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("layers", ctx.isMarkerLayer)("wrapX", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("zoom", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("x", 1.4886)("y", 43.5554)("srid", "EPSG:4326");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("opacity", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("wrapX", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("x", 5)("y", 45)("srid", "EPSG:4326");
      }
    },
    dependencies: [_libs_ng_openlayers_src_lib_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent, _libs_ng_openlayers_src_lib_view_component__WEBPACK_IMPORTED_MODULE_1__.ViewComponent, _libs_ng_openlayers_src_lib_layers_layertile_component__WEBPACK_IMPORTED_MODULE_2__.LayerTileComponent, _libs_ng_openlayers_src_lib_layers_layervector_component__WEBPACK_IMPORTED_MODULE_3__.LayerVectorComponent, _libs_ng_openlayers_src_lib_sources_osm_component__WEBPACK_IMPORTED_MODULE_4__.SourceOsmComponent, _libs_ng_openlayers_src_lib_sources_vector_component__WEBPACK_IMPORTED_MODULE_5__.SourceVectorComponent, _libs_ng_openlayers_src_lib_feature_component__WEBPACK_IMPORTED_MODULE_6__.FeatureComponent, _libs_ng_openlayers_src_lib_geom_geometrypoint_component__WEBPACK_IMPORTED_MODULE_7__.GeometryPointComponent, _libs_ng_openlayers_src_lib_coordinate_component__WEBPACK_IMPORTED_MODULE_8__.CoordinateComponent, _libs_ng_openlayers_src_lib_interactions_default_component__WEBPACK_IMPORTED_MODULE_9__.DefaultInteractionComponent, _libs_ng_openlayers_src_lib_interactions_select_component__WEBPACK_IMPORTED_MODULE_10__.SelectInteractionComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 2289:
/*!********************************************************************************!*\
  !*** ./apps/demo-ng-openlayers/src/app/side-by-side/side-by-side.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SideBySideComponent: () => (/* binding */ SideBySideComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _libs_ng_openlayers_src_lib_map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/map.component */ 7478);
/* harmony import */ var _libs_ng_openlayers_src_lib_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/view.component */ 8525);
/* harmony import */ var _libs_ng_openlayers_src_lib_layers_layertile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/layers/layertile.component */ 2474);
/* harmony import */ var _libs_ng_openlayers_src_lib_sources_osm_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/sources/osm.component */ 1537);
/* harmony import */ var _libs_ng_openlayers_src_lib_sources_xyz_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/sources/xyz.component */ 5831);
/* harmony import */ var _libs_ng_openlayers_src_lib_coordinate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/coordinate.component */ 2339);
/* harmony import */ var _libs_ng_openlayers_src_lib_interactions_default_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/interactions/default.component */ 7362);








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
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: SideBySideComponent,
    selectors: [["app-side-by-side"]],
    viewQuery: function SideBySideComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c1, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.secondMap = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.view = _t.first);
      }
    },
    decls: 13,
    vars: 7,
    consts: [[3, "width", "height"], ["map", ""], [3, "zoom"], ["view", ""], [3, "x", "y", "srid"], [3, "opacity"], ["width", "100%", "height", "100%"], ["secondMap", ""], ["url", "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"]],
    template: function SideBySideComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "aol-map", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "aol-interaction-default");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "aol-view", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "aol-coordinate", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "aol-layer-tile", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "aol-source-osm");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "aol-map", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "aol-interaction-default");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "aol-layer-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "aol-source-xyz", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("width", "100%")("height", "100%");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("zoom", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("x", 2.181539)("y", 47.125488)("srid", "EPSG:4326");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("opacity", 1);
      }
    },
    dependencies: [_libs_ng_openlayers_src_lib_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent, _libs_ng_openlayers_src_lib_view_component__WEBPACK_IMPORTED_MODULE_1__.ViewComponent, _libs_ng_openlayers_src_lib_layers_layertile_component__WEBPACK_IMPORTED_MODULE_2__.LayerTileComponent, _libs_ng_openlayers_src_lib_sources_osm_component__WEBPACK_IMPORTED_MODULE_3__.SourceOsmComponent, _libs_ng_openlayers_src_lib_sources_xyz_component__WEBPACK_IMPORTED_MODULE_4__.SourceXYZComponent, _libs_ng_openlayers_src_lib_coordinate_component__WEBPACK_IMPORTED_MODULE_5__.CoordinateComponent, _libs_ng_openlayers_src_lib_interactions_default_component__WEBPACK_IMPORTED_MODULE_6__.DefaultInteractionComponent],
    styles: ["[_nghost-%COMP%] {\n        height: 100%;\n        display: flex;\n      }\n\n      aol-map[_ngcontent-%COMP%] {\n        width: 50%;\n      }\n    \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvZGVtby1uZy1vcGVubGF5ZXJzL3NyYy9hcHAvc2lkZS1ieS1zaWRlL3NpZGUtYnktc2lkZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0UsWUFBWTtRQUNaLGFBQWE7TUFDZjs7TUFFQTtRQUNFLFVBQVU7TUFDWiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgOmhvc3Qge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB9XG5cbiAgICAgIGFvbC1tYXAge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgfVxuICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 412:
/*!******************************************************************!*\
  !*** ./apps/demo-ng-openlayers/src/app/swipe/swipe.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SwipeComponent: () => (/* binding */ SwipeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _libs_ng_openlayers_src_lib_map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/map.component */ 7478);
/* harmony import */ var _libs_ng_openlayers_src_lib_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/view.component */ 8525);
/* harmony import */ var _libs_ng_openlayers_src_lib_layers_layertile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/layers/layertile.component */ 2474);
/* harmony import */ var _libs_ng_openlayers_src_lib_sources_osm_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/sources/osm.component */ 1537);
/* harmony import */ var _libs_ng_openlayers_src_lib_sources_xyz_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/sources/xyz.component */ 5831);
/* harmony import */ var _libs_ng_openlayers_src_lib_coordinate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/coordinate.component */ 2339);
/* harmony import */ var _libs_ng_openlayers_src_lib_interactions_default_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/interactions/default.component */ 7362);








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
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: SwipeComponent,
    selectors: [["app-swipe"]],
    viewQuery: function SwipeComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.map = _t.first);
      }
    },
    hostBindings: function SwipeComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("resize", function SwipeComponent_resize_HostBindingHandler($event) {
          return ctx.onWindowResize($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresolveWindow"]);
      }
    },
    decls: 12,
    vars: 9,
    consts: [["width", "100%", "height", "100%"], ["map", ""], [3, "zoom"], ["view", ""], [3, "x", "y", "srid"], [3, "opacity"], [3, "prerender", "postrender"], ["url", "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"], [1, "swipe-button", 3, "panstart", "panmove"]],
    template: function SwipeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "aol-map", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "aol-interaction-default");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "aol-view", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "aol-coordinate", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "aol-layer-tile", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "aol-source-osm");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "aol-layer-tile", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "aol-source-xyz", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("panstart", function SwipeComponent_Template_button_panstart_10_listener() {
          return ctx.onPanStart();
        })("panmove", function SwipeComponent_Template_button_panmove_10_listener($event) {
          return ctx.onPan($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, " <> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("zoom", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("x", 2.181539)("y", 47.125488)("srid", "EPSG:4326");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("opacity", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("prerender", ctx.prerenderFunction)("postrender", ctx.postrenderFunction);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("margin-left", ctx.swipeOffsetToCenter, "px");
      }
    },
    dependencies: [_libs_ng_openlayers_src_lib_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent, _libs_ng_openlayers_src_lib_view_component__WEBPACK_IMPORTED_MODULE_1__.ViewComponent, _libs_ng_openlayers_src_lib_layers_layertile_component__WEBPACK_IMPORTED_MODULE_2__.LayerTileComponent, _libs_ng_openlayers_src_lib_sources_osm_component__WEBPACK_IMPORTED_MODULE_3__.SourceOsmComponent, _libs_ng_openlayers_src_lib_sources_xyz_component__WEBPACK_IMPORTED_MODULE_4__.SourceXYZComponent, _libs_ng_openlayers_src_lib_coordinate_component__WEBPACK_IMPORTED_MODULE_5__.CoordinateComponent, _libs_ng_openlayers_src_lib_interactions_default_component__WEBPACK_IMPORTED_MODULE_6__.DefaultInteractionComponent],
    styles: [".swipe-button[_ngcontent-%COMP%] {\n        box-shadow:\n          0 3px 5px -1px rgba(0, 0, 0, 0.2),\n          0 6px 10px 0 rgba(0, 0, 0, 0.14),\n          0 1px 18px 0 rgba(0, 0, 0, 0.12);\n        background-color: #0a2340;\n        color: white;\n        cursor: pointer;\n        left: calc(50% - 27px);\n        position: absolute;\n        top: 60%;\n        box-sizing: border-box;\n        border: none;\n        display: inline-block;\n        white-space: nowrap;\n        text-decoration: none;\n        vertical-align: baseline;\n        text-align: center;\n        margin: 0;\n        line-height: 36px;\n        border-radius: 2px;\n        min-width: 0;\n        width: 40px;\n        height: 40px;\n      }\n    \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvZGVtby1uZy1vcGVubGF5ZXJzL3NyYy9hcHAvc3dpcGUvc3dpcGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDTTtRQUNFOzs7MENBR2tDO1FBQ2xDLHlCQUF5QjtRQUN6QixZQUFZO1FBQ1osZUFBZTtRQUNmLHNCQUFzQjtRQUN0QixrQkFBa0I7UUFDbEIsUUFBUTtRQUNSLHNCQUFzQjtRQUN0QixZQUFZO1FBQ1oscUJBQXFCO1FBQ3JCLG1CQUFtQjtRQUNuQixxQkFBcUI7UUFDckIsd0JBQXdCO1FBQ3hCLGtCQUFrQjtRQUNsQixTQUFTO1FBQ1QsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osV0FBVztRQUNYLFlBQVk7TUFDZCIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgLnN3aXBlLWJ1dHRvbiB7XG4gICAgICAgIGJveC1zaGFkb3c6XG4gICAgICAgICAgMCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAgICAgICAgIDAgNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAgICAgICAgIDAgMXB4IDE4cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGEyMzQwO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgbGVmdDogY2FsYyg1MCUgLSAyN3B4KTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDYwJTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgbWluLXdpZHRoOiAwO1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgfVxuICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 928:
/*!**************************************************************************!*\
  !*** ./apps/demo-ng-openlayers/src/app/tile-json/tile-json.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TileJsonComponent: () => (/* binding */ TileJsonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _libs_ng_openlayers_src_lib_map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/map.component */ 7478);
/* harmony import */ var _libs_ng_openlayers_src_lib_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/view.component */ 8525);
/* harmony import */ var _libs_ng_openlayers_src_lib_layers_layertile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/layers/layertile.component */ 2474);
/* harmony import */ var _libs_ng_openlayers_src_lib_sources_tilejson_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/sources/tilejson.component */ 3241);
/* harmony import */ var _libs_ng_openlayers_src_lib_coordinate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/coordinate.component */ 2339);
/* harmony import */ var _libs_ng_openlayers_src_lib_controls_default_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/controls/default.component */ 5976);
/* harmony import */ var _libs_ng_openlayers_src_lib_interactions_default_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/interactions/default.component */ 7362);








class TileJsonComponent {
  constructor() {}
  static #_ = this.ɵfac = function TileJsonComponent_Factory(t) {
    return new (t || TileJsonComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: TileJsonComponent,
    selectors: [["app-tile-json"]],
    decls: 8,
    vars: 4,
    consts: [["width", "100%", "height", "100%"], ["map", ""], [3, "zoom"], [3, "x", "y", "srid"], ["url", "https://a.tiles.mapbox.com/v3/aj.1x1-degrees.json"]],
    template: function TileJsonComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "aol-map", 0, 1)(2, "aol-view", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "aol-coordinate", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "aol-interaction-default")(5, "aol-control-defaults");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "aol-layer-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "aol-source-tilejson", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("zoom", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("x", -2.269282)("y", 46.987247)("srid", "EPSG:4326");
      }
    },
    dependencies: [_libs_ng_openlayers_src_lib_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent, _libs_ng_openlayers_src_lib_view_component__WEBPACK_IMPORTED_MODULE_1__.ViewComponent, _libs_ng_openlayers_src_lib_layers_layertile_component__WEBPACK_IMPORTED_MODULE_2__.LayerTileComponent, _libs_ng_openlayers_src_lib_sources_tilejson_component__WEBPACK_IMPORTED_MODULE_3__.SourceTileJSONComponent, _libs_ng_openlayers_src_lib_coordinate_component__WEBPACK_IMPORTED_MODULE_4__.CoordinateComponent, _libs_ng_openlayers_src_lib_controls_default_component__WEBPACK_IMPORTED_MODULE_5__.DefaultControlComponent, _libs_ng_openlayers_src_lib_interactions_default_component__WEBPACK_IMPORTED_MODULE_6__.DefaultInteractionComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 2093:
/*!**********************************************************************!*\
  !*** ./apps/demo-ng-openlayers/src/app/utfgrid/utfgrid.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UTFGridComponent: () => (/* binding */ UTFGridComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _libs_ng_openlayers_src_lib_map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/map.component */ 7478);
/* harmony import */ var _libs_ng_openlayers_src_lib_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/view.component */ 8525);
/* harmony import */ var _libs_ng_openlayers_src_lib_layers_layertile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/layers/layertile.component */ 2474);
/* harmony import */ var _libs_ng_openlayers_src_lib_sources_osm_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/sources/osm.component */ 1537);
/* harmony import */ var _libs_ng_openlayers_src_lib_sources_utfgrid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/sources/utfgrid.component */ 9573);
/* harmony import */ var _libs_ng_openlayers_src_lib_coordinate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/coordinate.component */ 2339);
/* harmony import */ var _libs_ng_openlayers_src_lib_controls_default_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/controls/default.component */ 5976);
/* harmony import */ var _libs_ng_openlayers_src_lib_controls_fullscreen_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/controls/fullscreen.component */ 7921);
/* harmony import */ var _libs_ng_openlayers_src_lib_interactions_default_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/interactions/default.component */ 7362);
/* harmony import */ var _libs_ng_openlayers_src_lib_overlay_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/overlay.component */ 1025);
/* harmony import */ var _libs_ng_openlayers_src_lib_content_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/content.component */ 7105);













const _c0 = ["UTFGrid"];
const _c1 = ["view"];
function UTFGridComponent_aol_overlay_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "aol-overlay", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "aol-coordinate", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "aol-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("positioning", "BOTTOM_RIGHT")("stopEvent", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("x", ctx_r2.coords[0])("y", ctx_r2.coords[1])("srid", "EPSG:3857");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", "data:image/png;base64," + ctx_r2.info["flag_png"], _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
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
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
    type: UTFGridComponent,
    selectors: [["app-root"]],
    viewQuery: function UTFGridComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c1, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.UTFGrid = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.view = _t.first);
      }
    },
    decls: 12,
    vars: 5,
    consts: [[3, "pointerMove"], [3, "zoom", "center"], ["view", ""], [3, "url"], ["UTFGrid", ""], [3, "positioning", "stopEvent", 4, "ngIf"], [3, "positioning", "stopEvent"], [3, "x", "y", "srid"], [3, "src"]],
    template: function UTFGridComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "aol-map", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("pointerMove", function UTFGridComponent_Template_aol_map_pointerMove_0_listener($event) {
          return ctx.displayInfo($event.coordinate);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "aol-interaction-default")(2, "aol-control-defaults")(3, "aol-control-fullscreen")(4, "aol-view", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "aol-layer-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "aol-source-osm");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "aol-layer-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](9, "aol-source-utfgrid", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](11, UTFGridComponent_aol_overlay_11_Template, 4, 6, "aol-overlay", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("zoom", 2)("center", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](4, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("url", "https://api.tiles.mapbox.com/v4/mapbox.geography-class.json?secure&access_token=" + ctx.key);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.coords && ctx.info);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _libs_ng_openlayers_src_lib_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent, _libs_ng_openlayers_src_lib_view_component__WEBPACK_IMPORTED_MODULE_1__.ViewComponent, _libs_ng_openlayers_src_lib_layers_layertile_component__WEBPACK_IMPORTED_MODULE_2__.LayerTileComponent, _libs_ng_openlayers_src_lib_sources_osm_component__WEBPACK_IMPORTED_MODULE_3__.SourceOsmComponent, _libs_ng_openlayers_src_lib_sources_utfgrid_component__WEBPACK_IMPORTED_MODULE_4__.SourceUTFGridComponent, _libs_ng_openlayers_src_lib_coordinate_component__WEBPACK_IMPORTED_MODULE_5__.CoordinateComponent, _libs_ng_openlayers_src_lib_controls_default_component__WEBPACK_IMPORTED_MODULE_6__.DefaultControlComponent, _libs_ng_openlayers_src_lib_controls_fullscreen_component__WEBPACK_IMPORTED_MODULE_7__.ControlFullScreenComponent, _libs_ng_openlayers_src_lib_interactions_default_component__WEBPACK_IMPORTED_MODULE_8__.DefaultInteractionComponent, _libs_ng_openlayers_src_lib_overlay_component__WEBPACK_IMPORTED_MODULE_9__.OverlayComponent, _libs_ng_openlayers_src_lib_content_component__WEBPACK_IMPORTED_MODULE_10__.ContentComponent],
    styles: ["[_nghost-%COMP%] {\n        height: 100%;\n        display: flex;\n      }\n\n      aol-map[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100%;\n      }\n    \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvZGVtby1uZy1vcGVubGF5ZXJzL3NyYy9hcHAvdXRmZ3JpZC91dGZncmlkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxZQUFZO1FBQ1osYUFBYTtNQUNmOztNQUVBO1FBQ0UsV0FBVztRQUNYLFlBQVk7TUFDZCIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgOmhvc3Qge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB9XG5cbiAgICAgIGFvbC1tYXAge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 3748:
/*!****************************************************************************************************!*\
  !*** ./apps/demo-ng-openlayers/src/app/view-projection-update/view-projection-update.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ViewProjectionUpdateComponent: () => (/* binding */ ViewProjectionUpdateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _libs_ng_openlayers_src_lib_map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/map.component */ 7478);
/* harmony import */ var _libs_ng_openlayers_src_lib_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/view.component */ 8525);
/* harmony import */ var _libs_ng_openlayers_src_lib_layers_layertile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/layers/layertile.component */ 2474);
/* harmony import */ var _libs_ng_openlayers_src_lib_layers_layervector_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/layers/layervector.component */ 3649);
/* harmony import */ var _libs_ng_openlayers_src_lib_sources_osm_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/sources/osm.component */ 1537);
/* harmony import */ var _libs_ng_openlayers_src_lib_sources_vector_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/sources/vector.component */ 2263);
/* harmony import */ var _libs_ng_openlayers_src_lib_feature_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/feature.component */ 4374);
/* harmony import */ var _libs_ng_openlayers_src_lib_geom_geometrypoint_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/geom/geometrypoint.component */ 707);
/* harmony import */ var _libs_ng_openlayers_src_lib_coordinate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/coordinate.component */ 2339);
/* harmony import */ var _libs_ng_openlayers_src_lib_styles_style_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/styles/style.component */ 5960);
/* harmony import */ var _libs_ng_openlayers_src_lib_styles_circle_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/styles/circle.component */ 5425);
/* harmony import */ var _libs_ng_openlayers_src_lib_styles_fill_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/styles/fill.component */ 4078);
/* harmony import */ var _libs_ng_openlayers_src_lib_styles_icon_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/styles/icon.component */ 2856);
/* harmony import */ var _libs_ng_openlayers_src_lib_styles_stroke_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/styles/stroke.component */ 2020);
/* harmony import */ var _libs_ng_openlayers_src_lib_interactions_default_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../libs/ng-openlayers/src/lib/interactions/default.component */ 7362);

















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
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
    type: ViewProjectionUpdateComponent,
    selectors: [["app-root"]],
    decls: 27,
    vars: 24,
    consts: [[3, "width", "height"], [3, "zoom", "projection"], [3, "x", "y", "srid"], [3, "radius"], [3, "color", "width"], [3, "color"], [3, "src", "anchor", "anchorXUnits", "anchorYUnits", "scale", "anchorOrigin"], [1, "controls"], [3, "change"], ["value", "EPSG:3857"], ["value", "EPSG:4326"]],
    template: function ViewProjectionUpdateComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "aol-map", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "aol-interaction-default");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "aol-view", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "aol-coordinate", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "aol-layer-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](5, "aol-source-osm");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "aol-layer-vector")(7, "aol-source-vector")(8, "aol-feature")(9, "aol-geometry-point");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](10, "aol-coordinate", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "aol-style")(12, "aol-style-circle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](13, "aol-style-stroke", 4)(14, "aol-style-fill", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "aol-feature")(16, "aol-geometry-point");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](17, "aol-coordinate", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](18, "aol-style");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](19, "aol-style-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](21, " Current projection: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](22, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("change", function ViewProjectionUpdateComponent_Template_select_change_22_listener($event) {
          return ctx.projectionChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](23, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](24, "EPSG:3857");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](25, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](26, "EPSG:4326");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("width", "100%")("height", "100%");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("zoom", 2)("projection", ctx.viewProjection);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("x", 0)("y", 0)("srid", "EPSG:4326");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("x", 5)("y", 45)("srid", "EPSG:4326");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("radius", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("color", "black")("width", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("color", "green");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("x", 5.1)("y", 45.1)("srid", "EPSG:4326");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("src", "assets/marker.png")("anchor", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](23, _c0))("anchorXUnits", "fraction")("anchorYUnits", "fraction")("scale", 0.1)("anchorOrigin", "top-left");
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgSelectMultipleOption"], _libs_ng_openlayers_src_lib_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent, _libs_ng_openlayers_src_lib_view_component__WEBPACK_IMPORTED_MODULE_1__.ViewComponent, _libs_ng_openlayers_src_lib_layers_layertile_component__WEBPACK_IMPORTED_MODULE_2__.LayerTileComponent, _libs_ng_openlayers_src_lib_layers_layervector_component__WEBPACK_IMPORTED_MODULE_3__.LayerVectorComponent, _libs_ng_openlayers_src_lib_sources_osm_component__WEBPACK_IMPORTED_MODULE_4__.SourceOsmComponent, _libs_ng_openlayers_src_lib_sources_vector_component__WEBPACK_IMPORTED_MODULE_5__.SourceVectorComponent, _libs_ng_openlayers_src_lib_feature_component__WEBPACK_IMPORTED_MODULE_6__.FeatureComponent, _libs_ng_openlayers_src_lib_geom_geometrypoint_component__WEBPACK_IMPORTED_MODULE_7__.GeometryPointComponent, _libs_ng_openlayers_src_lib_coordinate_component__WEBPACK_IMPORTED_MODULE_8__.CoordinateComponent, _libs_ng_openlayers_src_lib_styles_style_component__WEBPACK_IMPORTED_MODULE_9__.StyleComponent, _libs_ng_openlayers_src_lib_styles_circle_component__WEBPACK_IMPORTED_MODULE_10__.StyleCircleComponent, _libs_ng_openlayers_src_lib_styles_fill_component__WEBPACK_IMPORTED_MODULE_11__.StyleFillComponent, _libs_ng_openlayers_src_lib_styles_icon_component__WEBPACK_IMPORTED_MODULE_12__.StyleIconComponent, _libs_ng_openlayers_src_lib_styles_stroke_component__WEBPACK_IMPORTED_MODULE_13__.StyleStrokeComponent, _libs_ng_openlayers_src_lib_interactions_default_component__WEBPACK_IMPORTED_MODULE_14__.DefaultInteractionComponent],
    styles: ["[_nghost-%COMP%] {\n        height: 100%;\n        display: flex;\n      }\n\n      aol-map[_ngcontent-%COMP%] {\n        width: 70%;\n      }\n\n      .controls[_ngcontent-%COMP%] {\n        width: 28%;\n        padding: 1rem;\n      }\n    \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvZGVtby1uZy1vcGVubGF5ZXJzL3NyYy9hcHAvdmlldy1wcm9qZWN0aW9uLXVwZGF0ZS92aWV3LXByb2plY3Rpb24tdXBkYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxZQUFZO1FBQ1osYUFBYTtNQUNmOztNQUVBO1FBQ0UsVUFBVTtNQUNaOztNQUVBO1FBQ0UsVUFBVTtRQUNWLGFBQWE7TUFDZiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgOmhvc3Qge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB9XG5cbiAgICAgIGFvbC1tYXAge1xuICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgfVxuXG4gICAgICAuY29udHJvbHMge1xuICAgICAgICB3aWR0aDogMjglO1xuICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgfVxuICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 192:
/*!*****************************************************************!*\
  !*** ./apps/demo-ng-openlayers/src/environments/environment.ts ***!
  \*****************************************************************/
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

/***/ 873:
/*!*********************************************!*\
  !*** ./apps/demo-ng-openlayers/src/main.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ 4700);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ 9692);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ 192);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule).catch(err => console.log(err));

/***/ }),

/***/ 7037:
/*!*************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/attribution.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AttributionComponent: () => (/* binding */ AttributionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

const _c0 = ["*"];
class AttributionComponent {
  constructor(elementRef) {
    this.elementRef = elementRef;
  }
  ngOnInit() {
    this.label = this.elementRef.nativeElement.innerHTML;
  }
  static #_ = this.ɵfac = function AttributionComponent_Factory(t) {
    return new (t || AttributionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AttributionComponent,
    selectors: [["aol-attribution"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function AttributionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 7311:
/*!**************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/attributions.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AttributionsComponent: () => (/* binding */ AttributionsComponent)
/* harmony export */ });
/* harmony import */ var _attribution_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attribution.component */ 7037);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _sources_source_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sources/source.component */ 5786);



const _c0 = ["*"];
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
    return new (t || AttributionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_sources_source_component__WEBPACK_IMPORTED_MODULE_1__.SourceComponent, 1));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AttributionsComponent,
    selectors: [["aol-attributions"]],
    contentQueries: function AttributionsComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _attribution_component__WEBPACK_IMPORTED_MODULE_0__.AttributionComponent, 4);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.attributions = _t);
      }
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function AttributionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 6495:
/*!***********************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/collectioncoordinates.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CollectionCoordinatesComponent: () => (/* binding */ CollectionCoordinatesComponent)
/* harmony export */ });
/* harmony import */ var ol_proj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ol/proj */ 6395);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.component */ 7478);
/* harmony import */ var _geom_geometrylinestring_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./geom/geometrylinestring.component */ 3759);
/* harmony import */ var _geom_geometrypolygon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./geom/geometrypolygon.component */ 7750);
/* harmony import */ var _geom_geometrymultipoint_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./geom/geometrymultipoint.component */ 950);
/* harmony import */ var _geom_geometrymultilinestring_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./geom/geometrymultilinestring.component */ 3027);
/* harmony import */ var _geom_geometrymultipolygon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./geom/geometrymultipolygon.component */ 9330);








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
    return new (t || CollectionCoordinatesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_map_component__WEBPACK_IMPORTED_MODULE_1__.MapComponent), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_geom_geometrylinestring_component__WEBPACK_IMPORTED_MODULE_2__.GeometryLinestringComponent, 8), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_geom_geometrypolygon_component__WEBPACK_IMPORTED_MODULE_3__.GeometryPolygonComponent, 8), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_geom_geometrymultipoint_component__WEBPACK_IMPORTED_MODULE_4__.GeometryMultiPointComponent, 8), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_geom_geometrymultilinestring_component__WEBPACK_IMPORTED_MODULE_5__.GeometryMultiLinestringComponent, 8), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_geom_geometrymultipolygon_component__WEBPACK_IMPORTED_MODULE_6__.GeometryMultiPolygonComponent, 8));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: CollectionCoordinatesComponent,
    selectors: [["aol-collection-coordinates"]],
    inputs: {
      coordinates: "coordinates",
      srid: "srid"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]],
    decls: 1,
    vars: 0,
    consts: [[1, "aol-collection-coordinates"]],
    template: function CollectionCoordinatesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "div", 0);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 7105:
/*!*********************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/content.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentComponent: () => (/* binding */ ContentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

const _c0 = ["*"];
class ContentComponent {
  constructor(elementRef) {
    this.elementRef = elementRef;
  }
  static #_ = this.ɵfac = function ContentComponent_Factory(t) {
    return new (t || ContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ContentComponent,
    selectors: [["aol-content"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ContentComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 1238:
/*!**********************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/controls/attribution.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ControlAttributionComponent: () => (/* binding */ ControlAttributionComponent)
/* harmony export */ });
/* harmony import */ var ol_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/control */ 8766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../map.component */ 7478);



class ControlAttributionComponent {
  constructor(map, element) {
    this.map = map;
    this.element = element;
    this.componentType = 'control';
  }
  ngOnInit() {
    this.target = this.element.nativeElement;
    // console.log('ol.control.Attribution init: ', this);
    this.instance = new ol_control__WEBPACK_IMPORTED_MODULE_1__["default"](this);
    this.map.instance.addControl(this.instance);
  }
  ngOnDestroy() {
    // console.log('removing aol-control-attribution');
    this.map.instance.removeControl(this.instance);
  }
  static #_ = this.ɵfac = function ControlAttributionComponent_Factory(t) {
    return new (t || ControlAttributionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
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

/***/ }),

/***/ 9333:
/*!******************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/controls/control.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ControlComponent: () => (/* binding */ ControlComponent)
/* harmony export */ });
/* harmony import */ var ol_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/control */ 4107);
/* harmony import */ var _content_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../content.component */ 7105);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../map.component */ 7478);




const _c0 = ["*"];
class ControlComponent {
  constructor(map) {
    this.map = map;
    this.componentType = 'control';
  }
  ngOnInit() {
    if (this.content) {
      this.element = this.content.elementRef.nativeElement;
      this.instance = new ol_control__WEBPACK_IMPORTED_MODULE_2__["default"](this);
      this.map.instance.addControl(this.instance);
    }
  }
  ngOnDestroy() {
    if (this.instance) {
      this.map.instance.removeControl(this.instance);
    }
  }
  static #_ = this.ɵfac = function ControlComponent_Factory(t) {
    return new (t || ControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_map_component__WEBPACK_IMPORTED_MODULE_1__.MapComponent));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ControlComponent,
    selectors: [["aol-control"]],
    contentQueries: function ControlComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, _content_component__WEBPACK_IMPORTED_MODULE_0__.ContentComponent, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
      }
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ControlComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 5976:
/*!******************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/controls/default.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultControlComponent: () => (/* binding */ DefaultControlComponent)
/* harmony export */ });
/* harmony import */ var ol_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/control */ 5356);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../map.component */ 7478);



class DefaultControlComponent {
  constructor(map) {
    this.map = map;
  }
  ngOnInit() {
    // console.log('ol.control.defaults init: ', this);
    this.instance = (0,ol_control__WEBPACK_IMPORTED_MODULE_1__.defaults)(this);
    this.instance.forEach(c => this.map.instance.addControl(c));
  }
  ngOnDestroy() {
    // console.log('removing aol-control-defaults');
    this.instance.forEach(c => this.map.instance.removeControl(c));
  }
  static #_ = this.ɵfac = function DefaultControlComponent_Factory(t) {
    return new (t || DefaultControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
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

/***/ }),

/***/ 7921:
/*!*********************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/controls/fullscreen.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ControlFullScreenComponent: () => (/* binding */ ControlFullScreenComponent)
/* harmony export */ });
/* harmony import */ var ol_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/control */ 7929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../map.component */ 7478);



const _c0 = ["*"];
class ControlFullScreenComponent {
  constructor(map) {
    this.map = map;
    // console.log('instancing aol-control-fullscreen');
  }
  ngOnInit() {
    this.instance = new ol_control__WEBPACK_IMPORTED_MODULE_1__["default"](this);
    this.map.instance.addControl(this.instance);
  }
  ngOnDestroy() {
    // console.log('removing aol-control-fullscreen');
    this.map.instance.removeControl(this.instance);
  }
  static #_ = this.ɵfac = function ControlFullScreenComponent_Factory(t) {
    return new (t || ControlFullScreenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 1511:
/*!************************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/controls/mouseposition.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ControlMousePositionComponent: () => (/* binding */ ControlMousePositionComponent)
/* harmony export */ });
/* harmony import */ var ol_control_MousePosition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/control/MousePosition */ 4439);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../map.component */ 7478);



class ControlMousePositionComponent {
  constructor(map, element) {
    this.map = map;
    this.element = element;
  }
  ngOnInit() {
    this.target = this.element.nativeElement;
    // console.log('ol.control.MousePosition init: ', this);
    this.instance = new ol_control_MousePosition__WEBPACK_IMPORTED_MODULE_1__["default"](this);
    this.map.instance.addControl(this.instance);
  }
  ngOnDestroy() {
    // console.log('removing aol-control-mouseposition');
    this.map.instance.removeControl(this.instance);
  }
  static #_ = this.ɵfac = function ControlMousePositionComponent_Factory(t) {
    return new (t || ControlMousePositionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
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

/***/ }),

/***/ 4865:
/*!**********************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/controls/overviewmap.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ControlOverviewMapComponent: () => (/* binding */ ControlOverviewMapComponent)
/* harmony export */ });
/* harmony import */ var ol_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/control */ 2626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../map.component */ 7478);



const _c0 = ["*"];
class ControlOverviewMapComponent {
  constructor(map) {
    this.map = map;
  }
  ngOnInit() {
    this.instance = new ol_control__WEBPACK_IMPORTED_MODULE_1__["default"](this);
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
    this.instance = new ol_control__WEBPACK_IMPORTED_MODULE_1__["default"](this);
    this.map.instance.addControl(this.instance);
  }
  static #_ = this.ɵfac = function ControlOverviewMapComponent_Factory(t) {
    return new (t || ControlOverviewMapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
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
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ControlOverviewMapComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 2483:
/*!*****************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/controls/rotate.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ControlRotateComponent: () => (/* binding */ ControlRotateComponent)
/* harmony export */ });
/* harmony import */ var ol_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/control */ 390);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../map.component */ 7478);



const _c0 = ["*"];
class ControlRotateComponent {
  constructor(map) {
    this.map = map;
    // console.log('instancing aol-control-rotate');
  }
  ngOnInit() {
    this.instance = new ol_control__WEBPACK_IMPORTED_MODULE_1__["default"](this);
    this.map.instance.addControl(this.instance);
  }
  ngOnDestroy() {
    // console.log('removing aol-control-rotate');
    this.map.instance.removeControl(this.instance);
  }
  static #_ = this.ɵfac = function ControlRotateComponent_Factory(t) {
    return new (t || ControlRotateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 3862:
/*!********************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/controls/scaleline.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ControlScaleLineComponent: () => (/* binding */ ControlScaleLineComponent)
/* harmony export */ });
/* harmony import */ var ol_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/control */ 3084);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../map.component */ 7478);



const _c0 = ["*"];
class ControlScaleLineComponent {
  constructor(map) {
    this.map = map;
  }
  ngOnInit() {
    this.instance = new ol_control__WEBPACK_IMPORTED_MODULE_1__["default"](this);
    this.map.instance.addControl(this.instance);
  }
  ngOnDestroy() {
    this.map.instance.removeControl(this.instance);
  }
  static #_ = this.ɵfac = function ControlScaleLineComponent_Factory(t) {
    return new (t || ControlScaleLineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 2391:
/*!***************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/controls/zoom.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ControlZoomComponent: () => (/* binding */ ControlZoomComponent)
/* harmony export */ });
/* harmony import */ var ol_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/control */ 975);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../map.component */ 7478);



const _c0 = ["*"];
class ControlZoomComponent {
  constructor(map) {
    this.map = map;
    // console.log('instancing aol-control-zoom');
  }
  ngOnInit() {
    this.instance = new ol_control__WEBPACK_IMPORTED_MODULE_1__["default"](this);
    this.map.instance.addControl(this.instance);
  }
  ngOnDestroy() {
    // console.log('removing aol-control-zoom');
    this.map.instance.removeControl(this.instance);
  }
  static #_ = this.ɵfac = function ControlZoomComponent_Factory(t) {
    return new (t || ControlZoomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 1870:
/*!*********************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/controls/zoomslider.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ControlZoomSliderComponent: () => (/* binding */ ControlZoomSliderComponent)
/* harmony export */ });
/* harmony import */ var ol_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/control */ 2101);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../map.component */ 7478);



const _c0 = ["*"];
class ControlZoomSliderComponent {
  constructor(map) {
    this.map = map;
    // console.log('instancing aol-control-zoomslider');
  }
  ngOnInit() {
    this.instance = new ol_control__WEBPACK_IMPORTED_MODULE_1__["default"](this);
    this.map.instance.addControl(this.instance);
  }
  ngOnDestroy() {
    // console.log('removing aol-control-zoomslider');
    this.map.instance.removeControl(this.instance);
  }
  static #_ = this.ɵfac = function ControlZoomSliderComponent_Factory(t) {
    return new (t || ControlZoomSliderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 8921:
/*!***********************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/controls/zoomtoextent.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ControlZoomToExtentComponent: () => (/* binding */ ControlZoomToExtentComponent)
/* harmony export */ });
/* harmony import */ var ol_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/control */ 3383);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../map.component */ 7478);



const _c0 = ["*"];
class ControlZoomToExtentComponent {
  constructor(map) {
    this.map = map;
    // console.log('instancing aol-control-zoomtoextent');
  }
  ngOnInit() {
    this.instance = new ol_control__WEBPACK_IMPORTED_MODULE_1__["default"](this);
    this.map.instance.addControl(this.instance);
  }
  ngOnDestroy() {
    // console.log('removing aol-control-zoomtoextent');
    this.map.instance.removeControl(this.instance);
  }
  static #_ = this.ɵfac = function ControlZoomToExtentComponent_Factory(t) {
    return new (t || ControlZoomToExtentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 2339:
/*!************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/coordinate.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CoordinateComponent: () => (/* binding */ CoordinateComponent)
/* harmony export */ });
/* harmony import */ var ol_proj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ol/proj */ 6395);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.component */ 7478);
/* harmony import */ var _view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view.component */ 8525);
/* harmony import */ var _geom_geometrypoint_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./geom/geometrypoint.component */ 707);
/* harmony import */ var _geom_geometrycircle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./geom/geometrycircle.component */ 2276);
/* harmony import */ var _overlay_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./overlay.component */ 1025);







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
    return new (t || CoordinateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_map_component__WEBPACK_IMPORTED_MODULE_1__.MapComponent), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_view_component__WEBPACK_IMPORTED_MODULE_2__.ViewComponent, 8), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_geom_geometrypoint_component__WEBPACK_IMPORTED_MODULE_3__.GeometryPointComponent, 8), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_geom_geometrycircle_component__WEBPACK_IMPORTED_MODULE_4__.GeometryCircleComponent, 8), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_overlay_component__WEBPACK_IMPORTED_MODULE_5__.OverlayComponent, 8));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: CoordinateComponent,
    selectors: [["aol-coordinate"]],
    inputs: {
      x: "x",
      y: "y",
      srid: "srid"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵNgOnChangesFeature"]],
    decls: 1,
    vars: 0,
    consts: [[1, "aol-coordinate"]],
    template: function CoordinateComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div", 0);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 4374:
/*!*********************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/feature.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeatureComponent: () => (/* binding */ FeatureComponent)
/* harmony export */ });
/* harmony import */ var ol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol */ 2148);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _sources_vector_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sources/vector.component */ 2263);



const _c0 = ["*"];
class FeatureComponent {
  constructor(host) {
    this.host = host;
    this.componentType = 'feature';
  }
  ngOnInit() {
    this.instance = new ol__WEBPACK_IMPORTED_MODULE_1__["default"]();
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
    return new (t || FeatureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_sources_vector_component__WEBPACK_IMPORTED_MODULE_0__.SourceVectorComponent));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: FeatureComponent,
    selectors: [["aol-feature"]],
    inputs: {
      id: "id"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function FeatureComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 7638:
/*!****************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/formats/format.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormatComponent: () => (/* binding */ FormatComponent)
/* harmony export */ });
class FormatComponent {
  constructor() {
    this.componentType = 'format';
  }
}

/***/ }),

/***/ 4740:
/*!*************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/formats/mvt.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormatMVTComponent: () => (/* binding */ FormatMVTComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _format_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./format.component */ 7638);
/* harmony import */ var ol_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/format */ 5977);




class FormatMVTComponent extends _format_component__WEBPACK_IMPORTED_MODULE_0__.FormatComponent {
  constructor() {
    super();
    this.instance = new ol_format__WEBPACK_IMPORTED_MODULE_1__["default"](this);
  }
  static #_ = this.ɵfac = function FormatMVTComponent_Factory(t) {
    return new (t || FormatMVTComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: FormatMVTComponent,
    selectors: [["aol-format-mvt"]],
    inputs: {
      featureClass: "featureClass",
      geometryName: "geometryName",
      layerName: "layerName",
      layers: "layers"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
      provide: _format_component__WEBPACK_IMPORTED_MODULE_0__.FormatComponent,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => FormatMVTComponent)
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
    decls: 0,
    vars: 0,
    template: function FormatMVTComponent_Template(rf, ctx) {},
    encapsulation: 2
  });
}

/***/ }),

/***/ 2276:
/*!*********************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/geom/geometrycircle.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeometryCircleComponent: () => (/* binding */ GeometryCircleComponent)
/* harmony export */ });
/* harmony import */ var ol_geom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/geom */ 2796);
/* harmony import */ var _simplegeometry_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./simplegeometry.component */ 6380);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../map.component */ 7478);
/* harmony import */ var _feature_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../feature.component */ 4374);





const _c0 = ["*"];
class GeometryCircleComponent extends _simplegeometry_component__WEBPACK_IMPORTED_MODULE_0__.SimpleGeometryComponent {
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
    this.instance = new ol_geom__WEBPACK_IMPORTED_MODULE_3__["default"]([0, 0]);
  }
  static #_ = this.ɵfac = function GeometryCircleComponent_Factory(t) {
    return new (t || GeometryCircleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_map_component__WEBPACK_IMPORTED_MODULE_1__.MapComponent), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_feature_component__WEBPACK_IMPORTED_MODULE_2__.FeatureComponent));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: GeometryCircleComponent,
    selectors: [["aol-geometry-circle"]],
    inputs: {
      radius: "radius"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function GeometryCircleComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 3759:
/*!*************************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/geom/geometrylinestring.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeometryLinestringComponent: () => (/* binding */ GeometryLinestringComponent)
/* harmony export */ });
/* harmony import */ var _simplegeometry_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./simplegeometry.component */ 6380);
/* harmony import */ var ol_geom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/geom */ 8789);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../map.component */ 7478);
/* harmony import */ var _feature_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../feature.component */ 4374);





const _c0 = ["*"];
class GeometryLinestringComponent extends _simplegeometry_component__WEBPACK_IMPORTED_MODULE_0__.SimpleGeometryComponent {
  constructor(map, host) {
    super(map, host);
    this.componentType = 'geometry-linestring';
  }
  ngOnInit() {
    this.instance = new ol_geom__WEBPACK_IMPORTED_MODULE_3__["default"]([[0, 0], [1, 1]]);
    super.ngOnInit();
  }
  static #_ = this.ɵfac = function GeometryLinestringComponent_Factory(t) {
    return new (t || GeometryLinestringComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_map_component__WEBPACK_IMPORTED_MODULE_1__.MapComponent), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_feature_component__WEBPACK_IMPORTED_MODULE_2__.FeatureComponent));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: GeometryLinestringComponent,
    selectors: [["aol-geometry-linestring"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function GeometryLinestringComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 3027:
/*!******************************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/geom/geometrymultilinestring.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeometryMultiLinestringComponent: () => (/* binding */ GeometryMultiLinestringComponent)
/* harmony export */ });
/* harmony import */ var _simplegeometry_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./simplegeometry.component */ 6380);
/* harmony import */ var ol_geom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/geom */ 8265);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../map.component */ 7478);
/* harmony import */ var _feature_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../feature.component */ 4374);





const _c0 = ["*"];
class GeometryMultiLinestringComponent extends _simplegeometry_component__WEBPACK_IMPORTED_MODULE_0__.SimpleGeometryComponent {
  constructor(map, host) {
    super(map, host);
    this.componentType = 'geometry-multilinestring';
  }
  ngOnInit() {
    this.instance = new ol_geom__WEBPACK_IMPORTED_MODULE_3__["default"]([[[0, 0], [1, 1]]]);
    super.ngOnInit();
  }
  static #_ = this.ɵfac = function GeometryMultiLinestringComponent_Factory(t) {
    return new (t || GeometryMultiLinestringComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_map_component__WEBPACK_IMPORTED_MODULE_1__.MapComponent), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_feature_component__WEBPACK_IMPORTED_MODULE_2__.FeatureComponent));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: GeometryMultiLinestringComponent,
    selectors: [["aol-geometry-multilinestring"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function GeometryMultiLinestringComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 950:
/*!*************************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/geom/geometrymultipoint.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeometryMultiPointComponent: () => (/* binding */ GeometryMultiPointComponent)
/* harmony export */ });
/* harmony import */ var _simplegeometry_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./simplegeometry.component */ 6380);
/* harmony import */ var ol_geom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/geom */ 870);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../map.component */ 7478);
/* harmony import */ var _feature_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../feature.component */ 4374);





const _c0 = ["*"];
class GeometryMultiPointComponent extends _simplegeometry_component__WEBPACK_IMPORTED_MODULE_0__.SimpleGeometryComponent {
  constructor(map, host) {
    super(map, host);
    this.componentType = 'geometry-multipoint';
  }
  ngOnInit() {
    this.instance = new ol_geom__WEBPACK_IMPORTED_MODULE_3__["default"]([[0, 0], [1, 1]]);
    super.ngOnInit();
  }
  static #_ = this.ɵfac = function GeometryMultiPointComponent_Factory(t) {
    return new (t || GeometryMultiPointComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_map_component__WEBPACK_IMPORTED_MODULE_1__.MapComponent), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_feature_component__WEBPACK_IMPORTED_MODULE_2__.FeatureComponent));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: GeometryMultiPointComponent,
    selectors: [["aol-geometry-multipoint"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function GeometryMultiPointComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 9330:
/*!***************************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/geom/geometrymultipolygon.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeometryMultiPolygonComponent: () => (/* binding */ GeometryMultiPolygonComponent)
/* harmony export */ });
/* harmony import */ var _simplegeometry_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./simplegeometry.component */ 6380);
/* harmony import */ var ol_geom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/geom */ 282);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../map.component */ 7478);
/* harmony import */ var _feature_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../feature.component */ 4374);





const _c0 = ["*"];
class GeometryMultiPolygonComponent extends _simplegeometry_component__WEBPACK_IMPORTED_MODULE_0__.SimpleGeometryComponent {
  constructor(map, host) {
    super(map, host);
    this.componentType = 'geometry-multipolygon';
  }
  ngOnInit() {
    this.instance = new ol_geom__WEBPACK_IMPORTED_MODULE_3__["default"]([[[[0, 0], [1, 1], [0, 1]]]]);
    super.ngOnInit();
  }
  static #_ = this.ɵfac = function GeometryMultiPolygonComponent_Factory(t) {
    return new (t || GeometryMultiPolygonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_map_component__WEBPACK_IMPORTED_MODULE_1__.MapComponent), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_feature_component__WEBPACK_IMPORTED_MODULE_2__.FeatureComponent));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: GeometryMultiPolygonComponent,
    selectors: [["aol-geometry-multipolygon"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function GeometryMultiPolygonComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 707:
/*!********************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/geom/geometrypoint.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeometryPointComponent: () => (/* binding */ GeometryPointComponent)
/* harmony export */ });
/* harmony import */ var _simplegeometry_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./simplegeometry.component */ 6380);
/* harmony import */ var ol_geom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/geom */ 8746);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../map.component */ 7478);
/* harmony import */ var _feature_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../feature.component */ 4374);





const _c0 = ["*"];
class GeometryPointComponent extends _simplegeometry_component__WEBPACK_IMPORTED_MODULE_0__.SimpleGeometryComponent {
  constructor(map, host) {
    super(map, host);
    this.componentType = 'geometry-point';
  }
  ngOnInit() {
    this.instance = new ol_geom__WEBPACK_IMPORTED_MODULE_3__["default"]([0, 0]);
    super.ngOnInit();
  }
  static #_ = this.ɵfac = function GeometryPointComponent_Factory(t) {
    return new (t || GeometryPointComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_map_component__WEBPACK_IMPORTED_MODULE_1__.MapComponent), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_feature_component__WEBPACK_IMPORTED_MODULE_2__.FeatureComponent));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: GeometryPointComponent,
    selectors: [["aol-geometry-point"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function GeometryPointComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 7750:
/*!**********************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/geom/geometrypolygon.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeometryPolygonComponent: () => (/* binding */ GeometryPolygonComponent)
/* harmony export */ });
/* harmony import */ var _simplegeometry_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./simplegeometry.component */ 6380);
/* harmony import */ var ol_geom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/geom */ 6646);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../map.component */ 7478);
/* harmony import */ var _feature_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../feature.component */ 4374);





const _c0 = ["*"];
class GeometryPolygonComponent extends _simplegeometry_component__WEBPACK_IMPORTED_MODULE_0__.SimpleGeometryComponent {
  constructor(map, host) {
    super(map, host);
    this.componentType = 'geometry-polygon';
  }
  ngOnInit() {
    this.instance = new ol_geom__WEBPACK_IMPORTED_MODULE_3__["default"]([[[0, 0], [1, 1], [0, 1]]]);
    super.ngOnInit();
  }
  static #_ = this.ɵfac = function GeometryPolygonComponent_Factory(t) {
    return new (t || GeometryPolygonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_map_component__WEBPACK_IMPORTED_MODULE_1__.MapComponent), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_feature_component__WEBPACK_IMPORTED_MODULE_2__.FeatureComponent));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: GeometryPolygonComponent,
    selectors: [["aol-geometry-polygon"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function GeometryPolygonComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 6380:
/*!*********************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/geom/simplegeometry.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SimpleGeometryComponent: () => (/* binding */ SimpleGeometryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../map.component */ 7478);
/* harmony import */ var _feature_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../feature.component */ 4374);



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
    return new (t || SimpleGeometryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_feature_component__WEBPACK_IMPORTED_MODULE_1__.FeatureComponent));
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
    type: SimpleGeometryComponent,
    inputs: {
      srid: "srid"
    }
  });
}

/***/ }),

/***/ 7357:
/*!***********************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/graticule.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GraticuleComponent: () => (/* binding */ GraticuleComponent)
/* harmony export */ });
/* harmony import */ var ol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol */ 7696);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.component */ 7478);



const _c0 = ["*"];
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
      this.instance = new ol__WEBPACK_IMPORTED_MODULE_1__["default"](properties);
    }
    this.instance.setMap(this.map.instance);
  }
  ngAfterContentInit() {
    this.instance = new ol__WEBPACK_IMPORTED_MODULE_1__["default"]({
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
    return new (t || GraticuleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: GraticuleComponent,
    selectors: [["aol-graticule"]],
    inputs: {
      strokeStyle: "strokeStyle",
      showLabels: "showLabels",
      lonLabelPosition: "lonLabelPosition",
      latLabelPosition: "latLabelPosition"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function GraticuleComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 7362:
/*!**********************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/interactions/default.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultInteractionComponent: () => (/* binding */ DefaultInteractionComponent)
/* harmony export */ });
/* harmony import */ var ol_interaction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/interaction */ 2194);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../map.component */ 7478);



class DefaultInteractionComponent {
  constructor(map) {
    this.map = map;
  }
  ngOnInit() {
    this.instance = (0,ol_interaction__WEBPACK_IMPORTED_MODULE_1__.defaults)(this);
    this.instance.forEach(i => this.map.instance.addInteraction(i));
  }
  ngOnDestroy() {
    this.instance.forEach(i => this.map.instance.removeInteraction(i));
  }
  static #_ = this.ɵfac = function DefaultInteractionComponent_Factory(t) {
    return new (t || DefaultInteractionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
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

/***/ }),

/***/ 4279:
/*!******************************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/interactions/doubleclickzoom.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DoubleClickZoomInteractionComponent: () => (/* binding */ DoubleClickZoomInteractionComponent)
/* harmony export */ });
/* harmony import */ var ol_interaction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/interaction */ 8038);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../map.component */ 7478);



class DoubleClickZoomInteractionComponent {
  constructor(map) {
    this.map = map;
  }
  ngOnInit() {
    this.instance = new ol_interaction__WEBPACK_IMPORTED_MODULE_1__["default"](this);
    this.map.instance.addInteraction(this.instance);
  }
  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
  static #_ = this.ɵfac = function DoubleClickZoomInteractionComponent_Factory(t) {
    return new (t || DoubleClickZoomInteractionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
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

/***/ }),

/***/ 5512:
/*!**************************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/interactions/draganddrop.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DragAndDropInteractionComponent: () => (/* binding */ DragAndDropInteractionComponent)
/* harmony export */ });
/* harmony import */ var ol_interaction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/interaction */ 546);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../map.component */ 7478);



class DragAndDropInteractionComponent {
  constructor(map) {
    this.map = map;
  }
  ngOnInit() {
    this.instance = new ol_interaction__WEBPACK_IMPORTED_MODULE_1__["default"](this);
    this.map.instance.addInteraction(this.instance);
  }
  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
  static #_ = this.ɵfac = function DragAndDropInteractionComponent_Factory(t) {
    return new (t || DragAndDropInteractionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
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

/***/ }),

/***/ 4378:
/*!**********************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/interactions/dragbox.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DragBoxInteractionComponent: () => (/* binding */ DragBoxInteractionComponent)
/* harmony export */ });
/* harmony import */ var ol_interaction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/interaction */ 5521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../map.component */ 7478);



class DragBoxInteractionComponent {
  constructor(map) {
    this.map = map;
  }
  ngOnInit() {
    this.instance = new ol_interaction__WEBPACK_IMPORTED_MODULE_1__["default"](this);
    this.map.instance.addInteraction(this.instance);
  }
  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
  static #_ = this.ɵfac = function DragBoxInteractionComponent_Factory(t) {
    return new (t || DragBoxInteractionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
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

/***/ }),

/***/ 1729:
/*!**********************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/interactions/dragpan.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DragPanInteractionComponent: () => (/* binding */ DragPanInteractionComponent)
/* harmony export */ });
/* harmony import */ var ol_interaction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/interaction */ 4599);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../map.component */ 7478);



class DragPanInteractionComponent {
  constructor(map) {
    this.map = map;
  }
  ngOnInit() {
    this.instance = new ol_interaction__WEBPACK_IMPORTED_MODULE_1__["default"](this);
    this.map.instance.addInteraction(this.instance);
  }
  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
  static #_ = this.ɵfac = function DragPanInteractionComponent_Factory(t) {
    return new (t || DragPanInteractionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
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

/***/ }),

/***/ 476:
/*!*************************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/interactions/dragrotate.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DragRotateInteractionComponent: () => (/* binding */ DragRotateInteractionComponent)
/* harmony export */ });
/* harmony import */ var ol_interaction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/interaction */ 7563);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../map.component */ 7478);



class DragRotateInteractionComponent {
  constructor(map) {
    this.map = map;
  }
  ngOnInit() {
    this.instance = new ol_interaction__WEBPACK_IMPORTED_MODULE_1__["default"](this);
    this.map.instance.addInteraction(this.instance);
  }
  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
  static #_ = this.ɵfac = function DragRotateInteractionComponent_Factory(t) {
    return new (t || DragRotateInteractionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
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

/***/ }),

/***/ 6827:
/*!********************************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/interactions/dragrotateandzoom.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DragRotateAndZoomInteractionComponent: () => (/* binding */ DragRotateAndZoomInteractionComponent)
/* harmony export */ });
/* harmony import */ var ol_interaction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/interaction */ 140);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../map.component */ 7478);



class DragRotateAndZoomInteractionComponent {
  constructor(map) {
    this.map = map;
  }
  ngOnInit() {
    this.instance = new ol_interaction__WEBPACK_IMPORTED_MODULE_1__["default"](this);
    this.map.instance.addInteraction(this.instance);
  }
  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
  static #_ = this.ɵfac = function DragRotateAndZoomInteractionComponent_Factory(t) {
    return new (t || DragRotateAndZoomInteractionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
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

/***/ }),

/***/ 9045:
/*!***********************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/interactions/dragzoom.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DragZoomInteractionComponent: () => (/* binding */ DragZoomInteractionComponent)
/* harmony export */ });
/* harmony import */ var ol_interaction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/interaction */ 1910);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../map.component */ 7478);



class DragZoomInteractionComponent {
  constructor(map) {
    this.map = map;
  }
  ngOnInit() {
    this.instance = new ol_interaction__WEBPACK_IMPORTED_MODULE_1__["default"](this);
    this.map.instance.addInteraction(this.instance);
  }
  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
  static #_ = this.ɵfac = function DragZoomInteractionComponent_Factory(t) {
    return new (t || DragZoomInteractionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
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

/***/ }),

/***/ 1543:
/*!*******************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/interactions/draw.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DrawInteractionComponent: () => (/* binding */ DrawInteractionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var ol_interaction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/interaction */ 8934);
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../map.component */ 7478);




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
    this.instance = new ol_interaction__WEBPACK_IMPORTED_MODULE_2__["default"](this);
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
    return new (t || DrawInteractionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
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

/***/ }),

/***/ 3988:
/*!**************************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/interactions/keyboardpan.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KeyboardPanInteractionComponent: () => (/* binding */ KeyboardPanInteractionComponent)
/* harmony export */ });
/* harmony import */ var ol_interaction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/interaction */ 4843);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../map.component */ 7478);



class KeyboardPanInteractionComponent {
  constructor(map) {
    this.map = map;
  }
  ngOnInit() {
    this.instance = new ol_interaction__WEBPACK_IMPORTED_MODULE_1__["default"](this);
    this.map.instance.addInteraction(this.instance);
  }
  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
  static #_ = this.ɵfac = function KeyboardPanInteractionComponent_Factory(t) {
    return new (t || KeyboardPanInteractionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
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

/***/ }),

/***/ 4781:
/*!***************************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/interactions/keyboardzoom.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KeyboardZoomInteractionComponent: () => (/* binding */ KeyboardZoomInteractionComponent)
/* harmony export */ });
/* harmony import */ var ol_interaction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/interaction */ 4952);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../map.component */ 7478);



class KeyboardZoomInteractionComponent {
  constructor(map) {
    this.map = map;
  }
  ngOnInit() {
    this.instance = new ol_interaction__WEBPACK_IMPORTED_MODULE_1__["default"](this);
    this.map.instance.addInteraction(this.instance);
  }
  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
  static #_ = this.ɵfac = function KeyboardZoomInteractionComponent_Factory(t) {
    return new (t || KeyboardZoomInteractionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
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

/***/ }),

/***/ 6510:
/*!*********************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/interactions/modify.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModifyInteractionComponent: () => (/* binding */ ModifyInteractionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var ol_interaction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/interaction */ 1338);
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../map.component */ 7478);




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
    this.instance = new ol_interaction__WEBPACK_IMPORTED_MODULE_2__["default"](this);
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
    return new (t || ModifyInteractionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
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

/***/ }),

/***/ 4712:
/*!*****************************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/interactions/mousewheelzoom.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MouseWheelZoomInteractionComponent: () => (/* binding */ MouseWheelZoomInteractionComponent)
/* harmony export */ });
/* harmony import */ var ol_interaction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/interaction */ 9720);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../map.component */ 7478);



class MouseWheelZoomInteractionComponent {
  constructor(map) {
    this.map = map;
  }
  ngOnInit() {
    this.instance = new ol_interaction__WEBPACK_IMPORTED_MODULE_1__["default"](this);
    this.map.instance.addInteraction(this.instance);
  }
  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
  static #_ = this.ɵfac = function MouseWheelZoomInteractionComponent_Factory(t) {
    return new (t || MouseWheelZoomInteractionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
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

/***/ }),

/***/ 4126:
/*!************************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/interactions/pinchzoom.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PinchZoomInteractionComponent: () => (/* binding */ PinchZoomInteractionComponent)
/* harmony export */ });
/* harmony import */ var ol_interaction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/interaction */ 8415);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../map.component */ 7478);



class PinchZoomInteractionComponent {
  constructor(map) {
    this.map = map;
  }
  ngOnInit() {
    this.instance = new ol_interaction__WEBPACK_IMPORTED_MODULE_1__["default"](this);
    this.map.instance.addInteraction(this.instance);
  }
  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
  static #_ = this.ɵfac = function PinchZoomInteractionComponent_Factory(t) {
    return new (t || PinchZoomInteractionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
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

/***/ }),

/***/ 8359:
/*!*********************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/interactions/select.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectInteractionComponent: () => (/* binding */ SelectInteractionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var ol_interaction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/interaction */ 8597);
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../map.component */ 7478);




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
    this.instance = new ol_interaction__WEBPACK_IMPORTED_MODULE_2__["default"](this);
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
    return new (t || SelectInteractionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
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

/***/ }),

/***/ 5148:
/*!************************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/interactions/translate.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TranslateInteractionComponent: () => (/* binding */ TranslateInteractionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var ol_interaction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/interaction */ 510);
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../map.component */ 7478);




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
    this.instance = new ol_interaction__WEBPACK_IMPORTED_MODULE_2__["default"](this);
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
    return new (t || TranslateInteractionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
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

/***/ }),

/***/ 7880:
/*!**************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/layers/layer.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayerComponent: () => (/* binding */ LayerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinvalidFactory"]();
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
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
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
  });
}

/***/ }),

/***/ 853:
/*!*******************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/layers/layergroup.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayerGroupComponent: () => (/* binding */ LayerGroupComponent)
/* harmony export */ });
/* harmony import */ var ol_layer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/layer */ 3786);
/* harmony import */ var _layer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layer.component */ 7880);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../map.component */ 7478);




const _c0 = ["*"];
class LayerGroupComponent extends _layer_component__WEBPACK_IMPORTED_MODULE_0__.LayerComponent {
  constructor(map, group) {
    super(group || map);
  }
  ngOnInit() {
    // console.log(`creating ol.layer.Group instance with:`, this);
    this.instance = new ol_layer__WEBPACK_IMPORTED_MODULE_2__["default"](this);
    super.ngOnInit();
  }
  static #_ = this.ɵfac = function LayerGroupComponent_Factory(t) {
    return new (t || LayerGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_map_component__WEBPACK_IMPORTED_MODULE_1__.MapComponent), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](LayerGroupComponent, 12));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: LayerGroupComponent,
    selectors: [["aol-layer-group"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function LayerGroupComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 5089:
/*!*******************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/layers/layerimage.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayerImageComponent: () => (/* binding */ LayerImageComponent)
/* harmony export */ });
/* harmony import */ var ol_layer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/layer */ 1429);
/* harmony import */ var _layer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layer.component */ 7880);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../map.component */ 7478);
/* harmony import */ var _layergroup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layergroup.component */ 853);





const _c0 = ["*"];
class LayerImageComponent extends _layer_component__WEBPACK_IMPORTED_MODULE_0__.LayerComponent {
  constructor(map, group) {
    super(group || map);
  }
  ngOnInit() {
    this.instance = new ol_layer__WEBPACK_IMPORTED_MODULE_3__["default"](this);
    super.ngOnInit();
  }
  ngOnChanges(changes) {
    super.ngOnChanges(changes);
  }
  static #_ = this.ɵfac = function LayerImageComponent_Factory(t) {
    return new (t || LayerImageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_map_component__WEBPACK_IMPORTED_MODULE_1__.MapComponent), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_layergroup_component__WEBPACK_IMPORTED_MODULE_2__.LayerGroupComponent, 8));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
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
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function LayerImageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 2474:
/*!******************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/layers/layertile.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayerTileComponent: () => (/* binding */ LayerTileComponent)
/* harmony export */ });
/* harmony import */ var ol_layer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/layer */ 922);
/* harmony import */ var _layer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layer.component */ 7880);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../map.component */ 7478);
/* harmony import */ var _layergroup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layergroup.component */ 853);





const _c0 = ["*"];
class LayerTileComponent extends _layer_component__WEBPACK_IMPORTED_MODULE_0__.LayerComponent {
  constructor(map, group) {
    super(group || map);
  }
  ngOnInit() {
    // console.log('creating ol.layer.Tile instance with:', this);
    this.instance = new ol_layer__WEBPACK_IMPORTED_MODULE_3__["default"](this);
    super.ngOnInit();
  }
  ngOnChanges(changes) {
    super.ngOnChanges(changes);
  }
  static #_ = this.ɵfac = function LayerTileComponent_Factory(t) {
    return new (t || LayerTileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_map_component__WEBPACK_IMPORTED_MODULE_1__.MapComponent), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_layergroup_component__WEBPACK_IMPORTED_MODULE_2__.LayerGroupComponent, 8));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: LayerTileComponent,
    selectors: [["aol-layer-tile"]],
    inputs: {
      preload: "preload",
      useInterimTilesOnError: "useInterimTilesOnError"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function LayerTileComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 3649:
/*!********************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/layers/layervector.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayerVectorComponent: () => (/* binding */ LayerVectorComponent)
/* harmony export */ });
/* harmony import */ var ol_layer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/layer */ 3395);
/* harmony import */ var _layer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layer.component */ 7880);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../map.component */ 7478);
/* harmony import */ var _layergroup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layergroup.component */ 853);





const _c0 = ["*"];
class LayerVectorComponent extends _layer_component__WEBPACK_IMPORTED_MODULE_0__.LayerComponent {
  constructor(map, group) {
    super(group || map);
  }
  ngOnInit() {
    // console.log('creating ol.layer.Vector instance with:', this);
    this.instance = new ol_layer__WEBPACK_IMPORTED_MODULE_3__["default"](this);
    super.ngOnInit();
  }
  ngOnChanges(changes) {
    super.ngOnChanges(changes);
  }
  static #_ = this.ɵfac = function LayerVectorComponent_Factory(t) {
    return new (t || LayerVectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_map_component__WEBPACK_IMPORTED_MODULE_1__.MapComponent), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_layergroup_component__WEBPACK_IMPORTED_MODULE_2__.LayerGroupComponent, 8));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: LayerVectorComponent,
    selectors: [["aol-layer-vector"]],
    inputs: {
      renderBuffer: "renderBuffer",
      style: "style",
      updateWhileAnimating: "updateWhileAnimating",
      updateWhileInteracting: "updateWhileInteracting"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function LayerVectorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 3237:
/*!************************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/layers/layervectortile.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayerVectorTileComponent: () => (/* binding */ LayerVectorTileComponent)
/* harmony export */ });
/* harmony import */ var ol_layer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/layer */ 2585);
/* harmony import */ var _layer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layer.component */ 7880);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../map.component */ 7478);
/* harmony import */ var _layergroup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layergroup.component */ 853);





const _c0 = ["*"];
class LayerVectorTileComponent extends _layer_component__WEBPACK_IMPORTED_MODULE_0__.LayerComponent {
  constructor(map, group) {
    super(group || map);
  }
  ngOnInit() {
    // console.log('creating ol.layer.VectorTile instance with:', this);
    this.instance = new ol_layer__WEBPACK_IMPORTED_MODULE_3__["default"](this);
    super.ngOnInit();
  }
  ngOnChanges(changes) {
    super.ngOnChanges(changes);
  }
  static #_ = this.ɵfac = function LayerVectorTileComponent_Factory(t) {
    return new (t || LayerVectorTileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_map_component__WEBPACK_IMPORTED_MODULE_1__.MapComponent), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_layergroup_component__WEBPACK_IMPORTED_MODULE_2__.LayerGroupComponent, 8));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
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
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function LayerVectorTileComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 7478:
/*!*****************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/map.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MapComponent: () => (/* binding */ MapComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var ol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol */ 5814);



const _c0 = ["*"];
class MapComponent {
  constructor(host) {
    this.host = host;
    this.width = '100%';
    this.height = '100%';
    this.olChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.olChangeLayerGroup = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.olChangeSize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.olChangeTarget = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.olChangeView = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.olClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.dblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.olError = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.loadEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.loadStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.moveEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.moveStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.pointerDrag = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.pointerMove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.olPostCompose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.olPostRender = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.olPreCompose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.olPropertyChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.postRender = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.propertyChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.singleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.componentType = 'map';
    // we pass empty arrays to not get default controls/interactions because we have our own directives
    this.controls = [];
    this.interactions = [];
  }
  ngOnInit() {
    // console.log('creating ol.Map instance with:', this);
    this.instance = new ol__WEBPACK_IMPORTED_MODULE_1__["default"](this);
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
    return new (t || MapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
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
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
    ngContentSelectors: _c0,
    decls: 2,
    vars: 4,
    template: function MapComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.width)("height", ctx.height);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 1025:
/*!*********************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/overlay.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OverlayComponent: () => (/* binding */ OverlayComponent)
/* harmony export */ });
/* harmony import */ var ol_Overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/Overlay */ 7553);
/* harmony import */ var _content_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content.component */ 7105);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.component */ 7478);




const _c0 = ["*"];
class OverlayComponent {
  constructor(map) {
    this.map = map;
    this.componentType = 'overlay';
  }
  ngOnInit() {
    if (this.content) {
      this.element = this.content.elementRef.nativeElement;
      this.instance = new ol_Overlay__WEBPACK_IMPORTED_MODULE_2__["default"](this);
      this.map.instance.addOverlay(this.instance);
    }
  }
  ngOnDestroy() {
    if (this.instance) {
      this.map.instance.removeOverlay(this.instance);
    }
  }
  static #_ = this.ɵfac = function OverlayComponent_Factory(t) {
    return new (t || OverlayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_map_component__WEBPACK_IMPORTED_MODULE_1__.MapComponent));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: OverlayComponent,
    selectors: [["aol-overlay"]],
    contentQueries: function OverlayComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, _content_component__WEBPACK_IMPORTED_MODULE_0__.ContentComponent, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 475:
/*!******************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/sources/bingmaps.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SourceBingmapsComponent: () => (/* binding */ SourceBingmapsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var ol_source__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/source */ 3797);
/* harmony import */ var _source_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./source.component */ 5786);
/* harmony import */ var _layers_layertile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layers/layertile.component */ 2474);





class SourceBingmapsComponent extends _source_component__WEBPACK_IMPORTED_MODULE_0__.SourceComponent {
  constructor(layer) {
    super(layer);
    this.imagerySet = 'Aerial';
  }
  ngOnInit() {
    this.instance = new ol_source__WEBPACK_IMPORTED_MODULE_2__["default"](this);
    this.host.instance.setSource(this.instance);
  }
  static #_ = this.ɵfac = function SourceBingmapsComponent_Factory(t) {
    return new (t || SourceBingmapsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_layers_layertile_component__WEBPACK_IMPORTED_MODULE_1__.LayerTileComponent, 1));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
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
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
      provide: _source_component__WEBPACK_IMPORTED_MODULE_0__.SourceComponent,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(() => SourceBingmapsComponent)
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
    decls: 1,
    vars: 0,
    consts: [[1, "aol-source-bingmaps"]],
    template: function SourceBingmapsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 0);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 4019:
/*!*****************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/sources/cluster.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SourceClusterComponent: () => (/* binding */ SourceClusterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var ol_source__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/source */ 9778);
/* harmony import */ var _source_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./source.component */ 5786);
/* harmony import */ var _vector_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vector.component */ 2263);
/* harmony import */ var _layers_layervector_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layers/layervector.component */ 3649);






const _c0 = ["*"];
class SourceClusterComponent extends _source_component__WEBPACK_IMPORTED_MODULE_0__.SourceComponent {
  constructor(layer) {
    super(layer);
  }
  ngAfterContentInit() {
    this.source = this.sourceVectorComponent.instance;
    this.instance = new ol_source__WEBPACK_IMPORTED_MODULE_3__["default"](this);
    this.host.instance.setSource(this.instance);
  }
  ngOnChanges(changes) {
    if (this.instance && changes.hasOwnProperty('distance')) {
      this.instance.setDistance(this.distance);
    }
  }
  static #_ = this.ɵfac = function SourceClusterComponent_Factory(t) {
    return new (t || SourceClusterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_layers_layervector_component__WEBPACK_IMPORTED_MODULE_2__.LayerVectorComponent, 1));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: SourceClusterComponent,
    selectors: [["aol-source-cluster"]],
    contentQueries: function SourceClusterComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, _vector_component__WEBPACK_IMPORTED_MODULE_1__.SourceVectorComponent, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.sourceVectorComponent = _t.first);
      }
    },
    inputs: {
      distance: "distance",
      geometryFunction: "geometryFunction",
      wrapX: "wrapX"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{
      provide: _source_component__WEBPACK_IMPORTED_MODULE_0__.SourceComponent,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(() => SourceClusterComponent)
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function SourceClusterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 4520:
/*!*****************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/sources/geojson.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SourceGeoJSONComponent: () => (/* binding */ SourceGeoJSONComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _source_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./source.component */ 5786);
/* harmony import */ var ol_source__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/source */ 4664);
/* harmony import */ var ol_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/format */ 8625);
/* harmony import */ var _layers_layervector_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layers/layervector.component */ 3649);






const _c0 = ["*"];
class SourceGeoJSONComponent extends _source_component__WEBPACK_IMPORTED_MODULE_0__.SourceComponent {
  constructor(layer) {
    super(layer);
  }
  ngOnInit() {
    this.format = new ol_format__WEBPACK_IMPORTED_MODULE_2__["default"](this);
    this.instance = new ol_source__WEBPACK_IMPORTED_MODULE_3__["default"](this);
    this.host.instance.setSource(this.instance);
  }
  static #_ = this.ɵfac = function SourceGeoJSONComponent_Factory(t) {
    return new (t || SourceGeoJSONComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_layers_layervector_component__WEBPACK_IMPORTED_MODULE_1__.LayerVectorComponent, 1));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: SourceGeoJSONComponent,
    selectors: [["aol-source-geojson"]],
    inputs: {
      defaultDataProjection: "defaultDataProjection",
      featureProjection: "featureProjection",
      geometryName: "geometryName",
      url: "url"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{
      provide: _source_component__WEBPACK_IMPORTED_MODULE_0__.SourceComponent,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(() => SourceGeoJSONComponent)
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function SourceGeoJSONComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 1483:
/*!*************************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/sources/imagearcgisrest.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SourceImageArcGISRestComponent: () => (/* binding */ SourceImageArcGISRestComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var ol_source_ImageArcGISRest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/source/ImageArcGISRest */ 4040);
/* harmony import */ var _source_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./source.component */ 5786);
/* harmony import */ var _layers_layerimage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layers/layerimage.component */ 5089);





const _c0 = ["*"];
class SourceImageArcGISRestComponent extends _source_component__WEBPACK_IMPORTED_MODULE_0__.SourceComponent {
  constructor(layer) {
    super(layer);
    this.ratio = 1.5;
    this.imageLoadStart = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.imageLoadEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.imageLoadError = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }
  ngOnInit() {
    this.instance = new ol_source_ImageArcGISRest__WEBPACK_IMPORTED_MODULE_3__["default"](this);
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
    return new (t || SourceImageArcGISRestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_layers_layerimage_component__WEBPACK_IMPORTED_MODULE_1__.LayerImageComponent, 1));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
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
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
      provide: _source_component__WEBPACK_IMPORTED_MODULE_0__.SourceComponent,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => SourceImageArcGISRestComponent)
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function SourceImageArcGISRestComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 4796:
/*!*********************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/sources/imagestatic.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SourceImageStaticComponent: () => (/* binding */ SourceImageStaticComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var ol_source__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/source */ 8782);
/* harmony import */ var _source_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./source.component */ 5786);
/* harmony import */ var _layers_layerimage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layers/layerimage.component */ 5089);





const _c0 = ["*"];
class SourceImageStaticComponent extends _source_component__WEBPACK_IMPORTED_MODULE_0__.SourceComponent {
  constructor(layer) {
    super(layer);
    this.imageLoadStart = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.imageLoadEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.imageLoadError = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }
  setLayerSource() {
    this.instance = new ol_source__WEBPACK_IMPORTED_MODULE_3__["default"](this);
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
    return new (t || SourceImageStaticComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_layers_layerimage_component__WEBPACK_IMPORTED_MODULE_1__.LayerImageComponent, 1));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
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
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
      provide: _source_component__WEBPACK_IMPORTED_MODULE_0__.SourceComponent,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => SourceImageStaticComponent)
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function SourceImageStaticComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 8317:
/*!******************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/sources/imagewms.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SourceImageWMSComponent: () => (/* binding */ SourceImageWMSComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var ol_source__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/source */ 4735);
/* harmony import */ var _source_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./source.component */ 5786);
/* harmony import */ var _layers_layerimage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layers/layerimage.component */ 5089);





const _c0 = ["*"];
class SourceImageWMSComponent extends _source_component__WEBPACK_IMPORTED_MODULE_0__.SourceComponent {
  constructor(layer) {
    super(layer);
    this.imageLoadStart = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.imageLoadEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.imageLoadError = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }
  ngOnInit() {
    this.instance = new ol_source__WEBPACK_IMPORTED_MODULE_3__["default"](this);
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
    return new (t || SourceImageWMSComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_layers_layerimage_component__WEBPACK_IMPORTED_MODULE_1__.LayerImageComponent, 1));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
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
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
      provide: _source_component__WEBPACK_IMPORTED_MODULE_0__.SourceComponent,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => SourceImageWMSComponent)
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function SourceImageWMSComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 1537:
/*!*************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/sources/osm.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SourceOsmComponent: () => (/* binding */ SourceOsmComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var ol_source__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/source */ 5780);
/* harmony import */ var _source_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./source.component */ 5786);
/* harmony import */ var _xyz_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./xyz.component */ 5831);
/* harmony import */ var _layers_layertile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layers/layertile.component */ 2474);






class SourceOsmComponent extends _xyz_component__WEBPACK_IMPORTED_MODULE_1__.SourceXYZComponent {
  constructor(layer) {
    super(layer);
    this.layer = layer;
    this.tileLoadStart = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.tileLoadEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.tileLoadError = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
  }
  ngAfterContentInit() {
    if (this.tileGridXYZ) {
      this.tileGrid = this.tileGridXYZ.instance;
    }
    this.instance = new ol_source__WEBPACK_IMPORTED_MODULE_4__["default"](this);
    this.instance.on('tileloadstart', event => this.tileLoadStart.emit(event));
    this.instance.on('tileloadend', event => this.tileLoadEnd.emit(event));
    this.instance.on('tileloaderror', event => this.tileLoadError.emit(event));
    this.register(this.instance);
  }
  static #_ = this.ɵfac = function SourceOsmComponent_Factory(t) {
    return new (t || SourceOsmComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_layers_layertile_component__WEBPACK_IMPORTED_MODULE_2__.LayerTileComponent, 9));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
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
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
      provide: _source_component__WEBPACK_IMPORTED_MODULE_0__.SourceComponent,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(() => SourceOsmComponent)
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
    decls: 1,
    vars: 0,
    consts: [[1, "aol-source-osm"]],
    template: function SourceOsmComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 0);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 8827:
/*!****************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/sources/raster.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SourceRasterComponent: () => (/* binding */ SourceRasterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var ol_source__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/source */ 5839);
/* harmony import */ var _source_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./source.component */ 5786);
/* harmony import */ var _layers_layerimage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layers/layerimage.component */ 5089);





const _c0 = ["*"];
class SourceRasterComponent extends _source_component__WEBPACK_IMPORTED_MODULE_0__.SourceComponent {
  set source(sourceComponent) {
    this.sources = [sourceComponent.instance];
    if (this.instance) {
      // Openlayer doesn't handle sources update. Just recreate Raster instance.
      this.init();
    }
  }
  constructor(layer) {
    super(layer);
    this.beforeOperations = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.afterOperations = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.sources = [];
  }
  ngAfterContentInit() {
    this.init();
  }
  init() {
    this.instance = new ol_source__WEBPACK_IMPORTED_MODULE_3__["default"](this);
    this.instance.on('beforeoperations', event => this.beforeOperations.emit(event));
    this.instance.on('afteroperations', event => this.afterOperations.emit(event));
    this.register(this.instance);
  }
  static #_ = this.ɵfac = function SourceRasterComponent_Factory(t) {
    return new (t || SourceRasterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_layers_layerimage_component__WEBPACK_IMPORTED_MODULE_1__.LayerImageComponent, 1));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: SourceRasterComponent,
    selectors: [["aol-source-raster"]],
    contentQueries: function SourceRasterComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _source_component__WEBPACK_IMPORTED_MODULE_0__.SourceComponent, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.source = _t.first);
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
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
      provide: _source_component__WEBPACK_IMPORTED_MODULE_0__.SourceComponent,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => SourceRasterComponent)
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function SourceRasterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 5786:
/*!****************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/sources/source.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SourceComponent: () => (/* binding */ SourceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _layers_layer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layers/layer.component */ 7880);


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
    return new (t || SourceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_layers_layer_component__WEBPACK_IMPORTED_MODULE_0__.LayerComponent));
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: SourceComponent,
    inputs: {
      attributions: "attributions"
    }
  });
}

/***/ }),

/***/ 3241:
/*!******************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/sources/tilejson.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SourceTileJSONComponent: () => (/* binding */ SourceTileJSONComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var ol_source__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/source */ 3756);
/* harmony import */ var _source_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./source.component */ 5786);
/* harmony import */ var _layers_layertile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layers/layertile.component */ 2474);





const _c0 = ["*"];
class SourceTileJSONComponent extends _source_component__WEBPACK_IMPORTED_MODULE_0__.SourceComponent {
  constructor(layer) {
    super(layer);
  }
  ngOnInit() {
    this.instance = new ol_source__WEBPACK_IMPORTED_MODULE_2__["default"](this);
    this.host.instance.setSource(this.instance);
  }
  static #_ = this.ɵfac = function SourceTileJSONComponent_Factory(t) {
    return new (t || SourceTileJSONComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_layers_layertile_component__WEBPACK_IMPORTED_MODULE_1__.LayerTileComponent, 1));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: SourceTileJSONComponent,
    selectors: [["aol-source-tilejson"]],
    inputs: {
      url: "url"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
      provide: _source_component__WEBPACK_IMPORTED_MODULE_0__.SourceComponent,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(() => SourceTileJSONComponent)
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function SourceTileJSONComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 6544:
/*!*****************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/sources/tilewms.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SourceTileWMSComponent: () => (/* binding */ SourceTileWMSComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _source_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./source.component */ 5786);
/* harmony import */ var ol_source__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/source */ 6558);
/* harmony import */ var _layers_layertile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layers/layertile.component */ 2474);





const _c0 = ["*"];
class SourceTileWMSComponent extends _source_component__WEBPACK_IMPORTED_MODULE_0__.SourceComponent {
  constructor(layer) {
    super(layer);
  }
  ngOnInit() {
    this.instance = new ol_source__WEBPACK_IMPORTED_MODULE_2__["default"](this);
    this.host.instance.setSource(this.instance);
  }
  ngOnChanges(changes) {
    if (this.instance && changes.hasOwnProperty('params')) {
      this.instance.updateParams(this.params);
    }
  }
  static #_ = this.ɵfac = function SourceTileWMSComponent_Factory(t) {
    return new (t || SourceTileWMSComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_layers_layertile_component__WEBPACK_IMPORTED_MODULE_1__.LayerTileComponent, 1));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
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
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
      provide: _source_component__WEBPACK_IMPORTED_MODULE_0__.SourceComponent,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(() => SourceTileWMSComponent)
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function SourceTileWMSComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 996:
/*!******************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/sources/tilewmts.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SourceTileWMTSComponent: () => (/* binding */ SourceTileWMTSComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _source_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./source.component */ 5786);
/* harmony import */ var _tilegridwmts_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tilegridwmts.component */ 9933);
/* harmony import */ var ol_source__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/source */ 5541);
/* harmony import */ var _layers_layertile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layers/layertile.component */ 2474);






const _c0 = ["*"];
class SourceTileWMTSComponent extends _source_component__WEBPACK_IMPORTED_MODULE_0__.SourceComponent {
  constructor(layer) {
    super(layer);
    this.tileLoadStart = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.tileLoadEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.tileLoadError = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
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
    this.instance = new ol_source__WEBPACK_IMPORTED_MODULE_4__["default"](this);
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
    return new (t || SourceTileWMTSComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_layers_layertile_component__WEBPACK_IMPORTED_MODULE_2__.LayerTileComponent, 1));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: SourceTileWMTSComponent,
    selectors: [["aol-source-tilewmts"]],
    contentQueries: function SourceTileWMTSComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, _tilegridwmts_component__WEBPACK_IMPORTED_MODULE_1__.TileGridWMTSComponent, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.tileGridWMTS = _t.first);
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
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
      provide: _source_component__WEBPACK_IMPORTED_MODULE_0__.SourceComponent,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(() => SourceTileWMTSComponent)
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function SourceTileWMTSComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 9573:
/*!*****************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/sources/utfgrid.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SourceUTFGridComponent: () => (/* binding */ SourceUTFGridComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _source_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./source.component */ 5786);
/* harmony import */ var ol_source__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/source */ 1757);
/* harmony import */ var _layers_layertile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layers/layertile.component */ 2474);





const _c0 = ["*"];
class SourceUTFGridComponent extends _source_component__WEBPACK_IMPORTED_MODULE_0__.SourceComponent {
  constructor(layer) {
    super(layer);
  }
  ngOnInit() {
    this.instance = new ol_source__WEBPACK_IMPORTED_MODULE_2__["default"](this);
    this.host.instance.setSource(this.instance);
  }
  static #_ = this.ɵfac = function SourceUTFGridComponent_Factory(t) {
    return new (t || SourceUTFGridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_layers_layertile_component__WEBPACK_IMPORTED_MODULE_1__.LayerTileComponent, 1));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: SourceUTFGridComponent,
    selectors: [["aol-source-utfgrid"]],
    inputs: {
      tileJSON: "tileJSON",
      url: "url"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
      provide: _source_component__WEBPACK_IMPORTED_MODULE_0__.SourceComponent,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(() => SourceUTFGridComponent)
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function SourceUTFGridComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 2263:
/*!****************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/sources/vector.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SourceVectorComponent: () => (/* binding */ SourceVectorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var ol_source__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/source */ 4664);
/* harmony import */ var _source_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./source.component */ 5786);
/* harmony import */ var _layers_layervector_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layers/layervector.component */ 3649);





const _c0 = ["*"];
class SourceVectorComponent extends _source_component__WEBPACK_IMPORTED_MODULE_0__.SourceComponent {
  constructor(layer) {
    super(layer);
  }
  ngOnInit() {
    this.instance = new ol_source__WEBPACK_IMPORTED_MODULE_2__["default"](this);
    this.host.instance.setSource(this.instance);
  }
  static #_ = this.ɵfac = function SourceVectorComponent_Factory(t) {
    return new (t || SourceVectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_layers_layervector_component__WEBPACK_IMPORTED_MODULE_1__.LayerVectorComponent, 1));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
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
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
      provide: _source_component__WEBPACK_IMPORTED_MODULE_0__.SourceComponent,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(() => SourceVectorComponent)
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function SourceVectorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 7133:
/*!********************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/sources/vectortile.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SourceVectorTileComponent: () => (/* binding */ SourceVectorTileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var ol_source__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/source */ 7129);
/* harmony import */ var _formats_format_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../formats/format.component */ 7638);
/* harmony import */ var _tilegrid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tilegrid.component */ 2365);
/* harmony import */ var _source_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./source.component */ 5786);
/* harmony import */ var _layers_layervectortile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layers/layervectortile.component */ 3237);







const _c0 = ["*"];
class SourceVectorTileComponent extends _source_component__WEBPACK_IMPORTED_MODULE_2__.SourceComponent {
  constructor(layer) {
    super(layer);
  }
  /* need the children to construct the OL3 object */
  ngAfterContentInit() {
    this.format = this.formatComponent.instance;
    this.tileGrid = this.tileGridComponent.instance;
    // console.log('creating ol.source.VectorTile instance with:', this);
    this.instance = new ol_source__WEBPACK_IMPORTED_MODULE_4__["default"](this);
    this.host.instance.setSource(this.instance);
  }
  static #_ = this.ɵfac = function SourceVectorTileComponent_Factory(t) {
    return new (t || SourceVectorTileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_layers_layervectortile_component__WEBPACK_IMPORTED_MODULE_3__.LayerVectorTileComponent, 1));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: SourceVectorTileComponent,
    selectors: [["aol-source-vectortile"]],
    contentQueries: function SourceVectorTileComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵcontentQuery"](dirIndex, _formats_format_component__WEBPACK_IMPORTED_MODULE_0__.FormatComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵcontentQuery"](dirIndex, _tilegrid_component__WEBPACK_IMPORTED_MODULE_1__.TileGridComponent, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.formatComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.tileGridComponent = _t.first);
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
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([{
      provide: _source_component__WEBPACK_IMPORTED_MODULE_2__.SourceComponent,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.forwardRef)(() => SourceVectorTileComponent)
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function SourceVectorTileComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 5831:
/*!*************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/sources/xyz.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SourceXYZComponent: () => (/* binding */ SourceXYZComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var ol_source__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/source */ 4620);
/* harmony import */ var _tilegrid_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tilegrid.component */ 2365);
/* harmony import */ var _source_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./source.component */ 5786);
/* harmony import */ var _layers_layertile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layers/layertile.component */ 2474);






const _c0 = ["*"];
class SourceXYZComponent extends _source_component__WEBPACK_IMPORTED_MODULE_1__.SourceComponent {
  constructor(layer) {
    super(layer);
    this.layer = layer;
    this.tileLoadStart = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.tileLoadEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.tileLoadError = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
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
    this.instance = new ol_source__WEBPACK_IMPORTED_MODULE_4__["default"](this);
    this.instance.on('tileloadstart', event => this.tileLoadStart.emit(event));
    this.instance.on('tileloadend', event => this.tileLoadEnd.emit(event));
    this.instance.on('tileloaderror', event => this.tileLoadError.emit(event));
    this.register(this.instance);
  }
  static #_ = this.ɵfac = function SourceXYZComponent_Factory(t) {
    return new (t || SourceXYZComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_layers_layertile_component__WEBPACK_IMPORTED_MODULE_2__.LayerTileComponent, 9));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: SourceXYZComponent,
    selectors: [["aol-source-xyz"]],
    contentQueries: function SourceXYZComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, _tilegrid_component__WEBPACK_IMPORTED_MODULE_0__.TileGridComponent, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.tileGridXYZ = _t.first);
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
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
      provide: _source_component__WEBPACK_IMPORTED_MODULE_1__.SourceComponent,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(() => SourceXYZComponent)
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function SourceXYZComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 5425:
/*!***************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/styles/circle.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StyleCircleComponent: () => (/* binding */ StyleCircleComponent)
/* harmony export */ });
/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/style */ 6294);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _style_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.component */ 5960);



const _c0 = ["*"];
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
    this.instance = new ol_style__WEBPACK_IMPORTED_MODULE_1__["default"](this);
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
    return new (t || StyleCircleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_style_component__WEBPACK_IMPORTED_MODULE_0__.StyleComponent, 1));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: StyleCircleComponent,
    selectors: [["aol-style-circle"]],
    inputs: {
      fill: "fill",
      radius: "radius",
      snapToPixel: "snapToPixel",
      stroke: "stroke"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function StyleCircleComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 4078:
/*!*************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/styles/fill.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StyleFillComponent: () => (/* binding */ StyleFillComponent)
/* harmony export */ });
/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/style */ 2089);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _style_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.component */ 5960);
/* harmony import */ var _circle_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./circle.component */ 5425);
/* harmony import */ var _text_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text.component */ 6700);





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
    this.instance = new ol_style__WEBPACK_IMPORTED_MODULE_3__["default"](this);
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
    return new (t || StyleFillComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_style_component__WEBPACK_IMPORTED_MODULE_0__.StyleComponent, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_circle_component__WEBPACK_IMPORTED_MODULE_1__.StyleCircleComponent, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_text_component__WEBPACK_IMPORTED_MODULE_2__.StyleTextComponent, 8));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: StyleFillComponent,
    selectors: [["aol-style-fill"]],
    inputs: {
      color: "color"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
    decls: 1,
    vars: 0,
    consts: [[1, "aol-style-fill"]],
    template: function StyleFillComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 0);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 2856:
/*!*************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/styles/icon.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StyleIconComponent: () => (/* binding */ StyleIconComponent)
/* harmony export */ });
/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/style */ 3587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _style_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.component */ 5960);



class StyleIconComponent {
  constructor(host) {
    this.host = host;
  }
  ngOnInit() {
    // console.log('creating ol.style.Icon instance with: ', this);
    this.instance = new ol_style__WEBPACK_IMPORTED_MODULE_1__["default"](this);
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
      this.instance = new ol_style__WEBPACK_IMPORTED_MODULE_1__["default"](this);
      this.host.instance.setImage(this.instance);
    }
    this.host.update();
    // console.log('changes detected in aol-style-icon: ', changes);
  }
  static #_ = this.ɵfac = function StyleIconComponent_Factory(t) {
    return new (t || StyleIconComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_style_component__WEBPACK_IMPORTED_MODULE_0__.StyleComponent, 1));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
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
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
    decls: 1,
    vars: 0,
    consts: [[1, "aol-style-icon"]],
    template: function StyleIconComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 2020:
/*!***************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/styles/stroke.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StyleStrokeComponent: () => (/* binding */ StyleStrokeComponent)
/* harmony export */ });
/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/style */ 9527);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _style_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.component */ 5960);
/* harmony import */ var _circle_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./circle.component */ 5425);
/* harmony import */ var _text_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text.component */ 6700);





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
    this.instance = new ol_style__WEBPACK_IMPORTED_MODULE_3__["default"](this);
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
    return new (t || StyleStrokeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_style_component__WEBPACK_IMPORTED_MODULE_0__.StyleComponent, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_circle_component__WEBPACK_IMPORTED_MODULE_1__.StyleCircleComponent, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_text_component__WEBPACK_IMPORTED_MODULE_2__.StyleTextComponent, 8));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
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
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
    decls: 1,
    vars: 0,
    consts: [[1, "aol-style-stroke"]],
    template: function StyleStrokeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 0);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 5960:
/*!**************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/styles/style.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StyleComponent: () => (/* binding */ StyleComponent)
/* harmony export */ });
/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/style */ 1832);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _feature_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../feature.component */ 4374);
/* harmony import */ var _layers_layervector_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layers/layervector.component */ 3649);




const _c0 = ["*"];
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
    this.instance = new ol_style__WEBPACK_IMPORTED_MODULE_2__["default"](this);
    this.host.instance.setStyle(this.instance);
  }
  static #_ = this.ɵfac = function StyleComponent_Factory(t) {
    return new (t || StyleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_feature_component__WEBPACK_IMPORTED_MODULE_0__.FeatureComponent, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_layers_layervector_component__WEBPACK_IMPORTED_MODULE_1__.LayerVectorComponent, 8));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
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
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 6700:
/*!*************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/styles/text.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StyleTextComponent: () => (/* binding */ StyleTextComponent)
/* harmony export */ });
/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/style */ 5536);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _style_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.component */ 5960);



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
    this.instance = new ol_style__WEBPACK_IMPORTED_MODULE_1__["default"](this);
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
    return new (t || StyleTextComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_style_component__WEBPACK_IMPORTED_MODULE_0__.StyleComponent, 8));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
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
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
    decls: 1,
    vars: 0,
    consts: [[1, "aol-style-text"]],
    template: function StyleTextComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 2365:
/*!**********************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/tilegrid.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TileGridComponent: () => (/* binding */ TileGridComponent)
/* harmony export */ });
/* harmony import */ var ol_tilegrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ol/tilegrid */ 7586);
/* harmony import */ var ol_tilegrid_TileGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/tilegrid/TileGrid */ 9890);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);



class TileGridComponent {
  ngOnInit() {
    if (!this.resolutions) {
      this.instance = (0,ol_tilegrid__WEBPACK_IMPORTED_MODULE_0__.createXYZ)(this);
    } else {
      this.instance = new ol_tilegrid_TileGrid__WEBPACK_IMPORTED_MODULE_1__["default"](this);
    }
  }
  ngOnChanges(changes) {
    if (!this.resolutions) {
      this.instance = (0,ol_tilegrid__WEBPACK_IMPORTED_MODULE_0__.createXYZ)(this);
    } else {
      this.instance = new ol_tilegrid_TileGrid__WEBPACK_IMPORTED_MODULE_1__["default"](this);
    }
  }
  static #_ = this.ɵfac = function TileGridComponent_Factory(t) {
    return new (t || TileGridComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
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
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
    decls: 0,
    vars: 0,
    template: function TileGridComponent_Template(rf, ctx) {},
    encapsulation: 2
  });
}

/***/ }),

/***/ 9933:
/*!**************************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/tilegridwmts.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TileGridWMTSComponent: () => (/* binding */ TileGridWMTSComponent)
/* harmony export */ });
/* harmony import */ var ol_tilegrid_WMTS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/tilegrid/WMTS */ 3907);
/* harmony import */ var _tilegrid_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tilegrid.component */ 2365);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);



class TileGridWMTSComponent extends _tilegrid_component__WEBPACK_IMPORTED_MODULE_0__.TileGridComponent {
  ngOnInit() {
    this.instance = new ol_tilegrid_WMTS__WEBPACK_IMPORTED_MODULE_1__["default"](this);
  }
  static #_ = this.ɵfac = /*@__PURE__*/(() => {
    let ɵTileGridWMTSComponent_BaseFactory;
    return function TileGridWMTSComponent_Factory(t) {
      return (ɵTileGridWMTSComponent_BaseFactory || (ɵTileGridWMTSComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](TileGridWMTSComponent)))(t || TileGridWMTSComponent);
    };
  })();
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
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
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
    decls: 0,
    vars: 0,
    template: function TileGridWMTSComponent_Template(rf, ctx) {},
    encapsulation: 2
  });
}

/***/ }),

/***/ 8525:
/*!******************************************************!*\
  !*** ./libs/ng-openlayers/src/lib/view.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ViewComponent: () => (/* binding */ ViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var ol_View__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/View */ 9186);
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.component */ 7478);




const _c0 = ["*"];
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
    this.instance = new ol_View__WEBPACK_IMPORTED_MODULE_2__["default"](this);
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
            this.instance = new ol_View__WEBPACK_IMPORTED_MODULE_2__["default"](this);
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
    return new (t || ViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
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

/***/ }),

/***/ 8972:
/*!**********************************************!*\
  !*** ./libs/ng-openlayers/src/public-api.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AngularOpenlayersModule: () => (/* binding */ AngularOpenlayersModule),
/* harmony export */   AttributionComponent: () => (/* reexport safe */ _lib_attribution_component__WEBPACK_IMPORTED_MODULE_73__.AttributionComponent),
/* harmony export */   AttributionsComponent: () => (/* reexport safe */ _lib_attributions_component__WEBPACK_IMPORTED_MODULE_72__.AttributionsComponent),
/* harmony export */   CollectionCoordinatesComponent: () => (/* reexport safe */ _lib_collectioncoordinates_component__WEBPACK_IMPORTED_MODULE_33__.CollectionCoordinatesComponent),
/* harmony export */   ContentComponent: () => (/* reexport safe */ _lib_content_component__WEBPACK_IMPORTED_MODULE_71__.ContentComponent),
/* harmony export */   ControlAttributionComponent: () => (/* reexport safe */ _lib_controls_attribution_component__WEBPACK_IMPORTED_MODULE_42__.ControlAttributionComponent),
/* harmony export */   ControlComponent: () => (/* reexport safe */ _lib_controls_control_component__WEBPACK_IMPORTED_MODULE_41__.ControlComponent),
/* harmony export */   ControlFullScreenComponent: () => (/* reexport safe */ _lib_controls_fullscreen_component__WEBPACK_IMPORTED_MODULE_43__.ControlFullScreenComponent),
/* harmony export */   ControlMousePositionComponent: () => (/* reexport safe */ _lib_controls_mouseposition_component__WEBPACK_IMPORTED_MODULE_44__.ControlMousePositionComponent),
/* harmony export */   ControlOverviewMapComponent: () => (/* reexport safe */ _lib_controls_overviewmap_component__WEBPACK_IMPORTED_MODULE_45__.ControlOverviewMapComponent),
/* harmony export */   ControlRotateComponent: () => (/* reexport safe */ _lib_controls_rotate_component__WEBPACK_IMPORTED_MODULE_46__.ControlRotateComponent),
/* harmony export */   ControlScaleLineComponent: () => (/* reexport safe */ _lib_controls_scaleline_component__WEBPACK_IMPORTED_MODULE_47__.ControlScaleLineComponent),
/* harmony export */   ControlZoomComponent: () => (/* reexport safe */ _lib_controls_zoom_component__WEBPACK_IMPORTED_MODULE_48__.ControlZoomComponent),
/* harmony export */   ControlZoomSliderComponent: () => (/* reexport safe */ _lib_controls_zoomslider_component__WEBPACK_IMPORTED_MODULE_49__.ControlZoomSliderComponent),
/* harmony export */   ControlZoomToExtentComponent: () => (/* reexport safe */ _lib_controls_zoomtoextent_component__WEBPACK_IMPORTED_MODULE_50__.ControlZoomToExtentComponent),
/* harmony export */   CoordinateComponent: () => (/* reexport safe */ _lib_coordinate_component__WEBPACK_IMPORTED_MODULE_32__.CoordinateComponent),
/* harmony export */   DefaultControlComponent: () => (/* reexport safe */ _lib_controls_default_component__WEBPACK_IMPORTED_MODULE_40__.DefaultControlComponent),
/* harmony export */   DefaultInteractionComponent: () => (/* reexport safe */ _lib_interactions_default_component__WEBPACK_IMPORTED_MODULE_54__.DefaultInteractionComponent),
/* harmony export */   DoubleClickZoomInteractionComponent: () => (/* reexport safe */ _lib_interactions_doubleclickzoom_component__WEBPACK_IMPORTED_MODULE_55__.DoubleClickZoomInteractionComponent),
/* harmony export */   DragAndDropInteractionComponent: () => (/* reexport safe */ _lib_interactions_draganddrop_component__WEBPACK_IMPORTED_MODULE_56__.DragAndDropInteractionComponent),
/* harmony export */   DragBoxInteractionComponent: () => (/* reexport safe */ _lib_interactions_dragbox_component__WEBPACK_IMPORTED_MODULE_57__.DragBoxInteractionComponent),
/* harmony export */   DragPanInteractionComponent: () => (/* reexport safe */ _lib_interactions_dragpan_component__WEBPACK_IMPORTED_MODULE_58__.DragPanInteractionComponent),
/* harmony export */   DragRotateAndZoomInteractionComponent: () => (/* reexport safe */ _lib_interactions_dragrotateandzoom_component__WEBPACK_IMPORTED_MODULE_60__.DragRotateAndZoomInteractionComponent),
/* harmony export */   DragRotateInteractionComponent: () => (/* reexport safe */ _lib_interactions_dragrotate_component__WEBPACK_IMPORTED_MODULE_59__.DragRotateInteractionComponent),
/* harmony export */   DragZoomInteractionComponent: () => (/* reexport safe */ _lib_interactions_dragzoom_component__WEBPACK_IMPORTED_MODULE_61__.DragZoomInteractionComponent),
/* harmony export */   DrawInteractionComponent: () => (/* reexport safe */ _lib_interactions_draw_component__WEBPACK_IMPORTED_MODULE_64__.DrawInteractionComponent),
/* harmony export */   FeatureComponent: () => (/* reexport safe */ _lib_feature_component__WEBPACK_IMPORTED_MODULE_24__.FeatureComponent),
/* harmony export */   FormatMVTComponent: () => (/* reexport safe */ _lib_formats_mvt_component__WEBPACK_IMPORTED_MODULE_51__.FormatMVTComponent),
/* harmony export */   GeometryCircleComponent: () => (/* reexport safe */ _lib_geom_geometrycircle_component__WEBPACK_IMPORTED_MODULE_25__.GeometryCircleComponent),
/* harmony export */   GeometryLinestringComponent: () => (/* reexport safe */ _lib_geom_geometrylinestring_component__WEBPACK_IMPORTED_MODULE_26__.GeometryLinestringComponent),
/* harmony export */   GeometryMultiLinestringComponent: () => (/* reexport safe */ _lib_geom_geometrymultilinestring_component__WEBPACK_IMPORTED_MODULE_27__.GeometryMultiLinestringComponent),
/* harmony export */   GeometryMultiPointComponent: () => (/* reexport safe */ _lib_geom_geometrymultipoint_component__WEBPACK_IMPORTED_MODULE_28__.GeometryMultiPointComponent),
/* harmony export */   GeometryMultiPolygonComponent: () => (/* reexport safe */ _lib_geom_geometrymultipolygon_component__WEBPACK_IMPORTED_MODULE_29__.GeometryMultiPolygonComponent),
/* harmony export */   GeometryPointComponent: () => (/* reexport safe */ _lib_geom_geometrypoint_component__WEBPACK_IMPORTED_MODULE_30__.GeometryPointComponent),
/* harmony export */   GeometryPolygonComponent: () => (/* reexport safe */ _lib_geom_geometrypolygon_component__WEBPACK_IMPORTED_MODULE_31__.GeometryPolygonComponent),
/* harmony export */   GraticuleComponent: () => (/* reexport safe */ _lib_graticule_component__WEBPACK_IMPORTED_MODULE_3__.GraticuleComponent),
/* harmony export */   KeyboardPanInteractionComponent: () => (/* reexport safe */ _lib_interactions_keyboardpan_component__WEBPACK_IMPORTED_MODULE_65__.KeyboardPanInteractionComponent),
/* harmony export */   KeyboardZoomInteractionComponent: () => (/* reexport safe */ _lib_interactions_keyboardzoom_component__WEBPACK_IMPORTED_MODULE_66__.KeyboardZoomInteractionComponent),
/* harmony export */   LayerComponent: () => (/* reexport safe */ _lib_layers_layer_component__WEBPACK_IMPORTED_MODULE_75__.LayerComponent),
/* harmony export */   LayerGroupComponent: () => (/* reexport safe */ _lib_layers_layergroup_component__WEBPACK_IMPORTED_MODULE_4__.LayerGroupComponent),
/* harmony export */   LayerImageComponent: () => (/* reexport safe */ _lib_layers_layerimage_component__WEBPACK_IMPORTED_MODULE_5__.LayerImageComponent),
/* harmony export */   LayerTileComponent: () => (/* reexport safe */ _lib_layers_layertile_component__WEBPACK_IMPORTED_MODULE_6__.LayerTileComponent),
/* harmony export */   LayerVectorComponent: () => (/* reexport safe */ _lib_layers_layervector_component__WEBPACK_IMPORTED_MODULE_8__.LayerVectorComponent),
/* harmony export */   LayerVectorTileComponent: () => (/* reexport safe */ _lib_layers_layervectortile_component__WEBPACK_IMPORTED_MODULE_9__.LayerVectorTileComponent),
/* harmony export */   MapComponent: () => (/* reexport safe */ _lib_map_component__WEBPACK_IMPORTED_MODULE_7__.MapComponent),
/* harmony export */   ModifyInteractionComponent: () => (/* reexport safe */ _lib_interactions_modify_component__WEBPACK_IMPORTED_MODULE_68__.ModifyInteractionComponent),
/* harmony export */   MouseWheelZoomInteractionComponent: () => (/* reexport safe */ _lib_interactions_mousewheelzoom_component__WEBPACK_IMPORTED_MODULE_62__.MouseWheelZoomInteractionComponent),
/* harmony export */   OverlayComponent: () => (/* reexport safe */ _lib_overlay_component__WEBPACK_IMPORTED_MODULE_70__.OverlayComponent),
/* harmony export */   PinchZoomInteractionComponent: () => (/* reexport safe */ _lib_interactions_pinchzoom_component__WEBPACK_IMPORTED_MODULE_63__.PinchZoomInteractionComponent),
/* harmony export */   SelectInteractionComponent: () => (/* reexport safe */ _lib_interactions_select_component__WEBPACK_IMPORTED_MODULE_67__.SelectInteractionComponent),
/* harmony export */   SimpleGeometryComponent: () => (/* reexport safe */ _lib_geom_simplegeometry_component__WEBPACK_IMPORTED_MODULE_0__.SimpleGeometryComponent),
/* harmony export */   SourceBingmapsComponent: () => (/* reexport safe */ _lib_sources_bingmaps_component__WEBPACK_IMPORTED_MODULE_11__.SourceBingmapsComponent),
/* harmony export */   SourceClusterComponent: () => (/* reexport safe */ _lib_sources_cluster_component__WEBPACK_IMPORTED_MODULE_12__.SourceClusterComponent),
/* harmony export */   SourceComponent: () => (/* reexport safe */ _lib_sources_source_component__WEBPACK_IMPORTED_MODULE_1__.SourceComponent),
/* harmony export */   SourceGeoJSONComponent: () => (/* reexport safe */ _lib_sources_geojson_component__WEBPACK_IMPORTED_MODULE_19__.SourceGeoJSONComponent),
/* harmony export */   SourceImageArcGISRestComponent: () => (/* reexport safe */ _lib_sources_imagearcgisrest_component__WEBPACK_IMPORTED_MODULE_22__.SourceImageArcGISRestComponent),
/* harmony export */   SourceImageStaticComponent: () => (/* reexport safe */ _lib_sources_imagestatic_component__WEBPACK_IMPORTED_MODULE_20__.SourceImageStaticComponent),
/* harmony export */   SourceImageWMSComponent: () => (/* reexport safe */ _lib_sources_imagewms_component__WEBPACK_IMPORTED_MODULE_21__.SourceImageWMSComponent),
/* harmony export */   SourceOsmComponent: () => (/* reexport safe */ _lib_sources_osm_component__WEBPACK_IMPORTED_MODULE_10__.SourceOsmComponent),
/* harmony export */   SourceRasterComponent: () => (/* reexport safe */ _lib_sources_raster_component__WEBPACK_IMPORTED_MODULE_23__.SourceRasterComponent),
/* harmony export */   SourceTileJSONComponent: () => (/* reexport safe */ _lib_sources_tilejson_component__WEBPACK_IMPORTED_MODULE_18__.SourceTileJSONComponent),
/* harmony export */   SourceTileWMSComponent: () => (/* reexport safe */ _lib_sources_tilewms_component__WEBPACK_IMPORTED_MODULE_17__.SourceTileWMSComponent),
/* harmony export */   SourceTileWMTSComponent: () => (/* reexport safe */ _lib_sources_tilewmts_component__WEBPACK_IMPORTED_MODULE_15__.SourceTileWMTSComponent),
/* harmony export */   SourceUTFGridComponent: () => (/* reexport safe */ _lib_sources_utfgrid_component__WEBPACK_IMPORTED_MODULE_74__.SourceUTFGridComponent),
/* harmony export */   SourceVectorComponent: () => (/* reexport safe */ _lib_sources_vector_component__WEBPACK_IMPORTED_MODULE_13__.SourceVectorComponent),
/* harmony export */   SourceVectorTileComponent: () => (/* reexport safe */ _lib_sources_vectortile_component__WEBPACK_IMPORTED_MODULE_16__.SourceVectorTileComponent),
/* harmony export */   SourceXYZComponent: () => (/* reexport safe */ _lib_sources_xyz_component__WEBPACK_IMPORTED_MODULE_14__.SourceXYZComponent),
/* harmony export */   StyleCircleComponent: () => (/* reexport safe */ _lib_styles_circle_component__WEBPACK_IMPORTED_MODULE_35__.StyleCircleComponent),
/* harmony export */   StyleComponent: () => (/* reexport safe */ _lib_styles_style_component__WEBPACK_IMPORTED_MODULE_34__.StyleComponent),
/* harmony export */   StyleFillComponent: () => (/* reexport safe */ _lib_styles_fill_component__WEBPACK_IMPORTED_MODULE_38__.StyleFillComponent),
/* harmony export */   StyleIconComponent: () => (/* reexport safe */ _lib_styles_icon_component__WEBPACK_IMPORTED_MODULE_37__.StyleIconComponent),
/* harmony export */   StyleStrokeComponent: () => (/* reexport safe */ _lib_styles_stroke_component__WEBPACK_IMPORTED_MODULE_36__.StyleStrokeComponent),
/* harmony export */   StyleTextComponent: () => (/* reexport safe */ _lib_styles_text_component__WEBPACK_IMPORTED_MODULE_39__.StyleTextComponent),
/* harmony export */   TileGridComponent: () => (/* reexport safe */ _lib_tilegrid_component__WEBPACK_IMPORTED_MODULE_52__.TileGridComponent),
/* harmony export */   TileGridWMTSComponent: () => (/* reexport safe */ _lib_tilegridwmts_component__WEBPACK_IMPORTED_MODULE_53__.TileGridWMTSComponent),
/* harmony export */   TranslateInteractionComponent: () => (/* reexport safe */ _lib_interactions_translate_component__WEBPACK_IMPORTED_MODULE_69__.TranslateInteractionComponent),
/* harmony export */   ViewComponent: () => (/* reexport safe */ _lib_view_component__WEBPACK_IMPORTED_MODULE_2__.ViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _lib_geom_simplegeometry_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/geom/simplegeometry.component */ 6380);
/* harmony import */ var _lib_sources_source_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/sources/source.component */ 5786);
/* harmony import */ var _lib_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/view.component */ 8525);
/* harmony import */ var _lib_graticule_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/graticule.component */ 7357);
/* harmony import */ var _lib_layers_layergroup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/layers/layergroup.component */ 853);
/* harmony import */ var _lib_layers_layerimage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/layers/layerimage.component */ 5089);
/* harmony import */ var _lib_layers_layertile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/layers/layertile.component */ 2474);
/* harmony import */ var _lib_map_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/map.component */ 7478);
/* harmony import */ var _lib_layers_layervector_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/layers/layervector.component */ 3649);
/* harmony import */ var _lib_layers_layervectortile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/layers/layervectortile.component */ 3237);
/* harmony import */ var _lib_sources_osm_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/sources/osm.component */ 1537);
/* harmony import */ var _lib_sources_bingmaps_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lib/sources/bingmaps.component */ 475);
/* harmony import */ var _lib_sources_cluster_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lib/sources/cluster.component */ 4019);
/* harmony import */ var _lib_sources_vector_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lib/sources/vector.component */ 2263);
/* harmony import */ var _lib_sources_xyz_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lib/sources/xyz.component */ 5831);
/* harmony import */ var _lib_sources_tilewmts_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./lib/sources/tilewmts.component */ 996);
/* harmony import */ var _lib_sources_vectortile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lib/sources/vectortile.component */ 7133);
/* harmony import */ var _lib_sources_tilewms_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./lib/sources/tilewms.component */ 6544);
/* harmony import */ var _lib_sources_tilejson_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./lib/sources/tilejson.component */ 3241);
/* harmony import */ var _lib_sources_geojson_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./lib/sources/geojson.component */ 4520);
/* harmony import */ var _lib_sources_imagestatic_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./lib/sources/imagestatic.component */ 4796);
/* harmony import */ var _lib_sources_imagewms_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./lib/sources/imagewms.component */ 8317);
/* harmony import */ var _lib_sources_imagearcgisrest_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./lib/sources/imagearcgisrest.component */ 1483);
/* harmony import */ var _lib_sources_raster_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./lib/sources/raster.component */ 8827);
/* harmony import */ var _lib_feature_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./lib/feature.component */ 4374);
/* harmony import */ var _lib_geom_geometrycircle_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./lib/geom/geometrycircle.component */ 2276);
/* harmony import */ var _lib_geom_geometrylinestring_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./lib/geom/geometrylinestring.component */ 3759);
/* harmony import */ var _lib_geom_geometrymultilinestring_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./lib/geom/geometrymultilinestring.component */ 3027);
/* harmony import */ var _lib_geom_geometrymultipoint_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./lib/geom/geometrymultipoint.component */ 950);
/* harmony import */ var _lib_geom_geometrymultipolygon_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./lib/geom/geometrymultipolygon.component */ 9330);
/* harmony import */ var _lib_geom_geometrypoint_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./lib/geom/geometrypoint.component */ 707);
/* harmony import */ var _lib_geom_geometrypolygon_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./lib/geom/geometrypolygon.component */ 7750);
/* harmony import */ var _lib_coordinate_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./lib/coordinate.component */ 2339);
/* harmony import */ var _lib_collectioncoordinates_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./lib/collectioncoordinates.component */ 6495);
/* harmony import */ var _lib_styles_style_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./lib/styles/style.component */ 5960);
/* harmony import */ var _lib_styles_circle_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./lib/styles/circle.component */ 5425);
/* harmony import */ var _lib_styles_stroke_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./lib/styles/stroke.component */ 2020);
/* harmony import */ var _lib_styles_icon_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./lib/styles/icon.component */ 2856);
/* harmony import */ var _lib_styles_fill_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./lib/styles/fill.component */ 4078);
/* harmony import */ var _lib_styles_text_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./lib/styles/text.component */ 6700);
/* harmony import */ var _lib_controls_default_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./lib/controls/default.component */ 5976);
/* harmony import */ var _lib_controls_control_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./lib/controls/control.component */ 9333);
/* harmony import */ var _lib_controls_attribution_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./lib/controls/attribution.component */ 1238);
/* harmony import */ var _lib_controls_fullscreen_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./lib/controls/fullscreen.component */ 7921);
/* harmony import */ var _lib_controls_mouseposition_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./lib/controls/mouseposition.component */ 1511);
/* harmony import */ var _lib_controls_overviewmap_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./lib/controls/overviewmap.component */ 4865);
/* harmony import */ var _lib_controls_rotate_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./lib/controls/rotate.component */ 2483);
/* harmony import */ var _lib_controls_scaleline_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./lib/controls/scaleline.component */ 3862);
/* harmony import */ var _lib_controls_zoom_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./lib/controls/zoom.component */ 2391);
/* harmony import */ var _lib_controls_zoomslider_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./lib/controls/zoomslider.component */ 1870);
/* harmony import */ var _lib_controls_zoomtoextent_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./lib/controls/zoomtoextent.component */ 8921);
/* harmony import */ var _lib_formats_mvt_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./lib/formats/mvt.component */ 4740);
/* harmony import */ var _lib_tilegrid_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./lib/tilegrid.component */ 2365);
/* harmony import */ var _lib_tilegridwmts_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./lib/tilegridwmts.component */ 9933);
/* harmony import */ var _lib_interactions_default_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./lib/interactions/default.component */ 7362);
/* harmony import */ var _lib_interactions_doubleclickzoom_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./lib/interactions/doubleclickzoom.component */ 4279);
/* harmony import */ var _lib_interactions_draganddrop_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./lib/interactions/draganddrop.component */ 5512);
/* harmony import */ var _lib_interactions_dragbox_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./lib/interactions/dragbox.component */ 4378);
/* harmony import */ var _lib_interactions_dragpan_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./lib/interactions/dragpan.component */ 1729);
/* harmony import */ var _lib_interactions_dragrotate_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./lib/interactions/dragrotate.component */ 476);
/* harmony import */ var _lib_interactions_dragrotateandzoom_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./lib/interactions/dragrotateandzoom.component */ 6827);
/* harmony import */ var _lib_interactions_dragzoom_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./lib/interactions/dragzoom.component */ 9045);
/* harmony import */ var _lib_interactions_mousewheelzoom_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./lib/interactions/mousewheelzoom.component */ 4712);
/* harmony import */ var _lib_interactions_pinchzoom_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./lib/interactions/pinchzoom.component */ 4126);
/* harmony import */ var _lib_interactions_draw_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./lib/interactions/draw.component */ 1543);
/* harmony import */ var _lib_interactions_keyboardpan_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./lib/interactions/keyboardpan.component */ 3988);
/* harmony import */ var _lib_interactions_keyboardzoom_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./lib/interactions/keyboardzoom.component */ 4781);
/* harmony import */ var _lib_interactions_select_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./lib/interactions/select.component */ 8359);
/* harmony import */ var _lib_interactions_modify_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./lib/interactions/modify.component */ 6510);
/* harmony import */ var _lib_interactions_translate_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./lib/interactions/translate.component */ 5148);
/* harmony import */ var _lib_overlay_component__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./lib/overlay.component */ 1025);
/* harmony import */ var _lib_content_component__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./lib/content.component */ 7105);
/* harmony import */ var _lib_attributions_component__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./lib/attributions.component */ 7311);
/* harmony import */ var _lib_attribution_component__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./lib/attribution.component */ 7037);
/* harmony import */ var _lib_sources_utfgrid_component__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./lib/sources/utfgrid.component */ 9573);
/* harmony import */ var _lib_layers_layer_component__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./lib/layers/layer.component */ 7880);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! @angular/core */ 1699);















































































const COMPONENTS = [_lib_map_component__WEBPACK_IMPORTED_MODULE_7__.MapComponent, _lib_view_component__WEBPACK_IMPORTED_MODULE_2__.ViewComponent, _lib_graticule_component__WEBPACK_IMPORTED_MODULE_3__.GraticuleComponent, _lib_layers_layergroup_component__WEBPACK_IMPORTED_MODULE_4__.LayerGroupComponent, _lib_layers_layerimage_component__WEBPACK_IMPORTED_MODULE_5__.LayerImageComponent, _lib_layers_layertile_component__WEBPACK_IMPORTED_MODULE_6__.LayerTileComponent, _lib_layers_layervector_component__WEBPACK_IMPORTED_MODULE_8__.LayerVectorComponent, _lib_layers_layervectortile_component__WEBPACK_IMPORTED_MODULE_9__.LayerVectorTileComponent, _lib_sources_osm_component__WEBPACK_IMPORTED_MODULE_10__.SourceOsmComponent, _lib_sources_bingmaps_component__WEBPACK_IMPORTED_MODULE_11__.SourceBingmapsComponent, _lib_sources_cluster_component__WEBPACK_IMPORTED_MODULE_12__.SourceClusterComponent, _lib_sources_utfgrid_component__WEBPACK_IMPORTED_MODULE_74__.SourceUTFGridComponent, _lib_sources_vector_component__WEBPACK_IMPORTED_MODULE_13__.SourceVectorComponent, _lib_sources_xyz_component__WEBPACK_IMPORTED_MODULE_14__.SourceXYZComponent, _lib_sources_vectortile_component__WEBPACK_IMPORTED_MODULE_16__.SourceVectorTileComponent, _lib_sources_tilewms_component__WEBPACK_IMPORTED_MODULE_17__.SourceTileWMSComponent, _lib_sources_tilewmts_component__WEBPACK_IMPORTED_MODULE_15__.SourceTileWMTSComponent, _lib_sources_tilejson_component__WEBPACK_IMPORTED_MODULE_18__.SourceTileJSONComponent, _lib_sources_geojson_component__WEBPACK_IMPORTED_MODULE_19__.SourceGeoJSONComponent, _lib_sources_imagestatic_component__WEBPACK_IMPORTED_MODULE_20__.SourceImageStaticComponent, _lib_sources_imagewms_component__WEBPACK_IMPORTED_MODULE_21__.SourceImageWMSComponent, _lib_sources_imagearcgisrest_component__WEBPACK_IMPORTED_MODULE_22__.SourceImageArcGISRestComponent, _lib_sources_raster_component__WEBPACK_IMPORTED_MODULE_23__.SourceRasterComponent, _lib_feature_component__WEBPACK_IMPORTED_MODULE_24__.FeatureComponent, _lib_geom_geometrylinestring_component__WEBPACK_IMPORTED_MODULE_26__.GeometryLinestringComponent, _lib_geom_geometrymultilinestring_component__WEBPACK_IMPORTED_MODULE_27__.GeometryMultiLinestringComponent, _lib_geom_geometrymultipoint_component__WEBPACK_IMPORTED_MODULE_28__.GeometryMultiPointComponent, _lib_geom_geometrymultipolygon_component__WEBPACK_IMPORTED_MODULE_29__.GeometryMultiPolygonComponent, _lib_geom_geometrypoint_component__WEBPACK_IMPORTED_MODULE_30__.GeometryPointComponent, _lib_geom_geometrypolygon_component__WEBPACK_IMPORTED_MODULE_31__.GeometryPolygonComponent, _lib_geom_geometrycircle_component__WEBPACK_IMPORTED_MODULE_25__.GeometryCircleComponent, _lib_coordinate_component__WEBPACK_IMPORTED_MODULE_32__.CoordinateComponent, _lib_collectioncoordinates_component__WEBPACK_IMPORTED_MODULE_33__.CollectionCoordinatesComponent, _lib_styles_style_component__WEBPACK_IMPORTED_MODULE_34__.StyleComponent, _lib_styles_circle_component__WEBPACK_IMPORTED_MODULE_35__.StyleCircleComponent, _lib_styles_fill_component__WEBPACK_IMPORTED_MODULE_38__.StyleFillComponent, _lib_styles_icon_component__WEBPACK_IMPORTED_MODULE_37__.StyleIconComponent, _lib_styles_stroke_component__WEBPACK_IMPORTED_MODULE_36__.StyleStrokeComponent, _lib_styles_text_component__WEBPACK_IMPORTED_MODULE_39__.StyleTextComponent, _lib_controls_default_component__WEBPACK_IMPORTED_MODULE_40__.DefaultControlComponent, _lib_controls_control_component__WEBPACK_IMPORTED_MODULE_41__.ControlComponent, _lib_controls_attribution_component__WEBPACK_IMPORTED_MODULE_42__.ControlAttributionComponent, _lib_controls_fullscreen_component__WEBPACK_IMPORTED_MODULE_43__.ControlFullScreenComponent, _lib_controls_mouseposition_component__WEBPACK_IMPORTED_MODULE_44__.ControlMousePositionComponent, _lib_controls_overviewmap_component__WEBPACK_IMPORTED_MODULE_45__.ControlOverviewMapComponent, _lib_controls_rotate_component__WEBPACK_IMPORTED_MODULE_46__.ControlRotateComponent, _lib_controls_scaleline_component__WEBPACK_IMPORTED_MODULE_47__.ControlScaleLineComponent, _lib_controls_zoom_component__WEBPACK_IMPORTED_MODULE_48__.ControlZoomComponent, _lib_controls_zoomslider_component__WEBPACK_IMPORTED_MODULE_49__.ControlZoomSliderComponent, _lib_controls_zoomtoextent_component__WEBPACK_IMPORTED_MODULE_50__.ControlZoomToExtentComponent, _lib_formats_mvt_component__WEBPACK_IMPORTED_MODULE_51__.FormatMVTComponent, _lib_tilegrid_component__WEBPACK_IMPORTED_MODULE_52__.TileGridComponent, _lib_tilegridwmts_component__WEBPACK_IMPORTED_MODULE_53__.TileGridWMTSComponent, _lib_interactions_default_component__WEBPACK_IMPORTED_MODULE_54__.DefaultInteractionComponent, _lib_interactions_doubleclickzoom_component__WEBPACK_IMPORTED_MODULE_55__.DoubleClickZoomInteractionComponent, _lib_interactions_draganddrop_component__WEBPACK_IMPORTED_MODULE_56__.DragAndDropInteractionComponent, _lib_interactions_dragbox_component__WEBPACK_IMPORTED_MODULE_57__.DragBoxInteractionComponent, _lib_interactions_dragpan_component__WEBPACK_IMPORTED_MODULE_58__.DragPanInteractionComponent, _lib_interactions_dragrotate_component__WEBPACK_IMPORTED_MODULE_59__.DragRotateInteractionComponent, _lib_interactions_dragrotateandzoom_component__WEBPACK_IMPORTED_MODULE_60__.DragRotateAndZoomInteractionComponent, _lib_interactions_dragzoom_component__WEBPACK_IMPORTED_MODULE_61__.DragZoomInteractionComponent, _lib_interactions_mousewheelzoom_component__WEBPACK_IMPORTED_MODULE_62__.MouseWheelZoomInteractionComponent, _lib_interactions_pinchzoom_component__WEBPACK_IMPORTED_MODULE_63__.PinchZoomInteractionComponent, _lib_interactions_draw_component__WEBPACK_IMPORTED_MODULE_64__.DrawInteractionComponent, _lib_interactions_select_component__WEBPACK_IMPORTED_MODULE_67__.SelectInteractionComponent, _lib_interactions_modify_component__WEBPACK_IMPORTED_MODULE_68__.ModifyInteractionComponent, _lib_interactions_translate_component__WEBPACK_IMPORTED_MODULE_69__.TranslateInteractionComponent, _lib_overlay_component__WEBPACK_IMPORTED_MODULE_70__.OverlayComponent, _lib_content_component__WEBPACK_IMPORTED_MODULE_71__.ContentComponent, _lib_attributions_component__WEBPACK_IMPORTED_MODULE_72__.AttributionsComponent, _lib_attribution_component__WEBPACK_IMPORTED_MODULE_73__.AttributionComponent];
class AngularOpenlayersModule {
  static #_ = this.ɵfac = function AngularOpenlayersModule_Factory(t) {
    return new (t || AngularOpenlayersModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_76__["ɵɵdefineNgModule"]({
    type: AngularOpenlayersModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_76__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_77__.CommonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_76__["ɵɵsetNgModuleScope"](AngularOpenlayersModule, {
    declarations: [_lib_map_component__WEBPACK_IMPORTED_MODULE_7__.MapComponent, _lib_view_component__WEBPACK_IMPORTED_MODULE_2__.ViewComponent, _lib_graticule_component__WEBPACK_IMPORTED_MODULE_3__.GraticuleComponent, _lib_layers_layergroup_component__WEBPACK_IMPORTED_MODULE_4__.LayerGroupComponent, _lib_layers_layerimage_component__WEBPACK_IMPORTED_MODULE_5__.LayerImageComponent, _lib_layers_layertile_component__WEBPACK_IMPORTED_MODULE_6__.LayerTileComponent, _lib_layers_layervector_component__WEBPACK_IMPORTED_MODULE_8__.LayerVectorComponent, _lib_layers_layervectortile_component__WEBPACK_IMPORTED_MODULE_9__.LayerVectorTileComponent, _lib_sources_osm_component__WEBPACK_IMPORTED_MODULE_10__.SourceOsmComponent, _lib_sources_bingmaps_component__WEBPACK_IMPORTED_MODULE_11__.SourceBingmapsComponent, _lib_sources_cluster_component__WEBPACK_IMPORTED_MODULE_12__.SourceClusterComponent, _lib_sources_utfgrid_component__WEBPACK_IMPORTED_MODULE_74__.SourceUTFGridComponent, _lib_sources_vector_component__WEBPACK_IMPORTED_MODULE_13__.SourceVectorComponent, _lib_sources_xyz_component__WEBPACK_IMPORTED_MODULE_14__.SourceXYZComponent, _lib_sources_vectortile_component__WEBPACK_IMPORTED_MODULE_16__.SourceVectorTileComponent, _lib_sources_tilewms_component__WEBPACK_IMPORTED_MODULE_17__.SourceTileWMSComponent, _lib_sources_tilewmts_component__WEBPACK_IMPORTED_MODULE_15__.SourceTileWMTSComponent, _lib_sources_tilejson_component__WEBPACK_IMPORTED_MODULE_18__.SourceTileJSONComponent, _lib_sources_geojson_component__WEBPACK_IMPORTED_MODULE_19__.SourceGeoJSONComponent, _lib_sources_imagestatic_component__WEBPACK_IMPORTED_MODULE_20__.SourceImageStaticComponent, _lib_sources_imagewms_component__WEBPACK_IMPORTED_MODULE_21__.SourceImageWMSComponent, _lib_sources_imagearcgisrest_component__WEBPACK_IMPORTED_MODULE_22__.SourceImageArcGISRestComponent, _lib_sources_raster_component__WEBPACK_IMPORTED_MODULE_23__.SourceRasterComponent, _lib_feature_component__WEBPACK_IMPORTED_MODULE_24__.FeatureComponent, _lib_geom_geometrylinestring_component__WEBPACK_IMPORTED_MODULE_26__.GeometryLinestringComponent, _lib_geom_geometrymultilinestring_component__WEBPACK_IMPORTED_MODULE_27__.GeometryMultiLinestringComponent, _lib_geom_geometrymultipoint_component__WEBPACK_IMPORTED_MODULE_28__.GeometryMultiPointComponent, _lib_geom_geometrymultipolygon_component__WEBPACK_IMPORTED_MODULE_29__.GeometryMultiPolygonComponent, _lib_geom_geometrypoint_component__WEBPACK_IMPORTED_MODULE_30__.GeometryPointComponent, _lib_geom_geometrypolygon_component__WEBPACK_IMPORTED_MODULE_31__.GeometryPolygonComponent, _lib_geom_geometrycircle_component__WEBPACK_IMPORTED_MODULE_25__.GeometryCircleComponent, _lib_coordinate_component__WEBPACK_IMPORTED_MODULE_32__.CoordinateComponent, _lib_collectioncoordinates_component__WEBPACK_IMPORTED_MODULE_33__.CollectionCoordinatesComponent, _lib_styles_style_component__WEBPACK_IMPORTED_MODULE_34__.StyleComponent, _lib_styles_circle_component__WEBPACK_IMPORTED_MODULE_35__.StyleCircleComponent, _lib_styles_fill_component__WEBPACK_IMPORTED_MODULE_38__.StyleFillComponent, _lib_styles_icon_component__WEBPACK_IMPORTED_MODULE_37__.StyleIconComponent, _lib_styles_stroke_component__WEBPACK_IMPORTED_MODULE_36__.StyleStrokeComponent, _lib_styles_text_component__WEBPACK_IMPORTED_MODULE_39__.StyleTextComponent, _lib_controls_default_component__WEBPACK_IMPORTED_MODULE_40__.DefaultControlComponent, _lib_controls_control_component__WEBPACK_IMPORTED_MODULE_41__.ControlComponent, _lib_controls_attribution_component__WEBPACK_IMPORTED_MODULE_42__.ControlAttributionComponent, _lib_controls_fullscreen_component__WEBPACK_IMPORTED_MODULE_43__.ControlFullScreenComponent, _lib_controls_mouseposition_component__WEBPACK_IMPORTED_MODULE_44__.ControlMousePositionComponent, _lib_controls_overviewmap_component__WEBPACK_IMPORTED_MODULE_45__.ControlOverviewMapComponent, _lib_controls_rotate_component__WEBPACK_IMPORTED_MODULE_46__.ControlRotateComponent, _lib_controls_scaleline_component__WEBPACK_IMPORTED_MODULE_47__.ControlScaleLineComponent, _lib_controls_zoom_component__WEBPACK_IMPORTED_MODULE_48__.ControlZoomComponent, _lib_controls_zoomslider_component__WEBPACK_IMPORTED_MODULE_49__.ControlZoomSliderComponent, _lib_controls_zoomtoextent_component__WEBPACK_IMPORTED_MODULE_50__.ControlZoomToExtentComponent, _lib_formats_mvt_component__WEBPACK_IMPORTED_MODULE_51__.FormatMVTComponent, _lib_tilegrid_component__WEBPACK_IMPORTED_MODULE_52__.TileGridComponent, _lib_tilegridwmts_component__WEBPACK_IMPORTED_MODULE_53__.TileGridWMTSComponent, _lib_interactions_default_component__WEBPACK_IMPORTED_MODULE_54__.DefaultInteractionComponent, _lib_interactions_doubleclickzoom_component__WEBPACK_IMPORTED_MODULE_55__.DoubleClickZoomInteractionComponent, _lib_interactions_draganddrop_component__WEBPACK_IMPORTED_MODULE_56__.DragAndDropInteractionComponent, _lib_interactions_dragbox_component__WEBPACK_IMPORTED_MODULE_57__.DragBoxInteractionComponent, _lib_interactions_dragpan_component__WEBPACK_IMPORTED_MODULE_58__.DragPanInteractionComponent, _lib_interactions_dragrotate_component__WEBPACK_IMPORTED_MODULE_59__.DragRotateInteractionComponent, _lib_interactions_dragrotateandzoom_component__WEBPACK_IMPORTED_MODULE_60__.DragRotateAndZoomInteractionComponent, _lib_interactions_dragzoom_component__WEBPACK_IMPORTED_MODULE_61__.DragZoomInteractionComponent, _lib_interactions_mousewheelzoom_component__WEBPACK_IMPORTED_MODULE_62__.MouseWheelZoomInteractionComponent, _lib_interactions_pinchzoom_component__WEBPACK_IMPORTED_MODULE_63__.PinchZoomInteractionComponent, _lib_interactions_draw_component__WEBPACK_IMPORTED_MODULE_64__.DrawInteractionComponent, _lib_interactions_select_component__WEBPACK_IMPORTED_MODULE_67__.SelectInteractionComponent, _lib_interactions_modify_component__WEBPACK_IMPORTED_MODULE_68__.ModifyInteractionComponent, _lib_interactions_translate_component__WEBPACK_IMPORTED_MODULE_69__.TranslateInteractionComponent, _lib_overlay_component__WEBPACK_IMPORTED_MODULE_70__.OverlayComponent, _lib_content_component__WEBPACK_IMPORTED_MODULE_71__.ContentComponent, _lib_attributions_component__WEBPACK_IMPORTED_MODULE_72__.AttributionsComponent, _lib_attribution_component__WEBPACK_IMPORTED_MODULE_73__.AttributionComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_77__.CommonModule],
    exports: [_lib_map_component__WEBPACK_IMPORTED_MODULE_7__.MapComponent, _lib_view_component__WEBPACK_IMPORTED_MODULE_2__.ViewComponent, _lib_graticule_component__WEBPACK_IMPORTED_MODULE_3__.GraticuleComponent, _lib_layers_layergroup_component__WEBPACK_IMPORTED_MODULE_4__.LayerGroupComponent, _lib_layers_layerimage_component__WEBPACK_IMPORTED_MODULE_5__.LayerImageComponent, _lib_layers_layertile_component__WEBPACK_IMPORTED_MODULE_6__.LayerTileComponent, _lib_layers_layervector_component__WEBPACK_IMPORTED_MODULE_8__.LayerVectorComponent, _lib_layers_layervectortile_component__WEBPACK_IMPORTED_MODULE_9__.LayerVectorTileComponent, _lib_sources_osm_component__WEBPACK_IMPORTED_MODULE_10__.SourceOsmComponent, _lib_sources_bingmaps_component__WEBPACK_IMPORTED_MODULE_11__.SourceBingmapsComponent, _lib_sources_cluster_component__WEBPACK_IMPORTED_MODULE_12__.SourceClusterComponent, _lib_sources_utfgrid_component__WEBPACK_IMPORTED_MODULE_74__.SourceUTFGridComponent, _lib_sources_vector_component__WEBPACK_IMPORTED_MODULE_13__.SourceVectorComponent, _lib_sources_xyz_component__WEBPACK_IMPORTED_MODULE_14__.SourceXYZComponent, _lib_sources_vectortile_component__WEBPACK_IMPORTED_MODULE_16__.SourceVectorTileComponent, _lib_sources_tilewms_component__WEBPACK_IMPORTED_MODULE_17__.SourceTileWMSComponent, _lib_sources_tilewmts_component__WEBPACK_IMPORTED_MODULE_15__.SourceTileWMTSComponent, _lib_sources_tilejson_component__WEBPACK_IMPORTED_MODULE_18__.SourceTileJSONComponent, _lib_sources_geojson_component__WEBPACK_IMPORTED_MODULE_19__.SourceGeoJSONComponent, _lib_sources_imagestatic_component__WEBPACK_IMPORTED_MODULE_20__.SourceImageStaticComponent, _lib_sources_imagewms_component__WEBPACK_IMPORTED_MODULE_21__.SourceImageWMSComponent, _lib_sources_imagearcgisrest_component__WEBPACK_IMPORTED_MODULE_22__.SourceImageArcGISRestComponent, _lib_sources_raster_component__WEBPACK_IMPORTED_MODULE_23__.SourceRasterComponent, _lib_feature_component__WEBPACK_IMPORTED_MODULE_24__.FeatureComponent, _lib_geom_geometrylinestring_component__WEBPACK_IMPORTED_MODULE_26__.GeometryLinestringComponent, _lib_geom_geometrymultilinestring_component__WEBPACK_IMPORTED_MODULE_27__.GeometryMultiLinestringComponent, _lib_geom_geometrymultipoint_component__WEBPACK_IMPORTED_MODULE_28__.GeometryMultiPointComponent, _lib_geom_geometrymultipolygon_component__WEBPACK_IMPORTED_MODULE_29__.GeometryMultiPolygonComponent, _lib_geom_geometrypoint_component__WEBPACK_IMPORTED_MODULE_30__.GeometryPointComponent, _lib_geom_geometrypolygon_component__WEBPACK_IMPORTED_MODULE_31__.GeometryPolygonComponent, _lib_geom_geometrycircle_component__WEBPACK_IMPORTED_MODULE_25__.GeometryCircleComponent, _lib_coordinate_component__WEBPACK_IMPORTED_MODULE_32__.CoordinateComponent, _lib_collectioncoordinates_component__WEBPACK_IMPORTED_MODULE_33__.CollectionCoordinatesComponent, _lib_styles_style_component__WEBPACK_IMPORTED_MODULE_34__.StyleComponent, _lib_styles_circle_component__WEBPACK_IMPORTED_MODULE_35__.StyleCircleComponent, _lib_styles_fill_component__WEBPACK_IMPORTED_MODULE_38__.StyleFillComponent, _lib_styles_icon_component__WEBPACK_IMPORTED_MODULE_37__.StyleIconComponent, _lib_styles_stroke_component__WEBPACK_IMPORTED_MODULE_36__.StyleStrokeComponent, _lib_styles_text_component__WEBPACK_IMPORTED_MODULE_39__.StyleTextComponent, _lib_controls_default_component__WEBPACK_IMPORTED_MODULE_40__.DefaultControlComponent, _lib_controls_control_component__WEBPACK_IMPORTED_MODULE_41__.ControlComponent, _lib_controls_attribution_component__WEBPACK_IMPORTED_MODULE_42__.ControlAttributionComponent, _lib_controls_fullscreen_component__WEBPACK_IMPORTED_MODULE_43__.ControlFullScreenComponent, _lib_controls_mouseposition_component__WEBPACK_IMPORTED_MODULE_44__.ControlMousePositionComponent, _lib_controls_overviewmap_component__WEBPACK_IMPORTED_MODULE_45__.ControlOverviewMapComponent, _lib_controls_rotate_component__WEBPACK_IMPORTED_MODULE_46__.ControlRotateComponent, _lib_controls_scaleline_component__WEBPACK_IMPORTED_MODULE_47__.ControlScaleLineComponent, _lib_controls_zoom_component__WEBPACK_IMPORTED_MODULE_48__.ControlZoomComponent, _lib_controls_zoomslider_component__WEBPACK_IMPORTED_MODULE_49__.ControlZoomSliderComponent, _lib_controls_zoomtoextent_component__WEBPACK_IMPORTED_MODULE_50__.ControlZoomToExtentComponent, _lib_formats_mvt_component__WEBPACK_IMPORTED_MODULE_51__.FormatMVTComponent, _lib_tilegrid_component__WEBPACK_IMPORTED_MODULE_52__.TileGridComponent, _lib_tilegridwmts_component__WEBPACK_IMPORTED_MODULE_53__.TileGridWMTSComponent, _lib_interactions_default_component__WEBPACK_IMPORTED_MODULE_54__.DefaultInteractionComponent, _lib_interactions_doubleclickzoom_component__WEBPACK_IMPORTED_MODULE_55__.DoubleClickZoomInteractionComponent, _lib_interactions_draganddrop_component__WEBPACK_IMPORTED_MODULE_56__.DragAndDropInteractionComponent, _lib_interactions_dragbox_component__WEBPACK_IMPORTED_MODULE_57__.DragBoxInteractionComponent, _lib_interactions_dragpan_component__WEBPACK_IMPORTED_MODULE_58__.DragPanInteractionComponent, _lib_interactions_dragrotate_component__WEBPACK_IMPORTED_MODULE_59__.DragRotateInteractionComponent, _lib_interactions_dragrotateandzoom_component__WEBPACK_IMPORTED_MODULE_60__.DragRotateAndZoomInteractionComponent, _lib_interactions_dragzoom_component__WEBPACK_IMPORTED_MODULE_61__.DragZoomInteractionComponent, _lib_interactions_mousewheelzoom_component__WEBPACK_IMPORTED_MODULE_62__.MouseWheelZoomInteractionComponent, _lib_interactions_pinchzoom_component__WEBPACK_IMPORTED_MODULE_63__.PinchZoomInteractionComponent, _lib_interactions_draw_component__WEBPACK_IMPORTED_MODULE_64__.DrawInteractionComponent, _lib_interactions_select_component__WEBPACK_IMPORTED_MODULE_67__.SelectInteractionComponent, _lib_interactions_modify_component__WEBPACK_IMPORTED_MODULE_68__.ModifyInteractionComponent, _lib_interactions_translate_component__WEBPACK_IMPORTED_MODULE_69__.TranslateInteractionComponent, _lib_overlay_component__WEBPACK_IMPORTED_MODULE_70__.OverlayComponent, _lib_content_component__WEBPACK_IMPORTED_MODULE_71__.ContentComponent, _lib_attributions_component__WEBPACK_IMPORTED_MODULE_72__.AttributionsComponent, _lib_attribution_component__WEBPACK_IMPORTED_MODULE_73__.AttributionComponent]
  });
})();

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(873)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map