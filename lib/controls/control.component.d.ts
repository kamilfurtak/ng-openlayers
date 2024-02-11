import { OnDestroy, OnInit } from '@angular/core';
import { Control } from 'ol/control';
import { MapComponent } from '../map.component';
import { ContentComponent } from '../content.component';
import * as i0 from "@angular/core";
export declare class ControlComponent implements OnInit, OnDestroy {
    private map;
    content: ContentComponent;
    componentType: string;
    instance: Control;
    element: HTMLElement;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ControlComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ControlComponent, "aol-control", never, {}, {}, ["content"], ["*"], false, never>;
}
//# sourceMappingURL=control.component.d.ts.map