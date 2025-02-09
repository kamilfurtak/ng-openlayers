import { TestBed } from '@angular/core/testing';
import { CollectionCoordinatesComponent } from './collectioncoordinates.component';
import { GeometryLinestringComponent, MapComponent } from '../public-api';

describe('CollectionCoordinatesComponent', () => {
  let component: CollectionCoordinatesComponent;
  let mockMapComponent: any;
  let mockHostComponent: any;

  beforeEach(() => {
    mockMapComponent = {
      instance: {
        on: jasmine.createSpy(),
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
    it('should initialize component with the correct host', () => {
      expect(component['host']).toBe(mockHostComponent);
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
    // beforeEach(() => {
    //   component.coordinates = [
    //     [0, 0],
    //     [1, 1],
    //   ];
    // });

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
