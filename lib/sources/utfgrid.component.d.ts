import { OnInit } from '@angular/core';
import { SourceComponent } from './source.component';
import { LayerTileComponent } from '../layers/layertile.component';
import { UTFGrid } from 'ol/source';
import { Config } from 'ol/source/TileJSON';
import * as i0 from "@angular/core";
export declare class SourceUTFGridComponent extends SourceComponent implements OnInit {
    tileJSON: Config;
    url: string;
    instance: UTFGrid;
    constructor(layer: LayerTileComponent);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SourceUTFGridComponent, [{ host: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SourceUTFGridComponent, "aol-source-utfgrid", never, { "tileJSON": { "alias": "tileJSON"; "required": false; }; "url": { "alias": "url"; "required": false; }; }, {}, never, ["*"], false, never>;
}
//# sourceMappingURL=utfgrid.component.d.ts.map