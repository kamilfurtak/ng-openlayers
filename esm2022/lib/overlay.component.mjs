import { Component, ContentChild, Input } from '@angular/core';
import Overlay from 'ol/Overlay';
import { ContentComponent } from './content.component';
import * as i0 from "@angular/core";
import * as i1 from "./map.component";
const _c0 = ["*"];
export class OverlayComponent {
    constructor(map) {
        this.map = map;
        this.componentType = 'overlay';
    }
    ngOnInit() {
        if (this.content) {
            this.element = this.content.elementRef.nativeElement;
            this.instance = new Overlay(this);
            this.map.instance.addOverlay(this.instance);
        }
    }
    ngOnDestroy() {
        if (this.instance) {
            this.map.instance.removeOverlay(this.instance);
        }
    }
    static { this.ɵfac = function OverlayComponent_Factory(t) { return new (t || OverlayComponent)(i0.ɵɵdirectiveInject(i1.MapComponent)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: OverlayComponent, selectors: [["aol-overlay"]], contentQueries: function OverlayComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, ContentComponent, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.content = _t.first);
        } }, inputs: { id: "id", offset: "offset", positioning: "positioning", stopEvent: "stopEvent", insertFirst: "insertFirst", autoPan: "autoPan", autoPanAnimation: "autoPanAnimation", autoPanMargin: "autoPanMargin" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function OverlayComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OverlayComponent, [{
        type: Component,
        args: [{
                selector: 'aol-overlay',
                template: '<ng-content></ng-content>',
            }]
    }], () => [{ type: i1.MapComponent }], { content: [{
            type: ContentChild,
            args: [ContentComponent, { static: true }]
        }], id: [{
            type: Input
        }], offset: [{
            type: Input
        }], positioning: [{
            type: Input
        }], stopEvent: [{
            type: Input
        }], insertFirst: [{
            type: Input
        }], autoPan: [{
            type: Input
        }], autoPanAnimation: [{
            type: Input
        }], autoPanMargin: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(OverlayComponent, { className: "OverlayComponent", filePath: "lib/overlay.component.ts", lineNumber: 10 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9saWJzL25nLW9wZW5sYXllcnMvc3JjL2xpYi9vdmVybGF5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBRWxGLE9BQU8sT0FBb0MsTUFBTSxZQUFZLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7QUFNdkQsTUFBTSxPQUFPLGdCQUFnQjtJQXlCM0IsWUFBb0IsR0FBaUI7UUFBakIsUUFBRyxHQUFILEdBQUcsQ0FBYztRQUpyQyxrQkFBYSxHQUFHLFNBQVMsQ0FBQztJQUljLENBQUM7SUFFekMsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1lBQ3JELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QyxDQUFDO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2pELENBQUM7SUFDSCxDQUFDO2lGQXZDVSxnQkFBZ0I7b0VBQWhCLGdCQUFnQjt3Q0FDYixnQkFBZ0I7Ozs7OztZQUhuQixrQkFBeUI7OztpRkFFekIsZ0JBQWdCO2NBSjVCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFLDJCQUEyQjthQUN0Qzs2Q0FHQyxPQUFPO2tCQUROLFlBQVk7bUJBQUMsZ0JBQWdCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBSWhELEVBQUU7a0JBREQsS0FBSztZQUdOLE1BQU07a0JBREwsS0FBSztZQUdOLFdBQVc7a0JBRFYsS0FBSztZQUdOLFNBQVM7a0JBRFIsS0FBSztZQUdOLFdBQVc7a0JBRFYsS0FBSztZQUdOLE9BQU87a0JBRE4sS0FBSztZQUdOLGdCQUFnQjtrQkFEZixLQUFLO1lBR04sYUFBYTtrQkFEWixLQUFLOztrRkFsQkssZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi9tYXAuY29tcG9uZW50JztcbmltcG9ydCBPdmVybGF5LCB7IFBhbk9wdGlvbnMsIFBvc2l0aW9uaW5nIH0gZnJvbSAnb2wvT3ZlcmxheSc7XG5pbXBvcnQgeyBDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi9jb250ZW50LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1vdmVybGF5JyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+Jyxcbn0pXG5leHBvcnQgY2xhc3MgT3ZlcmxheUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQENvbnRlbnRDaGlsZChDb250ZW50Q29tcG9uZW50LCB7IHN0YXRpYzogdHJ1ZSB9KVxuICBjb250ZW50OiBDb250ZW50Q29tcG9uZW50O1xuXG4gIEBJbnB1dCgpXG4gIGlkOiBudW1iZXIgfCBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIG9mZnNldDogbnVtYmVyW107XG4gIEBJbnB1dCgpXG4gIHBvc2l0aW9uaW5nOiBQb3NpdGlvbmluZztcbiAgQElucHV0KClcbiAgc3RvcEV2ZW50OiBib29sZWFuO1xuICBASW5wdXQoKVxuICBpbnNlcnRGaXJzdDogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgYXV0b1BhbjogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgYXV0b1BhbkFuaW1hdGlvbjogUGFuT3B0aW9ucztcbiAgQElucHV0KClcbiAgYXV0b1Bhbk1hcmdpbjogbnVtYmVyO1xuXG4gIGNvbXBvbmVudFR5cGUgPSAnb3ZlcmxheSc7XG4gIGluc3RhbmNlOiBPdmVybGF5O1xuICBlbGVtZW50OiBIVE1MRWxlbWVudDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLmNvbnRlbnQpIHtcbiAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuY29udGVudC5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICB0aGlzLmluc3RhbmNlID0gbmV3IE92ZXJsYXkodGhpcyk7XG4gICAgICB0aGlzLm1hcC5pbnN0YW5jZS5hZGRPdmVybGF5KHRoaXMuaW5zdGFuY2UpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVPdmVybGF5KHRoaXMuaW5zdGFuY2UpO1xuICAgIH1cbiAgfVxufVxuIl19