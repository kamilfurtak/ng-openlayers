import { OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { Feature } from 'ol';
import { Style } from 'ol/style';
import { MapComponent } from '../map.component';
import { LayerComponent } from './layer.component';
import { LayerGroupComponent } from './layergroup.component';
import { StyleFunction } from 'ol/style/Style';
import * as i0 from "@angular/core";
export declare class LayerVectorTileComponent extends LayerComponent implements OnInit, OnChanges {
    renderBuffer: number;
    renderMode: any | string;
    renderOrder: (feature1: Feature, feature2: Feature) => number;
    style: Style | Style[] | StyleFunction;
    updateWhileAnimating: boolean;
    updateWhileInteracting: boolean;
    visible: boolean;
    constructor(map: MapComponent, group?: LayerGroupComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LayerVectorTileComponent, [null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LayerVectorTileComponent, "aol-layer-vectortile", never, { "renderBuffer": { "alias": "renderBuffer"; "required": false; }; "renderMode": { "alias": "renderMode"; "required": false; }; "renderOrder": { "alias": "renderOrder"; "required": false; }; "style": { "alias": "style"; "required": false; }; "updateWhileAnimating": { "alias": "updateWhileAnimating"; "required": false; }; "updateWhileInteracting": { "alias": "updateWhileInteracting"; "required": false; }; "visible": { "alias": "visible"; "required": false; }; }, {}, never, ["*"], false, never>;
}
//# sourceMappingURL=layervectortile.component.d.ts.map