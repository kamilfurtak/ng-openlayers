import { Component, ContentChild, EventEmitter, forwardRef, Host, Input, Output, } from '@angular/core';
import { Raster } from 'ol/source';
import { SourceComponent } from './source.component';
import * as i0 from "@angular/core";
import * as i1 from "../layers/layerimage.component";
const _c0 = ["*"];
export class SourceRasterComponent extends SourceComponent {
    set source(sourceComponent) {
        this.sources = [sourceComponent.instance];
        if (this.instance) {
            // Openlayer doesn't handle sources update. Just recreate Raster instance.
            this.init();
        }
    }
    constructor(layer) {
        super(layer);
        this.beforeOperations = new EventEmitter();
        this.afterOperations = new EventEmitter();
        this.sources = [];
    }
    ngAfterContentInit() {
        this.init();
    }
    init() {
        this.instance = new Raster(this);
        this.instance.on('beforeoperations', (event) => this.beforeOperations.emit(event));
        this.instance.on('afteroperations', (event) => this.afterOperations.emit(event));
        this.register(this.instance);
    }
    static { this.ɵfac = function SourceRasterComponent_Factory(t) { return new (t || SourceRasterComponent)(i0.ɵɵdirectiveInject(i1.LayerImageComponent, 1)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SourceRasterComponent, selectors: [["aol-source-raster"]], contentQueries: function SourceRasterComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, SourceComponent, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.source = _t.first);
        } }, inputs: { operation: "operation", threads: "threads", lib: "lib", operationType: "operationType" }, outputs: { beforeOperations: "beforeOperations", afterOperations: "afterOperations" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: SourceComponent,
                    useExisting: forwardRef(() => SourceRasterComponent),
                },
            ]), i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function SourceRasterComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SourceRasterComponent, [{
        type: Component,
        args: [{
                selector: 'aol-source-raster',
                template: ` <ng-content></ng-content> `,
                providers: [
                    {
                        provide: SourceComponent,
                        useExisting: forwardRef(() => SourceRasterComponent),
                    },
                ],
            }]
    }], () => [{ type: i1.LayerImageComponent, decorators: [{
                type: Host
            }] }], { operation: [{
            type: Input
        }], threads: [{
            type: Input
        }], lib: [{
            type: Input
        }], operationType: [{
            type: Input
        }], beforeOperations: [{
            type: Output
        }], afterOperations: [{
            type: Output
        }], source: [{
            type: ContentChild,
            args: [SourceComponent, { static: false }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SourceRasterComponent, { className: "SourceRasterComponent", filePath: "lib/sources/raster.component.ts", lineNumber: 27 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFzdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvbmctb3BlbmxheWVycy9zcmMvbGliL3NvdXJjZXMvcmFzdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULFlBQVksRUFDWixZQUFZLEVBQ1osVUFBVSxFQUNWLElBQUksRUFDSixLQUFLLEVBQ0wsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxNQUFNLEVBQVUsTUFBTSxXQUFXLENBQUM7QUFJM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7O0FBWXJELE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxlQUFlO0lBa0J4RCxJQUNJLE1BQU0sQ0FBQyxlQUFnQztRQUN6QyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2xCLDBFQUEwRTtZQUMxRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDZCxDQUFDO0lBQ0gsQ0FBQztJQUVELFlBQW9CLEtBQTBCO1FBQzVDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQWpCZixxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBcUIsQ0FBQztRQUV6RCxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFxQixDQUFDO1FBR3hELFlBQU8sR0FBYSxFQUFFLENBQUM7SUFhdkIsQ0FBQztJQUVELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxLQUF3QixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDdEcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxLQUF3QixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3BHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQy9CLENBQUM7c0ZBeENVLHFCQUFxQjtvRUFBckIscUJBQXFCO3dDQWtCbEIsZUFBZTs7Ozt5T0F6QmxCO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxlQUFlO29CQUN4QixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHFCQUFxQixDQUFDO2lCQUNyRDthQUNGOztZQU5XLGtCQUF5Qjs7O2lGQVExQixxQkFBcUI7Y0FWakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsZUFBZTt3QkFDeEIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsc0JBQXNCLENBQUM7cUJBQ3JEO2lCQUNGO2FBQ0Y7O3NCQTRCYyxJQUFJO3FCQXpCakIsU0FBUztrQkFEUixLQUFLO1lBR04sT0FBTztrQkFETixLQUFLO1lBR04sR0FBRztrQkFERixLQUFLO1lBR04sYUFBYTtrQkFEWixLQUFLO1lBSU4sZ0JBQWdCO2tCQURmLE1BQU07WUFHUCxlQUFlO2tCQURkLE1BQU07WUFPSCxNQUFNO2tCQURULFlBQVk7bUJBQUMsZUFBZSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7a0ZBbEJyQyxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBIb3N0LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJhc3RlciwgU291cmNlIH0gZnJvbSAnb2wvc291cmNlJztcbmltcG9ydCB7IE9wZXJhdGlvbiwgUmFzdGVyU291cmNlRXZlbnQgfSBmcm9tICdvbC9zb3VyY2UvUmFzdGVyJztcblxuaW1wb3J0IHsgTGF5ZXJJbWFnZUNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllcmltYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtc291cmNlLXJhc3RlcicsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogU291cmNlQ29tcG9uZW50LFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU291cmNlUmFzdGVyQ29tcG9uZW50KSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBTb3VyY2VSYXN0ZXJDb21wb25lbnQgZXh0ZW5kcyBTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgQElucHV0KClcbiAgb3BlcmF0aW9uPzogT3BlcmF0aW9uO1xuICBASW5wdXQoKVxuICB0aHJlYWRzPzogbnVtYmVyO1xuICBASW5wdXQoKVxuICBsaWI/OiBhbnk7XG4gIEBJbnB1dCgpXG4gIG9wZXJhdGlvblR5cGU/OiAncGl4ZWwnIHwgJ2ltYWdlJztcblxuICBAT3V0cHV0KClcbiAgYmVmb3JlT3BlcmF0aW9ucyA9IG5ldyBFdmVudEVtaXR0ZXI8UmFzdGVyU291cmNlRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKVxuICBhZnRlck9wZXJhdGlvbnMgPSBuZXcgRXZlbnRFbWl0dGVyPFJhc3RlclNvdXJjZUV2ZW50PigpO1xuXG4gIGluc3RhbmNlOiBSYXN0ZXI7XG4gIHNvdXJjZXM6IFNvdXJjZVtdID0gW107XG5cbiAgQENvbnRlbnRDaGlsZChTb3VyY2VDb21wb25lbnQsIHsgc3RhdGljOiBmYWxzZSB9KVxuICBzZXQgc291cmNlKHNvdXJjZUNvbXBvbmVudDogU291cmNlQ29tcG9uZW50KSB7XG4gICAgdGhpcy5zb3VyY2VzID0gW3NvdXJjZUNvbXBvbmVudC5pbnN0YW5jZV07XG4gICAgaWYgKHRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIC8vIE9wZW5sYXllciBkb2Vzbid0IGhhbmRsZSBzb3VyY2VzIHVwZGF0ZS4gSnVzdCByZWNyZWF0ZSBSYXN0ZXIgaW5zdGFuY2UuXG4gICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihASG9zdCgpIGxheWVyOiBMYXllckltYWdlQ29tcG9uZW50KSB7XG4gICAgc3VwZXIobGF5ZXIpO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFJhc3Rlcih0aGlzKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdiZWZvcmVvcGVyYXRpb25zJywgKGV2ZW50OiBSYXN0ZXJTb3VyY2VFdmVudCkgPT4gdGhpcy5iZWZvcmVPcGVyYXRpb25zLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdhZnRlcm9wZXJhdGlvbnMnLCAoZXZlbnQ6IFJhc3RlclNvdXJjZUV2ZW50KSA9PiB0aGlzLmFmdGVyT3BlcmF0aW9ucy5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5yZWdpc3Rlcih0aGlzLmluc3RhbmNlKTtcbiAgfVxufVxuIl19