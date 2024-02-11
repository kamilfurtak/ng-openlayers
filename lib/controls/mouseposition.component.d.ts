import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import MousePosition from 'ol/control/MousePosition';
import { MapComponent } from '../map.component';
import { CoordinateFormat } from 'ol/coordinate';
import { ProjectionLike } from 'ol/proj';
import * as i0 from "@angular/core";
export declare class ControlMousePositionComponent implements OnInit, OnDestroy {
    private map;
    private element;
    coordinateFormat: CoordinateFormat;
    projection: ProjectionLike;
    instance: MousePosition;
    target: HTMLElement;
    constructor(map: MapComponent, element: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ControlMousePositionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ControlMousePositionComponent, "aol-control-mouseposition", never, { "coordinateFormat": { "alias": "coordinateFormat"; "required": false; }; "projection": { "alias": "projection"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=mouseposition.component.d.ts.map