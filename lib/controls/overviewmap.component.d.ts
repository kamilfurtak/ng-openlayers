import { OnDestroy, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Layer } from 'ol/layer';
import { View } from 'ol';
import { OverviewMap } from 'ol/control';
import { MapComponent } from '../map.component';
import * as i0 from "@angular/core";
export declare class ControlOverviewMapComponent implements OnInit, OnChanges, OnDestroy {
    private map;
    collapsed: boolean;
    collapseLabel: string;
    collapsible: boolean;
    label: string;
    layers: Layer[];
    target: HTMLElement;
    tipLabel: string;
    view: View;
    instance: OverviewMap;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private reloadInstance;
    static ɵfac: i0.ɵɵFactoryDeclaration<ControlOverviewMapComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ControlOverviewMapComponent, "aol-control-overviewmap", never, { "collapsed": { "alias": "collapsed"; "required": false; }; "collapseLabel": { "alias": "collapseLabel"; "required": false; }; "collapsible": { "alias": "collapsible"; "required": false; }; "label": { "alias": "label"; "required": false; }; "layers": { "alias": "layers"; "required": false; }; "target": { "alias": "target"; "required": false; }; "tipLabel": { "alias": "tipLabel"; "required": false; }; "view": { "alias": "view"; "required": false; }; }, {}, never, ["*"], false, never>;
}
//# sourceMappingURL=overviewmap.component.d.ts.map