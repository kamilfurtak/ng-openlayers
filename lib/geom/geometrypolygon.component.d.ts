import { OnInit } from '@angular/core';
import { FeatureComponent } from '../feature.component';
import { SimpleGeometryComponent } from './simplegeometry.component';
import { MapComponent } from '../map.component';
import { Polygon } from 'ol/geom';
import * as i0 from "@angular/core";
export declare class GeometryPolygonComponent extends SimpleGeometryComponent implements OnInit {
    componentType: string;
    instance: Polygon;
    constructor(map: MapComponent, host: FeatureComponent);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GeometryPolygonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GeometryPolygonComponent, "aol-geometry-polygon", never, {}, {}, never, ["*"], false, never>;
}
//# sourceMappingURL=geometrypolygon.component.d.ts.map