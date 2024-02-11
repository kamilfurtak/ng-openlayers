import { OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { Feature } from 'ol';
import { SourceVectorComponent } from './sources/vector.component';
import * as i0 from "@angular/core";
export declare class FeatureComponent implements OnInit, OnDestroy, OnChanges {
    private host;
    id: string | number | undefined;
    componentType: string;
    instance: Feature;
    constructor(host: SourceVectorComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FeatureComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FeatureComponent, "aol-feature", never, { "id": { "alias": "id"; "required": false; }; }, {}, never, ["*"], false, never>;
}
//# sourceMappingURL=feature.component.d.ts.map