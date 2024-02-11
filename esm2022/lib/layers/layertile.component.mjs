import { Component, Input, Optional } from '@angular/core';
import { Tile } from 'ol/layer';
import { LayerComponent } from './layer.component';
import * as i0 from "@angular/core";
import * as i1 from "../map.component";
import * as i2 from "./layergroup.component";
const _c0 = ["*"];
export class LayerTileComponent extends LayerComponent {
    constructor(map, group) {
        super(group || map);
    }
    ngOnInit() {
        // console.log('creating ol.layer.Tile instance with:', this);
        this.instance = new Tile(this);
        super.ngOnInit();
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
    }
    static { this.ɵfac = function LayerTileComponent_Factory(t) { return new (t || LayerTileComponent)(i0.ɵɵdirectiveInject(i1.MapComponent), i0.ɵɵdirectiveInject(i2.LayerGroupComponent, 8)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LayerTileComponent, selectors: [["aol-layer-tile"]], inputs: { preload: "preload", useInterimTilesOnError: "useInterimTilesOnError" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function LayerTileComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LayerTileComponent, [{
        type: Component,
        args: [{
                selector: 'aol-layer-tile',
                template: ` <ng-content></ng-content> `,
            }]
    }], () => [{ type: i1.MapComponent }, { type: i2.LayerGroupComponent, decorators: [{
                type: Optional
            }] }], { preload: [{
            type: Input
        }], useInterimTilesOnError: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LayerTileComponent, { className: "LayerTileComponent", filePath: "lib/layers/layertile.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXJ0aWxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvbmctb3BlbmxheWVycy9zcmMvbGliL2xheWVycy9sYXllcnRpbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLEtBQUssRUFBRSxRQUFRLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBQ3hHLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFaEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7OztBQU9uRCxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsY0FBYztJQU1wRCxZQUFZLEdBQWlCLEVBQWMsS0FBMkI7UUFDcEUsS0FBSyxDQUFDLEtBQUssSUFBSSxHQUFHLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQsUUFBUTtRQUNOLDhEQUE4RDtRQUM5RCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0IsQ0FBQzttRkFsQlUsa0JBQWtCO29FQUFsQixrQkFBa0I7O1lBRmpCLGtCQUF5Qjs7O2lGQUUxQixrQkFBa0I7Y0FKOUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRSw2QkFBNkI7YUFDeEM7O3NCQU9pQyxRQUFRO3FCQUp4QyxPQUFPO2tCQUROLEtBQUs7WUFHTixzQkFBc0I7a0JBRHJCLEtBQUs7O2tGQUhLLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQsIElucHV0LCBPcHRpb25hbCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaWxlIH0gZnJvbSAnb2wvbGF5ZXInO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXllckNvbXBvbmVudCB9IGZyb20gJy4vbGF5ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IExheWVyR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL2xheWVyZ3JvdXAuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLWxheWVyLXRpbGUnLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG59KVxuZXhwb3J0IGNsYXNzIExheWVyVGlsZUNvbXBvbmVudCBleHRlbmRzIExheWVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpXG4gIHByZWxvYWQ6IG51bWJlcjtcbiAgQElucHV0KClcbiAgdXNlSW50ZXJpbVRpbGVzT25FcnJvcjogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihtYXA6IE1hcENvbXBvbmVudCwgQE9wdGlvbmFsKCkgZ3JvdXA/OiBMYXllckdyb3VwQ29tcG9uZW50KSB7XG4gICAgc3VwZXIoZ3JvdXAgfHwgbWFwKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdjcmVhdGluZyBvbC5sYXllci5UaWxlIGluc3RhbmNlIHdpdGg6JywgdGhpcyk7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBUaWxlKHRoaXMpO1xuICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgc3VwZXIubmdPbkNoYW5nZXMoY2hhbmdlcyk7XG4gIH1cbn1cbiJdfQ==