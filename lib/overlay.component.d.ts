import { OnDestroy, OnInit } from '@angular/core';
import { MapComponent } from './map.component';
import Overlay, { PanOptions, Positioning } from 'ol/Overlay';
import { ContentComponent } from './content.component';
import * as i0 from "@angular/core";
export declare class OverlayComponent implements OnInit, OnDestroy {
    private map;
    content: ContentComponent;
    id: number | string;
    offset: number[];
    positioning: Positioning;
    stopEvent: boolean;
    insertFirst: boolean;
    autoPan: boolean;
    autoPanAnimation: PanOptions;
    autoPanMargin: number;
    componentType: string;
    instance: Overlay;
    element: HTMLElement;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<OverlayComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OverlayComponent, "aol-overlay", never, { "id": { "alias": "id"; "required": false; }; "offset": { "alias": "offset"; "required": false; }; "positioning": { "alias": "positioning"; "required": false; }; "stopEvent": { "alias": "stopEvent"; "required": false; }; "insertFirst": { "alias": "insertFirst"; "required": false; }; "autoPan": { "alias": "autoPan"; "required": false; }; "autoPanAnimation": { "alias": "autoPanAnimation"; "required": false; }; "autoPanMargin": { "alias": "autoPanMargin"; "required": false; }; }, {}, ["content"], ["*"], false, never>;
}
//# sourceMappingURL=overlay.component.d.ts.map