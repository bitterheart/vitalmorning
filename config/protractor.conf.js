"use strict";
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [
    '../test/e2e/*.js',
  ],
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      binary: '/usr/bin/chromium-browser',
      args: ['--disable-web-security']

    },
    count: 1,
    shardTestFiles: false,
    maxInstances: 1,
  },
  multiCapabilities: [],
  maxSessions: -1,
  baseUrl: 'http://localhost:31574/index.html',
  rootElement: 'body',
  allScriptsTimeout: 11000,
  getPageTimeout: 10000,
  onPrepare: function() {},
  onComplete: function() {},
  onCleanUp: function(exitCode) {},
  params: {
    login: {
      user: 'Jane',
      password: '1234'
    }
  },
  framework: 'jasmine',
  jasmineNodeOpts: {
    isVerbose: false,
    showColors: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 30000
  },
  mochaOpts: {
    ui: 'bdd',
    reporter: 'list'
  },
  cucumberOpts: {
    require: 'cucumber/stepDefinitions.js',
    tags: '@dev',
    format: 'summary'
  }
};
