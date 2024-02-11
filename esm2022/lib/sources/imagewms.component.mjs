import { Component, Host, Input, forwardRef, Output, EventEmitter, } from '@angular/core';
import { ImageWMS } from 'ol/source';
import { SourceComponent } from './source.component';
import * as i0 from "@angular/core";
import * as i1 from "../layers/layerimage.component";
const _c0 = ["*"];
export class SourceImageWMSComponent extends SourceComponent {
    constructor(layer) {
        super(layer);
        this.imageLoadStart = new EventEmitter();
        this.imageLoadEnd = new EventEmitter();
        this.imageLoadError = new EventEmitter();
    }
    ngOnInit() {
        this.instance = new ImageWMS(this);
        this.host.instance.setSource(this.instance);
        this.instance.on('imageloadstart', (event) => this.imageLoadStart.emit(event));
        this.instance.on('imageloadend', (event) => this.imageLoadEnd.emit(event));
        this.instance.on('imageloaderror', (event) => this.imageLoadError.emit(event));
    }
    ngOnChanges(changes) {
        if (this.instance && changes.hasOwnProperty('params')) {
            this.instance.updateParams(this.params);
        }
    }
    static { this.ɵfac = function SourceImageWMSComponent_Factory(t) { return new (t || SourceImageWMSComponent)(i0.ɵɵdirectiveInject(i1.LayerImageComponent, 1)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SourceImageWMSComponent, selectors: [["aol-source-imagewms"]], inputs: { attributions: "attributions", crossOrigin: "crossOrigin", hidpi: "hidpi", serverType: "serverType", imageLoadFunction: "imageLoadFunction", params: "params", projection: "projection", ratio: "ratio", resolutions: "resolutions", url: "url" }, outputs: { imageLoadStart: "imageLoadStart", imageLoadEnd: "imageLoadEnd", imageLoadError: "imageLoadError" }, features: [i0.ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(() => SourceImageWMSComponent) }]), i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function SourceImageWMSComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SourceImageWMSComponent, [{
        type: Component,
        args: [{
                selector: 'aol-source-imagewms',
                template: ` <ng-content></ng-content> `,
                providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceImageWMSComponent) }],
            }]
    }], () => [{ type: i1.LayerImageComponent, decorators: [{
                type: Host
            }] }], { attributions: [{
            type: Input
        }], crossOrigin: [{
            type: Input
        }], hidpi: [{
            type: Input
        }], serverType: [{
            type: Input
        }], imageLoadFunction: [{
            type: Input
        }], params: [{
            type: Input
        }], projection: [{
            type: Input
        }], ratio: [{
            type: Input
        }], resolutions: [{
            type: Input
        }], url: [{
            type: Input
        }], imageLoadStart: [{
            type: Output
        }], imageLoadEnd: [{
            type: Output
        }], imageLoadError: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SourceImageWMSComponent, { className: "SourceImageWMSComponent", filePath: "lib/sources/imagewms.component.ts", lineNumber: 26 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2V3bXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9uZy1vcGVubGF5ZXJzL3NyYy9saWIvc291cmNlcy9pbWFnZXdtcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxJQUFJLEVBQ0osS0FBSyxFQUdMLFVBQVUsRUFFVixNQUFNLEVBQ04sWUFBWSxHQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFckMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7O0FBWXJELE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxlQUFlO0lBK0IxRCxZQUFvQixLQUEwQjtRQUM1QyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFUZixtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFvQixDQUFDO1FBRXRELGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQW9CLENBQUM7UUFFcEQsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBb0IsQ0FBQztJQU10RCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLEtBQXVCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDakcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsY0FBYyxFQUFFLENBQUMsS0FBdUIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM3RixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLEtBQXVCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDbkcsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO1lBQ3RELElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQyxDQUFDO0lBQ0gsQ0FBQzt3RkEvQ1UsdUJBQXVCO29FQUF2Qix1QkFBdUIsb2JBRnZCLENBQUMsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsdUJBQXVCLENBQUMsRUFBRSxDQUFDOztZQURyRixrQkFBeUI7OztpRkFHMUIsdUJBQXVCO2NBTG5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixRQUFRLEVBQUUsNkJBQTZCO2dCQUN2QyxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsd0JBQXdCLENBQUMsRUFBRSxDQUFDO2FBQ2xHOztzQkFnQ2MsSUFBSTtxQkE3QmpCLFlBQVk7a0JBRFgsS0FBSztZQUdOLFdBQVc7a0JBRFYsS0FBSztZQUdOLEtBQUs7a0JBREosS0FBSztZQUdOLFVBQVU7a0JBRFQsS0FBSztZQUdOLGlCQUFpQjtrQkFEaEIsS0FBSztZQUdOLE1BQU07a0JBREwsS0FBSztZQUdOLFVBQVU7a0JBRFQsS0FBSztZQUdOLEtBQUs7a0JBREosS0FBSztZQUdOLFdBQVc7a0JBRFYsS0FBSztZQUdOLEdBQUc7a0JBREYsS0FBSztZQUlOLGNBQWM7a0JBRGIsTUFBTTtZQUdQLFlBQVk7a0JBRFgsTUFBTTtZQUdQLGNBQWM7a0JBRGIsTUFBTTs7a0ZBMUJJLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSG9zdCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBmb3J3YXJkUmVmLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbWFnZVdNUyB9IGZyb20gJ29sL3NvdXJjZSc7XG5pbXBvcnQgeyBMYXllckltYWdlQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVyaW1hZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9qZWN0aW9uTGlrZSB9IGZyb20gJ29sL3Byb2onO1xuaW1wb3J0IHsgQXR0cmlidXRpb25MaWtlIH0gZnJvbSAnb2wvc291cmNlL1NvdXJjZSc7XG5pbXBvcnQgeyBMb2FkRnVuY3Rpb24gfSBmcm9tICdvbC9JbWFnZSc7XG5pbXBvcnQgeyBJbWFnZVNvdXJjZUV2ZW50IH0gZnJvbSAnb2wvc291cmNlL0ltYWdlJztcbmltcG9ydCB7IFNlcnZlclR5cGUgfSBmcm9tICdvbC9zb3VyY2Uvd21zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLXNvdXJjZS1pbWFnZXdtcycsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBTb3VyY2VDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNvdXJjZUltYWdlV01TQ29tcG9uZW50KSB9XSxcbn0pXG5leHBvcnQgY2xhc3MgU291cmNlSW1hZ2VXTVNDb21wb25lbnQgZXh0ZW5kcyBTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIGF0dHJpYnV0aW9uczogQXR0cmlidXRpb25MaWtlO1xuICBASW5wdXQoKVxuICBjcm9zc09yaWdpbjogc3RyaW5nO1xuICBASW5wdXQoKVxuICBoaWRwaTogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgc2VydmVyVHlwZTogU2VydmVyVHlwZTtcbiAgQElucHV0KClcbiAgaW1hZ2VMb2FkRnVuY3Rpb24/OiBMb2FkRnVuY3Rpb247XG4gIEBJbnB1dCgpXG4gIHBhcmFtczogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcbiAgQElucHV0KClcbiAgcHJvamVjdGlvbjogUHJvamVjdGlvbkxpa2UgfCBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHJhdGlvOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHJlc29sdXRpb25zOiBBcnJheTxudW1iZXI+O1xuICBASW5wdXQoKVxuICB1cmw6IHN0cmluZztcblxuICBAT3V0cHV0KClcbiAgaW1hZ2VMb2FkU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPEltYWdlU291cmNlRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKVxuICBpbWFnZUxvYWRFbmQgPSBuZXcgRXZlbnRFbWl0dGVyPEltYWdlU291cmNlRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKVxuICBpbWFnZUxvYWRFcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8SW1hZ2VTb3VyY2VFdmVudD4oKTtcblxuICBpbnN0YW5jZTogSW1hZ2VXTVM7XG5cbiAgY29uc3RydWN0b3IoQEhvc3QoKSBsYXllcjogTGF5ZXJJbWFnZUNvbXBvbmVudCkge1xuICAgIHN1cGVyKGxheWVyKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgSW1hZ2VXTVModGhpcyk7XG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFNvdXJjZSh0aGlzLmluc3RhbmNlKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdpbWFnZWxvYWRzdGFydCcsIChldmVudDogSW1hZ2VTb3VyY2VFdmVudCkgPT4gdGhpcy5pbWFnZUxvYWRTdGFydC5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbignaW1hZ2Vsb2FkZW5kJywgKGV2ZW50OiBJbWFnZVNvdXJjZUV2ZW50KSA9PiB0aGlzLmltYWdlTG9hZEVuZC5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbignaW1hZ2Vsb2FkZXJyb3InLCAoZXZlbnQ6IEltYWdlU291cmNlRXZlbnQpID0+IHRoaXMuaW1hZ2VMb2FkRXJyb3IuZW1pdChldmVudCkpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmICh0aGlzLmluc3RhbmNlICYmIGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ3BhcmFtcycpKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnVwZGF0ZVBhcmFtcyh0aGlzLnBhcmFtcyk7XG4gICAgfVxuICB9XG59XG4iXX0=