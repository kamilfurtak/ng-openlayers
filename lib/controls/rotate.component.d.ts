import { OnDestroy, OnInit } from '@angular/core';
import { Rotate } from 'ol/control';
import { MapComponent } from '../map.component';
import * as i0 from "@angular/core";
export declare class ControlRotateComponent implements OnInit, OnDestroy {
    private map;
    className: string;
    label: string;
    tipLabel: string;
    duration: number;
    autoHide: boolean;
    instance: Rotate;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ControlRotateComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ControlRotateComponent, "aol-control-rotate", never, { "className": { "alias": "className"; "required": false; }; "label": { "alias": "label"; "required": false; }; "tipLabel": { "alias": "tipLabel"; "required": false; }; "duration": { "alias": "duration"; "required": false; }; "autoHide": { "alias": "autoHide"; "required": false; }; }, {}, never, ["*"], false, never>;
}
//# sourceMappingURL=rotate.component.d.ts.map