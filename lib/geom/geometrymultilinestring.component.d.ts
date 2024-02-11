import { OnInit } from '@angular/core';
import { FeatureComponent } from '../feature.component';
import { SimpleGeometryComponent } from './simplegeometry.component';
import { MapComponent } from '../map.component';
import { MultiLineString } from 'ol/geom';
import * as i0 from "@angular/core";
export declare class GeometryMultiLinestringComponent extends SimpleGeometryComponent implements OnInit {
    componentType: string;
    instance: MultiLineString;
    constructor(map: MapComponent, host: FeatureComponent);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GeometryMultiLinestringComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GeometryMultiLinestringComponent, "aol-geometry-multilinestring", never, {}, {}, never, ["*"], false, never>;
}
//# sourceMappingURL=geometrymultilinestring.component.d.ts.map