import { Component, Host, Input, forwardRef } from '@angular/core';
import { Vector } from 'ol/source';
import { SourceComponent } from './source.component';
import * as i0 from "@angular/core";
import * as i1 from "../layers/layervector.component";
const _c0 = ["*"];
export class SourceVectorComponent extends SourceComponent {
    constructor(layer) {
        super(layer);
    }
    ngOnInit() {
        this.instance = new Vector(this);
        this.host.instance.setSource(this.instance);
    }
    static { this.ɵfac = function SourceVectorComponent_Factory(t) { return new (t || SourceVectorComponent)(i0.ɵɵdirectiveInject(i1.LayerVectorComponent, 1)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SourceVectorComponent, selectors: [["aol-source-vector"]], inputs: { overlaps: "overlaps", useSpatialIndex: "useSpatialIndex", wrapX: "wrapX", url: "url", format: "format", strategy: "strategy" }, features: [i0.ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(() => SourceVectorComponent) }]), i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function SourceVectorComponent_Template(rf, ctx) { if (rf & 1) {
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
    }], () => [{ type: i1.LayerVectorComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvbmctb3BlbmxheWVycy9zcmMvbGliL3NvdXJjZXMvdmVjdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQVUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFHbkMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7O0FBUXJELE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxlQUFlO0lBZ0J4RCxZQUFvQixLQUEyQjtRQUM3QyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDZixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QyxDQUFDO3NGQXZCVSxxQkFBcUI7b0VBQXJCLHFCQUFxQixpTkFGckIsQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLENBQUM7O1lBRG5GLGtCQUF5Qjs7O2lGQUcxQixxQkFBcUI7Y0FMakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxzQkFBc0IsQ0FBQyxFQUFFLENBQUM7YUFDaEc7O3NCQWlCYyxJQUFJO3FCQWRqQixRQUFRO2tCQURQLEtBQUs7WUFHTixlQUFlO2tCQURkLEtBQUs7WUFHTixLQUFLO2tCQURKLEtBQUs7WUFHTixHQUFHO2tCQURGLEtBQUs7WUFHTixNQUFNO2tCQURMLEtBQUs7WUFHTixRQUFRO2tCQURQLEtBQUs7O2tGQVhLLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdCwgSW5wdXQsIE9uSW5pdCwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnb2wvc291cmNlJztcbmltcG9ydCBGZWF0dXJlIGZyb20gJ29sL2Zvcm1hdC9GZWF0dXJlJztcbmltcG9ydCB7IExheWVyVmVjdG9yQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVydmVjdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9hZGluZ1N0cmF0ZWd5IH0gZnJvbSAnb2wvc291cmNlL1ZlY3Rvcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1zb3VyY2UtdmVjdG9yJyxcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiBgLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IFNvdXJjZUNvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU291cmNlVmVjdG9yQ29tcG9uZW50KSB9XSxcbn0pXG5leHBvcnQgY2xhc3MgU291cmNlVmVjdG9yQ29tcG9uZW50IGV4dGVuZHMgU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgb3ZlcmxhcHM6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHVzZVNwYXRpYWxJbmRleDogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgd3JhcFg6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHVybDogc3RyaW5nO1xuICBASW5wdXQoKVxuICBmb3JtYXQ6IEZlYXR1cmU7XG4gIEBJbnB1dCgpXG4gIHN0cmF0ZWd5OiBMb2FkaW5nU3RyYXRlZ3k7XG5cbiAgaW5zdGFuY2U6IFZlY3RvcjtcblxuICBjb25zdHJ1Y3RvcihASG9zdCgpIGxheWVyOiBMYXllclZlY3RvckNvbXBvbmVudCkge1xuICAgIHN1cGVyKGxheWVyKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgVmVjdG9yKHRoaXMpO1xuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRTb3VyY2UodGhpcy5pbnN0YW5jZSk7XG4gIH1cbn1cbiJdfQ==