import { TestBed } from '@angular/core/testing';
import BaseEvent from 'ol/events/Event.js';
import { MapComponent } from './map.component';

describe('Map output contract', () => {
  const outputs = [
    ['change', 'olChange'],
    ['change:layergroup', 'olChangeLayerGroup'],
    ['change:size', 'olChangeSize'],
    ['change:target', 'olChangeTarget'],
    ['change:view', 'olChangeView'],
    ['click', 'olClick'],
    ['dblclick', 'dblClick'],
    ['error', 'olError'],
    ['loadend', 'loadEnd'],
    ['loadstart', 'loadStart'],
    ['moveend', 'moveEnd'],
    ['movestart', 'moveStart'],
    ['pointerdrag', 'pointerDrag'],
    ['pointermove', 'pointerMove'],
    ['postcompose', 'olPostCompose'],
    ['postrender', 'olPostRender'],
    ['postrender', 'postRender'],
    ['precompose', 'olPreCompose'],
    ['propertychange', 'olPropertyChange'],
    ['propertychange', 'propertyChange'],
    ['rendercomplete', 'renderComplete'],
    ['singleclick', 'singleClick'],
  ] as const;

  for (const [eventName, outputName] of outputs) {
    it(`forwards ${eventName} as ${outputName} once and unsubscribes on teardown`, () => {
      TestBed.configureTestingModule({ imports: [MapComponent] });
      const fixture = TestBed.createComponent(MapComponent);
      fixture.detectChanges();
      const component = fixture.componentInstance;
      const receive = jasmine.createSpy(outputName);
      component[outputName].subscribe(receive);
      const event = new BaseEvent(eventName);
      component.instance.dispatchEvent(event);
      expect(receive).toHaveBeenCalledOnceWith(event);
      fixture.destroy();
      receive.calls.reset();
      component.instance.dispatchEvent(event);
      expect(receive).not.toHaveBeenCalled();
    });
  }
});
