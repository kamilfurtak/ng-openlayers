import { Component, forwardRef, Input } from '@angular/core';
import { FormatComponent } from './format.component';
import { MVT } from 'ol/format';
import * as i0 from "@angular/core";
export class FormatMVTComponent extends FormatComponent {
    constructor() {
        super();
        this.instance = new MVT(this);
    }
    static { this.ɵfac = function FormatMVTComponent_Factory(t) { return new (t || FormatMVTComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FormatMVTComponent, selectors: [["aol-format-mvt"]], inputs: { featureClass: "featureClass", geometryName: "geometryName", layerName: "layerName", layers: "layers" }, features: [i0.ɵɵProvidersFeature([{ provide: FormatComponent, useExisting: forwardRef(() => FormatMVTComponent) }]), i0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function FormatMVTComponent_Template(rf, ctx) { }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormatMVTComponent, [{
        type: Component,
        args: [{
                selector: 'aol-format-mvt',
                template: '',
                providers: [{ provide: FormatComponent, useExisting: forwardRef(() => FormatMVTComponent) }],
            }]
    }], () => [], { featureClass: [{
            type: Input
        }], geometryName: [{
            type: Input
        }], layerName: [{
            type: Input
        }], layers: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FormatMVTComponent, { className: "FormatMVTComponent", filePath: "lib/formats/mvt.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXZ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvbmctb3BlbmxheWVycy9zcmMvbGliL2Zvcm1hdHMvbXZ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxXQUFXLENBQUM7O0FBUWhDLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxlQUFlO0lBWXJEO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7bUZBZlUsa0JBQWtCO29FQUFsQixrQkFBa0Isc0xBRmxCLENBQUMsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsa0JBQWtCLENBQUMsRUFBRSxDQUFDOztpRkFFakYsa0JBQWtCO2NBTDlCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUUsRUFBRTtnQkFDWixTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsbUJBQW1CLENBQUMsRUFBRSxDQUFDO2FBQzdGO29CQUdDLFlBQVk7a0JBRFgsS0FBSztZQUdOLFlBQVk7a0JBRFgsS0FBSztZQUdOLFNBQVM7a0JBRFIsS0FBSztZQUdOLE1BQU07a0JBREwsS0FBSzs7a0ZBUEssa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBmb3J3YXJkUmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybWF0Q29tcG9uZW50IH0gZnJvbSAnLi9mb3JtYXQuY29tcG9uZW50JztcbmltcG9ydCB7IE1WVCB9IGZyb20gJ29sL2Zvcm1hdCc7XG5pbXBvcnQgeyBGZWF0dXJlQ2xhc3MgfSBmcm9tICdvbC9GZWF0dXJlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLWZvcm1hdC1tdnQnLFxuICB0ZW1wbGF0ZTogJycsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogRm9ybWF0Q29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBGb3JtYXRNVlRDb21wb25lbnQpIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtYXRNVlRDb21wb25lbnQgZXh0ZW5kcyBGb3JtYXRDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBmZWF0dXJlQ2xhc3M6IEZlYXR1cmVDbGFzcztcbiAgQElucHV0KClcbiAgZ2VvbWV0cnlOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGxheWVyTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBsYXllcnM6IHN0cmluZ1tdO1xuXG4gIGluc3RhbmNlOiBNVlQ7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IE1WVCh0aGlzKTtcbiAgfVxufVxuIl19