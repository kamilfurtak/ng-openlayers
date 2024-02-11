import { Component, Input, Host } from '@angular/core';
import { Circle } from 'ol/style';
import * as i0 from "@angular/core";
import * as i1 from "./style.component";
const _c0 = ["*"];
export class StyleCircleComponent {
    constructor(host) {
        this.host = host;
        this.componentType = 'style-circle';
    }
    /**
     * WORK-AROUND: since the re-rendering is not triggered on style change
     * we trigger a radius change.
     * see openlayers #6233 and #5775
     */
    update() {
        if (!!this.instance) {
            // console.log('setting ol.style.Circle instance\'s radius');
            this.instance.setRadius(this.radius);
        }
        this.host.update();
    }
    ngAfterContentInit() {
        // console.log('creating ol.style.Circle instance with: ', this);
        this.instance = new Circle(this);
        this.host.instance.setImage(this.instance);
        this.host.update();
    }
    ngOnChanges(changes) {
        if (!this.instance) {
            return;
        }
        if (changes.radius) {
            this.instance.setRadius(changes.radius.currentValue);
        }
        // console.log('changes detected in aol-style-circle, setting new radius: ', changes['radius'].currentValue);
    }
    ngOnDestroy() {
        // console.log('removing aol-style-circle');
        this.host.instance.setImage(null);
    }
    static { this.ɵfac = function StyleCircleComponent_Factory(t) { return new (t || StyleCircleComponent)(i0.ɵɵdirectiveInject(i1.StyleComponent, 1)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StyleCircleComponent, selectors: [["aol-style-circle"]], inputs: { fill: "fill", radius: "radius", snapToPixel: "snapToPixel", stroke: "stroke" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function StyleCircleComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StyleCircleComponent, [{
        type: Component,
        args: [{
                selector: 'aol-style-circle',
                template: ` <ng-content></ng-content> `,
            }]
    }], () => [{ type: i1.StyleComponent, decorators: [{
                type: Host
            }] }], { fill: [{
            type: Input
        }], radius: [{
            type: Input
        }], snapToPixel: [{
            type: Input
        }], stroke: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StyleCircleComponent, { className: "StyleCircleComponent", filePath: "lib/styles/circle.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2lyY2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvbmctb3BlbmxheWVycy9zcmMvbGliL3N0eWxlcy9jaXJjbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBeUQsTUFBTSxlQUFlLENBQUM7QUFDOUcsT0FBTyxFQUFFLE1BQU0sRUFBZ0IsTUFBTSxVQUFVLENBQUM7Ozs7QUFPaEQsTUFBTSxPQUFPLG9CQUFvQjtJQWEvQixZQUE0QixJQUFvQjtRQUFwQixTQUFJLEdBQUosSUFBSSxDQUFnQjtRQUh6QyxrQkFBYSxHQUFHLGNBQWMsQ0FBQztJQUdhLENBQUM7SUFFcEQ7Ozs7T0FJRztJQUNILE1BQU07UUFDSixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDcEIsNkRBQTZEO1lBQzdELElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2QyxDQUFDO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLGlFQUFpRTtRQUNqRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbkIsT0FBTztRQUNULENBQUM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3ZELENBQUM7UUFDRCw2R0FBNkc7SUFDL0csQ0FBQztJQUVELFdBQVc7UUFDVCw0Q0FBNEM7UUFDNUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7cUZBaERVLG9CQUFvQjtvRUFBcEIsb0JBQW9COztZQUZuQixrQkFBeUI7OztpRkFFMUIsb0JBQW9CO2NBSmhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUUsNkJBQTZCO2FBQ3hDOztzQkFjYyxJQUFJO3FCQVhqQixJQUFJO2tCQURILEtBQUs7WUFHTixNQUFNO2tCQURMLEtBQUs7WUFHTixXQUFXO2tCQURWLEtBQUs7WUFHTixNQUFNO2tCQURMLEtBQUs7O2tGQVBLLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3QsIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaXJjbGUsIEZpbGwsIFN0cm9rZSB9IGZyb20gJ29sL3N0eWxlJztcbmltcG9ydCB7IFN0eWxlQ29tcG9uZW50IH0gZnJvbSAnLi9zdHlsZS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtc3R5bGUtY2lyY2xlJyxcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiBgLFxufSlcbmV4cG9ydCBjbGFzcyBTdHlsZUNpcmNsZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgQElucHV0KClcbiAgZmlsbDogRmlsbDtcbiAgQElucHV0KClcbiAgcmFkaXVzOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHNuYXBUb1BpeGVsOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBzdHJva2U6IFN0cm9rZTtcblxuICBwdWJsaWMgY29tcG9uZW50VHlwZSA9ICdzdHlsZS1jaXJjbGUnO1xuICBwdWJsaWMgaW5zdGFuY2U6IENpcmNsZTtcblxuICBjb25zdHJ1Y3RvcihASG9zdCgpIHByaXZhdGUgaG9zdDogU3R5bGVDb21wb25lbnQpIHt9XG5cbiAgLyoqXG4gICAqIFdPUkstQVJPVU5EOiBzaW5jZSB0aGUgcmUtcmVuZGVyaW5nIGlzIG5vdCB0cmlnZ2VyZWQgb24gc3R5bGUgY2hhbmdlXG4gICAqIHdlIHRyaWdnZXIgYSByYWRpdXMgY2hhbmdlLlxuICAgKiBzZWUgb3BlbmxheWVycyAjNjIzMyBhbmQgIzU3NzVcbiAgICovXG4gIHVwZGF0ZSgpIHtcbiAgICBpZiAoISF0aGlzLmluc3RhbmNlKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnc2V0dGluZyBvbC5zdHlsZS5DaXJjbGUgaW5zdGFuY2VcXCdzIHJhZGl1cycpO1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRSYWRpdXModGhpcy5yYWRpdXMpO1xuICAgIH1cbiAgICB0aGlzLmhvc3QudXBkYXRlKCk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2NyZWF0aW5nIG9sLnN0eWxlLkNpcmNsZSBpbnN0YW5jZSB3aXRoOiAnLCB0aGlzKTtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IENpcmNsZSh0aGlzKTtcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0SW1hZ2UodGhpcy5pbnN0YW5jZSk7XG4gICAgdGhpcy5ob3N0LnVwZGF0ZSgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5yYWRpdXMpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0UmFkaXVzKGNoYW5nZXMucmFkaXVzLmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKCdjaGFuZ2VzIGRldGVjdGVkIGluIGFvbC1zdHlsZS1jaXJjbGUsIHNldHRpbmcgbmV3IHJhZGl1czogJywgY2hhbmdlc1sncmFkaXVzJ10uY3VycmVudFZhbHVlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdyZW1vdmluZyBhb2wtc3R5bGUtY2lyY2xlJyk7XG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldEltYWdlKG51bGwpO1xuICB9XG59XG4iXX0=