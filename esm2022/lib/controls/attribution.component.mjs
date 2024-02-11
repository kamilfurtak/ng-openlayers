import { Component, Input } from '@angular/core';
import { Attribution } from 'ol/control';
import * as i0 from "@angular/core";
import * as i1 from "../map.component";
export class ControlAttributionComponent {
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
    static { this.ɵfac = function ControlAttributionComponent_Factory(t) { return new (t || ControlAttributionComponent)(i0.ɵɵdirectiveInject(i1.MapComponent), i0.ɵɵdirectiveInject(i0.ElementRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ControlAttributionComponent, selectors: [["aol-control-attribution"]], inputs: { collapsible: "collapsible" }, decls: 0, vars: 0, template: function ControlAttributionComponent_Template(rf, ctx) { }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ControlAttributionComponent, [{
        type: Component,
        args: [{
                selector: 'aol-control-attribution',
                template: ``,
            }]
    }], () => [{ type: i1.MapComponent }, { type: i0.ElementRef }], { collapsible: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ControlAttributionComponent, { className: "ControlAttributionComponent", filePath: "lib/controls/attribution.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9uZy1vcGVubGF5ZXJzL3NyYy9saWIvY29udHJvbHMvYXR0cmlidXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sWUFBWSxDQUFDOzs7QUFPekMsTUFBTSxPQUFPLDJCQUEyQjtJQVF0QyxZQUNVLEdBQWlCLEVBQ2pCLE9BQW1CO1FBRG5CLFFBQUcsR0FBSCxHQUFHLENBQWM7UUFDakIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQU50QixrQkFBYSxHQUFHLFNBQVMsQ0FBQztJQU85QixDQUFDO0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDekMsc0RBQXNEO1FBQ3RELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsV0FBVztRQUNULG1EQUFtRDtRQUNuRCxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pELENBQUM7NEZBdkJVLDJCQUEyQjtvRUFBM0IsMkJBQTJCOztpRkFBM0IsMkJBQTJCO2NBSnZDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxRQUFRLEVBQUUsRUFBRTthQUNiO3NFQUdDLFdBQVc7a0JBRFYsS0FBSzs7a0ZBREssMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEF0dHJpYnV0aW9uIH0gZnJvbSAnb2wvY29udHJvbCc7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLWNvbnRyb2wtYXR0cmlidXRpb24nLFxuICB0ZW1wbGF0ZTogYGAsXG59KVxuZXhwb3J0IGNsYXNzIENvbnRyb2xBdHRyaWJ1dGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KClcbiAgY29sbGFwc2libGU6IGJvb2xlYW47XG5cbiAgcHVibGljIGNvbXBvbmVudFR5cGUgPSAnY29udHJvbCc7XG4gIGluc3RhbmNlOiBBdHRyaWJ1dGlvbjtcbiAgdGFyZ2V0OiBIVE1MRWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50LFxuICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZlxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy50YXJnZXQgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICAvLyBjb25zb2xlLmxvZygnb2wuY29udHJvbC5BdHRyaWJ1dGlvbiBpbml0OiAnLCB0aGlzKTtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IEF0dHJpYnV0aW9uKHRoaXMpO1xuICAgIHRoaXMubWFwLmluc3RhbmNlLmFkZENvbnRyb2wodGhpcy5pbnN0YW5jZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygncmVtb3ZpbmcgYW9sLWNvbnRyb2wtYXR0cmlidXRpb24nKTtcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVDb250cm9sKHRoaXMuaW5zdGFuY2UpO1xuICB9XG59XG4iXX0=