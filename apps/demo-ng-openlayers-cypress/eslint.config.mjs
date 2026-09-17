import baseConfig from '../../eslint.config.mjs';

export default [
  ...baseConfig,
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      globals: {
        cy: 'readonly',
        Cypress: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        beforeEach: 'readonly',
        expect: 'readonly',
      },
    },
    rules: {
      // A focused suite would otherwise report success while silently omitting
      // the remaining browser checks. Lint is required both locally and in CI.
      'no-restricted-properties': ['error', ...['it', 'describe', 'context', 'specify', 'test', 'suite'].map(
        (object) => ({
          object,
          property: 'only',
          message: 'Focused tests are forbidden; run the complete Cypress suite.',
        }),
      )],
    },
  },
];
