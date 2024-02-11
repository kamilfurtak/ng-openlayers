import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Select } from 'ol/interaction';
import * as i0 from "@angular/core";
import * as i1 from "../map.component";
export class SelectInteractionComponent {
    constructor(map) {
        this.map = map;
        this.olChange = new EventEmitter();
        this.olChangeActive = new EventEmitter();
        this.olError = new EventEmitter();
        this.propertyChange = new EventEmitter();
        this.olSelect = new EventEmitter();
    }
    ngOnInit() {
        this.instance = new Select(this);
        this.instance.on('change', (event) => this.olChange.emit(event));
        this.instance.on('change:active', (event) => this.olChangeActive.emit(event));
        this.instance.on('error', (event) => this.olError.emit(event));
        this.instance.on('propertychange', (event) => this.propertyChange.emit(event));
        this.instance.on('select', (event) => this.olSelect.emit(event));
        this.map.instance.addInteraction(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
    static { this.ɵfac = function SelectInteractionComponent_Factory(t) { return new (t || SelectInteractionComponent)(i0.ɵɵdirectiveInject(i1.MapComponent)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SelectInteractionComponent, selectors: [["aol-interaction-select"]], inputs: { addCondition: "addCondition", condition: "condition", layers: "layers", style: "style", removeCondition: "removeCondition", toggleCondition: "toggleCondition", multi: "multi", features: "features", filter: "filter", wrapX: "wrapX" }, outputs: { olChange: "olChange", olChangeActive: "olChangeActive", olError: "olError", propertyChange: "propertyChange", olSelect: "olSelect" }, decls: 0, vars: 0, template: function SelectInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SelectInteractionComponent, [{
        type: Component,
        args: [{
                selector: 'aol-interaction-select',
                template: '',
            }]
    }], () => [{ type: i1.MapComponent }], { addCondition: [{
            type: Input
        }], condition: [{
            type: Input
        }], layers: [{
            type: Input
        }], style: [{
            type: Input
        }], removeCondition: [{
            type: Input
        }], toggleCondition: [{
            type: Input
        }], multi: [{
            type: Input
        }], features: [{
            type: Input
        }], filter: [{
            type: Input
        }], wrapX: [{
            type: Input
        }], olChange: [{
            type: Output
        }], olChangeActive: [{
            type: Output
        }], olError: [{
            type: Output
        }], propertyChange: [{
            type: Output
        }], olSelect: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SelectInteractionComponent, { className: "SelectInteractionComponent", filePath: "lib/interactions/select.component.ts", lineNumber: 17 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvbmctb3BlbmxheWVycy9zcmMvbGliL2ludGVyYWN0aW9ucy9zZWxlY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFGLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBY3hDLE1BQU0sT0FBTywwQkFBMEI7SUFtQ3JDLFlBQW9CLEdBQWlCO1FBQWpCLFFBQUcsR0FBSCxHQUFHLENBQWM7UUFackMsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFlLENBQUM7UUFFM0MsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBZSxDQUFDO1FBRWpELFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO1FBRXhDLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQWUsQ0FBQztRQUVqRCxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQWUsQ0FBQztJQUlILENBQUM7SUFFekMsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFakMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBa0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxLQUFrQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzNGLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQWdCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxLQUFrQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzVGLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQWtCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDOUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyRCxDQUFDOzJGQWxEVSwwQkFBMEI7b0VBQTFCLDBCQUEwQjs7aUZBQTFCLDBCQUEwQjtjQUp0QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsUUFBUSxFQUFFLEVBQUU7YUFDYjs2Q0FHQyxZQUFZO2tCQURYLEtBQUs7WUFHTixTQUFTO2tCQURSLEtBQUs7WUFHTixNQUFNO2tCQURMLEtBQUs7WUFHTixLQUFLO2tCQURKLEtBQUs7WUFHTixlQUFlO2tCQURkLEtBQUs7WUFHTixlQUFlO2tCQURkLEtBQUs7WUFHTixLQUFLO2tCQURKLEtBQUs7WUFHTixRQUFRO2tCQURQLEtBQUs7WUFHTixNQUFNO2tCQURMLEtBQUs7WUFHTixLQUFLO2tCQURKLEtBQUs7WUFJTixRQUFRO2tCQURQLE1BQU07WUFHUCxjQUFjO2tCQURiLE1BQU07WUFHUCxPQUFPO2tCQUROLE1BQU07WUFHUCxjQUFjO2tCQURiLE1BQU07WUFHUCxRQUFRO2tCQURQLE1BQU07O2tGQTlCSSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnb2wvaW50ZXJhY3Rpb24nO1xuaW1wb3J0IHsgTGF5ZXIgfSBmcm9tICdvbC9sYXllcic7XG5pbXBvcnQgeyBTdHlsZSB9IGZyb20gJ29sL3N0eWxlJztcbmltcG9ydCB7IENvbGxlY3Rpb24sIEZlYXR1cmUgfSBmcm9tICdvbCc7XG5pbXBvcnQgeyBTZWxlY3RFdmVudCwgRmlsdGVyRnVuY3Rpb24gfSBmcm9tICdvbC9pbnRlcmFjdGlvbi9TZWxlY3QnO1xuaW1wb3J0IHsgU3R5bGVGdW5jdGlvbiB9IGZyb20gJ29sL3N0eWxlL1N0eWxlJztcbmltcG9ydCB7IENvbmRpdGlvbiB9IGZyb20gJ29sL2V2ZW50cy9jb25kaXRpb24nO1xuaW1wb3J0IHsgT2JqZWN0RXZlbnQgfSBmcm9tICdvbC9PYmplY3QnO1xuaW1wb3J0IEJhc2VFdmVudCBmcm9tICdvbC9ldmVudHMvRXZlbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtaW50ZXJhY3Rpb24tc2VsZWN0JyxcbiAgdGVtcGxhdGU6ICcnLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RJbnRlcmFjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KClcbiAgYWRkQ29uZGl0aW9uPzogQ29uZGl0aW9uO1xuICBASW5wdXQoKVxuICBjb25kaXRpb24/OiBDb25kaXRpb247XG4gIEBJbnB1dCgpXG4gIGxheWVycz86IExheWVyW10gfCAoKGxheWVyOiBMYXllcikgPT4gYm9vbGVhbik7XG4gIEBJbnB1dCgpXG4gIHN0eWxlPzogU3R5bGUgfCBTdHlsZVtdIHwgU3R5bGVGdW5jdGlvbjtcbiAgQElucHV0KClcbiAgcmVtb3ZlQ29uZGl0aW9uPzogQ29uZGl0aW9uO1xuICBASW5wdXQoKVxuICB0b2dnbGVDb25kaXRpb24/OiBDb25kaXRpb247XG4gIEBJbnB1dCgpXG4gIG11bHRpPzogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgZmVhdHVyZXM/OiBDb2xsZWN0aW9uPEZlYXR1cmU+O1xuICBASW5wdXQoKVxuICBmaWx0ZXI/OiBGaWx0ZXJGdW5jdGlvbjtcbiAgQElucHV0KClcbiAgd3JhcFg/OiBib29sZWFuO1xuXG4gIEBPdXRwdXQoKVxuICBvbENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8U2VsZWN0RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKVxuICBvbENoYW5nZUFjdGl2ZSA9IG5ldyBFdmVudEVtaXR0ZXI8T2JqZWN0RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKVxuICBvbEVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxCYXNlRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKVxuICBwcm9wZXJ0eUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8T2JqZWN0RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKVxuICBvbFNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8U2VsZWN0RXZlbnQ+KCk7XG5cbiAgaW5zdGFuY2U6IFNlbGVjdDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgU2VsZWN0KHRoaXMpO1xuXG4gICAgdGhpcy5pbnN0YW5jZS5vbignY2hhbmdlJywgKGV2ZW50OiBTZWxlY3RFdmVudCkgPT4gdGhpcy5vbENoYW5nZS5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbignY2hhbmdlOmFjdGl2ZScsIChldmVudDogT2JqZWN0RXZlbnQpID0+IHRoaXMub2xDaGFuZ2VBY3RpdmUuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2Vycm9yJywgKGV2ZW50OiBCYXNlRXZlbnQpID0+IHRoaXMub2xFcnJvci5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbigncHJvcGVydHljaGFuZ2UnLCAoZXZlbnQ6IE9iamVjdEV2ZW50KSA9PiB0aGlzLnByb3BlcnR5Q2hhbmdlLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdzZWxlY3QnLCAoZXZlbnQ6IFNlbGVjdEV2ZW50KSA9PiB0aGlzLm9sU2VsZWN0LmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5hZGRJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMubWFwLmluc3RhbmNlLnJlbW92ZUludGVyYWN0aW9uKHRoaXMuaW5zdGFuY2UpO1xuICB9XG59XG4iXX0=