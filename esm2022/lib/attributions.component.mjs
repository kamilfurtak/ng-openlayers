import { Component, ContentChildren, Host } from '@angular/core';
import { AttributionComponent } from './attribution.component';
import * as i0 from "@angular/core";
import * as i1 from "./sources/source.component";
const _c0 = ["*"];
export class AttributionsComponent {
    constructor(source) {
        this.source = source;
    }
    /* we can do this at the very end */
    ngAfterViewInit() {
        if (this.attributions.length) {
            this.instance = this.attributions.map((cmp) => cmp.label);
            // console.log('setting attributions:', this.instance);
            this.source.instance.setAttributions(this.instance);
        }
    }
    static { this.ɵfac = function AttributionsComponent_Factory(t) { return new (t || AttributionsComponent)(i0.ɵɵdirectiveInject(i1.SourceComponent, 1)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AttributionsComponent, selectors: [["aol-attributions"]], contentQueries: function AttributionsComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, AttributionComponent, 4);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.attributions = _t);
        } }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function AttributionsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AttributionsComponent, [{
        type: Component,
        args: [{
                selector: 'aol-attributions',
                template: '<ng-content></ng-content>',
            }]
    }], () => [{ type: i1.SourceComponent, decorators: [{
                type: Host
            }] }], { attributions: [{
            type: ContentChildren,
            args: [AttributionComponent]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AttributionsComponent, { className: "AttributionsComponent", filePath: "lib/attributions.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRpb25zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpYnMvbmctb3BlbmxheWVycy9zcmMvbGliL2F0dHJpYnV0aW9ucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUUzRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7OztBQU0vRCxNQUFNLE9BQU8scUJBQXFCO0lBTWhDLFlBQTRCLE1BQXVCO1FBQXZCLFdBQU0sR0FBTixNQUFNLENBQWlCO0lBQUcsQ0FBQztJQUV2RCxvQ0FBb0M7SUFDcEMsZUFBZTtRQUNiLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUQsdURBQXVEO1lBQ3ZELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEQsQ0FBQztJQUNILENBQUM7c0ZBZlUscUJBQXFCO29FQUFyQixxQkFBcUI7d0NBQ2Ysb0JBQW9COzs7Ozs7WUFIMUIsa0JBQXlCOzs7aUZBRXpCLHFCQUFxQjtjQUpqQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsUUFBUSxFQUFFLDJCQUEyQjthQUN0Qzs7c0JBT2MsSUFBSTtxQkFKakIsWUFBWTtrQkFEWCxlQUFlO21CQUFDLG9CQUFvQjs7a0ZBRDFCLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBIb3N0LCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlcy9zb3VyY2UuY29tcG9uZW50JztcbmltcG9ydCB7IEF0dHJpYnV0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9hdHRyaWJ1dGlvbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtYXR0cmlidXRpb25zJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+Jyxcbn0pXG5leHBvcnQgY2xhc3MgQXR0cmlidXRpb25zQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBDb250ZW50Q2hpbGRyZW4oQXR0cmlidXRpb25Db21wb25lbnQpXG4gIGF0dHJpYnV0aW9uczogUXVlcnlMaXN0PEF0dHJpYnV0aW9uQ29tcG9uZW50PjtcblxuICBpbnN0YW5jZTogQXJyYXk8c3RyaW5nPjtcblxuICBjb25zdHJ1Y3RvcihASG9zdCgpIHByaXZhdGUgc291cmNlOiBTb3VyY2VDb21wb25lbnQpIHt9XG5cbiAgLyogd2UgY2FuIGRvIHRoaXMgYXQgdGhlIHZlcnkgZW5kICovXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAodGhpcy5hdHRyaWJ1dGlvbnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmluc3RhbmNlID0gdGhpcy5hdHRyaWJ1dGlvbnMubWFwKChjbXApID0+IGNtcC5sYWJlbCk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnc2V0dGluZyBhdHRyaWJ1dGlvbnM6JywgdGhpcy5pbnN0YW5jZSk7XG4gICAgICB0aGlzLnNvdXJjZS5pbnN0YW5jZS5zZXRBdHRyaWJ1dGlvbnModGhpcy5pbnN0YW5jZSk7XG4gICAgfVxuICB9XG59XG4iXX0=