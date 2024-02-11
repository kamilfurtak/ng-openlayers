import { OnChanges, OnInit, SimpleChanges, EventEmitter } from '@angular/core';
import { ImageWMS } from 'ol/source';
import { LayerImageComponent } from '../layers/layerimage.component';
import { SourceComponent } from './source.component';
import { ProjectionLike } from 'ol/proj';
import { AttributionLike } from 'ol/source/Source';
import { LoadFunction } from 'ol/Image';
import { ImageSourceEvent } from 'ol/source/Image';
import { ServerType } from 'ol/source/wms';
import * as i0 from "@angular/core";
export declare class SourceImageWMSComponent extends SourceComponent implements OnChanges, OnInit {
    attributions: AttributionLike;
    crossOrigin: string;
    hidpi: boolean;
    serverType: ServerType;
    imageLoadFunction?: LoadFunction;
    params: {
        [key: string]: any;
    };
    projection: ProjectionLike | string;
    ratio: number;
    resolutions: Array<number>;
    url: string;
    imageLoadStart: EventEmitter<ImageSourceEvent>;
    imageLoadEnd: EventEmitter<ImageSourceEvent>;
    imageLoadError: EventEmitter<ImageSourceEvent>;
    instance: ImageWMS;
    constructor(layer: LayerImageComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SourceImageWMSComponent, [{ host: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SourceImageWMSComponent, "aol-source-imagewms", never, { "attributions": { "alias": "attributions"; "required": false; }; "crossOrigin": { "alias": "crossOrigin"; "required": false; }; "hidpi": { "alias": "hidpi"; "required": false; }; "serverType": { "alias": "serverType"; "required": false; }; "imageLoadFunction": { "alias": "imageLoadFunction"; "required": false; }; "params": { "alias": "params"; "required": false; }; "projection": { "alias": "projection"; "required": false; }; "ratio": { "alias": "ratio"; "required": false; }; "resolutions": { "alias": "resolutions"; "required": false; }; "url": { "alias": "url"; "required": false; }; }, { "imageLoadStart": "imageLoadStart"; "imageLoadEnd": "imageLoadEnd"; "imageLoadError": "imageLoadError"; }, never, ["*"], false, never>;
}
//# sourceMappingURL=imagewms.component.d.ts.map