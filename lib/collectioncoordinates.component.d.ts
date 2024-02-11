import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MapComponent } from './map.component';
import { GeometryLinestringComponent } from './geom/geometrylinestring.component';
import { GeometryPolygonComponent } from './geom/geometrypolygon.component';
import { GeometryMultiPointComponent } from './geom/geometrymultipoint.component';
import { GeometryMultiLinestringComponent } from './geom/geometrymultilinestring.component';
import { GeometryMultiPolygonComponent } from './geom/geometrymultipolygon.component';
import { Coordinate } from 'ol/coordinate';
import * as i0 from "@angular/core";
export declare class CollectionCoordinatesComponent implements OnChanges, OnInit {
    private map;
    coordinates: Coordinate[] | Coordinate[][] | Coordinate[][][];
    srid: string;
    private host;
    private mapSrid;
    constructor(map: MapComponent, geometryLinestring: GeometryLinestringComponent, geometryPolygon: GeometryPolygonComponent, geometryMultipoint: GeometryMultiPointComponent, geometryMultilinestring: GeometryMultiLinestringComponent, geometryMultipolygon: GeometryMultiPolygonComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private onMapViewChanged;
    private transformCoordinates;
    static ɵfac: i0.ɵɵFactoryDeclaration<CollectionCoordinatesComponent, [null, { optional: true; }, { optional: true; }, { optional: true; }, { optional: true; }, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CollectionCoordinatesComponent, "aol-collection-coordinates", never, { "coordinates": { "alias": "coordinates"; "required": false; }; "srid": { "alias": "srid"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=collectioncoordinates.component.d.ts.map