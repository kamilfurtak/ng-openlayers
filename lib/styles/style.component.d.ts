import { OnInit } from '@angular/core';
import { Fill, Image, Stroke, Style, Text } from 'ol/style';
import { Geometry } from 'ol/geom';
import { FeatureComponent } from '../feature.component';
import { LayerVectorComponent } from '../layers/layervector.component';
import { GeometryFunction } from 'ol/style/Style';
import * as i0 from "@angular/core";
export declare class StyleComponent implements OnInit {
    geometry: string | Geometry | GeometryFunction;
    fill: Fill;
    image: Image;
    stroke: Stroke;
    text: Text;
    zIndex: number;
    instance: Style;
    componentType: string;
    private readonly host;
    constructor(featureHost: FeatureComponent, layerHost: LayerVectorComponent);
    update(): void;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StyleComponent, [{ optional: true; }, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StyleComponent, "aol-style", never, { "geometry": { "alias": "geometry"; "required": false; }; "fill": { "alias": "fill"; "required": false; }; "image": { "alias": "image"; "required": false; }; "stroke": { "alias": "stroke"; "required": false; }; "text": { "alias": "text"; "required": false; }; "zIndex": { "alias": "zIndex"; "required": false; }; }, {}, never, ["*"], false, never>;
}
//# sourceMappingURL=style.component.d.ts.map