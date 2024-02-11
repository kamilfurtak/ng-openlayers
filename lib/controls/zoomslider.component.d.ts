import { OnDestroy, OnInit } from '@angular/core';
import { ZoomSlider } from 'ol/control';
import { MapComponent } from '../map.component';
import * as i0 from "@angular/core";
export declare class ControlZoomSliderComponent implements OnInit, OnDestroy {
    private map;
    className: string;
    duration: number;
    maxResolution: number;
    minResolution: number;
    instance: ZoomSlider;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ControlZoomSliderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ControlZoomSliderComponent, "aol-control-zoomslider", never, { "className": { "alias": "className"; "required": false; }; "duration": { "alias": "duration"; "required": false; }; "maxResolution": { "alias": "maxResolution"; "required": false; }; "minResolution": { "alias": "minResolution"; "required": false; }; }, {}, never, ["*"], false, never>;
}
//# sourceMappingURL=zoomslider.component.d.ts.map