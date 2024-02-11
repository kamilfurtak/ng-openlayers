import { AfterContentInit, EventEmitter } from '@angular/core';
import { Raster, Source } from 'ol/source';
import { Operation, RasterSourceEvent } from 'ol/source/Raster';
import { LayerImageComponent } from '../layers/layerimage.component';
import { SourceComponent } from './source.component';
import * as i0 from "@angular/core";
export declare class SourceRasterComponent extends SourceComponent implements AfterContentInit {
    operation?: Operation;
    threads?: number;
    lib?: any;
    operationType?: 'pixel' | 'image';
    beforeOperations: EventEmitter<RasterSourceEvent>;
    afterOperations: EventEmitter<RasterSourceEvent>;
    instance: Raster;
    sources: Source[];
    set source(sourceComponent: SourceComponent);
    constructor(layer: LayerImageComponent);
    ngAfterContentInit(): void;
    init(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SourceRasterComponent, [{ host: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SourceRasterComponent, "aol-source-raster", never, { "operation": { "alias": "operation"; "required": false; }; "threads": { "alias": "threads"; "required": false; }; "lib": { "alias": "lib"; "required": false; }; "operationType": { "alias": "operationType"; "required": false; }; }, { "beforeOperations": "beforeOperations"; "afterOperations": "afterOperations"; }, ["source"], ["*"], false, never>;
}
//# sourceMappingURL=raster.component.d.ts.map