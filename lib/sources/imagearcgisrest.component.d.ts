import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import ImageArcGISRest from 'ol/source/ImageArcGISRest';
import { LayerImageComponent } from '../layers/layerimage.component';
import { SourceComponent } from './source.component';
import { ProjectionLike } from 'ol/proj';
import { AttributionLike } from 'ol/source/Source';
import { LoadFunction } from 'ol/Image';
import { ImageSourceEvent } from 'ol/source/Image';
import * as i0 from "@angular/core";
export declare class SourceImageArcGISRestComponent extends SourceComponent implements OnInit, OnChanges {
    projection: ProjectionLike | string;
    url: string;
    attributions: AttributionLike;
    crossOrigin?: string;
    imageLoadFunction?: LoadFunction;
    params?: {
        [k: string]: any;
    };
    ratio: number;
    resolutions?: number[];
    wrapX?: boolean;
    imageLoadStart: EventEmitter<ImageSourceEvent>;
    imageLoadEnd: EventEmitter<ImageSourceEvent>;
    imageLoadError: EventEmitter<ImageSourceEvent>;
    instance: ImageArcGISRest;
    constructor(layer: LayerImageComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SourceImageArcGISRestComponent, [{ host: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SourceImageArcGISRestComponent, "aol-source-imagearcgisrest", never, { "projection": { "alias": "projection"; "required": false; }; "url": { "alias": "url"; "required": false; }; "attributions": { "alias": "attributions"; "required": false; }; "crossOrigin": { "alias": "crossOrigin"; "required": false; }; "imageLoadFunction": { "alias": "imageLoadFunction"; "required": false; }; "params": { "alias": "params"; "required": false; }; "ratio": { "alias": "ratio"; "required": false; }; "resolutions": { "alias": "resolutions"; "required": false; }; "wrapX": { "alias": "wrapX"; "required": false; }; }, { "imageLoadStart": "imageLoadStart"; "imageLoadEnd": "imageLoadEnd"; "imageLoadError": "imageLoadError"; }, never, ["*"], false, never>;
}
//# sourceMappingURL=imagearcgisrest.component.d.ts.map