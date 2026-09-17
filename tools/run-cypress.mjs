import { createServer } from 'node:http';
import { mkdir, readFile, stat, writeFile } from 'node:fs/promises';
import { dirname, extname, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import cypress from 'cypress';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const site = resolve(root, 'dist/apps/demo-ng-openlayers');
await stat(resolve(site, 'index.html')).catch(() => {
  throw new Error('Build the production demo first: npm run build:demo');
});
const mimeTypes = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.json': 'application/json', '.xml': 'application/xml',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.ico': 'image/x-icon', '.txt': 'text/plain',
};
const server = createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://127.0.0.1').pathname);
    let path = resolve(site, `.${pathname}`);
    if (path !== site && !path.startsWith(site + sep)) {
      response.writeHead(403).end();
      return;
    }
    let info = await stat(path).catch(() => null);
    if (info?.isDirectory()) {
      path = resolve(path, 'index.html');
      info = await stat(path).catch(() => null);
    }
    if (!info?.isFile()) {
      response.writeHead(404, { 'content-type': mimeTypes['.html'] });
      response.end(await readFile(resolve(site, '404.html')));
      return;
    }
    response.writeHead(200, {
      'content-type': mimeTypes[extname(path)] ?? 'application/octet-stream',
      'cache-control': 'no-store',
      // Test-scoped browser fallback: retain the real production HTML/assets,
      // while CSP prevents its scripts from executing on every native navigation.
      ...(extname(path) === '.html' && request.headers.cookie?.split(';').some(
        (cookie) => cookie.trim() === 'ng_openlayers_test_disable_scripts=1',
      ) ? { 'content-security-policy': "script-src 'none'" } : {}),
    });
    response.end(request.method === 'HEAD' ? undefined : await readFile(path));
  } catch {
    response.writeHead(500).end('Unable to serve the test fixture.');
  }
});

// Fail on an occupied port: never run against or terminate another task's server.
await new Promise((resolveListening, reject) => {
  server.once('error', reject);
  server.listen(4303, '127.0.0.1', resolveListening);
});

try {
  const project = resolve(root, 'apps/demo-ng-openlayers-cypress');
  const spec = process.argv[2];
  const result = await cypress.run({
    project,
    browser: process.env['CYPRESS_BROWSER'] ?? 'chrome',
    ...(spec ? { spec: resolve(project, spec) } : {}),
  });
  const completed = 'totalFailed' in result;
  process.exitCode = completed && result.totalTests > 0 && result.totalFailed === 0 ? 0 : 1;
  const summary = completed ? {
    status: process.exitCode === 0 ? 'passed' : 'failed',
    cypressVersion: result.cypressVersion,
    browserName: result.browserName,
    browserVersion: result.browserVersion,
    totalTests: result.totalTests,
    totalPassed: result.totalPassed,
    totalFailed: result.totalFailed,
    totalPending: result.totalPending,
    totalSkipped: result.totalSkipped,
    totalDuration: result.totalDuration,
    runs: result.runs.map((run) => ({
      spec: run.spec.relative,
      stats: run.stats,
      tests: (run.tests ?? []).map((test) => ({ title: test.title, state: test.state, displayError: test.displayError })),
      screenshots: (run.screenshots ?? []).map((screenshot) => screenshot.path),
    })),
  } : { status: 'failed', message: result.message, failures: result.failures };
  const resultsDirectory = resolve(root, 'test-results/cypress');
  await mkdir(resultsDirectory, { recursive: true });
  await writeFile(resolve(resultsDirectory, 'results.json'), JSON.stringify(summary, null, 2) + '\n');
  if (completed && result.totalTests === 0) console.error('Cypress executed no tests.');
  if ('message' in result) console.error(result.message);
} finally {
  server.closeAllConnections();
  await new Promise((resolveClosed) => server.close(resolveClosed));
}
