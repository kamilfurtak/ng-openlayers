import { AfterContentInit, OnChanges, SimpleChanges } from '@angular/core';
import { Feature } from 'ol';
import { Point } from 'ol/geom';
import { Cluster, Vector } from 'ol/source';
import { LayerVectorComponent } from '../layers/layervector.component';
import { SourceComponent } from './source.component';
import { SourceVectorComponent } from './vector.component';
import * as i0 from "@angular/core";
export declare class SourceClusterComponent extends SourceComponent implements AfterContentInit, OnChanges {
    distance: number;
    geometryFunction?: (feature: Feature) => Point;
    wrapX?: boolean;
    sourceVectorComponent: SourceVectorComponent;
    instance: Cluster;
    source: Vector;
    constructor(layer: LayerVectorComponent);
    ngAfterContentInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SourceClusterComponent, [{ host: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SourceClusterComponent, "aol-source-cluster", never, { "distance": { "alias": "distance"; "required": false; }; "geometryFunction": { "alias": "geometryFunction"; "required": false; }; "wrapX": { "alias": "wrapX"; "required": false; }; }, {}, ["sourceVectorComponent"], ["*"], false, never>;
}
//# sourceMappingURL=cluster.component.d.ts.map