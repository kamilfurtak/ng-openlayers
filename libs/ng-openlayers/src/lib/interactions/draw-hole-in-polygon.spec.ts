import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DrawHoleInPolygonInteractionComponent } from './draw-hole-in-polygon';
import { MapComponent } from '../map.component';
import { DrawInteractionComponent } from './draw.component';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import { Feature } from 'ol';
import { Polygon } from 'ol/geom';

describe('DrawHoleInPolygonInteractionComponent', () => {
  let component: DrawHoleInPolygonInteractionComponent;
  let fixture: ComponentFixture<DrawHoleInPolygonInteractionComponent>;
  let mockMapComponent: Partial<MapComponent>;

  beforeEach(async () => {
    mockMapComponent = {
      instance: {
        getLayers: () => ({
          getArray: () => [new VectorLayer({
            source: new VectorSource()
          })]
        }),
        on: jasmine.createSpy('on'),
        un: jasmine.createSpy('un')
      } as any
    };

    await TestBed.configureTestingModule({
      imports: [DrawHoleInPolygonInteractionComponent],
      providers: [
        { provide: MapComponent, useValue: mockMapComponent }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawHoleInPolygonInteractionComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with vector layer', () => {
    fixture.detectChanges();
    expect(component.vectorLayer instanceof VectorLayer).toBeTruthy();
  });

  it('should handle draw start', () => {
    const mockEvent = {
      feature: new Feature({
        geometry: new Polygon([[[0, 0], [1, 1], [1, 0], [0, 0]]])
      }),
      target: {
        abortDrawing: jasmine.createSpy('abortDrawing')
      }
    };

    fixture.detectChanges();
    component.onDrawStart(mockEvent);
    expect(component['isDrawing']).toBeTruthy();
  });

  it('should handle draw end', () => {
    const drawEndSpy = spyOn(component.drawEnd, 'emit');
    const mockEvent = {
      feature: new Feature({
        geometry: new Polygon([[[0, 0], [1, 1], [1, 0], [0, 0]]])
      })
    };

    fixture.detectChanges();
    component.onDrawEnd(mockEvent);
    expect(component['isDrawing']).toBeFalsy();
    expect(drawEndSpy).toHaveBeenCalled();
  });

  it('should handle map click', () => {
    const mockEvent = {
      pixel: [100, 100],
      preventDefault: jasmine.createSpy('preventDefault'),
      stopPropagation: jasmine.createSpy('stopPropagation')
    };

    component['isDrawing'] = true;
    component['intersectedPolygon'] = new Polygon([[[0, 0], [1, 1], [1, 0], [0, 0]]]);
    mockMapComponent.instance.getCoordinateFromPixel = () => [0.5, 0.5];

    fixture.detectChanges();
    component.onMapClick(mockEvent);
    expect(mockEvent.preventDefault).not.toHaveBeenCalled();
  });

  it('should clean up on destroy', () => {
    fixture.detectChanges();
    component.ngOnDestroy();
    expect(mockMapComponent.instance.un).toHaveBeenCalledWith('click', component.onMapClick);
  });
});