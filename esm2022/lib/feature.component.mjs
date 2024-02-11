import { Component, Input } from '@angular/core';
import { Feature } from 'ol';
import * as i0 from "@angular/core";
import * as i1 from "./sources/vector.component";
const _c0 = ["*"];
export class FeatureComponent {
    constructor(host) {
        this.host = host;
        this.componentType = 'feature';
    }
    ngOnInit() {
        this.instance = new Feature();
        if (this.id !== undefined) {
            this.instance.setId(this.id);
        }
        this.host.instance.addFeature(this.instance);
    }
    ngOnDestroy() {
        this.host.instance.removeFeature(this.instance);
    }
    ngOnChanges(changes) {
        if (this.instance) {
            this.instance.setId(this.id);
        }
    }
    static { this.ɵfac = function FeatureComponent_Factory(t) { return new (t || FeatureComponent)(i0.ɵɵdirectiveInject(i1.SourceVectorComponent)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FeatureComponent, selectors: [["aol-feature"]], inputs: { id: "id" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function FeatureComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FeatureComponent, [{
        type: Component,
        args: [{
                selector: 'aol-feature',
                template: ` <ng-content></ng-content> `,
            }]
    }], () => [{ type: i1.SourceVectorComponent }], { id: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FeatureComponent, { className: "FeatureComponent", filePath: "lib/feature.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9saWJzL25nLW9wZW5sYXllcnMvc3JjL2xpYi9mZWF0dXJlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFnQyxLQUFLLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxJQUFJLENBQUM7Ozs7QUFPN0IsTUFBTSxPQUFPLGdCQUFnQjtJQU8zQixZQUFvQixJQUEyQjtRQUEzQixTQUFJLEdBQUosSUFBSSxDQUF1QjtRQUh4QyxrQkFBYSxHQUFHLFNBQVMsQ0FBQztJQUdpQixDQUFDO0lBRW5ELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDOUIsSUFBSSxJQUFJLENBQUMsRUFBRSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMvQixDQUFDO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDL0IsQ0FBQztJQUNILENBQUM7aUZBekJVLGdCQUFnQjtvRUFBaEIsZ0JBQWdCOztZQUZmLGtCQUF5Qjs7O2lGQUUxQixnQkFBZ0I7Y0FKNUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUUsNkJBQTZCO2FBQ3hDO3NEQUdDLEVBQUU7a0JBREQsS0FBSzs7a0ZBREssZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBJbnB1dCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmVhdHVyZSB9IGZyb20gJ29sJztcbmltcG9ydCB7IFNvdXJjZVZlY3RvckNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlcy92ZWN0b3IuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLWZlYXR1cmUnLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG59KVxuZXhwb3J0IGNsYXNzIEZlYXR1cmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgQElucHV0KClcbiAgaWQ6IHN0cmluZyB8IG51bWJlciB8IHVuZGVmaW5lZDtcblxuICBwdWJsaWMgY29tcG9uZW50VHlwZSA9ICdmZWF0dXJlJztcbiAgcHVibGljIGluc3RhbmNlOiBGZWF0dXJlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaG9zdDogU291cmNlVmVjdG9yQ29tcG9uZW50KSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgRmVhdHVyZSgpO1xuICAgIGlmICh0aGlzLmlkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0SWQodGhpcy5pZCk7XG4gICAgfVxuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5hZGRGZWF0dXJlKHRoaXMuaW5zdGFuY2UpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnJlbW92ZUZlYXR1cmUodGhpcy5pbnN0YW5jZSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0SWQodGhpcy5pZCk7XG4gICAgfVxuICB9XG59XG4iXX0=