import { OnDestroy, OnInit, EventEmitter } from '@angular/core';
import { MapComponent } from '../map.component';
import { Select } from 'ol/interaction';
import { Layer } from 'ol/layer';
import { Style } from 'ol/style';
import { Collection, Feature } from 'ol';
import { SelectEvent, FilterFunction } from 'ol/interaction/Select';
import { StyleFunction } from 'ol/style/Style';
import { Condition } from 'ol/events/condition';
import { ObjectEvent } from 'ol/Object';
import BaseEvent from 'ol/events/Event';
import * as i0 from "@angular/core";
export declare class SelectInteractionComponent implements OnInit, OnDestroy {
    private map;
    addCondition?: Condition;
    condition?: Condition;
    layers?: Layer[] | ((layer: Layer) => boolean);
    style?: Style | Style[] | StyleFunction;
    removeCondition?: Condition;
    toggleCondition?: Condition;
    multi?: boolean;
    features?: Collection<Feature>;
    filter?: FilterFunction;
    wrapX?: boolean;
    olChange: EventEmitter<SelectEvent>;
    olChangeActive: EventEmitter<ObjectEvent>;
    olError: EventEmitter<BaseEvent>;
    propertyChange: EventEmitter<ObjectEvent>;
    olSelect: EventEmitter<SelectEvent>;
    instance: Select;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectInteractionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SelectInteractionComponent, "aol-interaction-select", never, { "addCondition": { "alias": "addCondition"; "required": false; }; "condition": { "alias": "condition"; "required": false; }; "layers": { "alias": "layers"; "required": false; }; "style": { "alias": "style"; "required": false; }; "removeCondition": { "alias": "removeCondition"; "required": false; }; "toggleCondition": { "alias": "toggleCondition"; "required": false; }; "multi": { "alias": "multi"; "required": false; }; "features": { "alias": "features"; "required": false; }; "filter": { "alias": "filter"; "required": false; }; "wrapX": { "alias": "wrapX"; "required": false; }; }, { "olChange": "olChange"; "olChangeActive": "olChangeActive"; "olError": "olError"; "propertyChange": "propertyChange"; "olSelect": "olSelect"; }, never, never, false, never>;
}
//# sourceMappingURL=select.component.d.ts.map