import { OnDestroy, OnInit } from '@angular/core';
import { PinchZoom } from 'ol/interaction';
import { MapComponent } from '../map.component';
import * as i0 from "@angular/core";
export declare class PinchZoomInteractionComponent implements OnInit, OnDestroy {
    private map;
    duration: number;
    constrainResolution: boolean;
    instance: PinchZoom;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PinchZoomInteractionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PinchZoomInteractionComponent, "aol-interaction-pinchzoom", never, { "duration": { "alias": "duration"; "required": false; }; "constrainResolution": { "alias": "constrainResolution"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=pinchzoom.component.d.ts.map