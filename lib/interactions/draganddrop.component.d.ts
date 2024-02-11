import { OnDestroy, OnInit } from '@angular/core';
import { DragAndDrop } from 'ol/interaction';
import FeatureFormat from 'ol/format/Feature';
import { MapComponent } from '../map.component';
import { ProjectionLike } from 'ol/proj';
import * as i0 from "@angular/core";
export declare class DragAndDropInteractionComponent implements OnInit, OnDestroy {
    private map;
    formatConstructors: FeatureFormat[];
    projection: ProjectionLike;
    target: HTMLElement;
    instance: DragAndDrop;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DragAndDropInteractionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DragAndDropInteractionComponent, "aol-interaction-draganddrop", never, { "formatConstructors": { "alias": "formatConstructors"; "required": false; }; "projection": { "alias": "projection"; "required": false; }; "target": { "alias": "target"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=draganddrop.component.d.ts.map