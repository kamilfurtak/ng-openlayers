import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const root = 'dist/apps/demo-ng-openlayers';
const origin = 'https://ng-openlayers.furtak.dev';
async function routes(directory, prefix = '') {
  const found = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (entry.isDirectory()) found.push(...(await routes(join(directory, entry.name), `${prefix}${entry.name}/`)));
    else if (entry.name === 'index.html') found.push(`/${prefix}`);
  }
  return found;
}
const paths = (await routes(root)).filter((path) => path !== '/examples/').sort();
if (paths.length < 28)
  throw new Error(`Expected the home page and all 27 examples to be prerendered; found ${paths.length}.`);
for (const path of paths) {
  const html = await readFile(join(root, path.slice(1), 'index.html'), 'utf8');
  if (!html.includes('<h1') || !html.includes('rel="canonical"') || !html.includes('project-schema')) {
    throw new Error(`Missing prerendered content or metadata: ${path}`);
  }
}
await writeFile(
  join(root, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map((path) => `  <url><loc>${origin}${path}</loc></url>`).join('\n')}\n</urlset>\n`
);
await writeFile(
  join(root, '404.html'),
  `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>Page not found · ng-openlayers</title><style>body{font:16px/1.7 system-ui;background:#f8faf6;color:#17352c;max-width:600px;margin:15vh auto;padding:24px}a{color:#0c6555}</style></head><body><main><p>ng-openlayers</p><h1>Page not found.</h1><p>This example may have moved. Explore the collection to find your next map.</p><a href="/">Back to ng-openlayers →</a></main></body></html>`
);
console.log(`Verified ${paths.length} prerendered pages and generated sitemap.xml and 404.html.`);
