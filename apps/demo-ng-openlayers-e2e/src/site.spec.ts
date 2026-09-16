import { expect, test } from '@playwright/test';

test('catalog filters and navigation work after hydration', async ({ page }) => {
  await page.goto('/');
  const cards = page.locator('.example-card');
  await expect(cards).toHaveCount(27);
  await page.getByRole('searchbox', { name: 'Search examples' }).fill('polygon');
  await expect(cards).toHaveCount(4);
  await page.getByRole('searchbox').fill('no-such-example');
  await expect(page.getByRole('heading', { name: 'No examples found' })).toBeVisible();
  await page.getByRole('button', { name: 'Reset filters' }).click();
  await page.getByRole('button', { name: 'Interactions', exact: true }).click();
  await expect(cards).toHaveCount(6);
  await cards.filter({ has: page.getByRole('heading', { name: 'Measure', exact: true }) }).click();
  await expect(page).toHaveTitle('Measure · Angular example | ng-openlayers');
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    'href',
    'https://ng-openlayers.furtak.dev/examples/measure/'
  );
});

test('prerendered content is usable without JavaScript', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto('http://127.0.0.1:4301/');
  await expect(page.locator('h1')).toHaveText('Build maps.The Angular way.');
  await expect(page.locator('.example-card')).toHaveCount(27);
  await page.locator('.example-card').first().click();
  await expect(page.locator('h1')).toHaveText('Basic');
  await expect(page.getByRole('link', { name: 'View source' })).toBeVisible();
  await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /zoom and opacity/);
  const schema = await page.locator('#project-schema').textContent();
  expect(JSON.parse(schema!)['@graph'][0].codeRepository).toBe('https://github.com/kamilfurtak/ng-openlayers');
  await context.close();
});

test('mobile layout stays within the viewport and keeps navigation usable', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(390);
  await page.getByRole('link', { name: 'Explore examples' }).click();
  await expect(page.getByRole('searchbox')).toBeInViewport();
  await page.getByRole('searchbox').fill('swipe');
  await page.locator('.example-card').click();
  const slider = page.getByRole('slider', { name: 'Layer comparison' });
  await expect(slider).toBeVisible();
  await slider.focus();
  await page.keyboard.press('ArrowRight');
  await expect(slider).toHaveValue('51');
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(390);
});

test('every sitemap route has its own metadata and creates a map without runtime errors', async ({ page, request }) => {
  const sitemap = await (await request.get('/sitemap.xml')).text();
  const paths = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => new URL(match[1]).pathname);
  expect(paths).toHaveLength(28);
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(`${page.url()}: ${error.message}`));
  const titles = new Set<string>();
  // Local fixtures are served normally. External data availability is tested separately.
  await page.route('**/*', (route) => {
    if (new URL(route.request().url()).hostname === '127.0.0.1') return route.continue();
    return route.fulfill({
      status: 200,
      contentType: 'image/svg+xml',
      body: '<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256"><rect width="256" height="256" fill="#edf3ee"/></svg>',
    });
  });
  for (const path of paths) {
    await page.goto(path);
    await expect(page.locator('h1')).toHaveCount(1);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      'href',
      `https://ng-openlayers.furtak.dev${path}`
    );
    titles.add(await page.title());
    if (path !== '/') await expect(page.locator('.ol-viewport').first()).toBeVisible();
  }
  expect(titles.size).toBe(28);
  expect(errors).toEqual([]);
});
