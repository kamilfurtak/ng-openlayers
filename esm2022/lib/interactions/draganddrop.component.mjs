import { Component, Input } from '@angular/core';
import { DragAndDrop } from 'ol/interaction';
import * as i0 from "@angular/core";
import * as i1 from "../map.component";
export class DragAndDropInteractionComponent {
    constructor(map) {
        this.map = map;
    }
    ngOnInit() {
        this.instance = new DragAndDrop(this);
        this.map.instance.addInteraction(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
    static { this.ɵfac = function DragAndDropInteractionComponent_Factory(t) { return new (t || DragAndDropInteractionComponent)(i0.ɵɵdirectiveInject(i1.MapComponent)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DragAndDropInteractionComponent, selectors: [["aol-interaction-draganddrop"]], inputs: { formatConstructors: "formatConstructors", projection: "projection", target: "target" }, decls: 0, vars: 0, template: function DragAndDropInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DragAndDropInteractionComponent, [{
        type: Component,
        args: [{
                selector: 'aol-interaction-draganddrop',
                template: '',
            }]
    }], () => [{ type: i1.MapComponent }], { formatConstructors: [{
            type: Input
        }], projection: [{
            type: Input
        }], target: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DragAndDropInteractionComponent, { className: "DragAndDropInteractionComponent", filePath: "lib/interactions/draganddrop.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2FuZGRyb3AuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9uZy1vcGVubGF5ZXJzL3NyYy9saWIvaW50ZXJhY3Rpb25zL2RyYWdhbmRkcm9wLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFTN0MsTUFBTSxPQUFPLCtCQUErQjtJQVUxQyxZQUFvQixHQUFpQjtRQUFqQixRQUFHLEdBQUgsR0FBRyxDQUFjO0lBQUcsQ0FBQztJQUV6QyxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JELENBQUM7Z0dBbkJVLCtCQUErQjtvRUFBL0IsK0JBQStCOztpRkFBL0IsK0JBQStCO2NBSjNDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsNkJBQTZCO2dCQUN2QyxRQUFRLEVBQUUsRUFBRTthQUNiOzZDQUdDLGtCQUFrQjtrQkFEakIsS0FBSztZQUdOLFVBQVU7a0JBRFQsS0FBSztZQUdOLE1BQU07a0JBREwsS0FBSzs7a0ZBTEssK0JBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERyYWdBbmREcm9wIH0gZnJvbSAnb2wvaW50ZXJhY3Rpb24nO1xuaW1wb3J0IEZlYXR1cmVGb3JtYXQgZnJvbSAnb2wvZm9ybWF0L0ZlYXR1cmUnO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9qZWN0aW9uTGlrZSB9IGZyb20gJ29sL3Byb2onO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtaW50ZXJhY3Rpb24tZHJhZ2FuZGRyb3AnLFxuICB0ZW1wbGF0ZTogJycsXG59KVxuZXhwb3J0IGNsYXNzIERyYWdBbmREcm9wSW50ZXJhY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpXG4gIGZvcm1hdENvbnN0cnVjdG9yczogRmVhdHVyZUZvcm1hdFtdO1xuICBASW5wdXQoKVxuICBwcm9qZWN0aW9uOiBQcm9qZWN0aW9uTGlrZTtcbiAgQElucHV0KClcbiAgdGFyZ2V0OiBIVE1MRWxlbWVudDtcblxuICBpbnN0YW5jZTogRHJhZ0FuZERyb3A7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IERyYWdBbmREcm9wKHRoaXMpO1xuICAgIHRoaXMubWFwLmluc3RhbmNlLmFkZEludGVyYWN0aW9uKHRoaXMuaW5zdGFuY2UpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlSW50ZXJhY3Rpb24odGhpcy5pbnN0YW5jZSk7XG4gIH1cbn1cbiJdfQ==