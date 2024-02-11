import { Component, Input, Optional } from '@angular/core';
import { transform } from 'ol/proj';
import * as i0 from "@angular/core";
import * as i1 from "./map.component";
import * as i2 from "./geom/geometrylinestring.component";
import * as i3 from "./geom/geometrypolygon.component";
import * as i4 from "./geom/geometrymultipoint.component";
import * as i5 from "./geom/geometrymultilinestring.component";
import * as i6 from "./geom/geometrymultipolygon.component";
export class CollectionCoordinatesComponent {
    constructor(map, geometryLinestring, geometryPolygon, geometryMultipoint, geometryMultilinestring, geometryMultipolygon) {
        this.map = map;
        this.srid = 'EPSG:3857';
        this.mapSrid = 'EPSG:3857';
        if (!!geometryLinestring) {
            this.host = geometryLinestring;
        }
        else if (!!geometryPolygon) {
            this.host = geometryPolygon;
        }
        else if (!!geometryMultipoint) {
            this.host = geometryMultipoint;
        }
        else if (!!geometryMultilinestring) {
            this.host = geometryMultilinestring;
        }
        else if (!!geometryMultipolygon) {
            this.host = geometryMultipolygon;
        }
        else {
            throw new Error('aol-collection-coordinates must be a child of a geometry component');
        }
    }
    ngOnInit() {
        this.map.instance.on('change:view', (e) => this.onMapViewChanged(e));
        this.mapSrid = this.map.instance.getView().getProjection().getCode();
        this.transformCoordinates();
    }
    ngOnChanges(changes) {
        this.transformCoordinates();
    }
    onMapViewChanged(event) {
        this.mapSrid = event.target.get(event.key).getProjection().getCode();
        this.transformCoordinates();
    }
    transformCoordinates() {
        let transformedCoordinates;
        if (this.srid === this.mapSrid) {
            transformedCoordinates = this.coordinates;
        }
        else {
            switch (this.host.componentType) {
                case 'geometry-linestring':
                case 'geometry-multipoint':
                    transformedCoordinates = this.coordinates.map((c) => transform(c, this.srid, this.mapSrid));
                    break;
                case 'geometry-polygon':
                case 'geometry-multilinestring':
                    transformedCoordinates = this.coordinates.map((cc) => cc.map((c) => transform(c, this.srid, this.mapSrid)));
                    break;
                case 'geometry-multipolygon':
                    transformedCoordinates = this.coordinates.map((ccc) => ccc.map((cc) => cc.map((c) => transform(c, this.srid, this.mapSrid))));
                    break;
            }
        }
        this.host.instance.setCoordinates(transformedCoordinates);
    }
    static { this.ɵfac = function CollectionCoordinatesComponent_Factory(t) { return new (t || CollectionCoordinatesComponent)(i0.ɵɵdirectiveInject(i1.MapComponent), i0.ɵɵdirectiveInject(i2.GeometryLinestringComponent, 8), i0.ɵɵdirectiveInject(i3.GeometryPolygonComponent, 8), i0.ɵɵdirectiveInject(i4.GeometryMultiPointComponent, 8), i0.ɵɵdirectiveInject(i5.GeometryMultiLinestringComponent, 8), i0.ɵɵdirectiveInject(i6.GeometryMultiPolygonComponent, 8)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CollectionCoordinatesComponent, selectors: [["aol-collection-coordinates"]], inputs: { coordinates: "coordinates", srid: "srid" }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 0, consts: [[1, "aol-collection-coordinates"]], template: function CollectionCoordinatesComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "div", 0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CollectionCoordinatesComponent, [{
        type: Component,
        args: [{
                selector: 'aol-collection-coordinates',
                template: ` <div class="aol-collection-coordinates"></div> `,
            }]
    }], () => [{ type: i1.MapComponent }, { type: i2.GeometryLinestringComponent, decorators: [{
                type: Optional
            }] }, { type: i3.GeometryPolygonComponent, decorators: [{
                type: Optional
            }] }, { type: i4.GeometryMultiPointComponent, decorators: [{
                type: Optional
            }] }, { type: i5.GeometryMultiLinestringComponent, decorators: [{
                type: Optional
            }] }, { type: i6.GeometryMultiPolygonComponent, decorators: [{
                type: Optional
            }] }], { coordinates: [{
            type: Input
        }], srid: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CollectionCoordinatesComponent, { className: "CollectionCoordinatesComponent", filePath: "lib/collectioncoordinates.component.ts", lineNumber: 15 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdGlvbmNvb3JkaW5hdGVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpYnMvbmctb3BlbmxheWVycy9zcmMvbGliL2NvbGxlY3Rpb25jb29yZGluYXRlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLFFBQVEsRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFRN0YsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7Ozs7Ozs7QUFNcEMsTUFBTSxPQUFPLDhCQUE4QjtJQVN6QyxZQUNVLEdBQWlCLEVBQ2Isa0JBQStDLEVBQy9DLGVBQXlDLEVBQ3pDLGtCQUErQyxFQUMvQyx1QkFBeUQsRUFDekQsb0JBQW1EO1FBTHZELFFBQUcsR0FBSCxHQUFHLENBQWM7UUFOM0IsU0FBSSxHQUFHLFdBQVcsQ0FBQztRQUdYLFlBQU8sR0FBRyxXQUFXLENBQUM7UUFVNUIsSUFBSSxDQUFDLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLGtCQUFrQixDQUFDO1FBQ2pDLENBQUM7YUFBTSxJQUFJLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUM3QixJQUFJLENBQUMsSUFBSSxHQUFHLGVBQWUsQ0FBQztRQUM5QixDQUFDO2FBQU0sSUFBSSxDQUFDLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUNoQyxJQUFJLENBQUMsSUFBSSxHQUFHLGtCQUFrQixDQUFDO1FBQ2pDLENBQUM7YUFBTSxJQUFJLENBQUMsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxJQUFJLEdBQUcsdUJBQXVCLENBQUM7UUFDdEMsQ0FBQzthQUFNLElBQUksQ0FBQyxDQUFDLG9CQUFvQixFQUFFLENBQUM7WUFDbEMsSUFBSSxDQUFDLElBQUksR0FBRyxvQkFBb0IsQ0FBQztRQUNuQyxD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WCxXQUFXO2tCQURWLEtBQUs7WUFHTixJQUFJO2tCQURILEtBQUs7O2tGQUhLLDhCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPcHRpb25hbCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi9tYXAuY29tcG9uZW50JztcbmltcG9ydCB7IEdlb21ldHJ5TGluZXN0cmluZ0NvbXBvbmVudCB9IGZyb20gJy4vZ2VvbS9nZW9tZXRyeWxpbmVzdHJpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IEdlb21ldHJ5UG9seWdvbkNvbXBvbmVudCB9IGZyb20gJy4vZ2VvbS9nZW9tZXRyeXBvbHlnb24uY29tcG9uZW50JztcbmltcG9ydCB7IEdlb21ldHJ5TXVsdGlQb2ludENvbXBvbmVudCB9IGZyb20gJy4vZ2VvbS9nZW9tZXRyeW11bHRpcG9pbnQuY29tcG9uZW50JztcbmltcG9ydCB7IEdlb21ldHJ5TXVsdGlMaW5lc3RyaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9nZW9tL2dlb21ldHJ5bXVsdGlsaW5lc3RyaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHZW9tZXRyeU11bHRpUG9seWdvbkNvbXBvbmVudCB9IGZyb20gJy4vZ2VvbS9nZW9tZXRyeW11bHRpcG9seWdvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29vcmRpbmF0ZSB9IGZyb20gJ29sL2Nvb3JkaW5hdGUnO1xuaW1wb3J0IHsgdHJhbnNmb3JtIH0gZnJvbSAnb2wvcHJvaic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1jb2xsZWN0aW9uLWNvb3JkaW5hdGVzJyxcbiAgdGVtcGxhdGU6IGAgPGRpdiBjbGFzcz1cImFvbC1jb2xsZWN0aW9uLWNvb3JkaW5hdGVzXCI+PC9kaXY+IGAsXG59KVxuZXhwb3J0IGNsYXNzIENvbGxlY3Rpb25Db29yZGluYXRlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcbiAgQElucHV0KClcbiAgY29vcmRpbmF0ZXM6IENvb3JkaW5hdGVbXSB8IENvb3JkaW5hdGVbXVtdIHwgQ29vcmRpbmF0ZVtdW11bXTtcbiAgQElucHV0KClcbiAgc3JpZCA9ICdFUFNHOjM4NTcnO1xuXG4gIHByaXZhdGUgaG9zdDogYW55O1xuICBwcml2YXRlIG1hcFNyaWQgPSAnRVBTRzozODU3JztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50LFxuICAgIEBPcHRpb25hbCgpIGdlb21ldHJ5TGluZXN0cmluZzogR2VvbWV0cnlMaW5lc3RyaW5nQ29tcG9uZW50LFxuICAgIEBPcHRpb25hbCgpIGdlb21ldHJ5UG9seWdvbjogR2VvbWV0cnlQb2x5Z29uQ29tcG9uZW50LFxuICAgIEBPcHRpb25hbCgpIGdlb21ldHJ5TXVsdGlwb2ludDogR2VvbWV0cnlNdWx0aVBvaW50Q29tcG9uZW50LFxuICAgIEBPcHRpb25hbCgpIGdlb21ldHJ5TXVsdGlsaW5lc3RyaW5nOiBHZW9tZXRyeU11bHRpTGluZXN0cmluZ0NvbXBvbmVudCxcbiAgICBAT3B0aW9uYWwoKSBnZW9tZXRyeU11bHRpcG9seWdvbjogR2VvbWV0cnlNdWx0aVBvbHlnb25Db21wb25lbnRcbiAgKSB7XG4gICAgaWYgKCEhZ2VvbWV0cnlMaW5lc3RyaW5nKSB7XG4gICAgICB0aGlzLmhvc3QgPSBnZW9tZXRyeUxpbmVzdHJpbmc7XG4gICAgfSBlbHNlIGlmICghIWdlb21ldHJ5UG9seWdvbikge1xuICAgICAgdGhpcy5ob3N0ID0gZ2VvbWV0cnlQb2x5Z29uO1xuICAgIH0gZWxzZSBpZiAoISFnZW9tZXRyeU11bHRpcG9pbnQpIHtcbiAgICAgIHRoaXMuaG9zdCA9IGdlb21ldHJ5TXVsdGlwb2ludDtcbiAgICB9IGVsc2UgaWYgKCEhZ2VvbWV0cnlNdWx0aWxpbmVzdHJpbmcpIHtcbiAgICAgIHRoaXMuaG9zdCA9IGdlb21ldHJ5TXVsdGlsaW5lc3RyaW5nO1xuICAgIH0gZWxzZSBpZiAoISFnZW9tZXRyeU11bHRpcG9seWdvbikge1xuICAgICAgdGhpcy5ob3N0ID0gZ2VvbWV0cnlNdWx0aXBvbHlnb247XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYW9sLWNvbGxlY3Rpb24tY29vcmRpbmF0ZXMgbXVzdCBiZSBhIGNoaWxkIG9mIGEgZ2VvbWV0cnkgY29tcG9uZW50Jyk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5tYXAuaW5zdGFuY2Uub24oJ2NoYW5nZTp2aWV3JywgKGUpID0+IHRoaXMub25NYXBWaWV3Q2hhbmdlZChlKSk7XG4gICAgdGhpcy5tYXBTcmlkID0gdGhpcy5tYXAuaW5zdGFuY2UuZ2V0VmlldygpLmdldFByb2plY3Rpb24oKS5nZXRDb2RlKCk7XG4gICAgdGhpcy50cmFuc2Zvcm1Db29yZGluYXRlcygpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIHRoaXMudHJhbnNmb3JtQ29vcmRpbmF0ZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgb25NYXBWaWV3Q2hhbmdlZChldmVudCkge1xuICAgIHRoaXMubWFwU3JpZCA9IGV2ZW50LnRhcmdldC5nZXQoZXZlbnQua2V5KS5nZXRQcm9qZWN0aW9uKCkuZ2V0Q29kZSgpO1xuICAgIHRoaXMudHJhbnNmb3JtQ29vcmRpbmF0ZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgdHJhbnNmb3JtQ29vcmRpbmF0ZXMoKSB7XG4gICAgbGV0IHRyYW5zZm9ybWVkQ29vcmRpbmF0ZXM6IENvb3JkaW5hdGVbXSB8IENvb3JkaW5hdGVbXVtdIHwgQ29vcmRpbmF0ZVtdW11bXTtcblxuICAgIGlmICh0aGlzLnNyaWQgPT09IHRoaXMubWFwU3JpZCkge1xuICAgICAgdHJhbnNmb3JtZWRDb29yZGluYXRlcyA9IHRoaXMuY29vcmRpbmF0ZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXRjaCAodGhpcy5ob3N0LmNvbXBvbmVudFR5cGUpIHtcbiAgICAgICAgY2FzZSAnZ2VvbWV0cnktbGluZXN0cmluZyc6XG4gICAgICAgIGNhc2UgJ2dlb21ldHJ5LW11bHRpcG9pbnQnOlxuICAgICAgICAgIHRyYW5zZm9ybWVkQ29vcmRpbmF0ZXMgPSAodGhpcy5jb29yZGluYXRlcyBhcyBDb29yZGluYXRlW10pLm1hcCgoYykgPT4gdHJhbnNmb3JtKGMsIHRoaXMuc3JpZCwgdGhpcy5tYXBTcmlkKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2dlb21ldHJ5LXBvbHlnb24nOlxuICAgICAgICBjYXNlICdnZW9tZXRyeS1tdWx0aWxpbmVzdHJpbmcnOlxuICAgICAgICAgIHRyYW5zZm9ybWVkQ29vcmRpbmF0ZXMgPSAodGhpcy5jb29yZGluYXRlcyBhcyBDb29yZGluYXRlW11bXSkubWFwKChjYykgPT5cbiAgICAgICAgICAgIGNjLm1hcCgoYykgPT4gdHJhbnNmb3JtKGMsIHRoaXMuc3JpZCwgdGhpcy5tYXBTcmlkKSlcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdnZW9tZXRyeS1tdWx0aXBvbHlnb24nOlxuICAgICAgICAgIHRyYW5zZm9ybWVkQ29vcmRpbmF0ZXMgPSAodGhpcy5jb29yZGluYXRlcyBhcyBDb29yZGluYXRlW11bXVtdKS5tYXAoKGNjYykgPT5cbiAgICAgICAgICAgIGNjYy5tYXAoKGNjKSA9PiBjYy5tYXAoKGMpID0+IHRyYW5zZm9ybShjLCB0aGlzLnNyaWQsIHRoaXMubWFwU3JpZCkpKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldENvb3JkaW5hdGVzKHRyYW5zZm9ybWVkQ29vcmRpbmF0ZXMpO1xuICB9XG59XG4iXX0=