import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AttributionsComponent } from './attributions.component';
import { AttributionComponent } from './attribution.component';
import { QueryList } from '@angular/core';
import { SourceComponent } from '../public-api';

class MockSourceComponent {
  instance = { setAttributions: jasmine.createSpy('setAttributions') } as any;
}
 
describe('AttributionsComponent', () => {
  let component: AttributionsComponent;
  let fixture: ComponentFixture<AttributionsComponent>;
  let mockSource: MockSourceComponent;

  beforeEach(() => {
    mockSource = new MockSourceComponent();

    TestBed.configureTestingModule({})
      .overrideComponent(AttributionsComponent, {
        set: {
          providers: [[{ provide: SourceComponent, useValue: mockSource }]],
        },
      })
      .compileComponents();

    fixture = TestBed.createComponent(AttributionsComponent);
    component = fixture.componentInstance;
  });

  describe('ngAfterViewInit', () => {
    it('should do nothing if attributions `QueryList` is empty', () => {
      component.attributions = new QueryList();
      component.ngAfterViewInit();

      expect(component.instance).toBeUndefined();
      expect(mockSource.instance.setAttributions).not.toHaveBeenCalled();
    });

    it('should set attributions and call source setAttributions if QueryList has elements', () => {
      const attribution1 = new AttributionComponent(null);
      attribution1.label = 'Attribution 1';
      const attribution2 = new AttributionComponent(null);
      attribution2.label = 'Attribution 2';

      const queryList = new QueryList<AttributionComponent>();
      queryList.reset([attribution1, attribution2]);

      component.attributions = queryList;
      component.ngAfterViewInit();

      expect(component.instance).toEqual(['Attribution 1', 'Attribution 2']);
      expect(mockSource.instance.setAttributions).toHaveBeenCalledWith(['Attribution 1', 'Attribution 2']);
    });
  });
});
