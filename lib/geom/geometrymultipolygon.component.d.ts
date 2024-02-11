import { OnInit } from '@angular/core';
import { FeatureComponent } from '../feature.component';
import { SimpleGeometryComponent } from './simplegeometry.component';
import { MapComponent } from '../map.component';
import { MultiPolygon } from 'ol/geom';
import * as i0 from "@angular/core";
export declare class GeometryMultiPolygonComponent extends SimpleGeometryComponent implements OnInit {
    componentType: string;
    instance: MultiPolygon;
    constructor(map: MapComponent, host: FeatureComponent);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GeometryMultiPolygonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GeometryMultiPolygonComponent, "aol-geometry-multipolygon", never, {}, {}, never, ["*"], false, never>;
}
//# sourceMappingURL=geometrymultipolygon.component.d.ts.map