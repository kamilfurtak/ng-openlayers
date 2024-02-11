import { OnDestroy, OnInit, EventEmitter } from '@angular/core';
import { MapComponent } from '../map.component';
import { Modify } from 'ol/interaction';
import { Collection, Feature } from 'ol';
import { Style } from 'ol/style';
import { Vector } from 'ol/source';
import { ModifyEvent } from 'ol/interaction/Modify';
import { StyleFunction } from 'ol/style/Style';
import { Condition } from 'ol/events/condition';
import { ObjectEvent } from 'ol/Object';
import { DrawEvent } from 'ol/interaction/Draw';
import BaseEvent from 'ol/events/Event';
import * as i0 from "@angular/core";
export declare class ModifyInteractionComponent implements OnInit, OnDestroy {
    private map;
    condition?: Condition;
    deleteCondition?: Condition;
    pixelTolerance?: number;
    style?: Style | Style[] | StyleFunction;
    features: Collection<Feature>;
    wrapX?: boolean;
    source?: Vector;
    olChange: EventEmitter<DrawEvent>;
    olChangeActive: EventEmitter<ObjectEvent>;
    olError: EventEmitter<BaseEvent>;
    olModifyEnd: EventEmitter<ModifyEvent>;
    olModifyStart: EventEmitter<ModifyEvent>;
    propertyChange: EventEmitter<ObjectEvent>;
    instance: Modify;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModifyInteractionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ModifyInteractionComponent, "aol-interaction-modify", never, { "condition": { "alias": "condition"; "required": false; }; "deleteCondition": { "alias": "deleteCondition"; "required": false; }; "pixelTolerance": { "alias": "pixelTolerance"; "required": false; }; "style": { "alias": "style"; "required": false; }; "features": { "alias": "features"; "required": false; }; "wrapX": { "alias": "wrapX"; "required": false; }; "source": { "alias": "source"; "required": false; }; }, { "olChange": "olChange"; "olChangeActive": "olChangeActive"; "olError": "olError"; "olModifyEnd": "olModifyEnd"; "olModifyStart": "olModifyStart"; "propertyChange": "propertyChange"; }, never, never, false, never>;
}
//# sourceMappingURL=modify.component.d.ts.map