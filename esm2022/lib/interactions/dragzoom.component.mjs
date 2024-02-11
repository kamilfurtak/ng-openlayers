import { Component, Input } from '@angular/core';
import { DragZoom } from 'ol/interaction';
import * as i0 from "@angular/core";
import * as i1 from "../map.component";
export class DragZoomInteractionComponent {
    constructor(map) {
        this.map = map;
    }
    ngOnInit() {
        this.instance = new DragZoom(this);
        this.map.instance.addInteraction(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
    static { this.ɵfac = function DragZoomInteractionComponent_Factory(t) { return new (t || DragZoomInteractionComponent)(i0.ɵɵdirectiveInject(i1.MapComponent)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DragZoomInteractionComponent, selectors: [["aol-interaction-dragzoom"]], inputs: { className: "className", condition: "condition", duration: "duration", out: "out" }, decls: 0, vars: 0, template: function DragZoomInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DragZoomInteractionComponent, [{
        type: Component,
        args: [{
                selector: 'aol-interaction-dragzoom',
                template: '',
            }]
    }], () => [{ type: i1.MapComponent }], { className: [{
            type: Input
        }], condition: [{
            type: Input
        }], duration: [{
            type: Input
        }], out: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DragZoomInteractionComponent, { className: "DragZoomInteractionComponent", filePath: "lib/interactions/dragzoom.component.ts", lineNumber: 10 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ3pvb20uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9uZy1vcGVubGF5ZXJzL3NyYy9saWIvaW50ZXJhY3Rpb25zL2RyYWd6b29tLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFRMUMsTUFBTSxPQUFPLDRCQUE0QjtJQVl2QyxZQUFvQixHQUFpQjtRQUFqQixRQUFHLEdBQUgsR0FBRyxDQUFjO0lBQUcsQ0FBQztJQUV6QyxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JELENBQUM7NkZBckJVLDRCQUE0QjtvRUFBNUIsNEJBQTRCOztpRkFBNUIsNEJBQTRCO2NBSnhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxRQUFRLEVBQUUsRUFBRTthQUNiOzZDQUdDLFNBQVM7a0JBRFIsS0FBSztZQUdOLFNBQVM7a0JBRFIsS0FBSztZQUdOLFFBQVE7a0JBRFAsS0FBSztZQUdOLEdBQUc7a0JBREYsS0FBSzs7a0ZBUEssNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERyYWdab29tIH0gZnJvbSAnb2wvaW50ZXJhY3Rpb24nO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb25kaXRpb24gfSBmcm9tICdvbC9ldmVudHMvY29uZGl0aW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLWludGVyYWN0aW9uLWRyYWd6b29tJyxcbiAgdGVtcGxhdGU6ICcnLFxufSlcbmV4cG9ydCBjbGFzcyBEcmFnWm9vbUludGVyYWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKVxuICBjbGFzc05hbWU6IHN0cmluZztcbiAgQElucHV0KClcbiAgY29uZGl0aW9uOiBDb25kaXRpb247XG4gIEBJbnB1dCgpXG4gIGR1cmF0aW9uOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIG91dDogYm9vbGVhbjtcblxuICBpbnN0YW5jZTogRHJhZ1pvb207XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IERyYWdab29tKHRoaXMpO1xuICAgIHRoaXMubWFwLmluc3RhbmNlLmFkZEludGVyYWN0aW9uKHRoaXMuaW5zdGFuY2UpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlSW50ZXJhY3Rpb24odGhpcy5pbnN0YW5jZSk7XG4gIH1cbn1cbiJdfQ==