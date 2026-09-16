# Angular 22 packaged consumer

This fixture consumes the actual partial-compiled npm tarball built from the current library sources. It does not use TypeScript source aliases or npm linking. The standalone Angular 22 app runs zoneless.

From the repository root:

```sh
npm run test:consumer
```

The script builds and packs the library, installs the consumer lockfile, installs the current tarball with `--no-save`, then runs the production build and lifecycle test. It discovers the tarball filename rather than hardcoding a version. No npm publication is performed.

The fixture has its own dependency lockfile and is excluded from the Nx project graph. Registry dependencies remain locked; the build-under-test is intentionally not recorded as a file dependency in that lockfile.
