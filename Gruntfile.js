"use strict";
module.exports = function(grunt) {
  grunt.initConfig({
    shell: {
      options: {
        stderr: false
      },
      chrome: {
        command: 'Xvfb :1 -screen 0 1280x768x24 & '
      }
    },
    express: {
      cli: {
        options: {
          port: 31574,
          bases: 'public'
        }
      },
      ci: {
        options: {
          port: 31574,
          bases: 'public'
        }
      }
    },
    protractor_webdriver: {
      options: {},
      cli: {
        path: 'node_modules/protractor/bin/',
        command: 'webdriver-manager start'
      },
      ci: {
        path: 'node_modules/protractor/bin/',
        command: 'webdriver-manager start'
      },
    },
    protractor: {
      options: {
        configFile: "node_modules/protractor/referenceConf.js",
        keepAlive: false,
        noColor: false,
        args: {}
      },
      cli: {
        options: {
          configFile: "config/protractor.conf.js",
          args: {}
        }
      },
      ci: {
        options: {
          configFile: "config/protractor.conf.js",
          args: {}
        }
      },
    },
  });
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-express');
  grunt.loadNpmTasks('grunt-protractor-webdriver');
  grunt.loadNpmTasks('grunt-protractor-runner');
  grunt.registerTask('e2e-tests-cli', ['express:cli', 'protractor_webdriver:cli', 'protractor:cli']);
  grunt.registerTask('e2e-tests-ci', ['express:ci', 'protractor_webdriver:ci', 'protractor:ci']);
};