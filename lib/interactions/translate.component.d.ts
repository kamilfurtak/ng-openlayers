import { OnDestroy, OnInit, EventEmitter } from '@angular/core';
import { Translate } from 'ol/interaction';
import { Collection, Feature } from 'ol';
import { Layer } from 'ol/layer';
import { TranslateEvent } from 'ol/interaction/Translate';
import { MapComponent } from '../map.component';
import BaseEvent from 'ol/events/Event';
import { ObjectEvent } from 'ol/Object';
import * as i0 from "@angular/core";
export declare class TranslateInteractionComponent implements OnInit, OnDestroy {
    private map;
    features?: Collection<Feature>;
    layers?: Layer[] | ((layer: Layer) => boolean);
    hitTolerance?: number;
    olChange: EventEmitter<BaseEvent>;
    olChangeActive: EventEmitter<ObjectEvent>;
    olError: EventEmitter<BaseEvent>;
    propertyChange: EventEmitter<ObjectEvent>;
    translateEnd: EventEmitter<TranslateEvent>;
    translateStart: EventEmitter<TranslateEvent>;
    translating: EventEmitter<TranslateEvent>;
    instance: Translate;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TranslateInteractionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TranslateInteractionComponent, "aol-interaction-translate", never, { "features": { "alias": "features"; "required": false; }; "layers": { "alias": "layers"; "required": false; }; "hitTolerance": { "alias": "hitTolerance"; "required": false; }; }, { "olChange": "olChange"; "olChangeActive": "olChangeActive"; "olError": "olError"; "propertyChange": "propertyChange"; "translateEnd": "translateEnd"; "translateStart": "translateStart"; "translating": "translating"; }, never, never, false, never>;
}
//# sourceMappingURL=translate.component.d.ts.map