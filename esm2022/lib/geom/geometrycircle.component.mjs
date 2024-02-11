import { Component, Input } from '@angular/core';
import { Circle } from 'ol/geom';
import { SimpleGeometryComponent } from './simplegeometry.component';
import * as i0 from "@angular/core";
import * as i1 from "../map.component";
import * as i2 from "../feature.component";
const _c0 = ["*"];
export class GeometryCircleComponent extends SimpleGeometryComponent {
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
    static { this.ɵfac = function GeometryCircleComponent_Factory(t) { return new (t || GeometryCircleComponent)(i0.ɵɵdirectiveInject(i1.MapComponent), i0.ɵɵdirectiveInject(i2.FeatureComponent)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GeometryCircleComponent, selectors: [["aol-geometry-circle"]], inputs: { radius: "radius" }, features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function GeometryCircleComponent_Template(rf, ctx) { if (rf & 1) {
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
    }], () => [{ type: i1.MapComponent }, { type: i2.FeatureComponent }], { radius: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(GeometryCircleComponent, { className: "GeometryCircleComponent", filePath: "lib/geom/geometrycircle.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvbWV0cnljaXJjbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9uZy1vcGVubGF5ZXJzL3NyYy9saWIvZ2VvbS9nZW9tZXRyeWNpcmNsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFekQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNqQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7QUFPckUsTUFBTSxPQUFPLHVCQUF3QixTQUFRLHVCQUF1QjtJQUNsRSxJQUNJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUNELElBQUksTUFBTSxDQUFDLE1BQWM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUtELFlBQVksR0FBaUIsRUFBRSxJQUFzQjtRQUNuRCxLQUFLLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBSlosa0JBQWEsR0FBRyxpQkFBaUIsQ0FBQztRQUt2Qyx3RUFBd0U7UUFDeEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7d0ZBaEJVLHVCQUF1QjtvRUFBdkIsdUJBQXVCOztZQUZ0QixrQkFBeUI7OztpRkFFMUIsdUJBQXVCO2NBSm5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixRQUFRLEVBQUUsNkJBQTZCO2FBQ3hDOzRFQUdLLE1BQU07a0JBRFQsS0FBSzs7a0ZBREssdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGZWF0dXJlQ29tcG9uZW50IH0gZnJvbSAnLi4vZmVhdHVyZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2lyY2xlIH0gZnJvbSAnb2wvZ2VvbSc7XG5pbXBvcnQgeyBTaW1wbGVHZW9tZXRyeUNvbXBvbmVudCB9IGZyb20gJy4vc2ltcGxlZ2VvbWV0cnkuY29tcG9uZW50JztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtZ2VvbWV0cnktY2lyY2xlJyxcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiBgLFxufSlcbmV4cG9ydCBjbGFzcyBHZW9tZXRyeUNpcmNsZUNvbXBvbmVudCBleHRlbmRzIFNpbXBsZUdlb21ldHJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgZ2V0IHJhZGl1cygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlLmdldFJhZGl1cygpO1xuICB9XG4gIHNldCByYWRpdXMocmFkaXVzOiBudW1iZXIpIHtcbiAgICB0aGlzLmluc3RhbmNlLnNldFJhZGl1cyhyYWRpdXMpO1xuICB9XG5cbiAgcHVibGljIGNvbXBvbmVudFR5cGUgPSAnZ2VvbWV0cnktY2lyY2xlJztcbiAgcHVibGljIGluc3RhbmNlOiBDaXJjbGU7XG5cbiAgY29uc3RydWN0b3IobWFwOiBNYXBDb21wb25lbnQsIGhvc3Q6IEZlYXR1cmVDb21wb25lbnQpIHtcbiAgICBzdXBlcihtYXAsIGhvc3QpO1xuICAgIC8vIGRlZmF1bHRpbmcgY29vcmRpbmF0ZXMgdG8gWzAsMF0uIFRvIGJlIG92ZXJyaWRkZW4gaW4gY2hpbGQgY29tcG9uZW50LlxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgQ2lyY2xlKFswLCAwXSk7XG4gIH1cbn1cbiJdfQ==