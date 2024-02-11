import { Component, Input, Optional } from '@angular/core';
import { VectorTile } from 'ol/layer';
import { LayerComponent } from './layer.component';
import * as i0 from "@angular/core";
import * as i1 from "../map.component";
import * as i2 from "./layergroup.component";
const _c0 = ["*"];
export class LayerVectorTileComponent extends LayerComponent {
    constructor(map, group) {
        super(group || map);
    }
    ngOnInit() {
        // console.log('creating ol.layer.VectorTile instance with:', this);
        this.instance = new VectorTile(this);
        super.ngOnInit();
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
    }
    static { this.ɵfac = function LayerVectorTileComponent_Factory(t) { return new (t || LayerVectorTileComponent)(i0.ɵɵdirectiveInject(i1.MapComponent), i0.ɵɵdirectiveInject(i2.LayerGroupComponent, 8)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LayerVectorTileComponent, selectors: [["aol-layer-vectortile"]], inputs: { renderBuffer: "renderBuffer", renderMode: "renderMode", renderOrder: "renderOrder", style: "style", updateWhileAnimating: "updateWhileAnimating", updateWhileInteracting: "updateWhileInteracting", visible: "visible" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function LayerVectorTileComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LayerVectorTileComponent, [{
        type: Component,
        args: [{
                selector: 'aol-layer-vectortile',
                template: ` <ng-content></ng-content> `,
            }]
    }], () => [{ type: i1.MapComponent }, { type: i2.LayerGroupComponent, decorators: [{
                type: Optional
            }] }], { renderBuffer: [{
            type: Input
        }], renderMode: [{
            type: Input
        }], renderOrder: [{
            type: Input
        }], style: [{
            type: Input
        }], updateWhileAnimating: [{
            type: Input
        }], updateWhileInteracting: [{
            type: Input
        }], visible: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LayerVectorTileComponent, { className: "LayerVectorTileComponent", filePath: "lib/layers/layervectortile.component.ts", lineNumber: 14 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXJ2ZWN0b3J0aWxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvbmctb3BlbmxheWVycy9zcmMvbGliL2xheWVycy9sYXllcnZlY3RvcnRpbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFFBQVEsRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFDN0YsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUl0QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7O0FBUW5ELE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxjQUFjO0lBaUIxRCxZQUFZLEdBQWlCLEVBQWMsS0FBMkI7UUFDcEUsS0FBSyxDQUFDLEtBQUssSUFBSSxHQUFHLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQsUUFBUTtRQUNOLG9FQUFvRTtRQUNwRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0IsQ0FBQzt5RkE3QlUsd0JBQXdCO29FQUF4Qix3QkFBd0I7O1lBRnZCLGtCQUF5Qjs7O2lGQUUxQix3QkFBd0I7Y0FKcEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFFBQVEsRUFBRSw2QkFBNkI7YUFDeEM7O3NCQWtCaUMsUUFBUTtxQkFmeEMsWUFBWTtrQkFEWCxLQUFLO1lBR04sVUFBVTtrQkFEVCxLQUFLO1lBSU4sV0FBVztrQkFEVixLQUFLO1lBR04sS0FBSztrQkFESixLQUFLO1lBR04sb0JBQW9CO2tCQURuQixLQUFLO1lBR04sc0JBQXNCO2tCQURyQixLQUFLO1lBR04sT0FBTztrQkFETixLQUFLOztrRkFkSyx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE9wdGlvbmFsLCBTaW1wbGVDaGFuZ2VzLCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZlY3RvclRpbGUgfSBmcm9tICdvbC9sYXllcic7XG5pbXBvcnQgeyBGZWF0dXJlIH0gZnJvbSAnb2wnO1xuaW1wb3J0IHsgU3R5bGUgfSBmcm9tICdvbC9zdHlsZSc7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcbmltcG9ydCB7IExheWVyQ29tcG9uZW50IH0gZnJvbSAnLi9sYXllci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGF5ZXJHcm91cENvbXBvbmVudCB9IGZyb20gJy4vbGF5ZXJncm91cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3R5bGVGdW5jdGlvbiB9IGZyb20gJ29sL3N0eWxlL1N0eWxlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLWxheWVyLXZlY3RvcnRpbGUnLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG59KVxuZXhwb3J0IGNsYXNzIExheWVyVmVjdG9yVGlsZUNvbXBvbmVudCBleHRlbmRzIExheWVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKVxuICByZW5kZXJCdWZmZXI6IG51bWJlcjtcbiAgQElucHV0KClcbiAgcmVuZGVyTW9kZTogYW55IHwgc3RyaW5nO1xuICAvKiBub3QgbWFya2VkIGFzIG9wdGlvbmFsIGluIHRoZSB0eXBpbmdzICovXG4gIEBJbnB1dCgpXG4gIHJlbmRlck9yZGVyOiAoZmVhdHVyZTE6IEZlYXR1cmUsIGZlYXR1cmUyOiBGZWF0dXJlKSA9PiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHN0eWxlOiBTdHlsZSB8IFN0eWxlW10gfCBTdHlsZUZ1bmN0aW9uO1xuICBASW5wdXQoKVxuICB1cGRhdGVXaGlsZUFuaW1hdGluZzogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgdXBkYXRlV2hpbGVJbnRlcmFjdGluZzogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgdmlzaWJsZTogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihtYXA6IE1hcENvbXBvbmVudCwgQE9wdGlvbmFsKCkgZ3JvdXA/OiBMYXllckdyb3VwQ29tcG9uZW50KSB7XG4gICAgc3VwZXIoZ3JvdXAgfHwgbWFwKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdjcmVhdGluZyBvbC5sYXllci5WZWN0b3JUaWxlIGluc3RhbmNlIHdpdGg6JywgdGhpcyk7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBWZWN0b3JUaWxlKHRoaXMpO1xuICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgc3VwZXIubmdPbkNoYW5nZXMoY2hhbmdlcyk7XG4gIH1cbn1cbiJdfQ==