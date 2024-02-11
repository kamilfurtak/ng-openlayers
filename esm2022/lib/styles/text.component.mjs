import { Component, Input, Optional } from '@angular/core';
import { Text } from 'ol/style';
import * as i0 from "@angular/core";
import * as i1 from "./style.component";
export class StyleTextComponent {
    constructor(host) {
        this.host = host;
        this.componentType = 'style-text';
        if (!host) {
            throw new Error('aol-style-text must be a descendant of aol-style');
        }
        // console.log('creating aol-style-text with: ', this);
    }
    ngOnInit() {
        // console.log('creating ol.style.Text instance with: ', this);
        this.instance = new Text(this);
        this.host.instance.setText(this.instance);
    }
    ngOnChanges(changes) {
        if (!this.instance) {
            return;
        }
        if (changes.font) {
            this.instance.setFont(changes.font.currentValue);
        }
        if (changes.offsetX) {
            this.instance.setOffsetX(changes.offsetX.currentValue);
        }
        if (changes.offsetY) {
            this.instance.setOffsetY(changes.offsetY.currentValue);
        }
        if (changes.scale) {
            this.instance.setScale(changes.scale.currentValue);
        }
        if (changes.rotation) {
            this.instance.setRotation(changes.rotation.currentValue);
        }
        if (changes.text) {
            this.instance.setText(changes.text.currentValue);
        }
        if (changes.textAlign) {
            this.instance.setTextAlign(changes.textAlign.currentValue);
        }
        if (changes.textBaseLine) {
            this.instance.setTextBaseline(changes.textBaseLine.currentValue);
        }
        this.host.update();
        // console.log('changes detected in aol-style-text, setting new properties: ', changes);
    }
    update() { }
    static { this.ɵfac = function StyleTextComponent_Factory(t) { return new (t || StyleTextComponent)(i0.ɵɵdirectiveInject(i1.StyleComponent, 8)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StyleTextComponent, selectors: [["aol-style-text"]], inputs: { font: "font", offsetX: "offsetX", offsetY: "offsetY", scale: "scale", rotateWithView: "rotateWithView", rotation: "rotation", text: "text", textAlign: "textAlign", textBaseLine: "textBaseLine" }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 0, consts: [[1, "aol-style-text"]], template: function StyleTextComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "div", 0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StyleTextComponent, [{
        type: Component,
        args: [{
                selector: 'aol-style-text',
                template: ` <div class="aol-style-text"></div> `,
            }]
    }], () => [{ type: i1.StyleComponent, decorators: [{
                type: Optional
            }] }], { font: [{
            type: Input
        }], offsetX: [{
            type: Input
        }], offsetY: [{
            type: Input
        }], scale: [{
            type: Input
        }], rotateWithView: [{
            type: Input
        }], rotation: [{
            type: Input
        }], text: [{
            type: Input
        }], textAlign: [{
            type: Input
        }], textBaseLine: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StyleTextComponent, { className: "StyleTextComponent", filePath: "lib/styles/text.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL25nLW9wZW5sYXllcnMvc3JjL2xpYi9zdHlsZXMvdGV4dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFvQyxNQUFNLGVBQWUsQ0FBQztBQUM3RixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sVUFBVSxDQUFDOzs7QUFPaEMsTUFBTSxPQUFPLGtCQUFrQjtJQXVCN0IsWUFBZ0MsSUFBb0I7UUFBcEIsU0FBSSxHQUFKLElBQUksQ0FBZ0I7UUFGN0Msa0JBQWEsR0FBRyxZQUFZLENBQUM7UUFHbEMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ1YsTUFBTSxJQUFJLEtBQUssQ0FBQyxrREFBa0QsQ0FBQyxDQUFDO1FBQ3RFLENBQUM7UUFDRCx1REFBdUQ7SUFDekQsQ0FBQztJQUVELFFBQVE7UUFDTiwrREFBK0Q7UUFDL0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNuQixPQUFPO1FBQ1QsQ0FBQztRQUNELElBQUksT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbkQsQ0FBQztRQUNELElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDekQsQ0FBQztRQUNELElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDekQsQ0FBQztRQUNELElBQUksT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDckQsQ0FBQztRQUNELElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDM0QsQ0FBQztRQUNELElBQUksT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbkQsQ0FBQztRQUNELElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDN0QsQ0FBQztRQUNELElBQUksT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbkUsQ0FBQztRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbkIsd0ZBQXdGO0lBQzFGLENBQUM7SUFFRCxNQUFNLEtBQUksQ0FBQzttRkFwRUEsa0JBQWtCO29FQUFsQixrQkFBa0I7WUFGakIseUJBQWtDOzs7aUZBRW5DLGtCQUFrQjtjQUo5QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFLHNDQUFzQzthQUNqRDs7c0JBd0JjLFFBQVE7cUJBckJyQixJQUFJO2tCQURILEtBQUs7WUFHTixPQUFPO2tCQUROLEtBQUs7WUFHTixPQUFPO2tCQUROLEtBQUs7WUFHTixLQUFLO2tCQURKLEtBQUs7WUFHTixjQUFjO2tCQURiLEtBQUs7WUFHTixRQUFRO2tCQURQLEtBQUs7WUFHTixJQUFJO2tCQURILEtBQUs7WUFHTixTQUFTO2tCQURSLEtBQUs7WUFHTixZQUFZO2tCQURYLEtBQUs7O2tGQWpCSyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPcHRpb25hbCwgT25Jbml0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRleHQgfSBmcm9tICdvbC9zdHlsZSc7XG5pbXBvcnQgeyBTdHlsZUNvbXBvbmVudCB9IGZyb20gJy4vc3R5bGUuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLXN0eWxlLXRleHQnLFxuICB0ZW1wbGF0ZTogYCA8ZGl2IGNsYXNzPVwiYW9sLXN0eWxlLXRleHRcIj48L2Rpdj4gYCxcbn0pXG5leHBvcnQgY2xhc3MgU3R5bGVUZXh0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKVxuICBmb250OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgpXG4gIG9mZnNldFg6IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgQElucHV0KClcbiAgb2Zmc2V0WTogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoKVxuICBzY2FsZTogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoKVxuICByb3RhdGVXaXRoVmlldzogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgQElucHV0KClcbiAgcm90YXRpb246IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgQElucHV0KClcbiAgdGV4dDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoKVxuICB0ZXh0QWxpZ246IENhbnZhc1RleHRBbGlnbiB8IHVuZGVmaW5lZDtcbiAgQElucHV0KClcbiAgdGV4dEJhc2VMaW5lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgcHVibGljIGluc3RhbmNlOiBUZXh0O1xuICBwdWJsaWMgY29tcG9uZW50VHlwZSA9ICdzdHlsZS10ZXh0JztcblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBwcml2YXRlIGhvc3Q6IFN0eWxlQ29tcG9uZW50KSB7XG4gICAgaWYgKCFob3N0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FvbC1zdHlsZS10ZXh0IG11c3QgYmUgYSBkZXNjZW5kYW50IG9mIGFvbC1zdHlsZScpO1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZygnY3JlYXRpbmcgYW9sLXN0eWxlLXRleHQgd2l0aDogJywgdGhpcyk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnY3JlYXRpbmcgb2wuc3R5bGUuVGV4dCBpbnN0YW5jZSB3aXRoOiAnLCB0aGlzKTtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFRleHQodGhpcyk7XG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFRleHQodGhpcy5pbnN0YW5jZSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLmZvbnQpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0Rm9udChjaGFuZ2VzLmZvbnQuY3VycmVudFZhbHVlKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMub2Zmc2V0WCkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRPZmZzZXRYKGNoYW5nZXMub2Zmc2V0WC5jdXJyZW50VmFsdWUpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5vZmZzZXRZKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldE9mZnNldFkoY2hhbmdlcy5vZmZzZXRZLmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLnNjYWxlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFNjYWxlKGNoYW5nZXMuc2NhbGUuY3VycmVudFZhbHVlKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMucm90YXRpb24pIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0Um90YXRpb24oY2hhbmdlcy5yb3RhdGlvbi5jdXJyZW50VmFsdWUpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy50ZXh0KSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFRleHQoY2hhbmdlcy50ZXh0LmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLnRleHRBbGlnbikge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRUZXh0QWxpZ24oY2hhbmdlcy50ZXh0QWxpZ24uY3VycmVudFZhbHVlKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMudGV4dEJhc2VMaW5lKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFRleHRCYXNlbGluZShjaGFuZ2VzLnRleHRCYXNlTGluZS5jdXJyZW50VmFsdWUpO1xuICAgIH1cbiAgICB0aGlzLmhvc3QudXBkYXRlKCk7XG4gICAgLy8gY29uc29sZS5sb2coJ2NoYW5nZXMgZGV0ZWN0ZWQgaW4gYW9sLXN0eWxlLXRleHQsIHNldHRpbmcgbmV3IHByb3BlcnRpZXM6ICcsIGNoYW5nZXMpO1xuICB9XG5cbiAgdXBkYXRlKCkge31cbn1cbiJdfQ==