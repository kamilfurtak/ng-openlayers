import { Component, Host, Input, forwardRef } from '@angular/core';
import { SourceComponent } from './source.component';
import { Vector } from 'ol/source';
import { GeoJSON } from 'ol/format';
import * as i0 from "@angular/core";
import * as i1 from "../layers/layervector.component";
const _c0 = ["*"];
export class SourceGeoJSONComponent extends SourceComponent {
    constructor(layer) {
        super(layer);
    }
    ngOnInit() {
        this.format = new GeoJSON(this);
        this.instance = new Vector(this);
        this.host.instance.setSource(this.instance);
    }
    static { this.ɵfac = function SourceGeoJSONComponent_Factory(t) { return new (t || SourceGeoJSONComponent)(i0.ɵɵdirectiveInject(i1.LayerVectorComponent, 1)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SourceGeoJSONComponent, selectors: [["aol-source-geojson"]], inputs: { defaultDataProjection: "defaultDataProjection", featureProjection: "featureProjection", geometryName: "geometryName", url: "url" }, features: [i0.ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(() => SourceGeoJSONComponent) }]), i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function SourceGeoJSONComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SourceGeoJSONComponent, [{
        type: Component,
        args: [{
                selector: 'aol-source-geojson',
                template: ` <ng-content></ng-content> `,
                providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceGeoJSONComponent) }],
            }]
    }], () => [{ type: i1.LayerVectorComponent, decorators: [{
                type: Host
            }] }], { defaultDataProjection: [{
            type: Input
        }], featureProjection: [{
            type: Input
        }], geometryName: [{
            type: Input
        }], url: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SourceGeoJSONComponent, { className: "SourceGeoJSONComponent", filePath: "lib/sources/geojson.component.ts", lineNumber: 14 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvanNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL25nLW9wZW5sYXllcnMvc3JjL2xpYi9zb3VyY2VzL2dlb2pzb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBVSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXJELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDbkMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQzs7OztBQVFwQyxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsZUFBZTtJQWF6RCxZQUFvQixLQUEyQjtRQUM3QyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDZixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7dUZBckJVLHNCQUFzQjtvRUFBdEIsc0JBQXNCLHNOQUZ0QixDQUFDLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHNCQUFzQixDQUFDLEVBQUUsQ0FBQzs7WUFEcEYsa0JBQXlCOzs7aUZBRzFCLHNCQUFzQjtjQUxsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLHVCQUF1QixDQUFDLEVBQUUsQ0FBQzthQUNqRzs7c0JBY2MsSUFBSTtxQkFYakIscUJBQXFCO2tCQURwQixLQUFLO1lBR04saUJBQWlCO2tCQURoQixLQUFLO1lBR04sWUFBWTtrQkFEWCxLQUFLO1lBR04sR0FBRztrQkFERixLQUFLOztrRkFQSyxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3QsIElucHV0LCBPbkluaXQsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExheWVyVmVjdG9yQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVydmVjdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xuaW1wb3J0IEZlYXR1cmVGb3JtYXQgZnJvbSAnb2wvZm9ybWF0L0ZlYXR1cmUnO1xuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnb2wvc291cmNlJztcbmltcG9ydCB7IEdlb0pTT04gfSBmcm9tICdvbC9mb3JtYXQnO1xuaW1wb3J0IHsgUHJvamVjdGlvbkxpa2UgfSBmcm9tICdvbC9wcm9qJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLXNvdXJjZS1nZW9qc29uJyxcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiBgLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IFNvdXJjZUNvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU291cmNlR2VvSlNPTkNvbXBvbmVudCkgfV0sXG59KVxuZXhwb3J0IGNsYXNzIFNvdXJjZUdlb0pTT05Db21wb25lbnQgZXh0ZW5kcyBTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKVxuICBkZWZhdWx0RGF0YVByb2plY3Rpb246IFByb2plY3Rpb25MaWtlO1xuICBASW5wdXQoKVxuICBmZWF0dXJlUHJvamVjdGlvbjogUHJvamVjdGlvbkxpa2U7XG4gIEBJbnB1dCgpXG4gIGdlb21ldHJ5TmFtZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICB1cmw6IHN0cmluZztcblxuICBpbnN0YW5jZTogVmVjdG9yO1xuICBmb3JtYXQ6IEZlYXR1cmVGb3JtYXQ7XG5cbiAgY29uc3RydWN0b3IoQEhvc3QoKSBsYXllcjogTGF5ZXJWZWN0b3JDb21wb25lbnQpIHtcbiAgICBzdXBlcihsYXllcik7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmZvcm1hdCA9IG5ldyBHZW9KU09OKHRoaXMpO1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgVmVjdG9yKHRoaXMpO1xuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRTb3VyY2UodGhpcy5pbnN0YW5jZSk7XG4gIH1cbn1cbiJdfQ==