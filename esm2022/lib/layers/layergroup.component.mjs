import { Component, SkipSelf, Optional } from '@angular/core';
import { Group } from 'ol/layer';
import { LayerComponent } from './layer.component';
import * as i0 from "@angular/core";
import * as i1 from "../map.component";
const _c0 = ["*"];
export class LayerGroupComponent extends LayerComponent {
    constructor(map, group) {
        super(group || map);
    }
    ngOnInit() {
        // console.log(`creating ol.layer.Group instance with:`, this);
        this.instance = new Group(this);
        super.ngOnInit();
    }
    static { this.ɵfac = function LayerGroupComponent_Factory(t) { return new (t || LayerGroupComponent)(i0.ɵɵdirectiveInject(i1.MapComponent), i0.ɵɵdirectiveInject(LayerGroupComponent, 12)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LayerGroupComponent, selectors: [["aol-layer-group"]], features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function LayerGroupComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LayerGroupComponent, [{
        type: Component,
        args: [{
                selector: 'aol-layer-group',
                template: ` <ng-content></ng-content> `,
            }]
    }], () => [{ type: i1.MapComponent }, { type: LayerGroupComponent, decorators: [{
                type: SkipSelf
            }, {
                type: Optional
            }] }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LayerGroupComponent, { className: "LayerGroupComponent", filePath: "lib/layers/layergroup.component.ts", lineNumber: 10 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXJncm91cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL25nLW9wZW5sYXllcnMvc3JjL2xpYi9sYXllcnMvbGF5ZXJncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRixPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQU9uRCxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsY0FBYztJQUdyRCxZQUNFLEdBQWlCLEVBR2pCLEtBQTJCO1FBRTNCLEtBQUssQ0FBQyxLQUFLLElBQUksR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELFFBQVE7UUFDTiwrREFBK0Q7UUFDL0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbkIsQ0FBQztvRkFoQlUsbUJBQW1CO29FQUFuQixtQkFBbUI7O1lBRmxCLGtCQUF5Qjs7O2lGQUUxQixtQkFBbUI7Y0FKL0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRSw2QkFBNkI7YUFDeEM7O3NCQU1JLFFBQVE7O3NCQUNSLFFBQVE7O2tGQU5BLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQsIFNraXBTZWxmLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR3JvdXAgfSBmcm9tICdvbC9sYXllcic7XG5pbXBvcnQgeyBMYXllckNvbXBvbmVudCB9IGZyb20gJy4vbGF5ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtbGF5ZXItZ3JvdXAnLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG59KVxuZXhwb3J0IGNsYXNzIExheWVyR3JvdXBDb21wb25lbnQgZXh0ZW5kcyBMYXllckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHVibGljIGluc3RhbmNlOiBHcm91cDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBtYXA6IE1hcENvbXBvbmVudCxcbiAgICBAU2tpcFNlbGYoKVxuICAgIEBPcHRpb25hbCgpXG4gICAgZ3JvdXA/OiBMYXllckdyb3VwQ29tcG9uZW50XG4gICkge1xuICAgIHN1cGVyKGdyb3VwIHx8IG1hcCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhgY3JlYXRpbmcgb2wubGF5ZXIuR3JvdXAgaW5zdGFuY2Ugd2l0aDpgLCB0aGlzKTtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IEdyb3VwKHRoaXMpO1xuICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gIH1cbn1cbiJdfQ==