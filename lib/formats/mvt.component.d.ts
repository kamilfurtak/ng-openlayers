import { FormatComponent } from './format.component';
import { MVT } from 'ol/format';
import { FeatureClass } from 'ol/Feature';
import * as i0 from "@angular/core";
export declare class FormatMVTComponent extends FormatComponent {
    featureClass: FeatureClass;
    geometryName: string;
    layerName: string;
    layers: string[];
    instance: MVT;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<FormatMVTComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormatMVTComponent, "aol-format-mvt", never, { "featureClass": { "alias": "featureClass"; "required": false; }; "geometryName": { "alias": "geometryName"; "required": false; }; "layerName": { "alias": "layerName"; "required": false; }; "layers": { "alias": "layers"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=mvt.component.d.ts.map