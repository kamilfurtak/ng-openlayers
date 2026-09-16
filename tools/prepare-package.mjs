import assert from 'node:assert/strict';
import { copyFile, readFile } from 'node:fs/promises';

const root = 'dist/libs/ng-openlayers';
const source = JSON.parse(await readFile('libs/ng-openlayers/package.json', 'utf8'));
const built = JSON.parse(await readFile(`${root}/package.json`, 'utf8'));

// Prevent publishing stale package metadata alongside freshly copied docs.
for (const key of Object.keys(source)) {
  assert.deepEqual(built[key], source[key], `Rebuild the library: packaged ${key} is stale.`);
}

const readme = await readFile('README.md', 'utf8');
assert(readme.includes(source.description), 'README introduction must match the package description.');
assert(readme.includes(source.homepage), 'README must link to the example site.');
for (const [, target] of readme.matchAll(/\]\(([^\s)]+)\)/g)) {
  assert(/^(https:\/\/|#)/.test(target), `Use an absolute URL so the README link works on npm: ${target}`);
}
for (const file of ['README.md', 'LICENSE.md']) await copyFile(file, `${root}/${file}`);
await copyFile('libs/ng-openlayers/CHANGELOG.md', `${root}/CHANGELOG.md`);
console.log(`Prepared ${source.name}@${source.version} with the canonical README, license and changelog.`);
