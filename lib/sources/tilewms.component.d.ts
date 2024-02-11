import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { LayerTileComponent } from '../layers/layertile.component';
import { SourceComponent } from './source.component';
import { TileWMS } from 'ol/source';
import TileGrid from 'ol/tilegrid/TileGrid';
import { LoadFunction } from 'ol/Tile';
import { ServerType } from 'ol/source/wms';
import * as i0 from "@angular/core";
export declare class SourceTileWMSComponent extends SourceComponent implements OnChanges, OnInit {
    cacheSize: number;
    crossOrigin: string;
    gutter: number;
    hidpi: boolean;
    params: {
        [key: string]: any;
    };
    projection: string;
    reprojectionErrorThreshold: number;
    serverType: ServerType;
    tileGrid: TileGrid;
    tileLoadFunction: LoadFunction;
    url: string;
    urls: string[];
    wrapX: boolean;
    instance: TileWMS;
    constructor(layer: LayerTileComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SourceTileWMSComponent, [{ host: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SourceTileWMSComponent, "aol-source-tilewms", never, { "cacheSize": { "alias": "cacheSize"; "required": false; }; "crossOrigin": { "alias": "crossOrigin"; "required": false; }; "gutter": { "alias": "gutter"; "required": false; }; "hidpi": { "alias": "hidpi"; "required": false; }; "params": { "alias": "params"; "required": false; }; "projection": { "alias": "projection"; "required": false; }; "reprojectionErrorThreshold": { "alias": "reprojectionErrorThreshold"; "required": false; }; "serverType": { "alias": "serverType"; "required": false; }; "tileGrid": { "alias": "tileGrid"; "required": false; }; "tileLoadFunction": { "alias": "tileLoadFunction"; "required": false; }; "url": { "alias": "url"; "required": false; }; "urls": { "alias": "urls"; "required": false; }; "wrapX": { "alias": "wrapX"; "required": false; }; }, {}, never, ["*"], false, never>;
}
//# sourceMappingURL=tilewms.component.d.ts.map