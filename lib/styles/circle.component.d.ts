import { AfterContentInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Circle, Fill, Stroke } from 'ol/style';
import { StyleComponent } from './style.component';
import * as i0 from "@angular/core";
export declare class StyleCircleComponent implements AfterContentInit, OnChanges, OnDestroy {
    private host;
    fill: Fill;
    radius: number;
    snapToPixel: boolean;
    stroke: Stroke;
    componentType: string;
    instance: Circle;
    constructor(host: StyleComponent);
    /**
     * WORK-AROUND: since the re-rendering is not triggered on style change
     * we trigger a radius change.
     * see openlayers #6233 and #5775
     */
    update(): void;
    ngAfterContentInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StyleCircleComponent, [{ host: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StyleCircleComponent, "aol-style-circle", never, { "fill": { "alias": "fill"; "required": false; }; "radius": { "alias": "radius"; "required": false; }; "snapToPixel": { "alias": "snapToPixel"; "required": false; }; "stroke": { "alias": "stroke"; "required": false; }; }, {}, never, ["*"], false, never>;
}
//# sourceMappingURL=circle.component.d.ts.map