import { OnDestroy, OnInit } from '@angular/core';
import { ScaleLine } from 'ol/control';
import { MapComponent } from '../map.component';
import { Units } from 'ol/control/ScaleLine';
import * as i0 from "@angular/core";
export declare class ControlScaleLineComponent implements OnInit, OnDestroy {
    private map;
    units: Units;
    instance: ScaleLine;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ControlScaleLineComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ControlScaleLineComponent, "aol-control-scaleline", never, { "units": { "alias": "units"; "required": false; }; }, {}, never, ["*"], false, never>;
}
//# sourceMappingURL=scaleline.component.d.ts.map