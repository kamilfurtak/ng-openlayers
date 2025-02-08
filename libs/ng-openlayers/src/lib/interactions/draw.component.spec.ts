import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DrawInteractionComponent } from './draw.component';
import { MapComponent } from '../map.component';
import { Draw } from 'ol/interaction';

describe('DrawInteractionComponent', () => {
  let component: DrawInteractionComponent;
  let fixture: ComponentFixture<DrawInteractionComponent>;
  let mockMapComponent: Partial<MapComponent>;

  beforeEach(async () => {
    mockMapComponent = {
      instance: {
        addInteraction: jasmine.createSpy('addInteraction'),
        removeInteraction: jasmine.createSpy('removeInteraction'),
      } as any,
    };

    await TestBed.configureTestingModule({
      imports: [DrawInteractionComponent],
      providers: [{ provide: MapComponent, useValue: mockMapComponent }],
    }).compileComponents();

    fixture = TestBed.createComponent(DrawInteractionComponent);
    component = fixture.componentInstance;
    component.type = 'Point';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should create a Draw interaction', () => {
      component.ngOnInit();
      expect(component.instance).toBeInstanceOf(Draw);
    });

    it('should add the interaction to the map', () => {
      component.ngOnInit();
      expect(mockMapComponent.instance.addInteraction).toHaveBeenCalledWith(component.instance);
    });

    it('should attach event listeners', () => {
      const changeSpy = spyOn(component.olChange, 'emit');
      const changeActiveSpy = spyOn(component.olChangeActive, 'emit');
      const drawAbortSpy = spyOn(component.olDrawAbort, 'emit');
      const drawEndSpy = spyOn(component.drawEnd, 'emit');
      const drawStartSpy = spyOn(component.drawStart, 'emit');
      const errorSpy = spyOn(component.olError, 'emit');
      const propertyChangeSpy = spyOn(component.propertyChange, 'emit');

      component.ngOnInit();
      component.instance.dispatchEvent('change');
      component.instance.dispatchEvent('change:active');
      component.instance.dispatchEvent('drawabort');
      component.instance.dispatchEvent('drawend');
      component.instance.dispatchEvent('drawstart');
      component.instance.dispatchEvent('error');
      component.instance.dispatchEvent('propertychange');

      expect(changeSpy).toHaveBeenCalled();
      expect(changeActiveSpy).toHaveBeenCalled();
      expect(drawAbortSpy).toHaveBeenCalled();
      expect(drawEndSpy).toHaveBeenCalled();
      expect(drawStartSpy).toHaveBeenCalled();
      expect(errorSpy).toHaveBeenCalled();
      expect(propertyChangeSpy).toHaveBeenCalled();
    });
  });

  describe('ngOnDestroy', () => {
    it('should remove the interaction from the map', () => {
      component.ngOnInit();
      component.ngOnDestroy();
      expect(mockMapComponent.instance.removeInteraction).toHaveBeenCalledWith(component.instance);
    });
  });

  describe('handleKeydown', () => {
    it('should remove the last point from the draw interaction', () => {
      component.ngOnInit();
      spyOn(component.instance, 'removeLastPoint');
      component.handleKeydown();
      expect(component.instance.removeLastPoint).toHaveBeenCalled();
    });
  });
});
