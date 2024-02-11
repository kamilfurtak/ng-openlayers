import { Component, Input } from '@angular/core';
import { createXYZ } from 'ol/tilegrid';
import TileGrid from 'ol/tilegrid/TileGrid';
import * as i0 from "@angular/core";
export class TileGridComponent {
    ngOnInit() {
        if (!this.resolutions) {
            this.instance = createXYZ(this);
        }
        else {
            this.instance = new TileGrid(this);
        }
    }
    ngOnChanges(changes) {
        if (!this.resolutions) {
            this.instance = createXYZ(this);
        }
        else {
            this.instance = new TileGrid(this);
        }
    }
    static { this.ɵfac = function TileGridComponent_Factory(t) { return new (t || TileGridComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TileGridComponent, selectors: [["aol-tilegrid"]], inputs: { extent: "extent", maxZoom: "maxZoom", minZoom: "minZoom", tileSize: "tileSize", origin: "origin", resolutions: "resolutions" }, features: [i0.ɵɵNgOnChangesFeature], decls: 0, vars: 0, template: function TileGridComponent_Template(rf, ctx) { }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TileGridComponent, [{
        type: Component,
        args: [{
                selector: 'aol-tilegrid',
                template: '',
            }]
    }], null, { extent: [{
            type: Input
        }], maxZoom: [{
            type: Input
        }], minZoom: [{
            type: Input
        }], tileSize: [{
            type: Input
        }], origin: [{
            type: Input
        }], resolutions: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TileGridComponent, { className: "TileGridComponent", filePath: "lib/tilegrid.component.ts", lineNumber: 12 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZWdyaWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGlicy9uZy1vcGVubGF5ZXJzL3NyYy9saWIvdGlsZWdyaWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFvQyxNQUFNLGVBQWUsQ0FBQztBQUNuRixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3hDLE9BQU8sUUFBUSxNQUFNLHNCQUFzQixDQUFDOztBQVM1QyxNQUFNLE9BQU8saUJBQWlCO0lBZ0I1QixRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxDQUFDO2FBQU0sQ0FBQztZQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsQ0FBQztJQUNILENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxDQUFDO2FBQU0sQ0FBQztZQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsQ0FBQztJQUNILENBQUM7a0ZBOUJVLGlCQUFpQjtvRUFBakIsaUJBQWlCOztpRkFBakIsaUJBQWlCO2NBSjdCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFLEVBQUU7YUFDYjtnQkFHQyxNQUFNO2tCQURMLEtBQUs7WUFHTixPQUFPO2tCQUROLEtBQUs7WUFHTixPQUFPO2tCQUROLEtBQUs7WUFHTixRQUFRO2tCQURQLEtBQUs7WUFHTixNQUFNO2tCQURMLEtBQUs7WUFHTixXQUFXO2tCQURWLEtBQUs7O2tGQVhLLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjcmVhdGVYWVogfSBmcm9tICdvbC90aWxlZ3JpZCc7XG5pbXBvcnQgVGlsZUdyaWQgZnJvbSAnb2wvdGlsZWdyaWQvVGlsZUdyaWQnO1xuaW1wb3J0IHsgRXh0ZW50IH0gZnJvbSAnb2wvZXh0ZW50JztcbmltcG9ydCB7IENvb3JkaW5hdGUgfSBmcm9tICdvbC9jb29yZGluYXRlJztcbmltcG9ydCB7IFNpemUgfSBmcm9tICdvbC9zaXplJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLXRpbGVncmlkJyxcbiAgdGVtcGxhdGU6ICcnLFxufSlcbmV4cG9ydCBjbGFzcyBUaWxlR3JpZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KClcbiAgZXh0ZW50OiBFeHRlbnQ7XG4gIEBJbnB1dCgpXG4gIG1heFpvb206IG51bWJlcjtcbiAgQElucHV0KClcbiAgbWluWm9vbTogbnVtYmVyO1xuICBASW5wdXQoKVxuICB0aWxlU2l6ZTogbnVtYmVyIHwgU2l6ZTtcbiAgQElucHV0KClcbiAgb3JpZ2luPzogQ29vcmRpbmF0ZTtcbiAgQElucHV0KClcbiAgcmVzb2x1dGlvbnM6IG51bWJlcltdO1xuXG4gIGluc3RhbmNlOiBUaWxlR3JpZDtcblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMucmVzb2x1dGlvbnMpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBjcmVhdGVYWVoodGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgVGlsZUdyaWQodGhpcyk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmICghdGhpcy5yZXNvbHV0aW9ucykge1xuICAgICAgdGhpcy5pbnN0YW5jZSA9IGNyZWF0ZVhZWih0aGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBUaWxlR3JpZCh0aGlzKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==