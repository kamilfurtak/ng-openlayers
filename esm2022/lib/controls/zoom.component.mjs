import { Component, Input } from '@angular/core';
import { Zoom } from 'ol/control';
import * as i0 from "@angular/core";
import * as i1 from "../map.component";
const _c0 = ["*"];
export class ControlZoomComponent {
    constructor(map) {
        this.map = map;
        // console.log('instancing aol-control-zoom');
    }
    ngOnInit() {
        this.instance = new Zoom(this);
        this.map.instance.addControl(this.instance);
    }
    ngOnDestroy() {
        // console.log('removing aol-control-zoom');
        this.map.instance.removeControl(this.instance);
    }
    static { this.ɵfac = function ControlZoomComponent_Factory(t) { return new (t || ControlZoomComponent)(i0.ɵɵdirectiveInject(i1.MapComponent)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ControlZoomComponent, selectors: [["aol-control-zoom"]], inputs: { duration: "duration", zoomInLabel: "zoomInLabel", zoomOutLabel: "zoomOutLabel", zoomInTipLabel: "zoomInTipLabel", zoomOutTipLabel: "zoomOutTipLabel", delta: "delta" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function ControlZoomComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ControlZoomComponent, [{
        type: Component,
        args: [{
                selector: 'aol-control-zoom',
                template: ` <ng-content></ng-content> `,
            }]
    }], () => [{ type: i1.MapComponent }], { duration: [{
            type: Input
        }], zoomInLabel: [{
            type: Input
        }], zoomOutLabel: [{
            type: Input
        }], zoomInTipLabel: [{
            type: Input
        }], zoomOutTipLabel: [{
            type: Input
        }], delta: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ControlZoomComponent, { className: "ControlZoomComponent", filePath: "lib/controls/zoom.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL25nLW9wZW5sYXllcnMvc3JjL2xpYi9jb250cm9scy96b29tLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFlBQVksQ0FBQzs7OztBQU9sQyxNQUFNLE9BQU8sb0JBQW9CO0lBZ0IvQixZQUFvQixHQUFpQjtRQUFqQixRQUFHLEdBQUgsR0FBRyxDQUFjO1FBQ25DLDhDQUE4QztJQUNoRCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsV0FBVztRQUNULDRDQUE0QztRQUM1QyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pELENBQUM7cUZBNUJVLG9CQUFvQjtvRUFBcEIsb0JBQW9COztZQUZuQixrQkFBeUI7OztpRkFFMUIsb0JBQW9CO2NBSmhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUUsNkJBQTZCO2FBQ3hDOzZDQUdDLFFBQVE7a0JBRFAsS0FBSztZQUdOLFdBQVc7a0JBRFYsS0FBSztZQUdOLFlBQVk7a0JBRFgsS0FBSztZQUdOLGNBQWM7a0JBRGIsS0FBSztZQUdOLGVBQWU7a0JBRGQsS0FBSztZQUdOLEtBQUs7a0JBREosS0FBSzs7a0ZBWEssb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFpvb20gfSBmcm9tICdvbC9jb250cm9sJztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtY29udHJvbC16b29tJyxcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiBgLFxufSlcbmV4cG9ydCBjbGFzcyBDb250cm9sWm9vbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KClcbiAgZHVyYXRpb246IG51bWJlcjtcbiAgQElucHV0KClcbiAgem9vbUluTGFiZWw6IHN0cmluZyB8IEhUTUxFbGVtZW50O1xuICBASW5wdXQoKVxuICB6b29tT3V0TGFiZWw6IHN0cmluZyB8IEhUTUxFbGVtZW50O1xuICBASW5wdXQoKVxuICB6b29tSW5UaXBMYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKVxuICB6b29tT3V0VGlwTGFiZWw6IHN0cmluZztcbiAgQElucHV0KClcbiAgZGVsdGE6IG51bWJlcjtcblxuICBpbnN0YW5jZTogWm9vbTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2luc3RhbmNpbmcgYW9sLWNvbnRyb2wtem9vbScpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBab29tKHRoaXMpO1xuICAgIHRoaXMubWFwLmluc3RhbmNlLmFkZENvbnRyb2wodGhpcy5pbnN0YW5jZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygncmVtb3ZpbmcgYW9sLWNvbnRyb2wtem9vbScpO1xuICAgIHRoaXMubWFwLmluc3RhbmNlLnJlbW92ZUNvbnRyb2wodGhpcy5pbnN0YW5jZSk7XG4gIH1cbn1cbiJdfQ==