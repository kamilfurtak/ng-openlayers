import { OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Icon } from 'ol/style';
import { StyleComponent } from './style.component';
import { IconAnchorUnits, IconOrigin } from 'ol/style/Icon';
import * as i0 from "@angular/core";
export declare class StyleIconComponent implements OnInit, OnChanges {
    private host;
    anchor: [number, number];
    anchorXUnits: IconAnchorUnits;
    anchorYUnits: IconAnchorUnits;
    anchorOrigin: IconOrigin;
    color: [number, number, number, number];
    crossOrigin: IconOrigin;
    img: HTMLCanvasElement | HTMLImageElement;
    offset: [number, number];
    offsetOrigin: IconOrigin;
    opacity: number;
    scale: number;
    snapToPixel: boolean;
    rotateWithView: boolean;
    rotation: number;
    size: [number, number];
    imgSize: [number, number];
    src: string;
    instance: Icon;
    constructor(host: StyleComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StyleIconComponent, [{ host: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StyleIconComponent, "aol-style-icon", never, { "anchor": { "alias": "anchor"; "required": false; }; "anchorXUnits": { "alias": "anchorXUnits"; "required": false; }; "anchorYUnits": { "alias": "anchorYUnits"; "required": false; }; "anchorOrigin": { "alias": "anchorOrigin"; "required": false; }; "color": { "alias": "color"; "required": false; }; "crossOrigin": { "alias": "crossOrigin"; "required": false; }; "img": { "alias": "img"; "required": false; }; "offset": { "alias": "offset"; "required": false; }; "offsetOrigin": { "alias": "offsetOrigin"; "required": false; }; "opacity": { "alias": "opacity"; "required": false; }; "scale": { "alias": "scale"; "required": false; }; "snapToPixel": { "alias": "snapToPixel"; "required": false; }; "rotateWithView": { "alias": "rotateWithView"; "required": false; }; "rotation": { "alias": "rotation"; "required": false; }; "size": { "alias": "size"; "required": false; }; "imgSize": { "alias": "imgSize"; "required": false; }; "src": { "alias": "src"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=icon.component.d.ts.map