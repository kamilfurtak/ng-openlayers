import cypress from 'cypress';

export default cypress.defineConfig({
  video: false,
  screenshotOnRunFailure: true,
  screenshotsFolder: '../../test-results/cypress/screenshots',
  downloadsFolder: '../../test-results/cypress/downloads',
  viewportWidth: 1280,
  viewportHeight: 900,
  retries: 0,
  defaultCommandTimeout: 10_000,
  // Preserve the test server's script-blocking policy. Cypress permits only its
  // own injected scripts using a response nonce, leaving application JS blocked.
  experimentalCspAllowList: ['script-src'],
  e2e: {
    baseUrl: 'http://127.0.0.1:4303',
    specPattern: 'src/e2e/**/*.cy.ts',
    supportFile: 'src/support/e2e.ts',
    fixturesFolder: false,
    testIsolation: true,
  },
});
