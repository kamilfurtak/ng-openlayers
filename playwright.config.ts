import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './apps/demo-ng-openlayers-e2e/src',
  testMatch: '**/*.spec.ts',
  fullyParallel: true,
  forbidOnly: !!process.env['CI'],
  retries: 0,
  workers: 2,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: { baseURL: 'http://127.0.0.1:4301', viewport: { width: 1280, height: 800 }, trace: 'retain-on-failure' },
  webServer: {
    command: 'npx nx serve demo-ng-openlayers --host=127.0.0.1 --port=4301 --open=false',
    url: 'http://127.0.0.1:4301',
    reuseExistingServer: false,
    timeout: 120_000,
  },
});
