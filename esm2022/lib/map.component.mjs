import { Component, Input, Output, EventEmitter, } from '@angular/core';
import { Map } from 'ol';
import * as i0 from "@angular/core";
const _c0 = ["*"];
export class MapComponent {
    constructor(host) {
        this.host = host;
        this.width = '100%';
        this.height = '100%';
        this.olChange = new EventEmitter();
        this.olChangeLayerGroup = new EventEmitter();
        this.olChangeSize = new EventEmitter();
        this.olChangeTarget = new EventEmitter();
        this.olChangeView = new EventEmitter();
        this.olClick = new EventEmitter();
        this.dblClick = new EventEmitter();
        this.olError = new EventEmitter();
        this.loadEnd = new EventEmitter();
        this.loadStart = new EventEmitter();
        this.moveEnd = new EventEmitter();
        this.moveStart = new EventEmitter();
        this.pointerDrag = new EventEmitter();
        this.pointerMove = new EventEmitter();
        this.olPostCompose = new EventEmitter();
        this.olPostRender = new EventEmitter();
        this.olPreCompose = new EventEmitter();
        this.olPropertyChange = new EventEmitter();
        this.postRender = new EventEmitter();
        this.propertyChange = new EventEmitter();
        this.singleClick = new EventEmitter();
        this.componentType = 'map';
        // we pass empty arrays to not get default controls/interactions because we have our own directives
        this.controls = [];
        this.interactions = [];
    }
    ngOnInit() {
        // console.log('creating ol.Map instance with:', this);
        this.instance = new Map(this);
        this.instance.setTarget(this.host.nativeElement.firstElementChild);
        this.instance.on('change', (event) => this.olChange.emit(event));
        this.instance.on('change:layergroup', (event) => this.olChangeLayerGroup.emit(event));
        this.instance.on('change:size', (event) => this.olChangeSize.emit(event));
        this.instance.on('change:target', (event) => this.olChangeTarget.emit(event));
        this.instance.on('change:view', (event) => this.olChangeView.emit(event));
        this.instance.on('click', (event) => this.olClick.emit(event));
        this.instance.on('dblclick', (event) => this.dblClick.emit(event));
        this.instance.on('error', (event) => this.olError.emit(event));
        this.instance.on('loadend', (event) => this.loadEnd.emit(event));
        this.instance.on('loadstart', (event) => this.loadStart.emit(event));
        this.instance.on('moveend', (event) => this.moveEnd.emit(event));
        this.instance.on('movestart', (event) => this.moveStart.emit(event));
        this.instance.on('pointerdrag', (event) => this.pointerDrag.emit(event));
        this.instance.on('pointermove', (event) => this.pointerMove.emit(event));
        this.instance.on('postcompose', (event) => this.olPostCompose.emit(event));
        this.instance.on('postrender', (event) => this.olPostRender.emit(event));
        this.instance.on('postrender', (event) => this.postRender.emit(event));
        this.instance.on('precompose', (event) => this.olPreCompose.emit(event));
        this.instance.on('propertychange', (event) => this.olPropertyChange.emit(event));
        this.instance.on('singleclick', (event) => this.singleClick.emit(event));
    }
    ngOnChanges(changes) {
        const properties = {};
        if (!this.instance) {
            return;
        }
        for (const key in changes) {
            if (changes.hasOwnProperty(key)) {
                properties[key] = changes[key].currentValue;
            }
        }
        // console.log('changes detected in aol-map, setting new properties: ', properties);
        this.instance.setProperties(properties, false);
    }
    ngAfterViewInit() {
        this.instance.updateSize();
    }
    static { this.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MapComponent, selectors: [["aol-map"]], inputs: { width: "width", height: "height", pixelRatio: "pixelRatio", keyboardEventTarget: "keyboardEventTarget", loadTilesWhileAnimating: "loadTilesWhileAnimating", loadTilesWhileInteracting: "loadTilesWhileInteracting", logo: "logo", renderer: "renderer" }, outputs: { olChange: "olChange", olChangeLayerGroup: "olChangeLayerGroup", olChangeSize: "olChangeSize", olChangeTarget: "olChangeTarget", olChangeView: "olChangeView", olClick: "olClick", dblClick: "dblClick", olError: "olError", loadEnd: "loadEnd", loadStart: "loadStart", moveEnd: "moveEnd", moveStart: "moveStart", pointerDrag: "pointerDrag", pointerMove: "pointerMove", olPostCompose: "olPostCompose", olPostRender: "olPostRender", olPreCompose: "olPreCompose", olPropertyChange: "olPropertyChange", postRender: "postRender", propertyChange: "propertyChange", singleClick: "singleClick" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 2, vars: 4, template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelement(0, "div");
            i0.ɵɵprojection(1);
        } if (rf & 2) {
            i0.ɵɵstyleProp("width", ctx.width)("height", ctx.height);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MapComponent, [{
        type: Component,
        args: [{
                selector: 'aol-map',
                template: `
    <div [style.width]="width" [style.height]="height"></div>
    <ng-content></ng-content>
  `,
            }]
    }], () => [{ type: i0.ElementRef }], { width: [{
            type: Input
        }], height: [{
            type: Input
        }], pixelRatio: [{
            type: Input
        }], keyboardEventTarget: [{
            type: Input
        }], loadTilesWhileAnimating: [{
            type: Input
        }], loadTilesWhileInteracting: [{
            type: Input
        }], logo: [{
            type: Input
        }], renderer: [{
            type: Input
        }], olChange: [{
            type: Output
        }], olChangeLayerGroup: [{
            type: Output
        }], olChangeSize: [{
            type: Output
        }], olChangeTarget: [{
            type: Output
        }], olChangeView: [{
            type: Output
        }], olClick: [{
            type: Output
        }], dblClick: [{
            type: Output
        }], olError: [{
            type: Output
        }], loadEnd: [{
            type: Output
        }], loadStart: [{
            type: Output
        }], moveEnd: [{
            type: Output
        }], moveStart: [{
            type: Output
        }], pointerDrag: [{
            type: Output
        }], pointerMove: [{
            type: Output
        }], olPostCompose: [{
            type: Output
        }], olPostRender: [{
            type: Output
        }], olPreCompose: [{
            type: Output
        }], olPropertyChange: [{
            type: Output
        }], postRender: [{
            type: Output
        }], propertyChange: [{
            type: Output
        }], singleClick: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MapComponent, { className: "MapComponent", filePath: "lib/map.component.ts", lineNumber: 29 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpYnMvbmctb3BlbmxheWVycy9zcmMvbGliL21hcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFHVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksR0FJYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sSUFBSSxDQUFDOzs7QUFpQnpCLE1BQU0sT0FBTyxZQUFZO0lBb0V2QixZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBbEVwQyxVQUFLLEdBQUcsTUFBTSxDQUFDO1FBRWYsV0FBTSxHQUFHLE1BQU0sQ0FBQztRQWVoQixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQztRQUV6Qyx1QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBZSxDQUFDO1FBRXJELGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQWUsQ0FBQztRQUUvQyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFlLENBQUM7UUFFakQsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBZSxDQUFDO1FBRS9DLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBK0IsQ0FBQztRQUUxRCxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQStCLENBQUM7UUFFM0QsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7UUFFeEMsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFZLENBQUM7UUFFdkMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFZLENBQUM7UUFFekMsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFZLENBQUM7UUFFdkMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFZLENBQUM7UUFFekMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBK0IsQ0FBQztRQUU5RCxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUErQixDQUFDO1FB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QkFETCxLQUFLO1lBR04sVUFBVTtrQkFEVCxLQUFLO1lBR04sbUJBQW1CO2tCQURsQixLQUFLO1lBR04sdUJBQXVCO2tCQUR0QixLQUFLO1lBR04seUJBQXlCO2tCQUR4QixLQUFLO1lBR04sSUFBSTtrQkFESCxLQUFLO1lBR04sUUFBUTtrQkFEUCxLQUFLO1lBSU4sUUFBUTtrQkFEUCxNQUFNO1lBR1Asa0JBQWtCO2tCQURqQixNQUFNO1lBR1AsWUFBWTtrQkFEWCxNQUFNO1lBR1AsY0FBYztrQkFEYixNQUFNO1lBR1AsWUFBWTtrQkFEWCxNQUFNO1lBR1AsT0FBTztrQkFETixNQUFNO1lBR1AsUUFBUTtrQkFEUCxNQUFNO1lBR1AsT0FBTztrQkFETixNQUFNO1lBR1AsT0FBTztrQkFETixNQUFNO1lBR1AsU0FBUztrQkFEUixNQUFNO1lBR1AsT0FBTztrQkFETixNQUFNO1lBR1AsU0FBUztrQkFEUixNQUFNO1lBR1AsV0FBVztrQkFEVixNQUFNO1lBR1AsV0FBVztrQkFEVixNQUFNO1lBR1AsYUFBYTtrQkFEWixNQUFNO1lBR1AsWUFBWTtrQkFEWCxNQUFNO1lBR1AsWUFBWTtrQkFEWCxNQUFNO1lBR1AsZ0JBQWdCO2tCQURmLE1BQU07WUFHUCxVQUFVO2tCQURULE1BQU07WUFHUCxjQUFjO2tCQURiLE1BQU07WUFHUCxXQUFXO2tCQURWLE1BQU07O2tGQTFESSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgT25DaGFuZ2VzLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hcCB9IGZyb20gJ29sJztcbmltcG9ydCBNYXBCcm93c2VyRXZlbnQgZnJvbSAnb2wvTWFwQnJvd3NlckV2ZW50JztcbmltcG9ydCBNYXBFdmVudCBmcm9tICdvbC9NYXBFdmVudCc7XG5pbXBvcnQgeyBPYmplY3RFdmVudCB9IGZyb20gJ29sL09iamVjdCc7XG5pbXBvcnQgUmVuZGVyRXZlbnQgZnJvbSAnb2wvcmVuZGVyL0V2ZW50JztcbmltcG9ydCB7IENvbnRyb2wgfSBmcm9tICdvbC9jb250cm9sJztcbmltcG9ydCB7IEludGVyYWN0aW9uIH0gZnJvbSAnb2wvaW50ZXJhY3Rpb24nO1xuaW1wb3J0IHsgRHJhd0V2ZW50IH0gZnJvbSAnb2wvaW50ZXJhY3Rpb24vRHJhdyc7XG5pbXBvcnQgQmFzZUV2ZW50IGZyb20gJ29sL2V2ZW50cy9FdmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1tYXAnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgW3N0eWxlLndpZHRoXT1cIndpZHRoXCIgW3N0eWxlLmhlaWdodF09XCJoZWlnaHRcIj48L2Rpdj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE1hcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KClcbiAgd2lkdGggPSAnMTAwJSc7XG4gIEBJbnB1dCgpXG4gIGhlaWdodCA9ICcxMDAlJztcbiAgQElucHV0KClcbiAgcGl4ZWxSYXRpbzogbnVtYmVyO1xuICBASW5wdXQoKVxuICBrZXlib2FyZEV2ZW50VGFyZ2V0OiBIVE1MRWxlbWVudCB8IHN0cmluZztcbiAgQElucHV0KClcbiAgbG9hZFRpbGVzV2hpbGVBbmltYXRpbmc6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIGxvYWRUaWxlc1doaWxlSW50ZXJhY3Rpbmc6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIGxvZ286IHN0cmluZyB8IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHJlbmRlcmVyOiAnY2FudmFzJyB8ICd3ZWJnbCc7XG5cbiAgQE91dHB1dCgpXG4gIG9sQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxEcmF3RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKVxuICBvbENoYW5nZUxheWVyR3JvdXAgPSBuZXcgRXZlbnRFbWl0dGVyPE9iamVjdEV2ZW50PigpO1xuICBAT3V0cHV0KClcbiAgb2xDaGFuZ2VTaXplID0gbmV3IEV2ZW50RW1pdHRlcjxPYmplY3RFdmVudD4oKTtcbiAgQE91dHB1dCgpXG4gIG9sQ2hhbmdlVGFyZ2V0ID0gbmV3IEV2ZW50RW1pdHRlcjxPYmplY3RFdmVudD4oKTtcbiAgQE91dHB1dCgpXG4gIG9sQ2hhbmdlVmlldyA9IG5ldyBFdmVudEVtaXR0ZXI8T2JqZWN0RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKVxuICBvbENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBCcm93c2VyRXZlbnQ8TW91c2VFdmVudD4+KCk7XG4gIEBPdXRwdXQoKVxuICBkYmxDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TWFwQnJvd3NlckV2ZW50PE1vdXNlRXZlbnQ+PigpO1xuICBAT3V0cHV0KClcbiAgb2xFcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8QmFzZUV2ZW50PigpO1xuICBAT3V0cHV0KClcbiAgbG9hZEVuZCA9IG5ldyBFdmVudEVtaXR0ZXI8TWFwRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKVxuICBsb2FkU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcEV2ZW50PigpO1xuICBAT3V0cHV0KClcbiAgbW92ZUVuZCA9IG5ldyBFdmVudEVtaXR0ZXI8TWFwRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKVxuICBtb3ZlU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcEV2ZW50PigpO1xuICBAT3V0cHV0KClcbiAgcG9pbnRlckRyYWcgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcEJyb3dzZXJFdmVudDxNb3VzZUV2ZW50Pj4oKTtcbiAgQE91dHB1dCgpXG4gIHBvaW50ZXJNb3ZlID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBCcm93c2VyRXZlbnQ8TW91c2VFdmVudD4+KCk7XG4gIEBPdXRwdXQoKVxuICBvbFBvc3RDb21wb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxSZW5kZXJFdmVudD4oKTtcbiAgQE91dHB1dCgpXG4gIG9sUG9zdFJlbmRlciA9IG5ldyBFdmVudEVtaXR0ZXI8UmVuZGVyRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKVxuICBvbFByZUNvbXBvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPFJlbmRlckV2ZW50PigpO1xuICBAT3V0cHV0KClcbiAgb2xQcm9wZXJ0eUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8T2JqZWN0RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKVxuICBwb3N0UmVuZGVyID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBFdmVudD4oKTtcbiAgQE91dHB1dCgpXG4gIHByb3BlcnR5Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxPYmplY3RFdmVudD4oKTtcbiAgQE91dHB1dCgpXG4gIHNpbmdsZUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBCcm93c2VyRXZlbnQ8TW91c2VFdmVudD4+KCk7XG5cbiAgcHVibGljIGluc3RhbmNlOiBNYXA7XG4gIHB1YmxpYyBjb21wb25lbnRUeXBlID0gJ21hcCc7XG5cbiAgLy8gd2UgcGFzcyBlbXB0eSBhcnJheXMgdG8gbm90IGdldCBkZWZhdWx0IGNvbnRyb2xzL2ludGVyYWN0aW9ucyBiZWNhdXNlIHdlIGhhdmUgb3VyIG93biBkaXJlY3RpdmVzXG4gIGNvbnRyb2xzOiBDb250cm9sW10gPSBbXTtcbiAgaW50ZXJhY3Rpb25zOiBJbnRlcmFjdGlvbltdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBob3N0OiBFbGVtZW50UmVmKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdjcmVhdGluZyBvbC5NYXAgaW5zdGFuY2Ugd2l0aDonLCB0aGlzKTtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IE1hcCh0aGlzKTtcbiAgICB0aGlzLmluc3RhbmNlLnNldFRhcmdldCh0aGlzLmhvc3QubmF0aXZlRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbignY2hhbmdlJywgKGV2ZW50OiBEcmF3RXZlbnQpID0+IHRoaXMub2xDaGFuZ2UuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2NoYW5nZTpsYXllcmdyb3VwJywgKGV2ZW50OiBPYmplY3RFdmVudCkgPT4gdGhpcy5vbENoYW5nZUxheWVyR3JvdXAuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2NoYW5nZTpzaXplJywgKGV2ZW50OiBPYmplY3RFdmVudCkgPT4gdGhpcy5vbENoYW5nZVNpemUuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2NoYW5nZTp0YXJnZXQnLCAoZXZlbnQ6IE9iamVjdEV2ZW50KSA9PiB0aGlzLm9sQ2hhbmdlVGFyZ2V0LmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdjaGFuZ2U6dmlldycsIChldmVudDogT2JqZWN0RXZlbnQpID0+IHRoaXMub2xDaGFuZ2VWaWV3LmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdjbGljaycsIChldmVudDogTWFwQnJvd3NlckV2ZW50PE1vdXNlRXZlbnQ+KSA9PiB0aGlzLm9sQ2xpY2suZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2RibGNsaWNrJywgKGV2ZW50OiBNYXBCcm93c2VyRXZlbnQ8TW91c2VFdmVudD4pID0+IHRoaXMuZGJsQ2xpY2suZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2Vycm9yJywgKGV2ZW50OiBCYXNlRXZlbnQpID0+IHRoaXMub2xFcnJvci5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbignbG9hZGVuZCcsIChldmVudDogTWFwRXZlbnQpID0+IHRoaXMubG9hZEVuZC5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbignbG9hZHN0YXJ0JywgKGV2ZW50OiBNYXBFdmVudCkgPT4gdGhpcy5sb2FkU3RhcnQuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ21vdmVlbmQnLCAoZXZlbnQ6IE1hcEV2ZW50KSA9PiB0aGlzLm1vdmVFbmQuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ21vdmVzdGFydCcsIChldmVudDogTWFwRXZlbnQpID0+IHRoaXMubW92ZVN0YXJ0LmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdwb2ludGVyZHJhZycsIChldmVudDogTWFwQnJvd3NlckV2ZW50PE1vdXNlRXZlbnQ+KSA9PiB0aGlzLnBvaW50ZXJEcmFnLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdwb2ludGVybW92ZScsIChldmVudDogTWFwQnJvd3NlckV2ZW50PE1vdXNlRXZlbnQ+KSA9PiB0aGlzLnBvaW50ZXJNb3ZlLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdwb3N0Y29tcG9zZScsIChldmVudDogUmVuZGVyRXZlbnQpID0+IHRoaXMub2xQb3N0Q29tcG9zZS5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbigncG9zdHJlbmRlcicsIChldmVudDogUmVuZGVyRXZlbnQpID0+IHRoaXMub2xQb3N0UmVuZGVyLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdwb3N0cmVuZGVyJywgKGV2ZW50OiBNYXBFdmVudCkgPT4gdGhpcy5wb3N0UmVuZGVyLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdwcmVjb21wb3NlJywgKGV2ZW50OiBSZW5kZXJFdmVudCkgPT4gdGhpcy5vbFByZUNvbXBvc2UuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3Byb3BlcnR5Y2hhbmdlJywgKGV2ZW50OiBPYmplY3RFdmVudCkgPT4gdGhpcy5vbFByb3BlcnR5Q2hhbmdlLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdzaW5nbGVjbGljaycsIChldmVudDogTWFwQnJvd3NlckV2ZW50PE1vdXNlRXZlbnQ+KSA9PiB0aGlzLnNpbmdsZUNsaWNrLmVtaXQoZXZlbnQpKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzOiB7IFtpbmRleDogc3RyaW5nXTogYW55IH0gPSB7fTtcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9yIChjb25zdCBrZXkgaW4gY2hhbmdlcykge1xuICAgICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBwcm9wZXJ0aWVzW2tleV0gPSBjaGFuZ2VzW2tleV0uY3VycmVudFZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZygnY2hhbmdlcyBkZXRlY3RlZCBpbiBhb2wtbWFwLCBzZXR0aW5nIG5ldyBwcm9wZXJ0aWVzOiAnLCBwcm9wZXJ0aWVzKTtcbiAgICB0aGlzLmluc3RhbmNlLnNldFByb3BlcnRpZXMocHJvcGVydGllcywgZmFsc2UpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuaW5zdGFuY2UudXBkYXRlU2l6ZSgpO1xuICB9XG59XG4iXX0=