# Compatibility boundary

The fixture is excluded from the Angular 21 Nx graph: it has an independent,
pinned Angular 22 installation. CI explicitly builds the root library, packs it,
installs the fixture lockfile and runs its build and lifecycle test.

The first packed-consumer run exposed extensionless OpenLayers imports rejected
by native ESM. Library imports now resolve to existing OpenLayers `.js` files.
The consumer uses signals to notify zoneless change detection. Tests cover
projection replacement, coordinate rebinding, event uniqueness and disposal.

This does not claim SSR support or compatibility with future Angular majors.
