import { Component, Input } from '@angular/core';
import { defaults } from 'ol/control';
import * as i0 from "@angular/core";
import * as i1 from "../map.component";
export class DefaultControlComponent {
    constructor(map) {
        this.map = map;
    }
    ngOnInit() {
        // console.log('ol.control.defaults init: ', this);
        this.instance = defaults(this);
        this.instance.forEach((c) => this.map.instance.addControl(c));
    }
    ngOnDestroy() {
        // console.log('removing aol-control-defaults');
        this.instance.forEach((c) => this.map.instance.removeControl(c));
    }
    static { this.ɵfac = function DefaultControlComponent_Factory(t) { return new (t || DefaultControlComponent)(i0.ɵɵdirectiveInject(i1.MapComponent)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DefaultControlComponent, selectors: [["aol-control-defaults"]], inputs: { attribution: "attribution", attributionOptions: "attributionOptions", rotate: "rotate", rotateOptions: "rotateOptions", zoom: "zoom", zoomOptions: "zoomOptions" }, decls: 0, vars: 0, template: function DefaultControlComponent_Template(rf, ctx) { }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DefaultControlComponent, [{
        type: Component,
        args: [{
                selector: 'aol-control-defaults',
                template: '',
            }]
    }], () => [{ type: i1.MapComponent }], { attribution: [{
            type: Input
        }], attributionOptions: [{
            type: Input
        }], rotate: [{
            type: Input
        }], rotateOptions: [{
            type: Input
        }], zoom: [{
            type: Input
        }], zoomOptions: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DefaultControlComponent, { className: "DefaultControlComponent", filePath: "lib/controls/default.component.ts", lineNumber: 14 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL25nLW9wZW5sYXllcnMvc3JjL2xpYi9jb250cm9scy9kZWZhdWx0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFXLFFBQVEsRUFBRSxNQUFNLFlBQVksQ0FBQzs7O0FBWS9DLE1BQU0sT0FBTyx1QkFBdUI7SUFnQmxDLFlBQW9CLEdBQWlCO1FBQWpCLFFBQUcsR0FBSCxHQUFHLENBQWM7SUFBRyxDQUFDO0lBRXpDLFFBQVE7UUFDTixtREFBbUQ7UUFDbkQsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCxXQUFXO1FBQ1QsZ0RBQWdEO1FBQ2hELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDO3dGQTNCVSx1QkFBdUI7b0VBQXZCLHVCQUF1Qjs7aUZBQXZCLHVCQUF1QjtjQUpuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsUUFBUSxFQUFFLEVBQUU7YUFDYjs2Q0FHQyxXQUFXO2tCQURWLEtBQUs7WUFHTixrQkFBa0I7a0JBRGpCLEtBQUs7WUFHTixNQUFNO2tCQURMLEtBQUs7WUFHTixhQUFhO2tCQURaLEtBQUs7WUFHTixJQUFJO2tCQURILEtBQUs7WUFHTixXQUFXO2tCQURWLEtBQUs7O2tGQVhLLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sLCBkZWZhdWx0cyB9IGZyb20gJ29sL2NvbnRyb2wnO1xuaW1wb3J0IHsgQ29sbGVjdGlvbiB9IGZyb20gJ29sJztcbmltcG9ydCB7IE9wdGlvbnMgYXMgQXR0cmlidXRpb25PcHRpb25zIH0gZnJvbSAnb2wvY29udHJvbC9BdHRyaWJ1dGlvbic7XG5pbXBvcnQgeyBPcHRpb25zIGFzIFJvdGF0ZU9wdGlvbnMgfSBmcm9tICdvbC9jb250cm9sL1JvdGF0ZSc7XG5pbXBvcnQgeyBPcHRpb25zIGFzIFpvb21PcHRpb25zIH0gZnJvbSAnb2wvY29udHJvbC9ab29tJztcblxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1jb250cm9sLWRlZmF1bHRzJyxcbiAgdGVtcGxhdGU6ICcnLFxufSlcbmV4cG9ydCBjbGFzcyBEZWZhdWx0Q29udHJvbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KClcbiAgYXR0cmlidXRpb246IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIGF0dHJpYnV0aW9uT3B0aW9uczogQXR0cmlidXRpb25PcHRpb25zO1xuICBASW5wdXQoKVxuICByb3RhdGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHJvdGF0ZU9wdGlvbnM6IFJvdGF0ZU9wdGlvbnM7XG4gIEBJbnB1dCgpXG4gIHpvb206IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHpvb21PcHRpb25zOiBab29tT3B0aW9ucztcblxuICBpbnN0YW5jZTogQ29sbGVjdGlvbjxDb250cm9sPjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdvbC5jb250cm9sLmRlZmF1bHRzIGluaXQ6ICcsIHRoaXMpO1xuICAgIHRoaXMuaW5zdGFuY2UgPSBkZWZhdWx0cyh0aGlzKTtcbiAgICB0aGlzLmluc3RhbmNlLmZvckVhY2goKGMpID0+IHRoaXMubWFwLmluc3RhbmNlLmFkZENvbnRyb2woYykpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ3JlbW92aW5nIGFvbC1jb250cm9sLWRlZmF1bHRzJyk7XG4gICAgdGhpcy5pbnN0YW5jZS5mb3JFYWNoKChjKSA9PiB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVDb250cm9sKGMpKTtcbiAgfVxufVxuIl19