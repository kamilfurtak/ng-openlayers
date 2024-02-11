import { OnDestroy, OnInit } from '@angular/core';
import { DragZoom } from 'ol/interaction';
import { MapComponent } from '../map.component';
import { Condition } from 'ol/events/condition';
import * as i0 from "@angular/core";
export declare class DragZoomInteractionComponent implements OnInit, OnDestroy {
    private map;
    className: string;
    condition: Condition;
    duration: number;
    out: boolean;
    instance: DragZoom;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DragZoomInteractionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DragZoomInteractionComponent, "aol-interaction-dragzoom", never, { "className": { "alias": "className"; "required": false; }; "condition": { "alias": "condition"; "required": false; }; "duration": { "alias": "duration"; "required": false; }; "out": { "alias": "out"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=dragzoom.component.d.ts.map