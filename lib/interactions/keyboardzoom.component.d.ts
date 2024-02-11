import { OnDestroy, OnInit } from '@angular/core';
import { KeyboardZoom } from 'ol/interaction';
import { MapComponent } from '../map.component';
import * as i0 from "@angular/core";
export declare class KeyboardZoomInteractionComponent implements OnInit, OnDestroy {
    private map;
    duration: number;
    delta: number;
    instance: KeyboardZoom;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<KeyboardZoomInteractionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<KeyboardZoomInteractionComponent, "aol-interaction-keyboardpan", never, { "duration": { "alias": "duration"; "required": false; }; "delta": { "alias": "delta"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=keyboardzoom.component.d.ts.map