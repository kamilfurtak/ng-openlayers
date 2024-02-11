import { OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { MapComponent } from './map.component';
import { GeometryPointComponent } from './geom/geometrypoint.component';
import { GeometryCircleComponent } from './geom/geometrycircle.component';
import { ViewComponent } from './view.component';
import { OverlayComponent } from './overlay.component';
import * as i0 from "@angular/core";
export declare class CoordinateComponent implements OnChanges, OnInit {
    private map;
    x: number;
    y: number;
    srid: string;
    private host;
    private mapSrid;
    constructor(map: MapComponent, viewHost: ViewComponent, geometryPointHost: GeometryPointComponent, geometryCircleHost: GeometryCircleComponent, overlayHost: OverlayComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private onMapViewChanged;
    private transformCoordinates;
    static ɵfac: i0.ɵɵFactoryDeclaration<CoordinateComponent, [null, { optional: true; }, { optional: true; }, { optional: true; }, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CoordinateComponent, "aol-coordinate", never, { "x": { "alias": "x"; "required": false; }; "y": { "alias": "y"; "required": false; }; "srid": { "alias": "srid"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=coordinate.component.d.ts.map