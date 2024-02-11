import { Component } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["*"];
export class AttributionComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    ngOnInit() {
        this.label = this.elementRef.nativeElement.innerHTML;
    }
    static { this.ɵfac = function AttributionComponent_Factory(t) { return new (t || AttributionComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AttributionComponent, selectors: [["aol-attribution"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function AttributionComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AttributionComponent, [{
        type: Component,
        args: [{
                selector: 'aol-attribution',
                template: '<ng-content></ng-content>',
            }]
    }], () => [{ type: i0.ElementRef }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AttributionComponent, { className: "AttributionComponent", filePath: "lib/attribution.component.ts", lineNumber: 7 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGlicy9uZy1vcGVubGF5ZXJzL3NyYy9saWIvYXR0cmlidXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXNCLE1BQU0sZUFBZSxDQUFDOzs7QUFNOUQsTUFBTSxPQUFPLG9CQUFvQjtJQUcvQixZQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQUcsQ0FBQztJQUU5QyxRQUFRO1FBQ04sSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7SUFDdkQsQ0FBQztxRkFQVSxvQkFBb0I7b0VBQXBCLG9CQUFvQjs7WUFGcEIsa0JBQXlCOzs7aUZBRXpCLG9CQUFvQjtjQUpoQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFLDJCQUEyQjthQUN0Qzs7a0ZBQ1ksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLWF0dHJpYnV0aW9uJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+Jyxcbn0pXG5leHBvcnQgY2xhc3MgQXR0cmlidXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBsYWJlbDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmxhYmVsID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MO1xuICB9XG59XG4iXX0=