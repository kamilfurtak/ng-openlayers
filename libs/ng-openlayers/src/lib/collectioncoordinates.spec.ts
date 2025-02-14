import { TestBed } from '@angular/core/testing';
import { CollectionCoordinatesComponent } from './collectioncoordinates.component';
import {
  GeometryLinestringComponent,
  GeometryMultiLinestringComponent,
  GeometryMultiPointComponent,
  GeometryMultiPolygonComponent,
  GeometryPolygonComponent,
  MapComponent,
} from '../public-api';

describe('CollectionCoordinatesComponent', () => {
  let component: CollectionCoordinatesComponent;
  let mockMapComponent: any;
  let mockHostComponent: any;

  beforeEach(() => {
    mockMapComponent = {
      instance: {
        on: jasmine.createSpy('on'),
        getView: jasmine.createSpy().and.returnValue({
          getProjection: jasmine
            .createSpy()
            .and.returnValue({ getCode: jasmine.createSpy().and.returnValue('EPSG:3857') }),
        }),
      },
    };

    mockHostComponent = {
      instance: {
        setCoordinates: jasmine.createSpy('setCoordinates'),
      },
      componentType: 'geometry-linestring',
    };

    TestBed.configureTestingModule({
      providers: [
        CollectionCoordinatesComponent,
        { provide: MapComponent, useValue: mockMapComponent },
        { provide: GeometryLinestringComponent, useValue: mockHostComponent },
      ],
    });

    component = TestBed.inject(CollectionCoordinatesComponent);
  });

  describe('constructor', () => {
    it('should initialize with a GeometryLineStringComponent host', () => {
      const geometryHostMock = new GeometryLinestringComponent(mockHostComponent, {} as any);
      component = new CollectionCoordinatesComponent(mockHostComponent, geometryHostMock, null, null, null, null);
      expect(component['host']).toBe(geometryHostMock);
    });

    it('should initialize with a GeometryPolygonComponent host', () => {
      const geometryHostMock = new GeometryPolygonComponent(mockHostComponent, {} as any);
      component = new CollectionCoordinatesComponent(mockHostComponent, null, geometryHostMock, null, null, null);
      expect(component['host']).toBe(geometryHostMock);
    });

    it('should initialize with a GeometryMultiPointComponent host', () => {
      const geometryHostMock = new GeometryMultiPointComponent(mockHostComponent, {} as any);
      component = new CollectionCoordinatesComponent(mockHostComponent, null, null, geometryHostMock, null, null);
      expect(component['host']).toBe(geometryHostMock);
    });

    it('should initialize with a GeometryMultiLinestringComponent host', () => {
      const geometryHostMock = new GeometryMultiLinestringComponent(mockHostComponent, {} as any);
      component = new CollectionCoordinatesComponent(mockHostComponent, null, null, null, geometryHostMock, null);
      expect(component['host']).toBe(geometryHostMock);
    });

    it('should initialize with a GeometryMultiPolygonComponent host', () => {
      const geometryHostMock = new GeometryMultiPolygonComponent(mockHostComponent, {} as any);
      component = new CollectionCoordinatesComponent(mockHostComponent, null, null, null, null, geometryHostMock);
      expect(component['host']).toBe(geometryHostMock);
    });

    it('should throw an error if no host geometry component is provided', () => {
      TestBed.resetTestingModule();
      expect(() => {
        TestBed.configureTestingModule({
          providers: [
            CollectionCoordinatesComponent,
            { provide: MapComponent, useValue: mockMapComponent },
            // No geometry component provided
          ],
        }).inject(CollectionCoordinatesComponent);
      }).toThrowError('aol-collection-coordinates must be a child of a geometry component');
    });
  });

  describe('ngOnInit', () => {
    it('should register "change:view" event and initialize mapSrid', () => {
      component.ngOnInit();
      expect(mockMapComponent.instance.on).toHaveBeenCalledWith('change:view', jasmine.any(Function));
      expect(component['mapSrid']).toBe('EPSG:3857');
    });

    it('should register "change:view" event and call onMapViewChanged when the event is triggered', () => {
      const mockEvent = { testEventProperty: 'testValue' };
      spyOn<any>(component, 'onMapViewChanged');

      // Simulate ngOnInit to set up the event listener
      component.ngOnInit();

      // Simulate that the registered event listener is manually triggered
      const eventHandler = mockMapComponent.instance.on.calls.argsFor(0)[1];
      eventHandler(mockEvent);

      // Check that the onMapViewChanged method is called with the mock event
      expect(component['onMapViewChanged']).toHaveBeenCalledWith(mockEvent);
    });

    it('should call transformCoordinates', () => {
      spyOn<any>(component, 'transformCoordinates');
      component.ngOnInit();
      expect(component['transformCoordinates']).toHaveBeenCalled();
    });
  });

  describe('ngOnChanges', () => {
    it('should call transformCoordinates when inputs change', () => {
      spyOn<any>(component, 'transformCoordinates');
      component.ngOnChanges();
      expect(component['transformCoordinates']).toHaveBeenCalled();
    });
  });

  describe('onMapViewChanged', () => {
    it('should update mapSrid and call transformCoordinates', () => {
      spyOn<any>(component, 'transformCoordinates');
      const mockEvent = {
        target: {
          get: jasmine.createSpy().and.returnValue({
            getProjection: jasmine.createSpy().and.returnValue({
              getCode: jasmine.createSpy().and.returnValue('EPSG:4326'),
            }),
          }),
        },
        key: 'view',
      };

      component['onMapViewChanged'](mockEvent);
      expect(component['mapSrid']).toBe('EPSG:4326');
      expect(component['transformCoordinates']).toHaveBeenCalled();
    });
  });

  describe('transformCoordinates', () => {
    it('should not transform coordinates if srid matches mapSrid', () => {
      component.coordinates = [
        [0, 0],
        [1, 1],
      ];
      component['transformCoordinates']();
      expect(mockHostComponent.instance.setCoordinates).toHaveBeenCalledWith([
        [0, 0],
        [1, 1],
      ]);
    });

    it('should correctly transform coordinates for geometry-linestring type', () => {
      component.coordinates = [
        [0, 0],
        [1, 1],
      ];
      mockHostComponent.componentType = 'geometry-linestring';
      component.srid = 'EPSG:4326';

      component['transformCoordinates']();
      expect(mockHostComponent.instance.setCoordinates).toHaveBeenCalledWith([
        [0, -7.081154551613622e-10],
        [111319.49079327358, 111325.14286638486],
      ]);
    });

    it('should correctly transform coordinates for geometry-polygon type', () => {
      component.coordinates = [
        [
          [0, 0],
          [1, 1],
        ],
      ];
      component.srid = 'EPSG:4326';
      mockHostComponent.componentType = 'geometry-polygon';

      component['transformCoordinates']();
      expect(mockHostComponent.instance.setCoordinates).toHaveBeenCalledWith([
        [
          [0, -7.081154551613622e-10],
          [111319.49079327358, 111325.14286638486],
        ],
      ]);
    });

    it('should correctly transform coordinates for geometry-multipolygon type', () => {
      component.coordinates = [
        [
          [
            [0, 0],
            [1, 1],
          ],
        ],
      ];
      component.srid = 'EPSG:4326';
      mockHostComponent.componentType = 'geometry-multipolygon';

      component['transformCoordinates']();
      expect(mockHostComponent.instance.setCoordinates).toHaveBeenCalledWith([
        [
          [
            [0, -7.081154551613622e-10],
            [111319.49079327358, 111325.14286638486],
          ],
        ],
      ]);
    });
  });
});
