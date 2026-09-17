import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import View from 'ol/View.js';
import Control from 'ol/control/Control.js';
import { MapComponent } from '../map.component';
import { ViewComponent } from '../view.component';
import { ContentComponent } from '../content.component';
import { ControlComponent } from './control.component';
import { DefaultControlComponent } from './default.component';
import { ControlAttributionComponent } from './attribution.component';
import { ControlFullScreenComponent } from './fullscreen.component';
import { ControlMousePositionComponent } from './mouseposition.component';
import { ControlOverviewMapComponent } from './overviewmap.component';
import { ControlRotateComponent } from './rotate.component';
import { ControlScaleLineComponent } from './scaleline.component';
import { ControlZoomComponent } from './zoom.component';
import { ControlZoomSliderComponent } from './zoomslider.component';
import { ControlZoomToExtentComponent } from './zoomtoextent.component';

@Component({
  selector: 'aol-controls-test',
  imports: [
    MapComponent,
    ViewComponent,
    ContentComponent,
    ControlComponent,
    DefaultControlComponent,
    ControlAttributionComponent,
    ControlFullScreenComponent,
    ControlMousePositionComponent,
    ControlOverviewMapComponent,
    ControlRotateComponent,
    ControlScaleLineComponent,
    ControlZoomComponent,
    ControlZoomSliderComponent,
    ControlZoomToExtentComponent,
  ],
  template: `
    <aol-map width="300px" height="200px">
      <aol-view [center]="[0, 0]" [zoom]="2" />
      @if (visible) {
        <aol-control
          ><aol-content><button class="custom-action">Custom</button></aol-content></aol-control
        >
        <aol-control-defaults [attribution]="false" [rotate]="false" />
        <aol-control-attribution [collapsible]="false" />
        <aol-control-fullscreen />
        <aol-control-mouseposition projection="EPSG:4326" [coordinateFormat]="format" />
        <aol-control-overviewmap [view]="overviewView" [collapsed]="true" />
        <aol-control-rotate [duration]="0" />
        <aol-control-scaleline units="imperial" />
        <aol-control-zoom [duration]="0" [delta]="2" zoomInTipLabel="Increase by two" />
        <aol-control-zoomslider [duration]="0" />
        <aol-control-zoomtoextent [extent]="[-100, -100, 100, 100]" />
      }
    </aol-map>
  `,
})
class ControlsHostComponent {
  @Input() visible = true;
  @Input() overviewView = new View({ center: [0, 0], zoom: 1 });
  readonly format = (coordinate: number[]) => coordinate.join(', ');
}

describe('Map control ownership and behavior', () => {
  let fixture: ComponentFixture<ControlsHostComponent>;
  let map: MapComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [ControlsHostComponent] });
    fixture = TestBed.createComponent(ControlsHostComponent);
    fixture.detectChanges();
    map = fixture.debugElement.query(By.directive(MapComponent)).componentInstance;
  });
  afterEach(() => fixture.destroy());

  it('attaches all control types with their configured options and projected content', () => {
    expect(map.instance.getControls().getLength()).toBe(11);
    expect(fixture.nativeElement.querySelector('.custom-action')?.textContent).toBe('Custom');
    const attribution = fixture.debugElement.query(By.directive(ControlAttributionComponent))
      .componentInstance as ControlAttributionComponent;
    const mouse = fixture.debugElement.query(By.directive(ControlMousePositionComponent))
      .componentInstance as ControlMousePositionComponent;
    const scale = fixture.debugElement.query(By.directive(ControlScaleLineComponent))
      .componentInstance as ControlScaleLineComponent;
    expect(attribution.instance.getCollapsible()).toBeFalse();
    expect(mouse.instance.getProjection().getCode()).toBe('EPSG:4326');
    expect(mouse.instance.getCoordinateFormat()([20, 50])).toBe('20, 50');
    expect(scale.instance.getUnits()).toBe('imperial');
  });

  it('uses the configured zoom delta for an actual button click', () => {
    const button = fixture.nativeElement.querySelector('button[title="Increase by two"]') as HTMLButtonElement;
    expect(button).not.toBeNull();
    button.click();
    expect(map.instance.getView().getZoom()).toBe(4);
  });

  it('detaches and disposes every owned control while preserving an external control', () => {
    const controls = map.instance.getControls().getArray().slice();
    const overview = fixture.debugElement.query(By.directive(ControlOverviewMapComponent))
      .componentInstance as ControlOverviewMapComponent;
    const overviewMap = overview.instance.getOverviewMap();
    const disposal = controls.map((control) => spyOn(control, 'dispose').and.callThrough());
    const disposeOverview = spyOn(overviewMap, 'dispose').and.callThrough();
    const external = new Control({ element: document.createElement('div') });
    const disposeExternal = spyOn(external, 'dispose').and.callThrough();
    map.instance.addControl(external);
    fixture.componentRef.setInput('visible', false);
    fixture.detectChanges();
    expect(map.instance.getControls().getArray()).toEqual([external]);
    for (const control of controls) {
      expect(control.getMap()).toBeNull();
    }
    for (const dispose of disposal) expect(dispose).toHaveBeenCalledOnceWith();
    expect(disposeOverview).toHaveBeenCalledOnceWith();
    expect(disposeExternal).not.toHaveBeenCalled();
    map.instance.removeControl(external);
    external.dispose();
  });

  it('replaces an overview view without accumulating controls or leaving the previous map alive', () => {
    const component = fixture.debugElement.query(By.directive(ControlOverviewMapComponent))
      .componentInstance as ControlOverviewMapComponent;
    const original = component.instance;
    const oldMap = original.getOverviewMap();
    const disposeControl = spyOn(original, 'dispose').and.callThrough();
    const disposeMap = spyOn(oldMap, 'dispose').and.callThrough();
    const replacement = new View({ center: [1, 2], zoom: 3 });
    const disposeView = spyOn(replacement, 'dispose').and.callThrough();
    fixture.componentRef.setInput('overviewView', replacement);
    fixture.detectChanges();
    expect(component.instance).not.toBe(original);
    expect(original.getMap()).toBeNull();
    expect(disposeControl).toHaveBeenCalledOnceWith();
    expect(disposeMap).toHaveBeenCalledOnceWith();
    expect(component.instance.getOverviewMap().getView()).toBe(replacement);
    expect(disposeView).not.toHaveBeenCalled();
    expect(map.instance.getControls().getLength()).toBe(11);
  });
});
