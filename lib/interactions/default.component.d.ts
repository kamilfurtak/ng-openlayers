import { OnDestroy, OnInit } from '@angular/core';
import { Interaction } from 'ol/interaction';
import { Collection } from 'ol';
import { MapComponent } from '../map.component';
import * as i0 from "@angular/core";
export declare class DefaultInteractionComponent implements OnInit, OnDestroy {
    private map;
    altShiftDragRotate: boolean;
    onFocusOnly: boolean;
    doubleClickZoom: boolean;
    keyboard: boolean;
    mouseWheelZoom: boolean;
    shiftDragZoom: boolean;
    dragPan: boolean;
    pinchRotate: boolean;
    pinchZoom: boolean;
    zoomDelta: number;
    zoomDuration: number;
    instance: Collection<Interaction>;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DefaultInteractionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DefaultInteractionComponent, "aol-interaction-default", never, { "altShiftDragRotate": { "alias": "altShiftDragRotate"; "required": false; }; "onFocusOnly": { "alias": "onFocusOnly"; "required": false; }; "doubleClickZoom": { "alias": "doubleClickZoom"; "required": false; }; "keyboard": { "alias": "keyboard"; "required": false; }; "mouseWheelZoom": { "alias": "mouseWheelZoom"; "required": false; }; "shiftDragZoom": { "alias": "shiftDragZoom"; "required": false; }; "dragPan": { "alias": "dragPan"; "required": false; }; "pinchRotate": { "alias": "pinchRotate"; "required": false; }; "pinchZoom": { "alias": "pinchZoom"; "required": false; }; "zoomDelta": { "alias": "zoomDelta"; "required": false; }; "zoomDuration": { "alias": "zoomDuration"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=default.component.d.ts.map