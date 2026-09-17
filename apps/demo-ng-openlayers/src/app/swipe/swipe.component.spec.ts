import { MapComponent } from 'ng-openlayers';
import RenderEvent from 'ol/render/Event';
import { SwipeComponent } from './swipe.component';

describe('Layer comparison rendering', () => {
  it('clips only the selected portion of the high-DPI canvas and restores its state', () => {
    const component = new SwipeComponent();
    component.swipeValue = 25;
    const canvas = document.createElement('canvas');
    canvas.width = 1000;
    canvas.height = 600;
    const context = jasmine.createSpyObj<CanvasRenderingContext2D>(
      'context',
      ['save', 'beginPath', 'rect', 'clip', 'restore'],
      { canvas }
    );
    const event = new RenderEvent('prerender', undefined, undefined, context);
    component.prerenderFunction(event);
    expect(context.save).toHaveBeenCalledBefore(context.clip);
    expect(context.rect).toHaveBeenCalledOnceWith(250, 0, 750, 600);
    component.postrenderFunction(event);
    expect(context.restore).toHaveBeenCalledOnceWith();
  });

  it('requests a map render when the slider changes', () => {
    const component = new SwipeComponent();
    const render = jasmine.createSpy('render');
    component.map = { instance: { render } } as unknown as MapComponent;
    component.setSwipe(72);
    expect(component.swipeValue).toBe(72);
    expect(render).toHaveBeenCalledOnceWith();
  });

  it('ignores render events without a canvas context', () => {
    const component = new SwipeComponent();
    expect(() => component.prerenderFunction(new RenderEvent('prerender'))).not.toThrow();
    expect(() => component.postrenderFunction(new RenderEvent('postrender'))).not.toThrow();
  });
});
