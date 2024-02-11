import { Component, Input, EventEmitter, Output } from '@angular/core';
import View from 'ol/View';
import * as i0 from "@angular/core";
import * as i1 from "./map.component";
const _c0 = ["*"];
export class ViewComponent {
    constructor(host) {
        this.host = host;
        this.zoomAnimation = false;
        this.olChange = new EventEmitter();
        this.changeCenter = new EventEmitter();
        this.changeResolution = new EventEmitter();
        this.changeRotation = new EventEmitter();
        this.olError = new EventEmitter();
        this.propertyChange = new EventEmitter();
        this.componentType = 'view';
    }
    ngOnInit() {
        // console.log('creating ol.View instance with: ', this);
        this.instance = new View(this);
        this.host.instance.setView(this.instance);
        this.instance.on('change', (event) => this.olChange.emit(event));
        this.instance.on('change:center', (event) => this.changeCenter.emit(event));
        this.instance.on('change:resolution', (event) => this.changeResolution.emit(event));
        this.instance.on('change:rotation', (event) => this.changeRotation.emit(event));
        this.instance.on('error', (event) => this.olError.emit(event));
        this.instance.on('propertychange', (event) => this.propertyChange.emit(event));
    }
    ngOnChanges(changes) {
        const properties = {};
        if (!this.instance) {
            return;
        }
        for (const key in changes) {
            if (changes.hasOwnProperty(key)) {
                switch (key) {
                    case 'zoom':
                        /** Work-around: setting the zoom via setProperties does not work. */
                        if (this.zoomAnimation) {
                            this.instance.animate({ zoom: changes[key].currentValue });
                        }
                        else {
                            this.instance.setZoom(changes[key].currentValue);
                        }
                        break;
                    case 'projection':
                        this.instance = new View(this);
                        this.host.instance.setView(this.instance);
                        break;
                    case 'center':
                        /** Work-around: setting the center via setProperties does not work. */
                        this.instance.setCenter(changes[key].currentValue);
                        break;
                    default:
                        break;
                }
                properties[key] = changes[key].currentValue;
            }
        }
        // console.log('changes detected in aol-view, setting new properties: ', properties);
        this.instance.setProperties(properties, false);
    }
    ngOnDestroy() {
        // console.log('removing aol-view');
    }
    static { this.ɵfac = function ViewComponent_Factory(t) { return new (t || ViewComponent)(i0.ɵɵdirectiveInject(i1.MapComponent)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ViewComponent, selectors: [["aol-view"]], inputs: { constrainRotation: "constrainRotation", enableRotation: "enableRotation", extent: "extent", maxResolution: "maxResolution", minResolution: "minResolution", maxZoom: "maxZoom", minZoom: "minZoom", resolution: "resolution", resolutions: "resolutions", rotation: "rotation", zoom: "zoom", zoomFactor: "zoomFactor", center: "center", projection: "projection", constrainOnlyCenter: "constrainOnlyCenter", smoothExtentConstraint: "smoothExtentConstraint", constrainResolution: "constrainResolution", smoothResolutionConstraint: "smoothResolutionConstraint", showFullExtent: "showFullExtent", multiWorld: "multiWorld", zoomAnimation: "zoomAnimation" }, outputs: { olChange: "olChange", changeCenter: "changeCenter", changeResolution: "changeResolution", changeRotation: "changeRotation", olError: "olError", propertyChange: "propertyChange" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function ViewComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ViewComponent, [{
        type: Component,
        args: [{
                selector: 'aol-view',
                template: ` <ng-content></ng-content> `,
            }]
    }], () => [{ type: i1.MapComponent }], { constrainRotation: [{
            type: Input
        }], enableRotation: [{
            type: Input
        }], extent: [{
            type: Input
        }], maxResolution: [{
            type: Input
        }], minResolution: [{
            type: Input
        }], maxZoom: [{
            type: Input
        }], minZoom: [{
            type: Input
        }], resolution: [{
            type: Input
        }], resolutions: [{
            type: Input
        }], rotation: [{
            type: Input
        }], zoom: [{
            type: Input
        }], zoomFactor: [{
            type: Input
        }], center: [{
            type: Input
        }], projection: [{
            type: Input
        }], constrainOnlyCenter: [{
            type: Input
        }], smoothExtentConstraint: [{
            type: Input
        }], constrainResolution: [{
            type: Input
        }], smoothResolutionConstraint: [{
            type: Input
        }], showFullExtent: [{
            type: Input
        }], multiWorld: [{
            type: Input
        }], zoomAnimation: [{
            type: Input
        }], olChange: [{
            type: Output
        }], changeCenter: [{
            type: Output
        }], changeResolution: [{
            type: Output
        }], changeRotation: [{
            type: Output
        }], olError: [{
            type: Output
        }], propertyChange: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ViewComponent, { className: "ViewComponent", filePath: "lib/view.component.ts", lineNumber: 14 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9saWJzL25nLW9wZW5sYXllcnMvc3JjL2xpYi92aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBK0MsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwSCxPQUFPLElBQUksTUFBTSxTQUFTLENBQUM7Ozs7QUFZM0IsTUFBTSxPQUFPLGFBQWE7SUE2RHhCLFlBQW9CLElBQWtCO1FBQWxCLFNBQUksR0FBSixJQUFJLENBQWM7UUFsQnRDLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBR3RCLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO1FBRXpDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQWUsQ0FBQztRQUUvQyxxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBZSxDQUFDO1FBRW5ELG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQWUsQ0FBQztRQUVqRCxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQztRQUV4QyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFlLENBQUM7UUFHMUMsa0JBQWEsR0FBRyxNQUFNLENBQUM7SUFFVyxDQUFDO0lBRTFDLFFBQVE7UUFDTix5REFBeUQ7UUFDekQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQWdCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLFFB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R04sTUFBTTtrQkFETCxLQUFLO1lBR04sYUFBYTtrQkFEWixLQUFLO1lBR04sYUFBYTtrQkFEWixLQUFLO1lBR04sT0FBTztrQkFETixLQUFLO1lBR04sT0FBTztrQkFETixLQUFLO1lBR04sVUFBVTtrQkFEVCxLQUFLO1lBR04sV0FBVztrQkFEVixLQUFLO1lBR04sUUFBUTtrQkFEUCxLQUFLO1lBR04sSUFBSTtrQkFESCxLQUFLO1lBR04sVUFBVTtrQkFEVCxLQUFLO1lBR04sTUFBTTtrQkFETCxLQUFLO1lBR04sVUFBVTtrQkFEVCxLQUFLO1lBR04sbUJBQW1CO2tCQURsQixLQUFLO1lBR04sc0JBQXNCO2tCQURyQixLQUFLO1lBR04sbUJBQW1CO2tCQURsQixLQUFLO1lBR04sMEJBQTBCO2tCQUR6QixLQUFLO1lBR04sY0FBYztrQkFEYixLQUFLO1lBR04sVUFBVTtrQkFEVCxLQUFLO1lBSU4sYUFBYTtrQkFEWixLQUFLO1lBSU4sUUFBUTtrQkFEUCxNQUFNO1lBR1AsWUFBWTtrQkFEWCxNQUFNO1lBR1AsZ0JBQWdCO2tCQURmLE1BQU07WUFHUCxjQUFjO2tCQURiLE1BQU07WUFHUCxPQUFPO2tCQUROLE1BQU07WUFHUCxjQUFjO2tCQURiLE1BQU07O2tGQXZESSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgU2ltcGxlQ2hhbmdlcywgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBWaWV3IGZyb20gJ29sL1ZpZXcnO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi9tYXAuY29tcG9uZW50JztcbmltcG9ydCB7IE9iamVjdEV2ZW50IH0gZnJvbSAnb2wvT2JqZWN0JztcbmltcG9ydCB7IEV4dGVudCB9IGZyb20gJ29sL2V4dGVudCc7XG5pbXBvcnQgeyBDb29yZGluYXRlIH0gZnJvbSAnb2wvY29vcmRpbmF0ZSc7XG5pbXBvcnQgeyBEcmF3RXZlbnQgfSBmcm9tICdvbC9pbnRlcmFjdGlvbi9EcmF3JztcbmltcG9ydCBCYXNlRXZlbnQgZnJvbSAnb2wvZXZlbnRzL0V2ZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLXZpZXcnLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG59KVxuZXhwb3J0IGNsYXNzIFZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgQElucHV0KClcbiAgY29uc3RyYWluUm90YXRpb246IGJvb2xlYW4gfCBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIGVuYWJsZVJvdGF0aW9uOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBleHRlbnQ6IEV4dGVudDtcbiAgQElucHV0KClcbiAgbWF4UmVzb2x1dGlvbjogbnVtYmVyO1xuICBASW5wdXQoKVxuICBtaW5SZXNvbHV0aW9uOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIG1heFpvb206IG51bWJlcjtcbiAgQElucHV0KClcbiAgbWluWm9vbTogbnVtYmVyO1xuICBASW5wdXQoKVxuICByZXNvbHV0aW9uOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHJlc29sdXRpb25zOiBudW1iZXJbXTtcbiAgQElucHV0KClcbiAgcm90YXRpb246IG51bWJlcjtcbiAgQElucHV0KClcbiAgem9vbTogbnVtYmVyO1xuICBASW5wdXQoKVxuICB6b29tRmFjdG9yOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIGNlbnRlcjogQ29vcmRpbmF0ZTtcbiAgQElucHV0KClcbiAgcHJvamVjdGlvbjogc3RyaW5nO1xuICBASW5wdXQoKVxuICBjb25zdHJhaW5Pbmx5Q2VudGVyOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBzbW9vdGhFeHRlbnRDb25zdHJhaW50OiBib29sZWFuO1xuICBASW5wdXQoKVxuICBjb25zdHJhaW5SZXNvbHV0aW9uOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBzbW9vdGhSZXNvbHV0aW9uQ29uc3RyYWludDogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgc2hvd0Z1bGxFeHRlbnQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIG11bHRpV29ybGQ6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgem9vbUFuaW1hdGlvbiA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKVxuICBvbENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhd0V2ZW50PigpO1xuICBAT3V0cHV0KClcbiAgY2hhbmdlQ2VudGVyID0gbmV3IEV2ZW50RW1pdHRlcjxPYmplY3RFdmVudD4oKTtcbiAgQE91dHB1dCgpXG4gIGNoYW5nZVJlc29sdXRpb24gPSBuZXcgRXZlbnRFbWl0dGVyPE9iamVjdEV2ZW50PigpO1xuICBAT3V0cHV0KClcbiAgY2hhbmdlUm90YXRpb24gPSBuZXcgRXZlbnRFbWl0dGVyPE9iamVjdEV2ZW50PigpO1xuICBAT3V0cHV0KClcbiAgb2xFcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8QmFzZUV2ZW50PigpO1xuICBAT3V0cHV0KClcbiAgcHJvcGVydHlDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE9iamVjdEV2ZW50PigpO1xuXG4gIHB1YmxpYyBpbnN0YW5jZTogVmlldztcbiAgcHVibGljIGNvbXBvbmVudFR5cGUgPSAndmlldyc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBob3N0OiBNYXBDb21wb25lbnQpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2NyZWF0aW5nIG9sLlZpZXcgaW5zdGFuY2Ugd2l0aDogJywgdGhpcyk7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBWaWV3KHRoaXMpO1xuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRWaWV3KHRoaXMuaW5zdGFuY2UpO1xuXG4gICAgdGhpcy5pbnN0YW5jZS5vbignY2hhbmdlJywgKGV2ZW50OiBEcmF3RXZlbnQpID0+IHRoaXMub2xDaGFuZ2UuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2NoYW5nZTpjZW50ZXInLCAoZXZlbnQ6IE9iamVjdEV2ZW50KSA9PiB0aGlzLmNoYW5nZUNlbnRlci5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbignY2hhbmdlOnJlc29sdXRpb24nLCAoZXZlbnQ6IE9iamVjdEV2ZW50KSA9PiB0aGlzLmNoYW5nZVJlc29sdXRpb24uZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2NoYW5nZTpyb3RhdGlvbicsIChldmVudDogT2JqZWN0RXZlbnQpID0+IHRoaXMuY2hhbmdlUm90YXRpb24uZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2Vycm9yJywgKGV2ZW50OiBCYXNlRXZlbnQpID0+IHRoaXMub2xFcnJvci5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbigncHJvcGVydHljaGFuZ2UnLCAoZXZlbnQ6IE9iamVjdEV2ZW50KSA9PiB0aGlzLnByb3BlcnR5Q2hhbmdlLmVtaXQoZXZlbnQpKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzOiB7IFtpbmRleDogc3RyaW5nXTogYW55IH0gPSB7fTtcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9yIChjb25zdCBrZXkgaW4gY2hhbmdlcykge1xuICAgICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgIGNhc2UgJ3pvb20nOlxuICAgICAgICAgICAgLyoqIFdvcmstYXJvdW5kOiBzZXR0aW5nIHRoZSB6b29tIHZpYSBzZXRQcm9wZXJ0aWVzIGRvZXMgbm90IHdvcmsuICovXG4gICAgICAgICAgICBpZiAodGhpcy56b29tQW5pbWF0aW9uKSB7XG4gICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UuYW5pbWF0ZSh7IHpvb206IGNoYW5nZXNba2V5XS5jdXJyZW50VmFsdWUgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlLnNldFpvb20oY2hhbmdlc1trZXldLmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdwcm9qZWN0aW9uJzpcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgVmlldyh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRWaWV3KHRoaXMuaW5zdGFuY2UpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnY2VudGVyJzpcbiAgICAgICAgICAgIC8qKiBXb3JrLWFyb3VuZDogc2V0dGluZyB0aGUgY2VudGVyIHZpYSBzZXRQcm9wZXJ0aWVzIGRvZXMgbm90IHdvcmsuICovXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLnNldENlbnRlcihjaGFuZ2VzW2tleV0uY3VycmVudFZhbHVlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBwcm9wZXJ0aWVzW2tleV0gPSBjaGFuZ2VzW2tleV0uY3VycmVudFZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZygnY2hhbmdlcyBkZXRlY3RlZCBpbiBhb2wtdmlldywgc2V0dGluZyBuZXcgcHJvcGVydGllczogJywgcHJvcGVydGllcyk7XG4gICAgdGhpcy5pbnN0YW5jZS5zZXRQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGZhbHNlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdyZW1vdmluZyBhb2wtdmlldycpO1xuICB9XG59XG4iXX0=