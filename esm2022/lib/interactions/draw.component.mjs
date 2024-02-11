import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Draw } from 'ol/interaction';
import * as i0 from "@angular/core";
import * as i1 from "../map.component";
export class DrawInteractionComponent {
    constructor(map) {
        this.map = map;
        this.olChange = new EventEmitter();
        this.olChangeActive = new EventEmitter();
        this.olDrawAbort = new EventEmitter();
        this.drawEnd = new EventEmitter();
        this.drawStart = new EventEmitter();
        this.olError = new EventEmitter();
        this.propertyChange = new EventEmitter();
    }
    ngOnInit() {
        this.instance = new Draw(this);
        this.instance.on('change', (event) => this.olChange.emit(event));
        this.instance.on('change:active', (event) => this.olChangeActive.emit(event));
        this.instance.on('drawabort', (event) => this.olDrawAbort.emit(event));
        this.instance.on('drawend', (event) => this.drawEnd.emit(event));
        this.instance.on('drawstart', (event) => this.drawStart.emit(event));
        this.instance.on('error', (event) => this.olError.emit(event));
        this.instance.on('propertychange', (event) => this.propertyChange.emit(event));
        this.map.instance.addInteraction(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
    static { this.ɵfac = function DrawInteractionComponent_Factory(t) { return new (t || DrawInteractionComponent)(i0.ɵɵdirectiveInject(i1.MapComponent)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DrawInteractionComponent, selectors: [["aol-interaction-draw"]], inputs: { clickTolerance: "clickTolerance", features: "features", source: "source", snapTolerance: "snapTolerance", type: "type", maxPoints: "maxPoints", minPoints: "minPoints", finishCondition: "finishCondition", style: "style", geometryFunction: "geometryFunction", geometryName: "geometryName", condition: "condition", freehandCondition: "freehandCondition", freehand: "freehand", wrapX: "wrapX" }, outputs: { olChange: "olChange", olChangeActive: "olChangeActive", olDrawAbort: "olDrawAbort", drawEnd: "drawEnd", drawStart: "drawStart", olError: "olError", propertyChange: "propertyChange" }, decls: 0, vars: 0, template: function DrawInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DrawInteractionComponent, [{
        type: Component,
        args: [{
                selector: 'aol-interaction-draw',
                template: '',
            }]
    }], () => [{ type: i1.MapComponent }], { clickTolerance: [{
            type: Input
        }], features: [{
            type: Input
        }], source: [{
            type: Input
        }], snapTolerance: [{
            type: Input
        }], type: [{
            type: Input
        }], maxPoints: [{
            type: Input
        }], minPoints: [{
            type: Input
        }], finishCondition: [{
            type: Input
        }], style: [{
            type: Input
        }], geometryFunction: [{
            type: Input
        }], geometryName: [{
            type: Input
        }], condition: [{
            type: Input
        }], freehandCondition: [{
            type: Input
        }], freehand: [{
            type: Input
        }], wrapX: [{
            type: Input
        }], olChange: [{
            type: Output
        }], olChangeActive: [{
            type: Output
        }], olDrawAbort: [{
            type: Output
        }], drawEnd: [{
            type: Output
        }], drawStart: [{
            type: Output
        }], olError: [{
            type: Output
        }], propertyChange: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DrawInteractionComponent, { className: "DrawInteractionComponent", filePath: "lib/interactions/draw.component.ts", lineNumber: 18 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL25nLW9wZW5sYXllcnMvc3JjL2xpYi9pbnRlcmFjdGlvbnMvZHJhdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUYsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFldEMsTUFBTSxPQUFPLHdCQUF3QjtJQWlEbkMsWUFBb0IsR0FBaUI7UUFBakIsUUFBRyxHQUFILEdBQUcsQ0FBYztRQWhCckMsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7UUFFekMsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBZSxDQUFDO1FBRWpELGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQztRQUU1QyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQztRQUV4QyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQztRQUUxQyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQztRQUV4QyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFlLENBQUM7SUFJVCxDQUFDO0lBRXpDLFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQWdCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsZUFBZSxFQUFFLENBQUMsS0FBa0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUMzRixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFnQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ2xGLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQWdCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBZ0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNoRixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFnQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzFFLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLENBQUMsS0FBa0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM1RixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JELENBQUM7eUZBakVVLHdCQUF3QjtvRUFBeEIsd0JBQXdCOztpRkFBeEIsd0JBQXdCO2NBSnBDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUUsRUFBRTthQUNiOzZDQUdDLGNBQWM7a0JBRGIsS0FBSztZQUdOLFFBQVE7a0JBRFAsS0FBSztZQUdOLE1BQU07a0JBREwsS0FBSztZQUdOLGFBQWE7a0JBRFosS0FBSztZQUdOLElBQUk7a0JBREgsS0FBSztZQUdOLFNBQVM7a0JBRFIsS0FBSztZQUdOLFNBQVM7a0JBRFIsS0FBSztZQUdOLGVBQWU7a0JBRGQsS0FBSztZQUdOLEtBQUs7a0JBREosS0FBSztZQUdOLGdCQUFnQjtrQkFEZixLQUFLO1lBR04sWUFBWTtrQkFEWCxLQUFLO1lBR04sU0FBUztrQkFEUixLQUFLO1lBR04saUJBQWlCO2tCQURoQixLQUFLO1lBR04sUUFBUTtrQkFEUCxLQUFLO1lBR04sS0FBSztrQkFESixLQUFLO1lBSU4sUUFBUTtrQkFEUCxNQUFNO1lBR1AsY0FBYztrQkFEYixNQUFNO1lBR1AsV0FBVztrQkFEVixNQUFNO1lBR1AsT0FBTztrQkFETixNQUFNO1lBR1AsU0FBUztrQkFEUixNQUFNO1lBR1AsT0FBTztrQkFETixNQUFNO1lBR1AsY0FBYztrQkFEYixNQUFNOztrRkE1Q0ksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcbmltcG9ydCB7IERyYXcgfSBmcm9tICdvbC9pbnRlcmFjdGlvbic7XG5pbXBvcnQgeyBDb2xsZWN0aW9uLCBGZWF0dXJlIH0gZnJvbSAnb2wnO1xuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnb2wvc291cmNlJztcbmltcG9ydCB7IFN0eWxlIH0gZnJvbSAnb2wvc3R5bGUnO1xuaW1wb3J0IHsgRHJhd0V2ZW50LCBHZW9tZXRyeUZ1bmN0aW9uIH0gZnJvbSAnb2wvaW50ZXJhY3Rpb24vRHJhdyc7XG5pbXBvcnQgeyBTdHlsZUZ1bmN0aW9uIH0gZnJvbSAnb2wvc3R5bGUvU3R5bGUnO1xuaW1wb3J0IHsgQ29uZGl0aW9uIH0gZnJvbSAnb2wvZXZlbnRzL2NvbmRpdGlvbic7XG5pbXBvcnQgeyBUeXBlIH0gZnJvbSAnb2wvZ2VvbS9HZW9tZXRyeSc7XG5pbXBvcnQgeyBPYmplY3RFdmVudCB9IGZyb20gJ29sL09iamVjdCc7XG5pbXBvcnQgQmFzZUV2ZW50IGZyb20gJ29sL2V2ZW50cy9FdmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1pbnRlcmFjdGlvbi1kcmF3JyxcbiAgdGVtcGxhdGU6ICcnLFxufSlcbmV4cG9ydCBjbGFzcyBEcmF3SW50ZXJhY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpXG4gIGNsaWNrVG9sZXJhbmNlPzogbnVtYmVyO1xuICBASW5wdXQoKVxuICBmZWF0dXJlcz86IENvbGxlY3Rpb248RmVhdHVyZT47XG4gIEBJbnB1dCgpXG4gIHNvdXJjZT86IFZlY3RvcjtcbiAgQElucHV0KClcbiAgc25hcFRvbGVyYW5jZT86IG51bWJlcjtcbiAgQElucHV0KClcbiAgdHlwZTogVHlwZTtcbiAgQElucHV0KClcbiAgbWF4UG9pbnRzPzogbnVtYmVyO1xuICBASW5wdXQoKVxuICBtaW5Qb2ludHM/OiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIGZpbmlzaENvbmRpdGlvbj86IENvbmRpdGlvbjtcbiAgQElucHV0KClcbiAgc3R5bGU/OiBTdHlsZSB8IFN0eWxlW10gfCBTdHlsZUZ1bmN0aW9uO1xuICBASW5wdXQoKVxuICBnZW9tZXRyeUZ1bmN0aW9uPzogR2VvbWV0cnlGdW5jdGlvbjtcbiAgQElucHV0KClcbiAgZ2VvbWV0cnlOYW1lPzogc3RyaW5nO1xuICBASW5wdXQoKVxuICBjb25kaXRpb24/OiBDb25kaXRpb247XG4gIEBJbnB1dCgpXG4gIGZyZWVoYW5kQ29uZGl0aW9uPzogQ29uZGl0aW9uO1xuICBASW5wdXQoKVxuICBmcmVlaGFuZD86IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHdyYXBYPzogYm9vbGVhbjtcblxuICBAT3V0cHV0KClcbiAgb2xDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPERyYXdFdmVudD4oKTtcbiAgQE91dHB1dCgpXG4gIG9sQ2hhbmdlQWN0aXZlID0gbmV3IEV2ZW50RW1pdHRlcjxPYmplY3RFdmVudD4oKTtcbiAgQE91dHB1dCgpXG4gIG9sRHJhd0Fib3J0ID0gbmV3IEV2ZW50RW1pdHRlcjxEcmF3RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKVxuICBkcmF3RW5kID0gbmV3IEV2ZW50RW1pdHRlcjxEcmF3RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKVxuICBkcmF3U3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPERyYXdFdmVudD4oKTtcbiAgQE91dHB1dCgpXG4gIG9sRXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyPEJhc2VFdmVudD4oKTtcbiAgQE91dHB1dCgpXG4gIHByb3BlcnR5Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxPYmplY3RFdmVudD4oKTtcblxuICBpbnN0YW5jZTogRHJhdztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgRHJhdyh0aGlzKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdjaGFuZ2UnLCAoZXZlbnQ6IERyYXdFdmVudCkgPT4gdGhpcy5vbENoYW5nZS5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbignY2hhbmdlOmFjdGl2ZScsIChldmVudDogT2JqZWN0RXZlbnQpID0+IHRoaXMub2xDaGFuZ2VBY3RpdmUuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2RyYXdhYm9ydCcsIChldmVudDogRHJhd0V2ZW50KSA9PiB0aGlzLm9sRHJhd0Fib3J0LmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdkcmF3ZW5kJywgKGV2ZW50OiBEcmF3RXZlbnQpID0+IHRoaXMuZHJhd0VuZC5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbignZHJhd3N0YXJ0JywgKGV2ZW50OiBEcmF3RXZlbnQpID0+IHRoaXMuZHJhd1N0YXJ0LmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdlcnJvcicsIChldmVudDogQmFzZUV2ZW50KSA9PiB0aGlzLm9sRXJyb3IuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3Byb3BlcnR5Y2hhbmdlJywgKGV2ZW50OiBPYmplY3RFdmVudCkgPT4gdGhpcy5wcm9wZXJ0eUNoYW5nZS5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkSW50ZXJhY3Rpb24odGhpcy5pbnN0YW5jZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcbiAgfVxufVxuIl19