import { OnDestroy, OnInit } from '@angular/core';
import { DragPan } from 'ol/interaction';
import Kinetic from 'ol/Kinetic';
import { MapComponent } from '../map.component';
import { Condition } from 'ol/events/condition';
import * as i0 from "@angular/core";
export declare class DragPanInteractionComponent implements OnInit, OnDestroy {
    private map;
    condition: Condition;
    kinetic: Kinetic;
    instance: DragPan;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DragPanInteractionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DragPanInteractionComponent, "aol-interaction-dragpan", never, { "condition": { "alias": "condition"; "required": false; }; "kinetic": { "alias": "kinetic"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=dragpan.component.d.ts.map