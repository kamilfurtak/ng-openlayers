import { OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Text } from 'ol/style';
import { StyleComponent } from './style.component';
import * as i0 from "@angular/core";
export declare class StyleTextComponent implements OnInit, OnChanges {
    private host;
    font: string | undefined;
    offsetX: number | undefined;
    offsetY: number | undefined;
    scale: number | undefined;
    rotateWithView: boolean | undefined;
    rotation: number | undefined;
    text: string | undefined;
    textAlign: CanvasTextAlign | undefined;
    textBaseLine: string | undefined;
    instance: Text;
    componentType: string;
    constructor(host: StyleComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    update(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StyleTextComponent, [{ optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StyleTextComponent, "aol-style-text", never, { "font": { "alias": "font"; "required": false; }; "offsetX": { "alias": "offsetX"; "required": false; }; "offsetY": { "alias": "offsetY"; "required": false; }; "scale": { "alias": "scale"; "required": false; }; "rotateWithView": { "alias": "rotateWithView"; "required": false; }; "rotation": { "alias": "rotation"; "required": false; }; "text": { "alias": "text"; "required": false; }; "textAlign": { "alias": "textAlign"; "required": false; }; "textBaseLine": { "alias": "textBaseLine"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=text.component.d.ts.map