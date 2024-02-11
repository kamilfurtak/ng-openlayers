import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Modify } from 'ol/interaction';
import * as i0 from "@angular/core";
import * as i1 from "../map.component";
export class ModifyInteractionComponent {
    constructor(map) {
        this.map = map;
        this.olChange = new EventEmitter();
        this.olChangeActive = new EventEmitter();
        this.olError = new EventEmitter();
        this.olModifyEnd = new EventEmitter();
        this.olModifyStart = new EventEmitter();
        this.propertyChange = new EventEmitter();
    }
    ngOnInit() {
        this.instance = new Modify(this);
        this.instance.on('change', (event) => this.olChange.emit(event));
        this.instance.on('change:active', (event) => this.olChangeActive.emit(event));
        this.instance.on('error', (event) => this.olError.emit(event));
        this.instance.on('modifyend', (event) => this.olModifyEnd.emit(event));
        this.instance.on('modifystart', (event) => this.olModifyStart.emit(event));
        this.instance.on('propertychange', (event) => this.propertyChange.emit(event));
        this.map.instance.addInteraction(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
    static { this.ɵfac = function ModifyInteractionComponent_Factory(t) { return new (t || ModifyInteractionComponent)(i0.ɵɵdirectiveInject(i1.MapComponent)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ModifyInteractionComponent, selectors: [["aol-interaction-modify"]], inputs: { condition: "condition", deleteCondition: "deleteCondition", pixelTolerance: "pixelTolerance", style: "style", features: "features", wrapX: "wrapX", source: "source" }, outputs: { olChange: "olChange", olChangeActive: "olChangeActive", olError: "olError", olModifyEnd: "olModifyEnd", olModifyStart: "olModifyStart", propertyChange: "propertyChange" }, decls: 0, vars: 0, template: function ModifyInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModifyInteractionComponent, [{
        type: Component,
        args: [{
                selector: 'aol-interaction-modify',
                template: '',
            }]
    }], () => [{ type: i1.MapComponent }], { condition: [{
            type: Input
        }], deleteCondition: [{
            type: Input
        }], pixelTolerance: [{
            type: Input
        }], style: [{
            type: Input
        }], features: [{
            type: Input
        }], wrapX: [{
            type: Input
        }], source: [{
            type: Input
        }], olChange: [{
            type: Output
        }], olChangeActive: [{
            type: Output
        }], olError: [{
            type: Output
        }], olModifyEnd: [{
            type: Output
        }], olModifyStart: [{
            type: Output
        }], propertyChange: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ModifyInteractionComponent, { className: "ModifyInteractionComponent", filePath: "lib/interactions/modify.component.ts", lineNumber: 18 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kaWZ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvbmctb3BlbmxheWVycy9zcmMvbGliL2ludGVyYWN0aW9ucy9tb2RpZnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFGLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBZXhDLE1BQU0sT0FBTywwQkFBMEI7SUErQnJDLFlBQW9CLEdBQWlCO1FBQWpCLFFBQUcsR0FBSCxHQUFHLENBQWM7UUFkckMsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7UUFFekMsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBZSxDQUFDO1FBRWpELFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO1FBRXhDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQWUsQ0FBQztRQUU5QyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFlLENBQUM7UUFFaEQsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBZSxDQUFDO0lBSVQsQ0FBQztJQUV6QyxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFnQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDLEtBQWtCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDM0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBZ0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUMxRSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFrQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDLEtBQWtCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDeEYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxLQUFrQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzVGLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckQsQ0FBQzsyRkE5Q1UsMEJBQTBCO29FQUExQiwwQkFBMEI7O2lGQUExQiwwQkFBMEI7Y0FKdEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFFBQVEsRUFBRSxFQUFFO2FBQ2I7NkNBR0MsU0FBUztrQkFEUixLQUFLO1lBR04sZUFBZTtrQkFEZCxLQUFLO1lBR04sY0FBYztrQkFEYixLQUFLO1lBR04sS0FBSztrQkFESixLQUFLO1lBR04sUUFBUTtrQkFEUCxLQUFLO1lBR04sS0FBSztrQkFESixLQUFLO1lBR04sTUFBTTtrQkFETCxLQUFLO1lBSU4sUUFBUTtrQkFEUCxNQUFNO1lBR1AsY0FBYztrQkFEYixNQUFNO1lBR1AsT0FBTztrQkFETixNQUFNO1lBR1AsV0FBVztrQkFEVixNQUFNO1lBR1AsYUFBYTtrQkFEWixNQUFNO1lBR1AsY0FBYztrQkFEYixNQUFNOztrRkExQkksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcbmltcG9ydCB7IE1vZGlmeSB9IGZyb20gJ29sL2ludGVyYWN0aW9uJztcbmltcG9ydCB7IENvbGxlY3Rpb24sIEZlYXR1cmUgfSBmcm9tICdvbCc7XG5pbXBvcnQgeyBTdHlsZSB9IGZyb20gJ29sL3N0eWxlJztcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJ29sL3NvdXJjZSc7XG5pbXBvcnQgeyBNb2RpZnlFdmVudCB9IGZyb20gJ29sL2ludGVyYWN0aW9uL01vZGlmeSc7XG5pbXBvcnQgeyBTdHlsZUZ1bmN0aW9uIH0gZnJvbSAnb2wvc3R5bGUvU3R5bGUnO1xuaW1wb3J0IHsgQ29uZGl0aW9uIH0gZnJvbSAnb2wvZXZlbnRzL2NvbmRpdGlvbic7XG5pbXBvcnQgeyBPYmplY3RFdmVudCB9IGZyb20gJ29sL09iamVjdCc7XG5pbXBvcnQgeyBEcmF3RXZlbnQgfSBmcm9tICdvbC9pbnRlcmFjdGlvbi9EcmF3JztcbmltcG9ydCBCYXNlRXZlbnQgZnJvbSAnb2wvZXZlbnRzL0V2ZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLWludGVyYWN0aW9uLW1vZGlmeScsXG4gIHRlbXBsYXRlOiAnJyxcbn0pXG5leHBvcnQgY2xhc3MgTW9kaWZ5SW50ZXJhY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpXG4gIGNvbmRpdGlvbj86IENvbmRpdGlvbjtcbiAgQElucHV0KClcbiAgZGVsZXRlQ29uZGl0aW9uPzogQ29uZGl0aW9uO1xuICBASW5wdXQoKVxuICBwaXhlbFRvbGVyYW5jZT86IG51bWJlcjtcbiAgQElucHV0KClcbiAgc3R5bGU/OiBTdHlsZSB8IFN0eWxlW10gfCBTdHlsZUZ1bmN0aW9uO1xuICBASW5wdXQoKVxuICBmZWF0dXJlczogQ29sbGVjdGlvbjxGZWF0dXJlPjtcbiAgQElucHV0KClcbiAgd3JhcFg/OiBib29sZWFuO1xuICBASW5wdXQoKVxuICBzb3VyY2U/OiBWZWN0b3I7XG5cbiAgQE91dHB1dCgpXG4gIG9sQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxEcmF3RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKVxuICBvbENoYW5nZUFjdGl2ZSA9IG5ldyBFdmVudEVtaXR0ZXI8T2JqZWN0RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKVxuICBvbEVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxCYXNlRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKVxuICBvbE1vZGlmeUVuZCA9IG5ldyBFdmVudEVtaXR0ZXI8TW9kaWZ5RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKVxuICBvbE1vZGlmeVN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxNb2RpZnlFdmVudD4oKTtcbiAgQE91dHB1dCgpXG4gIHByb3BlcnR5Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxPYmplY3RFdmVudD4oKTtcblxuICBpbnN0YW5jZTogTW9kaWZ5O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBNb2RpZnkodGhpcyk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbignY2hhbmdlJywgKGV2ZW50OiBEcmF3RXZlbnQpID0+IHRoaXMub2xDaGFuZ2UuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2NoYW5nZTphY3RpdmUnLCAoZXZlbnQ6IE9iamVjdEV2ZW50KSA9PiB0aGlzLm9sQ2hhbmdlQWN0aXZlLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdlcnJvcicsIChldmVudDogQmFzZUV2ZW50KSA9PiB0aGlzLm9sRXJyb3IuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ21vZGlmeWVuZCcsIChldmVudDogTW9kaWZ5RXZlbnQpID0+IHRoaXMub2xNb2RpZnlFbmQuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ21vZGlmeXN0YXJ0JywgKGV2ZW50OiBNb2RpZnlFdmVudCkgPT4gdGhpcy5vbE1vZGlmeVN0YXJ0LmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdwcm9wZXJ0eWNoYW5nZScsIChldmVudDogT2JqZWN0RXZlbnQpID0+IHRoaXMucHJvcGVydHlDaGFuZ2UuZW1pdChldmVudCkpO1xuICAgIHRoaXMubWFwLmluc3RhbmNlLmFkZEludGVyYWN0aW9uKHRoaXMuaW5zdGFuY2UpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlSW50ZXJhY3Rpb24odGhpcy5pbnN0YW5jZSk7XG4gIH1cbn1cbiJdfQ==