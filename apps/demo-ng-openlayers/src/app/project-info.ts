import { VERSION } from '@angular/core';
// Package metadata is the single source of truth for the site's version labels.
// eslint-disable-next-line @nx/enforce-module-boundaries
import library from '../../../../libs/ng-openlayers/package.json';
// eslint-disable-next-line @nx/enforce-module-boundaries
import workspace from '../../../../package.json';

export const project = {
  version: library.version,
  angular: VERSION.major,
  openlayers: workspace.dependencies.ol,
  repository: 'https://github.com/kamilfurtak/ng-openlayers',
  site: 'https://ng-openlayers.furtak.dev',
  npm: 'https://www.npmjs.com/package/ng-openlayers',
  install: 'npm install ng-openlayers ol proj4',
};
