import { OnDestroy, OnInit } from '@angular/core';
import { FullScreen } from 'ol/control';
import { MapComponent } from '../map.component';
import * as i0 from "@angular/core";
export declare class ControlFullScreenComponent implements OnInit, OnDestroy {
    private map;
    className: string;
    label: string;
    labelActive: string;
    tipLabel: string;
    keys: boolean;
    instance: FullScreen;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ControlFullScreenComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ControlFullScreenComponent, "aol-control-fullscreen", never, { "className": { "alias": "className"; "required": false; }; "label": { "alias": "label"; "required": false; }; "labelActive": { "alias": "labelActive"; "required": false; }; "tipLabel": { "alias": "tipLabel"; "required": false; }; "keys": { "alias": "keys"; "required": false; }; }, {}, never, ["*"], false, never>;
}
//# sourceMappingURL=fullscreen.component.d.ts.map