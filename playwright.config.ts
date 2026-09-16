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
    command: 'python3 -m http.server 4301 --bind 127.0.0.1 --directory dist/apps/demo-ng-openlayers',
    url: 'http://127.0.0.1:4301',
    reuseExistingServer: false,
    timeout: 120_000,
  },
});
