import { Component, Host, Input, forwardRef } from '@angular/core';
import { SourceComponent } from './source.component';
import { UTFGrid } from 'ol/source';
import * as i0 from "@angular/core";
import * as i1 from "../layers/layertile.component";
const _c0 = ["*"];
export class SourceUTFGridComponent extends SourceComponent {
    constructor(layer) {
        super(layer);
    }
    ngOnInit() {
        this.instance = new UTFGrid(this);
        this.host.instance.setSource(this.instance);
    }
    static { this.ɵfac = function SourceUTFGridComponent_Factory(t) { return new (t || SourceUTFGridComponent)(i0.ɵɵdirectiveInject(i1.LayerTileComponent, 1)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SourceUTFGridComponent, selectors: [["aol-source-utfgrid"]], inputs: { tileJSON: "tileJSON", url: "url" }, features: [i0.ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(() => SourceUTFGridComponent) }]), i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function SourceUTFGridComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SourceUTFGridComponent, [{
        type: Component,
        args: [{
                selector: 'aol-source-utfgrid',
                template: ` <ng-content></ng-content> `,
                providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceUTFGridComponent) }],
            }]
    }], () => [{ type: i1.LayerTileComponent, decorators: [{
                type: Host
            }] }], { tileJSON: [{
            type: Input
        }], url: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SourceUTFGridComponent, { className: "SourceUTFGridComponent", filePath: "lib/sources/utfgrid.component.ts", lineNumber: 12 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRmZ3JpZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL25nLW9wZW5sYXllcnMvc3JjL2xpYi9zb3VyY2VzL3V0ZmdyaWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBVSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXJELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7Ozs7QUFRcEMsTUFBTSxPQUFPLHNCQUF1QixTQUFRLGVBQWU7SUFNekQsWUFBb0IsS0FBeUI7UUFDM0MsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2YsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUMsQ0FBQzt1RkFiVSxzQkFBc0I7b0VBQXRCLHNCQUFzQixzSEFGdEIsQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLENBQUM7O1lBRHBGLGtCQUF5Qjs7O2lGQUcxQixzQkFBc0I7Y0FMbEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSx1QkFBdUIsQ0FBQyxFQUFFLENBQUM7YUFDakc7O3NCQU9jLElBQUk7cUJBTFIsUUFBUTtrQkFBaEIsS0FBSztZQUNHLEdBQUc7a0JBQVgsS0FBSzs7a0ZBRkssc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0LCBJbnB1dCwgT25Jbml0LCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGF5ZXJUaWxlQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVydGlsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVVRGR3JpZCB9IGZyb20gJ29sL3NvdXJjZSc7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICdvbC9zb3VyY2UvVGlsZUpTT04nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtc291cmNlLXV0ZmdyaWQnLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogU291cmNlQ29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTb3VyY2VVVEZHcmlkQ29tcG9uZW50KSB9XSxcbn0pXG5leHBvcnQgY2xhc3MgU291cmNlVVRGR3JpZENvbXBvbmVudCBleHRlbmRzIFNvdXJjZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHRpbGVKU09OOiBDb25maWc7XG4gIEBJbnB1dCgpIHVybDogc3RyaW5nO1xuXG4gIGluc3RhbmNlOiBVVEZHcmlkO1xuXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgbGF5ZXI6IExheWVyVGlsZUNvbXBvbmVudCkge1xuICAgIHN1cGVyKGxheWVyKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgVVRGR3JpZCh0aGlzKTtcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0U291cmNlKHRoaXMuaW5zdGFuY2UpO1xuICB9XG59XG4iXX0=