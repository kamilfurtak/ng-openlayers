import { OnDestroy, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import Event from 'ol/events/Event';
import { MapComponent } from '../map.component';
import { LayerGroupComponent } from './layergroup.component';
import { Extent } from 'ol/extent';
import * as i0 from "@angular/core";
export declare abstract class LayerComponent implements OnInit, OnChanges, OnDestroy {
    protected host: MapComponent | LayerGroupComponent;
    opacity: number;
    visible: boolean;
    extent: Extent;
    zIndex: number;
    minResolution: number;
    maxResolution: number;
    prerender: (evt: Event) => void;
    postrender: (evt: Event) => void;
    instance: any;
    componentType: string;
    protected constructor(host: MapComponent | LayerGroupComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LayerComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<LayerComponent, never, never, { "opacity": { "alias": "opacity"; "required": false; }; "visible": { "alias": "visible"; "required": false; }; "extent": { "alias": "extent"; "required": false; }; "zIndex": { "alias": "zIndex"; "required": false; }; "minResolution": { "alias": "minResolution"; "required": false; }; "maxResolution": { "alias": "maxResolution"; "required": false; }; "prerender": { "alias": "prerender"; "required": false; }; "postrender": { "alias": "postrender"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=layer.component.d.ts.map