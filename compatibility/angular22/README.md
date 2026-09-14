# Angular 22 packaged consumer

This fixture consumes the actual Angular 21 partial-compiled npm tarball, not
TypeScript source aliases or an npm-linked development checkout. Its pinned
Angular 22 app runs zoneless. Unit tests verify projection changes and disposal;
DOM canvas rendering remains covered by the main repository's Playwright suite.

From the repository root:

```sh
npm run build:lib
npm pack ./dist/libs/ng-openlayers --pack-destination dist
npm ci --prefix compatibility/angular22
npm run build --prefix compatibility/angular22
npm test --prefix compatibility/angular22
```

Keep Angular 21 build, Karma and browser gates passing too. Widening a peer range
alone is not a compatibility proof. No npm publication is performed by this test.
