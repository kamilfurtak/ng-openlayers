import { Component, Optional, Input } from '@angular/core';
import { transform } from 'ol/proj';
import * as i0 from "@angular/core";
import * as i1 from "./map.component";
import * as i2 from "./view.component";
import * as i3 from "./geom/geometrypoint.component";
import * as i4 from "./geom/geometrycircle.component";
import * as i5 from "./overlay.component";
export class CoordinateComponent {
    constructor(map, viewHost, geometryPointHost, geometryCircleHost, overlayHost) {
        this.map = map;
        this.srid = 'EPSG:3857';
        this.mapSrid = 'EPSG:3857';
        // console.log('instancing aol-coordinate');
        if (geometryPointHost !== null) {
            this.host = geometryPointHost;
        }
        else if (geometryCircleHost !== null) {
            this.host = geometryCircleHost;
        }
        else if (viewHost !== null) {
            this.host = viewHost;
        }
        else if (overlayHost !== null) {
            this.host = overlayHost;
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
            transformedCoordinates = [this.x, this.y];
        }
        else {
            transformedCoordinates = transform([this.x, this.y], this.srid, this.mapSrid);
        }
        switch (this.host.componentType) {
            case 'geometry-point':
                this.host.instance.setCoordinates(transformedCoordinates);
                break;
            case 'geometry-circle':
            case 'view':
                this.host.instance.setCenter(transformedCoordinates);
                break;
            case 'overlay':
                this.host.instance.setPosition(transformedCoordinates);
                break;
        }
    }
    static { this.ɵfac = function CoordinateComponent_Factory(t) { return new (t || CoordinateComponent)(i0.ɵɵdirectiveInject(i1.MapComponent), i0.ɵɵdirectiveInject(i2.ViewComponent, 8), i0.ɵɵdirectiveInject(i3.GeometryPointComponent, 8), i0.ɵɵdirectiveInject(i4.GeometryCircleComponent, 8), i0.ɵɵdirectiveInject(i5.OverlayComponent, 8)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CoordinateComponent, selectors: [["aol-coordinate"]], inputs: { x: "x", y: "y", srid: "srid" }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 0, consts: [[1, "aol-coordinate"]], template: function CoordinateComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "div", 0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CoordinateComponent, [{
        type: Component,
        args: [{
                selector: 'aol-coordinate',
                template: ` <div class="aol-coordinate"></div> `,
            }]
    }], () => [{ type: i1.MapComponent }, { type: i2.ViewComponent, decorators: [{
                type: Optional
            }] }, { type: i3.GeometryPointComponent, decorators: [{
                type: Optional
            }] }, { type: i4.GeometryCircleComponent, decorators: [{
                type: Optional
            }] }, { type: i5.OverlayComponent, decorators: [{
                type: Optional
            }] }], { x: [{
            type: Input
        }], y: [{
            type: Input
        }], srid: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CoordinateComponent, { className: "CoordinateComponent", filePath: "lib/coordinate.component.ts", lineNumber: 13 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29vcmRpbmF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9saWJzL25nLW9wZW5sYXllcnMvc3JjL2xpYi9jb29yZGluYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBYSxLQUFLLEVBQXlCLE1BQU0sZUFBZSxDQUFDO0FBQzdGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxTQUFTLENBQUM7Ozs7Ozs7QUFXcEMsTUFBTSxPQUFPLG1CQUFtQjtJQVc5QixZQUNVLEdBQWlCLEVBQ2IsUUFBdUIsRUFDdkIsaUJBQXlDLEVBQ3pDLGtCQUEyQyxFQUMzQyxXQUE2QjtRQUpqQyxRQUFHLEdBQUgsR0FBRyxDQUFjO1FBTjNCLFNBQUksR0FBRyxXQUFXLENBQUM7UUFHWCxZQUFPLEdBQUcsV0FBVyxDQUFDO1FBUzVCLDRDQUE0QztRQUM1QyxJQUFJLGlCQUFpQixLQUFLLElBQUksRUFBRSxDQUFDO1lBQy9CLElBQUksQ0FBQyxJQUFJLEdBQUcsaUJBQWlCLENBQUM7UUFDaEMsQ0FBQzthQUFNLElBQUksa0JBQWtCLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDdkMsSUFBSSxDQUFDLElBQUksR0FBRyxrQkFBa0IsQ0FBQztRQUNqQyxDQUFDO2FBQU0sSUFBSSxRQUFRLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDN0IsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7UUFDdkIsQ0FBQzthQUFNLElBQUksV0FBVyxLQUFLLElBQUksRUFBRSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDO1FBQzFCLENBQUM7SUFDSCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDckUsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRU8sZ0JBQWdCLENBQUMsS0FBSztRQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNyRSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRU8sb0JBQW9CO1FBQzFCLElBQUksc0JBQWdDLENBQUM7UUFFckMsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUMvQixzQkFBc0IsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVDLENBQUM7YUFBTSxDQUFDO1lBQ04sc0JBQXNCLEdBQUcsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEYsQ0FBQztRQUVELFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNoQyxLQUFLLGdCQUFnQjtnQkFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLHNCQUFzQixDQUFDLENBQUM7Z0JBQzFELE1BQU07WUFDUixLQUFLLGlCQUFpQixDQUFDO1lBQ3ZCLEtBQUssTUFBTTtnQkFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsc0JBQXNCLENBQUMsQ0FBQztnQkFDckQsTUFBTTtZQUNSLEtBQUssU0FBUztnQkFDWixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsc0JBQXNCLENBQUMsQ0FBQztnQkFDdkQsTUFBTTtRQUNWLENBQUM7SUFDSCxDQUFDO29GQWxFVSxtQkFBbUI7b0VBQW5CLG1CQUFtQjtZQUZsQix5QkFBa0M7OztpRkFFbkMsbUJBQW1CO2NBSi9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUUsc0NBQXNDO2FBQ2pEOztzQkFjSSxRQUFROztzQkFDUixRQUFROztzQkFDUixRQUFROztzQkFDUixRQUFRO3FCQWRYLENBQUM7a0JBREEsS0FBSztZQUdOLENBQUM7a0JBREEsS0FBSztZQUdOLElBQUk7a0JBREgsS0FBSzs7a0ZBTEssbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPcHRpb25hbCwgT25DaGFuZ2VzLCBJbnB1dCwgU2ltcGxlQ2hhbmdlcywgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0cmFuc2Zvcm0gfSBmcm9tICdvbC9wcm9qJztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4vbWFwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHZW9tZXRyeVBvaW50Q29tcG9uZW50IH0gZnJvbSAnLi9nZW9tL2dlb21ldHJ5cG9pbnQuY29tcG9uZW50JztcbmltcG9ydCB7IEdlb21ldHJ5Q2lyY2xlQ29tcG9uZW50IH0gZnJvbSAnLi9nZW9tL2dlb21ldHJ5Y2lyY2xlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi92aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPdmVybGF5Q29tcG9uZW50IH0gZnJvbSAnLi9vdmVybGF5LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1jb29yZGluYXRlJyxcbiAgdGVtcGxhdGU6IGAgPGRpdiBjbGFzcz1cImFvbC1jb29yZGluYXRlXCI+PC9kaXY+IGAsXG59KVxuZXhwb3J0IGNsYXNzIENvb3JkaW5hdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIHg6IG51bWJlcjtcbiAgQElucHV0KClcbiAgeTogbnVtYmVyO1xuICBASW5wdXQoKVxuICBzcmlkID0gJ0VQU0c6Mzg1Nyc7XG5cbiAgcHJpdmF0ZSBob3N0OiBhbnk7XG4gIHByaXZhdGUgbWFwU3JpZCA9ICdFUFNHOjM4NTcnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQsXG4gICAgQE9wdGlvbmFsKCkgdmlld0hvc3Q6IFZpZXdDb21wb25lbnQsXG4gICAgQE9wdGlvbmFsKCkgZ2VvbWV0cnlQb2ludEhvc3Q6IEdlb21ldHJ5UG9pbnRDb21wb25lbnQsXG4gICAgQE9wdGlvbmFsKCkgZ2VvbWV0cnlDaXJjbGVIb3N0OiBHZW9tZXRyeUNpcmNsZUNvbXBvbmVudCxcbiAgICBAT3B0aW9uYWwoKSBvdmVybGF5SG9zdDogT3ZlcmxheUNvbXBvbmVudFxuICApIHtcbiAgICAvLyBjb25zb2xlLmxvZygnaW5zdGFuY2luZyBhb2wtY29vcmRpbmF0ZScpO1xuICAgIGlmIChnZW9tZXRyeVBvaW50SG9zdCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5ob3N0ID0gZ2VvbWV0cnlQb2ludEhvc3Q7XG4gICAgfSBlbHNlIGlmIChnZW9tZXRyeUNpcmNsZUhvc3QgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuaG9zdCA9IGdlb21ldHJ5Q2lyY2xlSG9zdDtcbiAgICB9IGVsc2UgaWYgKHZpZXdIb3N0ICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmhvc3QgPSB2aWV3SG9zdDtcbiAgICB9IGVsc2UgaWYgKG92ZXJsYXlIb3N0ICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmhvc3QgPSBvdmVybGF5SG9zdDtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5vbignY2hhbmdlOnZpZXcnLCAoZSkgPT4gdGhpcy5vbk1hcFZpZXdDaGFuZ2VkKGUpKTtcbiAgICB0aGlzLm1hcFNyaWQgPSB0aGlzLm1hcC5pbnN0YW5jZS5nZXRWaWV3KCkuZ2V0UHJvamVjdGlvbigpLmdldENvZGUoKTtcbiAgICB0aGlzLnRyYW5zZm9ybUNvb3JkaW5hdGVzKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgdGhpcy50cmFuc2Zvcm1Db29yZGluYXRlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBvbk1hcFZpZXdDaGFuZ2VkKGV2ZW50KSB7XG4gICAgdGhpcy5tYXBTcmlkID0gZXZlbnQudGFyZ2V0LmdldChldmVudC5rZXkpLmdldFByb2plY3Rpb24oKS5nZXRDb2RlKCk7XG4gICAgdGhpcy50cmFuc2Zvcm1Db29yZGluYXRlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSB0cmFuc2Zvcm1Db29yZGluYXRlcygpIHtcbiAgICBsZXQgdHJhbnNmb3JtZWRDb29yZGluYXRlczogbnVtYmVyW107XG5cbiAgICBpZiAodGhpcy5zcmlkID09PSB0aGlzLm1hcFNyaWQpIHtcbiAgICAgIHRyYW5zZm9ybWVkQ29vcmRpbmF0ZXMgPSBbdGhpcy54LCB0aGlzLnldO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2Zvcm1lZENvb3JkaW5hdGVzID0gdHJhbnNmb3JtKFt0aGlzLngsIHRoaXMueV0sIHRoaXMuc3JpZCwgdGhpcy5tYXBTcmlkKTtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRoaXMuaG9zdC5jb21wb25lbnRUeXBlKSB7XG4gICAgICBjYXNlICdnZW9tZXRyeS1wb2ludCc6XG4gICAgICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRDb29yZGluYXRlcyh0cmFuc2Zvcm1lZENvb3JkaW5hdGVzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdnZW9tZXRyeS1jaXJjbGUnOlxuICAgICAgY2FzZSAndmlldyc6XG4gICAgICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRDZW50ZXIodHJhbnNmb3JtZWRDb29yZGluYXRlcyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnb3ZlcmxheSc6XG4gICAgICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRQb3NpdGlvbih0cmFuc2Zvcm1lZENvb3JkaW5hdGVzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG4iXX0=