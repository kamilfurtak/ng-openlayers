import { Component, Input, Optional } from '@angular/core';
import { Stroke } from 'ol/style';
import * as i0 from "@angular/core";
import * as i1 from "./style.component";
import * as i2 from "./circle.component";
import * as i3 from "./text.component";
export class StyleStrokeComponent {
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
        // console.log('creating aol-style-stroke with: ', this);
    }
    ngOnInit() {
        // console.log('creating ol.style.Stroke instance with: ', this);
        this.instance = new Stroke(this);
        switch (this.host.componentType) {
            case 'style':
                this.host.instance.setStroke(this.instance);
                // console.log('setting ol.style instance\'s stroke:', this.host);
                break;
            case 'style-text':
                this.host.instance.setStroke(this.instance);
                break;
            case 'style-circle':
                this.host.stroke = this.instance;
                // console.log('setting ol.style.circle instance\'s stroke:', this.host);
                break;
            default:
                throw new Error('unknown host type: ' + this.host);
            // break;
        }
    }
    ngOnChanges(changes) {
        if (!this.instance) {
            return;
        }
        if (changes.color) {
            this.instance.setColor(changes.color.currentValue);
        }
        if (changes.lineCap) {
            this.instance.setLineCap(changes.lineCap.currentValue);
        }
        if (changes.lineDash) {
            this.instance.setLineDash(changes.lineDash.currentValue);
        }
        if (changes.lineJoin) {
            this.instance.setLineJoin(changes.lineJoin.currentValue);
        }
        if (changes.miterLimit) {
            this.instance.setMiterLimit(changes.miterLimit.currentValue);
        }
        if (changes.width) {
            this.instance.setWidth(changes.width.currentValue);
        }
        this.host.update();
        // console.log('changes detected in aol-style-stroke, setting new properties: ', changes);
    }
    static { this.ɵfac = function StyleStrokeComponent_Factory(t) { return new (t || StyleStrokeComponent)(i0.ɵɵdirectiveInject(i1.StyleComponent, 8), i0.ɵɵdirectiveInject(i2.StyleCircleComponent, 8), i0.ɵɵdirectiveInject(i3.StyleTextComponent, 8)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StyleStrokeComponent, selectors: [["aol-style-stroke"]], inputs: { color: "color", lineCap: "lineCap", lineDash: "lineDash", lineJoin: "lineJoin", miterLimit: "miterLimit", width: "width" }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 0, consts: [[1, "aol-style-stroke"]], template: function StyleStrokeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "div", 0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StyleStrokeComponent, [{
        type: Component,
        args: [{
                selector: 'aol-style-stroke',
                template: ` <div class="aol-style-stroke"></div> `,
            }]
    }], () => [{ type: i1.StyleComponent, decorators: [{
                type: Optional
            }] }, { type: i2.StyleCircleComponent, decorators: [{
                type: Optional
            }] }, { type: i3.StyleTextComponent, decorators: [{
                type: Optional
            }] }], { color: [{
            type: Input
        }], lineCap: [{
            type: Input
        }], lineDash: [{
            type: Input
        }], lineJoin: [{
            type: Input
        }], miterLimit: [{
            type: Input
        }], width: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StyleStrokeComponent, { className: "StyleStrokeComponent", filePath: "lib/styles/stroke.component.ts", lineNumber: 13 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Ryb2tlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvbmctb3BlbmxheWVycy9zcmMvbGliL3N0eWxlcy9zdHJva2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBb0MsTUFBTSxlQUFlLENBQUM7QUFDN0YsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQzs7Ozs7QUFXbEMsTUFBTSxPQUFPLG9CQUFvQjtJQWtCL0IsWUFDYyxTQUF5QixFQUN6QixlQUFxQyxFQUNyQyxhQUFpQztRQUU3QyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDZixNQUFNLElBQUksS0FBSyxDQUFDLG9EQUFvRCxDQUFDLENBQUM7UUFDeEUsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDO1FBQzVCLENBQUM7YUFBTSxJQUFJLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUM3QixJQUFJLENBQUMsSUFBSSxHQUFHLGVBQWUsQ0FBQztRQUM5QixDQUFDO2FBQU0sQ0FBQztZQUNOLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO1FBQ3hCLENBQUM7UUFDRCx5REFBeUQ7SUFDM0QsQ0FBQztJQUVELFFBQVE7UUFDTixpRUFBaUU7UUFDakUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDaEMsS0FBSyxPQUFPO2dCQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzVDLGtFQUFrRTtnQkFDbEUsTUFBTTtZQUNSLEtBQUssWUFBWTtnQkFDZixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUM1QyxNQUFNO1lBQ1IsS0FBSyxjQUFjO2dCQUNoQixJQUFJLENBQUMsSUFBNkIsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDM0QseUVBQXlFO2dCQUN6RSxNQUFNO1lBQ1I7Z0JBQ0UsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckQsU0FBUztRQUNYLENBQUM7SUFDSCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbkIsT0FBTztRQUNULENBQUM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3JELENBQUM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3pELENBQUM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzNELENBQUM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzNELENBQUM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQy9ELENBQUM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3JELENBQUM7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ25CLDBGQUEwRjtJQUM1RixDQUFDO3FGQWpGVSxvQkFBb0I7b0VBQXBCLG9CQUFvQjtZQUZuQix5QkFBb0M7OztpRkFFckMsb0JBQW9CO2NBSmhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUUsd0NBQXdDO2FBQ25EOztzQkFvQkksUUFBUTs7c0JBQ1IsUUFBUTs7c0JBQ1IsUUFBUTtxQkFuQlgsS0FBSztrQkFESixLQUFLO1lBR04sT0FBTztrQkFETixLQUFLO1lBR04sUUFBUTtrQkFEUCxLQUFLO1lBR04sUUFBUTtrQkFEUCxLQUFLO1lBR04sVUFBVTtrQkFEVCxLQUFLO1lBR04sS0FBSztrQkFESixLQUFLOztrRkFYSyxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPcHRpb25hbCwgT25Jbml0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0cm9rZSB9IGZyb20gJ29sL3N0eWxlJztcbmltcG9ydCB7IFN0eWxlQ29tcG9uZW50IH0gZnJvbSAnLi9zdHlsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3R5bGVDaXJjbGVDb21wb25lbnQgfSBmcm9tICcuL2NpcmNsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3R5bGVUZXh0Q29tcG9uZW50IH0gZnJvbSAnLi90ZXh0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gJ29sL2NvbG9yJztcbmltcG9ydCB7IENvbG9yTGlrZSB9IGZyb20gJ29sL2NvbG9ybGlrZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1zdHlsZS1zdHJva2UnLFxuICB0ZW1wbGF0ZTogYCA8ZGl2IGNsYXNzPVwiYW9sLXN0eWxlLXN0cm9rZVwiPjwvZGl2PiBgLFxufSlcbmV4cG9ydCBjbGFzcyBTdHlsZVN0cm9rZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KClcbiAgY29sb3I6IENvbG9yIHwgQ29sb3JMaWtlO1xuICBASW5wdXQoKVxuICBsaW5lQ2FwOiBDYW52YXNMaW5lQ2FwIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoKVxuICBsaW5lRGFzaDogbnVtYmVyW107XG4gIEBJbnB1dCgpXG4gIGxpbmVKb2luOiBDYW52YXNMaW5lSm9pbiB8IHVuZGVmaW5lZDtcbiAgQElucHV0KClcbiAgbWl0ZXJMaW1pdDogbnVtYmVyO1xuICBASW5wdXQoKVxuICB3aWR0aDogbnVtYmVyO1xuXG4gIHB1YmxpYyBpbnN0YW5jZTogU3Ryb2tlO1xuICAvKiB0aGUgdHlwaW5ncyBkbyBub3QgaGF2ZSB0aGUgc2V0dGVycyAqL1xuICBwcml2YXRlIHJlYWRvbmx5IGhvc3Q6IFN0eWxlQ29tcG9uZW50IHwgU3R5bGVDaXJjbGVDb21wb25lbnQgfCBTdHlsZVRleHRDb21wb25lbnQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgc3R5bGVIb3N0OiBTdHlsZUNvbXBvbmVudCxcbiAgICBAT3B0aW9uYWwoKSBzdHlsZUNpcmNsZUhvc3Q6IFN0eWxlQ2lyY2xlQ29tcG9uZW50LFxuICAgIEBPcHRpb25hbCgpIHN0eWxlVGV4dEhvc3Q6IFN0eWxlVGV4dENvbXBvbmVudFxuICApIHtcbiAgICBpZiAoIXN0eWxlSG9zdCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdhb2wtc3R5bGUtc3Ryb2tlIG11c3QgYmUgYSBkZXNjZW5kYW50IG9mIGFvbC1zdHlsZScpO1xuICAgIH1cbiAgICBpZiAoISFzdHlsZVRleHRIb3N0KSB7XG4gICAgICB0aGlzLmhvc3QgPSBzdHlsZVRleHRIb3N0O1xuICAgIH0gZWxzZSBpZiAoISFzdHlsZUNpcmNsZUhvc3QpIHtcbiAgICAgIHRoaXMuaG9zdCA9IHN0eWxlQ2lyY2xlSG9zdDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ob3N0ID0gc3R5bGVIb3N0O1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZygnY3JlYXRpbmcgYW9sLXN0eWxlLXN0cm9rZSB3aXRoOiAnLCB0aGlzKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdjcmVhdGluZyBvbC5zdHlsZS5TdHJva2UgaW5zdGFuY2Ugd2l0aDogJywgdGhpcyk7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBTdHJva2UodGhpcyk7XG4gICAgc3dpdGNoICh0aGlzLmhvc3QuY29tcG9uZW50VHlwZSkge1xuICAgICAgY2FzZSAnc3R5bGUnOlxuICAgICAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0U3Ryb2tlKHRoaXMuaW5zdGFuY2UpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnc2V0dGluZyBvbC5zdHlsZSBpbnN0YW5jZVxcJ3Mgc3Ryb2tlOicsIHRoaXMuaG9zdCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc3R5bGUtdGV4dCc6XG4gICAgICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRTdHJva2UodGhpcy5pbnN0YW5jZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc3R5bGUtY2lyY2xlJzpcbiAgICAgICAgKHRoaXMuaG9zdCBhcyBTdHlsZUNpcmNsZUNvbXBvbmVudCkuc3Ryb2tlID0gdGhpcy5pbnN0YW5jZTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3NldHRpbmcgb2wuc3R5bGUuY2lyY2xlIGluc3RhbmNlXFwncyBzdHJva2U6JywgdGhpcy5ob3N0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Vua25vd24gaG9zdCB0eXBlOiAnICsgdGhpcy5ob3N0KTtcbiAgICAgIC8vIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuY29sb3IpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0Q29sb3IoY2hhbmdlcy5jb2xvci5jdXJyZW50VmFsdWUpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5saW5lQ2FwKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldExpbmVDYXAoY2hhbmdlcy5saW5lQ2FwLmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLmxpbmVEYXNoKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldExpbmVEYXNoKGNoYW5nZXMubGluZURhc2guY3VycmVudFZhbHVlKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMubGluZUpvaW4pIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0TGluZUpvaW4oY2hhbmdlcy5saW5lSm9pbi5jdXJyZW50VmFsdWUpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5taXRlckxpbWl0KSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldE1pdGVyTGltaXQoY2hhbmdlcy5taXRlckxpbWl0LmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLndpZHRoKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFdpZHRoKGNoYW5nZXMud2lkdGguY3VycmVudFZhbHVlKTtcbiAgICB9XG4gICAgdGhpcy5ob3N0LnVwZGF0ZSgpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdjaGFuZ2VzIGRldGVjdGVkIGluIGFvbC1zdHlsZS1zdHJva2UsIHNldHRpbmcgbmV3IHByb3BlcnRpZXM6ICcsIGNoYW5nZXMpO1xuICB9XG59XG4iXX0=