import { OnDestroy, OnInit } from '@angular/core';
import { DragBox } from 'ol/interaction';
import { MapComponent } from '../map.component';
import { Condition } from 'ol/events/condition';
import { EndCondition } from 'ol/interaction/DragBox';
import * as i0 from "@angular/core";
export declare class DragBoxInteractionComponent implements OnInit, OnDestroy {
    private map;
    className: string;
    condition: Condition;
    boxEndCondition: EndCondition;
    instance: DragBox;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DragBoxInteractionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DragBoxInteractionComponent, "aol-interaction-dragbox", never, { "className": { "alias": "className"; "required": false; }; "condition": { "alias": "condition"; "required": false; }; "boxEndCondition": { "alias": "boxEndCondition"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=dragbox.component.d.ts.map