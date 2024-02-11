import { OnInit } from '@angular/core';
import { TileJSON } from 'ol/source';
import { LayerTileComponent } from '../layers/layertile.component';
import { SourceComponent } from './source.component';
import * as i0 from "@angular/core";
export declare class SourceTileJSONComponent extends SourceComponent implements OnInit {
    url: string;
    instance: TileJSON;
    constructor(layer: LayerTileComponent);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SourceTileJSONComponent, [{ host: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SourceTileJSONComponent, "aol-source-tilejson", never, { "url": { "alias": "url"; "required": false; }; }, {}, never, ["*"], false, never>;
}
//# sourceMappingURL=tilejson.component.d.ts.map