import { Component, EventEmitter, forwardRef, Host, Input, Optional, Output } from '@angular/core';
import { OSM } from 'ol/source';
import { SourceComponent } from './source.component';
import { SourceXYZComponent } from './xyz.component';
import * as i0 from "@angular/core";
import * as i1 from "../layers/layertile.component";
export class SourceOsmComponent extends SourceXYZComponent {
    constructor(layer) {
        super(layer);
        this.layer = layer;
        this.tileLoadStart = new EventEmitter();
        this.tileLoadEnd = new EventEmitter();
        this.tileLoadError = new EventEmitter();
    }
    ngAfterContentInit() {
        if (this.tileGridXYZ) {
            this.tileGrid = this.tileGridXYZ.instance;
        }
        this.instance = new OSM(this);
        this.instance.on('tileloadstart', (event) => this.tileLoadStart.emit(event));
        this.instance.on('tileloadend', (event) => this.tileLoadEnd.emit(event));
        this.instance.on('tileloaderror', (event) => this.tileLoadError.emit(event));
        this.register(this.instance);
    }
    static { this.ɵfac = function SourceOsmComponent_Factory(t) { return new (t || SourceOsmComponent)(i0.ɵɵdirectiveInject(i1.LayerTileComponent, 9)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SourceOsmComponent, selectors: [["aol-source-osm"]], inputs: { attributions: "attributions", cacheSize: "cacheSize", crossOrigin: "crossOrigin", maxZoom: "maxZoom", opaque: "opaque", reprojectionErrorThreshold: "reprojectionErrorThreshold", tileLoadFunction: "tileLoadFunction", url: "url", wrapX: "wrapX" }, outputs: { tileLoadStart: "tileLoadStart", tileLoadEnd: "tileLoadEnd", tileLoadError: "tileLoadError" }, features: [i0.ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(() => SourceOsmComponent) }]), i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 0, consts: [[1, "aol-source-osm"]], template: function SourceOsmComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "div", 0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SourceOsmComponent, [{
        type: Component,
        args: [{
                selector: 'aol-source-osm',
                template: ` <div class="aol-source-osm"></div> `,
                providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceOsmComponent) }],
            }]
    }], () => [{ type: i1.LayerTileComponent, decorators: [{
                type: Optional
            }, {
                type: Host
            }] }], { attributions: [{
            type: Input
        }], cacheSize: [{
            type: Input
        }], crossOrigin: [{
            type: Input
        }], maxZoom: [{
            type: Input
        }], opaque: [{
            type: Input
        }], reprojectionErrorThreshold: [{
            type: Input
        }], tileLoadFunction: [{
            type: Input
        }], url: [{
            type: Input
        }], wrapX: [{
            type: Input
        }], tileLoadStart: [{
            type: Output
        }], tileLoadEnd: [{
            type: Output
        }], tileLoadError: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SourceOsmComponent, { className: "SourceOsmComponent", filePath: "lib/sources/osm.component.ts", lineNumber: 15 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3NtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvbmctb3BlbmxheWVycy9zcmMvbGliL3NvdXJjZXMvb3NtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQW9CLFNBQVMsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNySCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBS2hDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBT3JELE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxrQkFBa0I7SUE2QnhELFlBR1ksS0FBMEI7UUFFcEMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRkgsVUFBSyxHQUFMLEtBQUssQ0FBcUI7UUFYdEMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUVwRCxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFtQixDQUFDO1FBRWxELGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQW1CLENBQUM7SUFVcEQsQ0FBQztJQUVELGtCQUFrQjtRQUNoQixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO1FBQzVDLENBQUM7UUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDLEtBQXNCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDOUYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBc0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUMxRixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxLQUFzQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzlGLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQy9CLENBQUM7bUZBOUNVLGtCQUFrQjtvRUFBbEIsa0JBQWtCLDZhQUZsQixDQUFDLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsQ0FBQztZQURoRix5QkFBa0M7OztpRkFHbkMsa0JBQWtCO2NBTDlCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUUsc0NBQXNDO2dCQUNoRCxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsbUJBQW1CLENBQUMsRUFBRSxDQUFDO2FBQzdGOztzQkErQkksUUFBUTs7c0JBQ1IsSUFBSTtxQkE3QlAsWUFBWTtrQkFEWCxLQUFLO1lBR04sU0FBUztrQkFEUixLQUFLO1lBR04sV0FBVztrQkFEVixLQUFLO1lBR04sT0FBTztrQkFETixLQUFLO1lBR04sTUFBTTtrQkFETCxLQUFLO1lBR04sMEJBQTBCO2tCQUR6QixLQUFLO1lBR04sZ0JBQWdCO2tCQURmLEtBQUs7WUFHTixHQUFHO2tCQURGLEtBQUs7WUFHTixLQUFLO2tCQURKLEtBQUs7WUFJTixhQUFhO2tCQURaLE1BQU07WUFHUCxXQUFXO2tCQURWLE1BQU07WUFHUCxhQUFhO2tCQURaLE1BQU07O2tGQXhCSSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiwgSG9zdCwgSW5wdXQsIE9wdGlvbmFsLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9TTSB9IGZyb20gJ29sL3NvdXJjZSc7XG5pbXBvcnQgeyBBdHRyaWJ1dGlvbkxpa2UgfSBmcm9tICdvbC9zb3VyY2UvU291cmNlJztcbmltcG9ydCB7IFRpbGVTb3VyY2VFdmVudCB9IGZyb20gJ29sL3NvdXJjZS9UaWxlJztcbmltcG9ydCB7IExvYWRGdW5jdGlvbiB9IGZyb20gJ29sL1RpbGUnO1xuaW1wb3J0IHsgTGF5ZXJUaWxlQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVydGlsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU291cmNlQ29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2UuY29tcG9uZW50JztcbmltcG9ydCB7IFNvdXJjZVhZWkNvbXBvbmVudCB9IGZyb20gJy4veHl6LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1zb3VyY2Utb3NtJyxcbiAgdGVtcGxhdGU6IGAgPGRpdiBjbGFzcz1cImFvbC1zb3VyY2Utb3NtXCI+PC9kaXY+IGAsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogU291cmNlQ29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTb3VyY2VPc21Db21wb25lbnQpIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBTb3VyY2VPc21Db21wb25lbnQgZXh0ZW5kcyBTb3VyY2VYWVpDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgQElucHV0KClcbiAgYXR0cmlidXRpb25zOiBBdHRyaWJ1dGlvbkxpa2U7XG4gIEBJbnB1dCgpXG4gIGNhY2hlU2l6ZTogbnVtYmVyO1xuICBASW5wdXQoKVxuICBjcm9zc09yaWdpbjogc3RyaW5nO1xuICBASW5wdXQoKVxuICBtYXhab29tOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIG9wYXF1ZTogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgcmVwcm9qZWN0aW9uRXJyb3JUaHJlc2hvbGQ6IG51bWJlcjtcbiAgQElucHV0KClcbiAgdGlsZUxvYWRGdW5jdGlvbjogTG9hZEZ1bmN0aW9uO1xuICBASW5wdXQoKVxuICB1cmw6IHN0cmluZztcbiAgQElucHV0KClcbiAgd3JhcFg6IGJvb2xlYW47XG5cbiAgQE91dHB1dCgpXG4gIHRpbGVMb2FkU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPFRpbGVTb3VyY2VFdmVudD4oKTtcbiAgQE91dHB1dCgpXG4gIHRpbGVMb2FkRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxUaWxlU291cmNlRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKVxuICB0aWxlTG9hZEVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxUaWxlU291cmNlRXZlbnQ+KCk7XG5cbiAgaW5zdGFuY2U6IE9TTTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBIb3N0KClcbiAgICBwcm90ZWN0ZWQgbGF5ZXI/OiBMYXllclRpbGVDb21wb25lbnRcbiAgKSB7XG4gICAgc3VwZXIobGF5ZXIpO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIGlmICh0aGlzLnRpbGVHcmlkWFlaKSB7XG4gICAgICB0aGlzLnRpbGVHcmlkID0gdGhpcy50aWxlR3JpZFhZWi5pbnN0YW5jZTtcbiAgICB9XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBPU00odGhpcyk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbigndGlsZWxvYWRzdGFydCcsIChldmVudDogVGlsZVNvdXJjZUV2ZW50KSA9PiB0aGlzLnRpbGVMb2FkU3RhcnQuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3RpbGVsb2FkZW5kJywgKGV2ZW50OiBUaWxlU291cmNlRXZlbnQpID0+IHRoaXMudGlsZUxvYWRFbmQuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3RpbGVsb2FkZXJyb3InLCAoZXZlbnQ6IFRpbGVTb3VyY2VFdmVudCkgPT4gdGhpcy50aWxlTG9hZEVycm9yLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLnJlZ2lzdGVyKHRoaXMuaW5zdGFuY2UpO1xuICB9XG59XG4iXX0=