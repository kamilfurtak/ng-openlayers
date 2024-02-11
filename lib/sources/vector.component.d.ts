import { OnInit } from '@angular/core';
import { Vector } from 'ol/source';
import Feature from 'ol/format/Feature';
import { LayerVectorComponent } from '../layers/layervector.component';
import { SourceComponent } from './source.component';
import { LoadingStrategy } from 'ol/source/Vector';
import * as i0 from "@angular/core";
export declare class SourceVectorComponent extends SourceComponent implements OnInit {
    overlaps: boolean;
    useSpatialIndex: boolean;
    wrapX: boolean;
    url: string;
    format: Feature;
    strategy: LoadingStrategy;
    instance: Vector;
    constructor(layer: LayerVectorComponent);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SourceVectorComponent, [{ host: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SourceVectorComponent, "aol-source-vector", never, { "overlaps": { "alias": "overlaps"; "required": false; }; "useSpatialIndex": { "alias": "useSpatialIndex"; "required": false; }; "wrapX": { "alias": "wrapX"; "required": false; }; "url": { "alias": "url"; "required": false; }; "format": { "alias": "format"; "required": false; }; "strategy": { "alias": "strategy"; "required": false; }; }, {}, never, ["*"], false, never>;
}
//# sourceMappingURL=vector.component.d.ts.map