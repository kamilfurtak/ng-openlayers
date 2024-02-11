import { Input, Directive } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../map.component";
import * as i2 from "../feature.component";
// eslint-disable-next-line @angular-eslint/directive-class-suffix
export class SimpleGeometryComponent {
    constructor(map, host) {
        this.map = map;
        this.host = host;
        this.componentType = 'simple-geometry';
    }
    ngOnInit() {
        this.host.instance.setGeometry(this.instance);
    }
    static { this.ɵfac = function SimpleGeometryComponent_Factory(t) { return new (t || SimpleGeometryComponent)(i0.ɵɵdirectiveInject(i1.MapComponent), i0.ɵɵdirectiveInject(i2.FeatureComponent)); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: SimpleGeometryComponent, inputs: { srid: "srid" } }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SimpleGeometryComponent, [{
        type: Directive
    }], () => [{ type: i1.MapComponent }, { type: i2.FeatureComponent }], { srid: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlZ2VvbWV0cnkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9uZy1vcGVubGF5ZXJzL3NyYy9saWIvZ2VvbS9zaW1wbGVnZW9tZXRyeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBVSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFNekQsa0VBQWtFO0FBQ2xFLE1BQU0sT0FBZ0IsdUJBQXVCO0lBTTNDLFlBQ1ksR0FBaUIsRUFDakIsSUFBc0I7UUFEdEIsUUFBRyxHQUFILEdBQUcsQ0FBYztRQUNqQixTQUFJLEdBQUosSUFBSSxDQUFrQjtRQUozQixrQkFBYSxHQUFHLGlCQUFpQixDQUFDO0lBS3RDLENBQUM7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoRCxDQUFDO3dGQWJtQix1QkFBdUI7b0VBQXZCLHVCQUF1Qjs7aUZBQXZCLHVCQUF1QjtjQUY1QyxTQUFTOzRFQUdDLElBQUk7a0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0LCBPbkluaXQsIERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmVhdHVyZUNvbXBvbmVudCB9IGZyb20gJy4uL2ZlYXR1cmUuY29tcG9uZW50JztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuaW1wb3J0IFNpbXBsZUdlb21ldHJ5IGZyb20gJ29sL2dlb20vU2ltcGxlR2VvbWV0cnknO1xuXG5ARGlyZWN0aXZlKClcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvZGlyZWN0aXZlLWNsYXNzLXN1ZmZpeFxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNpbXBsZUdlb21ldHJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgc3JpZDogc3RyaW5nO1xuXG4gIHB1YmxpYyBpbnN0YW5jZTogU2ltcGxlR2VvbWV0cnk7XG4gIHB1YmxpYyBjb21wb25lbnRUeXBlID0gJ3NpbXBsZS1nZW9tZXRyeSc7XG5cbiAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBtYXA6IE1hcENvbXBvbmVudCxcbiAgICBwcm90ZWN0ZWQgaG9zdDogRmVhdHVyZUNvbXBvbmVudFxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldEdlb21ldHJ5KHRoaXMuaW5zdGFuY2UpO1xuICB9XG59XG4iXX0=