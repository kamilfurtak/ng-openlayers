import { OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Stroke } from 'ol/style';
import { StyleComponent } from './style.component';
import { StyleCircleComponent } from './circle.component';
import { StyleTextComponent } from './text.component';
import { Color } from 'ol/color';
import { ColorLike } from 'ol/colorlike';
import * as i0 from "@angular/core";
export declare class StyleStrokeComponent implements OnInit, OnChanges {
    color: Color | ColorLike;
    lineCap: CanvasLineCap | undefined;
    lineDash: number[];
    lineJoin: CanvasLineJoin | undefined;
    miterLimit: number;
    width: number;
    instance: Stroke;
    private readonly host;
    constructor(styleHost: StyleComponent, styleCircleHost: StyleCircleComponent, styleTextHost: StyleTextComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StyleStrokeComponent, [{ optional: true; }, { optional: true; }, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StyleStrokeComponent, "aol-style-stroke", never, { "color": { "alias": "color"; "required": false; }; "lineCap": { "alias": "lineCap"; "required": false; }; "lineDash": { "alias": "lineDash"; "required": false; }; "lineJoin": { "alias": "lineJoin"; "required": false; }; "miterLimit": { "alias": "miterLimit"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=stroke.component.d.ts.map