import { Component, Input } from '@angular/core';
import { DragRotateAndZoom } from 'ol/interaction';
import * as i0 from "@angular/core";
import * as i1 from "../map.component";
export class DragRotateAndZoomInteractionComponent {
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
    static { this.ɵfac = function DragRotateAndZoomInteractionComponent_Factory(t) { return new (t || DragRotateAndZoomInteractionComponent)(i0.ɵɵdirectiveInject(i1.MapComponent)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DragRotateAndZoomInteractionComponent, selectors: [["aol-interaction-dragrotateandzoom"]], inputs: { condition: "condition", duration: "duration" }, decls: 0, vars: 0, template: function DragRotateAndZoomInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DragRotateAndZoomInteractionComponent, [{
        type: Component,
        args: [{
                selector: 'aol-interaction-dragrotateandzoom',
                template: '',
            }]
    }], () => [{ type: i1.MapComponent }], { condition: [{
            type: Input
        }], duration: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DragRotateAndZoomInteractionComponent, { className: "DragRotateAndZoomInteractionComponent", filePath: "lib/interactions/dragrotateandzoom.component.ts", lineNumber: 10 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ3JvdGF0ZWFuZHpvb20uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9uZy1vcGVubGF5ZXJzL3NyYy9saWIvaW50ZXJhY3Rpb25zL2RyYWdyb3RhdGVhbmR6b29tLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQVFuRCxNQUFNLE9BQU8scUNBQXFDO0lBUWhELFlBQW9CLEdBQWlCO1FBQWpCLFFBQUcsR0FBSCxHQUFHLENBQWM7SUFBRyxDQUFDO0lBRXpDLFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyRCxDQUFDO3NHQWpCVSxxQ0FBcUM7b0VBQXJDLHFDQUFxQzs7aUZBQXJDLHFDQUFxQztjQUpqRCxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1DQUFtQztnQkFDN0MsUUFBUSxFQUFFLEVBQUU7YUFDYjs2Q0FHQyxTQUFTO2tCQURSLEtBQUs7WUFHTixRQUFRO2tCQURQLEtBQUs7O2tGQUhLLHFDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEcmFnUm90YXRlQW5kWm9vbSB9IGZyb20gJ29sL2ludGVyYWN0aW9uJztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29uZGl0aW9uIH0gZnJvbSAnb2wvZXZlbnRzL2NvbmRpdGlvbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1pbnRlcmFjdGlvbi1kcmFncm90YXRlYW5kem9vbScsXG4gIHRlbXBsYXRlOiAnJyxcbn0pXG5leHBvcnQgY2xhc3MgRHJhZ1JvdGF0ZUFuZFpvb21JbnRlcmFjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KClcbiAgY29uZGl0aW9uOiBDb25kaXRpb247XG4gIEBJbnB1dCgpXG4gIGR1cmF0aW9uOiBudW1iZXI7XG5cbiAgaW5zdGFuY2U6IERyYWdSb3RhdGVBbmRab29tO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBEcmFnUm90YXRlQW5kWm9vbSh0aGlzKTtcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5hZGRJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMubWFwLmluc3RhbmNlLnJlbW92ZUludGVyYWN0aW9uKHRoaXMuaW5zdGFuY2UpO1xuICB9XG59XG4iXX0=