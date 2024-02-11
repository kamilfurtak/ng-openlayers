import { Component, Input, Host } from '@angular/core';
import { Icon } from 'ol/style';
import * as i0 from "@angular/core";
import * as i1 from "./style.component";
export class StyleIconComponent {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        // console.log('creating ol.style.Icon instance with: ', this);
        this.instance = new Icon(this);
        this.host.instance.setImage(this.instance);
    }
    ngOnChanges(changes) {
        if (!this.instance) {
            return;
        }
        if (changes.opacity) {
            this.instance.setOpacity(changes.opacity.currentValue);
        }
        if (changes.rotation) {
            this.instance.setRotation(changes.rotation.currentValue);
        }
        if (changes.scale) {
            this.instance.setScale(changes.scale.currentValue);
        }
        if (changes.src) {
            this.instance = new Icon(this);
            this.host.instance.setImage(this.instance);
        }
        this.host.update();
        // console.log('changes detected in aol-style-icon: ', changes);
    }
    static { this.ɵfac = function StyleIconComponent_Factory(t) { return new (t || StyleIconComponent)(i0.ɵɵdirectiveInject(i1.StyleComponent, 1)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StyleIconComponent, selectors: [["aol-style-icon"]], inputs: { anchor: "anchor", anchorXUnits: "anchorXUnits", anchorYUnits: "anchorYUnits", anchorOrigin: "anchorOrigin", color: "color", crossOrigin: "crossOrigin", img: "img", offset: "offset", offsetOrigin: "offsetOrigin", opacity: "opacity", scale: "scale", snapToPixel: "snapToPixel", rotateWithView: "rotateWithView", rotation: "rotation", size: "size", imgSize: "imgSize", src: "src" }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 0, consts: [[1, "aol-style-icon"]], template: function StyleIconComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "div", 0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StyleIconComponent, [{
        type: Component,
        args: [{
                selector: 'aol-style-icon',
                template: ` <div class="aol-style-icon"></div> `,
            }]
    }], () => [{ type: i1.StyleComponent, decorators: [{
                type: Host
            }] }], { anchor: [{
            type: Input
        }], anchorXUnits: [{
            type: Input
        }], anchorYUnits: [{
            type: Input
        }], anchorOrigin: [{
            type: Input
        }], color: [{
            type: Input
        }], crossOrigin: [{
            type: Input
        }], img: [{
            type: Input
        }], offset: [{
            type: Input
        }], offsetOrigin: [{
            type: Input
        }], opacity: [{
            type: Input
        }], scale: [{
            type: Input
        }], snapToPixel: [{
            type: Input
        }], rotateWithView: [{
            type: Input
        }], rotation: [{
            type: Input
        }], size: [{
            type: Input
        }], imgSize: [{
            type: Input
        }], src: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StyleIconComponent, { className: "StyleIconComponent", filePath: "lib/styles/icon.component.ts", lineNumber: 14 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL25nLW9wZW5sYXllcnMvc3JjL2xpYi9zdHlsZXMvaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFvQyxNQUFNLGVBQWUsQ0FBQztBQUN6RixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sVUFBVSxDQUFDOzs7QUFZaEMsTUFBTSxPQUFPLGtCQUFrQjtJQXNDN0IsWUFBNEIsSUFBb0I7UUFBcEIsU0FBSSxHQUFKLElBQUksQ0FBZ0I7SUFBRyxDQUFDO0lBRXBELFFBQVE7UUFDTiwrREFBK0Q7UUFDL0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNuQixPQUFPO1FBQ1QsQ0FBQztRQUNELElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDekQsQ0FBQztRQUNELElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDM0QsQ0FBQztRQUNELElBQUksT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDckQsQ0FBQztRQUNELElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ2hCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3QyxDQUFDO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNuQixnRUFBZ0U7SUFDbEUsQ0FBQzttRkFqRVUsa0JBQWtCO29FQUFsQixrQkFBa0I7WUFGakIseUJBQWtDOzs7aUZBRW5DLGtCQUFrQjtjQUo5QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFLHNDQUFzQzthQUNqRDs7c0JBdUNjLElBQUk7cUJBcENqQixNQUFNO2tCQURMLEtBQUs7WUFHTixZQUFZO2tCQURYLEtBQUs7WUFHTixZQUFZO2tCQURYLEtBQUs7WUFHTixZQUFZO2tCQURYLEtBQUs7WUFHTixLQUFLO2tCQURKLEtBQUs7WUFHTixXQUFXO2tCQURWLEtBQUs7WUFHTixHQUFHO2tCQURGLEtBQUs7WUFHTixNQUFNO2tCQURMLEtBQUs7WUFHTixZQUFZO2tCQURYLEtBQUs7WUFHTixPQUFPO2tCQUROLEtBQUs7WUFHTixLQUFLO2tCQURKLEtBQUs7WUFHTixXQUFXO2tCQURWLEtBQUs7WUFHTixjQUFjO2tCQURiLEtBQUs7WUFHTixRQUFRO2tCQURQLEtBQUs7WUFHTixJQUFJO2tCQURILEtBQUs7WUFHTixPQUFPO2tCQUROLEtBQUs7WUFHTixHQUFHO2tCQURGLEtBQUs7O2tGQWpDSyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBIb3N0LCBPbkluaXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ29sL3N0eWxlJztcblxuLy8gVE9ETyBodHRwczovL2dpdGh1Yi5jb20vb3BlbmxheWVycy9vcGVubGF5ZXJzL2lzc3Vlcy8xMjY5NFxuLy8gaW1wb3J0IEljb25BbmNob3JVbml0cyBmcm9tICdvbC9zdHlsZS9JY29uQW5jaG9yVW5pdHMnO1xuLy8gaW1wb3J0IEljb25PcmlnaW4gZnJvbSAnb2wvc3R5bGUvSWNvbk9yaWdpbic7XG5pbXBvcnQgeyBTdHlsZUNvbXBvbmVudCB9IGZyb20gJy4vc3R5bGUuY29tcG9uZW50JztcbmltcG9ydCB7IEljb25BbmNob3JVbml0cywgSWNvbk9yaWdpbiB9IGZyb20gJ29sL3N0eWxlL0ljb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtc3R5bGUtaWNvbicsXG4gIHRlbXBsYXRlOiBgIDxkaXYgY2xhc3M9XCJhb2wtc3R5bGUtaWNvblwiPjwvZGl2PiBgLFxufSlcbmV4cG9ydCBjbGFzcyBTdHlsZUljb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpXG4gIGFuY2hvcjogW251bWJlciwgbnVtYmVyXTtcbiAgQElucHV0KClcbiAgYW5jaG9yWFVuaXRzOiBJY29uQW5jaG9yVW5pdHM7XG4gIEBJbnB1dCgpXG4gIGFuY2hvcllVbml0czogSWNvbkFuY2hvclVuaXRzO1xuICBASW5wdXQoKVxuICBhbmNob3JPcmlnaW46IEljb25PcmlnaW47XG4gIEBJbnB1dCgpXG4gIGNvbG9yOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcbiAgQElucHV0KClcbiAgY3Jvc3NPcmlnaW46IEljb25PcmlnaW47XG4gIEBJbnB1dCgpXG4gIGltZzogSFRNTENhbnZhc0VsZW1lbnQgfCBIVE1MSW1hZ2VFbGVtZW50O1xuICBASW5wdXQoKVxuICBvZmZzZXQ6IFtudW1iZXIsIG51bWJlcl07XG4gIEBJbnB1dCgpXG4gIG9mZnNldE9yaWdpbjogSWNvbk9yaWdpbjtcbiAgQElucHV0KClcbiAgb3BhY2l0eTogbnVtYmVyO1xuICBASW5wdXQoKVxuICBzY2FsZTogbnVtYmVyO1xuICBASW5wdXQoKVxuICBzbmFwVG9QaXhlbDogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgcm90YXRlV2l0aFZpZXc6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHJvdGF0aW9uOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHNpemU6IFtudW1iZXIsIG51bWJlcl07XG4gIEBJbnB1dCgpXG4gIGltZ1NpemU6IFtudW1iZXIsIG51bWJlcl07XG4gIEBJbnB1dCgpXG4gIHNyYzogc3RyaW5nO1xuXG4gIHB1YmxpYyBpbnN0YW5jZTogSWNvbjtcblxuICBjb25zdHJ1Y3RvcihASG9zdCgpIHByaXZhdGUgaG9zdDogU3R5bGVDb21wb25lbnQpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2NyZWF0aW5nIG9sLnN0eWxlLkljb24gaW5zdGFuY2Ugd2l0aDogJywgdGhpcyk7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBJY29uKHRoaXMpO1xuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRJbWFnZSh0aGlzLmluc3RhbmNlKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMub3BhY2l0eSkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRPcGFjaXR5KGNoYW5nZXMub3BhY2l0eS5jdXJyZW50VmFsdWUpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5yb3RhdGlvbikge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRSb3RhdGlvbihjaGFuZ2VzLnJvdGF0aW9uLmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLnNjYWxlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFNjYWxlKGNoYW5nZXMuc2NhbGUuY3VycmVudFZhbHVlKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuc3JjKSB7XG4gICAgICB0aGlzLmluc3RhbmNlID0gbmV3IEljb24odGhpcyk7XG4gICAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0SW1hZ2UodGhpcy5pbnN0YW5jZSk7XG4gICAgfVxuICAgIHRoaXMuaG9zdC51cGRhdGUoKTtcbiAgICAvLyBjb25zb2xlLmxvZygnY2hhbmdlcyBkZXRlY3RlZCBpbiBhb2wtc3R5bGUtaWNvbjogJywgY2hhbmdlcyk7XG4gIH1cbn1cbiJdfQ==