import { execFileSync } from 'node:child_process';
import { mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

// Exercise the distributable package without source aliases or npm linking.
const run = (args, cwd = process.cwd()) => execFileSync('npm', args, { cwd, stdio: 'inherit' });
run(['run', 'build:lib']);
mkdirSync('dist', { recursive: true });
const [{ filename }] = JSON.parse(
  execFileSync('npm', ['pack', './dist/libs/ng-openlayers', '--pack-destination', 'dist', '--json'], {
    encoding: 'utf8',
  })
);
const consumer = resolve('compatibility/angular22');
run(['ci'], consumer);
run(['install', resolve('dist', filename), '--no-save'], consumer);
run(['run', 'build'], consumer);
run(['test'], consumer);
