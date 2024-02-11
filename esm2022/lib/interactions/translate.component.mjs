import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Translate } from 'ol/interaction';
import * as i0 from "@angular/core";
import * as i1 from "../map.component";
export class TranslateInteractionComponent {
    constructor(map) {
        this.map = map;
        this.olChange = new EventEmitter();
        this.olChangeActive = new EventEmitter();
        this.olError = new EventEmitter();
        this.propertyChange = new EventEmitter();
        this.translateEnd = new EventEmitter();
        this.translateStart = new EventEmitter();
        this.translating = new EventEmitter();
    }
    ngOnInit() {
        this.instance = new Translate(this);
        this.instance.on('change', (event) => this.olChange.emit(event));
        this.instance.on('change:active', (event) => this.olChangeActive.emit(event));
        this.instance.on('error', (event) => this.olError.emit(event));
        this.instance.on('propertychange', (event) => this.propertyChange.emit(event));
        this.instance.on('translateend', (event) => this.translateEnd.emit(event));
        this.instance.on('translatestart', (event) => this.translateStart.emit(event));
        this.instance.on('translating', (event) => this.translating.emit(event));
        this.map.instance.addInteraction(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
    static { this.ɵfac = function TranslateInteractionComponent_Factory(t) { return new (t || TranslateInteractionComponent)(i0.ɵɵdirectiveInject(i1.MapComponent)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TranslateInteractionComponent, selectors: [["aol-interaction-translate"]], inputs: { features: "features", layers: "layers", hitTolerance: "hitTolerance" }, outputs: { olChange: "olChange", olChangeActive: "olChangeActive", olError: "olError", propertyChange: "propertyChange", translateEnd: "translateEnd", translateStart: "translateStart", translating: "translating" }, decls: 0, vars: 0, template: function TranslateInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TranslateInteractionComponent, [{
        type: Component,
        args: [{
                selector: 'aol-interaction-translate',
                template: '',
            }]
    }], () => [{ type: i1.MapComponent }], { features: [{
            type: Input
        }], layers: [{
            type: Input
        }], hitTolerance: [{
            type: Input
        }], olChange: [{
            type: Output
        }], olChangeActive: [{
            type: Output
        }], olError: [{
            type: Output
        }], propertyChange: [{
            type: Output
        }], translateEnd: [{
            type: Output
        }], translateStart: [{
            type: Output
        }], translating: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TranslateInteractionComponent, { className: "TranslateInteractionComponent", filePath: "lib/interactions/translate.component.ts", lineNumber: 14 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvbmctb3BlbmxheWVycy9zcmMvbGliL2ludGVyYWN0aW9ucy90cmFuc2xhdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBWTNDLE1BQU0sT0FBTyw2QkFBNkI7SUF5QnhDLFlBQW9CLEdBQWlCO1FBQWpCLFFBQUcsR0FBSCxHQUFHLENBQWM7UUFoQnJDLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO1FBRXpDLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQWUsQ0FBQztRQUVqRCxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQztRQUV4QyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFlLENBQUM7UUFFakQsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBa0IsQ0FBQztRQUVsRCxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFrQixDQUFDO1FBRXBELGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQWtCLENBQUM7SUFJVCxDQUFDO0lBRXpDLFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXBDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQWdCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsZUFBZSxFQUFFLENBQUMsS0FBa0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUMzRixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFnQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzFFLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLENBQUMsS0FBa0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM1RixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxLQUFxQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzNGLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLENBQUMsS0FBcUIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUMvRixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxLQUFxQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBRXpGLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckQsQ0FBQzs4RkEzQ1UsNkJBQTZCO29FQUE3Qiw2QkFBNkI7O2lGQUE3Qiw2QkFBNkI7Y0FKekMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFFBQVEsRUFBRSxFQUFFO2FBQ2I7NkNBR0MsUUFBUTtrQkFEUCxLQUFLO1lBR04sTUFBTTtrQkFETCxLQUFLO1lBR04sWUFBWTtrQkFEWCxLQUFLO1lBSU4sUUFBUTtrQkFEUCxNQUFNO1lBR1AsY0FBYztrQkFEYixNQUFNO1lBR1AsT0FBTztrQkFETixNQUFNO1lBR1AsY0FBYztrQkFEYixNQUFNO1lBR1AsWUFBWTtrQkFEWCxNQUFNO1lBR1AsY0FBYztrQkFEYixNQUFNO1lBR1AsV0FBVztrQkFEVixNQUFNOztrRkFwQkksNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGUgfSBmcm9tICdvbC9pbnRlcmFjdGlvbic7XG5pbXBvcnQgeyBDb2xsZWN0aW9uLCBGZWF0dXJlIH0gZnJvbSAnb2wnO1xuaW1wb3J0IHsgTGF5ZXIgfSBmcm9tICdvbC9sYXllcic7XG5pbXBvcnQgeyBUcmFuc2xhdGVFdmVudCB9IGZyb20gJ29sL2ludGVyYWN0aW9uL1RyYW5zbGF0ZSc7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcbmltcG9ydCBCYXNlRXZlbnQgZnJvbSAnb2wvZXZlbnRzL0V2ZW50JztcbmltcG9ydCB7IE9iamVjdEV2ZW50IH0gZnJvbSAnb2wvT2JqZWN0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLWludGVyYWN0aW9uLXRyYW5zbGF0ZScsXG4gIHRlbXBsYXRlOiAnJyxcbn0pXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRlSW50ZXJhY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpXG4gIGZlYXR1cmVzPzogQ29sbGVjdGlvbjxGZWF0dXJlPjtcbiAgQElucHV0KClcbiAgbGF5ZXJzPzogTGF5ZXJbXSB8ICgobGF5ZXI6IExheWVyKSA9PiBib29sZWFuKTtcbiAgQElucHV0KClcbiAgaGl0VG9sZXJhbmNlPzogbnVtYmVyO1xuXG4gIEBPdXRwdXQoKVxuICBvbENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8QmFzZUV2ZW50PigpO1xuICBAT3V0cHV0KClcbiAgb2xDaGFuZ2VBY3RpdmUgPSBuZXcgRXZlbnRFbWl0dGVyPE9iamVjdEV2ZW50PigpO1xuICBAT3V0cHV0KClcbiAgb2xFcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8QmFzZUV2ZW50PigpO1xuICBAT3V0cHV0KClcbiAgcHJvcGVydHlDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE9iamVjdEV2ZW50PigpO1xuICBAT3V0cHV0KClcbiAgdHJhbnNsYXRlRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxUcmFuc2xhdGVFdmVudD4oKTtcbiAgQE91dHB1dCgpXG4gIHRyYW5zbGF0ZVN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxUcmFuc2xhdGVFdmVudD4oKTtcbiAgQE91dHB1dCgpXG4gIHRyYW5zbGF0aW5nID0gbmV3IEV2ZW50RW1pdHRlcjxUcmFuc2xhdGVFdmVudD4oKTtcblxuICBpbnN0YW5jZTogVHJhbnNsYXRlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBUcmFuc2xhdGUodGhpcyk7XG5cbiAgICB0aGlzLmluc3RhbmNlLm9uKCdjaGFuZ2UnLCAoZXZlbnQ6IEJhc2VFdmVudCkgPT4gdGhpcy5vbENoYW5nZS5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbignY2hhbmdlOmFjdGl2ZScsIChldmVudDogT2JqZWN0RXZlbnQpID0+IHRoaXMub2xDaGFuZ2VBY3RpdmUuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2Vycm9yJywgKGV2ZW50OiBCYXNlRXZlbnQpID0+IHRoaXMub2xFcnJvci5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbigncHJvcGVydHljaGFuZ2UnLCAoZXZlbnQ6IE9iamVjdEV2ZW50KSA9PiB0aGlzLnByb3BlcnR5Q2hhbmdlLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCd0cmFuc2xhdGVlbmQnLCAoZXZlbnQ6IFRyYW5zbGF0ZUV2ZW50KSA9PiB0aGlzLnRyYW5zbGF0ZUVuZC5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbigndHJhbnNsYXRlc3RhcnQnLCAoZXZlbnQ6IFRyYW5zbGF0ZUV2ZW50KSA9PiB0aGlzLnRyYW5zbGF0ZVN0YXJ0LmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCd0cmFuc2xhdGluZycsIChldmVudDogVHJhbnNsYXRlRXZlbnQpID0+IHRoaXMudHJhbnNsYXRpbmcuZW1pdChldmVudCkpO1xuXG4gICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkSW50ZXJhY3Rpb24odGhpcy5pbnN0YW5jZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcbiAgfVxufVxuIl19