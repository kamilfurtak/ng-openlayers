import { Component, Input, Optional } from '@angular/core';
import { Fill } from 'ol/style';
import * as i0 from "@angular/core";
import * as i1 from "./style.component";
import * as i2 from "./circle.component";
import * as i3 from "./text.component";
export class StyleFillComponent {
    constructor(styleHost, styleCircleHost, styleTextHost) {
        if (!styleHost) {
            throw new Error('aol-style-stroke must be a descendant of aol-style');
        }
        if (!!styleTextHost) {
            this.host = styleTextHost;
        }
        else if (!!styleCircleHost) {
            this.host = styleCircleHost;
        }
        else {
            this.host = styleHost;
        }
        // console.log('creating aol-style-fill with: ', this);
    }
    ngOnInit() {
        // console.log('creating ol.style.Fill instance with: ', this);
        this.instance = new Fill(this);
        switch (this.host.componentType) {
            case 'style':
                this.host.instance.setFill(this.instance);
                // console.log('setting ol.style instance\'s fill:', this.host);
                break;
            case 'style-text':
                this.host.instance.setFill(this.instance);
                break;
            case 'style-circle':
                this.host.fill = this.instance;
                // console.log('setting ol.style.circle instance\'s fill:', this.host);
                break;
            default:
                throw new Error('unknown host type: ' + this.host);
        }
    }
    ngOnChanges(changes) {
        if (!this.instance) {
            return;
        }
        if (changes.color) {
            this.instance.setColor(changes.color.currentValue);
        }
        this.host.update();
        // console.log('changes detected in aol-style-fill, setting new color: ', changes);
    }
    static { this.ɵfac = function StyleFillComponent_Factory(t) { return new (t || StyleFillComponent)(i0.ɵɵdirectiveInject(i1.StyleComponent, 8), i0.ɵɵdirectiveInject(i2.StyleCircleComponent, 8), i0.ɵɵdirectiveInject(i3.StyleTextComponent, 8)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StyleFillComponent, selectors: [["aol-style-fill"]], inputs: { color: "color" }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 0, consts: [[1, "aol-style-fill"]], template: function StyleFillComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "div", 0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StyleFillComponent, [{
        type: Component,
        args: [{
                selector: 'aol-style-fill',
                template: ` <div class="aol-style-fill"></div> `,
            }]
    }], () => [{ type: i1.StyleComponent, decorators: [{
                type: Optional
            }] }, { type: i2.StyleCircleComponent, decorators: [{
                type: Optional
            }] }, { type: i3.StyleTextComponent, decorators: [{
                type: Optional
            }] }], { color: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StyleFillComponent, { className: "StyleFillComponent", filePath: "lib/styles/fill.component.ts", lineNumber: 13 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL25nLW9wZW5sYXllcnMvc3JjL2xpYi9zdHlsZXMvZmlsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFvQyxNQUFNLGVBQWUsQ0FBQztBQUM3RixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sVUFBVSxDQUFDOzs7OztBQVdoQyxNQUFNLE9BQU8sa0JBQWtCO0lBTzdCLFlBQ2MsU0FBeUIsRUFDekIsZUFBcUMsRUFDckMsYUFBaUM7UUFFN0MsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2YsTUFBTSxJQUFJLEtBQUssQ0FBQyxvREFBb0QsQ0FBQyxDQUFDO1FBQ3hFLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQztRQUM1QixDQUFDO2FBQU0sSUFBSSxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDN0IsSUFBSSxDQUFDLElBQUksR0FBRyxlQUFlLENBQUM7UUFDOUIsQ0FBQzthQUFNLENBQUM7WUFDTixJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztRQUN4QixDQUFDO1FBQ0QsdURBQXVEO0lBQ3pELENBQUM7SUFFRCxRQUFRO1FBQ04sK0RBQStEO1FBQy9ELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ2hDLEtBQUssT0FBTztnQkFDVixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUMxQyxnRUFBZ0U7Z0JBQ2hFLE1BQU07WUFDUixLQUFLLFlBQVk7Z0JBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDMUMsTUFBTTtZQUNSLEtBQUssY0FBYztnQkFDaEIsSUFBSSxDQUFDLElBQTZCLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ3pELHVFQUF1RTtnQkFDdkUsTUFBTTtZQUNSO2dCQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZELENBQUM7SUFDSCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbkIsT0FBTztRQUNULENBQUM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3JELENBQUM7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ25CLG1GQUFtRjtJQUNyRixDQUFDO21GQXREVSxrQkFBa0I7b0VBQWxCLGtCQUFrQjtZQUZqQix5QkFBa0M7OztpRkFFbkMsa0JBQWtCO2NBSjlCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUUsc0NBQXNDO2FBQ2pEOztzQkFTSSxRQUFROztzQkFDUixRQUFROztzQkFDUixRQUFRO3FCQVJYLEtBQUs7a0JBREosS0FBSzs7a0ZBREssa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3B0aW9uYWwsIE9uSW5pdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGaWxsIH0gZnJvbSAnb2wvc3R5bGUnO1xuaW1wb3J0IHsgU3R5bGVDb21wb25lbnQgfSBmcm9tICcuL3N0eWxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHlsZUNpcmNsZUNvbXBvbmVudCB9IGZyb20gJy4vY2lyY2xlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHlsZVRleHRDb21wb25lbnQgfSBmcm9tICcuL3RleHQuY29tcG9uZW50JztcbmltcG9ydCB7IENvbG9yIH0gZnJvbSAnb2wvY29sb3InO1xuaW1wb3J0IHsgQ29sb3JMaWtlIH0gZnJvbSAnb2wvY29sb3JsaWtlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLXN0eWxlLWZpbGwnLFxuICB0ZW1wbGF0ZTogYCA8ZGl2IGNsYXNzPVwiYW9sLXN0eWxlLWZpbGxcIj48L2Rpdj4gYCxcbn0pXG5leHBvcnQgY2xhc3MgU3R5bGVGaWxsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKVxuICBjb2xvcjogQ29sb3IgfCBDb2xvckxpa2U7XG5cbiAgcHVibGljIGluc3RhbmNlOiBGaWxsO1xuICBwcml2YXRlIHJlYWRvbmx5IGhvc3Q6IFN0eWxlQ29tcG9uZW50IHwgU3R5bGVDaXJjbGVDb21wb25lbnQgfCBTdHlsZVRleHRDb21wb25lbnQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgc3R5bGVIb3N0OiBTdHlsZUNvbXBvbmVudCxcbiAgICBAT3B0aW9uYWwoKSBzdHlsZUNpcmNsZUhvc3Q6IFN0eWxlQ2lyY2xlQ29tcG9uZW50LFxuICAgIEBPcHRpb25hbCgpIHN0eWxlVGV4dEhvc3Q6IFN0eWxlVGV4dENvbXBvbmVudFxuICApIHtcbiAgICBpZiAoIXN0eWxlSG9zdCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdhb2wtc3R5bGUtc3Ryb2tlIG11c3QgYmUgYSBkZXNjZW5kYW50IG9mIGFvbC1zdHlsZScpO1xuICAgIH1cbiAgICBpZiAoISFzdHlsZVRleHRIb3N0KSB7XG4gICAgICB0aGlzLmhvc3QgPSBzdHlsZVRleHRIb3N0O1xuICAgIH0gZWxzZSBpZiAoISFzdHlsZUNpcmNsZUhvc3QpIHtcbiAgICAgIHRoaXMuaG9zdCA9IHN0eWxlQ2lyY2xlSG9zdDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ob3N0ID0gc3R5bGVIb3N0O1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZygnY3JlYXRpbmcgYW9sLXN0eWxlLWZpbGwgd2l0aDogJywgdGhpcyk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnY3JlYXRpbmcgb2wuc3R5bGUuRmlsbCBpbnN0YW5jZSB3aXRoOiAnLCB0aGlzKTtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IEZpbGwodGhpcyk7XG4gICAgc3dpdGNoICh0aGlzLmhvc3QuY29tcG9uZW50VHlwZSkge1xuICAgICAgY2FzZSAnc3R5bGUnOlxuICAgICAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0RmlsbCh0aGlzLmluc3RhbmNlKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3NldHRpbmcgb2wuc3R5bGUgaW5zdGFuY2VcXCdzIGZpbGw6JywgdGhpcy5ob3N0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzdHlsZS10ZXh0JzpcbiAgICAgICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldEZpbGwodGhpcy5pbnN0YW5jZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc3R5bGUtY2lyY2xlJzpcbiAgICAgICAgKHRoaXMuaG9zdCBhcyBTdHlsZUNpcmNsZUNvbXBvbmVudCkuZmlsbCA9IHRoaXMuaW5zdGFuY2U7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdzZXR0aW5nIG9sLnN0eWxlLmNpcmNsZSBpbnN0YW5jZVxcJ3MgZmlsbDonLCB0aGlzLmhvc3QpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndW5rbm93biBob3N0IHR5cGU6ICcgKyB0aGlzLmhvc3QpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuY29sb3IpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0Q29sb3IoY2hhbmdlcy5jb2xvci5jdXJyZW50VmFsdWUpO1xuICAgIH1cbiAgICB0aGlzLmhvc3QudXBkYXRlKCk7XG4gICAgLy8gY29uc29sZS5sb2coJ2NoYW5nZXMgZGV0ZWN0ZWQgaW4gYW9sLXN0eWxlLWZpbGwsIHNldHRpbmcgbmV3IGNvbG9yOiAnLCBjaGFuZ2VzKTtcbiAgfVxufVxuIl19