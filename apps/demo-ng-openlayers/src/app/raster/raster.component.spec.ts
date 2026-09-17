import { SourceRasterComponent } from 'ng-openlayers';
import { RasterComponent, rasterOperation } from './raster.component';

describe('Raster pixel operation', () => {
  function pixels(values: number[]): ImageData {
    return new ImageData(new Uint8ClampedArray(values), values.length / 4, 1);
  }

  it('preserves every channel when brightness and contrast are neutral', () => {
    const image = pixels([0, 100, 255, 80, 15, 125, 220, 255]);
    const result = rasterOperation([image], { brightness: 0, contrast: 0 });
    expect([...result.data]).toEqual([0, 100, 255, 80, 15, 125, 220, 255]);
  });

  it('clamps brightened and darkened color channels while preserving transparency', () => {
    expect([...rasterOperation([pixels([240, 100, 10, 42])], { brightness: 30, contrast: 0 }).data]).toEqual([
      255, 130, 40, 42,
    ]);
    expect([...rasterOperation([pixels([240, 100, 10, 42])], { brightness: -30, contrast: 0 }).data]).toEqual([
      210, 70, 0, 42,
    ]);
  });

  it('collapses minimum contrast to middle gray without affecting alpha', () => {
    const result = rasterOperation([pixels([0, 100, 255, 90])], { brightness: 0, contrast: -255 });
    expect([...result.data]).toEqual([128, 128, 128, 90]);
  });

  it('passes current controls to the worker operation and requests a fresh raster', () => {
    const component = new RasterComponent();
    component.brightness = 20;
    component.contrast = -50;
    const data = {};
    component.beforeOperations({ data });
    expect(data).toEqual({ brightness: 20, contrast: -50 });
    const refresh = jasmine.createSpy('refresh');
    component.rasterSource = { instance: { refresh } } as unknown as SourceRasterComponent;
    component.updateRaster();
    expect(refresh).toHaveBeenCalledOnceWith();
  });
});
