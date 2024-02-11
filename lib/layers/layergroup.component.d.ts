import { OnDestroy, OnInit } from '@angular/core';
import { Group } from 'ol/layer';
import { LayerComponent } from './layer.component';
import { MapComponent } from '../map.component';
import * as i0 from "@angular/core";
export declare class LayerGroupComponent extends LayerComponent implements OnInit, OnDestroy {
    instance: Group;
    constructor(map: MapComponent, group?: LayerGroupComponent);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LayerGroupComponent, [null, { optional: true; skipSelf: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LayerGroupComponent, "aol-layer-group", never, {}, {}, never, ["*"], false, never>;
}
//# sourceMappingURL=layergroup.component.d.ts.map