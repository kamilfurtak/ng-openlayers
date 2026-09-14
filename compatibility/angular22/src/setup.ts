// jsdom has no layout observer. Rendering is covered separately by browser E2E.
globalThis.ResizeObserver = class {
  observe() {} unobserve() {} disconnect() {}
};
