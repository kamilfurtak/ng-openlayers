import TileLayer from 'ol/layer/Tile.js';
import XYZ from 'ol/source/XYZ.js';
import { Config as TileJSONConfig } from 'ol/source/TileJSON.js';
import { LayerTileComponent } from '../layers/layertile.component';
import { SourceBingmapsComponent } from './bingmaps.component';
import { SourceComponent } from './source.component';
import { SourceTileJSONComponent } from './tilejson.component';
import { SourceUTFGridComponent } from './utfgrid.component';

// These metadata transports never make a network request or use a provider credential.
class MetadataRequest extends EventTarget {
  status = 200;
  responseText = '';
  readonly open = jasmine.createSpy('open');
  readonly send = jasmine.createSpy('send');

  respond(data: unknown, status = 200): void {
    this.status = status;
    this.responseText = typeof data === 'string' ? data : JSON.stringify(data);
    this.dispatchEvent(new Event('load'));
  }
}

const tileMetadata: TileJSONConfig = {
  tiles: ['https://tiles.example.invalid/{z}/{x}/{y}.png'],
  minzoom: 1,
  maxzoom: 8,
  attribution: 'Fixture cartography',
};
const gridMetadata: TileJSONConfig = {
  tiles: [],
  grids: ['/fixtures/grid.json'],
  template: '{{label}}',
  minzoom: 0,
  maxzoom: 4,
};
const imageryMetadata = {
  statusCode: 200,
  statusDescription: 'OK',
  authenticationResultCode: 'ValidCredentials',
  resourceSets: [
    {
      resources: [
        {
          imageWidth: 256,
          imageHeight: 256,
          zoomMin: 1,
          zoomMax: 19,
          imageUrl: 'https://{subdomain}.example.invalid/{quadkey}.png?culture={culture}',
          imageUrlSubdomains: ['tiles'],
        },
      ],
    },
  ],
};

describe('Remote provider metadata contracts', () => {
  let layer: TileLayer;
  let host: LayerTileComponent;
  let sources: SourceComponent[];
  let requests: MetadataRequest[];
  let fetchMetadata: jasmine.Spy<typeof fetch>;

  beforeEach(() => {
    layer = new TileLayer();
    host = { instance: layer } as LayerTileComponent;
    sources = [];
    requests = [];
    spyOn(window, 'XMLHttpRequest').and.callFake(function () {
      const request = new MetadataRequest();
      requests.push(request);
      return request as unknown as XMLHttpRequest;
    });
    fetchMetadata = spyOn(window, 'fetch').and.callFake(async () => new Response(JSON.stringify(imageryMetadata)));
  });

  afterEach(() => {
    sources.forEach((source) => source.ngOnDestroy());
    layer.dispose();
  });

  it('loads TileJSON through its configured URL and turns metadata into constrained tile URLs', () => {
    const component = new SourceTileJSONComponent(host);
    sources.push(component);
    component.url = '/fixtures/tilejson.json';
    component.attributions = 'Application attribution';
    component.ngOnInit();
    expect(layer.getSource()).toBe(component.instance);
    expect(component.instance.getState()).toBe('loading');
    expect(requests[0].open).toHaveBeenCalledOnceWith('GET', component.url);
    expect(requests[0].send).toHaveBeenCalledOnceWith();
    requests[0].respond(tileMetadata);
    expect(component.instance.getState()).toBe('ready');
    expect(component.instance.getTileJSON()).toEqual(tileMetadata);
    expect(component.instance.getTileGrid().getMinZoom()).toBe(1);
    expect(component.instance.getTileGrid().getMaxZoom()).toBe(8);
    expect(component.instance.getTileUrlFunction()([3, 1, 2], 1, component.instance.getProjection())).toBe(
      'https://tiles.example.invalid/3/1/2.png'
    );
    expect(component.instance.getAttributions()(null)).toEqual(['Application attribution']);
  });

  for (const failure of ['http', 'invalid JSON', 'network'] as const) {
    it(`exposes TileJSON ${failure} failure without detaching the owning layer`, () => {
      const component = new SourceTileJSONComponent(host);
      sources.push(component);
      component.url = '/fixtures/tilejson.json';
      component.ngOnInit();
      if (failure === 'http') requests[0].respond({}, 503);
      else if (failure === 'invalid JSON') requests[0].respond('{invalid');
      else requests[0].dispatchEvent(new Event('error'));
      expect(component.instance.getState()).toBe('error');
      expect(component.instance.getTileJSON()).toBeNull();
      expect(layer.getSource()).toBe(component.instance);
    });
  }

  it('initializes UTFGrid from inline metadata and retrieves actual decoded feature data', () => {
    const component = new SourceUTFGridComponent(host);
    sources.push(component);
    component.tileJSON = gridMetadata;
    component.ngOnInit();
    expect(requests.length).toBe(0);
    expect(component.instance.getState()).toBe('ready');
    expect(component.instance.getTemplate()).toBe('{{label}}');
    const data = jasmine.createSpy('data');
    const coordinate = [1000000, 1000000];
    const resolution = component.instance.getTileGrid().getResolution(1);
    component.instance.forDataAtCoordinateAndResolution(coordinate, resolution, data);
    expect(data).toHaveBeenCalledOnceWith(null);
    expect(requests[0].open).toHaveBeenCalledOnceWith('GET', '/fixtures/grid.json');
    requests[0].respond({ grid: ['!'], keys: ['', 'region'], data: { region: { label: 'Known region' } } });
    data.calls.reset();
    component.instance.forDataAtCoordinateAndResolution(coordinate, resolution, data);
    expect(data).toHaveBeenCalledOnceWith({ label: 'Known region' });
  });

  it('loads UTFGrid metadata through its URL before requesting any grid tiles', () => {
    const component = new SourceUTFGridComponent(host);
    sources.push(component);
    component.url = '/fixtures/utfgrid.json';
    component.ngOnInit();
    expect(component.instance.getState()).toBe('loading');
    requests[0].respond(gridMetadata);
    expect(component.instance.getState()).toBe('ready');
    expect(component.instance.getTileGrid().getMaxZoom()).toBe(4);
    expect(component.instance.getTemplate()).toBe('{{label}}');
    expect(requests.length).toBe(1);
  });

  it('waits for the first requested UTFGrid tile when preemptive loading is disabled', () => {
    const component = new SourceUTFGridComponent(host);
    sources.push(component);
    component.tileJSON = gridMetadata;
    component.preemptive = false;
    component.ngOnInit();
    const data = jasmine.createSpy('data');
    component.instance.forDataAtCoordinateAndResolution(
      [1000000, 1000000],
      component.instance.getTileGrid().getResolution(1),
      data,
      true
    );
    expect(data).not.toHaveBeenCalled();
    requests[0].respond({ grid: ['!'], keys: ['', 'region'], data: { region: { label: 'First hover' } } });
    expect(data).toHaveBeenCalledOnceWith({ label: 'First hover' });
  });

  it('returns no feature data after UTFGrid metadata fails to load', () => {
    const component = new SourceUTFGridComponent(host);
    sources.push(component);
    component.url = '/fixtures/utfgrid.json';
    component.ngOnInit();
    requests[0].dispatchEvent(new Event('error'));
    expect(component.instance.getState()).toBe('error');
    const data = jasmine.createSpy('data');
    component.instance.forDataAtCoordinateAndResolution([100, 100], 1000, data);
    expect(data).toHaveBeenCalledOnceWith(null);
    expect(requests.length).toBe(1);
  });

  it('passes Bing imagery options through to metadata, HiDPI tiles and zoom limits', async () => {
    const component = new SourceBingmapsComponent(host);
    sources.push(component);
    component.key = 'unit-test-placeholder';
    component.imagerySet = 'Road';
    component.culture = 'pl-PL';
    component.hidpi = true;
    component.maxZoom = 5;
    component.wrapX = false;
    component.tileLoadFunction = jasmine.createSpy('tileLoadFunction');
    component.ngOnInit();
    await new Promise<void>((resolve) => component.instance.once('change', () => resolve()));
    const request = new URL(String(fetchMetadata.calls.mostRecent().args[0]));
    expect(request.pathname).toContain('/Imagery/Metadata/Road');
    expect(request.searchParams.get('c')).toBe('pl-PL');
    expect(request.searchParams.get('key')).toBe('unit-test-placeholder');
    expect(component.instance.getState()).toBe('ready');
    expect(component.instance.getImagerySet()).toBe('Road');
    expect(component.instance.getWrapX()).toBeFalse();
    expect(component.instance.getTilePixelRatio(1)).toBe(2);
    expect(component.instance.getTileLoadFunction()).toBe(component.tileLoadFunction);
    expect(component.instance.getTileGrid().getMaxZoom()).toBe(5);
    expect(component.instance.getTileUrlFunction()([3, 1, 2], 1, component.instance.getProjection())).toBe(
      'https://tiles.example.invalid/021.png?culture=pl-PL&dpi=d1&device=mobile'
    );
  });

  it('reports invalid Bing metadata through the source error state', async () => {
    fetchMetadata.and.callFake(async () => new Response(JSON.stringify({ statusCode: 401 })));
    const component = new SourceBingmapsComponent(host);
    sources.push(component);
    component.key = 'unit-test-placeholder';
    component.ngOnInit();
    await new Promise<void>((resolve) => component.instance.once('change', () => resolve()));
    expect(component.instance.getState()).toBe('error');
    expect(layer.getSource()).toBe(component.instance);
  });

  it('releases all three owned provider sources without removing an external replacement', async () => {
    const tilejson = new SourceTileJSONComponent(host);
    tilejson.url = '/fixtures/tilejson.json';
    tilejson.ngOnInit();
    requests[0].respond(tileMetadata);
    const utfgrid = new SourceUTFGridComponent(host);
    utfgrid.tileJSON = gridMetadata;
    utfgrid.ngOnInit();
    const bing = new SourceBingmapsComponent(host);
    bing.key = 'unit-test-placeholder';
    bing.ngOnInit();
    await new Promise<void>((resolve) => bing.instance.once('change', () => resolve()));
    sources.push(tilejson, utfgrid, bing);
    const external = new XYZ();
    layer.setSource(external);
    for (const component of sources) {
      const dispose = spyOn(component.instance, 'dispose').and.callThrough();
      const changed = jasmine.createSpy('change listener');
      component.instance.on('change', changed);
      component.ngOnDestroy();
      component.instance.changed();
      expect(dispose).toHaveBeenCalledOnceWith();
      expect(changed).not.toHaveBeenCalled();
      expect(layer.getSource()).toBe(external);
    }
    layer.setSource(null);
    external.dispose();
  });

  it('detaches a provider when it is still the layer source at destruction', () => {
    const component = new SourceTileJSONComponent(host);
    sources.push(component);
    component.url = '/fixtures/tilejson.json';
    component.ngOnInit();
    component.ngOnDestroy();
    expect(layer.getSource()).toBeNull();
    requests[0].respond(tileMetadata);
    expect(layer.getSource()).toBeNull();
  });
});
