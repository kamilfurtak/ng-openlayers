import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import TileGrid from 'ol/tilegrid/TileGrid';
import { Extent } from 'ol/extent';
import { Coordinate } from 'ol/coordinate';
import { Size } from 'ol/size';
import * as i0 from "@angular/core";
export declare class TileGridComponent implements OnInit, OnChanges {
    extent: Extent;
    maxZoom: number;
    minZoom: number;
    tileSize: number | Size;
    origin?: Coordinate;
    resolutions: number[];
    instance: TileGrid;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TileGridComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TileGridComponent, "aol-tilegrid", never, { "extent": { "alias": "extent"; "required": false; }; "maxZoom": { "alias": "maxZoom"; "required": false; }; "minZoom": { "alias": "minZoom"; "required": false; }; "tileSize": { "alias": "tileSize"; "required": false; }; "origin": { "alias": "origin"; "required": false; }; "resolutions": { "alias": "resolutions"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=tilegrid.component.d.ts.map