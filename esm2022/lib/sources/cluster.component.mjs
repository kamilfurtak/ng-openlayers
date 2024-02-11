import { Component, ContentChild, forwardRef, Host, Input, } from '@angular/core';
import { Cluster } from 'ol/source';
import { SourceComponent } from './source.component';
import { SourceVectorComponent } from './vector.component';
import * as i0 from "@angular/core";
import * as i1 from "../layers/layervector.component";
const _c0 = ["*"];
export class SourceClusterComponent extends SourceComponent {
    constructor(layer) {
        super(layer);
    }
    ngAfterContentInit() {
        this.source = this.sourceVectorComponent.instance;
        this.instance = new Cluster(this);
        this.host.instance.setSource(this.instance);
    }
    ngOnChanges(changes) {
        if (this.instance && changes.hasOwnProperty('distance')) {
            this.instance.setDistance(this.distance);
        }
    }
    static { this.ɵfac = function SourceClusterComponent_Factory(t) { return new (t || SourceClusterComponent)(i0.ɵɵdirectiveInject(i1.LayerVectorComponent, 1)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SourceClusterComponent, selectors: [["aol-source-cluster"]], contentQueries: function SourceClusterComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, SourceVectorComponent, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sourceVectorComponent = _t.first);
        } }, inputs: { distance: "distance", geometryFunction: "geometryFunction", wrapX: "wrapX" }, features: [i0.ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(() => SourceClusterComponent) }]), i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function SourceClusterComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SourceClusterComponent, [{
        type: Component,
        args: [{
                selector: 'aol-source-cluster',
                template: ` <ng-content></ng-content> `,
                providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceClusterComponent) }],
            }]
    }], () => [{ type: i1.LayerVectorComponent, decorators: [{
                type: Host
            }] }], { distance: [{
            type: Input
        }], geometryFunction: [{
            type: Input
        }], wrapX: [{
            type: Input
        }], sourceVectorComponent: [{
            type: ContentChild,
            args: [SourceVectorComponent, { static: false }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SourceClusterComponent, { className: "SourceClusterComponent", filePath: "lib/sources/cluster.component.ts", lineNumber: 24 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2x1c3Rlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL25nLW9wZW5sYXllcnMvc3JjL2xpYi9zb3VyY2VzL2NsdXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixJQUFJLEVBQ0osS0FBSyxHQUdOLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxPQUFPLEVBQVUsTUFBTSxXQUFXLENBQUM7QUFHNUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7O0FBTzNELE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxlQUFlO0lBY3pELFlBQW9CLEtBQTJCO1FBQzdDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNmLENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsUUFBUSxDQUFDO1FBRWxELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7WUFDeEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNDLENBQUM7SUFDSCxDQUFDO3VGQTdCVSxzQkFBc0I7b0VBQXRCLHNCQUFzQjt3Q0FRbkIscUJBQXFCOzs7O3NJQVZ4QixDQUFDLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHNCQUFzQixDQUFDLEVBQUUsQ0FBQzs7WUFEcEYsa0JBQXlCOzs7aUZBRzFCLHNCQUFzQjtjQUxsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLHVCQUF1QixDQUFDLEVBQUUsQ0FBQzthQUNqRzs7c0JBZWMsSUFBSTtxQkFaakIsUUFBUTtrQkFEUCxLQUFLO1lBR04sZ0JBQWdCO2tCQURmLEtBQUs7WUFHTixLQUFLO2tCQURKLEtBQUs7WUFJTixxQkFBcUI7a0JBRHBCLFlBQVk7bUJBQUMscUJBQXFCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOztrRkFSM0Msc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIGZvcndhcmRSZWYsXG4gIEhvc3QsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmVhdHVyZSB9IGZyb20gJ29sJztcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnb2wvZ2VvbSc7XG5pbXBvcnQgeyBDbHVzdGVyLCBWZWN0b3IgfSBmcm9tICdvbC9zb3VyY2UnO1xuXG5pbXBvcnQgeyBMYXllclZlY3RvckNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllcnZlY3Rvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU291cmNlQ29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2UuY29tcG9uZW50JztcbmltcG9ydCB7IFNvdXJjZVZlY3RvckNvbXBvbmVudCB9IGZyb20gJy4vdmVjdG9yLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1zb3VyY2UtY2x1c3RlcicsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBTb3VyY2VDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNvdXJjZUNsdXN0ZXJDb21wb25lbnQpIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBTb3VyY2VDbHVzdGVyQ29tcG9uZW50IGV4dGVuZHMgU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KClcbiAgZGlzdGFuY2U6IG51bWJlcjtcbiAgQElucHV0KClcbiAgZ2VvbWV0cnlGdW5jdGlvbj86IChmZWF0dXJlOiBGZWF0dXJlKSA9PiBQb2ludDtcbiAgQElucHV0KClcbiAgd3JhcFg/OiBib29sZWFuO1xuXG4gIEBDb250ZW50Q2hpbGQoU291cmNlVmVjdG9yQ29tcG9uZW50LCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgc291cmNlVmVjdG9yQ29tcG9uZW50OiBTb3VyY2VWZWN0b3JDb21wb25lbnQ7XG5cbiAgaW5zdGFuY2U6IENsdXN0ZXI7XG4gIHNvdXJjZTogVmVjdG9yO1xuXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgbGF5ZXI6IExheWVyVmVjdG9yQ29tcG9uZW50KSB7XG4gICAgc3VwZXIobGF5ZXIpO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuc291cmNlID0gdGhpcy5zb3VyY2VWZWN0b3JDb21wb25lbnQuaW5zdGFuY2U7XG5cbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IENsdXN0ZXIodGhpcyk7XG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFNvdXJjZSh0aGlzLmluc3RhbmNlKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAodGhpcy5pbnN0YW5jZSAmJiBjaGFuZ2VzLmhhc093blByb3BlcnR5KCdkaXN0YW5jZScpKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldERpc3RhbmNlKHRoaXMuZGlzdGFuY2UpO1xuICAgIH1cbiAgfVxufVxuIl19