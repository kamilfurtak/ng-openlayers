import { Component, Input, Optional } from '@angular/core';
import { Style } from 'ol/style';
import * as i0 from "@angular/core";
import * as i1 from "../feature.component";
import * as i2 from "../layers/layervector.component";
const _c0 = ["*"];
export class StyleComponent {
    constructor(featureHost, layerHost) {
        this.componentType = 'style';
        // console.log('creating aol-style');
        this.host = !!featureHost ? featureHost : layerHost;
        if (!this.host) {
            throw new Error('aol-style must be applied to a feature or a layer');
        }
    }
    update() {
        // console.log('updating style\'s host: ', this.host);
        this.host.instance.changed();
    }
    ngOnInit() {
        // console.log('creating aol-style instance with: ', this);
        this.instance = new Style(this);
        this.host.instance.setStyle(this.instance);
    }
    static { this.ɵfac = function StyleComponent_Factory(t) { return new (t || StyleComponent)(i0.ɵɵdirectiveInject(i1.FeatureComponent, 8), i0.ɵɵdirectiveInject(i2.LayerVectorComponent, 8)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StyleComponent, selectors: [["aol-style"]], inputs: { geometry: "geometry", fill: "fill", image: "image", stroke: "stroke", text: "text", zIndex: "zIndex" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function StyleComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StyleComponent, [{
        type: Component,
        args: [{
                selector: 'aol-style',
                template: ` <ng-content></ng-content> `,
            }]
    }], () => [{ type: i1.FeatureComponent, decorators: [{
                type: Optional
            }] }, { type: i2.LayerVectorComponent, decorators: [{
                type: Optional
            }] }], { geometry: [{
            type: Input
        }], fill: [{
            type: Input
        }], image: [{
            type: Input
        }], stroke: [{
            type: Input
        }], text: [{
            type: Input
        }], zIndex: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StyleComponent, { className: "StyleComponent", filePath: "lib/styles/style.component.ts", lineNumber: 12 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9uZy1vcGVubGF5ZXJzL3NyYy9saWIvc3R5bGVzL3N0eWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUF1QixLQUFLLEVBQVEsTUFBTSxVQUFVLENBQUM7Ozs7O0FBVTVELE1BQU0sT0FBTyxjQUFjO0lBa0J6QixZQUF3QixXQUE2QixFQUFjLFNBQStCO1FBSDNGLGtCQUFhLEdBQUcsT0FBTyxDQUFDO1FBSTdCLHFDQUFxQztRQUNyQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3BELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDZixNQUFNLElBQUksS0FBSyxDQUFDLG1EQUFtRCxDQUFDLENBQUM7UUFDdkUsQ0FBQztJQUNILENBQUM7SUFFRCxNQUFNO1FBQ0osc0RBQXNEO1FBQ3RELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRCxRQUFRO1FBQ04sMkRBQTJEO1FBQzNELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM3QyxDQUFDOytFQW5DVSxjQUFjO29FQUFkLGNBQWM7O1lBRmIsa0JBQXlCOzs7aUZBRTFCLGNBQWM7Y0FKMUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixRQUFRLEVBQUUsNkJBQTZCO2FBQ3hDOztzQkFtQmMsUUFBUTs7c0JBQW1DLFFBQVE7cUJBaEJoRSxRQUFRO2tCQURQLEtBQUs7WUFHTixJQUFJO2tCQURILEtBQUs7WUFHTixLQUFLO2tCQURKLEtBQUs7WUFHTixNQUFNO2tCQURMLEtBQUs7WUFHTixJQUFJO2tCQURILEtBQUs7WUFHTixNQUFNO2tCQURMLEtBQUs7O2tGQVhLLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPcHRpb25hbCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGaWxsLCBJbWFnZSwgU3Ryb2tlLCBTdHlsZSwgVGV4dCB9IGZyb20gJ29sL3N0eWxlJztcbmltcG9ydCB7IEdlb21ldHJ5IH0gZnJvbSAnb2wvZ2VvbSc7XG5pbXBvcnQgeyBGZWF0dXJlQ29tcG9uZW50IH0gZnJvbSAnLi4vZmVhdHVyZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGF5ZXJWZWN0b3JDb21wb25lbnQgfSBmcm9tICcuLi9sYXllcnMvbGF5ZXJ2ZWN0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IEdlb21ldHJ5RnVuY3Rpb24gfSBmcm9tICdvbC9zdHlsZS9TdHlsZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1zdHlsZScsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbn0pXG5leHBvcnQgY2xhc3MgU3R5bGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKVxuICBnZW9tZXRyeTogc3RyaW5nIHwgR2VvbWV0cnkgfCBHZW9tZXRyeUZ1bmN0aW9uO1xuICBASW5wdXQoKVxuICBmaWxsOiBGaWxsO1xuICBASW5wdXQoKVxuICBpbWFnZTogSW1hZ2U7XG4gIEBJbnB1dCgpXG4gIHN0cm9rZTogU3Ryb2tlO1xuICBASW5wdXQoKVxuICB0ZXh0OiBUZXh0O1xuICBASW5wdXQoKVxuICB6SW5kZXg6IG51bWJlcjtcblxuICBwdWJsaWMgaW5zdGFuY2U6IFN0eWxlO1xuICBwdWJsaWMgY29tcG9uZW50VHlwZSA9ICdzdHlsZSc7XG4gIHByaXZhdGUgcmVhZG9ubHkgaG9zdDogRmVhdHVyZUNvbXBvbmVudCB8IExheWVyVmVjdG9yQ29tcG9uZW50O1xuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIGZlYXR1cmVIb3N0OiBGZWF0dXJlQ29tcG9uZW50LCBAT3B0aW9uYWwoKSBsYXllckhvc3Q6IExheWVyVmVjdG9yQ29tcG9uZW50KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2NyZWF0aW5nIGFvbC1zdHlsZScpO1xuICAgIHRoaXMuaG9zdCA9ICEhZmVhdHVyZUhvc3QgPyBmZWF0dXJlSG9zdCA6IGxheWVySG9zdDtcbiAgICBpZiAoIXRoaXMuaG9zdCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdhb2wtc3R5bGUgbXVzdCBiZSBhcHBsaWVkIHRvIGEgZmVhdHVyZSBvciBhIGxheWVyJyk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCd1cGRhdGluZyBzdHlsZVxcJ3MgaG9zdDogJywgdGhpcy5ob3N0KTtcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2UuY2hhbmdlZCgpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2NyZWF0aW5nIGFvbC1zdHlsZSBpbnN0YW5jZSB3aXRoOiAnLCB0aGlzKTtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFN0eWxlKHRoaXMpO1xuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRTdHlsZSh0aGlzLmluc3RhbmNlKTtcbiAgfVxufVxuIl19