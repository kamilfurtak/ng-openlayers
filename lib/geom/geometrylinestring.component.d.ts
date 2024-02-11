import { OnInit } from '@angular/core';
import { FeatureComponent } from '../feature.component';
import { SimpleGeometryComponent } from './simplegeometry.component';
import { MapComponent } from '../map.component';
import { LineString } from 'ol/geom';
import * as i0 from "@angular/core";
export declare class GeometryLinestringComponent extends SimpleGeometryComponent implements OnInit {
    componentType: string;
    instance: LineString;
    constructor(map: MapComponent, host: FeatureComponent);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GeometryLinestringComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GeometryLinestringComponent, "aol-geometry-linestring", never, {}, {}, never, ["*"], false, never>;
}
//# sourceMappingURL=geometrylinestring.component.d.ts.map