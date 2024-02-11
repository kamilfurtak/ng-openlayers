import { OnInit } from '@angular/core';
import WMTS from 'ol/tilegrid/WMTS';
import { TileGridComponent } from './tilegrid.component';
import { Coordinate } from 'ol/coordinate';
import { Size } from 'ol/size';
import * as i0 from "@angular/core";
export declare class TileGridWMTSComponent extends TileGridComponent implements OnInit {
    origin?: Coordinate;
    origins?: Coordinate[];
    resolutions: number[];
    matrixIds: string[];
    sizes?: Size[];
    tileSizes?: Size[];
    widths?: number[];
    instance: WMTS;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TileGridWMTSComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TileGridWMTSComponent, "aol-tilegrid-wmts", never, { "origin": { "alias": "origin"; "required": false; }; "origins": { "alias": "origins"; "required": false; }; "resolutions": { "alias": "resolutions"; "required": false; }; "matrixIds": { "alias": "matrixIds"; "required": false; }; "sizes": { "alias": "sizes"; "required": false; }; "tileSizes": { "alias": "tileSizes"; "required": false; }; "widths": { "alias": "widths"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=tilegridwmts.component.d.ts.map