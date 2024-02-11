import { OnDestroy, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { MapComponent } from '../map.component';
import { LayerComponent } from './layer.component';
import { LayerGroupComponent } from './layergroup.component';
import * as i0 from "@angular/core";
export declare class LayerTileComponent extends LayerComponent implements OnInit, OnDestroy, OnChanges {
    preload: number;
    useInterimTilesOnError: boolean;
    constructor(map: MapComponent, group?: LayerGroupComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LayerTileComponent, [null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LayerTileComponent, "aol-layer-tile", never, { "preload": { "alias": "preload"; "required": false; }; "useInterimTilesOnError": { "alias": "useInterimTilesOnError"; "required": false; }; }, {}, never, ["*"], false, never>;
}
//# sourceMappingURL=layertile.component.d.ts.map