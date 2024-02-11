import { OnInit } from '@angular/core';
import { FeatureComponent } from '../feature.component';
import { SimpleGeometryComponent } from './simplegeometry.component';
import { MapComponent } from '../map.component';
import { Point } from 'ol/geom';
import * as i0 from "@angular/core";
export declare class GeometryPointComponent extends SimpleGeometryComponent implements OnInit {
    componentType: string;
    instance: Point;
    constructor(map: MapComponent, host: FeatureComponent);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GeometryPointComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GeometryPointComponent, "aol-geometry-point", never, {}, {}, never, ["*"], false, never>;
}
//# sourceMappingURL=geometrypoint.component.d.ts.map