import { Input, Directive } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../layers/layer.component";
// eslint-disable-next-line @angular-eslint/directive-class-suffix
export class SourceComponent {
    constructor(host) {
        this.host = host;
        this.componentType = 'source';
    }
    ngOnDestroy() {
        if (this.host && this.host.instance) {
            this.host.instance.setSource(null);
        }
    }
    register(s) {
        if (this.host) {
            this.host.instance.setSource(s);
        }
    }
    static { this.ɵfac = function SourceComponent_Factory(t) { return new (t || SourceComponent)(i0.ɵɵdirectiveInject(i1.LayerComponent)); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: SourceComponent, inputs: { attributions: "attributions" } }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SourceComponent, [{
        type: Directive
    }], () => [{ type: i1.LayerComponent }], { attributions: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvbmctb3BlbmxheWVycy9zcmMvbGliL3NvdXJjZXMvc291cmNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFhLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBTTVELGtFQUFrRTtBQUNsRSxNQUFNLE9BQWdCLGVBQWU7SUFPbkMsWUFBZ0MsSUFBb0I7UUFBcEIsU0FBSSxHQUFKLElBQUksQ0FBZ0I7UUFGN0Msa0JBQWEsR0FBRyxRQUFRLENBQUM7SUFFdUIsQ0FBQztJQUV4RCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLENBQUM7SUFDSCxDQUFDO0lBRVMsUUFBUSxDQUFDLENBQVM7UUFDMUIsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEMsQ0FBQztJQUNILENBQUM7Z0ZBbkJtQixlQUFlO29FQUFmLGVBQWU7O2lGQUFmLGVBQWU7Y0FGcEMsU0FBUzsrQ0FJUixZQUFZO2tCQURYLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCwgT25EZXN0cm95LCBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBTb3VyY2UgZnJvbSAnb2wvc291cmNlL1NvdXJjZSc7XG5cbmltcG9ydCB7IExheWVyQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVyLmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoKVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9kaXJlY3RpdmUtY2xhc3Mtc3VmZml4XG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgQElucHV0KClcbiAgYXR0cmlidXRpb25zOiBhbnk7XG5cbiAgcHVibGljIGluc3RhbmNlOiBTb3VyY2U7XG4gIHB1YmxpYyBjb21wb25lbnRUeXBlID0gJ3NvdXJjZSc7XG5cbiAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBob3N0OiBMYXllckNvbXBvbmVudCkge31cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5ob3N0ICYmIHRoaXMuaG9zdC5pbnN0YW5jZSkge1xuICAgICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFNvdXJjZShudWxsKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVnaXN0ZXIoczogU291cmNlKSB7XG4gICAgaWYgKHRoaXMuaG9zdCkge1xuICAgICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFNvdXJjZShzKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==