import { Input, Directive } from '@angular/core';
import * as i0 from "@angular/core";
// eslint-disable-next-line @angular-eslint/directive-class-suffix
export class LayerComponent {
    constructor(host) {
        this.host = host;
        this.componentType = 'layer';
    }
    ngOnInit() {
        if (this.prerender !== null && this.prerender !== undefined) {
            this.instance.on('prerender', this.prerender);
        }
        if (this.postrender !== null && this.postrender !== undefined) {
            this.instance.on('postrender', this.postrender);
        }
        this.host.instance.getLayers().push(this.instance);
    }
    ngOnDestroy() {
        this.host.instance.getLayers().remove(this.instance);
    }
    ngOnChanges(changes) {
        const properties = {};
        if (!this.instance) {
            return;
        }
        for (const key in changes) {
            if (changes.hasOwnProperty(key)) {
                properties[key] = changes[key].currentValue;
                if (key === 'prerender') {
                    this.instance.un('prerender', changes[key].previousValue);
                    this.instance.on('prerender', changes[key].currentValue);
                }
                if (key === 'postrender') {
                    this.instance.un('postrender', changes[key].previousValue);
                    this.instance.on('postrender', changes[key].currentValue);
                }
            }
        }
        // console.log('changes detected in aol-layer, setting new properties: ', properties);
        this.instance.setProperties(properties, false);
    }
    static { this.ɵfac = function LayerComponent_Factory(t) { i0.ɵɵinvalidFactory(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: LayerComponent, inputs: { opacity: "opacity", visible: "visible", extent: "extent", zIndex: "zIndex", minResolution: "minResolution", maxResolution: "maxResolution", prerender: "prerender", postrender: "postrender" }, features: [i0.ɵɵNgOnChangesFeature] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LayerComponent, [{
        type: Directive
    }], () => [{ type: undefined }], { opacity: [{
            type: Input
        }], visible: [{
            type: Input
        }], extent: [{
            type: Input
        }], zIndex: [{
            type: Input
        }], minResolution: [{
            type: Input
        }], maxResolution: [{
            type: Input
        }], prerender: [{
            type: Input
        }], postrender: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9uZy1vcGVubGF5ZXJzL3NyYy9saWIvbGF5ZXJzL2xheWVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWdDLEtBQUssRUFBaUIsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU85RixrRUFBa0U7QUFDbEUsTUFBTSxPQUFnQixjQUFjO0lBc0JsQyxZQUFnQyxJQUF3QztRQUF4QyxTQUFJLEdBQUosSUFBSSxDQUFvQztRQUZqRSxrQkFBYSxHQUFHLE9BQU8sQ0FBQztJQUU0QyxDQUFDO0lBRTVFLFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDNUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNoRCxDQUFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQzlELElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbEQsQ0FBQztRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsTUFBTSxVQUFVLEdBQTZCLEVBQUUsQ0FBQztRQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ25CLE9BQU87UUFDVCxDQUFDO1FBQ0QsS0FBSyxNQUFNLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztZQUMxQixJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztnQkFDaEMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUM7Z0JBQzVDLElBQUksR0FBRyxLQUFLLFdBQVcsRUFBRSxDQUFDO29CQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUMxRCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUMzRCxDQUFDO2dCQUNELElBQUksR0FBRyxLQUFLLFlBQVksRUFBRSxDQUFDO29CQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUMzRCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUM1RCxDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUM7UUFDRCxzRkFBc0Y7UUFDdEYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2pELENBQUM7O29FQTFEbUIsY0FBYzs7aUZBQWQsY0FBYztjQUZuQyxTQUFTO3VDQUlSLE9BQU87a0JBRE4sS0FBSztZQUdOLE9BQU87a0JBRE4sS0FBSztZQUdOLE1BQU07a0JBREwsS0FBSztZQUdOLE1BQU07a0JBREwsS0FBSztZQUdOLGFBQWE7a0JBRFosS0FBSztZQUdOLGFBQWE7a0JBRFosS0FBSztZQUlOLFNBQVM7a0JBRFIsS0FBSztZQUdOLFVBQVU7a0JBRFQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uRGVzdHJveSwgT25Jbml0LCBPbkNoYW5nZXMsIElucHV0LCBTaW1wbGVDaGFuZ2VzLCBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBFdmVudCBmcm9tICdvbC9ldmVudHMvRXZlbnQnO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXllckdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9sYXllcmdyb3VwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFeHRlbnQgfSBmcm9tICdvbC9leHRlbnQnO1xuXG5ARGlyZWN0aXZlKClcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvZGlyZWN0aXZlLWNsYXNzLXN1ZmZpeFxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIExheWVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpXG4gIG9wYWNpdHk6IG51bWJlcjtcbiAgQElucHV0KClcbiAgdmlzaWJsZTogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgZXh0ZW50OiBFeHRlbnQ7XG4gIEBJbnB1dCgpXG4gIHpJbmRleDogbnVtYmVyO1xuICBASW5wdXQoKVxuICBtaW5SZXNvbHV0aW9uOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIG1heFJlc29sdXRpb246IG51bWJlcjtcblxuICBASW5wdXQoKVxuICBwcmVyZW5kZXI6IChldnQ6IEV2ZW50KSA9PiB2b2lkO1xuICBASW5wdXQoKVxuICBwb3N0cmVuZGVyOiAoZXZ0OiBFdmVudCkgPT4gdm9pZDtcblxuICBwdWJsaWMgaW5zdGFuY2U6IGFueTtcbiAgcHVibGljIGNvbXBvbmVudFR5cGUgPSAnbGF5ZXInO1xuXG4gIHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgaG9zdDogTWFwQ29tcG9uZW50IHwgTGF5ZXJHcm91cENvbXBvbmVudCkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5wcmVyZW5kZXIgIT09IG51bGwgJiYgdGhpcy5wcmVyZW5kZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5vbigncHJlcmVuZGVyJywgdGhpcy5wcmVyZW5kZXIpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wb3N0cmVuZGVyICE9PSBudWxsICYmIHRoaXMucG9zdHJlbmRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLm9uKCdwb3N0cmVuZGVyJywgdGhpcy5wb3N0cmVuZGVyKTtcbiAgICB9XG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLmdldExheWVycygpLnB1c2godGhpcy5pbnN0YW5jZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2UuZ2V0TGF5ZXJzKCkucmVtb3ZlKHRoaXMuaW5zdGFuY2UpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGNvbnN0IHByb3BlcnRpZXM6IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBjaGFuZ2VzKSB7XG4gICAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHByb3BlcnRpZXNba2V5XSA9IGNoYW5nZXNba2V5XS5jdXJyZW50VmFsdWU7XG4gICAgICAgIGlmIChrZXkgPT09ICdwcmVyZW5kZXInKSB7XG4gICAgICAgICAgdGhpcy5pbnN0YW5jZS51bigncHJlcmVuZGVyJywgY2hhbmdlc1trZXldLnByZXZpb3VzVmFsdWUpO1xuICAgICAgICAgIHRoaXMuaW5zdGFuY2Uub24oJ3ByZXJlbmRlcicsIGNoYW5nZXNba2V5XS5jdXJyZW50VmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChrZXkgPT09ICdwb3N0cmVuZGVyJykge1xuICAgICAgICAgIHRoaXMuaW5zdGFuY2UudW4oJ3Bvc3RyZW5kZXInLCBjaGFuZ2VzW2tleV0ucHJldmlvdXNWYWx1ZSk7XG4gICAgICAgICAgdGhpcy5pbnN0YW5jZS5vbigncG9zdHJlbmRlcicsIGNoYW5nZXNba2V5XS5jdXJyZW50VmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKCdjaGFuZ2VzIGRldGVjdGVkIGluIGFvbC1sYXllciwgc2V0dGluZyBuZXcgcHJvcGVydGllczogJywgcHJvcGVydGllcyk7XG4gICAgdGhpcy5pbnN0YW5jZS5zZXRQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGZhbHNlKTtcbiAgfVxufVxuIl19