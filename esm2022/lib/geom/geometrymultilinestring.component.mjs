import { Component } from '@angular/core';
import { SimpleGeometryComponent } from './simplegeometry.component';
import { MultiLineString } from 'ol/geom';
import * as i0 from "@angular/core";
import * as i1 from "../map.component";
import * as i2 from "../feature.component";
const _c0 = ["*"];
export class GeometryMultiLinestringComponent extends SimpleGeometryComponent {
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
    static { this.ɵfac = function GeometryMultiLinestringComponent_Factory(t) { return new (t || GeometryMultiLinestringComponent)(i0.ɵɵdirectiveInject(i1.MapComponent), i0.ɵɵdirectiveInject(i2.FeatureComponent)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GeometryMultiLinestringComponent, selectors: [["aol-geometry-multilinestring"]], features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function GeometryMultiLinestringComponent_Template(rf, ctx) { if (rf & 1) {
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
    }], () => [{ type: i1.MapComponent }, { type: i2.FeatureComponent }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(GeometryMultiLinestringComponent, { className: "GeometryMultiLinestringComponent", filePath: "lib/geom/geometrymultilinestring.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvbWV0cnltdWx0aWxpbmVzdHJpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9uZy1vcGVubGF5ZXJzL3NyYy9saWIvZ2VvbS9nZW9tZXRyeW11bHRpbGluZXN0cmluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUVyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sU0FBUyxDQUFDOzs7OztBQU0xQyxNQUFNLE9BQU8sZ0NBQWlDLFNBQVEsdUJBQXVCO0lBSTNFLFlBQVksR0FBaUIsRUFBRSxJQUFzQjtRQUNuRCxLQUFLLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBSlosa0JBQWEsR0FBRywwQkFBMEIsQ0FBQztJQUtsRCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxlQUFlLENBQUM7WUFDbEM7Z0JBQ0UsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNQO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ25CLENBQUM7aUdBaEJVLGdDQUFnQztvRUFBaEMsZ0NBQWdDOztZQUYvQixrQkFBeUI7OztpRkFFMUIsZ0NBQWdDO2NBSjVDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsOEJBQThCO2dCQUN4QyxRQUFRLEVBQUUsNkJBQTZCO2FBQ3hDOztrRkFDWSxnQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmVhdHVyZUNvbXBvbmVudCB9IGZyb20gJy4uL2ZlYXR1cmUuY29tcG9uZW50JztcbmltcG9ydCB7IFNpbXBsZUdlb21ldHJ5Q29tcG9uZW50IH0gZnJvbSAnLi9zaW1wbGVnZW9tZXRyeS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNdWx0aUxpbmVTdHJpbmcgfSBmcm9tICdvbC9nZW9tJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLWdlb21ldHJ5LW11bHRpbGluZXN0cmluZycsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbn0pXG5leHBvcnQgY2xhc3MgR2VvbWV0cnlNdWx0aUxpbmVzdHJpbmdDb21wb25lbnQgZXh0ZW5kcyBTaW1wbGVHZW9tZXRyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBjb21wb25lbnRUeXBlID0gJ2dlb21ldHJ5LW11bHRpbGluZXN0cmluZyc7XG4gIHB1YmxpYyBpbnN0YW5jZTogTXVsdGlMaW5lU3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKG1hcDogTWFwQ29tcG9uZW50LCBob3N0OiBGZWF0dXJlQ29tcG9uZW50KSB7XG4gICAgc3VwZXIobWFwLCBob3N0KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgTXVsdGlMaW5lU3RyaW5nKFtcbiAgICAgIFtcbiAgICAgICAgWzAsIDBdLFxuICAgICAgICBbMSwgMV0sXG4gICAgICBdLFxuICAgIF0pO1xuICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gIH1cbn1cbiJdfQ==