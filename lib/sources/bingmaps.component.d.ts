import { OnInit } from '@angular/core';
import { BingMaps } from 'ol/source';
import { SourceComponent } from './source.component';
import { LayerTileComponent } from '../layers/layertile.component';
import { LoadFunction } from 'ol/Tile';
import * as i0 from "@angular/core";
export declare class SourceBingmapsComponent extends SourceComponent implements OnInit {
    cacheSize: number;
    hidpi: boolean;
    culture: string;
    key: string;
    imagerySet: 'Road' | 'Aerial' | 'AerialWithLabels' | 'collinsBart' | 'ordnanceSurvey';
    maxZoom: number;
    reprojectionErrorThreshold: number;
    tileLoadFunction: LoadFunction;
    wrapX: boolean;
    instance: BingMaps;
    constructor(layer: LayerTileComponent);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SourceBingmapsComponent, [{ host: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SourceBingmapsComponent, "aol-source-bingmaps", never, { "cacheSize": { "alias": "cacheSize"; "required": false; }; "hidpi": { "alias": "hidpi"; "required": false; }; "culture": { "alias": "culture"; "required": false; }; "key": { "alias": "key"; "required": false; }; "imagerySet": { "alias": "imagerySet"; "required": false; }; "maxZoom": { "alias": "maxZoom"; "required": false; }; "reprojectionErrorThreshold": { "alias": "reprojectionErrorThreshold"; "required": false; }; "tileLoadFunction": { "alias": "tileLoadFunction"; "required": false; }; "wrapX": { "alias": "wrapX"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=bingmaps.component.d.ts.map