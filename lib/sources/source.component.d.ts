import { OnDestroy } from '@angular/core';
import Source from 'ol/source/Source';
import { LayerComponent } from '../layers/layer.component';
import * as i0 from "@angular/core";
export declare abstract class SourceComponent implements OnDestroy {
    protected host: LayerComponent;
    attributions: any;
    instance: Source;
    componentType: string;
    protected constructor(host: LayerComponent);
    ngOnDestroy(): void;
    protected register(s: Source): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SourceComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SourceComponent, never, never, { "attributions": { "alias": "attributions"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=source.component.d.ts.map