import { Component, Host, Input, forwardRef, ContentChild, Output, EventEmitter, } from '@angular/core';
import { SourceComponent } from './source.component';
import { TileGridWMTSComponent } from '../tilegridwmts.component';
import { WMTS as SourceWMTS } from 'ol/source';
import * as i0 from "@angular/core";
import * as i1 from "../layers/layertile.component";
const _c0 = ["*"];
export class SourceTileWMTSComponent extends SourceComponent {
    constructor(layer) {
        super(layer);
        this.tileLoadStart = new EventEmitter();
        this.tileLoadEnd = new EventEmitter();
        this.tileLoadError = new EventEmitter();
    }
    ngOnChanges(changes) {
        const properties = {};
        if (!this.instance) {
            return;
        }
        for (const key in changes) {
            if (changes.hasOwnProperty(key)) {
                switch (key) {
                    case 'url':
                        this.url = changes[key].currentValue;
                        this.setLayerSource();
                        break;
                    default:
                        break;
                }
                properties[key] = changes[key].currentValue;
            }
        }
        this.instance.setProperties(properties, false);
    }
    setLayerSource() {
        this.instance = new SourceWMTS(this);
        this.instance.on('tileloadstart', (event) => this.tileLoadStart.emit(event));
        this.instance.on('tileloadend', (event) => this.tileLoadEnd.emit(event));
        this.instance.on('tileloaderror', (event) => this.tileLoadError.emit(event));
        this.host.instance.setSource(this.instance);
    }
    ngAfterContentInit() {
        if (this.tileGridWMTS) {
            this.tileGrid = this.tileGridWMTS.instance;
            this.setLayerSource();
        }
    }
    static { this.ɵfac = function SourceTileWMTSComponent_Factory(t) { return new (t || SourceTileWMTSComponent)(i0.ɵɵdirectiveInject(i1.LayerTileComponent, 1)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SourceTileWMTSComponent, selectors: [["aol-source-tilewmts"]], contentQueries: function SourceTileWMTSComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, TileGridWMTSComponent, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tileGridWMTS = _t.first);
        } }, inputs: { cacheSize: "cacheSize", crossOrigin: "crossOrigin", tileGrid: "tileGrid", projection: "projection", reprojectionErrorThreshold: "reprojectionErrorThreshold", requestEncoding: "requestEncoding", layer: "layer", style: "style", tileClass: "tileClass", tilePixelRatio: "tilePixelRatio", version: "version", format: "format", matrixSet: "matrixSet", dimensions: "dimensions", url: "url", tileLoadFunction: "tileLoadFunction", urls: "urls", wrapX: "wrapX" }, outputs: { tileLoadStart: "tileLoadStart", tileLoadEnd: "tileLoadEnd", tileLoadError: "tileLoadError" }, features: [i0.ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(() => SourceTileWMTSComponent) }]), i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function SourceTileWMTSComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SourceTileWMTSComponent, [{
        type: Component,
        args: [{
                selector: 'aol-source-tilewmts',
                template: ` <ng-content></ng-content> `,
                providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceTileWMTSComponent) }],
            }]
    }], () => [{ type: i1.LayerTileComponent, decorators: [{
                type: Host
            }] }], { cacheSize: [{
            type: Input
        }], crossOrigin: [{
            type: Input
        }], tileGrid: [{
            type: Input
        }], projection: [{
            type: Input
        }], reprojectionErrorThreshold: [{
            type: Input
        }], requestEncoding: [{
            type: Input
        }], layer: [{
            type: Input
        }], style: [{
            type: Input
        }], tileClass: [{
            type: Input
        }], tilePixelRatio: [{
            type: Input
        }], version: [{
            type: Input
        }], format: [{
            type: Input
        }], matrixSet: [{
            type: Input
        }], dimensions: [{
            type: Input
        }], url: [{
            type: Input
        }], tileLoadFunction: [{
            type: Input
        }], urls: [{
            type: Input
        }], wrapX: [{
            type: Input
        }], tileLoadStart: [{
            type: Output
        }], tileLoadEnd: [{
            type: Output
        }], tileLoadError: [{
            type: Output
        }], tileGridWMTS: [{
            type: ContentChild,
            args: [TileGridWMTSComponent, { static: false }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SourceTileWMTSComponent, { className: "SourceTileWMTSComponent", filePath: "lib/sources/tilewmts.component.ts", lineNumber: 28 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZXdtdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9uZy1vcGVubGF5ZXJzL3NyYy9saWIvc291cmNlcy90aWxld210cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxJQUFJLEVBQ0osS0FBSyxFQUNMLFVBQVUsRUFFVixZQUFZLEVBR1osTUFBTSxFQUNOLFlBQVksR0FDYixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLElBQUksSUFBSSxVQUFVLEVBQUUsTUFBTSxXQUFXLENBQUM7Ozs7QUFZL0MsTUFBTSxPQUFPLHVCQUF3QixTQUFRLGVBQWU7SUFrRDFELFlBQW9CLEtBQXlCO1FBQzNDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQVpmLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFFcEQsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUVsRCxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFtQixDQUFDO0lBU3BELENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsTUFBTSxVQUFVLEdBQTZCLEVBQUUsQ0FBQztRQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ25CLE9BQU87UUFDVCxDQUFDO1FBQ0QsS0FBSyxNQUFNLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztZQUMxQixJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztnQkFDaEMsUUFBUSxHQUFHLEVBQUUsQ0FBQztvQkFDWixLQUFLLEtBQUs7d0JBQ1IsSUFBSSxDQUFDLEdBQUcsR0FBRyxPQUFP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N0MzQyx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEhvc3QsXG4gIElucHV0LFxuICBmb3J3YXJkUmVmLFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBDb250ZW50Q2hpbGQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIE9uQ2hhbmdlcyxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGF5ZXJUaWxlQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVydGlsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU291cmNlQ29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2UuY29tcG9uZW50JztcbmltcG9ydCB7IFRpbGVHcmlkV01UU0NvbXBvbmVudCB9IGZyb20gJy4uL3RpbGVncmlkd210cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgV01UUyBhcyBTb3VyY2VXTVRTIH0gZnJvbSAnb2wvc291cmNlJztcbmltcG9ydCBXTVRTIGZyb20gJ29sL3RpbGVncmlkL1dNVFMnO1xuaW1wb3J0IHsgUHJvamVjdGlvbkxpa2UgfSBmcm9tICdvbC9wcm9qJztcbmltcG9ydCB7IExvYWRGdW5jdGlvbiB9IGZyb20gJ29sL1RpbGUnO1xuaW1wb3J0IHsgVGlsZVNvdXJjZUV2ZW50IH0gZnJvbSAnb2wvc291cmNlL1RpbGUnO1xuaW1wb3J0IHsgUmVxdWVzdEVuY29kaW5nIH0gZnJvbSAnb2wvc291cmNlL1dNVFMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtc291cmNlLXRpbGV3bXRzJyxcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiBgLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IFNvdXJjZUNvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU291cmNlVGlsZVdNVFNDb21wb25lbnQpIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBTb3VyY2VUaWxlV01UU0NvbXBvbmVudCBleHRlbmRzIFNvdXJjZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpXG4gIGNhY2hlU2l6ZT86IG51bWJlcjtcbiAgQElucHV0KClcbiAgY3Jvc3NPcmlnaW4/OiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHRpbGVHcmlkOiBXTVRTO1xuICBASW5wdXQoKVxuICBwcm9qZWN0aW9uOiBQcm9qZWN0aW9uTGlrZTtcbiAgQElucHV0KClcbiAgcmVwcm9qZWN0aW9uRXJyb3JUaHJlc2hvbGQ/OiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHJlcXVlc3RFbmNvZGluZz86IFJlcXVlc3RFbmNvZGluZyB8IHVuZGVmaW5lZDtcbiAgQElucHV0KClcbiAgbGF5ZXI6IHN0cmluZztcbiAgQElucHV0KClcbiAgc3R5bGU6IHN0cmluZztcbiAgQElucHV0KClcbiAgdGlsZUNsYXNzPzogYW55O1xuICBASW5wdXQoKVxuICB0aWxlUGl4ZWxSYXRpbz86IG51bWJlcjtcbiAgQElucHV0KClcbiAgdmVyc2lvbj86IHN0cmluZztcbiAgQElucHV0KClcbiAgZm9ybWF0Pzogc3RyaW5nO1xuICBASW5wdXQoKVxuICBtYXRyaXhTZXQ6IHN0cmluZztcbiAgQElucHV0KClcbiAgZGltZW5zaW9ucz86IGFueTtcbiAgQElucHV0KClcbiAgdXJsPzogc3RyaW5nO1xuICBASW5wdXQoKVxuICB0aWxlTG9hZEZ1bmN0aW9uPzogTG9hZEZ1bmN0aW9uO1xuICBASW5wdXQoKVxuICB1cmxzPzogc3RyaW5nW107XG4gIEBJbnB1dCgpXG4gIHdyYXBYPzogYm9vbGVhbjtcblxuICBAT3V0cHV0KClcbiAgdGlsZUxvYWRTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8VGlsZVNvdXJjZUV2ZW50PigpO1xuICBAT3V0cHV0KClcbiAgdGlsZUxvYWRFbmQgPSBuZXcgRXZlbnRFbWl0dGVyPFRpbGVTb3VyY2VFdmVudD4oKTtcbiAgQE91dHB1dCgpXG4gIHRpbGVMb2FkRXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyPFRpbGVTb3VyY2VFdmVudD4oKTtcblxuICBAQ29udGVudENoaWxkKFRpbGVHcmlkV01UU0NvbXBvbmVudCwgeyBzdGF0aWM6IGZhbHNlIH0pXG4gIHRpbGVHcmlkV01UUzogVGlsZUdyaWRXTVRTQ29tcG9uZW50O1xuXG4gIGluc3RhbmNlOiBTb3VyY2VXTVRTO1xuXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgbGF5ZXI6IExheWVyVGlsZUNvbXBvbmVudCkge1xuICAgIHN1cGVyKGxheWVyKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzOiB7IFtpbmRleDogc3RyaW5nXTogYW55IH0gPSB7fTtcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9yIChjb25zdCBrZXkgaW4gY2hhbmdlcykge1xuICAgICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgIGNhc2UgJ3VybCc6XG4gICAgICAgICAgICB0aGlzLnVybCA9IGNoYW5nZXNba2V5XS5jdXJyZW50VmFsdWU7XG4gICAgICAgICAgICB0aGlzLnNldExheWVyU291cmNlKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcHJvcGVydGllc1trZXldID0gY2hhbmdlc1trZXldLmN1cnJlbnRWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5pbnN0YW5jZS5zZXRQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGZhbHNlKTtcbiAgfVxuXG4gIHNldExheWVyU291cmNlKCk6IHZvaWQge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgU291cmNlV01UUyh0aGlzKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCd0aWxlbG9hZHN0YXJ0JywgKGV2ZW50OiBUaWxlU291cmNlRXZlbnQpID0+IHRoaXMudGlsZUxvYWRTdGFydC5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbigndGlsZWxvYWRlbmQnLCAoZXZlbnQ6IFRpbGVTb3VyY2VFdmVudCkgPT4gdGhpcy50aWxlTG9hZEVuZC5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbigndGlsZWxvYWRlcnJvcicsIChldmVudDogVGlsZVNvdXJjZUV2ZW50KSA9PiB0aGlzLnRpbGVMb2FkRXJyb3IuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRTb3VyY2UodGhpcy5pbnN0YW5jZSk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudGlsZUdyaWRXTVRTKSB7XG4gICAgICB0aGlzLnRpbGVHcmlkID0gdGhpcy50aWxlR3JpZFdNVFMuaW5zdGFuY2U7XG4gICAgICB0aGlzLnNldExheWVyU291cmNlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=