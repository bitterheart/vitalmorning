"use strict";
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [
    '../test/e2e/*.js',
  ],
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      binary: '/usr/bin/google-chrome',
      args: ['--disable-web-security'],
      //     extensions:['build/PasswordManager.zip']

    },
    count: 1,
    shardTestFiles: false,
    maxInstances: 1,
  },
  multiCapabilities: [],
  maxSessions: -1,
  baseUrl: 'http://127.0.0.1:31574',
  rootElement: 'body',
  allScriptsTimeout: 11000,
  getPageTimeout: 10000,
  onPrepare: function() {
    /*
    browser.addMockModule('ExtensionService',
      function() {
        angular.module('mockApp', []).service('ExtensionService', ['$q',
          function($q) {
            this.createTab = function(url) {
              var deferred = $q.defer();
              expect(url).toEqual('hxttp://something.com');
              deferred.resolve();
              return deferred.promise;
            };
          }
        ]);
      }
    );
*/
  },
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
