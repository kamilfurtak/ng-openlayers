import { Component, Input } from '@angular/core';
import MousePosition from 'ol/control/MousePosition';
import * as i0 from "@angular/core";
import * as i1 from "../map.component";
export class ControlMousePositionComponent {
    constructor(map, element) {
        this.map = map;
        this.element = element;
    }
    ngOnInit() {
        this.target = this.element.nativeElement;
        // console.log('ol.control.MousePosition init: ', this);
        this.instance = new MousePosition(this);
        this.map.instance.addControl(this.instance);
    }
    ngOnDestroy() {
        // console.log('removing aol-control-mouseposition');
        this.map.instance.removeControl(this.instance);
    }
    static { this.ɵfac = function ControlMousePositionComponent_Factory(t) { return new (t || ControlMousePositionComponent)(i0.ɵɵdirectiveInject(i1.MapComponent), i0.ɵɵdirectiveInject(i0.ElementRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ControlMousePositionComponent, selectors: [["aol-control-mouseposition"]], inputs: { coordinateFormat: "coordinateFormat", projection: "projection" }, decls: 0, vars: 0, template: function ControlMousePositionComponent_Template(rf, ctx) { }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ControlMousePositionComponent, [{
        type: Component,
        args: [{
                selector: 'aol-control-mouseposition',
                template: ``,
            }]
    }], () => [{ type: i1.MapComponent }, { type: i0.ElementRef }], { coordinateFormat: [{
            type: Input
        }], projection: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ControlMousePositionComponent, { className: "ControlMousePositionComponent", filePath: "lib/controls/mouseposition.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW91c2Vwb3NpdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL25nLW9wZW5sYXllcnMvc3JjL2xpYi9jb250cm9scy9tb3VzZXBvc2l0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxhQUFhLE1BQU0sMEJBQTBCLENBQUM7OztBQVNyRCxNQUFNLE9BQU8sNkJBQTZCO0lBU3hDLFlBQ1UsR0FBaUIsRUFDakIsT0FBbUI7UUFEbkIsUUFBRyxHQUFILEdBQUcsQ0FBYztRQUNqQixZQUFPLEdBQVAsT0FBTyxDQUFZO0lBQzFCLENBQUM7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUN6Qyx3REFBd0Q7UUFDeEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxXQUFXO1FBQ1QscURBQXFEO1FBQ3JELElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakQsQ0FBQzs4RkF4QlUsNkJBQTZCO29FQUE3Qiw2QkFBNkI7O2lGQUE3Qiw2QkFBNkI7Y0FKekMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFFBQVEsRUFBRSxFQUFFO2FBQ2I7c0VBR0MsZ0JBQWdCO2tCQURmLEtBQUs7WUFHTixVQUFVO2tCQURULEtBQUs7O2tGQUhLLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgTW91c2VQb3NpdGlvbiBmcm9tICdvbC9jb250cm9sL01vdXNlUG9zaXRpb24nO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb29yZGluYXRlRm9ybWF0IH0gZnJvbSAnb2wvY29vcmRpbmF0ZSc7XG5pbXBvcnQgeyBQcm9qZWN0aW9uTGlrZSB9IGZyb20gJ29sL3Byb2onO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtY29udHJvbC1tb3VzZXBvc2l0aW9uJyxcbiAgdGVtcGxhdGU6IGBgLFxufSlcbmV4cG9ydCBjbGFzcyBDb250cm9sTW91c2VQb3NpdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KClcbiAgY29vcmRpbmF0ZUZvcm1hdDogQ29vcmRpbmF0ZUZvcm1hdDtcbiAgQElucHV0KClcbiAgcHJvamVjdGlvbjogUHJvamVjdGlvbkxpa2U7XG5cbiAgaW5zdGFuY2U6IE1vdXNlUG9zaXRpb247XG4gIHRhcmdldDogSFRNTEVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCxcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWZcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudGFyZ2V0ID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgLy8gY29uc29sZS5sb2coJ29sLmNvbnRyb2wuTW91c2VQb3NpdGlvbiBpbml0OiAnLCB0aGlzKTtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IE1vdXNlUG9zaXRpb24odGhpcyk7XG4gICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkQ29udHJvbCh0aGlzLmluc3RhbmNlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdyZW1vdmluZyBhb2wtY29udHJvbC1tb3VzZXBvc2l0aW9uJyk7XG4gICAgdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlQ29udHJvbCh0aGlzLmluc3RhbmNlKTtcbiAgfVxufVxuIl19