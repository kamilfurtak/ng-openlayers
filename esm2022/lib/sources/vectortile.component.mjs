import { Component, Host, Input, forwardRef, ContentChild } from '@angular/core';
import { VectorTile } from 'ol/source';
import { FormatComponent } from '../formats/format.component';
import { TileGridComponent } from '../tilegrid.component';
import { SourceComponent } from './source.component';
import * as i0 from "@angular/core";
import * as i1 from "../layers/layervectortile.component";
const _c0 = ["*"];
export class SourceVectorTileComponent extends SourceComponent {
    constructor(layer) {
        super(layer);
    }
    /* need the children to construct the OL3 object */
    ngAfterContentInit() {
        this.format = this.formatComponent.instance;
        this.tileGrid = this.tileGridComponent.instance;
        // console.log('creating ol.source.VectorTile instance with:', this);
        this.instance = new VectorTile(this);
        this.host.instance.setSource(this.instance);
    }
    static { this.ɵfac = function SourceVectorTileComponent_Factory(t) { return new (t || SourceVectorTileComponent)(i0.ɵɵdirectiveInject(i1.LayerVectorTileComponent, 1)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SourceVectorTileComponent, selectors: [["aol-source-vectortile"]], contentQueries: function SourceVectorTileComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, FormatComponent, 5);
            i0.ɵɵcontentQuery(dirIndex, TileGridComponent, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.formatComponent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tileGridComponent = _t.first);
        } }, inputs: { cacheSize: "cacheSize", overlaps: "overlaps", projection: "projection", tilePixelRatio: "tilePixelRatio", tileUrlFunction: "tileUrlFunction", url: "url", urls: "urls", wrapX: "wrapX" }, features: [i0.ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(() => SourceVectorTileComponent) }]), i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function SourceVectorTileComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SourceVectorTileComponent, [{
        type: Component,
        args: [{
                selector: 'aol-source-vectortile',
                template: ` <ng-content></ng-content> `,
                providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceVectorTileComponent) }],
            }]
    }], () => [{ type: i1.LayerVectorTileComponent, decorators: [{
                type: Host
            }] }], { cacheSize: [{
            type: Input
        }], overlaps: [{
            type: Input
        }], projection: [{
            type: Input
        }], tilePixelRatio: [{
            type: Input
        }], tileUrlFunction: [{
            type: Input
        }], url: [{
            type: Input
        }], urls: [{
            type: Input
        }], wrapX: [{
            type: Input
        }], formatComponent: [{
            type: ContentChild,
            args: [FormatComponent, { static: false }]
        }], tileGridComponent: [{
            type: ContentChild,
            args: [TileGridComponent, { static: false }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SourceVectorTileComponent, { className: "SourceVectorTileComponent", filePath: "lib/sources/vectortile.component.ts", lineNumber: 17 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVjdG9ydGlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL25nLW9wZW5sYXllcnMvc3JjL2xpYi9zb3VyY2VzL3ZlY3RvcnRpbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFvQixNQUFNLGVBQWUsQ0FBQztBQUNuRyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBSXZDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7QUFTckQsTUFBTSxPQUFPLHlCQUEwQixTQUFRLGVBQWU7SUEyQjVELFlBQW9CLEtBQStCO1FBQ2pELEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNmLENBQUM7SUFFRCxtREFBbUQ7SUFDbkQsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUM7UUFDNUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDO1FBQ2hELHFFQUFxRTtRQUNyRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUMsQ0FBQzswRkF0Q1UseUJBQXlCO29FQUF6Qix5QkFBeUI7d0NBa0J0QixlQUFlO3dDQUVmLGlCQUFpQjs7Ozs7a1BBdEJwQixDQUFDLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHlCQUF5QixDQUFDLEVBQUUsQ0FBQzs7WUFEdkYsa0JBQXlCOzs7aUZBRzFCLHlCQUF5QjtjQUxyQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLDBCQUEwQixDQUFDLEVBQUUsQ0FBQzthQUNwRzs7c0JBNEJjLElBQUk7cUJBekJqQixTQUFTO2tCQURSLEtBQUs7WUFHTixRQUFRO2tCQURQLEtBQUs7WUFHTixVQUFVO2tCQURULEtBQUs7WUFHTixjQUFjO2tCQURiLEtBQUs7WUFHTixlQUFlO2tCQURkLEtBQUs7WUFHTixHQUFHO2tCQURGLEtBQUs7WUFHTixJQUFJO2tCQURILEtBQUs7WUFHTixLQUFLO2tCQURKLEtBQUs7WUFJTixlQUFlO2tCQURkLFlBQVk7bUJBQUMsZUFBZSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtZQUdoRCxpQkFBaUI7a0JBRGhCLFlBQVk7bUJBQUMsaUJBQWlCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOztrRkFwQnZDLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdCwgSW5wdXQsIGZvcndhcmRSZWYsIENvbnRlbnRDaGlsZCwgQWZ0ZXJDb250ZW50SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmVjdG9yVGlsZSB9IGZyb20gJ29sL3NvdXJjZSc7XG5pbXBvcnQgRmVhdHVyZSBmcm9tICdvbC9mb3JtYXQvRmVhdHVyZSc7XG5pbXBvcnQgVGlsZUdyaWQgZnJvbSAnb2wvdGlsZWdyaWQvVGlsZUdyaWQnO1xuaW1wb3J0IHsgTGF5ZXJWZWN0b3JUaWxlQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVydmVjdG9ydGlsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybWF0Q29tcG9uZW50IH0gZnJvbSAnLi4vZm9ybWF0cy9mb3JtYXQuY29tcG9uZW50JztcbmltcG9ydCB7IFRpbGVHcmlkQ29tcG9uZW50IH0gZnJvbSAnLi4vdGlsZWdyaWQuY29tcG9uZW50JztcbmltcG9ydCB7IFNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9qZWN0aW9uTGlrZSB9IGZyb20gJ29sL3Byb2onO1xuaW1wb3J0IHsgVXJsRnVuY3Rpb24gfSBmcm9tICdvbC9UaWxlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLXNvdXJjZS12ZWN0b3J0aWxlJyxcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiBgLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IFNvdXJjZUNvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU291cmNlVmVjdG9yVGlsZUNvbXBvbmVudCkgfV0sXG59KVxuZXhwb3J0IGNsYXNzIFNvdXJjZVZlY3RvclRpbGVDb21wb25lbnQgZXh0ZW5kcyBTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgQElucHV0KClcbiAgY2FjaGVTaXplOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIG92ZXJsYXBzOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBwcm9qZWN0aW9uOiBQcm9qZWN0aW9uTGlrZTtcbiAgQElucHV0KClcbiAgdGlsZVBpeGVsUmF0aW86IG51bWJlcjtcbiAgQElucHV0KClcbiAgdGlsZVVybEZ1bmN0aW9uOiBVcmxGdW5jdGlvbjtcbiAgQElucHV0KClcbiAgdXJsOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHVybHM6IHN0cmluZ1tdO1xuICBASW5wdXQoKVxuICB3cmFwWDogYm9vbGVhbjtcblxuICBAQ29udGVudENoaWxkKEZvcm1hdENvbXBvbmVudCwgeyBzdGF0aWM6IGZhbHNlIH0pXG4gIGZvcm1hdENvbXBvbmVudDogRm9ybWF0Q29tcG9uZW50O1xuICBAQ29udGVudENoaWxkKFRpbGVHcmlkQ29tcG9uZW50LCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgdGlsZUdyaWRDb21wb25lbnQ6IFRpbGVHcmlkQ29tcG9uZW50O1xuXG4gIHB1YmxpYyBpbnN0YW5jZTogVmVjdG9yVGlsZTtcbiAgZm9ybWF0OiBGZWF0dXJlO1xuICB0aWxlR3JpZDogVGlsZUdyaWQ7XG5cbiAgY29uc3RydWN0b3IoQEhvc3QoKSBsYXllcjogTGF5ZXJWZWN0b3JUaWxlQ29tcG9uZW50KSB7XG4gICAgc3VwZXIobGF5ZXIpO1xuICB9XG5cbiAgLyogbmVlZCB0aGUgY2hpbGRyZW4gdG8gY29uc3RydWN0IHRoZSBPTDMgb2JqZWN0ICovXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmZvcm1hdCA9IHRoaXMuZm9ybWF0Q29tcG9uZW50Lmluc3RhbmNlO1xuICAgIHRoaXMudGlsZUdyaWQgPSB0aGlzLnRpbGVHcmlkQ29tcG9uZW50Lmluc3RhbmNlO1xuICAgIC8vIGNvbnNvbGUubG9nKCdjcmVhdGluZyBvbC5zb3VyY2UuVmVjdG9yVGlsZSBpbnN0YW5jZSB3aXRoOicsIHRoaXMpO1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgVmVjdG9yVGlsZSh0aGlzKTtcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0U291cmNlKHRoaXMuaW5zdGFuY2UpO1xuICB9XG59XG4iXX0=