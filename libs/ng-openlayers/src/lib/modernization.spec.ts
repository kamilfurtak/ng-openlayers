import { Component, Input, NgZone, provideZoneChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import Collection from 'ol/Collection.js';
import Feature from 'ol/Feature.js';
import OSM from 'ol/source/OSM.js';
import VectorSource from 'ol/source/Vector.js';
import Point from 'ol/geom/Point.js';
import { FlatStyleLike } from 'ol/style/flat.js';
import Style from 'ol/style/Style.js';
import { MapComponent } from './map.component';
import { ViewComponent } from './view.component';
import { LayerTileComponent } from './layers/layertile.component';
import { LayerVectorComponent } from './layers/layervector.component';
import { SourceOsmComponent } from './sources/osm.component';
import { SourceVectorComponent } from './sources/vector.component';
import { SourceClusterComponent } from './sources/cluster.component';
import { StyleComponent } from './styles/style.component';
import { StylesComponent } from './styles/styles.component';
import { DrawInteractionComponent } from './interactions/draw.component';
import { SnapInteractionComponent } from './interactions/snap.component';
import { SelectInteractionComponent } from './interactions/select.component';
import { TranslateInteractionComponent } from './interactions/translate.component';

@Component({ selector: 'aol-source-fragment', imports: [SourceVectorComponent], template: '<aol-source-vector />' })
class SourceFragmentComponent {}

@Component({
  selector: 'aol-modern-test',
  imports: [
    MapComponent,
    ViewComponent,
    LayerTileComponent,
    LayerVectorComponent,
    SourceOsmComponent,
    SourceVectorComponent,
    SourceFragmentComponent,
    SourceClusterComponent,
    StylesComponent,
    StyleComponent,
    DrawInteractionComponent,
    SnapInteractionComponent,
    SelectInteractionComponent,
    TranslateInteractionComponent,
  ],
  template: `
    <aol-map width="300px" height="200px">
      <aol-view [zoom]="2" [center]="[0, 0]" />
      <aol-layer-tile><aol-source-osm [url]="url" /></aol-layer-tile>
      <aol-layer-vector [style]="style" [postrender]="renderCallback">
        @if (visible) {
          <aol-source-fragment />
        }
      </aol-layer-vector>
      <aol-layer-vector>
        <aol-source-cluster [minDistance]="minDistance"><aol-source-vector /></aol-source-cluster>
        <aol-styles
          ><aol-style [zIndex]="1" />
          @if (extraStyle) {
            <aol-style [zIndex]="2" />
          }
        </aol-styles>
      </aol-layer-vector>
      <aol-interaction-draw type="LineString" />
      <aol-interaction-snap [features]="features" />
      <aol-interaction-select [features]="features" />
      <aol-interaction-translate [features]="features" />
    </aol-map>
    <aol-map width="300px" height="200px"
      ><aol-layer-vector><aol-source-fragment /></aol-layer-vector
    ></aol-map>
  `,
})
class ModernHostComponent {
  @Input() visible = true;
  @Input() extraStyle = false;
  @Input() url = '/initial/{z}/{x}/{y}.png';
  @Input() minDistance = 0;
  @Input() style: FlatStyleLike = { 'circle-radius': 4, 'circle-fill-color': '#123456' };
  @Input() renderCallback: (() => void) | undefined = undefined;
  readonly features = new Collection<Feature>();
}

describe('Modern OpenLayers contracts', () => {
  let fixture: ComponentFixture<ModernHostComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [ModernHostComponent] });
    fixture = TestBed.createComponent(ModernHostComponent);
    fixture.detectChanges();
  });
  afterEach(() => fixture.destroy());

  it('resolves sources through custom component boundaries and isolates sibling maps', () => {
    const layers = fixture.debugElement
      .queryAll(By.directive(LayerVectorComponent))
      .map((node) => node.componentInstance as LayerVectorComponent);
    const sources = fixture.debugElement
      .queryAll(By.directive(SourceVectorComponent))
      .map((node) => node.componentInstance as SourceVectorComponent);
    expect(layers[0].instance.getSource()).toBe(sources[0].instance);
    expect(layers[2].instance.getSource()).toBe(sources[2].instance);
    expect(layers[0].instance.getSource()).not.toBe(layers[2].instance.getSource());
  });

  it('updates OSM URLs in place without changing its subtype or losing listeners', () => {
    const source = fixture.debugElement.query(By.directive(SourceOsmComponent)).componentInstance as SourceOsmComponent;
    const original = source.instance;
    const emit = spyOn(source.tileLoadEnd, 'emit');
    fixture.componentRef.setInput('url', '/new/{z}/{x}/{y}.png');
    fixture.detectChanges();
    expect(source.instance).toBe(original);
    expect(source.instance instanceof OSM).toBeTrue();
    expect(source.instance.getUrls()).toEqual(['/new/{z}/{x}/{y}.png']);
    original.dispatchEvent('tileloadend');
    expect(emit).toHaveBeenCalledTimes(1);
    fixture.destroy();
    original.dispatchEvent('tileloadend');
    expect(emit).toHaveBeenCalledTimes(1);
  });

  it('does not detach a replacement source when the previous component is removed', () => {
    const layer = fixture.debugElement.query(By.directive(LayerVectorComponent))
      .componentInstance as LayerVectorComponent;
    const replacement = new VectorSource();
    layer.instance.setSource(replacement);
    fixture.componentRef.setInput('visible', false);
    fixture.detectChanges();
    expect(layer.instance.getSource()).toBe(replacement);
    replacement.dispose();
  });

  it('updates flat styles without recreating the vector layer', () => {
    const component = fixture.debugElement.query(By.directive(LayerVectorComponent))
      .componentInstance as LayerVectorComponent;
    const layer = component.instance;
    fixture.componentRef.setInput('style', { 'circle-radius': 8, 'circle-fill-color': '#654321' });
    fixture.detectChanges();
    const styles = layer.getStyleFunction()(new Feature(new Point([0, 0])), 1) as Style[];
    expect(styles[0].getImage().getScale()).toBe(1);
    expect(component.instance).toBe(layer);
    expect(styles[0].getImage()['getRadius']()).toBe(8);
  });

  it('rebinds and removes render callbacks safely', () => {
    const layer = fixture.debugElement.query(By.directive(LayerVectorComponent))
      .componentInstance as LayerVectorComponent;
    const first = jasmine.createSpy('first');
    const second = jasmine.createSpy('second');
    fixture.componentRef.setInput('renderCallback', first);
    fixture.detectChanges();
    layer.instance.dispatchEvent('postrender');
    expect(first).toHaveBeenCalledTimes(1);
    fixture.componentRef.setInput('renderCallback', second);
    fixture.detectChanges();
    layer.instance.dispatchEvent('postrender');
    expect(first).toHaveBeenCalledTimes(1);
    expect(second).toHaveBeenCalledTimes(1);
    fixture.componentRef.setInput('renderCallback', undefined);
    fixture.detectChanges();
    layer.instance.dispatchEvent('postrender');
    expect(second).toHaveBeenCalledTimes(1);
  });

  it('recomposes styles when a style enters or leaves an Angular control-flow block', () => {
    const layer = fixture.debugElement.queryAll(By.directive(LayerVectorComponent))[1]
      .componentInstance as LayerVectorComponent;
    expect((layer.instance.getStyle() as Style[]).length).toBe(1);
    fixture.componentRef.setInput('extraStyle', true);
    fixture.detectChanges();
    expect((layer.instance.getStyle() as Style[]).map((style) => style.getZIndex())).toEqual([1, 2]);
    fixture.componentRef.setInput('extraStyle', false);
    fixture.detectChanges();
    expect((layer.instance.getStyle() as Style[]).map((style) => style.getZIndex())).toEqual([1]);
  });

  it('updates cluster spacing and detaches its wrapped source on destruction', () => {
    const cluster = fixture.debugElement.query(By.directive(SourceClusterComponent))
      .componentInstance as SourceClusterComponent;
    fixture.componentRef.setInput('minDistance', 12);
    fixture.detectChanges();
    expect(cluster.instance.getMinDistance()).toBe(12);
    fixture.destroy();
    expect(cluster.instance.getSource()).toBeNull();
  });

  it('exposes both draw-abort names for an actual aborted sketch', () => {
    const draw = fixture.debugElement.query(By.directive(DrawInteractionComponent))
      .componentInstance as DrawInteractionComponent;
    const legacy = jasmine.createSpy('legacy');
    const modern = jasmine.createSpy('modern');
    draw.olDrawAbort.subscribe(legacy);
    draw.drawAbort.subscribe(modern);
    draw.instance.appendCoordinates([
      [0, 0],
      [1, 1],
    ]);
    draw.instance.abortDrawing();
    expect(legacy).toHaveBeenCalledTimes(1);
    expect(modern).toHaveBeenCalledOnceWith(legacy.calls.first().args[0]);
  });

  it('does not retain snap, select and translate outputs after destruction', () => {
    const snap = fixture.debugElement.query(By.directive(SnapInteractionComponent))
      .componentInstance as SnapInteractionComponent;
    const select = fixture.debugElement.query(By.directive(SelectInteractionComponent))
      .componentInstance as SelectInteractionComponent;
    const translate = fixture.debugElement.query(By.directive(TranslateInteractionComponent))
      .componentInstance as TranslateInteractionComponent;
    const emits = [spyOn(snap.snap, 'emit'), spyOn(select.olSelect, 'emit'), spyOn(translate.translateEnd, 'emit')];
    fixture.destroy();
    snap.instance.dispatchEvent('snap');
    select.instance.dispatchEvent('select');
    translate.instance.dispatchEvent('translateend');
    for (const emit of emits) expect(emit).not.toHaveBeenCalled();
  });
});

describe('Angular zone boundary', () => {
  it('creates the renderer outside Angular and enters Angular only for subscribed map outputs', () => {
    TestBed.configureTestingModule({ imports: [MapComponent], providers: [provideZoneChangeDetection()] });
    const fixture = TestBed.createComponent(MapComponent);
    const zone = TestBed.inject(NgZone);
    const outside = spyOn(zone, 'runOutsideAngular').and.callThrough();
    fixture.detectChanges();
    expect(outside).toHaveBeenCalled();
    const enter = spyOn(zone, 'run').and.callThrough();
    const map = fixture.componentInstance;
    zone.runOutsideAngular(() => map.instance.dispatchEvent('pointermove'));
    expect(enter).not.toHaveBeenCalled();
    let inside = false;
    map.pointerMove.subscribe(() => (inside = NgZone.isInAngularZone()));
    zone.runOutsideAngular(() => map.instance.dispatchEvent('pointermove'));
    expect(inside).toBeTrue();
    const property = jasmine.createSpy('property');
    const complete = jasmine.createSpy('complete');
    map.propertyChange.subscribe(property);
    map.renderComplete.subscribe(complete);
    map.instance.dispatchEvent('propertychange');
    map.instance.dispatchEvent('rendercomplete');
    expect(property).toHaveBeenCalledTimes(1);
    expect(complete).toHaveBeenCalledTimes(1);
    fixture.destroy();
  });
});
