import { OnDestroy, OnInit } from '@angular/core';
import { Control } from 'ol/control';
import { Collection } from 'ol';
import { Options as AttributionOptions } from 'ol/control/Attribution';
import { Options as RotateOptions } from 'ol/control/Rotate';
import { Options as ZoomOptions } from 'ol/control/Zoom';
import { MapComponent } from '../map.component';
import * as i0 from "@angular/core";
export declare class DefaultControlComponent implements OnInit, OnDestroy {
    private map;
    attribution: boolean;
    attributionOptions: AttributionOptions;
    rotate: boolean;
    rotateOptions: RotateOptions;
    zoom: boolean;
    zoomOptions: ZoomOptions;
    instance: Collection<Control>;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DefaultControlComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DefaultControlComponent, "aol-control-defaults", never, { "attribution": { "alias": "attribution"; "required": false; }; "attributionOptions": { "alias": "attributionOptions"; "required": false; }; "rotate": { "alias": "rotate"; "required": false; }; "rotateOptions": { "alias": "rotateOptions"; "required": false; }; "zoom": { "alias": "zoom"; "required": false; }; "zoomOptions": { "alias": "zoomOptions"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=default.component.d.ts.map