import { Component, ContentChild, EventEmitter, forwardRef, Host, Input, Optional, Output, } from '@angular/core';
import { XYZ } from 'ol/source';
import { TileGridComponent } from '../tilegrid.component';
import { SourceComponent } from './source.component';
import * as i0 from "@angular/core";
import * as i1 from "../layers/layertile.component";
const _c0 = ["*"];
export class SourceXYZComponent extends SourceComponent {
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
        this.init();
    }
    ngOnChanges(changes) {
        const properties = {};
        if (!this.instance) {
            return;
        }
        for (const key in changes) {
            if (changes.hasOwnProperty(key)) {
                properties[key] = changes[key].currentValue;
            }
        }
        this.instance.setProperties(properties, false);
        if (changes.hasOwnProperty('url')) {
            this.init();
        }
    }
    init() {
        this.instance = new XYZ(this);
        this.instance.on('tileloadstart', (event) => this.tileLoadStart.emit(event));
        this.instance.on('tileloadend', (event) => this.tileLoadEnd.emit(event));
        this.instance.on('tileloaderror', (event) => this.tileLoadError.emit(event));
        this.register(this.instance);
    }
    static { this.ɵfac = function SourceXYZComponent_Factory(t) { return new (t || SourceXYZComponent)(i0.ɵɵdirectiveInject(i1.LayerTileComponent, 9)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SourceXYZComponent, selectors: [["aol-source-xyz"]], contentQueries: function SourceXYZComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, TileGridComponent, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tileGridXYZ = _t.first);
        } }, inputs: { cacheSize: "cacheSize", crossOrigin: "crossOrigin", opaque: "opaque", projection: "projection", reprojectionErrorThreshold: "reprojectionErrorThreshold", minZoom: "minZoom", maxZoom: "maxZoom", tileGrid: "tileGrid", tileLoadFunction: "tileLoadFunction", tilePixelRatio: "tilePixelRatio", tileSize: "tileSize", tileUrlFunction: "tileUrlFunction", url: "url", urls: "urls", wrapX: "wrapX" }, outputs: { tileLoadStart: "tileLoadStart", tileLoadEnd: "tileLoadEnd", tileLoadError: "tileLoadError" }, features: [i0.ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(() => SourceXYZComponent) }]), i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function SourceXYZComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SourceXYZComponent, [{
        type: Component,
        args: [{
                selector: 'aol-source-xyz',
                template: ` <ng-content></ng-content> `,
                providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceXYZComponent) }],
            }]
    }], () => [{ type: i1.LayerTileComponent, decorators: [{
                type: Optional
            }, {
                type: Host
            }] }], { cacheSize: [{
            type: Input
        }], crossOrigin: [{
            type: Input
        }], opaque: [{
            type: Input
        }], projection: [{
            type: Input
        }], reprojectionErrorThreshold: [{
            type: Input
        }], minZoom: [{
            type: Input
        }], maxZoom: [{
            type: Input
        }], tileGrid: [{
            type: Input
        }], tileLoadFunction: [{
            type: Input
        }], tilePixelRatio: [{
            type: Input
        }], tileSize: [{
            type: Input
        }], tileUrlFunction: [{
            type: Input
        }], url: [{
            type: Input
        }], urls: [{
            type: Input
        }], wrapX: [{
            type: Input
        }], tileGridXYZ: [{
            type: ContentChild,
            args: [TileGridComponent, { static: false }]
        }], tileLoadStart: [{
            type: Output
        }], tileLoadEnd: [{
            type: Output
        }], tileLoadError: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SourceXYZComponent, { className: "SourceXYZComponent", filePath: "lib/sources/xyz.component.ts", lineNumber: 29 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieHl6LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvbmctb3BlbmxheWVycy9zcmMvbGliL3NvdXJjZXMveHl6LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULFlBQVksRUFDWixZQUFZLEVBQ1osVUFBVSxFQUNWLElBQUksRUFDSixLQUFLLEVBRUwsUUFBUSxFQUNSLE1BQU0sR0FFUCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBTWhDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7OztBQU9yRCxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsZUFBZTtJQTRDckQsWUFHWSxLQUEwQjtRQUVwQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFGSCxVQUFLLEdBQUwsS0FBSyxDQUFxQjtRQVh0QyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFtQixDQUFDO1FBRXBELGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFFbEQsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBbUIsQ0FBQztJQVVwRCxDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUM7UUFDNUMsQ0FBQztRQUNELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsTUFBTSxVQUFVLEdBQTZCLEVBQUUsQ0FBQztRQUVoRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ25CLE9BQU87UUFDVCxDQUFDO1FBQ0QsS0FBSyxNQUFNLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztZQUMxQixJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztnQkFDaEMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUM7WUFDOUMsQ0FBQztRQUNILENBQUM7UUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDL0MsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDbEMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2QsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU5QixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxLQUFzQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzlGLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDLEtBQXNCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDMUYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsZUFBZSxFQUFFLENBQUMsS0FBc0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUU5RixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMvQixDQUFDO21GQXJGVSxrQkFBa0I7b0VBQWxCLGtCQUFrQjt3Q0FnQ2YsaUJBQWlCOzs7O3VpQkFsQ3BCLENBQUMsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsa0JBQWtCLENBQUMsRUFBRSxDQUFDOztZQURoRixrQkFBeUI7OztpRkFHMUIsa0JBQWtCO2NBTDlCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUUsNkJBQTZCO2dCQUN2QyxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsbUJBQW1CLENBQUMsRUFBRSxDQUFDO2FBQzdGOztzQkE4Q0ksUUFBUTs7c0JBQ1IsSUFBSTtxQkE1Q1AsU0FBUztrQkFEUixLQUFLO1lBR04sV0FBVztrQkFEVixLQUFLO1lBR04sTUFBTTtrQkFETCxLQUFLO1lBR04sVUFBVTtrQkFEVCxLQUFLO1lBR04sMEJBQTBCO2tCQUR6QixLQUFLO1lBR04sT0FBTztrQkFETixLQUFLO1lBR04sT0FBTztrQkFETixLQUFLO1lBR04sUUFBUTtrQkFEUCxLQUFLO1lBR04sZ0JBQWdCO2tCQURmLEtBQUs7WUFHTixjQUFjO2tCQURiLEtBQUs7WUFHTixRQUFRO2tCQURQLEtBQUs7WUFHTixlQUFlO2tCQURkLEtBQUs7WUFHTixHQUFHO2tCQURGLEtBQUs7WUFHTixJQUFJO2tCQURILEtBQUs7WUFHTixLQUFLO2tCQURKLEtBQUs7WUFJTixXQUFXO2tCQURWLFlBQVk7bUJBQUMsaUJBQWlCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO1lBSWxELGFBQWE7a0JBRFosTUFBTTtZQUdQLFdBQVc7a0JBRFYsTUFBTTtZQUdQLGFBQWE7a0JBRFosTUFBTTs7a0ZBdkNJLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIEhvc3QsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2l6ZSB9IGZyb20gJ29sL3NpemUnO1xuaW1wb3J0IHsgWFlaIH0gZnJvbSAnb2wvc291cmNlJztcbmltcG9ydCB7IFRpbGVTb3VyY2VFdmVudCB9IGZyb20gJ29sL3NvdXJjZS9UaWxlJztcbmltcG9ydCB7IExvYWRGdW5jdGlvbiwgVXJsRnVuY3Rpb24gfSBmcm9tICdvbC9UaWxlJztcbmltcG9ydCBUaWxlR3JpZCBmcm9tICdvbC90aWxlZ3JpZC9UaWxlR3JpZCc7XG5cbmltcG9ydCB7IExheWVyVGlsZUNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllcnRpbGUuY29tcG9uZW50JztcbmltcG9ydCB7IFRpbGVHcmlkQ29tcG9uZW50IH0gZnJvbSAnLi4vdGlsZWdyaWQuY29tcG9uZW50JztcbmltcG9ydCB7IFNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1zb3VyY2UteHl6JyxcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiBgLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IFNvdXJjZUNvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU291cmNlWFlaQ29tcG9uZW50KSB9XSxcbn0pXG5leHBvcnQgY2xhc3MgU291cmNlWFlaQ29tcG9uZW50IGV4dGVuZHMgU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KClcbiAgY2FjaGVTaXplOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIGNyb3NzT3JpZ2luOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIG9wYXF1ZTogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgcHJvamVjdGlvbjogc3RyaW5nO1xuICBASW5wdXQoKVxuICByZXByb2plY3Rpb25FcnJvclRocmVzaG9sZDogbnVtYmVyO1xuICBASW5wdXQoKVxuICBtaW5ab29tOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIG1heFpvb206IG51bWJlcjtcbiAgQElucHV0KClcbiAgdGlsZUdyaWQ6IFRpbGVHcmlkO1xuICBASW5wdXQoKVxuICB0aWxlTG9hZEZ1bmN0aW9uPzogTG9hZEZ1bmN0aW9uO1xuICBASW5wdXQoKVxuICB0aWxlUGl4ZWxSYXRpbzogbnVtYmVyO1xuICBASW5wdXQoKVxuICB0aWxlU2l6ZTogbnVtYmVyIHwgU2l6ZTtcbiAgQElucHV0KClcbiAgdGlsZVVybEZ1bmN0aW9uPzogVXJsRnVuY3Rpb247XG4gIEBJbnB1dCgpXG4gIHVybDogc3RyaW5nO1xuICBASW5wdXQoKVxuICB1cmxzOiBzdHJpbmdbXTtcbiAgQElucHV0KClcbiAgd3JhcFg6IGJvb2xlYW47XG5cbiAgQENvbnRlbnRDaGlsZChUaWxlR3JpZENvbXBvbmVudCwgeyBzdGF0aWM6IGZhbHNlIH0pXG4gIHRpbGVHcmlkWFlaOiBUaWxlR3JpZENvbXBvbmVudDtcblxuICBAT3V0cHV0KClcbiAgdGlsZUxvYWRTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8VGlsZVNvdXJjZUV2ZW50PigpO1xuICBAT3V0cHV0KClcbiAgdGlsZUxvYWRFbmQgPSBuZXcgRXZlbnRFbWl0dGVyPFRpbGVTb3VyY2VFdmVudD4oKTtcbiAgQE91dHB1dCgpXG4gIHRpbGVMb2FkRXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyPFRpbGVTb3VyY2VFdmVudD4oKTtcblxuICBpbnN0YW5jZTogWFlaO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEhvc3QoKVxuICAgIHByb3RlY3RlZCBsYXllcj86IExheWVyVGlsZUNvbXBvbmVudFxuICApIHtcbiAgICBzdXBlcihsYXllcik7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgaWYgKHRoaXMudGlsZUdyaWRYWVopIHtcbiAgICAgIHRoaXMudGlsZUdyaWQgPSB0aGlzLnRpbGVHcmlkWFlaLmluc3RhbmNlO1xuICAgIH1cbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzOiB7IFtpbmRleDogc3RyaW5nXTogYW55IH0gPSB7fTtcblxuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBjaGFuZ2VzKSB7XG4gICAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHByb3BlcnRpZXNba2V5XSA9IGNoYW5nZXNba2V5XS5jdXJyZW50VmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5pbnN0YW5jZS5zZXRQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGZhbHNlKTtcbiAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgndXJsJykpIHtcbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBYWVoodGhpcyk7XG5cbiAgICB0aGlzLmluc3RhbmNlLm9uKCd0aWxlbG9hZHN0YXJ0JywgKGV2ZW50OiBUaWxlU291cmNlRXZlbnQpID0+IHRoaXMudGlsZUxvYWRTdGFydC5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbigndGlsZWxvYWRlbmQnLCAoZXZlbnQ6IFRpbGVTb3VyY2VFdmVudCkgPT4gdGhpcy50aWxlTG9hZEVuZC5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbigndGlsZWxvYWRlcnJvcicsIChldmVudDogVGlsZVNvdXJjZUV2ZW50KSA9PiB0aGlzLnRpbGVMb2FkRXJyb3IuZW1pdChldmVudCkpO1xuXG4gICAgdGhpcy5yZWdpc3Rlcih0aGlzLmluc3RhbmNlKTtcbiAgfVxufVxuIl19