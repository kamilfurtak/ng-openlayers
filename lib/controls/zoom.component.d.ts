import { OnDestroy, OnInit } from '@angular/core';
import { Zoom } from 'ol/control';
import { MapComponent } from '../map.component';
import * as i0 from "@angular/core";
export declare class ControlZoomComponent implements OnInit, OnDestroy {
    private map;
    duration: number;
    zoomInLabel: string | HTMLElement;
    zoomOutLabel: string | HTMLElement;
    zoomInTipLabel: string;
    zoomOutTipLabel: string;
    delta: number;
    instance: Zoom;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ControlZoomComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ControlZoomComponent, "aol-control-zoom", never, { "duration": { "alias": "duration"; "required": false; }; "zoomInLabel": { "alias": "zoomInLabel"; "required": false; }; "zoomOutLabel": { "alias": "zoomOutLabel"; "required": false; }; "zoomInTipLabel": { "alias": "zoomInTipLabel"; "required": false; }; "zoomOutTipLabel": { "alias": "zoomOutTipLabel"; "required": false; }; "delta": { "alias": "delta"; "required": false; }; }, {}, never, ["*"], false, never>;
}
//# sourceMappingURL=zoom.component.d.ts.map