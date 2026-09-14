import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Collection, Feature } from 'ol';
import View from 'ol/View.js';
import { MapComponent } from './map.component';
import { ViewComponent } from './view.component';
import { LayerVectorComponent } from './layers/layervector.component';
import { SourceVectorComponent } from './sources/vector.component';
import { FeatureComponent } from './feature.component';
import { GeometryPolygonComponent } from './geom/geometrypolygon.component';
import { CollectionCoordinatesComponent } from './collectioncoordinates.component';
import { OverlayComponent } from './overlay.component';
import { ContentComponent } from './content.component';
import { DrawInteractionComponent } from './interactions/draw.component';
import { ModifyInteractionComponent } from './interactions/modify.component';

@Component({
  selector: 'aol-owned-test',
  imports: [
    MapComponent,
    ViewComponent,
    LayerVectorComponent,
    SourceVectorComponent,
    FeatureComponent,
    GeometryPolygonComponent,
    CollectionCoordinatesComponent,
    OverlayComponent,
    ContentComponent,
    DrawInteractionComponent,
    ModifyInteractionComponent,
  ],
  template: `
    <aol-map width="300px" height="200px">
      <aol-view [center]="[0, 0]" [zoom]="2" />
      @if (visible) {
        <aol-layer-vector [opacity]="opacity">
          <aol-source-vector>
            <aol-feature>
              <aol-geometry-polygon>
                <aol-collection-coordinates [coordinates]="coordinates" srid="EPSG:4326" />
              </aol-geometry-polygon>
            </aol-feature>
          </aol-source-vector>
        </aol-layer-vector>
        <aol-overlay><aol-content>Details</aol-content></aol-overlay>
        <aol-interaction-draw type="Point" />
        <aol-interaction-modify [features]="features" />
      }
    </aol-map>
  `,
})
class OwnedTestComponent {
  @Input() visible = true;
  @Input() opacity = 1;
  features = new Collection<Feature>();
  coordinates = [
    [
      [0, 0],
      [1, 0],
      [1, 1],
      [0, 0],
    ],
  ];
}

describe('Projected map resources', () => {
  let fixture: ComponentFixture<OwnedTestComponent>;
  let map: MapComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [OwnedTestComponent] }).compileComponents();
    fixture = TestBed.createComponent(OwnedTestComponent);
    fixture.detectChanges();
    map = fixture.debugElement.query(By.directive(MapComponent)).componentInstance;
  });
  afterEach(() => fixture.destroy());

  it('attaches and removes only the projected layers, overlays and interactions', () => {
    expect(map.instance.getLayers().getLength()).toBe(1);
    expect(map.instance.getOverlays().getLength()).toBe(1);
    expect(map.instance.getInteractions().getLength()).toBe(2);
    fixture.componentRef.setInput('visible', false);
    fixture.detectChanges();
    expect(map.instance.getLayers().getLength()).toBe(0);
    expect(map.instance.getOverlays().getLength()).toBe(0);
    expect(map.instance.getInteractions().getLength()).toBe(0);
  });

  it('updates layer opacity without recreating its instance', () => {
    const layer = map.instance.getLayers().item(0);
    fixture.componentRef.setInput('opacity', 0.4);
    fixture.detectChanges();
    expect(map.instance.getLayers().item(0)).toBe(layer);
    expect(layer.getOpacity()).toBe(0.4);
  });

  it('unsubscribes removed coordinate collections from subsequent view changes', () => {
    const geometry: GeometryPolygonComponent = fixture.debugElement.query(
      By.directive(GeometryPolygonComponent)
    ).componentInstance;
    fixture.componentRef.setInput('visible', false);
    fixture.detectChanges();
    const setCoordinates = spyOn(geometry.instance, 'setCoordinates');
    map.instance.setView(new View({ center: [0, 0], zoom: 2, projection: 'EPSG:4326' }));
    expect(setCoordinates).not.toHaveBeenCalled();
  });

  it('does not forward draw events from a removed interaction', () => {
    const draw: DrawInteractionComponent = fixture.debugElement.query(
      By.directive(DrawInteractionComponent)
    ).componentInstance;
    const emit = spyOn(draw.drawEnd, 'emit');
    fixture.componentRef.setInput('visible', false);
    fixture.detectChanges();
    draw.instance.dispatchEvent('drawend');
    expect(emit).not.toHaveBeenCalled();
  });

  it('does not forward modify events from a removed interaction', () => {
    const modify: ModifyInteractionComponent = fixture.debugElement.query(
      By.directive(ModifyInteractionComponent)
    ).componentInstance;
    const emit = spyOn(modify.olModifyEnd, 'emit');
    fixture.componentRef.setInput('visible', false);
    fixture.detectChanges();
    modify.instance.dispatchEvent('modifyend');
    expect(emit).not.toHaveBeenCalled();
  });
});
