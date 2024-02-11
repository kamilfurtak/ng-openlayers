import { OnDestroy, OnInit } from '@angular/core';
import { KeyboardPan } from 'ol/interaction';
import { MapComponent } from '../map.component';
import * as i0 from "@angular/core";
export declare class KeyboardPanInteractionComponent implements OnInit, OnDestroy {
    private map;
    duration: number;
    pixelDelta: number;
    instance: KeyboardPan;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<KeyboardPanInteractionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<KeyboardPanInteractionComponent, "aol-interaction-keyboardpan", never, { "duration": { "alias": "duration"; "required": false; }; "pixelDelta": { "alias": "pixelDelta"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=keyboardpan.component.d.ts.map