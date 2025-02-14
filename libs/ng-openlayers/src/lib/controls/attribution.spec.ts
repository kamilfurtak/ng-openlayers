import { TestBed } from '@angular/core/testing';
import { ElementRef } from '@angular/core';
import { ControlAttributionComponent } from './attribution.component';
import { Attribution } from 'ol/control';
import { MapComponent } from '../map.component';

describe('ControlAttributionComponent', () => {
  let component: ControlAttributionComponent;
  let mapMock: jasmine.SpyObj<MapComponent>;
  let elementRefMock: ElementRef;

  beforeEach(() => {
    mapMock = jasmine.createSpyObj('MapComponent', ['instance']);
    mapMock.instance = jasmine.createSpyObj('Instance', ['addControl', 'removeControl']);

    elementRefMock = { nativeElement: document.createElement('div') };

    TestBed.configureTestingModule({
      providers: [
        {
          provide: MapComponent,
          useValue: mapMock,
        },
        {
          provide: ElementRef,
          useValue: elementRefMock,
        },
      ],
    });

    component = new ControlAttributionComponent(mapMock, elementRefMock);
  });

  describe('constructor', () => {
    it('should initialize componentType property as "control"', () => {
      expect(component.componentType).toBe('control');
    });
  });

  describe('ngOnInit', () => {
    it('should set target to the native element', () => {
      component.ngOnInit();
      expect(component['target']).toBe(elementRefMock.nativeElement);
    });

    it('should create an instance of Attribution and add it to map controls', () => {
      component.ngOnInit();
      expect(component['instance']).toBeInstanceOf(Attribution);
      expect(mapMock.instance.addControl).toHaveBeenCalledWith(component['instance']);
    });
  });

  describe('ngOnDestroy', () => {
    it('should remove the control from the map', () => {
      component['instance'] = new Attribution({}); // Mocking an existing instance
      component.ngOnDestroy();
      expect(mapMock.instance.removeControl).toHaveBeenCalledWith(component['instance']);
    });
  });
});
