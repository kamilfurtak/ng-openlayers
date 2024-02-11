import { AfterContentInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { Stroke } from 'ol/style';
import { MapComponent } from './map.component';
import * as i0 from "@angular/core";
export declare class GraticuleComponent implements AfterContentInit, OnChanges, OnDestroy {
    private map;
    strokeStyle: Stroke;
    showLabels: boolean;
    lonLabelPosition: number;
    latLabelPosition: number;
    instance: any;
    componentType: string;
    constructor(map: MapComponent);
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GraticuleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GraticuleComponent, "aol-graticule", never, { "strokeStyle": { "alias": "strokeStyle"; "required": false; }; "showLabels": { "alias": "showLabels"; "required": false; }; "lonLabelPosition": { "alias": "lonLabelPosition"; "required": false; }; "latLabelPosition": { "alias": "latLabelPosition"; "required": false; }; }, {}, never, ["*"], false, never>;
}
//# sourceMappingURL=graticule.component.d.ts.map