import { TestBed } from '@angular/core/testing';
import { DragZoom } from 'ol/interaction';
import { DragZoomInteractionComponent, MapComponent } from 'ng-openlayers';

describe('DragZoomInteractionComponent', () => {
  let component: DragZoomInteractionComponent;
  let mapInstanceMock: any;

  beforeEach(() => {
    mapInstanceMock = {
      addInteraction: jasmine.createSpy('addInteraction'),
      removeInteraction: jasmine.createSpy('removeInteraction'),
    };

    TestBed.configureTestingModule({
      imports: [DragZoomInteractionComponent],
      providers: [{ provide: MapComponent, useValue: { instance: mapInstanceMock } }],
    });

    const fixture = TestBed.createComponent(DragZoomInteractionComponent);
    component = fixture.componentInstance;
  });

  describe('ngOnInit', () => {
    it('should create a DragZoom instance and add it to the map', () => {
      component.ngOnInit();

      expect(component.instance).toBeDefined();
      expect(component.instance).toBeInstanceOf(DragZoom);
      expect(mapInstanceMock.addInteraction).toHaveBeenCalledWith(component.instance);
    });
  });

  describe('ngOnDestroy', () => {
    it('should remove the DragZoom instance from the map', () => {
      component.ngOnInit();
      component.ngOnDestroy();

      expect(mapInstanceMock.removeInteraction).toHaveBeenCalledWith(component.instance);
    });
  });
});
