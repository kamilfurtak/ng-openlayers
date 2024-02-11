import { EventEmitter, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { ImageStatic } from 'ol/source';
import { SourceComponent } from './source.component';
import { LayerImageComponent } from '../layers/layerimage.component';
import { ProjectionLike } from 'ol/proj';
import { Extent } from 'ol/extent';
import { AttributionLike } from 'ol/source/Source';
import { LoadFunction } from 'ol/Image';
import { Size } from 'ol/size';
import { ImageSourceEvent } from 'ol/source/Image';
import * as i0 from "@angular/core";
export declare class SourceImageStaticComponent extends SourceComponent implements OnInit, OnChanges {
    projection: ProjectionLike | string;
    imageExtent: Extent;
    url: string;
    attributions: AttributionLike;
    crossOrigin?: string;
    imageLoadFunction?: LoadFunction;
    imageSize?: Size;
    imageLoadStart: EventEmitter<ImageSourceEvent>;
    imageLoadEnd: EventEmitter<ImageSourceEvent>;
    imageLoadError: EventEmitter<ImageSourceEvent>;
    instance: ImageStatic;
    constructor(layer: LayerImageComponent);
    setLayerSource(): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SourceImageStaticComponent, [{ host: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SourceImageStaticComponent, "aol-source-imagestatic", never, { "projection": { "alias": "projection"; "required": false; }; "imageExtent": { "alias": "imageExtent"; "required": false; }; "url": { "alias": "url"; "required": false; }; "attributions": { "alias": "attributions"; "required": false; }; "crossOrigin": { "alias": "crossOrigin"; "required": false; }; "imageLoadFunction": { "alias": "imageLoadFunction"; "required": false; }; "imageSize": { "alias": "imageSize"; "required": false; }; }, { "imageLoadStart": "imageLoadStart"; "imageLoadEnd": "imageLoadEnd"; "imageLoadError": "imageLoadError"; }, never, ["*"], false, never>;
}
//# sourceMappingURL=imagestatic.component.d.ts.map