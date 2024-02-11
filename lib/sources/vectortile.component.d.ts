import { AfterContentInit } from '@angular/core';
import { VectorTile } from 'ol/source';
import Feature from 'ol/format/Feature';
import TileGrid from 'ol/tilegrid/TileGrid';
import { LayerVectorTileComponent } from '../layers/layervectortile.component';
import { FormatComponent } from '../formats/format.component';
import { TileGridComponent } from '../tilegrid.component';
import { SourceComponent } from './source.component';
import { ProjectionLike } from 'ol/proj';
import { UrlFunction } from 'ol/Tile';
import * as i0 from "@angular/core";
export declare class SourceVectorTileComponent extends SourceComponent implements AfterContentInit {
    cacheSize: number;
    overlaps: boolean;
    projection: ProjectionLike;
    tilePixelRatio: number;
    tileUrlFunction: UrlFunction;
    url: string;
    urls: string[];
    wrapX: boolean;
    formatComponent: FormatComponent;
    tileGridComponent: TileGridComponent;
    instance: VectorTile;
    format: Feature;
    tileGrid: TileGrid;
    constructor(layer: LayerVectorTileComponent);
    ngAfterContentInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SourceVectorTileComponent, [{ host: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SourceVectorTileComponent, "aol-source-vectortile", never, { "cacheSize": { "alias": "cacheSize"; "required": false; }; "overlaps": { "alias": "overlaps"; "required": false; }; "projection": { "alias": "projection"; "required": false; }; "tilePixelRatio": { "alias": "tilePixelRatio"; "required": false; }; "tileUrlFunction": { "alias": "tileUrlFunction"; "required": false; }; "url": { "alias": "url"; "required": false; }; "urls": { "alias": "urls"; "required": false; }; "wrapX": { "alias": "wrapX"; "required": false; }; }, {}, ["formatComponent", "tileGridComponent"], ["*"], false, never>;
}
//# sourceMappingURL=vectortile.component.d.ts.map