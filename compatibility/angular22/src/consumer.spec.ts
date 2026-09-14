import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { describe, it, expect, vi } from 'vitest';
import { MapComponent, ViewComponent } from 'ng-openlayers';
import { Consumer } from './consumer';

describe('published-format package on Angular 22 (zoneless)', () => {
  it('creates, changes projection and disposes without retained events', async () => {
    const fixture = TestBed.createComponent(Consumer);
    await fixture.whenStable();
    const map: MapComponent = fixture.debugElement.query(By.directive(MapComponent)).componentInstance;
    const view: ViewComponent = fixture.debugElement.query(By.directive(ViewComponent)).componentInstance;
    const emit = vi.spyOn(view.changeResolution, 'emit');
    const old = view.instance;
    fixture.componentInstance.projection.set('EPSG:4326');
    await fixture.whenStable();
    expect(map.instance.getView().getProjection().getCode()).toBe('EPSG:4326');
    expect(map.instance.getView().getCenter()).toEqual([19, 50]);
    emit.mockClear();
    old.dispatchEvent('change:resolution');
    expect(emit).not.toHaveBeenCalled();
    view.instance.dispatchEvent('change:resolution');
    expect(emit).toHaveBeenCalledTimes(1);
    const instance = map.instance;
    const dispose = vi.spyOn(instance, 'dispose');
    fixture.destroy();
    expect(dispose).toHaveBeenCalledTimes(1);
    expect(instance.getTargetElement()).toBeNull();
    emit.mockClear();
    view.instance.dispatchEvent('change:resolution');
    expect(emit).not.toHaveBeenCalled();
  });
});
