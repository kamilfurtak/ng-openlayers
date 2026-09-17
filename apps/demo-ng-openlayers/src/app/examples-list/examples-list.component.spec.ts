import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { examplesList } from '../example-list';
import { project } from '../project-info';
import { ExamplesListComponent } from './examples-list.component';

describe('Example catalog', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({ imports: [ExamplesListComponent], providers: [provideRouter([])] })
  );

  it('combines a normalized search with category selection without changing the catalog', () => {
    const component = new ExamplesListComponent();
    component.term.set('  POLYGON  ');
    component.category.set('Interactions');
    expect(component.list().map((item) => item.routerLink)).toEqual([
      'draw-polygon',
      'modify-polygon',
      'draw-hole-in-polygon',
    ]);
    component.term.set('');
    component.category.set('All examples');
    expect(component.list()).toEqual(examplesList);
  });

  it('searches descriptions and category names as well as titles', () => {
    const component = new ExamplesListComponent();
    component.term.set('keyboard-accessible');
    expect(component.list().map((item) => item.routerLink)).toEqual(['swipe']);
    component.term.set('essentials');
    expect(component.list().map((item) => item.routerLink)).toContain('basic');
    expect(component.list().map((item) => item.routerLink)).not.toContain('swipe');
  });

  it('updates rendered links and accessible counts from real input and reset events', async () => {
    const fixture = TestBed.createComponent(ExamplesListComponent);
    await fixture.whenStable();
    const element: HTMLElement = fixture.nativeElement;
    const input = element.querySelector<HTMLInputElement>('input[type="search"]');
    input.value = 'no-example-with-this-name';
    input.dispatchEvent(new Event('input'));
    await fixture.whenStable();
    expect(element.querySelectorAll('.example-card').length).toBe(0);
    expect(element.querySelector('[aria-live="polite"]')?.textContent).toContain('0 examples');
    element.querySelector<HTMLButtonElement>('.empty-state button').click();
    await fixture.whenStable();
    expect(input.value).toBe('');
    expect(element.querySelectorAll('.example-card').length).toBe(examplesList.length);
    expect(element.querySelector<HTMLAnchorElement>('.example-card')?.getAttribute('href')).toBe('/examples/basic');
  });

  it('exposes the selected category to assistive technology', async () => {
    const fixture = TestBed.createComponent(ExamplesListComponent);
    await fixture.whenStable();
    const element: HTMLElement = fixture.nativeElement;
    const buttons = [...element.querySelectorAll<HTMLButtonElement>('.category-tabs button')];
    buttons.find((button) => button.textContent?.trim() === 'Interactions').click();
    await fixture.whenStable();
    expect(
      buttons
        .filter((button) => button.getAttribute('aria-pressed') === 'true')
        .map((button) => button.textContent?.trim())
    ).toEqual(['Interactions']);
    expect(element.querySelectorAll('.example-card').length).toBe(6);
  });

  it('copies the canonical install command and reports success', async () => {
    const writeText = jasmine.createSpy('writeText').and.resolveTo();
    spyOnProperty(navigator, 'clipboard', 'get').and.returnValue({ writeText } as unknown as Clipboard);
    const component = new ExamplesListComponent();
    await component.copyInstall();
    expect(writeText).toHaveBeenCalledOnceWith(project.install);
    expect(component.copyLabel()).toBe('Copied!');
  });

  it('offers manual selection when clipboard permission is denied', async () => {
    const writeText = jasmine.createSpy('writeText').and.rejectWith(new Error('Permission denied'));
    spyOnProperty(navigator, 'clipboard', 'get').and.returnValue({ writeText } as unknown as Clipboard);
    const component = new ExamplesListComponent();
    await expectAsync(component.copyInstall()).toBeResolved();
    expect(component.copyLabel()).toBe('Select to copy');
  });
});
