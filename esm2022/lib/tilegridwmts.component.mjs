import { Component, Input } from '@angular/core';
import WMTS from 'ol/tilegrid/WMTS';
import { TileGridComponent } from './tilegrid.component';
import * as i0 from "@angular/core";
export class TileGridWMTSComponent extends TileGridComponent {
    ngOnInit() {
        this.instance = new WMTS(this);
    }
    static { this.ɵfac = /*@__PURE__*/ (() => { let ɵTileGridWMTSComponent_BaseFactory; return function TileGridWMTSComponent_Factory(t) { return (ɵTileGridWMTSComponent_BaseFactory || (ɵTileGridWMTSComponent_BaseFactory = i0.ɵɵgetInheritedFactory(TileGridWMTSComponent)))(t || TileGridWMTSComponent); }; })(); }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TileGridWMTSComponent, selectors: [["aol-tilegrid-wmts"]], inputs: { origin: "origin", origins: "origins", resolutions: "resolutions", matrixIds: "matrixIds", sizes: "sizes", tileSizes: "tileSizes", widths: "widths" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function TileGridWMTSComponent_Template(rf, ctx) { }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TileGridWMTSComponent, [{
        type: Component,
        args: [{
                selector: 'aol-tilegrid-wmts',
                template: '',
            }]
    }], null, { origin: [{
            type: Input
        }], origins: [{
            type: Input
        }], resolutions: [{
            type: Input
        }], matrixIds: [{
            type: Input
        }], sizes: [{
            type: Input
        }], tileSizes: [{
            type: Input
        }], widths: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TileGridWMTSComponent, { className: "TileGridWMTSComponent", filePath: "lib/tilegridwmts.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZWdyaWR3bXRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpYnMvbmctb3BlbmxheWVycy9zcmMvbGliL3RpbGVncmlkd210cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxJQUFJLE1BQU0sa0JBQWtCLENBQUM7QUFDcEMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBUXpELE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxpQkFBaUI7SUFrQjFELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7d1BBcEJVLHFCQUFxQixTQUFyQixxQkFBcUI7b0VBQXJCLHFCQUFxQjs7aUZBQXJCLHFCQUFxQjtjQUpqQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsUUFBUSxFQUFFLEVBQUU7YUFDYjtnQkFHQyxNQUFNO2tCQURMLEtBQUs7WUFHTixPQUFPO2tCQUROLEtBQUs7WUFHTixXQUFXO2tCQURWLEtBQUs7WUFHTixTQUFTO2tCQURSLEtBQUs7WUFHTixLQUFLO2tCQURKLEtBQUs7WUFHTixTQUFTO2tCQURSLEtBQUs7WUFHTixNQUFNO2tCQURMLEtBQUs7O2tGQWJLLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IFdNVFMgZnJvbSAnb2wvdGlsZWdyaWQvV01UUyc7XG5pbXBvcnQgeyBUaWxlR3JpZENvbXBvbmVudCB9IGZyb20gJy4vdGlsZWdyaWQuY29tcG9uZW50JztcbmltcG9ydCB7IENvb3JkaW5hdGUgfSBmcm9tICdvbC9jb29yZGluYXRlJztcbmltcG9ydCB7IFNpemUgfSBmcm9tICdvbC9zaXplJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLXRpbGVncmlkLXdtdHMnLFxuICB0ZW1wbGF0ZTogJycsXG59KVxuZXhwb3J0IGNsYXNzIFRpbGVHcmlkV01UU0NvbXBvbmVudCBleHRlbmRzIFRpbGVHcmlkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgb3JpZ2luPzogQ29vcmRpbmF0ZTtcbiAgQElucHV0KClcbiAgb3JpZ2lucz86IENvb3JkaW5hdGVbXTtcbiAgQElucHV0KClcbiAgcmVzb2x1dGlvbnM6IG51bWJlcltdO1xuICBASW5wdXQoKVxuICBtYXRyaXhJZHM6IHN0cmluZ1tdO1xuICBASW5wdXQoKVxuICBzaXplcz86IFNpemVbXTtcbiAgQElucHV0KClcbiAgdGlsZVNpemVzPzogU2l6ZVtdO1xuICBASW5wdXQoKVxuICB3aWR0aHM/OiBudW1iZXJbXTtcblxuICBpbnN0YW5jZTogV01UUztcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFdNVFModGhpcyk7XG4gIH1cbn1cbiJdfQ==