import { Component, Input } from '@angular/core';
import { ZoomSlider } from 'ol/control';
import * as i0 from "@angular/core";
import * as i1 from "../map.component";
const _c0 = ["*"];
export class ControlZoomSliderComponent {
    constructor(map) {
        this.map = map;
        // console.log('instancing aol-control-zoomslider');
    }
    ngOnInit() {
        this.instance = new ZoomSlider(this);
        this.map.instance.addControl(this.instance);
    }
    ngOnDestroy() {
        // console.log('removing aol-control-zoomslider');
        this.map.instance.removeControl(this.instance);
    }
    static { this.ɵfac = function ControlZoomSliderComponent_Factory(t) { return new (t || ControlZoomSliderComponent)(i0.ɵɵdirectiveInject(i1.MapComponent)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ControlZoomSliderComponent, selectors: [["aol-control-zoomslider"]], inputs: { className: "className", duration: "duration", maxResolution: "maxResolution", minResolution: "minResolution" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function ControlZoomSliderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ControlZoomSliderComponent, [{
        type: Component,
        args: [{
                selector: 'aol-control-zoomslider',
                template: ` <ng-content></ng-content> `,
            }]
    }], () => [{ type: i1.MapComponent }], { className: [{
            type: Input
        }], duration: [{
            type: Input
        }], maxResolution: [{
            type: Input
        }], minResolution: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ControlZoomSliderComponent, { className: "ControlZoomSliderComponent", filePath: "lib/controls/zoomslider.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbXNsaWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL25nLW9wZW5sYXllcnMvc3JjL2xpYi9jb250cm9scy96b29tc2xpZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFlBQVksQ0FBQzs7OztBQU94QyxNQUFNLE9BQU8sMEJBQTBCO0lBWXJDLFlBQW9CLEdBQWlCO1FBQWpCLFFBQUcsR0FBSCxHQUFHLENBQWM7UUFDbkMsb0RBQW9EO0lBQ3RELENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxXQUFXO1FBQ1Qsa0RBQWtEO1FBQ2xELElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakQsQ0FBQzsyRkF4QlUsMEJBQTBCO29FQUExQiwwQkFBMEI7O1lBRnpCLGtCQUF5Qjs7O2lGQUUxQiwwQkFBMEI7Y0FKdEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFFBQVEsRUFBRSw2QkFBNkI7YUFDeEM7NkNBR0MsU0FBUztrQkFEUixLQUFLO1lBR04sUUFBUTtrQkFEUCxLQUFLO1lBR04sYUFBYTtrQkFEWixLQUFLO1lBR04sYUFBYTtrQkFEWixLQUFLOztrRkFQSywwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgWm9vbVNsaWRlciB9IGZyb20gJ29sL2NvbnRyb2wnO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1jb250cm9sLXpvb21zbGlkZXInLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG59KVxuZXhwb3J0IGNsYXNzIENvbnRyb2xab29tU2xpZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKVxuICBjbGFzc05hbWU6IHN0cmluZztcbiAgQElucHV0KClcbiAgZHVyYXRpb246IG51bWJlcjtcbiAgQElucHV0KClcbiAgbWF4UmVzb2x1dGlvbjogbnVtYmVyO1xuICBASW5wdXQoKVxuICBtaW5SZXNvbHV0aW9uOiBudW1iZXI7XG5cbiAgaW5zdGFuY2U6IFpvb21TbGlkZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdpbnN0YW5jaW5nIGFvbC1jb250cm9sLXpvb21zbGlkZXInKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgWm9vbVNsaWRlcih0aGlzKTtcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5hZGRDb250cm9sKHRoaXMuaW5zdGFuY2UpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ3JlbW92aW5nIGFvbC1jb250cm9sLXpvb21zbGlkZXInKTtcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVDb250cm9sKHRoaXMuaW5zdGFuY2UpO1xuICB9XG59XG4iXX0=