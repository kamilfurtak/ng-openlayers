import { Component, Input } from '@angular/core';
import { DoubleClickZoom } from 'ol/interaction';
import * as i0 from "@angular/core";
import * as i1 from "../map.component";
export class DoubleClickZoomInteractionComponent {
    constructor(map) {
        this.map = map;
    }
    ngOnInit() {
        this.instance = new DoubleClickZoom(this);
        this.map.instance.addInteraction(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
    static { this.ɵfac = function DoubleClickZoomInteractionComponent_Factory(t) { return new (t || DoubleClickZoomInteractionComponent)(i0.ɵɵdirectiveInject(i1.MapComponent)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DoubleClickZoomInteractionComponent, selectors: [["aol-interaction-doubleclickzoom"]], inputs: { duration: "duration", delta: "delta" }, decls: 0, vars: 0, template: function DoubleClickZoomInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DoubleClickZoomInteractionComponent, [{
        type: Component,
        args: [{
                selector: 'aol-interaction-doubleclickzoom',
                template: '',
            }]
    }], () => [{ type: i1.MapComponent }], { duration: [{
            type: Input
        }], delta: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DoubleClickZoomInteractionComponent, { className: "DoubleClickZoomInteractionComponent", filePath: "lib/interactions/doubleclickzoom.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG91YmxlY2xpY2t6b29tLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvbmctb3BlbmxheWVycy9zcmMvbGliL2ludGVyYWN0aW9ucy9kb3VibGVjbGlja3pvb20uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQU9qRCxNQUFNLE9BQU8sbUNBQW1DO0lBUTlDLFlBQW9CLEdBQWlCO1FBQWpCLFFBQUcsR0FBSCxHQUFHLENBQWM7SUFBRyxDQUFDO0lBRXpDLFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckQsQ0FBQztvR0FqQlUsbUNBQW1DO29FQUFuQyxtQ0FBbUM7O2lGQUFuQyxtQ0FBbUM7Y0FKL0MsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxpQ0FBaUM7Z0JBQzNDLFFBQVEsRUFBRSxFQUFFO2FBQ2I7NkNBR0MsUUFBUTtrQkFEUCxLQUFLO1lBR04sS0FBSztrQkFESixLQUFLOztrRkFISyxtQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG91YmxlQ2xpY2tab29tIH0gZnJvbSAnb2wvaW50ZXJhY3Rpb24nO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1pbnRlcmFjdGlvbi1kb3VibGVjbGlja3pvb20nLFxuICB0ZW1wbGF0ZTogJycsXG59KVxuZXhwb3J0IGNsYXNzIERvdWJsZUNsaWNrWm9vbUludGVyYWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKVxuICBkdXJhdGlvbjogbnVtYmVyO1xuICBASW5wdXQoKVxuICBkZWx0YTogbnVtYmVyO1xuXG4gIGluc3RhbmNlOiBEb3VibGVDbGlja1pvb207XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IERvdWJsZUNsaWNrWm9vbSh0aGlzKTtcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5hZGRJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMubWFwLmluc3RhbmNlLnJlbW92ZUludGVyYWN0aW9uKHRoaXMuaW5zdGFuY2UpO1xuICB9XG59XG4iXX0=