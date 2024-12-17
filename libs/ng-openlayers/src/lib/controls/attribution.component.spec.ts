import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElementRef } from '@angular/core';
import { ControlAttributionComponent } from './attribution.component';
import { MapComponent } from '../map.component';

describe('ControlAttributionComponent', () => {
  let component: ControlAttributionComponent;
  let fixture: ComponentFixture<ControlAttributionComponent>;
  let mapInstanceSpy: any;
  let mockMapComponent: any;

  beforeEach(() => {
    mapInstanceSpy = {
      addControl: jasmine.createSpy('addControl'),
      removeControl: jasmine.createSpy('removeControl'),
    };
    mockMapComponent = { instance: mapInstanceSpy };

    TestBed.configureTestingModule({
      declarations: [ControlAttributionComponent],
      providers: [
        { provide: MapComponent, useValue: mockMapComponent },
        { provide: ElementRef, useValue: { nativeElement: {} } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ControlAttributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize and add control to the map on ngOnInit', () => {
    component.ngOnInit();
    expect(component.target).toBeDefined();
    expect(component.instance).toBeDefined();
    expect(mapInstanceSpy.addControl).toHaveBeenCalledWith(component.instance);
  });

  it('should remove control from the map on ngOnDestroy', () => {
    component.ngOnInit();
    component.ngOnDestroy();
    expect(mapInstanceSpy.removeControl).toHaveBeenCalledWith(component.instance);
  });
});
