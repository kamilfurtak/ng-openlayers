import { Component, Input } from '@angular/core';
import { FullScreen } from 'ol/control';
import * as i0 from "@angular/core";
import * as i1 from "../map.component";
const _c0 = ["*"];
export class ControlFullScreenComponent {
    constructor(map) {
        this.map = map;
        // console.log('instancing aol-control-fullscreen');
    }
    ngOnInit() {
        this.instance = new FullScreen(this);
        this.map.instance.addControl(this.instance);
    }
    ngOnDestroy() {
        // console.log('removing aol-control-fullscreen');
        this.map.instance.removeControl(this.instance);
    }
    static { this.ɵfac = function ControlFullScreenComponent_Factory(t) { return new (t || ControlFullScreenComponent)(i0.ɵɵdirectiveInject(i1.MapComponent)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ControlFullScreenComponent, selectors: [["aol-control-fullscreen"]], inputs: { className: "className", label: "label", labelActive: "labelActive", tipLabel: "tipLabel", keys: "keys" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function ControlFullScreenComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ControlFullScreenComponent, [{
        type: Component,
        args: [{
                selector: 'aol-control-fullscreen',
                template: ` <ng-content></ng-content> `,
            }]
    }], () => [{ type: i1.MapComponent }], { className: [{
            type: Input
        }], label: [{
            type: Input
        }], labelActive: [{
            type: Input
        }], tipLabel: [{
            type: Input
        }], keys: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ControlFullScreenComponent, { className: "ControlFullScreenComponent", filePath: "lib/controls/fullscreen.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbHNjcmVlbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL25nLW9wZW5sYXllcnMvc3JjL2xpYi9jb250cm9scy9mdWxsc2NyZWVuLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFlBQVksQ0FBQzs7OztBQU94QyxNQUFNLE9BQU8sMEJBQTBCO0lBY3JDLFlBQW9CLEdBQWlCO1FBQWpCLFFBQUcsR0FBSCxHQUFHLENBQWM7UUFDbkMsb0RBQW9EO0lBQ3RELENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxXQUFXO1FBQ1Qsa0RBQWtEO1FBQ2xELElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakQsQ0FBQzsyRkExQlUsMEJBQTBCO29FQUExQiwwQkFBMEI7O1lBRnpCLGtCQUF5Qjs7O2lGQUUxQiwwQkFBMEI7Y0FKdEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFFBQVEsRUFBRSw2QkFBNkI7YUFDeEM7NkNBR0MsU0FBUztrQkFEUixLQUFLO1lBR04sS0FBSztrQkFESixLQUFLO1lBR04sV0FBVztrQkFEVixLQUFLO1lBR04sUUFBUTtrQkFEUCxLQUFLO1lBR04sSUFBSTtrQkFESCxLQUFLOztrRkFUSywwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRnVsbFNjcmVlbiB9IGZyb20gJ29sL2NvbnRyb2wnO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1jb250cm9sLWZ1bGxzY3JlZW4nLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG59KVxuZXhwb3J0IGNsYXNzIENvbnRyb2xGdWxsU2NyZWVuQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKVxuICBjbGFzc05hbWU6IHN0cmluZztcbiAgQElucHV0KClcbiAgbGFiZWw6IHN0cmluZztcbiAgQElucHV0KClcbiAgbGFiZWxBY3RpdmU6IHN0cmluZztcbiAgQElucHV0KClcbiAgdGlwTGFiZWw6IHN0cmluZztcbiAgQElucHV0KClcbiAga2V5czogYm9vbGVhbjtcblxuICBpbnN0YW5jZTogRnVsbFNjcmVlbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2luc3RhbmNpbmcgYW9sLWNvbnRyb2wtZnVsbHNjcmVlbicpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBGdWxsU2NyZWVuKHRoaXMpO1xuICAgIHRoaXMubWFwLmluc3RhbmNlLmFkZENvbnRyb2wodGhpcy5pbnN0YW5jZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygncmVtb3ZpbmcgYW9sLWNvbnRyb2wtZnVsbHNjcmVlbicpO1xuICAgIHRoaXMubWFwLmluc3RhbmNlLnJlbW92ZUNvbnRyb2wodGhpcy5pbnN0YW5jZSk7XG4gIH1cbn1cbiJdfQ==