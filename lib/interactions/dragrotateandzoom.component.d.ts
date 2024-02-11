import { OnDestroy, OnInit } from '@angular/core';
import { DragRotateAndZoom } from 'ol/interaction';
import { MapComponent } from '../map.component';
import { Condition } from 'ol/events/condition';
import * as i0 from "@angular/core";
export declare class DragRotateAndZoomInteractionComponent implements OnInit, OnDestroy {
    private map;
    condition: Condition;
    duration: number;
    instance: DragRotateAndZoom;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DragRotateAndZoomInteractionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DragRotateAndZoomInteractionComponent, "aol-interaction-dragrotateandzoom", never, { "condition": { "alias": "condition"; "required": false; }; "duration": { "alias": "duration"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=dragrotateandzoom.component.d.ts.map