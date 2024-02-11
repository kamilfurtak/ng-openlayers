import { OnInit } from '@angular/core';
import { FeatureComponent } from '../feature.component';
import { SimpleGeometryComponent } from './simplegeometry.component';
import { MapComponent } from '../map.component';
import { MultiPoint } from 'ol/geom';
import * as i0 from "@angular/core";
export declare class GeometryMultiPointComponent extends SimpleGeometryComponent implements OnInit {
    componentType: string;
    instance: MultiPoint;
    constructor(map: MapComponent, host: FeatureComponent);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GeometryMultiPointComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GeometryMultiPointComponent, "aol-geometry-multipoint", never, {}, {}, never, ["*"], false, never>;
}
//# sourceMappingURL=geometrymultipoint.component.d.ts.map