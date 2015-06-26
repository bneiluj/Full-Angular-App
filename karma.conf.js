// Karma configuration

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        'public/vendor/lodash/dist/lodash.min.js',
        'public/vendor/angular/angular.min.js',
        'public/vendor/angular-resource/angular-resource.min.js',
        'public/vendor/angular-mocks/angular-mocks.js',
        'public/vendor/angular-ui-router/release/angular-ui-router.min.js',
        'public/vendor/angular-bootstrap/ui-bootstrap.js',
        'public/app/**/*.js',
        'test/mocks/**/*.js',
        'test/**/*.spec.js'
    ],


    // list of files to exclude
    exclude: [

    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'public/app/components/**/*.js': ['coverage']
    },

    coverageReporter: {
        type: 'lcov',
        dir: 'coverage/',
        subdir: function(browser) {
            // normalization to keep a consistent browser name
            return browser.toLowerCase().split(/[ /-]/)[0];
        }
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
