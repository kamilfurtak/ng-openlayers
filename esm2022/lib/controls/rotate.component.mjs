import { Component, Input } from '@angular/core';
import { Rotate } from 'ol/control';
import * as i0 from "@angular/core";
import * as i1 from "../map.component";
const _c0 = ["*"];
export class ControlRotateComponent {
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
    static { this.ɵfac = function ControlRotateComponent_Factory(t) { return new (t || ControlRotateComponent)(i0.ɵɵdirectiveInject(i1.MapComponent)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ControlRotateComponent, selectors: [["aol-control-rotate"]], inputs: { className: "className", label: "label", tipLabel: "tipLabel", duration: "duration", autoHide: "autoHide" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function ControlRotateComponent_Template(rf, ctx) { if (rf & 1) {
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
    }], () => [{ type: i1.MapComponent }], { className: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm90YXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvbmctb3BlbmxheWVycy9zcmMvbGliL2NvbnRyb2xzL3JvdGF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxZQUFZLENBQUM7Ozs7QUFPcEMsTUFBTSxPQUFPLHNCQUFzQjtJQWNqQyxZQUFvQixHQUFpQjtRQUFqQixRQUFHLEdBQUgsR0FBRyxDQUFjO1FBQ25DLGdEQUFnRDtJQUNsRCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsV0FBVztRQUNULDhDQUE4QztRQUM5QyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pELENBQUM7dUZBMUJVLHNCQUFzQjtvRUFBdEIsc0JBQXNCOztZQUZyQixrQkFBeUI7OztpRkFFMUIsc0JBQXNCO2NBSmxDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixRQUFRLEVBQUUsNkJBQTZCO2FBQ3hDOzZDQUdDLFNBQVM7a0JBRFIsS0FBSztZQUdOLEtBQUs7a0JBREosS0FBSztZQUdOLFFBQVE7a0JBRFAsS0FBSztZQUdOLFFBQVE7a0JBRFAsS0FBSztZQUdOLFFBQVE7a0JBRFAsS0FBSzs7a0ZBVEssc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdGF0ZSB9IGZyb20gJ29sL2NvbnRyb2wnO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1jb250cm9sLXJvdGF0ZScsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbn0pXG5leHBvcnQgY2xhc3MgQ29udHJvbFJvdGF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KClcbiAgY2xhc3NOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHRpcExhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGR1cmF0aW9uOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIGF1dG9IaWRlOiBib29sZWFuO1xuXG4gIGluc3RhbmNlOiBSb3RhdGU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdpbnN0YW5jaW5nIGFvbC1jb250cm9sLXJvdGF0ZScpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBSb3RhdGUodGhpcyk7XG4gICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkQ29udHJvbCh0aGlzLmluc3RhbmNlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdyZW1vdmluZyBhb2wtY29udHJvbC1yb3RhdGUnKTtcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVDb250cm9sKHRoaXMuaW5zdGFuY2UpO1xuICB9XG59XG4iXX0=