import { OnDestroy, OnInit } from '@angular/core';
import { DoubleClickZoom } from 'ol/interaction';
import { MapComponent } from '../map.component';
import * as i0 from "@angular/core";
export declare class DoubleClickZoomInteractionComponent implements OnInit, OnDestroy {
    private map;
    duration: number;
    delta: number;
    instance: DoubleClickZoom;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DoubleClickZoomInteractionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DoubleClickZoomInteractionComponent, "aol-interaction-doubleclickzoom", never, { "duration": { "alias": "duration"; "required": false; }; "delta": { "alias": "delta"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=doubleclickzoom.component.d.ts.map