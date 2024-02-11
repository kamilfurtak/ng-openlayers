import { OnInit } from '@angular/core';
import { FeatureComponent } from '../feature.component';
import { MapComponent } from '../map.component';
import SimpleGeometry from 'ol/geom/SimpleGeometry';
import * as i0 from "@angular/core";
export declare abstract class SimpleGeometryComponent implements OnInit {
    protected map: MapComponent;
    protected host: FeatureComponent;
    srid: string;
    instance: SimpleGeometry;
    componentType: string;
    protected constructor(map: MapComponent, host: FeatureComponent);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SimpleGeometryComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SimpleGeometryComponent, never, never, { "srid": { "alias": "srid"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=simplegeometry.component.d.ts.map