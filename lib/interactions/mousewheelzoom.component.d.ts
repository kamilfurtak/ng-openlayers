import { OnDestroy, OnInit } from '@angular/core';
import { MouseWheelZoom } from 'ol/interaction';
import { MapComponent } from '../map.component';
import * as i0 from "@angular/core";
export declare class MouseWheelZoomInteractionComponent implements OnInit, OnDestroy {
    private map;
    duration: number;
    timeout: number;
    useAnchor: boolean;
    instance: MouseWheelZoom;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MouseWheelZoomInteractionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MouseWheelZoomInteractionComponent, "aol-interaction-mousewheelzoom", never, { "duration": { "alias": "duration"; "required": false; }; "timeout": { "alias": "timeout"; "required": false; }; "useAnchor": { "alias": "useAnchor"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=mousewheelzoom.component.d.ts.map