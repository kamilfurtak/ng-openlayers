import { Component, Input } from '@angular/core';
import { defaults } from 'ol/interaction';
import * as i0 from "@angular/core";
import * as i1 from "../map.component";
export class DefaultInteractionComponent {
    constructor(map) {
        this.map = map;
    }
    ngOnInit() {
        this.instance = defaults(this);
        this.instance.forEach((i) => this.map.instance.addInteraction(i));
    }
    ngOnDestroy() {
        this.instance.forEach((i) => this.map.instance.removeInteraction(i));
    }
    static { this.ɵfac = function DefaultInteractionComponent_Factory(t) { return new (t || DefaultInteractionComponent)(i0.ɵɵdirectiveInject(i1.MapComponent)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DefaultInteractionComponent, selectors: [["aol-interaction-default"]], inputs: { altShiftDragRotate: "altShiftDragRotate", onFocusOnly: "onFocusOnly", doubleClickZoom: "doubleClickZoom", keyboard: "keyboard", mouseWheelZoom: "mouseWheelZoom", shiftDragZoom: "shiftDragZoom", dragPan: "dragPan", pinchRotate: "pinchRotate", pinchZoom: "pinchZoom", zoomDelta: "zoomDelta", zoomDuration: "zoomDuration" }, decls: 0, vars: 0, template: function DefaultInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DefaultInteractionComponent, [{
        type: Component,
        args: [{
                selector: 'aol-interaction-default',
                template: '',
            }]
    }], () => [{ type: i1.MapComponent }], { altShiftDragRotate: [{
            type: Input
        }], onFocusOnly: [{
            type: Input
        }], doubleClickZoom: [{
            type: Input
        }], keyboard: [{
            type: Input
        }], mouseWheelZoom: [{
            type: Input
        }], shiftDragZoom: [{
            type: Input
        }], dragPan: [{
            type: Input
        }], pinchRotate: [{
            type: Input
        }], pinchZoom: [{
            type: Input
        }], zoomDelta: [{
            type: Input
        }], zoomDuration: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DefaultInteractionComponent, { className: "DefaultInteractionComponent", filePath: "lib/interactions/default.component.ts", lineNumber: 10 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL25nLW9wZW5sYXllcnMvc3JjL2xpYi9pbnRlcmFjdGlvbnMvZGVmYXVsdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxRQUFRLEVBQWUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBUXZELE1BQU0sT0FBTywyQkFBMkI7SUEwQnRDLFlBQW9CLEdBQWlCO1FBQWpCLFFBQUcsR0FBSCxHQUFHLENBQWM7SUFBRyxDQUFDO0lBRXpDLFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDOzRGQW5DVSwyQkFBMkI7b0VBQTNCLDJCQUEyQjs7aUZBQTNCLDJCQUEyQjtjQUp2QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsUUFBUSxFQUFFLEVBQUU7YUFDYjs2Q0FHQyxrQkFBa0I7a0JBRGpCLEtBQUs7WUFHTixXQUFXO2tCQURWLEtBQUs7WUFHTixlQUFlO2tCQURkLEtBQUs7WUFHTixRQUFRO2tCQURQLEtBQUs7WUFHTixjQUFjO2tCQURiLEtBQUs7WUFHTixhQUFhO2tCQURaLEtBQUs7WUFHTixPQUFPO2tCQUROLEtBQUs7WUFHTixXQUFXO2tCQURWLEtBQUs7WUFHTixTQUFTO2tCQURSLEtBQUs7WUFHTixTQUFTO2tCQURSLEtBQUs7WUFHTixZQUFZO2tCQURYLEtBQUs7O2tGQXJCSywyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZGVmYXVsdHMsIEludGVyYWN0aW9uIH0gZnJvbSAnb2wvaW50ZXJhY3Rpb24nO1xuaW1wb3J0IHsgQ29sbGVjdGlvbiB9IGZyb20gJ29sJztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtaW50ZXJhY3Rpb24tZGVmYXVsdCcsXG4gIHRlbXBsYXRlOiAnJyxcbn0pXG5leHBvcnQgY2xhc3MgRGVmYXVsdEludGVyYWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKVxuICBhbHRTaGlmdERyYWdSb3RhdGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIG9uRm9jdXNPbmx5OiBib29sZWFuO1xuICBASW5wdXQoKVxuICBkb3VibGVDbGlja1pvb206IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIGtleWJvYXJkOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBtb3VzZVdoZWVsWm9vbTogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgc2hpZnREcmFnWm9vbTogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgZHJhZ1BhbjogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgcGluY2hSb3RhdGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHBpbmNoWm9vbTogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgem9vbURlbHRhOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHpvb21EdXJhdGlvbjogbnVtYmVyO1xuXG4gIGluc3RhbmNlOiBDb2xsZWN0aW9uPEludGVyYWN0aW9uPjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBkZWZhdWx0cyh0aGlzKTtcbiAgICB0aGlzLmluc3RhbmNlLmZvckVhY2goKGkpID0+IHRoaXMubWFwLmluc3RhbmNlLmFkZEludGVyYWN0aW9uKGkpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuaW5zdGFuY2UuZm9yRWFjaCgoaSkgPT4gdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlSW50ZXJhY3Rpb24oaSkpO1xuICB9XG59XG4iXX0=