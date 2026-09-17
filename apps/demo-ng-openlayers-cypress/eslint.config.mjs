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
  },
];
