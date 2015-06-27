var webpackConfig = require('./webpack.config.test');

module.exports = function(config) {
  config.set({

    frameworks: ['mocha'],

    browsers: ['PhantomJS'],

    reporters: ['spec', 'osx'],

    autoWatch: true,

    singleRun: false,

    files: [
      // all files in `tests/`
      'test/*.js',
      'test/**/*.js'
      // each file acts as entry point for the webpack configuration
    ],

    preprocessors: {
      // add webpack as preprocessor
      'test/*.js':    ['webpack'],
      'test/**/*.js': ['webpack']
    },


    client: {
      mocha: {
        ui: 'bdd'
      }
    },

    // karma watches the test entry points
    // (you don't need to specify the entry option)
    // webpack watches dependencies
    webpack: webpackConfig,

    plugins: [
      require('karma-mocha'),
      require('karma-phantomjs-launcher'),
      require('karma-osx-reporter'),
      require('karma-spec-reporter'),
      require('karma-webpack')
    ]
  });
};
