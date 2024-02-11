import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Attribution } from 'ol/control';
import { MapComponent } from '../map.component';
import * as i0 from "@angular/core";
export declare class ControlAttributionComponent implements OnInit, OnDestroy {
    private map;
    private element;
    collapsible: boolean;
    componentType: string;
    instance: Attribution;
    target: HTMLElement;
    constructor(map: MapComponent, element: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ControlAttributionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ControlAttributionComponent, "aol-control-attribution", never, { "collapsible": { "alias": "collapsible"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=attribution.component.d.ts.map