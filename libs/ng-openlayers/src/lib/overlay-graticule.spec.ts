import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Positioning } from 'ol/Overlay.js';
import { fromLonLat } from 'ol/proj.js';
import View from 'ol/View.js';
import Stroke from 'ol/style/Stroke.js';
import { MapComponent } from './map.component';
import { ViewComponent } from './view.component';
import { OverlayComponent } from './overlay.component';
import { ContentComponent } from './content.component';
import { CoordinateComponent } from './coordinate.component';
import { GraticuleComponent } from './graticule.component';

@Component({
  selector: 'aol-overlay-test',
  imports: [MapComponent, ViewComponent, OverlayComponent, ContentComponent, CoordinateComponent, GraticuleComponent],
  template: `
    <aol-map width="300px" height="200px">
      <aol-view [center]="[0, 0]" [zoom]="2" />
      @if (visible) {
        <aol-overlay
          id="details"
          [offset]="offset"
          [positioning]="positioning"
          [autoPan]="true"
          [autoPanAnimation]="animation"
          [autoPanMargin]="40"
        >
          <aol-content><span>Location details</span></aol-content>
          <aol-coordinate [x]="longitude" [y]="50" srid="EPSG:4326" />
        </aol-overlay>
        <aol-graticule [showLabels]="labels" [strokeStyle]="stroke" [lonLabelPosition]="0.8" />
      }
    </aol-map>
  `,
})
class OverlayHostComponent {
  @Input() visible = true;
  @Input() longitude = 20;
  @Input() offset = [0, 10];
  @Input() positioning: Positioning = 'bottom-center';
  @Input() labels = false;
  readonly animation = { duration: 0 };
  readonly stroke = new Stroke({ color: '#123456', width: 3 });
}

describe('Overlay and graticule lifecycle', () => {
  let fixture: ComponentFixture<OverlayHostComponent>;
  let map: MapComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [OverlayHostComponent] });
    fixture = TestBed.createComponent(OverlayHostComponent);
    fixture.detectChanges();
    map = fixture.debugElement.query(By.directive(MapComponent)).componentInstance;
  });
  afterEach(() => fixture.destroy());

  it('projects overlay positions and updates placement without losing projected content', () => {
    const overlay = map.instance.getOverlayById('details');
    expect(overlay.getElement().textContent).toBe('Location details');
    expect(overlay.getPosition()).toEqual(fromLonLat([20, 50]));
    fixture.componentRef.setInput('longitude', 21);
    fixture.componentRef.setInput('offset', [5, 15]);
    fixture.componentRef.setInput('positioning', 'top-right');
    fixture.detectChanges();
    expect(map.instance.getOverlayById('details')).toBe(overlay);
    expect(overlay.getPosition()).toEqual(fromLonLat([21, 50]));
    expect(overlay.getOffset()).toEqual([5, 15]);
    expect(overlay.getPositioning()).toBe('top-right');
    map.instance.setView(new View({ projection: 'EPSG:4326' }));
    expect(overlay.getPosition()).toEqual([21, 50]);
  });

  it('passes the compatibility auto-pan animation and margin to OpenLayers', () => {
    const overlay = map.instance.getOverlayById('details');
    const pan = spyOn(overlay, 'panIntoView');
    overlay.setPosition([1, 2]);
    expect(pan).toHaveBeenCalledWith({ animation: fixture.componentInstance.animation, margin: 40 });
  });

  it('detaches and disposes overlay resources when their Angular block is removed', () => {
    const overlay = map.instance.getOverlayById('details');
    const setPosition = spyOn(overlay, 'setPosition').and.callThrough();
    const dispose = spyOn(overlay, 'dispose').and.callThrough();
    fixture.componentRef.setInput('visible', false);
    fixture.detectChanges();
    expect(map.instance.getOverlayById('details')).toBeNull();
    expect(overlay.getMap()).toBeNull();
    expect(dispose).toHaveBeenCalledOnceWith();
    map.instance.setView(new View({ projection: 'EPSG:4326' }));
    expect(setPosition).not.toHaveBeenCalled();
  });

  it('detaches and disposes the previous graticule on every option change', () => {
    const component = fixture.debugElement.query(By.directive(GraticuleComponent))
      .componentInstance as GraticuleComponent;
    const first = component.instance;
    const detach = spyOn(first, 'setMap').and.callThrough();
    const disposeFirst = spyOn(first, 'dispose').and.callThrough();
    fixture.componentRef.setInput('labels', true);
    fixture.detectChanges();
    expect(component.instance).not.toBe(first);
    expect(detach).toHaveBeenCalledOnceWith(null);
    expect(disposeFirst).toHaveBeenCalledOnceWith();
    const second = component.instance;
    const disposeSecond = spyOn(second, 'dispose').and.callThrough();
    fixture.componentRef.setInput('labels', false);
    fixture.detectChanges();
    expect(disposeSecond).toHaveBeenCalledOnceWith();
    const current = component.instance;
    const disposeCurrent = spyOn(current, 'dispose').and.callThrough();
    fixture.componentRef.setInput('visible', false);
    fixture.detectChanges();
    expect(disposeCurrent).toHaveBeenCalledOnceWith();
  });
});
