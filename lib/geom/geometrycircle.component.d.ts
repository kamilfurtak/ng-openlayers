import { OnInit } from '@angular/core';
import { FeatureComponent } from '../feature.component';
import { Circle } from 'ol/geom';
import { SimpleGeometryComponent } from './simplegeometry.component';
import { MapComponent } from '../map.component';
import * as i0 from "@angular/core";
export declare class GeometryCircleComponent extends SimpleGeometryComponent implements OnInit {
    get radius(): number;
    set radius(radius: number);
    componentType: string;
    instance: Circle;
    constructor(map: MapComponent, host: FeatureComponent);
    static ɵfac: i0.ɵɵFactoryDeclaration<GeometryCircleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GeometryCircleComponent, "aol-geometry-circle", never, { "radius": { "alias": "radius"; "required": false; }; }, {}, never, ["*"], false, never>;
}
//# sourceMappingURL=geometrycircle.component.d.ts.map