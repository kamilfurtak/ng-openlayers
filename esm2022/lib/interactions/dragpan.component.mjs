import { Component, Input } from '@angular/core';
import { DragPan } from 'ol/interaction';
import * as i0 from "@angular/core";
import * as i1 from "../map.component";
export class DragPanInteractionComponent {
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
    static { this.ɵfac = function DragPanInteractionComponent_Factory(t) { return new (t || DragPanInteractionComponent)(i0.ɵɵdirectiveInject(i1.MapComponent)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DragPanInteractionComponent, selectors: [["aol-interaction-dragpan"]], inputs: { condition: "condition", kinetic: "kinetic" }, decls: 0, vars: 0, template: function DragPanInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DragPanInteractionComponent, [{
        type: Component,
        args: [{
                selector: 'aol-interaction-dragpan',
                template: '',
            }]
    }], () => [{ type: i1.MapComponent }], { condition: [{
            type: Input
        }], kinetic: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DragPanInteractionComponent, { className: "DragPanInteractionComponent", filePath: "lib/interactions/dragpan.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ3Bhbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL25nLW9wZW5sYXllcnMvc3JjL2xpYi9pbnRlcmFjdGlvbnMvZHJhZ3Bhbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBU3pDLE1BQU0sT0FBTywyQkFBMkI7SUFRdEMsWUFBb0IsR0FBaUI7UUFBakIsUUFBRyxHQUFILEdBQUcsQ0FBYztJQUFHLENBQUM7SUFFekMsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyRCxDQUFDOzRGQWpCVSwyQkFBMkI7b0VBQTNCLDJCQUEyQjs7aUZBQTNCLDJCQUEyQjtjQUp2QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsUUFBUSxFQUFFLEVBQUU7YUFDYjs2Q0FHQyxTQUFTO2tCQURSLEtBQUs7WUFHTixPQUFPO2tCQUROLEtBQUs7O2tGQUhLLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEcmFnUGFuIH0gZnJvbSAnb2wvaW50ZXJhY3Rpb24nO1xuaW1wb3J0IEtpbmV0aWMgZnJvbSAnb2wvS2luZXRpYyc7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcbmltcG9ydCB7IENvbmRpdGlvbiB9IGZyb20gJ29sL2V2ZW50cy9jb25kaXRpb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtaW50ZXJhY3Rpb24tZHJhZ3BhbicsXG4gIHRlbXBsYXRlOiAnJyxcbn0pXG5leHBvcnQgY2xhc3MgRHJhZ1BhbkludGVyYWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKVxuICBjb25kaXRpb246IENvbmRpdGlvbjtcbiAgQElucHV0KClcbiAga2luZXRpYzogS2luZXRpYztcblxuICBpbnN0YW5jZTogRHJhZ1BhbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgRHJhZ1Bhbih0aGlzKTtcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5hZGRJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMubWFwLmluc3RhbmNlLnJlbW92ZUludGVyYWN0aW9uKHRoaXMuaW5zdGFuY2UpO1xuICB9XG59XG4iXX0=