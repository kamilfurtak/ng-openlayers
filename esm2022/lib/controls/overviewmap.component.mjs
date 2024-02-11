import { Component, Input } from '@angular/core';
import { OverviewMap } from 'ol/control';
import * as i0 from "@angular/core";
import * as i1 from "../map.component";
const _c0 = ["*"];
export class ControlOverviewMapComponent {
    constructor(map) {
        this.map = map;
    }
    ngOnInit() {
        this.instance = new OverviewMap(this);
        this.map.instance.addControl(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeControl(this.instance);
    }
    ngOnChanges(changes) {
        if (this.instance != null && changes.hasOwnProperty('view')) {
            this.reloadInstance();
        }
    }
    reloadInstance() {
        this.map.instance.removeControl(this.instance);
        this.instance = new OverviewMap(this);
        this.map.instance.addControl(this.instance);
    }
    static { this.ɵfac = function ControlOverviewMapComponent_Factory(t) { return new (t || ControlOverviewMapComponent)(i0.ɵɵdirectiveInject(i1.MapComponent)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ControlOverviewMapComponent, selectors: [["aol-control-overviewmap"]], inputs: { collapsed: "collapsed", collapseLabel: "collapseLabel", collapsible: "collapsible", label: "label", layers: "layers", target: "target", tipLabel: "tipLabel", view: "view" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function ControlOverviewMapComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ControlOverviewMapComponent, [{
        type: Component,
        args: [{
                selector: 'aol-control-overviewmap',
                template: ` <ng-content></ng-content> `,
            }]
    }], () => [{ type: i1.MapComponent }], { collapsed: [{
            type: Input
        }], collapseLabel: [{
            type: Input
        }], collapsible: [{
            type: Input
        }], label: [{
            type: Input
        }], layers: [{
            type: Input
        }], target: [{
            type: Input
        }], tipLabel: [{
            type: Input
        }], view: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ControlOverviewMapComponent, { className: "ControlOverviewMapComponent", filePath: "lib/controls/overviewmap.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcnZpZXdtYXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9uZy1vcGVubGF5ZXJzL3NyYy9saWIvY29udHJvbHMvb3ZlcnZpZXdtYXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUErQyxNQUFNLGVBQWUsQ0FBQztBQUc5RixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sWUFBWSxDQUFDOzs7O0FBT3pDLE1BQU0sT0FBTywyQkFBMkI7SUFvQnRDLFlBQW9CLEdBQWlCO1FBQWpCLFFBQUcsR0FBSCxHQUFHLENBQWM7SUFBRyxDQUFDO0lBRXpDLFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7WUFDNUQsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLENBQUM7SUFDSCxDQUFDO0lBRU8sY0FBYztRQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QyxDQUFDOzRGQXpDVSwyQkFBMkI7b0VBQTNCLDJCQUEyQjs7WUFGMUIsa0JBQXlCOzs7aUZBRTFCLDJCQUEyQjtjQUp2QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsUUFBUSxFQUFFLDZCQUE2QjthQUN4Qzs2Q0FHQyxTQUFTO2tCQURSLEtBQUs7WUFHTixhQUFhO2tCQURaLEtBQUs7WUFHTixXQUFXO2tCQURWLEtBQUs7WUFHTixLQUFLO2tCQURKLEtBQUs7WUFHTixNQUFNO2tCQURMLEtBQUs7WUFHTixNQUFNO2tCQURMLEtBQUs7WUFHTixRQUFRO2tCQURQLEtBQUs7WUFHTixJQUFJO2tCQURILEtBQUs7O2tGQWZLLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExheWVyIH0gZnJvbSAnb2wvbGF5ZXInO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gJ29sJztcbmltcG9ydCB7IE92ZXJ2aWV3TWFwIH0gZnJvbSAnb2wvY29udHJvbCc7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLWNvbnRyb2wtb3ZlcnZpZXdtYXAnLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG59KVxuZXhwb3J0IGNsYXNzIENvbnRyb2xPdmVydmlld01hcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKVxuICBjb2xsYXBzZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIGNvbGxhcHNlTGFiZWw6IHN0cmluZztcbiAgQElucHV0KClcbiAgY29sbGFwc2libGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIGxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGxheWVyczogTGF5ZXJbXTtcbiAgQElucHV0KClcbiAgdGFyZ2V0OiBIVE1MRWxlbWVudDtcbiAgQElucHV0KClcbiAgdGlwTGFiZWw6IHN0cmluZztcbiAgQElucHV0KClcbiAgdmlldzogVmlldztcblxuICBpbnN0YW5jZTogT3ZlcnZpZXdNYXA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IE92ZXJ2aWV3TWFwKHRoaXMpO1xuICAgIHRoaXMubWFwLmluc3RhbmNlLmFkZENvbnRyb2wodGhpcy5pbnN0YW5jZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVDb250cm9sKHRoaXMuaW5zdGFuY2UpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmICh0aGlzLmluc3RhbmNlICE9IG51bGwgJiYgY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgndmlldycpKSB7XG4gICAgICB0aGlzLnJlbG9hZEluc3RhbmNlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZWxvYWRJbnN0YW5jZSgpIHtcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVDb250cm9sKHRoaXMuaW5zdGFuY2UpO1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgT3ZlcnZpZXdNYXAodGhpcyk7XG4gICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkQ29udHJvbCh0aGlzLmluc3RhbmNlKTtcbiAgfVxufVxuIl19