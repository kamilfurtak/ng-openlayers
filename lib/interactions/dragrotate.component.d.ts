import { OnDestroy, OnInit } from '@angular/core';
import { DragRotate } from 'ol/interaction';
import { MapComponent } from '../map.component';
import { Condition } from 'ol/events/condition';
import * as i0 from "@angular/core";
export declare class DragRotateInteractionComponent implements OnInit, OnDestroy {
    private map;
    condition: Condition;
    duration: number;
    instance: DragRotate;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DragRotateInteractionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DragRotateInteractionComponent, "aol-interaction-dragrotate", never, { "condition": { "alias": "condition"; "required": false; }; "duration": { "alias": "duration"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=dragrotate.component.d.ts.map