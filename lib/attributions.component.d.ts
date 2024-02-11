import { AfterViewInit, QueryList } from '@angular/core';
import { SourceComponent } from './sources/source.component';
import { AttributionComponent } from './attribution.component';
import * as i0 from "@angular/core";
export declare class AttributionsComponent implements AfterViewInit {
    private source;
    attributions: QueryList<AttributionComponent>;
    instance: Array<string>;
    constructor(source: SourceComponent);
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AttributionsComponent, [{ host: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AttributionsComponent, "aol-attributions", never, {}, {}, ["attributions"], ["*"], false, never>;
}
//# sourceMappingURL=attributions.component.d.ts.map