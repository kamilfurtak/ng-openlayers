import { OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Fill } from 'ol/style';
import { StyleComponent } from './style.component';
import { StyleCircleComponent } from './circle.component';
import { StyleTextComponent } from './text.component';
import { Color } from 'ol/color';
import { ColorLike } from 'ol/colorlike';
import * as i0 from "@angular/core";
export declare class StyleFillComponent implements OnInit, OnChanges {
    color: Color | ColorLike;
    instance: Fill;
    private readonly host;
    constructor(styleHost: StyleComponent, styleCircleHost: StyleCircleComponent, styleTextHost: StyleTextComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StyleFillComponent, [{ optional: true; }, { optional: true; }, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StyleFillComponent, "aol-style-fill", never, { "color": { "alias": "color"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=fill.component.d.ts.map