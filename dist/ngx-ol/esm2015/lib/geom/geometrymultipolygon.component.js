import { Component } from '@angular/core';
import { FeatureComponent } from '../feature.component';
import { SimpleGeometryComponent } from './simplegeometry.component';
import { MapComponent } from '../map.component';
import { MultiPolygon } from 'ol/geom';
export class GeometryMultiPolygonComponent extends SimpleGeometryComponent {
    constructor(map, host) {
        super(map, host);
        this.componentType = 'geometry-multipolygon';
    }
    ngOnInit() {
        this.instance = new MultiPolygon([
            [
                [
                    [0, 0],
                    [1, 1],
                    [0, 1],
                ],
            ],
        ]);
        super.ngOnInit();
    }
}
GeometryMultiPolygonComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-geometry-multipolygon',
                template: ` <ng-content></ng-content> `
            },] }
];
GeometryMultiPolygonComponent.ctorParameters = () => [
    { type: MapComponent },
    { type: FeatureComponent }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvbWV0cnltdWx0aXBvbHlnb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hY2hpbWhhL1Byb2plY3RzL25neC1vbC9wcm9qZWN0cy9uZ3gtb2wvc3JjLyIsInNvdXJjZXMiOlsibGliL2dlb20vZ2VvbWV0cnltdWx0aXBvbHlnb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDckUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFNdkMsTUFBTSxPQUFPLDZCQUE4QixTQUFRLHVCQUF1QjtJQUl4RSxZQUFZLEdBQWlCLEVBQUUsSUFBc0I7UUFDbkQsS0FBSyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUpaLGtCQUFhLEdBQUcsdUJBQXVCLENBQUM7SUFLL0MsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksWUFBWSxDQUFDO1lBQy9CO2dCQUNFO29CQUNFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUNQO2FBQ0Y7U0FDRixDQUFDLENBQUM7UUFDSCxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7O1lBdkJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxRQUFRLEVBQUUsNkJBQTZCO2FBQ3hDOzs7WUFOUSxZQUFZO1lBRlosZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZlYXR1cmVDb21wb25lbnQgfSBmcm9tICcuLi9mZWF0dXJlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaW1wbGVHZW9tZXRyeUNvbXBvbmVudCB9IGZyb20gJy4vc2ltcGxlZ2VvbWV0cnkuY29tcG9uZW50JztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTXVsdGlQb2x5Z29uIH0gZnJvbSAnb2wvZ2VvbSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1nZW9tZXRyeS1tdWx0aXBvbHlnb24nLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG59KVxuZXhwb3J0IGNsYXNzIEdlb21ldHJ5TXVsdGlQb2x5Z29uQ29tcG9uZW50IGV4dGVuZHMgU2ltcGxlR2VvbWV0cnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgY29tcG9uZW50VHlwZSA9ICdnZW9tZXRyeS1tdWx0aXBvbHlnb24nO1xuICBwdWJsaWMgaW5zdGFuY2U6IE11bHRpUG9seWdvbjtcblxuICBjb25zdHJ1Y3RvcihtYXA6IE1hcENvbXBvbmVudCwgaG9zdDogRmVhdHVyZUNvbXBvbmVudCkge1xuICAgIHN1cGVyKG1hcCwgaG9zdCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IE11bHRpUG9seWdvbihbXG4gICAgICBbXG4gICAgICAgIFtcbiAgICAgICAgICBbMCwgMF0sXG4gICAgICAgICAgWzEsIDFdLFxuICAgICAgICAgIFswLCAxXSxcbiAgICAgICAgXSxcbiAgICAgIF0sXG4gICAgXSk7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcbiAgfVxufVxuIl19