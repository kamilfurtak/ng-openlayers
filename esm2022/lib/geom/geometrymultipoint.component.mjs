import { Component } from '@angular/core';
import { SimpleGeometryComponent } from './simplegeometry.component';
import { MultiPoint } from 'ol/geom';
import * as i0 from "@angular/core";
import * as i1 from "../map.component";
import * as i2 from "../feature.component";
const _c0 = ["*"];
export class GeometryMultiPointComponent extends SimpleGeometryComponent {
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
    static { this.ɵfac = function GeometryMultiPointComponent_Factory(t) { return new (t || GeometryMultiPointComponent)(i0.ɵɵdirectiveInject(i1.MapComponent), i0.ɵɵdirectiveInject(i2.FeatureComponent)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GeometryMultiPointComponent, selectors: [["aol-geometry-multipoint"]], features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function GeometryMultiPointComponent_Template(rf, ctx) { if (rf & 1) {
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
    }], () => [{ type: i1.MapComponent }, { type: i2.FeatureComponent }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(GeometryMultiPointComponent, { className: "GeometryMultiPointComponent", filePath: "lib/geom/geometrymultipoint.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvbWV0cnltdWx0aXBvaW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvbmctb3BlbmxheWVycy9zcmMvbGliL2dlb20vZ2VvbWV0cnltdWx0aXBvaW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRWxELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRXJFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxTQUFTLENBQUM7Ozs7O0FBTXJDLE1BQU0sT0FBTywyQkFBNEIsU0FBUSx1QkFBdUI7SUFJdEUsWUFBWSxHQUFpQixFQUFFLElBQXNCO1FBQ25ELEtBQUssQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFKWixrQkFBYSxHQUFHLHFCQUFxQixDQUFDO0lBSzdDLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFVBQVUsQ0FBQztZQUM3QixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDUCxDQUFDLENBQUM7UUFDSCxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbkIsQ0FBQzs0RkFkVSwyQkFBMkI7b0VBQTNCLDJCQUEyQjs7WUFGMUIsa0JBQXlCOzs7aUZBRTFCLDJCQUEyQjtjQUp2QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsUUFBUSxFQUFFLDZCQUE2QjthQUN4Qzs7a0ZBQ1ksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZlYXR1cmVDb21wb25lbnQgfSBmcm9tICcuLi9mZWF0dXJlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaW1wbGVHZW9tZXRyeUNvbXBvbmVudCB9IGZyb20gJy4vc2ltcGxlZ2VvbWV0cnkuY29tcG9uZW50JztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTXVsdGlQb2ludCB9IGZyb20gJ29sL2dlb20nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtZ2VvbWV0cnktbXVsdGlwb2ludCcsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbn0pXG5leHBvcnQgY2xhc3MgR2VvbWV0cnlNdWx0aVBvaW50Q29tcG9uZW50IGV4dGVuZHMgU2ltcGxlR2VvbWV0cnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgY29tcG9uZW50VHlwZSA9ICdnZW9tZXRyeS1tdWx0aXBvaW50JztcbiAgcHVibGljIGluc3RhbmNlOiBNdWx0aVBvaW50O1xuXG4gIGNvbnN0cnVjdG9yKG1hcDogTWFwQ29tcG9uZW50LCBob3N0OiBGZWF0dXJlQ29tcG9uZW50KSB7XG4gICAgc3VwZXIobWFwLCBob3N0KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgTXVsdGlQb2ludChbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMSwgMV0sXG4gICAgXSk7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcbiAgfVxufVxuIl19