import { AfterContentInit, EventEmitter } from '@angular/core';
import { OSM } from 'ol/source';
import { AttributionLike } from 'ol/source/Source';
import { TileSourceEvent } from 'ol/source/Tile';
import { LoadFunction } from 'ol/Tile';
import { LayerTileComponent } from '../layers/layertile.component';
import { SourceXYZComponent } from './xyz.component';
import * as i0 from "@angular/core";
export declare class SourceOsmComponent extends SourceXYZComponent implements AfterContentInit {
    protected layer?: LayerTileComponent;
    attributions: AttributionLike;
    cacheSize: number;
    crossOrigin: string;
    maxZoom: number;
    opaque: boolean;
    reprojectionErrorThreshold: number;
    tileLoadFunction: LoadFunction;
    url: string;
    wrapX: boolean;
    tileLoadStart: EventEmitter<TileSourceEvent>;
    tileLoadEnd: EventEmitter<TileSourceEvent>;
    tileLoadError: EventEmitter<TileSourceEvent>;
    instance: OSM;
    constructor(layer?: LayerTileComponent);
    ngAfterContentInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SourceOsmComponent, [{ optional: true; host: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SourceOsmComponent, "aol-source-osm", never, { "attributions": { "alias": "attributions"; "required": false; }; "cacheSize": { "alias": "cacheSize"; "required": false; }; "crossOrigin": { "alias": "crossOrigin"; "required": false; }; "maxZoom": { "alias": "maxZoom"; "required": false; }; "opaque": { "alias": "opaque"; "required": false; }; "reprojectionErrorThreshold": { "alias": "reprojectionErrorThreshold"; "required": false; }; "tileLoadFunction": { "alias": "tileLoadFunction"; "required": false; }; "url": { "alias": "url"; "required": false; }; "wrapX": { "alias": "wrapX"; "required": false; }; }, { "tileLoadStart": "tileLoadStart"; "tileLoadEnd": "tileLoadEnd"; "tileLoadError": "tileLoadError"; }, never, never, false, never>;
}
//# sourceMappingURL=osm.component.d.ts.map