import { Component } from '@angular/core';
import { SimpleGeometryComponent } from './simplegeometry.component';
import { MultiPolygon } from 'ol/geom';
import * as i0 from "@angular/core";
import * as i1 from "../map.component";
import * as i2 from "../feature.component";
const _c0 = ["*"];
export class GeometryMultiPolygonComponent extends SimpleGeometryComponent {
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
    static { this.ɵfac = function GeometryMultiPolygonComponent_Factory(t) { return new (t || GeometryMultiPolygonComponent)(i0.ɵɵdirectiveInject(i1.MapComponent), i0.ɵɵdirectiveInject(i2.FeatureComponent)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GeometryMultiPolygonComponent, selectors: [["aol-geometry-multipolygon"]], features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function GeometryMultiPolygonComponent_Template(rf, ctx) { if (rf & 1) {
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
    }], () => [{ type: i1.MapComponent }, { type: i2.FeatureComponent }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(GeometryMultiPolygonComponent, { className: "GeometryMultiPolygonComponent", filePath: "lib/geom/geometrymultipolygon.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvbWV0cnltdWx0aXBvbHlnb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9uZy1vcGVubGF5ZXJzL3NyYy9saWIvZ2VvbS9nZW9tZXRyeW11bHRpcG9seWdvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUVyRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sU0FBUyxDQUFDOzs7OztBQU12QyxNQUFNLE9BQU8sNkJBQThCLFNBQVEsdUJBQXVCO0lBSXhFLFlBQVksR0FBaUIsRUFBRSxJQUFzQjtRQUNuRCxLQUFLLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBSlosa0JBQWEsR0FBRyx1QkFBdUIsQ0FBQztJQUsvQyxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxZQUFZLENBQUM7WUFDL0I7Z0JBQ0U7b0JBQ0UsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQ1A7YUFDRjtTQUNGLENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNuQixDQUFDOzhGQW5CVSw2QkFBNkI7b0VBQTdCLDZCQUE2Qjs7WUFGNUIsa0JBQXlCOzs7aUZBRTFCLDZCQUE2QjtjQUp6QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsUUFBUSxFQUFFLDZCQUE2QjthQUN4Qzs7a0ZBQ1ksNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZlYXR1cmVDb21wb25lbnQgfSBmcm9tICcuLi9mZWF0dXJlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaW1wbGVHZW9tZXRyeUNvbXBvbmVudCB9IGZyb20gJy4vc2ltcGxlZ2VvbWV0cnkuY29tcG9uZW50JztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTXVsdGlQb2x5Z29uIH0gZnJvbSAnb2wvZ2VvbSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1nZW9tZXRyeS1tdWx0aXBvbHlnb24nLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG59KVxuZXhwb3J0IGNsYXNzIEdlb21ldHJ5TXVsdGlQb2x5Z29uQ29tcG9uZW50IGV4dGVuZHMgU2ltcGxlR2VvbWV0cnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgY29tcG9uZW50VHlwZSA9ICdnZW9tZXRyeS1tdWx0aXBvbHlnb24nO1xuICBwdWJsaWMgaW5zdGFuY2U6IE11bHRpUG9seWdvbjtcblxuICBjb25zdHJ1Y3RvcihtYXA6IE1hcENvbXBvbmVudCwgaG9zdDogRmVhdHVyZUNvbXBvbmVudCkge1xuICAgIHN1cGVyKG1hcCwgaG9zdCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IE11bHRpUG9seWdvbihbXG4gICAgICBbXG4gICAgICAgIFtcbiAgICAgICAgICBbMCwgMF0sXG4gICAgICAgICAgWzEsIDFdLFxuICAgICAgICAgIFswLCAxXSxcbiAgICAgICAgXSxcbiAgICAgIF0sXG4gICAgXSk7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcbiAgfVxufVxuIl19