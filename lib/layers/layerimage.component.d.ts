import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MapComponent } from '../map.component';
import { LayerComponent } from './layer.component';
import { LayerGroupComponent } from './layergroup.component';
import { Extent } from 'ol/extent';
import * as i0 from "@angular/core";
export declare class LayerImageComponent extends LayerComponent implements OnInit, OnChanges {
    opacity: number;
    visible: boolean;
    extent: Extent;
    minResolution: number;
    maxResolution: number;
    zIndex: number;
    constructor(map: MapComponent, group?: LayerGroupComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LayerImageComponent, [null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LayerImageComponent, "aol-layer-image", never, { "opacity": { "alias": "opacity"; "required": false; }; "visible": { "alias": "visible"; "required": false; }; "extent": { "alias": "extent"; "required": false; }; "minResolution": { "alias": "minResolution"; "required": false; }; "maxResolution": { "alias": "maxResolution"; "required": false; }; "zIndex": { "alias": "zIndex"; "required": false; }; }, {}, never, ["*"], false, never>;
}
//# sourceMappingURL=layerimage.component.d.ts.map