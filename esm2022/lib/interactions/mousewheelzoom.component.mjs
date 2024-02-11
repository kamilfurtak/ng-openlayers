import { Component, Input } from '@angular/core';
import { MouseWheelZoom } from 'ol/interaction';
import * as i0 from "@angular/core";
import * as i1 from "../map.component";
export class MouseWheelZoomInteractionComponent {
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
    static { this.ɵfac = function MouseWheelZoomInteractionComponent_Factory(t) { return new (t || MouseWheelZoomInteractionComponent)(i0.ɵɵdirectiveInject(i1.MapComponent)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MouseWheelZoomInteractionComponent, selectors: [["aol-interaction-mousewheelzoom"]], inputs: { duration: "duration", timeout: "timeout", useAnchor: "useAnchor" }, decls: 0, vars: 0, template: function MouseWheelZoomInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MouseWheelZoomInteractionComponent, [{
        type: Component,
        args: [{
                selector: 'aol-interaction-mousewheelzoom',
                template: '',
            }]
    }], () => [{ type: i1.MapComponent }], { duration: [{
            type: Input
        }], timeout: [{
            type: Input
        }], useAnchor: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MouseWheelZoomInteractionComponent, { className: "MouseWheelZoomInteractionComponent", filePath: "lib/interactions/mousewheelzoom.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW91c2V3aGVlbHpvb20uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9uZy1vcGVubGF5ZXJzL3NyYy9saWIvaW50ZXJhY3Rpb25zL21vdXNld2hlZWx6b29tLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFPaEQsTUFBTSxPQUFPLGtDQUFrQztJQVU3QyxZQUFvQixHQUFpQjtRQUFqQixRQUFHLEdBQUgsR0FBRyxDQUFjO0lBQUcsQ0FBQztJQUV6QyxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JELENBQUM7bUdBbkJVLGtDQUFrQztvRUFBbEMsa0NBQWtDOztpRkFBbEMsa0NBQWtDO2NBSjlDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0NBQWdDO2dCQUMxQyxRQUFRLEVBQUUsRUFBRTthQUNiOzZDQUdDLFFBQVE7a0JBRFAsS0FBSztZQUdOLE9BQU87a0JBRE4sS0FBSztZQUdOLFNBQVM7a0JBRFIsS0FBSzs7a0ZBTEssa0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1vdXNlV2hlZWxab29tIH0gZnJvbSAnb2wvaW50ZXJhY3Rpb24nO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1pbnRlcmFjdGlvbi1tb3VzZXdoZWVsem9vbScsXG4gIHRlbXBsYXRlOiAnJyxcbn0pXG5leHBvcnQgY2xhc3MgTW91c2VXaGVlbFpvb21JbnRlcmFjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KClcbiAgZHVyYXRpb246IG51bWJlcjtcbiAgQElucHV0KClcbiAgdGltZW91dDogbnVtYmVyO1xuICBASW5wdXQoKVxuICB1c2VBbmNob3I6IGJvb2xlYW47XG5cbiAgaW5zdGFuY2U6IE1vdXNlV2hlZWxab29tO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBNb3VzZVdoZWVsWm9vbSh0aGlzKTtcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5hZGRJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMubWFwLmluc3RhbmNlLnJlbW92ZUludGVyYWN0aW9uKHRoaXMuaW5zdGFuY2UpO1xuICB9XG59XG4iXX0=