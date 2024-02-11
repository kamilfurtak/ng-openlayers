import { OnDestroy, OnInit } from '@angular/core';
import { ZoomToExtent } from 'ol/control';
import { MapComponent } from '../map.component';
import { Extent } from 'ol/extent';
import * as i0 from "@angular/core";
export declare class ControlZoomToExtentComponent implements OnInit, OnDestroy {
    private map;
    className: string;
    label: string | HTMLElement;
    tipLabel: string;
    extent: Extent;
    instance: ZoomToExtent;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ControlZoomToExtentComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ControlZoomToExtentComponent, "aol-control-zoomtoextent", never, { "className": { "alias": "className"; "required": false; }; "label": { "alias": "label"; "required": false; }; "tipLabel": { "alias": "tipLabel"; "required": false; }; "extent": { "alias": "extent"; "required": false; }; }, {}, never, ["*"], false, never>;
}
//# sourceMappingURL=zoomtoextent.component.d.ts.map