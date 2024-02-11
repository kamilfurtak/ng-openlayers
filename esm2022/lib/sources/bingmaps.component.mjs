import { Component, Host, Input, forwardRef } from '@angular/core';
import { BingMaps } from 'ol/source';
import { SourceComponent } from './source.component';
import * as i0 from "@angular/core";
import * as i1 from "../layers/layertile.component";
export class SourceBingmapsComponent extends SourceComponent {
    constructor(layer) {
        super(layer);
        this.imagerySet = 'Aerial';
    }
    ngOnInit() {
        this.instance = new BingMaps(this);
        this.host.instance.setSource(this.instance);
    }
    static { this.ɵfac = function SourceBingmapsComponent_Factory(t) { return new (t || SourceBingmapsComponent)(i0.ɵɵdirectiveInject(i1.LayerTileComponent, 1)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SourceBingmapsComponent, selectors: [["aol-source-bingmaps"]], inputs: { cacheSize: "cacheSize", hidpi: "hidpi", culture: "culture", key: "key", imagerySet: "imagerySet", maxZoom: "maxZoom", reprojectionErrorThreshold: "reprojectionErrorThreshold", tileLoadFunction: "tileLoadFunction", wrapX: "wrapX" }, features: [i0.ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(() => SourceBingmapsComponent) }]), i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 0, consts: [[1, "aol-source-bingmaps"]], template: function SourceBingmapsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "div", 0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SourceBingmapsComponent, [{
        type: Component,
        args: [{
                selector: 'aol-source-bingmaps',
                template: ` <div class="aol-source-bingmaps"></div> `,
                providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceBingmapsComponent) }],
            }]
    }], () => [{ type: i1.LayerTileComponent, decorators: [{
                type: Host
            }] }], { cacheSize: [{
            type: Input
        }], hidpi: [{
            type: Input
        }], culture: [{
            type: Input
        }], key: [{
            type: Input
        }], imagerySet: [{
            type: Input
        }], maxZoom: [{
            type: Input
        }], reprojectionErrorThreshold: [{
            type: Input
        }], tileLoadFunction: [{
            type: Input
        }], wrapX: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SourceBingmapsComponent, { className: "SourceBingmapsComponent", filePath: "lib/sources/bingmaps.component.ts", lineNumber: 12 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmluZ21hcHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9uZy1vcGVubGF5ZXJzL3NyYy9saWIvc291cmNlcy9iaW5nbWFwcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFVLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7O0FBU3JELE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxlQUFlO0lBc0IxRCxZQUFvQixLQUF5QjtRQUMzQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFiZixlQUFVLEdBQThFLFFBQVEsQ0FBQztJQWNqRyxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QyxDQUFDO3dGQTdCVSx1QkFBdUI7b0VBQXZCLHVCQUF1QiwyVEFGdkIsQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUM7WUFEckYseUJBQXVDOzs7aUZBR3hDLHVCQUF1QjtjQUxuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsUUFBUSxFQUFFLDJDQUEyQztnQkFDckQsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLHdCQUF3QixDQUFDLEVBQUUsQ0FBQzthQUNsRzs7c0JBdUJjLElBQUk7cUJBcEJqQixTQUFTO2tCQURSLEtBQUs7WUFHTixLQUFLO2tCQURKLEtBQUs7WUFHTixPQUFPO2tCQUROLEtBQUs7WUFHTixHQUFHO2tCQURGLEtBQUs7WUFHTixVQUFVO2tCQURULEtBQUs7WUFHTixPQUFPO2tCQUROLEtBQUs7WUFHTiwwQkFBMEI7a0JBRHpCLEtBQUs7WUFHTixnQkFBZ0I7a0JBRGYsS0FBSztZQUdOLEtBQUs7a0JBREosS0FBSzs7a0ZBakJLLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdCwgSW5wdXQsIE9uSW5pdCwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmluZ01hcHMgfSBmcm9tICdvbC9zb3VyY2UnO1xuaW1wb3J0IHsgU291cmNlQ29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2UuY29tcG9uZW50JztcbmltcG9ydCB7IExheWVyVGlsZUNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllcnRpbGUuY29tcG9uZW50JztcbmltcG9ydCB7IExvYWRGdW5jdGlvbiB9IGZyb20gJ29sL1RpbGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtc291cmNlLWJpbmdtYXBzJyxcbiAgdGVtcGxhdGU6IGAgPGRpdiBjbGFzcz1cImFvbC1zb3VyY2UtYmluZ21hcHNcIj48L2Rpdj4gYCxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBTb3VyY2VDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNvdXJjZUJpbmdtYXBzQ29tcG9uZW50KSB9XSxcbn0pXG5leHBvcnQgY2xhc3MgU291cmNlQmluZ21hcHNDb21wb25lbnQgZXh0ZW5kcyBTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKVxuICBjYWNoZVNpemU6IG51bWJlcjtcbiAgQElucHV0KClcbiAgaGlkcGk6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIGN1bHR1cmU6IHN0cmluZztcbiAgQElucHV0KClcbiAga2V5OiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGltYWdlcnlTZXQ6ICdSb2FkJyB8ICdBZXJpYWwnIHwgJ0FlcmlhbFdpdGhMYWJlbHMnIHwgJ2NvbGxpbnNCYXJ0JyB8ICdvcmRuYW5jZVN1cnZleScgPSAnQWVyaWFsJztcbiAgQElucHV0KClcbiAgbWF4Wm9vbTogbnVtYmVyO1xuICBASW5wdXQoKVxuICByZXByb2plY3Rpb25FcnJvclRocmVzaG9sZDogbnVtYmVyO1xuICBASW5wdXQoKVxuICB0aWxlTG9hZEZ1bmN0aW9uOiBMb2FkRnVuY3Rpb247XG4gIEBJbnB1dCgpXG4gIHdyYXBYOiBib29sZWFuO1xuXG4gIGluc3RhbmNlOiBCaW5nTWFwcztcblxuICBjb25zdHJ1Y3RvcihASG9zdCgpIGxheWVyOiBMYXllclRpbGVDb21wb25lbnQpIHtcbiAgICBzdXBlcihsYXllcik7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IEJpbmdNYXBzKHRoaXMpO1xuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRTb3VyY2UodGhpcy5pbnN0YW5jZSk7XG4gIH1cbn1cbiJdfQ==