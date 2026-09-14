import { expect, test } from '@playwright/test';

// Offline tile fixture: browser regressions must not depend on OSM availability.
test.beforeEach(async ({ page }) => {
  await page.route('**/*.tile.openstreetmap.org/**', (route) =>
    route.fulfill({
      contentType: 'image/svg+xml',
      body: '<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256"><rect width="256" height="256" fill="#eef2f6"/></svg>',
    })
  );
});

test('map controls change state and routes can be revisited', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('/examples/basic');
  await expect(page.locator('.ol-layer canvas').first()).toBeVisible();
  await page.getByRole('button', { name: 'Increase longitude', exact: true }).click();
  await expect(page.getByLabel('Longitude', { exact: true })).toHaveText('6');
  await page.getByRole('button', { name: 'Decrease longitude', exact: true }).click();
  await expect(page.getByLabel('Longitude', { exact: true })).toHaveText('5');
  await page.getByRole('button', { name: 'Increase zoom', exact: true }).click();
  await expect(page.getByLabel('Zoom', { exact: true })).toHaveText('16');
  // Client-side route teardown, not a full-page reload.
  await page.locator('header h1').click();
  await expect(page.locator('.ol-viewport')).toHaveCount(0);
  await page.getByText('Basic', { exact: true }).click();
  await expect(page.locator('.ol-viewport')).toHaveCount(1);
  expect(errors).toEqual([]);
});

test('resolution outputs survive repeated projection changes', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('/examples/view-projection-update');
  const output = page.getByLabel('Resolution events');
  for (const projection of ['EPSG:4326', 'EPSG:3857', 'EPSG:4326']) {
    await page.getByLabel('Projection', { exact: true }).selectOption(projection);
    const before = Number(await output.textContent());
    await page.getByRole('button', { name: 'Increase zoom' }).click();
    await expect(output).toHaveText(String(before + 1));
    await expect(page.locator('.ol-layer canvas').first()).toBeVisible();
  }
  expect(errors).toEqual([]);
});

test('drawing creates a polygon and the interaction can be disabled', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('/examples/draw-polygon');
  await page.getByRole('button', { name: 'Start draw', exact: true }).click();
  const viewport = page.locator('.ol-viewport');
  await viewport.click({ position: { x: 100, y: 150 } });
  await viewport.click({ position: { x: 240, y: 270 } });
  await expect(page.locator('pre')).toContainText('Polygon');
  const polygon = await page.locator('pre').innerText();
  await page.getByRole('button', { name: 'End draw', exact: true }).click();
  await viewport.click({ position: { x: 120, y: 180 } });
  await viewport.click({ position: { x: 270, y: 300 } });
  await expect(page.locator('pre')).toHaveText(polygon);
  expect(errors).toEqual([]);
});
