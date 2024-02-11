import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, Directive, SkipSelf, Optional, forwardRef, Host, ContentChild, ContentChildren, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Map, Feature, Graticule } from 'ol';
import { Vector as Vector$1, XYZ, OSM, BingMaps, Cluster, WMTS as WMTS$1, VectorTile as VectorTile$1, TileWMS, TileJSON, ImageStatic, ImageWMS, Raster, UTFGrid } from 'ol/source';
import { Group, Vector, Image, Tile, VectorTile } from 'ol/layer';
import View from 'ol/View';
import { createXYZ } from 'ol/tilegrid';
import TileGrid from 'ol/tilegrid/TileGrid';
import WMTS from 'ol/tilegrid/WMTS';
import { GeoJSON, MVT } from 'ol/format';
import ImageArcGISRest from 'ol/source/ImageArcGISRest';
import { Circle, LineString, MultiLineString, MultiPoint, MultiPolygon, Point, Polygon } from 'ol/geom';
import { transform } from 'ol/proj';
import Overlay from 'ol/Overlay';
import { Style, Circle as Circle$1, Text, Stroke, Icon, Fill } from 'ol/style';
import { defaults, Control, Attribution, FullScreen, OverviewMap, Rotate, ScaleLine, Zoom, ZoomSlider, ZoomToExtent } from 'ol/control';
import MousePosition from 'ol/control/MousePosition';
import { defaults as defaults$1, DoubleClickZoom, DragAndDrop, DragBox, DragPan, DragRotate, DragRotateAndZoom, DragZoom, MouseWheelZoom, PinchZoom, Draw, KeyboardPan, KeyboardZoom, Select, Modify, Translate } from 'ol/interaction';

const _c0$G = ["*"];
class MapComponent {
    constructor(host) {
        this.host = host;
        this.width = '100%';
        this.height = '100%';
        this.olChange = new EventEmitter();
        this.olChangeLayerGroup = new EventEmitter();
        this.olChangeSize = new EventEmitter();
        this.olChangeTarget = new EventEmitter();
        this.olChangeView = new EventEmitter();
        this.olClick = new EventEmitter();
        this.dblClick = new EventEmitter();
        this.olError = new EventEmitter();
        this.loadEnd = new EventEmitter();
        this.loadStart = new EventEmitter();
        this.moveEnd = new EventEmitter();
        this.moveStart = new EventEmitter();
        this.pointerDrag = new EventEmitter();
        this.pointerMove = new EventEmitter();
        this.olPostCompose = new EventEmitter();
        this.olPostRender = new EventEmitter();
        this.olPreCompose = new EventEmitter();
        this.olPropertyChange = new EventEmitter();
        this.postRender = new EventEmitter();
        this.propertyChange = new EventEmitter();
        this.singleClick = new EventEmitter();
        this.componentType = 'map';
        // we pass empty arrays to not get default controls/interactions because we have our own directives
        this.controls = [];
        this.interactions = [];
    }
    ngOnInit() {
        // console.log('creating ol.Map instance with:', this);
        this.instance = new Map(this);
        this.instance.setTarget(this.host.nativeElement.firstElementChild);
        this.instance.on('change', (event) => this.olChange.emit(event));
        this.instance.on('change:layergroup', (event) => this.olChangeLayerGroup.emit(event));
        this.instance.on('change:size', (event) => this.olChangeSize.emit(event));
        this.instance.on('change:target', (event) => this.olChangeTarget.emit(event));
        this.instance.on('change:view', (event) => this.olChangeView.emit(event));
        this.instance.on('click', (event) => this.olClick.emit(event));
        this.instance.on('dblclick', (event) => this.dblClick.emit(event));
        this.instance.on('error', (event) => this.olError.emit(event));
        this.instance.on('loadend', (event) => this.loadEnd.emit(event));
        this.instance.on('loadstart', (event) => this.loadStart.emit(event));
        this.instance.on('moveend', (event) => this.moveEnd.emit(event));
        this.instance.on('movestart', (event) => this.moveStart.emit(event));
        this.instance.on('pointerdrag', (event) => this.pointerDrag.emit(event));
        this.instance.on('pointermove', (event) => this.pointerMove.emit(event));
        this.instance.on('postcompose', (event) => this.olPostCompose.emit(event));
        this.instance.on('postrender', (event) => this.olPostRender.emit(event));
        this.instance.on('postrender', (event) => this.postRender.emit(event));
        this.instance.on('precompose', (event) => this.olPreCompose.emit(event));
        this.instance.on('propertychange', (event) => this.olPropertyChange.emit(event));
        this.instance.on('singleclick', (event) => this.singleClick.emit(event));
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
    static { this.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MapComponent, selectors: [["aol-map"]], inputs: { width: "width", height: "height", pixelRatio: "pixelRatio", keyboardEventTarget: "keyboardEventTarget", loadTilesWhileAnimating: "loadTilesWhileAnimating", loadTilesWhileInteracting: "loadTilesWhileInteracting", logo: "logo", renderer: "renderer" }, outputs: { olChange: "olChange", olChangeLayerGroup: "olChangeLayerGroup", olChangeSize: "olChangeSize", olChangeTarget: "olChangeTarget", olChangeView: "olChangeView", olClick: "olClick", dblClick: "dblClick", olError: "olError", loadEnd: "loadEnd", loadStart: "loadStart", moveEnd: "moveEnd", moveStart: "moveStart", pointerDrag: "pointerDrag", pointerMove: "pointerMove", olPostCompose: "olPostCompose", olPostRender: "olPostRender", olPreCompose: "olPreCompose", olPropertyChange: "olPropertyChange", postRender: "postRender", propertyChange: "propertyChange", singleClick: "singleClick" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0$G, decls: 2, vars: 4, template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelement(0, "div");
            i0.ɵɵprojection(1);
        } if (rf & 2) {
            i0.ɵɵstyleProp("width", ctx.width)("height", ctx.height);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MapComponent, [{
        type: Component,
        args: [{
                selector: 'aol-map',
                template: `
    <div [style.width]="width" [style.height]="height"></div>
    <ng-content></ng-content>
  `,
            }]
    }], () => [{ type: i0.ElementRef }], { width: [{
            type: Input
        }], height: [{
            type: Input
        }], pixelRatio: [{
            type: Input
        }], keyboardEventTarget: [{
            type: Input
        }], loadTilesWhileAnimating: [{
            type: Input
        }], loadTilesWhileInteracting: [{
            type: Input
        }], logo: [{
            type: Input
        }], renderer: [{
            type: Input
        }], olChange: [{
            type: Output
        }], olChangeLayerGroup: [{
            type: Output
        }], olChangeSize: [{
            type: Output
        }], olChangeTarget: [{
            type: Output
        }], olChangeView: [{
            type: Output
        }], olClick: [{
            type: Output
        }], dblClick: [{
            type: Output
        }], olError: [{
            type: Output
        }], loadEnd: [{
            type: Output
        }], loadStart: [{
            type: Output
        }], moveEnd: [{
            type: Output
        }], moveStart: [{
            type: Output
        }], pointerDrag: [{
            type: Output
        }], pointerMove: [{
            type: Output
        }], olPostCompose: [{
            type: Output
        }], olPostRender: [{
            type: Output
        }], olPreCompose: [{
            type: Output
        }], olPropertyChange: [{
            type: Output
        }], postRender: [{
            type: Output
        }], propertyChange: [{
            type: Output
        }], singleClick: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MapComponent, { className: "MapComponent", filePath: "lib/map.component.ts", lineNumber: 29 }); })();

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
    static { this.ɵfac = function LayerComponent_Factory(t) { i0.ɵɵinvalidFactory(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: LayerComponent, inputs: { opacity: "opacity", visible: "visible", extent: "extent", zIndex: "zIndex", minResolution: "minResolution", maxResolution: "maxResolution", prerender: "prerender", postrender: "postrender" }, features: [i0.ɵɵNgOnChangesFeature] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LayerComponent, [{
        type: Directive
    }], () => [{ type: undefined }], { opacity: [{
            type: Input
        }], visible: [{
            type: Input
        }], extent: [{
            type: Input
        }], zIndex: [{
            type: Input
        }], minResolution: [{
            type: Input
        }], maxResolution: [{
            type: Input
        }], prerender: [{
            type: Input
        }], postrender: [{
            type: Input
        }] }); })();

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
    static { this.ɵfac = function SourceComponent_Factory(t) { return new (t || SourceComponent)(i0.ɵɵdirectiveInject(LayerComponent)); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: SourceComponent, inputs: { attributions: "attributions" } }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SourceComponent, [{
        type: Directive
    }], () => [{ type: LayerComponent }], { attributions: [{
            type: Input
        }] }); })();

const _c0$F = ["*"];
class LayerGroupComponent extends LayerComponent {
    constructor(map, group) {
        super(group || map);
    }
    ngOnInit() {
        // console.log(`creating ol.layer.Group instance with:`, this);
        this.instance = new Group(this);
        super.ngOnInit();
    }
    static { this.ɵfac = function LayerGroupComponent_Factory(t) { return new (t || LayerGroupComponent)(i0.ɵɵdirectiveInject(MapComponent), i0.ɵɵdirectiveInject(LayerGroupComponent, 12)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LayerGroupComponent, selectors: [["aol-layer-group"]], features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$F, decls: 1, vars: 0, template: function LayerGroupComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LayerGroupComponent, [{
        type: Component,
        args: [{
                selector: 'aol-layer-group',
                template: ` <ng-content></ng-content> `,
            }]
    }], () => [{ type: MapComponent }, { type: LayerGroupComponent, decorators: [{
                type: SkipSelf
            }, {
                type: Optional
            }] }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LayerGroupComponent, { className: "LayerGroupComponent", filePath: "lib/layers/layergroup.component.ts", lineNumber: 10 }); })();

const _c0$E = ["*"];
class LayerVectorComponent extends LayerComponent {
    constructor(map, group) {
        super(group || map);
    }
    ngOnInit() {
        // console.log('creating ol.layer.Vector instance with:', this);
        this.instance = new Vector(this);
        super.ngOnInit();
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
    }
    static { this.ɵfac = function LayerVectorComponent_Factory(t) { return new (t || LayerVectorComponent)(i0.ɵɵdirectiveInject(MapComponent), i0.ɵɵdirectiveInject(LayerGroupComponent, 8)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LayerVectorComponent, selectors: [["aol-layer-vector"]], inputs: { renderBuffer: "renderBuffer", style: "style", updateWhileAnimating: "updateWhileAnimating", updateWhileInteracting: "updateWhileInteracting" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0$E, decls: 1, vars: 0, template: function LayerVectorComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LayerVectorComponent, [{
        type: Component,
        args: [{
                selector: 'aol-layer-vector',
                template: ` <ng-content></ng-content> `,
            }]
    }], () => [{ type: MapComponent }, { type: LayerGroupComponent, decorators: [{
                type: Optional
            }] }], { renderBuffer: [{
            type: Input
        }], style: [{
            type: Input
        }], updateWhileAnimating: [{
            type: Input
        }], updateWhileInteracting: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LayerVectorComponent, { className: "LayerVectorComponent", filePath: "lib/layers/layervector.component.ts", lineNumber: 13 }); })();

const _c0$D = ["*"];
class SourceVectorComponent extends SourceComponent {
    constructor(layer) {
        super(layer);
    }
    ngOnInit() {
        this.instance = new Vector$1(this);
        this.host.instance.setSource(this.instance);
    }
    static { this.ɵfac = function SourceVectorComponent_Factory(t) { return new (t || SourceVectorComponent)(i0.ɵɵdirectiveInject(LayerVectorComponent, 1)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SourceVectorComponent, selectors: [["aol-source-vector"]], inputs: { overlaps: "overlaps", useSpatialIndex: "useSpatialIndex", wrapX: "wrapX", url: "url", format: "format", strategy: "strategy" }, features: [i0.ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(() => SourceVectorComponent) }]), i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$D, decls: 1, vars: 0, template: function SourceVectorComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SourceVectorComponent, [{
        type: Component,
        args: [{
                selector: 'aol-source-vector',
                template: ` <ng-content></ng-content> `,
                providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceVectorComponent) }],
            }]
    }], () => [{ type: LayerVectorComponent, decorators: [{
                type: Host
            }] }], { overlaps: [{
            type: Input
        }], useSpatialIndex: [{
            type: Input
        }], wrapX: [{
            type: Input
        }], url: [{
            type: Input
        }], format: [{
            type: Input
        }], strategy: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SourceVectorComponent, { className: "SourceVectorComponent", filePath: "lib/sources/vector.component.ts", lineNumber: 13 }); })();

const _c0$C = ["*"];
class FeatureComponent {
    constructor(host) {
        this.host = host;
        this.componentType = 'feature';
    }
    ngOnInit() {
        this.instance = new Feature();
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
    static { this.ɵfac = function FeatureComponent_Factory(t) { return new (t || FeatureComponent)(i0.ɵɵdirectiveInject(SourceVectorComponent)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FeatureComponent, selectors: [["aol-feature"]], inputs: { id: "id" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0$C, decls: 1, vars: 0, template: function FeatureComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FeatureComponent, [{
        type: Component,
        args: [{
                selector: 'aol-feature',
                template: ` <ng-content></ng-content> `,
            }]
    }], () => [{ type: SourceVectorComponent }], { id: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FeatureComponent, { className: "FeatureComponent", filePath: "lib/feature.component.ts", lineNumber: 9 }); })();

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
    static { this.ɵfac = function SimpleGeometryComponent_Factory(t) { return new (t || SimpleGeometryComponent)(i0.ɵɵdirectiveInject(MapComponent), i0.ɵɵdirectiveInject(FeatureComponent)); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: SimpleGeometryComponent, inputs: { srid: "srid" } }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SimpleGeometryComponent, [{
        type: Directive
    }], () => [{ type: MapComponent }, { type: FeatureComponent }], { srid: [{
            type: Input
        }] }); })();

const _c0$B = ["*"];
class ViewComponent {
    constructor(host) {
        this.host = host;
        this.zoomAnimation = false;
        this.olChange = new EventEmitter();
        this.changeCenter = new EventEmitter();
        this.changeResolution = new EventEmitter();
        this.changeRotation = new EventEmitter();
        this.olError = new EventEmitter();
        this.propertyChange = new EventEmitter();
        this.componentType = 'view';
    }
    ngOnInit() {
        // console.log('creating ol.View instance with: ', this);
        this.instance = new View(this);
        this.host.instance.setView(this.instance);
        this.instance.on('change', (event) => this.olChange.emit(event));
        this.instance.on('change:center', (event) => this.changeCenter.emit(event));
        this.instance.on('change:resolution', (event) => this.changeResolution.emit(event));
        this.instance.on('change:rotation', (event) => this.changeRotation.emit(event));
        this.instance.on('error', (event) => this.olError.emit(event));
        this.instance.on('propertychange', (event) => this.propertyChange.emit(event));
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
                            this.instance.animate({ zoom: changes[key].currentValue });
                        }
                        else {
                            this.instance.setZoom(changes[key].currentValue);
                        }
                        break;
                    case 'projection':
                        this.instance = new View(this);
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
    static { this.ɵfac = function ViewComponent_Factory(t) { return new (t || ViewComponent)(i0.ɵɵdirectiveInject(MapComponent)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ViewComponent, selectors: [["aol-view"]], inputs: { constrainRotation: "constrainRotation", enableRotation: "enableRotation", extent: "extent", maxResolution: "maxResolution", minResolution: "minResolution", maxZoom: "maxZoom", minZoom: "minZoom", resolution: "resolution", resolutions: "resolutions", rotation: "rotation", zoom: "zoom", zoomFactor: "zoomFactor", center: "center", projection: "projection", constrainOnlyCenter: "constrainOnlyCenter", smoothExtentConstraint: "smoothExtentConstraint", constrainResolution: "constrainResolution", smoothResolutionConstraint: "smoothResolutionConstraint", showFullExtent: "showFullExtent", multiWorld: "multiWorld", zoomAnimation: "zoomAnimation" }, outputs: { olChange: "olChange", changeCenter: "changeCenter", changeResolution: "changeResolution", changeRotation: "changeRotation", olError: "olError", propertyChange: "propertyChange" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0$B, decls: 1, vars: 0, template: function ViewComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ViewComponent, [{
        type: Component,
        args: [{
                selector: 'aol-view',
                template: ` <ng-content></ng-content> `,
            }]
    }], () => [{ type: MapComponent }], { constrainRotation: [{
            type: Input
        }], enableRotation: [{
            type: Input
        }], extent: [{
            type: Input
        }], maxResolution: [{
            type: Input
        }], minResolution: [{
            type: Input
        }], maxZoom: [{
            type: Input
        }], minZoom: [{
            type: Input
        }], resolution: [{
            type: Input
        }], resolutions: [{
            type: Input
        }], rotation: [{
            type: Input
        }], zoom: [{
            type: Input
        }], zoomFactor: [{
            type: Input
        }], center: [{
            type: Input
        }], projection: [{
            type: Input
        }], constrainOnlyCenter: [{
            type: Input
        }], smoothExtentConstraint: [{
            type: Input
        }], constrainResolution: [{
            type: Input
        }], smoothResolutionConstraint: [{
            type: Input
        }], showFullExtent: [{
            type: Input
        }], multiWorld: [{
            type: Input
        }], zoomAnimation: [{
            type: Input
        }], olChange: [{
            type: Output
        }], changeCenter: [{
            type: Output
        }], changeResolution: [{
            type: Output
        }], changeRotation: [{
            type: Output
        }], olError: [{
            type: Output
        }], propertyChange: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ViewComponent, { className: "ViewComponent", filePath: "lib/view.component.ts", lineNumber: 14 }); })();

const _c0$A = ["*"];
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
            this.instance = new Graticule(properties);
        }
        this.instance.setMap(this.map.instance);
    }
    ngAfterContentInit() {
        this.instance = new Graticule({
            strokeStyle: this.strokeStyle,
            showLabels: this.showLabels,
            lonLabelPosition: this.lonLabelPosition,
            latLabelPosition: this.latLabelPosition,
        });
        this.instance.setMap(this.map.instance);
    }
    ngOnDestroy() {
        this.instance.setMap(null);
    }
    static { this.ɵfac = function GraticuleComponent_Factory(t) { return new (t || GraticuleComponent)(i0.ɵɵdirectiveInject(MapComponent)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GraticuleComponent, selectors: [["aol-graticule"]], inputs: { strokeStyle: "strokeStyle", showLabels: "showLabels", lonLabelPosition: "lonLabelPosition", latLabelPosition: "latLabelPosition" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0$A, decls: 1, vars: 0, template: function GraticuleComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GraticuleComponent, [{
        type: Component,
        args: [{
                selector: 'aol-graticule',
                template: '<ng-content></ng-content>',
            }]
    }], () => [{ type: MapComponent }], { strokeStyle: [{
            type: Input
        }], showLabels: [{
            type: Input
        }], lonLabelPosition: [{
            type: Input
        }], latLabelPosition: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(GraticuleComponent, { className: "GraticuleComponent", filePath: "lib/graticule.component.ts", lineNumber: 10 }); })();

const _c0$z = ["*"];
class LayerImageComponent extends LayerComponent {
    constructor(map, group) {
        super(group || map);
    }
    ngOnInit() {
        this.instance = new Image(this);
        super.ngOnInit();
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
    }
    static { this.ɵfac = function LayerImageComponent_Factory(t) { return new (t || LayerImageComponent)(i0.ɵɵdirectiveInject(MapComponent), i0.ɵɵdirectiveInject(LayerGroupComponent, 8)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LayerImageComponent, selectors: [["aol-layer-image"]], inputs: { opacity: "opacity", visible: "visible", extent: "extent", minResolution: "minResolution", maxResolution: "maxResolution", zIndex: "zIndex" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0$z, decls: 1, vars: 0, template: function LayerImageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LayerImageComponent, [{
        type: Component,
        args: [{
                selector: 'aol-layer-image',
                template: ` <ng-content></ng-content> `,
            }]
    }], () => [{ type: MapComponent }, { type: LayerGroupComponent, decorators: [{
                type: Optional
            }] }], { opacity: [{
            type: Input
        }], visible: [{
            type: Input
        }], extent: [{
            type: Input
        }], minResolution: [{
            type: Input
        }], maxResolution: [{
            type: Input
        }], zIndex: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LayerImageComponent, { className: "LayerImageComponent", filePath: "lib/layers/layerimage.component.ts", lineNumber: 12 }); })();

const _c0$y = ["*"];
class LayerTileComponent extends LayerComponent {
    constructor(map, group) {
        super(group || map);
    }
    ngOnInit() {
        // console.log('creating ol.layer.Tile instance with:', this);
        this.instance = new Tile(this);
        super.ngOnInit();
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
    }
    static { this.ɵfac = function LayerTileComponent_Factory(t) { return new (t || LayerTileComponent)(i0.ɵɵdirectiveInject(MapComponent), i0.ɵɵdirectiveInject(LayerGroupComponent, 8)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LayerTileComponent, selectors: [["aol-layer-tile"]], inputs: { preload: "preload", useInterimTilesOnError: "useInterimTilesOnError" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0$y, decls: 1, vars: 0, template: function LayerTileComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LayerTileComponent, [{
        type: Component,
        args: [{
                selector: 'aol-layer-tile',
                template: ` <ng-content></ng-content> `,
            }]
    }], () => [{ type: MapComponent }, { type: LayerGroupComponent, decorators: [{
                type: Optional
            }] }], { preload: [{
            type: Input
        }], useInterimTilesOnError: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LayerTileComponent, { className: "LayerTileComponent", filePath: "lib/layers/layertile.component.ts", lineNumber: 11 }); })();

const _c0$x = ["*"];
class LayerVectorTileComponent extends LayerComponent {
    constructor(map, group) {
        super(group || map);
    }
    ngOnInit() {
        // console.log('creating ol.layer.VectorTile instance with:', this);
        this.instance = new VectorTile(this);
        super.ngOnInit();
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
    }
    static { this.ɵfac = function LayerVectorTileComponent_Factory(t) { return new (t || LayerVectorTileComponent)(i0.ɵɵdirectiveInject(MapComponent), i0.ɵɵdirectiveInject(LayerGroupComponent, 8)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LayerVectorTileComponent, selectors: [["aol-layer-vectortile"]], inputs: { renderBuffer: "renderBuffer", renderMode: "renderMode", renderOrder: "renderOrder", style: "style", updateWhileAnimating: "updateWhileAnimating", updateWhileInteracting: "updateWhileInteracting", visible: "visible" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0$x, decls: 1, vars: 0, template: function LayerVectorTileComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LayerVectorTileComponent, [{
        type: Component,
        args: [{
                selector: 'aol-layer-vectortile',
                template: ` <ng-content></ng-content> `,
            }]
    }], () => [{ type: MapComponent }, { type: LayerGroupComponent, decorators: [{
                type: Optional
            }] }], { renderBuffer: [{
            type: Input
        }], renderMode: [{
            type: Input
        }], renderOrder: [{
            type: Input
        }], style: [{
            type: Input
        }], updateWhileAnimating: [{
            type: Input
        }], updateWhileInteracting: [{
            type: Input
        }], visible: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LayerVectorTileComponent, { className: "LayerVectorTileComponent", filePath: "lib/layers/layervectortile.component.ts", lineNumber: 14 }); })();

class TileGridComponent {
    ngOnInit() {
        if (!this.resolutions) {
            this.instance = createXYZ(this);
        }
        else {
            this.instance = new TileGrid(this);
        }
    }
    ngOnChanges(changes) {
        if (!this.resolutions) {
            this.instance = createXYZ(this);
        }
        else {
            this.instance = new TileGrid(this);
        }
    }
    static { this.ɵfac = function TileGridComponent_Factory(t) { return new (t || TileGridComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TileGridComponent, selectors: [["aol-tilegrid"]], inputs: { extent: "extent", maxZoom: "maxZoom", minZoom: "minZoom", tileSize: "tileSize", origin: "origin", resolutions: "resolutions" }, features: [i0.ɵɵNgOnChangesFeature], decls: 0, vars: 0, template: function TileGridComponent_Template(rf, ctx) { }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TileGridComponent, [{
        type: Component,
        args: [{
                selector: 'aol-tilegrid',
                template: '',
            }]
    }], null, { extent: [{
            type: Input
        }], maxZoom: [{
            type: Input
        }], minZoom: [{
            type: Input
        }], tileSize: [{
            type: Input
        }], origin: [{
            type: Input
        }], resolutions: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TileGridComponent, { className: "TileGridComponent", filePath: "lib/tilegrid.component.ts", lineNumber: 12 }); })();

const _c0$w = ["*"];
class SourceXYZComponent extends SourceComponent {
    constructor(layer) {
        super(layer);
        this.layer = layer;
        this.tileLoadStart = new EventEmitter();
        this.tileLoadEnd = new EventEmitter();
        this.tileLoadError = new EventEmitter();
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
        this.instance = new XYZ(this);
        this.instance.on('tileloadstart', (event) => this.tileLoadStart.emit(event));
        this.instance.on('tileloadend', (event) => this.tileLoadEnd.emit(event));
        this.instance.on('tileloaderror', (event) => this.tileLoadError.emit(event));
        this.register(this.instance);
    }
    static { this.ɵfac = function SourceXYZComponent_Factory(t) { return new (t || SourceXYZComponent)(i0.ɵɵdirectiveInject(LayerTileComponent, 9)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SourceXYZComponent, selectors: [["aol-source-xyz"]], contentQueries: function SourceXYZComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, TileGridComponent, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tileGridXYZ = _t.first);
        } }, inputs: { cacheSize: "cacheSize", crossOrigin: "crossOrigin", opaque: "opaque", projection: "projection", reprojectionErrorThreshold: "reprojectionErrorThreshold", minZoom: "minZoom", maxZoom: "maxZoom", tileGrid: "tileGrid", tileLoadFunction: "tileLoadFunction", tilePixelRatio: "tilePixelRatio", tileSize: "tileSize", tileUrlFunction: "tileUrlFunction", url: "url", urls: "urls", wrapX: "wrapX" }, outputs: { tileLoadStart: "tileLoadStart", tileLoadEnd: "tileLoadEnd", tileLoadError: "tileLoadError" }, features: [i0.ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(() => SourceXYZComponent) }]), i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0$w, decls: 1, vars: 0, template: function SourceXYZComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SourceXYZComponent, [{
        type: Component,
        args: [{
                selector: 'aol-source-xyz',
                template: ` <ng-content></ng-content> `,
                providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceXYZComponent) }],
            }]
    }], () => [{ type: LayerTileComponent, decorators: [{
                type: Optional
            }, {
                type: Host
            }] }], { cacheSize: [{
            type: Input
        }], crossOrigin: [{
            type: Input
        }], opaque: [{
            type: Input
        }], projection: [{
            type: Input
        }], reprojectionErrorThreshold: [{
            type: Input
        }], minZoom: [{
            type: Input
        }], maxZoom: [{
            type: Input
        }], tileGrid: [{
            type: Input
        }], tileLoadFunction: [{
            type: Input
        }], tilePixelRatio: [{
            type: Input
        }], tileSize: [{
            type: Input
        }], tileUrlFunction: [{
            type: Input
        }], url: [{
            type: Input
        }], urls: [{
            type: Input
        }], wrapX: [{
            type: Input
        }], tileGridXYZ: [{
            type: ContentChild,
            args: [TileGridComponent, { static: false }]
        }], tileLoadStart: [{
            type: Output
        }], tileLoadEnd: [{
            type: Output
        }], tileLoadError: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SourceXYZComponent, { className: "SourceXYZComponent", filePath: "lib/sources/xyz.component.ts", lineNumber: 29 }); })();

class SourceOsmComponent extends SourceXYZComponent {
    constructor(layer) {
        super(layer);
        this.layer = layer;
        this.tileLoadStart = new EventEmitter();
        this.tileLoadEnd = new EventEmitter();
        this.tileLoadError = new EventEmitter();
    }
    ngAfterContentInit() {
        if (this.tileGridXYZ) {
            this.tileGrid = this.tileGridXYZ.instance;
        }
        this.instance = new OSM(this);
        this.instance.on('tileloadstart', (event) => this.tileLoadStart.emit(event));
        this.instance.on('tileloadend', (event) => this.tileLoadEnd.emit(event));
        this.instance.on('tileloaderror', (event) => this.tileLoadError.emit(event));
        this.register(this.instance);
    }
    static { this.ɵfac = function SourceOsmComponent_Factory(t) { return new (t || SourceOsmComponent)(i0.ɵɵdirectiveInject(LayerTileComponent, 9)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SourceOsmComponent, selectors: [["aol-source-osm"]], inputs: { attributions: "attributions", cacheSize: "cacheSize", crossOrigin: "crossOrigin", maxZoom: "maxZoom", opaque: "opaque", reprojectionErrorThreshold: "reprojectionErrorThreshold", tileLoadFunction: "tileLoadFunction", url: "url", wrapX: "wrapX" }, outputs: { tileLoadStart: "tileLoadStart", tileLoadEnd: "tileLoadEnd", tileLoadError: "tileLoadError" }, features: [i0.ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(() => SourceOsmComponent) }]), i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 0, consts: [[1, "aol-source-osm"]], template: function SourceOsmComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "div", 0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SourceOsmComponent, [{
        type: Component,
        args: [{
                selector: 'aol-source-osm',
                template: ` <div class="aol-source-osm"></div> `,
                providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceOsmComponent) }],
            }]
    }], () => [{ type: LayerTileComponent, decorators: [{
                type: Optional
            }, {
                type: Host
            }] }], { attributions: [{
            type: Input
        }], cacheSize: [{
            type: Input
        }], crossOrigin: [{
            type: Input
        }], maxZoom: [{
            type: Input
        }], opaque: [{
            type: Input
        }], reprojectionErrorThreshold: [{
            type: Input
        }], tileLoadFunction: [{
            type: Input
        }], url: [{
            type: Input
        }], wrapX: [{
            type: Input
        }], tileLoadStart: [{
            type: Output
        }], tileLoadEnd: [{
            type: Output
        }], tileLoadError: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SourceOsmComponent, { className: "SourceOsmComponent", filePath: "lib/sources/osm.component.ts", lineNumber: 15 }); })();

class SourceBingmapsComponent extends SourceComponent {
    constructor(layer) {
        super(layer);
        this.imagerySet = 'Aerial';
    }
    ngOnInit() {
        this.instance = new BingMaps(this);
        this.host.instance.setSource(this.instance);
    }
    static { this.ɵfac = function SourceBingmapsComponent_Factory(t) { return new (t || SourceBingmapsComponent)(i0.ɵɵdirectiveInject(LayerTileComponent, 1)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SourceBingmapsComponent, selectors: [["aol-source-bingmaps"]], inputs: { cacheSize: "cacheSize", hidpi: "hidpi", culture: "culture", key: "key", imagerySet: "imagerySet", maxZoom: "maxZoom", reprojectionErrorThreshold: "reprojectionErrorThreshold", tileLoadFunction: "tileLoadFunction", wrapX: "wrapX" }, features: [i0.ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(() => SourceBingmapsComponent) }]), i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 0, consts: [[1, "aol-source-bingmaps"]], template: function SourceBingmapsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "div", 0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SourceBingmapsComponent, [{
        type: Component,
        args: [{
                selector: 'aol-source-bingmaps',
                template: ` <div class="aol-source-bingmaps"></div> `,
                providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceBingmapsComponent) }],
            }]
    }], () => [{ type: LayerTileComponent, decorators: [{
                type: Host
            }] }], { cacheSize: [{
            type: Input
        }], hidpi: [{
            type: Input
        }], culture: [{
            type: Input
        }], key: [{
            type: Input
        }], imagerySet: [{
            type: Input
        }], maxZoom: [{
            type: Input
        }], reprojectionErrorThreshold: [{
            type: Input
        }], tileLoadFunction: [{
            type: Input
        }], wrapX: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SourceBingmapsComponent, { className: "SourceBingmapsComponent", filePath: "lib/sources/bingmaps.component.ts", lineNumber: 12 }); })();

const _c0$v = ["*"];
class SourceClusterComponent extends SourceComponent {
    constructor(layer) {
        super(layer);
    }
    ngAfterContentInit() {
        this.source = this.sourceVectorComponent.instance;
        this.instance = new Cluster(this);
        this.host.instance.setSource(this.instance);
    }
    ngOnChanges(changes) {
        if (this.instance && changes.hasOwnProperty('distance')) {
            this.instance.setDistance(this.distance);
        }
    }
    static { this.ɵfac = function SourceClusterComponent_Factory(t) { return new (t || SourceClusterComponent)(i0.ɵɵdirectiveInject(LayerVectorComponent, 1)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SourceClusterComponent, selectors: [["aol-source-cluster"]], contentQueries: function SourceClusterComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, SourceVectorComponent, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sourceVectorComponent = _t.first);
        } }, inputs: { distance: "distance", geometryFunction: "geometryFunction", wrapX: "wrapX" }, features: [i0.ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(() => SourceClusterComponent) }]), i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0$v, decls: 1, vars: 0, template: function SourceClusterComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SourceClusterComponent, [{
        type: Component,
        args: [{
                selector: 'aol-source-cluster',
                template: ` <ng-content></ng-content> `,
                providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceClusterComponent) }],
            }]
    }], () => [{ type: LayerVectorComponent, decorators: [{
                type: Host
            }] }], { distance: [{
            type: Input
        }], geometryFunction: [{
            type: Input
        }], wrapX: [{
            type: Input
        }], sourceVectorComponent: [{
            type: ContentChild,
            args: [SourceVectorComponent, { static: false }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SourceClusterComponent, { className: "SourceClusterComponent", filePath: "lib/sources/cluster.component.ts", lineNumber: 24 }); })();

class TileGridWMTSComponent extends TileGridComponent {
    ngOnInit() {
        this.instance = new WMTS(this);
    }
    static { this.ɵfac = /*@__PURE__*/ (() => { let ɵTileGridWMTSComponent_BaseFactory; return function TileGridWMTSComponent_Factory(t) { return (ɵTileGridWMTSComponent_BaseFactory || (ɵTileGridWMTSComponent_BaseFactory = i0.ɵɵgetInheritedFactory(TileGridWMTSComponent)))(t || TileGridWMTSComponent); }; })(); }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TileGridWMTSComponent, selectors: [["aol-tilegrid-wmts"]], inputs: { origin: "origin", origins: "origins", resolutions: "resolutions", matrixIds: "matrixIds", sizes: "sizes", tileSizes: "tileSizes", widths: "widths" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function TileGridWMTSComponent_Template(rf, ctx) { }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TileGridWMTSComponent, [{
        type: Component,
        args: [{
                selector: 'aol-tilegrid-wmts',
                template: '',
            }]
    }], null, { origin: [{
            type: Input
        }], origins: [{
            type: Input
        }], resolutions: [{
            type: Input
        }], matrixIds: [{
            type: Input
        }], sizes: [{
            type: Input
        }], tileSizes: [{
            type: Input
        }], widths: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TileGridWMTSComponent, { className: "TileGridWMTSComponent", filePath: "lib/tilegridwmts.component.ts", lineNumber: 11 }); })();

const _c0$u = ["*"];
class SourceTileWMTSComponent extends SourceComponent {
    constructor(layer) {
        super(layer);
        this.tileLoadStart = new EventEmitter();
        this.tileLoadEnd = new EventEmitter();
        this.tileLoadError = new EventEmitter();
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
        this.instance = new WMTS$1(this);
        this.instance.on('tileloadstart', (event) => this.tileLoadStart.emit(event));
        this.instance.on('tileloadend', (event) => this.tileLoadEnd.emit(event));
        this.instance.on('tileloaderror', (event) => this.tileLoadError.emit(event));
        this.host.instance.setSource(this.instance);
    }
    ngAfterContentInit() {
        if (this.tileGridWMTS) {
            this.tileGrid = this.tileGridWMTS.instance;
            this.setLayerSource();
        }
    }
    static { this.ɵfac = function SourceTileWMTSComponent_Factory(t) { return new (t || SourceTileWMTSComponent)(i0.ɵɵdirectiveInject(LayerTileComponent, 1)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SourceTileWMTSComponent, selectors: [["aol-source-tilewmts"]], contentQueries: function SourceTileWMTSComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, TileGridWMTSComponent, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tileGridWMTS = _t.first);
        } }, inputs: { cacheSize: "cacheSize", crossOrigin: "crossOrigin", tileGrid: "tileGrid", projection: "projection", reprojectionErrorThreshold: "reprojectionErrorThreshold", requestEncoding: "requestEncoding", layer: "layer", style: "style", tileClass: "tileClass", tilePixelRatio: "tilePixelRatio", version: "version", format: "format", matrixSet: "matrixSet", dimensions: "dimensions", url: "url", tileLoadFunction: "tileLoadFunction", urls: "urls", wrapX: "wrapX" }, outputs: { tileLoadStart: "tileLoadStart", tileLoadEnd: "tileLoadEnd", tileLoadError: "tileLoadError" }, features: [i0.ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(() => SourceTileWMTSComponent) }]), i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0$u, decls: 1, vars: 0, template: function SourceTileWMTSComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SourceTileWMTSComponent, [{
        type: Component,
        args: [{
                selector: 'aol-source-tilewmts',
                template: ` <ng-content></ng-content> `,
                providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceTileWMTSComponent) }],
            }]
    }], () => [{ type: LayerTileComponent, decorators: [{
                type: Host
            }] }], { cacheSize: [{
            type: Input
        }], crossOrigin: [{
            type: Input
        }], tileGrid: [{
            type: Input
        }], projection: [{
            type: Input
        }], reprojectionErrorThreshold: [{
            type: Input
        }], requestEncoding: [{
            type: Input
        }], layer: [{
            type: Input
        }], style: [{
            type: Input
        }], tileClass: [{
            type: Input
        }], tilePixelRatio: [{
            type: Input
        }], version: [{
            type: Input
        }], format: [{
            type: Input
        }], matrixSet: [{
            type: Input
        }], dimensions: [{
            type: Input
        }], url: [{
            type: Input
        }], tileLoadFunction: [{
            type: Input
        }], urls: [{
            type: Input
        }], wrapX: [{
            type: Input
        }], tileLoadStart: [{
            type: Output
        }], tileLoadEnd: [{
            type: Output
        }], tileLoadError: [{
            type: Output
        }], tileGridWMTS: [{
            type: ContentChild,
            args: [TileGridWMTSComponent, { static: false }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SourceTileWMTSComponent, { className: "SourceTileWMTSComponent", filePath: "lib/sources/tilewmts.component.ts", lineNumber: 28 }); })();

class FormatComponent {
    constructor() {
        this.componentType = 'format';
    }
}

const _c0$t = ["*"];
class SourceVectorTileComponent extends SourceComponent {
    constructor(layer) {
        super(layer);
    }
    /* need the children to construct the OL3 object */
    ngAfterContentInit() {
        this.format = this.formatComponent.instance;
        this.tileGrid = this.tileGridComponent.instance;
        // console.log('creating ol.source.VectorTile instance with:', this);
        this.instance = new VectorTile$1(this);
        this.host.instance.setSource(this.instance);
    }
    static { this.ɵfac = function SourceVectorTileComponent_Factory(t) { return new (t || SourceVectorTileComponent)(i0.ɵɵdirectiveInject(LayerVectorTileComponent, 1)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SourceVectorTileComponent, selectors: [["aol-source-vectortile"]], contentQueries: function SourceVectorTileComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, FormatComponent, 5);
            i0.ɵɵcontentQuery(dirIndex, TileGridComponent, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.formatComponent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tileGridComponent = _t.first);
        } }, inputs: { cacheSize: "cacheSize", overlaps: "overlaps", projection: "projection", tilePixelRatio: "tilePixelRatio", tileUrlFunction: "tileUrlFunction", url: "url", urls: "urls", wrapX: "wrapX" }, features: [i0.ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(() => SourceVectorTileComponent) }]), i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$t, decls: 1, vars: 0, template: function SourceVectorTileComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SourceVectorTileComponent, [{
        type: Component,
        args: [{
                selector: 'aol-source-vectortile',
                template: ` <ng-content></ng-content> `,
                providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceVectorTileComponent) }],
            }]
    }], () => [{ type: LayerVectorTileComponent, decorators: [{
                type: Host
            }] }], { cacheSize: [{
            type: Input
        }], overlaps: [{
            type: Input
        }], projection: [{
            type: Input
        }], tilePixelRatio: [{
            type: Input
        }], tileUrlFunction: [{
            type: Input
        }], url: [{
            type: Input
        }], urls: [{
            type: Input
        }], wrapX: [{
            type: Input
        }], formatComponent: [{
            type: ContentChild,
            args: [FormatComponent, { static: false }]
        }], tileGridComponent: [{
            type: ContentChild,
            args: [TileGridComponent, { static: false }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SourceVectorTileComponent, { className: "SourceVectorTileComponent", filePath: "lib/sources/vectortile.component.ts", lineNumber: 17 }); })();

const _c0$s = ["*"];
class SourceTileWMSComponent extends SourceComponent {
    constructor(layer) {
        super(layer);
    }
    ngOnInit() {
        this.instance = new TileWMS(this);
        this.host.instance.setSource(this.instance);
    }
    ngOnChanges(changes) {
        if (this.instance && changes.hasOwnProperty('params')) {
            this.instance.updateParams(this.params);
        }
    }
    static { this.ɵfac = function SourceTileWMSComponent_Factory(t) { return new (t || SourceTileWMSComponent)(i0.ɵɵdirectiveInject(LayerTileComponent, 1)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SourceTileWMSComponent, selectors: [["aol-source-tilewms"]], inputs: { cacheSize: "cacheSize", crossOrigin: "crossOrigin", gutter: "gutter", hidpi: "hidpi", params: "params", projection: "projection", reprojectionErrorThreshold: "reprojectionErrorThreshold", serverType: "serverType", tileGrid: "tileGrid", tileLoadFunction: "tileLoadFunction", url: "url", urls: "urls", wrapX: "wrapX" }, features: [i0.ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(() => SourceTileWMSComponent) }]), i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0$s, decls: 1, vars: 0, template: function SourceTileWMSComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SourceTileWMSComponent, [{
        type: Component,
        args: [{
                selector: 'aol-source-tilewms',
                template: ` <ng-content></ng-content> `,
                providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceTileWMSComponent) }],
            }]
    }], () => [{ type: LayerTileComponent, decorators: [{
                type: Host
            }] }], { cacheSize: [{
            type: Input
        }], crossOrigin: [{
            type: Input
        }], gutter: [{
            type: Input
        }], hidpi: [{
            type: Input
        }], params: [{
            type: Input
        }], projection: [{
            type: Input
        }], reprojectionErrorThreshold: [{
            type: Input
        }], serverType: [{
            type: Input
        }], tileGrid: [{
            type: Input
        }], tileLoadFunction: [{
            type: Input
        }], url: [{
            type: Input
        }], urls: [{
            type: Input
        }], wrapX: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SourceTileWMSComponent, { className: "SourceTileWMSComponent", filePath: "lib/sources/tilewms.component.ts", lineNumber: 14 }); })();

const _c0$r = ["*"];
class SourceTileJSONComponent extends SourceComponent {
    constructor(layer) {
        super(layer);
    }
    ngOnInit() {
        this.instance = new TileJSON(this);
        this.host.instance.setSource(this.instance);
    }
    static { this.ɵfac = function SourceTileJSONComponent_Factory(t) { return new (t || SourceTileJSONComponent)(i0.ɵɵdirectiveInject(LayerTileComponent, 1)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SourceTileJSONComponent, selectors: [["aol-source-tilejson"]], inputs: { url: "url" }, features: [i0.ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(() => SourceTileJSONComponent) }]), i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$r, decls: 1, vars: 0, template: function SourceTileJSONComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SourceTileJSONComponent, [{
        type: Component,
        args: [{
                selector: 'aol-source-tilejson',
                template: ` <ng-content></ng-content> `,
                providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceTileJSONComponent) }],
            }]
    }], () => [{ type: LayerTileComponent, decorators: [{
                type: Host
            }] }], { url: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SourceTileJSONComponent, { className: "SourceTileJSONComponent", filePath: "lib/sources/tilejson.component.ts", lineNumber: 11 }); })();

const _c0$q = ["*"];
class SourceGeoJSONComponent extends SourceComponent {
    constructor(layer) {
        super(layer);
    }
    ngOnInit() {
        this.format = new GeoJSON(this);
        this.instance = new Vector$1(this);
        this.host.instance.setSource(this.instance);
    }
    static { this.ɵfac = function SourceGeoJSONComponent_Factory(t) { return new (t || SourceGeoJSONComponent)(i0.ɵɵdirectiveInject(LayerVectorComponent, 1)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SourceGeoJSONComponent, selectors: [["aol-source-geojson"]], inputs: { defaultDataProjection: "defaultDataProjection", featureProjection: "featureProjection", geometryName: "geometryName", url: "url" }, features: [i0.ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(() => SourceGeoJSONComponent) }]), i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$q, decls: 1, vars: 0, template: function SourceGeoJSONComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SourceGeoJSONComponent, [{
        type: Component,
        args: [{
                selector: 'aol-source-geojson',
                template: ` <ng-content></ng-content> `,
                providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceGeoJSONComponent) }],
            }]
    }], () => [{ type: LayerVectorComponent, decorators: [{
                type: Host
            }] }], { defaultDataProjection: [{
            type: Input
        }], featureProjection: [{
            type: Input
        }], geometryName: [{
            type: Input
        }], url: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SourceGeoJSONComponent, { className: "SourceGeoJSONComponent", filePath: "lib/sources/geojson.component.ts", lineNumber: 14 }); })();

const _c0$p = ["*"];
class SourceImageStaticComponent extends SourceComponent {
    constructor(layer) {
        super(layer);
        this.imageLoadStart = new EventEmitter();
        this.imageLoadEnd = new EventEmitter();
        this.imageLoadError = new EventEmitter();
    }
    setLayerSource() {
        this.instance = new ImageStatic(this);
        this.host.instance.setSource(this.instance);
        this.instance.on('imageloadstart', (event) => this.imageLoadStart.emit(event));
        this.instance.on('imageloadend', (event) => this.imageLoadEnd.emit(event));
        this.instance.on('imageloaderror', (event) => this.imageLoadError.emit(event));
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
    static { this.ɵfac = function SourceImageStaticComponent_Factory(t) { return new (t || SourceImageStaticComponent)(i0.ɵɵdirectiveInject(LayerImageComponent, 1)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SourceImageStaticComponent, selectors: [["aol-source-imagestatic"]], inputs: { projection: "projection", imageExtent: "imageExtent", url: "url", attributions: "attributions", crossOrigin: "crossOrigin", imageLoadFunction: "imageLoadFunction", imageSize: "imageSize" }, outputs: { imageLoadStart: "imageLoadStart", imageLoadEnd: "imageLoadEnd", imageLoadError: "imageLoadError" }, features: [i0.ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(() => SourceImageStaticComponent) }]), i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0$p, decls: 1, vars: 0, template: function SourceImageStaticComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SourceImageStaticComponent, [{
        type: Component,
        args: [{
                selector: 'aol-source-imagestatic',
                template: ` <ng-content></ng-content> `,
                providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceImageStaticComponent) }],
            }]
    }], () => [{ type: LayerImageComponent, decorators: [{
                type: Host
            }] }], { projection: [{
            type: Input
        }], imageExtent: [{
            type: Input
        }], url: [{
            type: Input
        }], attributions: [{
            type: Input
        }], crossOrigin: [{
            type: Input
        }], imageLoadFunction: [{
            type: Input
        }], imageSize: [{
            type: Input
        }], imageLoadStart: [{
            type: Output
        }], imageLoadEnd: [{
            type: Output
        }], imageLoadError: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SourceImageStaticComponent, { className: "SourceImageStaticComponent", filePath: "lib/sources/imagestatic.component.ts", lineNumber: 27 }); })();

const _c0$o = ["*"];
class SourceImageWMSComponent extends SourceComponent {
    constructor(layer) {
        super(layer);
        this.imageLoadStart = new EventEmitter();
        this.imageLoadEnd = new EventEmitter();
        this.imageLoadError = new EventEmitter();
    }
    ngOnInit() {
        this.instance = new ImageWMS(this);
        this.host.instance.setSource(this.instance);
        this.instance.on('imageloadstart', (event) => this.imageLoadStart.emit(event));
        this.instance.on('imageloadend', (event) => this.imageLoadEnd.emit(event));
        this.instance.on('imageloaderror', (event) => this.imageLoadError.emit(event));
    }
    ngOnChanges(changes) {
        if (this.instance && changes.hasOwnProperty('params')) {
            this.instance.updateParams(this.params);
        }
    }
    static { this.ɵfac = function SourceImageWMSComponent_Factory(t) { return new (t || SourceImageWMSComponent)(i0.ɵɵdirectiveInject(LayerImageComponent, 1)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SourceImageWMSComponent, selectors: [["aol-source-imagewms"]], inputs: { attributions: "attributions", crossOrigin: "crossOrigin", hidpi: "hidpi", serverType: "serverType", imageLoadFunction: "imageLoadFunction", params: "params", projection: "projection", ratio: "ratio", resolutions: "resolutions", url: "url" }, outputs: { imageLoadStart: "imageLoadStart", imageLoadEnd: "imageLoadEnd", imageLoadError: "imageLoadError" }, features: [i0.ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(() => SourceImageWMSComponent) }]), i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0$o, decls: 1, vars: 0, template: function SourceImageWMSComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SourceImageWMSComponent, [{
        type: Component,
        args: [{
                selector: 'aol-source-imagewms',
                template: ` <ng-content></ng-content> `,
                providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceImageWMSComponent) }],
            }]
    }], () => [{ type: LayerImageComponent, decorators: [{
                type: Host
            }] }], { attributions: [{
            type: Input
        }], crossOrigin: [{
            type: Input
        }], hidpi: [{
            type: Input
        }], serverType: [{
            type: Input
        }], imageLoadFunction: [{
            type: Input
        }], params: [{
            type: Input
        }], projection: [{
            type: Input
        }], ratio: [{
            type: Input
        }], resolutions: [{
            type: Input
        }], url: [{
            type: Input
        }], imageLoadStart: [{
            type: Output
        }], imageLoadEnd: [{
            type: Output
        }], imageLoadError: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SourceImageWMSComponent, { className: "SourceImageWMSComponent", filePath: "lib/sources/imagewms.component.ts", lineNumber: 26 }); })();

const _c0$n = ["*"];
class SourceImageArcGISRestComponent extends SourceComponent {
    constructor(layer) {
        super(layer);
        this.ratio = 1.5;
        this.imageLoadStart = new EventEmitter();
        this.imageLoadEnd = new EventEmitter();
        this.imageLoadError = new EventEmitter();
    }
    ngOnInit() {
        this.instance = new ImageArcGISRest(this);
        this.host.instance.setSource(this.instance);
        this.instance.on('imageloadstart', (event) => this.imageLoadStart.emit(event));
        this.instance.on('imageloadend', (event) => this.imageLoadEnd.emit(event));
        this.instance.on('imageloaderror', (event) => this.imageLoadError.emit(event));
    }
    ngOnChanges(changes) {
        if (this.instance && changes.hasOwnProperty('params')) {
            this.instance.updateParams(this.params);
        }
    }
    static { this.ɵfac = function SourceImageArcGISRestComponent_Factory(t) { return new (t || SourceImageArcGISRestComponent)(i0.ɵɵdirectiveInject(LayerImageComponent, 1)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SourceImageArcGISRestComponent, selectors: [["aol-source-imagearcgisrest"]], inputs: { projection: "projection", url: "url", attributions: "attributions", crossOrigin: "crossOrigin", imageLoadFunction: "imageLoadFunction", params: "params", ratio: "ratio", resolutions: "resolutions", wrapX: "wrapX" }, outputs: { imageLoadStart: "imageLoadStart", imageLoadEnd: "imageLoadEnd", imageLoadError: "imageLoadError" }, features: [i0.ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(() => SourceImageArcGISRestComponent) }]), i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0$n, decls: 1, vars: 0, template: function SourceImageArcGISRestComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SourceImageArcGISRestComponent, [{
        type: Component,
        args: [{
                selector: 'aol-source-imagearcgisrest',
                template: ` <ng-content></ng-content> `,
                providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceImageArcGISRestComponent) }],
            }]
    }], () => [{ type: LayerImageComponent, decorators: [{
                type: Host
            }] }], { projection: [{
            type: Input
        }], url: [{
            type: Input
        }], attributions: [{
            type: Input
        }], crossOrigin: [{
            type: Input
        }], imageLoadFunction: [{
            type: Input
        }], params: [{
            type: Input
        }], ratio: [{
            type: Input
        }], resolutions: [{
            type: Input
        }], wrapX: [{
            type: Input
        }], imageLoadStart: [{
            type: Output
        }], imageLoadEnd: [{
            type: Output
        }], imageLoadError: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SourceImageArcGISRestComponent, { className: "SourceImageArcGISRestComponent", filePath: "lib/sources/imagearcgisrest.component.ts", lineNumber: 25 }); })();

const _c0$m = ["*"];
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
        this.beforeOperations = new EventEmitter();
        this.afterOperations = new EventEmitter();
        this.sources = [];
    }
    ngAfterContentInit() {
        this.init();
    }
    init() {
        this.instance = new Raster(this);
        this.instance.on('beforeoperations', (event) => this.beforeOperations.emit(event));
        this.instance.on('afteroperations', (event) => this.afterOperations.emit(event));
        this.register(this.instance);
    }
    static { this.ɵfac = function SourceRasterComponent_Factory(t) { return new (t || SourceRasterComponent)(i0.ɵɵdirectiveInject(LayerImageComponent, 1)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SourceRasterComponent, selectors: [["aol-source-raster"]], contentQueries: function SourceRasterComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, SourceComponent, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.source = _t.first);
        } }, inputs: { operation: "operation", threads: "threads", lib: "lib", operationType: "operationType" }, outputs: { beforeOperations: "beforeOperations", afterOperations: "afterOperations" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: SourceComponent,
                    useExisting: forwardRef(() => SourceRasterComponent),
                },
            ]), i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$m, decls: 1, vars: 0, template: function SourceRasterComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SourceRasterComponent, [{
        type: Component,
        args: [{
                selector: 'aol-source-raster',
                template: ` <ng-content></ng-content> `,
                providers: [
                    {
                        provide: SourceComponent,
                        useExisting: forwardRef(() => SourceRasterComponent),
                    },
                ],
            }]
    }], () => [{ type: LayerImageComponent, decorators: [{
                type: Host
            }] }], { operation: [{
            type: Input
        }], threads: [{
            type: Input
        }], lib: [{
            type: Input
        }], operationType: [{
            type: Input
        }], beforeOperations: [{
            type: Output
        }], afterOperations: [{
            type: Output
        }], source: [{
            type: ContentChild,
            args: [SourceComponent, { static: false }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SourceRasterComponent, { className: "SourceRasterComponent", filePath: "lib/sources/raster.component.ts", lineNumber: 27 }); })();

const _c0$l = ["*"];
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
        this.instance = new Circle([0, 0]);
    }
    static { this.ɵfac = function GeometryCircleComponent_Factory(t) { return new (t || GeometryCircleComponent)(i0.ɵɵdirectiveInject(MapComponent), i0.ɵɵdirectiveInject(FeatureComponent)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GeometryCircleComponent, selectors: [["aol-geometry-circle"]], inputs: { radius: "radius" }, features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$l, decls: 1, vars: 0, template: function GeometryCircleComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GeometryCircleComponent, [{
        type: Component,
        args: [{
                selector: 'aol-geometry-circle',
                template: ` <ng-content></ng-content> `,
            }]
    }], () => [{ type: MapComponent }, { type: FeatureComponent }], { radius: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(GeometryCircleComponent, { className: "GeometryCircleComponent", filePath: "lib/geom/geometrycircle.component.ts", lineNumber: 11 }); })();

const _c0$k = ["*"];
class GeometryLinestringComponent extends SimpleGeometryComponent {
    constructor(map, host) {
        super(map, host);
        this.componentType = 'geometry-linestring';
    }
    ngOnInit() {
        this.instance = new LineString([
            [0, 0],
            [1, 1],
        ]);
        super.ngOnInit();
    }
    static { this.ɵfac = function GeometryLinestringComponent_Factory(t) { return new (t || GeometryLinestringComponent)(i0.ɵɵdirectiveInject(MapComponent), i0.ɵɵdirectiveInject(FeatureComponent)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GeometryLinestringComponent, selectors: [["aol-geometry-linestring"]], features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$k, decls: 1, vars: 0, template: function GeometryLinestringComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GeometryLinestringComponent, [{
        type: Component,
        args: [{
                selector: 'aol-geometry-linestring',
                template: ` <ng-content></ng-content> `,
            }]
    }], () => [{ type: MapComponent }, { type: FeatureComponent }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(GeometryLinestringComponent, { className: "GeometryLinestringComponent", filePath: "lib/geom/geometrylinestring.component.ts", lineNumber: 11 }); })();

const _c0$j = ["*"];
class GeometryMultiLinestringComponent extends SimpleGeometryComponent {
    constructor(map, host) {
        super(map, host);
        this.componentType = 'geometry-multilinestring';
    }
    ngOnInit() {
        this.instance = new MultiLineString([
            [
                [0, 0],
                [1, 1],
            ],
        ]);
        super.ngOnInit();
    }
    static { this.ɵfac = function GeometryMultiLinestringComponent_Factory(t) { return new (t || GeometryMultiLinestringComponent)(i0.ɵɵdirectiveInject(MapComponent), i0.ɵɵdirectiveInject(FeatureComponent)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GeometryMultiLinestringComponent, selectors: [["aol-geometry-multilinestring"]], features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$j, decls: 1, vars: 0, template: function GeometryMultiLinestringComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GeometryMultiLinestringComponent, [{
        type: Component,
        args: [{
                selector: 'aol-geometry-multilinestring',
                template: ` <ng-content></ng-content> `,
            }]
    }], () => [{ type: MapComponent }, { type: FeatureComponent }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(GeometryMultiLinestringComponent, { className: "GeometryMultiLinestringComponent", filePath: "lib/geom/geometrymultilinestring.component.ts", lineNumber: 11 }); })();

const _c0$i = ["*"];
class GeometryMultiPointComponent extends SimpleGeometryComponent {
    constructor(map, host) {
        super(map, host);
        this.componentType = 'geometry-multipoint';
    }
    ngOnInit() {
        this.instance = new MultiPoint([
            [0, 0],
            [1, 1],
        ]);
        super.ngOnInit();
    }
    static { this.ɵfac = function GeometryMultiPointComponent_Factory(t) { return new (t || GeometryMultiPointComponent)(i0.ɵɵdirectiveInject(MapComponent), i0.ɵɵdirectiveInject(FeatureComponent)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GeometryMultiPointComponent, selectors: [["aol-geometry-multipoint"]], features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$i, decls: 1, vars: 0, template: function GeometryMultiPointComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GeometryMultiPointComponent, [{
        type: Component,
        args: [{
                selector: 'aol-geometry-multipoint',
                template: ` <ng-content></ng-content> `,
            }]
    }], () => [{ type: MapComponent }, { type: FeatureComponent }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(GeometryMultiPointComponent, { className: "GeometryMultiPointComponent", filePath: "lib/geom/geometrymultipoint.component.ts", lineNumber: 11 }); })();

const _c0$h = ["*"];
class GeometryMultiPolygonComponent extends SimpleGeometryComponent {
    constructor(map, host) {
        super(map, host);
        this.componentType = 'geometry-multipolygon';
    }
    ngOnInit() {
        this.instance = new MultiPolygon([
            [
                [
                    [0, 0],
                    [1, 1],
                    [0, 1],
                ],
            ],
        ]);
        super.ngOnInit();
    }
    static { this.ɵfac = function GeometryMultiPolygonComponent_Factory(t) { return new (t || GeometryMultiPolygonComponent)(i0.ɵɵdirectiveInject(MapComponent), i0.ɵɵdirectiveInject(FeatureComponent)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GeometryMultiPolygonComponent, selectors: [["aol-geometry-multipolygon"]], features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$h, decls: 1, vars: 0, template: function GeometryMultiPolygonComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GeometryMultiPolygonComponent, [{
        type: Component,
        args: [{
                selector: 'aol-geometry-multipolygon',
                template: ` <ng-content></ng-content> `,
            }]
    }], () => [{ type: MapComponent }, { type: FeatureComponent }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(GeometryMultiPolygonComponent, { className: "GeometryMultiPolygonComponent", filePath: "lib/geom/geometrymultipolygon.component.ts", lineNumber: 11 }); })();

const _c0$g = ["*"];
class GeometryPointComponent extends SimpleGeometryComponent {
    constructor(map, host) {
        super(map, host);
        this.componentType = 'geometry-point';
    }
    ngOnInit() {
        this.instance = new Point([0, 0]);
        super.ngOnInit();
    }
    static { this.ɵfac = function GeometryPointComponent_Factory(t) { return new (t || GeometryPointComponent)(i0.ɵɵdirectiveInject(MapComponent), i0.ɵɵdirectiveInject(FeatureComponent)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GeometryPointComponent, selectors: [["aol-geometry-point"]], features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$g, decls: 1, vars: 0, template: function GeometryPointComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GeometryPointComponent, [{
        type: Component,
        args: [{
                selector: 'aol-geometry-point',
                template: ` <ng-content></ng-content> `,
            }]
    }], () => [{ type: MapComponent }, { type: FeatureComponent }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(GeometryPointComponent, { className: "GeometryPointComponent", filePath: "lib/geom/geometrypoint.component.ts", lineNumber: 11 }); })();

const _c0$f = ["*"];
class GeometryPolygonComponent extends SimpleGeometryComponent {
    constructor(map, host) {
        super(map, host);
        this.componentType = 'geometry-polygon';
    }
    ngOnInit() {
        this.instance = new Polygon([
            [
                [0, 0],
                [1, 1],
                [0, 1],
            ],
        ]);
        super.ngOnInit();
    }
    static { this.ɵfac = function GeometryPolygonComponent_Factory(t) { return new (t || GeometryPolygonComponent)(i0.ɵɵdirectiveInject(MapComponent), i0.ɵɵdirectiveInject(FeatureComponent)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GeometryPolygonComponent, selectors: [["aol-geometry-polygon"]], features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$f, decls: 1, vars: 0, template: function GeometryPolygonComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GeometryPolygonComponent, [{
        type: Component,
        args: [{
                selector: 'aol-geometry-polygon',
                template: ` <ng-content></ng-content> `,
            }]
    }], () => [{ type: MapComponent }, { type: FeatureComponent }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(GeometryPolygonComponent, { className: "GeometryPolygonComponent", filePath: "lib/geom/geometrypolygon.component.ts", lineNumber: 11 }); })();

const _c0$e = ["*"];
class ContentComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    static { this.ɵfac = function ContentComponent_Factory(t) { return new (t || ContentComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ContentComponent, selectors: [["aol-content"]], ngContentSelectors: _c0$e, decls: 1, vars: 0, template: function ContentComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContentComponent, [{
        type: Component,
        args: [{
                selector: 'aol-content',
                template: '<ng-content></ng-content>',
            }]
    }], () => [{ type: i0.ElementRef }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ContentComponent, { className: "ContentComponent", filePath: "lib/content.component.ts", lineNumber: 7 }); })();

const _c0$d = ["*"];
class OverlayComponent {
    constructor(map) {
        this.map = map;
        this.componentType = 'overlay';
    }
    ngOnInit() {
        if (this.content) {
            this.element = this.content.elementRef.nativeElement;
            this.instance = new Overlay(this);
            this.map.instance.addOverlay(this.instance);
        }
    }
    ngOnDestroy() {
        if (this.instance) {
            this.map.instance.removeOverlay(this.instance);
        }
    }
    static { this.ɵfac = function OverlayComponent_Factory(t) { return new (t || OverlayComponent)(i0.ɵɵdirectiveInject(MapComponent)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: OverlayComponent, selectors: [["aol-overlay"]], contentQueries: function OverlayComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, ContentComponent, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.content = _t.first);
        } }, inputs: { id: "id", offset: "offset", positioning: "positioning", stopEvent: "stopEvent", insertFirst: "insertFirst", autoPan: "autoPan", autoPanAnimation: "autoPanAnimation", autoPanMargin: "autoPanMargin" }, ngContentSelectors: _c0$d, decls: 1, vars: 0, template: function OverlayComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OverlayComponent, [{
        type: Component,
        args: [{
                selector: 'aol-overlay',
                template: '<ng-content></ng-content>',
            }]
    }], () => [{ type: MapComponent }], { content: [{
            type: ContentChild,
            args: [ContentComponent, { static: true }]
        }], id: [{
            type: Input
        }], offset: [{
            type: Input
        }], positioning: [{
            type: Input
        }], stopEvent: [{
            type: Input
        }], insertFirst: [{
            type: Input
        }], autoPan: [{
            type: Input
        }], autoPanAnimation: [{
            type: Input
        }], autoPanMargin: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(OverlayComponent, { className: "OverlayComponent", filePath: "lib/overlay.component.ts", lineNumber: 10 }); })();

class CoordinateComponent {
    constructor(map, viewHost, geometryPointHost, geometryCircleHost, overlayHost) {
        this.map = map;
        this.srid = 'EPSG:3857';
        this.mapSrid = 'EPSG:3857';
        // console.log('instancing aol-coordinate');
        if (geometryPointHost !== null) {
            this.host = geometryPointHost;
        }
        else if (geometryCircleHost !== null) {
            this.host = geometryCircleHost;
        }
        else if (viewHost !== null) {
            this.host = viewHost;
        }
        else if (overlayHost !== null) {
            this.host = overlayHost;
        }
    }
    ngOnInit() {
        this.map.instance.on('change:view', (e) => this.onMapViewChanged(e));
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
        }
        else {
            transformedCoordinates = transform([this.x, this.y], this.srid, this.mapSrid);
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
    static { this.ɵfac = function CoordinateComponent_Factory(t) { return new (t || CoordinateComponent)(i0.ɵɵdirectiveInject(MapComponent), i0.ɵɵdirectiveInject(ViewComponent, 8), i0.ɵɵdirectiveInject(GeometryPointComponent, 8), i0.ɵɵdirectiveInject(GeometryCircleComponent, 8), i0.ɵɵdirectiveInject(OverlayComponent, 8)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CoordinateComponent, selectors: [["aol-coordinate"]], inputs: { x: "x", y: "y", srid: "srid" }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 0, consts: [[1, "aol-coordinate"]], template: function CoordinateComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "div", 0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CoordinateComponent, [{
        type: Component,
        args: [{
                selector: 'aol-coordinate',
                template: ` <div class="aol-coordinate"></div> `,
            }]
    }], () => [{ type: MapComponent }, { type: ViewComponent, decorators: [{
                type: Optional
            }] }, { type: GeometryPointComponent, decorators: [{
                type: Optional
            }] }, { type: GeometryCircleComponent, decorators: [{
                type: Optional
            }] }, { type: OverlayComponent, decorators: [{
                type: Optional
            }] }], { x: [{
            type: Input
        }], y: [{
            type: Input
        }], srid: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CoordinateComponent, { className: "CoordinateComponent", filePath: "lib/coordinate.component.ts", lineNumber: 13 }); })();

class CollectionCoordinatesComponent {
    constructor(map, geometryLinestring, geometryPolygon, geometryMultipoint, geometryMultilinestring, geometryMultipolygon) {
        this.map = map;
        this.srid = 'EPSG:3857';
        this.mapSrid = 'EPSG:3857';
        if (!!geometryLinestring) {
            this.host = geometryLinestring;
        }
        else if (!!geometryPolygon) {
            this.host = geometryPolygon;
        }
        else if (!!geometryMultipoint) {
            this.host = geometryMultipoint;
        }
        else if (!!geometryMultilinestring) {
            this.host = geometryMultilinestring;
        }
        else if (!!geometryMultipolygon) {
            this.host = geometryMultipolygon;
        }
        else {
            throw new Error('aol-collection-coordinates must be a child of a geometry component');
        }
    }
    ngOnInit() {
        this.map.instance.on('change:view', (e) => this.onMapViewChanged(e));
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
        }
        else {
            switch (this.host.componentType) {
                case 'geometry-linestring':
                case 'geometry-multipoint':
                    transformedCoordinates = this.coordinates.map((c) => transform(c, this.srid, this.mapSrid));
                    break;
                case 'geometry-polygon':
                case 'geometry-multilinestring':
                    transformedCoordinates = this.coordinates.map((cc) => cc.map((c) => transform(c, this.srid, this.mapSrid)));
                    break;
                case 'geometry-multipolygon':
                    transformedCoordinates = this.coordinates.map((ccc) => ccc.map((cc) => cc.map((c) => transform(c, this.srid, this.mapSrid))));
                    break;
            }
        }
        this.host.instance.setCoordinates(transformedCoordinates);
    }
    static { this.ɵfac = function CollectionCoordinatesComponent_Factory(t) { return new (t || CollectionCoordinatesComponent)(i0.ɵɵdirectiveInject(MapComponent), i0.ɵɵdirectiveInject(GeometryLinestringComponent, 8), i0.ɵɵdirectiveInject(GeometryPolygonComponent, 8), i0.ɵɵdirectiveInject(GeometryMultiPointComponent, 8), i0.ɵɵdirectiveInject(GeometryMultiLinestringComponent, 8), i0.ɵɵdirectiveInject(GeometryMultiPolygonComponent, 8)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CollectionCoordinatesComponent, selectors: [["aol-collection-coordinates"]], inputs: { coordinates: "coordinates", srid: "srid" }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 0, consts: [[1, "aol-collection-coordinates"]], template: function CollectionCoordinatesComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "div", 0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CollectionCoordinatesComponent, [{
        type: Component,
        args: [{
                selector: 'aol-collection-coordinates',
                template: ` <div class="aol-collection-coordinates"></div> `,
            }]
    }], () => [{ type: MapComponent }, { type: GeometryLinestringComponent, decorators: [{
                type: Optional
            }] }, { type: GeometryPolygonComponent, decorators: [{
                type: Optional
            }] }, { type: GeometryMultiPointComponent, decorators: [{
                type: Optional
            }] }, { type: GeometryMultiLinestringComponent, decorators: [{
                type: Optional
            }] }, { type: GeometryMultiPolygonComponent, decorators: [{
                type: Optional
            }] }], { coordinates: [{
            type: Input
        }], srid: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CollectionCoordinatesComponent, { className: "CollectionCoordinatesComponent", filePath: "lib/collectioncoordinates.component.ts", lineNumber: 15 }); })();

const _c0$c = ["*"];
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
        this.instance = new Style(this);
        this.host.instance.setStyle(this.instance);
    }
    static { this.ɵfac = function StyleComponent_Factory(t) { return new (t || StyleComponent)(i0.ɵɵdirectiveInject(FeatureComponent, 8), i0.ɵɵdirectiveInject(LayerVectorComponent, 8)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StyleComponent, selectors: [["aol-style"]], inputs: { geometry: "geometry", fill: "fill", image: "image", stroke: "stroke", text: "text", zIndex: "zIndex" }, ngContentSelectors: _c0$c, decls: 1, vars: 0, template: function StyleComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StyleComponent, [{
        type: Component,
        args: [{
                selector: 'aol-style',
                template: ` <ng-content></ng-content> `,
            }]
    }], () => [{ type: FeatureComponent, decorators: [{
                type: Optional
            }] }, { type: LayerVectorComponent, decorators: [{
                type: Optional
            }] }], { geometry: [{
            type: Input
        }], fill: [{
            type: Input
        }], image: [{
            type: Input
        }], stroke: [{
            type: Input
        }], text: [{
            type: Input
        }], zIndex: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StyleComponent, { className: "StyleComponent", filePath: "lib/styles/style.component.ts", lineNumber: 12 }); })();

const _c0$b = ["*"];
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
        this.instance = new Circle$1(this);
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
    static { this.ɵfac = function StyleCircleComponent_Factory(t) { return new (t || StyleCircleComponent)(i0.ɵɵdirectiveInject(StyleComponent, 1)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StyleCircleComponent, selectors: [["aol-style-circle"]], inputs: { fill: "fill", radius: "radius", snapToPixel: "snapToPixel", stroke: "stroke" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0$b, decls: 1, vars: 0, template: function StyleCircleComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StyleCircleComponent, [{
        type: Component,
        args: [{
                selector: 'aol-style-circle',
                template: ` <ng-content></ng-content> `,
            }]
    }], () => [{ type: StyleComponent, decorators: [{
                type: Host
            }] }], { fill: [{
            type: Input
        }], radius: [{
            type: Input
        }], snapToPixel: [{
            type: Input
        }], stroke: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StyleCircleComponent, { className: "StyleCircleComponent", filePath: "lib/styles/circle.component.ts", lineNumber: 9 }); })();

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
        this.instance = new Text(this);
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
    update() { }
    static { this.ɵfac = function StyleTextComponent_Factory(t) { return new (t || StyleTextComponent)(i0.ɵɵdirectiveInject(StyleComponent, 8)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StyleTextComponent, selectors: [["aol-style-text"]], inputs: { font: "font", offsetX: "offsetX", offsetY: "offsetY", scale: "scale", rotateWithView: "rotateWithView", rotation: "rotation", text: "text", textAlign: "textAlign", textBaseLine: "textBaseLine" }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 0, consts: [[1, "aol-style-text"]], template: function StyleTextComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "div", 0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StyleTextComponent, [{
        type: Component,
        args: [{
                selector: 'aol-style-text',
                template: ` <div class="aol-style-text"></div> `,
            }]
    }], () => [{ type: StyleComponent, decorators: [{
                type: Optional
            }] }], { font: [{
            type: Input
        }], offsetX: [{
            type: Input
        }], offsetY: [{
            type: Input
        }], scale: [{
            type: Input
        }], rotateWithView: [{
            type: Input
        }], rotation: [{
            type: Input
        }], text: [{
            type: Input
        }], textAlign: [{
            type: Input
        }], textBaseLine: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StyleTextComponent, { className: "StyleTextComponent", filePath: "lib/styles/text.component.ts", lineNumber: 9 }); })();

class StyleStrokeComponent {
    constructor(styleHost, styleCircleHost, styleTextHost) {
        if (!styleHost) {
            throw new Error('aol-style-stroke must be a descendant of aol-style');
        }
        if (!!styleTextHost) {
            this.host = styleTextHost;
        }
        else if (!!styleCircleHost) {
            this.host = styleCircleHost;
        }
        else {
            this.host = styleHost;
        }
        // console.log('creating aol-style-stroke with: ', this);
    }
    ngOnInit() {
        // console.log('creating ol.style.Stroke instance with: ', this);
        this.instance = new Stroke(this);
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
    static { this.ɵfac = function StyleStrokeComponent_Factory(t) { return new (t || StyleStrokeComponent)(i0.ɵɵdirectiveInject(StyleComponent, 8), i0.ɵɵdirectiveInject(StyleCircleComponent, 8), i0.ɵɵdirectiveInject(StyleTextComponent, 8)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StyleStrokeComponent, selectors: [["aol-style-stroke"]], inputs: { color: "color", lineCap: "lineCap", lineDash: "lineDash", lineJoin: "lineJoin", miterLimit: "miterLimit", width: "width" }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 0, consts: [[1, "aol-style-stroke"]], template: function StyleStrokeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "div", 0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StyleStrokeComponent, [{
        type: Component,
        args: [{
                selector: 'aol-style-stroke',
                template: ` <div class="aol-style-stroke"></div> `,
            }]
    }], () => [{ type: StyleComponent, decorators: [{
                type: Optional
            }] }, { type: StyleCircleComponent, decorators: [{
                type: Optional
            }] }, { type: StyleTextComponent, decorators: [{
                type: Optional
            }] }], { color: [{
            type: Input
        }], lineCap: [{
            type: Input
        }], lineDash: [{
            type: Input
        }], lineJoin: [{
            type: Input
        }], miterLimit: [{
            type: Input
        }], width: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StyleStrokeComponent, { className: "StyleStrokeComponent", filePath: "lib/styles/stroke.component.ts", lineNumber: 13 }); })();

class StyleIconComponent {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        // console.log('creating ol.style.Icon instance with: ', this);
        this.instance = new Icon(this);
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
            this.instance = new Icon(this);
            this.host.instance.setImage(this.instance);
        }
        this.host.update();
        // console.log('changes detected in aol-style-icon: ', changes);
    }
    static { this.ɵfac = function StyleIconComponent_Factory(t) { return new (t || StyleIconComponent)(i0.ɵɵdirectiveInject(StyleComponent, 1)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StyleIconComponent, selectors: [["aol-style-icon"]], inputs: { anchor: "anchor", anchorXUnits: "anchorXUnits", anchorYUnits: "anchorYUnits", anchorOrigin: "anchorOrigin", color: "color", crossOrigin: "crossOrigin", img: "img", offset: "offset", offsetOrigin: "offsetOrigin", opacity: "opacity", scale: "scale", snapToPixel: "snapToPixel", rotateWithView: "rotateWithView", rotation: "rotation", size: "size", imgSize: "imgSize", src: "src" }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 0, consts: [[1, "aol-style-icon"]], template: function StyleIconComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "div", 0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StyleIconComponent, [{
        type: Component,
        args: [{
                selector: 'aol-style-icon',
                template: ` <div class="aol-style-icon"></div> `,
            }]
    }], () => [{ type: StyleComponent, decorators: [{
                type: Host
            }] }], { anchor: [{
            type: Input
        }], anchorXUnits: [{
            type: Input
        }], anchorYUnits: [{
            type: Input
        }], anchorOrigin: [{
            type: Input
        }], color: [{
            type: Input
        }], crossOrigin: [{
            type: Input
        }], img: [{
            type: Input
        }], offset: [{
            type: Input
        }], offsetOrigin: [{
            type: Input
        }], opacity: [{
            type: Input
        }], scale: [{
            type: Input
        }], snapToPixel: [{
            type: Input
        }], rotateWithView: [{
            type: Input
        }], rotation: [{
            type: Input
        }], size: [{
            type: Input
        }], imgSize: [{
            type: Input
        }], src: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StyleIconComponent, { className: "StyleIconComponent", filePath: "lib/styles/icon.component.ts", lineNumber: 14 }); })();

class StyleFillComponent {
    constructor(styleHost, styleCircleHost, styleTextHost) {
        if (!styleHost) {
            throw new Error('aol-style-stroke must be a descendant of aol-style');
        }
        if (!!styleTextHost) {
            this.host = styleTextHost;
        }
        else if (!!styleCircleHost) {
            this.host = styleCircleHost;
        }
        else {
            this.host = styleHost;
        }
        // console.log('creating aol-style-fill with: ', this);
    }
    ngOnInit() {
        // console.log('creating ol.style.Fill instance with: ', this);
        this.instance = new Fill(this);
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
    static { this.ɵfac = function StyleFillComponent_Factory(t) { return new (t || StyleFillComponent)(i0.ɵɵdirectiveInject(StyleComponent, 8), i0.ɵɵdirectiveInject(StyleCircleComponent, 8), i0.ɵɵdirectiveInject(StyleTextComponent, 8)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StyleFillComponent, selectors: [["aol-style-fill"]], inputs: { color: "color" }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 0, consts: [[1, "aol-style-fill"]], template: function StyleFillComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "div", 0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StyleFillComponent, [{
        type: Component,
        args: [{
                selector: 'aol-style-fill',
                template: ` <div class="aol-style-fill"></div> `,
            }]
    }], () => [{ type: StyleComponent, decorators: [{
                type: Optional
            }] }, { type: StyleCircleComponent, decorators: [{
                type: Optional
            }] }, { type: StyleTextComponent, decorators: [{
                type: Optional
            }] }], { color: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StyleFillComponent, { className: "StyleFillComponent", filePath: "lib/styles/fill.component.ts", lineNumber: 13 }); })();

class DefaultControlComponent {
    constructor(map) {
        this.map = map;
    }
    ngOnInit() {
        // console.log('ol.control.defaults init: ', this);
        this.instance = defaults(this);
        this.instance.forEach((c) => this.map.instance.addControl(c));
    }
    ngOnDestroy() {
        // console.log('removing aol-control-defaults');
        this.instance.forEach((c) => this.map.instance.removeControl(c));
    }
    static { this.ɵfac = function DefaultControlComponent_Factory(t) { return new (t || DefaultControlComponent)(i0.ɵɵdirectiveInject(MapComponent)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DefaultControlComponent, selectors: [["aol-control-defaults"]], inputs: { attribution: "attribution", attributionOptions: "attributionOptions", rotate: "rotate", rotateOptions: "rotateOptions", zoom: "zoom", zoomOptions: "zoomOptions" }, decls: 0, vars: 0, template: function DefaultControlComponent_Template(rf, ctx) { }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DefaultControlComponent, [{
        type: Component,
        args: [{
                selector: 'aol-control-defaults',
                template: '',
            }]
    }], () => [{ type: MapComponent }], { attribution: [{
            type: Input
        }], attributionOptions: [{
            type: Input
        }], rotate: [{
            type: Input
        }], rotateOptions: [{
            type: Input
        }], zoom: [{
            type: Input
        }], zoomOptions: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DefaultControlComponent, { className: "DefaultControlComponent", filePath: "lib/controls/default.component.ts", lineNumber: 14 }); })();

const _c0$a = ["*"];
class ControlComponent {
    constructor(map) {
        this.map = map;
        this.componentType = 'control';
    }
    ngOnInit() {
        if (this.content) {
            this.element = this.content.elementRef.nativeElement;
            this.instance = new Control(this);
            this.map.instance.addControl(this.instance);
        }
    }
    ngOnDestroy() {
        if (this.instance) {
            this.map.instance.removeControl(this.instance);
        }
    }
    static { this.ɵfac = function ControlComponent_Factory(t) { return new (t || ControlComponent)(i0.ɵɵdirectiveInject(MapComponent)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ControlComponent, selectors: [["aol-control"]], contentQueries: function ControlComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, ContentComponent, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.content = _t.first);
        } }, ngContentSelectors: _c0$a, decls: 1, vars: 0, template: function ControlComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ControlComponent, [{
        type: Component,
        args: [{
                selector: 'aol-control',
                template: ` <ng-content></ng-content> `,
            }]
    }], () => [{ type: MapComponent }], { content: [{
            type: ContentChild,
            args: [ContentComponent, { static: true }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ControlComponent, { className: "ControlComponent", filePath: "lib/controls/control.component.ts", lineNumber: 10 }); })();

class ControlAttributionComponent {
    constructor(map, element) {
        this.map = map;
        this.element = element;
        this.componentType = 'control';
    }
    ngOnInit() {
        this.target = this.element.nativeElement;
        // console.log('ol.control.Attribution init: ', this);
        this.instance = new Attribution(this);
        this.map.instance.addControl(this.instance);
    }
    ngOnDestroy() {
        // console.log('removing aol-control-attribution');
        this.map.instance.removeControl(this.instance);
    }
    static { this.ɵfac = function ControlAttributionComponent_Factory(t) { return new (t || ControlAttributionComponent)(i0.ɵɵdirectiveInject(MapComponent), i0.ɵɵdirectiveInject(i0.ElementRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ControlAttributionComponent, selectors: [["aol-control-attribution"]], inputs: { collapsible: "collapsible" }, decls: 0, vars: 0, template: function ControlAttributionComponent_Template(rf, ctx) { }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ControlAttributionComponent, [{
        type: Component,
        args: [{
                selector: 'aol-control-attribution',
                template: ``,
            }]
    }], () => [{ type: MapComponent }, { type: i0.ElementRef }], { collapsible: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ControlAttributionComponent, { className: "ControlAttributionComponent", filePath: "lib/controls/attribution.component.ts", lineNumber: 9 }); })();

const _c0$9 = ["*"];
class ControlFullScreenComponent {
    constructor(map) {
        this.map = map;
        // console.log('instancing aol-control-fullscreen');
    }
    ngOnInit() {
        this.instance = new FullScreen(this);
        this.map.instance.addControl(this.instance);
    }
    ngOnDestroy() {
        // console.log('removing aol-control-fullscreen');
        this.map.instance.removeControl(this.instance);
    }
    static { this.ɵfac = function ControlFullScreenComponent_Factory(t) { return new (t || ControlFullScreenComponent)(i0.ɵɵdirectiveInject(MapComponent)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ControlFullScreenComponent, selectors: [["aol-control-fullscreen"]], inputs: { className: "className", label: "label", labelActive: "labelActive", tipLabel: "tipLabel", keys: "keys" }, ngContentSelectors: _c0$9, decls: 1, vars: 0, template: function ControlFullScreenComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ControlFullScreenComponent, [{
        type: Component,
        args: [{
                selector: 'aol-control-fullscreen',
                template: ` <ng-content></ng-content> `,
            }]
    }], () => [{ type: MapComponent }], { className: [{
            type: Input
        }], label: [{
            type: Input
        }], labelActive: [{
            type: Input
        }], tipLabel: [{
            type: Input
        }], keys: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ControlFullScreenComponent, { className: "ControlFullScreenComponent", filePath: "lib/controls/fullscreen.component.ts", lineNumber: 9 }); })();

class ControlMousePositionComponent {
    constructor(map, element) {
        this.map = map;
        this.element = element;
    }
    ngOnInit() {
        this.target = this.element.nativeElement;
        // console.log('ol.control.MousePosition init: ', this);
        this.instance = new MousePosition(this);
        this.map.instance.addControl(this.instance);
    }
    ngOnDestroy() {
        // console.log('removing aol-control-mouseposition');
        this.map.instance.removeControl(this.instance);
    }
    static { this.ɵfac = function ControlMousePositionComponent_Factory(t) { return new (t || ControlMousePositionComponent)(i0.ɵɵdirectiveInject(MapComponent), i0.ɵɵdirectiveInject(i0.ElementRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ControlMousePositionComponent, selectors: [["aol-control-mouseposition"]], inputs: { coordinateFormat: "coordinateFormat", projection: "projection" }, decls: 0, vars: 0, template: function ControlMousePositionComponent_Template(rf, ctx) { }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ControlMousePositionComponent, [{
        type: Component,
        args: [{
                selector: 'aol-control-mouseposition',
                template: ``,
            }]
    }], () => [{ type: MapComponent }, { type: i0.ElementRef }], { coordinateFormat: [{
            type: Input
        }], projection: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ControlMousePositionComponent, { className: "ControlMousePositionComponent", filePath: "lib/controls/mouseposition.component.ts", lineNumber: 11 }); })();

const _c0$8 = ["*"];
class ControlOverviewMapComponent {
    constructor(map) {
        this.map = map;
    }
    ngOnInit() {
        this.instance = new OverviewMap(this);
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
        this.instance = new OverviewMap(this);
        this.map.instance.addControl(this.instance);
    }
    static { this.ɵfac = function ControlOverviewMapComponent_Factory(t) { return new (t || ControlOverviewMapComponent)(i0.ɵɵdirectiveInject(MapComponent)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ControlOverviewMapComponent, selectors: [["aol-control-overviewmap"]], inputs: { collapsed: "collapsed", collapseLabel: "collapseLabel", collapsible: "collapsible", label: "label", layers: "layers", target: "target", tipLabel: "tipLabel", view: "view" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0$8, decls: 1, vars: 0, template: function ControlOverviewMapComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ControlOverviewMapComponent, [{
        type: Component,
        args: [{
                selector: 'aol-control-overviewmap',
                template: ` <ng-content></ng-content> `,
            }]
    }], () => [{ type: MapComponent }], { collapsed: [{
            type: Input
        }], collapseLabel: [{
            type: Input
        }], collapsible: [{
            type: Input
        }], label: [{
            type: Input
        }], layers: [{
            type: Input
        }], target: [{
            type: Input
        }], tipLabel: [{
            type: Input
        }], view: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ControlOverviewMapComponent, { className: "ControlOverviewMapComponent", filePath: "lib/controls/overviewmap.component.ts", lineNumber: 11 }); })();

const _c0$7 = ["*"];
class ControlRotateComponent {
    constructor(map) {
        this.map = map;
        // console.log('instancing aol-control-rotate');
    }
    ngOnInit() {
        this.instance = new Rotate(this);
        this.map.instance.addControl(this.instance);
    }
    ngOnDestroy() {
        // console.log('removing aol-control-rotate');
        this.map.instance.removeControl(this.instance);
    }
    static { this.ɵfac = function ControlRotateComponent_Factory(t) { return new (t || ControlRotateComponent)(i0.ɵɵdirectiveInject(MapComponent)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ControlRotateComponent, selectors: [["aol-control-rotate"]], inputs: { className: "className", label: "label", tipLabel: "tipLabel", duration: "duration", autoHide: "autoHide" }, ngContentSelectors: _c0$7, decls: 1, vars: 0, template: function ControlRotateComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ControlRotateComponent, [{
        type: Component,
        args: [{
                selector: 'aol-control-rotate',
                template: ` <ng-content></ng-content> `,
            }]
    }], () => [{ type: MapComponent }], { className: [{
            type: Input
        }], label: [{
            type: Input
        }], tipLabel: [{
            type: Input
        }], duration: [{
            type: Input
        }], autoHide: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ControlRotateComponent, { className: "ControlRotateComponent", filePath: "lib/controls/rotate.component.ts", lineNumber: 9 }); })();

const _c0$6 = ["*"];
class ControlScaleLineComponent {
    constructor(map) {
        this.map = map;
    }
    ngOnInit() {
        this.instance = new ScaleLine(this);
        this.map.instance.addControl(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeControl(this.instance);
    }
    static { this.ɵfac = function ControlScaleLineComponent_Factory(t) { return new (t || ControlScaleLineComponent)(i0.ɵɵdirectiveInject(MapComponent)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ControlScaleLineComponent, selectors: [["aol-control-scaleline"]], inputs: { units: "units" }, ngContentSelectors: _c0$6, decls: 1, vars: 0, template: function ControlScaleLineComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ControlScaleLineComponent, [{
        type: Component,
        args: [{
                selector: 'aol-control-scaleline',
                template: ` <ng-content></ng-content> `,
            }]
    }], () => [{ type: MapComponent }], { units: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ControlScaleLineComponent, { className: "ControlScaleLineComponent", filePath: "lib/controls/scaleline.component.ts", lineNumber: 10 }); })();

const _c0$5 = ["*"];
class ControlZoomComponent {
    constructor(map) {
        this.map = map;
        // console.log('instancing aol-control-zoom');
    }
    ngOnInit() {
        this.instance = new Zoom(this);
        this.map.instance.addControl(this.instance);
    }
    ngOnDestroy() {
        // console.log('removing aol-control-zoom');
        this.map.instance.removeControl(this.instance);
    }
    static { this.ɵfac = function ControlZoomComponent_Factory(t) { return new (t || ControlZoomComponent)(i0.ɵɵdirectiveInject(MapComponent)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ControlZoomComponent, selectors: [["aol-control-zoom"]], inputs: { duration: "duration", zoomInLabel: "zoomInLabel", zoomOutLabel: "zoomOutLabel", zoomInTipLabel: "zoomInTipLabel", zoomOutTipLabel: "zoomOutTipLabel", delta: "delta" }, ngContentSelectors: _c0$5, decls: 1, vars: 0, template: function ControlZoomComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ControlZoomComponent, [{
        type: Component,
        args: [{
                selector: 'aol-control-zoom',
                template: ` <ng-content></ng-content> `,
            }]
    }], () => [{ type: MapComponent }], { duration: [{
            type: Input
        }], zoomInLabel: [{
            type: Input
        }], zoomOutLabel: [{
            type: Input
        }], zoomInTipLabel: [{
            type: Input
        }], zoomOutTipLabel: [{
            type: Input
        }], delta: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ControlZoomComponent, { className: "ControlZoomComponent", filePath: "lib/controls/zoom.component.ts", lineNumber: 9 }); })();

const _c0$4 = ["*"];
class ControlZoomSliderComponent {
    constructor(map) {
        this.map = map;
        // console.log('instancing aol-control-zoomslider');
    }
    ngOnInit() {
        this.instance = new ZoomSlider(this);
        this.map.instance.addControl(this.instance);
    }
    ngOnDestroy() {
        // console.log('removing aol-control-zoomslider');
        this.map.instance.removeControl(this.instance);
    }
    static { this.ɵfac = function ControlZoomSliderComponent_Factory(t) { return new (t || ControlZoomSliderComponent)(i0.ɵɵdirectiveInject(MapComponent)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ControlZoomSliderComponent, selectors: [["aol-control-zoomslider"]], inputs: { className: "className", duration: "duration", maxResolution: "maxResolution", minResolution: "minResolution" }, ngContentSelectors: _c0$4, decls: 1, vars: 0, template: function ControlZoomSliderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ControlZoomSliderComponent, [{
        type: Component,
        args: [{
                selector: 'aol-control-zoomslider',
                template: ` <ng-content></ng-content> `,
            }]
    }], () => [{ type: MapComponent }], { className: [{
            type: Input
        }], duration: [{
            type: Input
        }], maxResolution: [{
            type: Input
        }], minResolution: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ControlZoomSliderComponent, { className: "ControlZoomSliderComponent", filePath: "lib/controls/zoomslider.component.ts", lineNumber: 9 }); })();

const _c0$3 = ["*"];
class ControlZoomToExtentComponent {
    constructor(map) {
        this.map = map;
        // console.log('instancing aol-control-zoomtoextent');
    }
    ngOnInit() {
        this.instance = new ZoomToExtent(this);
        this.map.instance.addControl(this.instance);
    }
    ngOnDestroy() {
        // console.log('removing aol-control-zoomtoextent');
        this.map.instance.removeControl(this.instance);
    }
    static { this.ɵfac = function ControlZoomToExtentComponent_Factory(t) { return new (t || ControlZoomToExtentComponent)(i0.ɵɵdirectiveInject(MapComponent)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ControlZoomToExtentComponent, selectors: [["aol-control-zoomtoextent"]], inputs: { className: "className", label: "label", tipLabel: "tipLabel", extent: "extent" }, ngContentSelectors: _c0$3, decls: 1, vars: 0, template: function ControlZoomToExtentComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ControlZoomToExtentComponent, [{
        type: Component,
        args: [{
                selector: 'aol-control-zoomtoextent',
                template: ` <ng-content></ng-content> `,
            }]
    }], () => [{ type: MapComponent }], { className: [{
            type: Input
        }], label: [{
            type: Input
        }], tipLabel: [{
            type: Input
        }], extent: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ControlZoomToExtentComponent, { className: "ControlZoomToExtentComponent", filePath: "lib/controls/zoomtoextent.component.ts", lineNumber: 10 }); })();

class FormatMVTComponent extends FormatComponent {
    constructor() {
        super();
        this.instance = new MVT(this);
    }
    static { this.ɵfac = function FormatMVTComponent_Factory(t) { return new (t || FormatMVTComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FormatMVTComponent, selectors: [["aol-format-mvt"]], inputs: { featureClass: "featureClass", geometryName: "geometryName", layerName: "layerName", layers: "layers" }, features: [i0.ɵɵProvidersFeature([{ provide: FormatComponent, useExisting: forwardRef(() => FormatMVTComponent) }]), i0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function FormatMVTComponent_Template(rf, ctx) { }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormatMVTComponent, [{
        type: Component,
        args: [{
                selector: 'aol-format-mvt',
                template: '',
                providers: [{ provide: FormatComponent, useExisting: forwardRef(() => FormatMVTComponent) }],
            }]
    }], () => [], { featureClass: [{
            type: Input
        }], geometryName: [{
            type: Input
        }], layerName: [{
            type: Input
        }], layers: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FormatMVTComponent, { className: "FormatMVTComponent", filePath: "lib/formats/mvt.component.ts", lineNumber: 11 }); })();

class DefaultInteractionComponent {
    constructor(map) {
        this.map = map;
    }
    ngOnInit() {
        this.instance = defaults$1(this);
        this.instance.forEach((i) => this.map.instance.addInteraction(i));
    }
    ngOnDestroy() {
        this.instance.forEach((i) => this.map.instance.removeInteraction(i));
    }
    static { this.ɵfac = function DefaultInteractionComponent_Factory(t) { return new (t || DefaultInteractionComponent)(i0.ɵɵdirectiveInject(MapComponent)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DefaultInteractionComponent, selectors: [["aol-interaction-default"]], inputs: { altShiftDragRotate: "altShiftDragRotate", onFocusOnly: "onFocusOnly", doubleClickZoom: "doubleClickZoom", keyboard: "keyboard", mouseWheelZoom: "mouseWheelZoom", shiftDragZoom: "shiftDragZoom", dragPan: "dragPan", pinchRotate: "pinchRotate", pinchZoom: "pinchZoom", zoomDelta: "zoomDelta", zoomDuration: "zoomDuration" }, decls: 0, vars: 0, template: function DefaultInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DefaultInteractionComponent, [{
        type: Component,
        args: [{
                selector: 'aol-interaction-default',
                template: '',
            }]
    }], () => [{ type: MapComponent }], { altShiftDragRotate: [{
            type: Input
        }], onFocusOnly: [{
            type: Input
        }], doubleClickZoom: [{
            type: Input
        }], keyboard: [{
            type: Input
        }], mouseWheelZoom: [{
            type: Input
        }], shiftDragZoom: [{
            type: Input
        }], dragPan: [{
            type: Input
        }], pinchRotate: [{
            type: Input
        }], pinchZoom: [{
            type: Input
        }], zoomDelta: [{
            type: Input
        }], zoomDuration: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DefaultInteractionComponent, { className: "DefaultInteractionComponent", filePath: "lib/interactions/default.component.ts", lineNumber: 10 }); })();

class DoubleClickZoomInteractionComponent {
    constructor(map) {
        this.map = map;
    }
    ngOnInit() {
        this.instance = new DoubleClickZoom(this);
        this.map.instance.addInteraction(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
    static { this.ɵfac = function DoubleClickZoomInteractionComponent_Factory(t) { return new (t || DoubleClickZoomInteractionComponent)(i0.ɵɵdirectiveInject(MapComponent)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DoubleClickZoomInteractionComponent, selectors: [["aol-interaction-doubleclickzoom"]], inputs: { duration: "duration", delta: "delta" }, decls: 0, vars: 0, template: function DoubleClickZoomInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DoubleClickZoomInteractionComponent, [{
        type: Component,
        args: [{
                selector: 'aol-interaction-doubleclickzoom',
                template: '',
            }]
    }], () => [{ type: MapComponent }], { duration: [{
            type: Input
        }], delta: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DoubleClickZoomInteractionComponent, { className: "DoubleClickZoomInteractionComponent", filePath: "lib/interactions/doubleclickzoom.component.ts", lineNumber: 9 }); })();

class DragAndDropInteractionComponent {
    constructor(map) {
        this.map = map;
    }
    ngOnInit() {
        this.instance = new DragAndDrop(this);
        this.map.instance.addInteraction(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
    static { this.ɵfac = function DragAndDropInteractionComponent_Factory(t) { return new (t || DragAndDropInteractionComponent)(i0.ɵɵdirectiveInject(MapComponent)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DragAndDropInteractionComponent, selectors: [["aol-interaction-draganddrop"]], inputs: { formatConstructors: "formatConstructors", projection: "projection", target: "target" }, decls: 0, vars: 0, template: function DragAndDropInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DragAndDropInteractionComponent, [{
        type: Component,
        args: [{
                selector: 'aol-interaction-draganddrop',
                template: '',
            }]
    }], () => [{ type: MapComponent }], { formatConstructors: [{
            type: Input
        }], projection: [{
            type: Input
        }], target: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DragAndDropInteractionComponent, { className: "DragAndDropInteractionComponent", filePath: "lib/interactions/draganddrop.component.ts", lineNumber: 11 }); })();

class DragBoxInteractionComponent {
    constructor(map) {
        this.map = map;
    }
    ngOnInit() {
        this.instance = new DragBox(this);
        this.map.instance.addInteraction(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
    static { this.ɵfac = function DragBoxInteractionComponent_Factory(t) { return new (t || DragBoxInteractionComponent)(i0.ɵɵdirectiveInject(MapComponent)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DragBoxInteractionComponent, selectors: [["aol-interaction-dragbox"]], inputs: { className: "className", condition: "condition", boxEndCondition: "boxEndCondition" }, decls: 0, vars: 0, template: function DragBoxInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DragBoxInteractionComponent, [{
        type: Component,
        args: [{
                selector: 'aol-interaction-dragbox',
                template: '',
            }]
    }], () => [{ type: MapComponent }], { className: [{
            type: Input
        }], condition: [{
            type: Input
        }], boxEndCondition: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DragBoxInteractionComponent, { className: "DragBoxInteractionComponent", filePath: "lib/interactions/dragbox.component.ts", lineNumber: 11 }); })();

class DragPanInteractionComponent {
    constructor(map) {
        this.map = map;
    }
    ngOnInit() {
        this.instance = new DragPan(this);
        this.map.instance.addInteraction(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
    static { this.ɵfac = function DragPanInteractionComponent_Factory(t) { return new (t || DragPanInteractionComponent)(i0.ɵɵdirectiveInject(MapComponent)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DragPanInteractionComponent, selectors: [["aol-interaction-dragpan"]], inputs: { condition: "condition", kinetic: "kinetic" }, decls: 0, vars: 0, template: function DragPanInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DragPanInteractionComponent, [{
        type: Component,
        args: [{
                selector: 'aol-interaction-dragpan',
                template: '',
            }]
    }], () => [{ type: MapComponent }], { condition: [{
            type: Input
        }], kinetic: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DragPanInteractionComponent, { className: "DragPanInteractionComponent", filePath: "lib/interactions/dragpan.component.ts", lineNumber: 11 }); })();

class DragRotateInteractionComponent {
    constructor(map) {
        this.map = map;
    }
    ngOnInit() {
        this.instance = new DragRotate(this);
        this.map.instance.addInteraction(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
    static { this.ɵfac = function DragRotateInteractionComponent_Factory(t) { return new (t || DragRotateInteractionComponent)(i0.ɵɵdirectiveInject(MapComponent)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DragRotateInteractionComponent, selectors: [["aol-interaction-dragrotate"]], inputs: { condition: "condition", duration: "duration" }, decls: 0, vars: 0, template: function DragRotateInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DragRotateInteractionComponent, [{
        type: Component,
        args: [{
                selector: 'aol-interaction-dragrotate',
                template: '',
            }]
    }], () => [{ type: MapComponent }], { condition: [{
            type: Input
        }], duration: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DragRotateInteractionComponent, { className: "DragRotateInteractionComponent", filePath: "lib/interactions/dragrotate.component.ts", lineNumber: 10 }); })();

class DragRotateAndZoomInteractionComponent {
    constructor(map) {
        this.map = map;
    }
    ngOnInit() {
        this.instance = new DragRotateAndZoom(this);
        this.map.instance.addInteraction(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
    static { this.ɵfac = function DragRotateAndZoomInteractionComponent_Factory(t) { return new (t || DragRotateAndZoomInteractionComponent)(i0.ɵɵdirectiveInject(MapComponent)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DragRotateAndZoomInteractionComponent, selectors: [["aol-interaction-dragrotateandzoom"]], inputs: { condition: "condition", duration: "duration" }, decls: 0, vars: 0, template: function DragRotateAndZoomInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DragRotateAndZoomInteractionComponent, [{
        type: Component,
        args: [{
                selector: 'aol-interaction-dragrotateandzoom',
                template: '',
            }]
    }], () => [{ type: MapComponent }], { condition: [{
            type: Input
        }], duration: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DragRotateAndZoomInteractionComponent, { className: "DragRotateAndZoomInteractionComponent", filePath: "lib/interactions/dragrotateandzoom.component.ts", lineNumber: 10 }); })();

class DragZoomInteractionComponent {
    constructor(map) {
        this.map = map;
    }
    ngOnInit() {
        this.instance = new DragZoom(this);
        this.map.instance.addInteraction(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
    static { this.ɵfac = function DragZoomInteractionComponent_Factory(t) { return new (t || DragZoomInteractionComponent)(i0.ɵɵdirectiveInject(MapComponent)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DragZoomInteractionComponent, selectors: [["aol-interaction-dragzoom"]], inputs: { className: "className", condition: "condition", duration: "duration", out: "out" }, decls: 0, vars: 0, template: function DragZoomInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DragZoomInteractionComponent, [{
        type: Component,
        args: [{
                selector: 'aol-interaction-dragzoom',
                template: '',
            }]
    }], () => [{ type: MapComponent }], { className: [{
            type: Input
        }], condition: [{
            type: Input
        }], duration: [{
            type: Input
        }], out: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DragZoomInteractionComponent, { className: "DragZoomInteractionComponent", filePath: "lib/interactions/dragzoom.component.ts", lineNumber: 10 }); })();

class MouseWheelZoomInteractionComponent {
    constructor(map) {
        this.map = map;
    }
    ngOnInit() {
        this.instance = new MouseWheelZoom(this);
        this.map.instance.addInteraction(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
    static { this.ɵfac = function MouseWheelZoomInteractionComponent_Factory(t) { return new (t || MouseWheelZoomInteractionComponent)(i0.ɵɵdirectiveInject(MapComponent)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MouseWheelZoomInteractionComponent, selectors: [["aol-interaction-mousewheelzoom"]], inputs: { duration: "duration", timeout: "timeout", useAnchor: "useAnchor" }, decls: 0, vars: 0, template: function MouseWheelZoomInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MouseWheelZoomInteractionComponent, [{
        type: Component,
        args: [{
                selector: 'aol-interaction-mousewheelzoom',
                template: '',
            }]
    }], () => [{ type: MapComponent }], { duration: [{
            type: Input
        }], timeout: [{
            type: Input
        }], useAnchor: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MouseWheelZoomInteractionComponent, { className: "MouseWheelZoomInteractionComponent", filePath: "lib/interactions/mousewheelzoom.component.ts", lineNumber: 9 }); })();

class PinchZoomInteractionComponent {
    constructor(map) {
        this.map = map;
    }
    ngOnInit() {
        this.instance = new PinchZoom(this);
        this.map.instance.addInteraction(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
    static { this.ɵfac = function PinchZoomInteractionComponent_Factory(t) { return new (t || PinchZoomInteractionComponent)(i0.ɵɵdirectiveInject(MapComponent)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PinchZoomInteractionComponent, selectors: [["aol-interaction-pinchzoom"]], inputs: { duration: "duration", constrainResolution: "constrainResolution" }, decls: 0, vars: 0, template: function PinchZoomInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PinchZoomInteractionComponent, [{
        type: Component,
        args: [{
                selector: 'aol-interaction-pinchzoom',
                template: '',
            }]
    }], () => [{ type: MapComponent }], { duration: [{
            type: Input
        }], constrainResolution: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PinchZoomInteractionComponent, { className: "PinchZoomInteractionComponent", filePath: "lib/interactions/pinchzoom.component.ts", lineNumber: 9 }); })();

class DrawInteractionComponent {
    constructor(map) {
        this.map = map;
        this.olChange = new EventEmitter();
        this.olChangeActive = new EventEmitter();
        this.olDrawAbort = new EventEmitter();
        this.drawEnd = new EventEmitter();
        this.drawStart = new EventEmitter();
        this.olError = new EventEmitter();
        this.propertyChange = new EventEmitter();
    }
    ngOnInit() {
        this.instance = new Draw(this);
        this.instance.on('change', (event) => this.olChange.emit(event));
        this.instance.on('change:active', (event) => this.olChangeActive.emit(event));
        this.instance.on('drawabort', (event) => this.olDrawAbort.emit(event));
        this.instance.on('drawend', (event) => this.drawEnd.emit(event));
        this.instance.on('drawstart', (event) => this.drawStart.emit(event));
        this.instance.on('error', (event) => this.olError.emit(event));
        this.instance.on('propertychange', (event) => this.propertyChange.emit(event));
        this.map.instance.addInteraction(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
    static { this.ɵfac = function DrawInteractionComponent_Factory(t) { return new (t || DrawInteractionComponent)(i0.ɵɵdirectiveInject(MapComponent)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DrawInteractionComponent, selectors: [["aol-interaction-draw"]], inputs: { clickTolerance: "clickTolerance", features: "features", source: "source", snapTolerance: "snapTolerance", type: "type", maxPoints: "maxPoints", minPoints: "minPoints", finishCondition: "finishCondition", style: "style", geometryFunction: "geometryFunction", geometryName: "geometryName", condition: "condition", freehandCondition: "freehandCondition", freehand: "freehand", wrapX: "wrapX" }, outputs: { olChange: "olChange", olChangeActive: "olChangeActive", olDrawAbort: "olDrawAbort", drawEnd: "drawEnd", drawStart: "drawStart", olError: "olError", propertyChange: "propertyChange" }, decls: 0, vars: 0, template: function DrawInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DrawInteractionComponent, [{
        type: Component,
        args: [{
                selector: 'aol-interaction-draw',
                template: '',
            }]
    }], () => [{ type: MapComponent }], { clickTolerance: [{
            type: Input
        }], features: [{
            type: Input
        }], source: [{
            type: Input
        }], snapTolerance: [{
            type: Input
        }], type: [{
            type: Input
        }], maxPoints: [{
            type: Input
        }], minPoints: [{
            type: Input
        }], finishCondition: [{
            type: Input
        }], style: [{
            type: Input
        }], geometryFunction: [{
            type: Input
        }], geometryName: [{
            type: Input
        }], condition: [{
            type: Input
        }], freehandCondition: [{
            type: Input
        }], freehand: [{
            type: Input
        }], wrapX: [{
            type: Input
        }], olChange: [{
            type: Output
        }], olChangeActive: [{
            type: Output
        }], olDrawAbort: [{
            type: Output
        }], drawEnd: [{
            type: Output
        }], drawStart: [{
            type: Output
        }], olError: [{
            type: Output
        }], propertyChange: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DrawInteractionComponent, { className: "DrawInteractionComponent", filePath: "lib/interactions/draw.component.ts", lineNumber: 18 }); })();

class KeyboardPanInteractionComponent {
    constructor(map) {
        this.map = map;
    }
    ngOnInit() {
        this.instance = new KeyboardPan(this);
        this.map.instance.addInteraction(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
    static { this.ɵfac = function KeyboardPanInteractionComponent_Factory(t) { return new (t || KeyboardPanInteractionComponent)(i0.ɵɵdirectiveInject(MapComponent)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: KeyboardPanInteractionComponent, selectors: [["aol-interaction-keyboardpan"]], inputs: { duration: "duration", pixelDelta: "pixelDelta" }, decls: 0, vars: 0, template: function KeyboardPanInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(KeyboardPanInteractionComponent, [{
        type: Component,
        args: [{
                selector: 'aol-interaction-keyboardpan',
                template: '',
            }]
    }], () => [{ type: MapComponent }], { duration: [{
            type: Input
        }], pixelDelta: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(KeyboardPanInteractionComponent, { className: "KeyboardPanInteractionComponent", filePath: "lib/interactions/keyboardpan.component.ts", lineNumber: 9 }); })();

class KeyboardZoomInteractionComponent {
    constructor(map) {
        this.map = map;
    }
    ngOnInit() {
        this.instance = new KeyboardZoom(this);
        this.map.instance.addInteraction(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
    static { this.ɵfac = function KeyboardZoomInteractionComponent_Factory(t) { return new (t || KeyboardZoomInteractionComponent)(i0.ɵɵdirectiveInject(MapComponent)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: KeyboardZoomInteractionComponent, selectors: [["aol-interaction-keyboardpan"]], inputs: { duration: "duration", delta: "delta" }, decls: 0, vars: 0, template: function KeyboardZoomInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(KeyboardZoomInteractionComponent, [{
        type: Component,
        args: [{
                selector: 'aol-interaction-keyboardpan',
                template: '',
            }]
    }], () => [{ type: MapComponent }], { duration: [{
            type: Input
        }], delta: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(KeyboardZoomInteractionComponent, { className: "KeyboardZoomInteractionComponent", filePath: "lib/interactions/keyboardzoom.component.ts", lineNumber: 9 }); })();

class SelectInteractionComponent {
    constructor(map) {
        this.map = map;
        this.olChange = new EventEmitter();
        this.olChangeActive = new EventEmitter();
        this.olError = new EventEmitter();
        this.propertyChange = new EventEmitter();
        this.olSelect = new EventEmitter();
    }
    ngOnInit() {
        this.instance = new Select(this);
        this.instance.on('change', (event) => this.olChange.emit(event));
        this.instance.on('change:active', (event) => this.olChangeActive.emit(event));
        this.instance.on('error', (event) => this.olError.emit(event));
        this.instance.on('propertychange', (event) => this.propertyChange.emit(event));
        this.instance.on('select', (event) => this.olSelect.emit(event));
        this.map.instance.addInteraction(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
    static { this.ɵfac = function SelectInteractionComponent_Factory(t) { return new (t || SelectInteractionComponent)(i0.ɵɵdirectiveInject(MapComponent)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SelectInteractionComponent, selectors: [["aol-interaction-select"]], inputs: { addCondition: "addCondition", condition: "condition", layers: "layers", style: "style", removeCondition: "removeCondition", toggleCondition: "toggleCondition", multi: "multi", features: "features", filter: "filter", wrapX: "wrapX" }, outputs: { olChange: "olChange", olChangeActive: "olChangeActive", olError: "olError", propertyChange: "propertyChange", olSelect: "olSelect" }, decls: 0, vars: 0, template: function SelectInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SelectInteractionComponent, [{
        type: Component,
        args: [{
                selector: 'aol-interaction-select',
                template: '',
            }]
    }], () => [{ type: MapComponent }], { addCondition: [{
            type: Input
        }], condition: [{
            type: Input
        }], layers: [{
            type: Input
        }], style: [{
            type: Input
        }], removeCondition: [{
            type: Input
        }], toggleCondition: [{
            type: Input
        }], multi: [{
            type: Input
        }], features: [{
            type: Input
        }], filter: [{
            type: Input
        }], wrapX: [{
            type: Input
        }], olChange: [{
            type: Output
        }], olChangeActive: [{
            type: Output
        }], olError: [{
            type: Output
        }], propertyChange: [{
            type: Output
        }], olSelect: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SelectInteractionComponent, { className: "SelectInteractionComponent", filePath: "lib/interactions/select.component.ts", lineNumber: 17 }); })();

class ModifyInteractionComponent {
    constructor(map) {
        this.map = map;
        this.olChange = new EventEmitter();
        this.olChangeActive = new EventEmitter();
        this.olError = new EventEmitter();
        this.olModifyEnd = new EventEmitter();
        this.olModifyStart = new EventEmitter();
        this.propertyChange = new EventEmitter();
    }
    ngOnInit() {
        this.instance = new Modify(this);
        this.instance.on('change', (event) => this.olChange.emit(event));
        this.instance.on('change:active', (event) => this.olChangeActive.emit(event));
        this.instance.on('error', (event) => this.olError.emit(event));
        this.instance.on('modifyend', (event) => this.olModifyEnd.emit(event));
        this.instance.on('modifystart', (event) => this.olModifyStart.emit(event));
        this.instance.on('propertychange', (event) => this.propertyChange.emit(event));
        this.map.instance.addInteraction(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
    static { this.ɵfac = function ModifyInteractionComponent_Factory(t) { return new (t || ModifyInteractionComponent)(i0.ɵɵdirectiveInject(MapComponent)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ModifyInteractionComponent, selectors: [["aol-interaction-modify"]], inputs: { condition: "condition", deleteCondition: "deleteCondition", pixelTolerance: "pixelTolerance", style: "style", features: "features", wrapX: "wrapX", source: "source" }, outputs: { olChange: "olChange", olChangeActive: "olChangeActive", olError: "olError", olModifyEnd: "olModifyEnd", olModifyStart: "olModifyStart", propertyChange: "propertyChange" }, decls: 0, vars: 0, template: function ModifyInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModifyInteractionComponent, [{
        type: Component,
        args: [{
                selector: 'aol-interaction-modify',
                template: '',
            }]
    }], () => [{ type: MapComponent }], { condition: [{
            type: Input
        }], deleteCondition: [{
            type: Input
        }], pixelTolerance: [{
            type: Input
        }], style: [{
            type: Input
        }], features: [{
            type: Input
        }], wrapX: [{
            type: Input
        }], source: [{
            type: Input
        }], olChange: [{
            type: Output
        }], olChangeActive: [{
            type: Output
        }], olError: [{
            type: Output
        }], olModifyEnd: [{
            type: Output
        }], olModifyStart: [{
            type: Output
        }], propertyChange: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ModifyInteractionComponent, { className: "ModifyInteractionComponent", filePath: "lib/interactions/modify.component.ts", lineNumber: 18 }); })();

class TranslateInteractionComponent {
    constructor(map) {
        this.map = map;
        this.olChange = new EventEmitter();
        this.olChangeActive = new EventEmitter();
        this.olError = new EventEmitter();
        this.propertyChange = new EventEmitter();
        this.translateEnd = new EventEmitter();
        this.translateStart = new EventEmitter();
        this.translating = new EventEmitter();
    }
    ngOnInit() {
        this.instance = new Translate(this);
        this.instance.on('change', (event) => this.olChange.emit(event));
        this.instance.on('change:active', (event) => this.olChangeActive.emit(event));
        this.instance.on('error', (event) => this.olError.emit(event));
        this.instance.on('propertychange', (event) => this.propertyChange.emit(event));
        this.instance.on('translateend', (event) => this.translateEnd.emit(event));
        this.instance.on('translatestart', (event) => this.translateStart.emit(event));
        this.instance.on('translating', (event) => this.translating.emit(event));
        this.map.instance.addInteraction(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
    static { this.ɵfac = function TranslateInteractionComponent_Factory(t) { return new (t || TranslateInteractionComponent)(i0.ɵɵdirectiveInject(MapComponent)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TranslateInteractionComponent, selectors: [["aol-interaction-translate"]], inputs: { features: "features", layers: "layers", hitTolerance: "hitTolerance" }, outputs: { olChange: "olChange", olChangeActive: "olChangeActive", olError: "olError", propertyChange: "propertyChange", translateEnd: "translateEnd", translateStart: "translateStart", translating: "translating" }, decls: 0, vars: 0, template: function TranslateInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TranslateInteractionComponent, [{
        type: Component,
        args: [{
                selector: 'aol-interaction-translate',
                template: '',
            }]
    }], () => [{ type: MapComponent }], { features: [{
            type: Input
        }], layers: [{
            type: Input
        }], hitTolerance: [{
            type: Input
        }], olChange: [{
            type: Output
        }], olChangeActive: [{
            type: Output
        }], olError: [{
            type: Output
        }], propertyChange: [{
            type: Output
        }], translateEnd: [{
            type: Output
        }], translateStart: [{
            type: Output
        }], translating: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TranslateInteractionComponent, { className: "TranslateInteractionComponent", filePath: "lib/interactions/translate.component.ts", lineNumber: 14 }); })();

const _c0$2 = ["*"];
class AttributionComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    ngOnInit() {
        this.label = this.elementRef.nativeElement.innerHTML;
    }
    static { this.ɵfac = function AttributionComponent_Factory(t) { return new (t || AttributionComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AttributionComponent, selectors: [["aol-attribution"]], ngContentSelectors: _c0$2, decls: 1, vars: 0, template: function AttributionComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AttributionComponent, [{
        type: Component,
        args: [{
                selector: 'aol-attribution',
                template: '<ng-content></ng-content>',
            }]
    }], () => [{ type: i0.ElementRef }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AttributionComponent, { className: "AttributionComponent", filePath: "lib/attribution.component.ts", lineNumber: 7 }); })();

const _c0$1 = ["*"];
class AttributionsComponent {
    constructor(source) {
        this.source = source;
    }
    /* we can do this at the very end */
    ngAfterViewInit() {
        if (this.attributions.length) {
            this.instance = this.attributions.map((cmp) => cmp.label);
            // console.log('setting attributions:', this.instance);
            this.source.instance.setAttributions(this.instance);
        }
    }
    static { this.ɵfac = function AttributionsComponent_Factory(t) { return new (t || AttributionsComponent)(i0.ɵɵdirectiveInject(SourceComponent, 1)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AttributionsComponent, selectors: [["aol-attributions"]], contentQueries: function AttributionsComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, AttributionComponent, 4);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.attributions = _t);
        } }, ngContentSelectors: _c0$1, decls: 1, vars: 0, template: function AttributionsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AttributionsComponent, [{
        type: Component,
        args: [{
                selector: 'aol-attributions',
                template: '<ng-content></ng-content>',
            }]
    }], () => [{ type: SourceComponent, decorators: [{
                type: Host
            }] }], { attributions: [{
            type: ContentChildren,
            args: [AttributionComponent]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AttributionsComponent, { className: "AttributionsComponent", filePath: "lib/attributions.component.ts", lineNumber: 9 }); })();

const _c0 = ["*"];
class SourceUTFGridComponent extends SourceComponent {
    constructor(layer) {
        super(layer);
    }
    ngOnInit() {
        this.instance = new UTFGrid(this);
        this.host.instance.setSource(this.instance);
    }
    static { this.ɵfac = function SourceUTFGridComponent_Factory(t) { return new (t || SourceUTFGridComponent)(i0.ɵɵdirectiveInject(LayerTileComponent, 1)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SourceUTFGridComponent, selectors: [["aol-source-utfgrid"]], inputs: { tileJSON: "tileJSON", url: "url" }, features: [i0.ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(() => SourceUTFGridComponent) }]), i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function SourceUTFGridComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SourceUTFGridComponent, [{
        type: Component,
        args: [{
                selector: 'aol-source-utfgrid',
                template: ` <ng-content></ng-content> `,
                providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceUTFGridComponent) }],
            }]
    }], () => [{ type: LayerTileComponent, decorators: [{
                type: Host
            }] }], { tileJSON: [{
            type: Input
        }], url: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SourceUTFGridComponent, { className: "SourceUTFGridComponent", filePath: "lib/sources/utfgrid.component.ts", lineNumber: 12 }); })();

/*
 * Public API Surface of ng-openlayers
 */
const COMPONENTS = [
    MapComponent,
    ViewComponent,
    GraticuleComponent,
    LayerGroupComponent,
    LayerImageComponent,
    LayerTileComponent,
    LayerVectorComponent,
    LayerVectorTileComponent,
    SourceOsmComponent,
    SourceBingmapsComponent,
    SourceClusterComponent,
    SourceUTFGridComponent,
    SourceVectorComponent,
    SourceXYZComponent,
    SourceVectorTileComponent,
    SourceTileWMSComponent,
    SourceTileWMTSComponent,
    SourceTileJSONComponent,
    SourceGeoJSONComponent,
    SourceImageStaticComponent,
    SourceImageWMSComponent,
    SourceImageArcGISRestComponent,
    SourceRasterComponent,
    FeatureComponent,
    GeometryLinestringComponent,
    GeometryMultiLinestringComponent,
    GeometryMultiPointComponent,
    GeometryMultiPolygonComponent,
    GeometryPointComponent,
    GeometryPolygonComponent,
    GeometryCircleComponent,
    CoordinateComponent,
    CollectionCoordinatesComponent,
    StyleComponent,
    StyleCircleComponent,
    StyleFillComponent,
    StyleIconComponent,
    StyleStrokeComponent,
    StyleTextComponent,
    DefaultControlComponent,
    ControlComponent,
    ControlAttributionComponent,
    ControlFullScreenComponent,
    ControlMousePositionComponent,
    ControlOverviewMapComponent,
    ControlRotateComponent,
    ControlScaleLineComponent,
    ControlZoomComponent,
    ControlZoomSliderComponent,
    ControlZoomToExtentComponent,
    FormatMVTComponent,
    TileGridComponent,
    TileGridWMTSComponent,
    DefaultInteractionComponent,
    DoubleClickZoomInteractionComponent,
    DragAndDropInteractionComponent,
    DragBoxInteractionComponent,
    DragPanInteractionComponent,
    DragRotateInteractionComponent,
    DragRotateAndZoomInteractionComponent,
    DragZoomInteractionComponent,
    MouseWheelZoomInteractionComponent,
    PinchZoomInteractionComponent,
    DrawInteractionComponent,
    SelectInteractionComponent,
    ModifyInteractionComponent,
    TranslateInteractionComponent,
    OverlayComponent,
    ContentComponent,
    AttributionsComponent,
    AttributionComponent,
];
class AngularOpenlayersModule {
    static { this.ɵfac = function AngularOpenlayersModule_Factory(t) { return new (t || AngularOpenlayersModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AngularOpenlayersModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AngularOpenlayersModule, [{
        type: NgModule,
        args: [{
                declarations: COMPONENTS,
                imports: [CommonModule],
                exports: COMPONENTS,
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AngularOpenlayersModule, { declarations: [MapComponent,
        ViewComponent,
        GraticuleComponent,
        LayerGroupComponent,
        LayerImageComponent,
        LayerTileComponent,
        LayerVectorComponent,
        LayerVectorTileComponent,
        SourceOsmComponent,
        SourceBingmapsComponent,
        SourceClusterComponent,
        SourceUTFGridComponent,
        SourceVectorComponent,
        SourceXYZComponent,
        SourceVectorTileComponent,
        SourceTileWMSComponent,
        SourceTileWMTSComponent,
        SourceTileJSONComponent,
        SourceGeoJSONComponent,
        SourceImageStaticComponent,
        SourceImageWMSComponent,
        SourceImageArcGISRestComponent,
        SourceRasterComponent,
        FeatureComponent,
        GeometryLinestringComponent,
        GeometryMultiLinestringComponent,
        GeometryMultiPointComponent,
        GeometryMultiPolygonComponent,
        GeometryPointComponent,
        GeometryPolygonComponent,
        GeometryCircleComponent,
        CoordinateComponent,
        CollectionCoordinatesComponent,
        StyleComponent,
        StyleCircleComponent,
        StyleFillComponent,
        StyleIconComponent,
        StyleStrokeComponent,
        StyleTextComponent,
        DefaultControlComponent,
        ControlComponent,
        ControlAttributionComponent,
        ControlFullScreenComponent,
        ControlMousePositionComponent,
        ControlOverviewMapComponent,
        ControlRotateComponent,
        ControlScaleLineComponent,
        ControlZoomComponent,
        ControlZoomSliderComponent,
        ControlZoomToExtentComponent,
        FormatMVTComponent,
        TileGridComponent,
        TileGridWMTSComponent,
        DefaultInteractionComponent,
        DoubleClickZoomInteractionComponent,
        DragAndDropInteractionComponent,
        DragBoxInteractionComponent,
        DragPanInteractionComponent,
        DragRotateInteractionComponent,
        DragRotateAndZoomInteractionComponent,
        DragZoomInteractionComponent,
        MouseWheelZoomInteractionComponent,
        PinchZoomInteractionComponent,
        DrawInteractionComponent,
        SelectInteractionComponent,
        ModifyInteractionComponent,
        TranslateInteractionComponent,
        OverlayComponent,
        ContentComponent,
        AttributionsComponent,
        AttributionComponent], imports: [CommonModule], exports: [MapComponent,
        ViewComponent,
        GraticuleComponent,
        LayerGroupComponent,
        LayerImageComponent,
        LayerTileComponent,
        LayerVectorComponent,
        LayerVectorTileComponent,
        SourceOsmComponent,
        SourceBingmapsComponent,
        SourceClusterComponent,
        SourceUTFGridComponent,
        SourceVectorComponent,
        SourceXYZComponent,
        SourceVectorTileComponent,
        SourceTileWMSComponent,
        SourceTileWMTSComponent,
        SourceTileJSONComponent,
        SourceGeoJSONComponent,
        SourceImageStaticComponent,
        SourceImageWMSComponent,
        SourceImageArcGISRestComponent,
        SourceRasterComponent,
        FeatureComponent,
        GeometryLinestringComponent,
        GeometryMultiLinestringComponent,
        GeometryMultiPointComponent,
        GeometryMultiPolygonComponent,
        GeometryPointComponent,
        GeometryPolygonComponent,
        GeometryCircleComponent,
        CoordinateComponent,
        CollectionCoordinatesComponent,
        StyleComponent,
        StyleCircleComponent,
        StyleFillComponent,
        StyleIconComponent,
        StyleStrokeComponent,
        StyleTextComponent,
        DefaultControlComponent,
        ControlComponent,
        ControlAttributionComponent,
        ControlFullScreenComponent,
        ControlMousePositionComponent,
        ControlOverviewMapComponent,
        ControlRotateComponent,
        ControlScaleLineComponent,
        ControlZoomComponent,
        ControlZoomSliderComponent,
        ControlZoomToExtentComponent,
        FormatMVTComponent,
        TileGridComponent,
        TileGridWMTSComponent,
        DefaultInteractionComponent,
        DoubleClickZoomInteractionComponent,
        DragAndDropInteractionComponent,
        DragBoxInteractionComponent,
        DragPanInteractionComponent,
        DragRotateInteractionComponent,
        DragRotateAndZoomInteractionComponent,
        DragZoomInteractionComponent,
        MouseWheelZoomInteractionComponent,
        PinchZoomInteractionComponent,
        DrawInteractionComponent,
        SelectInteractionComponent,
        ModifyInteractionComponent,
        TranslateInteractionComponent,
        OverlayComponent,
        ContentComponent,
        AttributionsComponent,
        AttributionComponent] }); })();

/**
 * Generated bundle index. Do not edit.
 */

export { AngularOpenlayersModule, AttributionComponent, AttributionsComponent, CollectionCoordinatesComponent, ContentComponent, ControlAttributionComponent, ControlComponent, ControlFullScreenComponent, ControlMousePositionComponent, ControlOverviewMapComponent, ControlRotateComponent, ControlScaleLineComponent, ControlZoomComponent, ControlZoomSliderComponent, ControlZoomToExtentComponent, CoordinateComponent, DefaultControlComponent, DefaultInteractionComponent, DoubleClickZoomInteractionComponent, DragAndDropInteractionComponent, DragBoxInteractionComponent, DragPanInteractionComponent, DragRotateAndZoomInteractionComponent, DragRotateInteractionComponent, DragZoomInteractionComponent, DrawInteractionComponent, FeatureComponent, FormatMVTComponent, GeometryCircleComponent, GeometryLinestringComponent, GeometryMultiLinestringComponent, GeometryMultiPointComponent, GeometryMultiPolygonComponent, GeometryPointComponent, GeometryPolygonComponent, GraticuleComponent, KeyboardPanInteractionComponent, KeyboardZoomInteractionComponent, LayerComponent, LayerGroupComponent, LayerImageComponent, LayerTileComponent, LayerVectorComponent, LayerVectorTileComponent, MapComponent, ModifyInteractionComponent, MouseWheelZoomInteractionComponent, OverlayComponent, PinchZoomInteractionComponent, SelectInteractionComponent, SimpleGeometryComponent, SourceBingmapsComponent, SourceClusterComponent, SourceComponent, SourceGeoJSONComponent, SourceImageArcGISRestComponent, SourceImageStaticComponent, SourceImageWMSComponent, SourceOsmComponent, SourceRasterComponent, SourceTileJSONComponent, SourceTileWMSComponent, SourceTileWMTSComponent, SourceUTFGridComponent, SourceVectorComponent, SourceVectorTileComponent, SourceXYZComponent, StyleCircleComponent, StyleComponent, StyleFillComponent, StyleIconComponent, StyleStrokeComponent, StyleTextComponent, TileGridComponent, TileGridWMTSComponent, TranslateInteractionComponent, ViewComponent };
//# sourceMappingURL=ng-openlayers.mjs.map
