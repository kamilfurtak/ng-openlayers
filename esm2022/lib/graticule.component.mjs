import { Component, Input } from '@angular/core';
import { Graticule } from 'ol';
import * as i0 from "@angular/core";
import * as i1 from "./map.component";
const _c0 = ["*"];
export class GraticuleComponent {
    constructor(map) {
        this.map = map;
        this.componentType = 'graticule';
    }
    ngOnChanges(changes) {
        const properties = {};
        if (!this.instance) {
            return;
        }
        for (const key in changes) {
            if (changes.hasOwnProperty(key)) {
                properties[key] = changes[key].currentValue;
            }
        }
        if (properties) {
            this.instance = new Graticule(properties);
        }
        this.instance.setMap(this.map.instance);
    }
    ngAfterContentInit() {
        this.instance = new Graticule({
            strokeStyle: this.strokeStyle,
            showLabels: this.showLabels,
            lonLabelPosition: this.lonLabelPosition,
            latLabelPosition: this.latLabelPosition,
        });
        this.instance.setMap(this.map.instance);
    }
    ngOnDestroy() {
        this.instance.setMap(null);
    }
    static { this.ɵfac = function GraticuleComponent_Factory(t) { return new (t || GraticuleComponent)(i0.ɵɵdirectiveInject(i1.MapComponent)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GraticuleComponent, selectors: [["aol-graticule"]], inputs: { strokeStyle: "strokeStyle", showLabels: "showLabels", lonLabelPosition: "lonLabelPosition", latLabelPosition: "latLabelPosition" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function GraticuleComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GraticuleComponent, [{
        type: Component,
        args: [{
                selector: 'aol-graticule',
                template: '<ng-content></ng-content>',
            }]
    }], () => [{ type: i1.MapComponent }], { strokeStyle: [{
            type: Input
        }], showLabels: [{
            type: Input
        }], lonLabelPosition: [{
            type: Input
        }], latLabelPosition: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(GraticuleComponent, { className: "GraticuleComponent", filePath: "lib/graticule.component.ts", lineNumber: 10 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhdGljdWxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpYnMvbmctb3BlbmxheWVycy9zcmMvbGliL2dyYXRpY3VsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXlELE1BQU0sZUFBZSxDQUFDO0FBQ3hHLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxJQUFJLENBQUM7Ozs7QUFRL0IsTUFBTSxPQUFPLGtCQUFrQjtJQWE3QixZQUFvQixHQUFpQjtRQUFqQixRQUFHLEdBQUgsR0FBRyxDQUFjO1FBRjlCLGtCQUFhLEdBQUcsV0FBVyxDQUFDO0lBRUssQ0FBQztJQUV6QyxXQUFXLENBQUMsT0FBc0I7UUFDaEMsTUFBTSxVQUFVLEdBQTZCLEVBQUUsQ0FBQztRQUVoRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ25CLE9BQU87UUFDVCxDQUFDO1FBRUQsS0FBSyxNQUFNLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztZQUMxQixJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztnQkFDaEMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUM7WUFDOUMsQ0FBQztRQUNILENBQUM7UUFFRCxJQUFJLFVBQVUsRUFBRSxDQUFDO1lBQ2YsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM1QyxDQUFDO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxTQUFTLENBQUM7WUFDNUIsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1lBQ3ZDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0I7U0FDeEMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7bUZBOUNVLGtCQUFrQjtvRUFBbEIsa0JBQWtCOztZQUZsQixrQkFBeUI7OztpRkFFekIsa0JBQWtCO2NBSjlCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsUUFBUSxFQUFFLDJCQUEyQjthQUN0Qzs2Q0FHQyxXQUFXO2tCQURWLEtBQUs7WUFHTixVQUFVO2tCQURULEtBQUs7WUFHTixnQkFBZ0I7a0JBRGYsS0FBSztZQUdOLGdCQUFnQjtrQkFEZixLQUFLOztrRkFQSyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR3JhdGljdWxlIH0gZnJvbSAnb2wnO1xuaW1wb3J0IHsgU3Ryb2tlIH0gZnJvbSAnb2wvc3R5bGUnO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi9tYXAuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLWdyYXRpY3VsZScsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG59KVxuZXhwb3J0IGNsYXNzIEdyYXRpY3VsZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgQElucHV0KClcbiAgc3Ryb2tlU3R5bGU6IFN0cm9rZTtcbiAgQElucHV0KClcbiAgc2hvd0xhYmVsczogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgbG9uTGFiZWxQb3NpdGlvbjogbnVtYmVyO1xuICBASW5wdXQoKVxuICBsYXRMYWJlbFBvc2l0aW9uOiBudW1iZXI7XG5cbiAgaW5zdGFuY2U6IGFueTtcbiAgcHVibGljIGNvbXBvbmVudFR5cGUgPSAnZ3JhdGljdWxlJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzOiB7IFtpbmRleDogc3RyaW5nXTogYW55IH0gPSB7fTtcblxuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAoY29uc3Qga2V5IGluIGNoYW5nZXMpIHtcbiAgICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgcHJvcGVydGllc1trZXldID0gY2hhbmdlc1trZXldLmN1cnJlbnRWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocHJvcGVydGllcykge1xuICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBHcmF0aWN1bGUocHJvcGVydGllcyk7XG4gICAgfVxuICAgIHRoaXMuaW5zdGFuY2Uuc2V0TWFwKHRoaXMubWFwLmluc3RhbmNlKTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IEdyYXRpY3VsZSh7XG4gICAgICBzdHJva2VTdHlsZTogdGhpcy5zdHJva2VTdHlsZSxcbiAgICAgIHNob3dMYWJlbHM6IHRoaXMuc2hvd0xhYmVscyxcbiAgICAgIGxvbkxhYmVsUG9zaXRpb246IHRoaXMubG9uTGFiZWxQb3NpdGlvbixcbiAgICAgIGxhdExhYmVsUG9zaXRpb246IHRoaXMubGF0TGFiZWxQb3NpdGlvbixcbiAgICB9KTtcbiAgICB0aGlzLmluc3RhbmNlLnNldE1hcCh0aGlzLm1hcC5pbnN0YW5jZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmluc3RhbmNlLnNldE1hcChudWxsKTtcbiAgfVxufVxuIl19