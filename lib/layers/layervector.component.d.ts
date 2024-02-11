import { OnDestroy, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { MapComponent } from '../map.component';
import { Style } from 'ol/style';
import { StyleFunction } from 'ol/style/Style';
import { LayerComponent } from './layer.component';
import { LayerGroupComponent } from './layergroup.component';
import * as i0 from "@angular/core";
export declare class LayerVectorComponent extends LayerComponent implements OnInit, OnDestroy, OnChanges {
    renderBuffer: number;
    style: Style | Style[] | StyleFunction;
    updateWhileAnimating: boolean;
    updateWhileInteracting: boolean;
    constructor(map: MapComponent, group?: LayerGroupComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LayerVectorComponent, [null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LayerVectorComponent, "aol-layer-vector", never, { "renderBuffer": { "alias": "renderBuffer"; "required": false; }; "style": { "alias": "style"; "required": false; }; "updateWhileAnimating": { "alias": "updateWhileAnimating"; "required": false; }; "updateWhileInteracting": { "alias": "updateWhileInteracting"; "required": false; }; }, {}, never, ["*"], false, never>;
}
//# sourceMappingURL=layervector.component.d.ts.map