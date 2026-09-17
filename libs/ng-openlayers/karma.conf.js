// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
    ],
    client: {
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true,
    coverageReporter: {
      dir: require('path').join(__dirname, '../../coverage/ng-openlayers'),
      subdir: '.',
      check: { global: { statements: 85, branches: 75, functions: 80, lines: 90 } },
      reporters: [{ type: 'html' }, { type: 'text-summary' }, { type: 'json-summary' }, { type: 'lcovonly' }],
    },
  });
};
