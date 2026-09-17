import { Component, Input } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import Feature from 'ol/Feature.js';
import Point from 'ol/geom/Point.js';
import Style from 'ol/style/Style.js';
import { MapComponent } from '../map.component';
import { LayerGroupComponent } from './layergroup.component';
import { LayerTileComponent } from './layertile.component';
import { LayerVectorComponent } from './layervector.component';
import { LayerVectorTileComponent } from './layervectortile.component';

@Component({
  imports: [MapComponent, LayerGroupComponent, LayerTileComponent, LayerVectorComponent, LayerVectorTileComponent],
  template: `<aol-map>
    <aol-layer-group [opacity]="opacity" [visible]="visible" [minZoom]="minZoom" [maxZoom]="maxZoom">
      <aol-layer-group>
        @if (showChild) {
          <aol-layer-vector />
        }
      </aol-layer-group>
      <aol-layer-tile />
    </aol-layer-group>
    <aol-layer-vectortile [style]="style" [background]="background" />
  </aol-map>`,
})
class LayerTreeHost {
  @Input() opacity = 1;
  @Input() visible = true;
  @Input() minZoom = 0;
  @Input() maxZoom = 20;
  @Input() showChild = true;
  @Input() style = { 'circle-radius': 4, 'circle-fill-color': '#123456' };
  @Input() background = '#ffffff';
}

describe('Layer hierarchy and dynamic presentation', () => {
  it('attaches nested layers to their nearest group and removes only the disappearing child', () => {
    const fixture = TestBed.createComponent(LayerTreeHost);
    fixture.detectChanges();
    const map = fixture.debugElement.query(By.directive(MapComponent)).componentInstance as MapComponent;
    const groups = fixture.debugElement
      .queryAll(By.directive(LayerGroupComponent))
      .map((node) => node.componentInstance as LayerGroupComponent);
    const vector = fixture.debugElement.query(By.directive(LayerVectorComponent))
      .componentInstance as LayerVectorComponent;
    const tile = fixture.debugElement.query(By.directive(LayerTileComponent)).componentInstance as LayerTileComponent;
    expect(map.instance.getLayers().getLength()).toBe(2);
    expect(groups[0].instance.getLayers().getArray()).toEqual([groups[1].instance, tile.instance]);
    expect(groups[1].instance.getLayers().getArray()).toEqual([vector.instance]);
    fixture.componentRef.setInput('showChild', false);
    fixture.detectChanges();
    expect(groups[1].instance.getLayers().getLength()).toBe(0);
    expect(groups[0].instance.getLayers().getArray()).toEqual([groups[1].instance, tile.instance]);
    fixture.destroy();
  });

  it('updates group visibility, opacity and zoom constraints without recreating the layer tree', () => {
    const fixture = TestBed.createComponent(LayerTreeHost);
    fixture.detectChanges();
    const group = fixture.debugElement.query(By.directive(LayerGroupComponent))
      .componentInstance as LayerGroupComponent;
    const children = group.instance.getLayers().getArray().slice();
    fixture.componentRef.setInput('opacity', 0.4);
    fixture.componentRef.setInput('visible', false);
    fixture.componentRef.setInput('minZoom', 3);
    fixture.componentRef.setInput('maxZoom', 12);
    fixture.detectChanges();
    expect(group.instance.getOpacity()).toBe(0.4);
    expect(group.instance.getVisible()).toBeFalse();
    expect(group.instance.getMinZoom()).toBe(3);
    expect(group.instance.getMaxZoom()).toBe(12);
    expect(group.instance.getLayers().getArray()).toEqual(children);
    fixture.destroy();
  });

  it('updates vector-tile flat styles and background through the renderer setters', () => {
    const fixture = TestBed.createComponent(LayerTreeHost);
    fixture.detectChanges();
    const component = fixture.debugElement.query(By.directive(LayerVectorTileComponent))
      .componentInstance as LayerVectorTileComponent;
    const original = component.instance;
    fixture.componentRef.setInput('style', { 'circle-radius': 12, 'circle-fill-color': '#abcdef' });
    fixture.componentRef.setInput('background', '#123456');
    fixture.detectChanges();
    const styles = original.getStyleFunction()(new Feature(new Point([0, 0])), 1) as Style[];
    expect(styles[0].getImage()['getRadius']()).toBe(12);
    expect(original.getBackground()).toBe('#123456');
    expect(component.instance).toBe(original);
    fixture.destroy();
  });
});
