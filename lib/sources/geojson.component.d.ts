import { OnInit } from '@angular/core';
import { LayerVectorComponent } from '../layers/layervector.component';
import { SourceComponent } from './source.component';
import FeatureFormat from 'ol/format/Feature';
import { Vector } from 'ol/source';
import { ProjectionLike } from 'ol/proj';
import * as i0 from "@angular/core";
export declare class SourceGeoJSONComponent extends SourceComponent implements OnInit {
    defaultDataProjection: ProjectionLike;
    featureProjection: ProjectionLike;
    geometryName: string;
    url: string;
    instance: Vector;
    format: FeatureFormat;
    constructor(layer: LayerVectorComponent);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SourceGeoJSONComponent, [{ host: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SourceGeoJSONComponent, "aol-source-geojson", never, { "defaultDataProjection": { "alias": "defaultDataProjection"; "required": false; }; "featureProjection": { "alias": "featureProjection"; "required": false; }; "geometryName": { "alias": "geometryName"; "required": false; }; "url": { "alias": "url"; "required": false; }; }, {}, never, ["*"], false, never>;
}
//# sourceMappingURL=geojson.component.d.ts.map