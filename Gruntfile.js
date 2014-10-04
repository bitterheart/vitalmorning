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
          hostname: '*',
          port: 31574,
          bases: ['public', 'bower_components']
        }
      },
      ci: {
        options: {
          hostname: '*',
          port: 31574,
          bases: 'public'
        }
      }
    },
    protractor_webdriver: {
      options: {
        path: 'node_modules/protractor/bin/',
        command: 'webdriver-manager start'

      },
      cli: {
        path: 'node_modules/protractor/bin/',
        command: 'webdriver-manager start'
      },
      ci: {
        path: 'node_modules/protractor/bin/',
        command: 'webdriver-manager start',
        keepAlive: false
      },
    },
    protractor: {
      option: {
        keepAlive: false,
        noColor: false,
        args: {}
      },
      cli: {
        options: {
          configFile: "config/protractor.conf.js",
          keepAlive: false,
          noColor: false,
          args: {}
        }
      },
      ci: {
        options: {
          configFile: "config/protractor.conf.js",
          keepAlive: false,
          noColor: true,
          args: {}
        }
      },
    },
    karma: {
      cli: {
        configFile: 'config/karma.conf.js',
        port: 25758,
        singleRun: false,
        autoWatch: true,
        reporters: ['progress'],
      },
      ci: {
        configFile: 'config/karma.conf.js',
        port: 31982,
        singleRun: true,
        autoWatch: false,
        reporters: ['progress', 'html', 'coverage'],
      }
    },
    crx: {
      ci: {
        "src": "./",
        "dest": "/tmp/dist/crx/",
      }
    },
    simple_crx: {
      options: {
        // Task-specific options go here.
      },
      ci: {
        options: {},
        files: {

        }
        // Target-specific file lists and/or options go here.
      },
    },
    'chrome-extension': {
      options: {
        name: "Password Manager",
        version: "1.0",
        id: "00000000000000000000000000000000",
        updateUrl: "http://example.com/extension/111111/",
        chrome: "/usr/bin/google-chrome",
        clean: true,
        certDir: 'cert',
        buildDir: 'build',
        resources: [
          'icon.png',
          'public/index.html',
          'public/cdn/*.js',
          'public/scripts/*.js'
        ]
      }
    },
    eslint: {
        options: {
 //           config: 'conf/eslint.json',
//            rulesdir: ['conf/rules']
        },
        target: ['Gruntfile.js','bower.json','manifest.json','package.json','public/scripts/*.json','config/*.js']
    },
      bower: {
    install: {
    }
  },
    bowerInstall: {
      target: {
        src: [
          'public/index.html'
        ],
        cwd: '',
        dependencies: true,
        devDependencies: false,
        exclude: [],
        fileTypes: {},
        ignorePath: '',
        overrides: {}
      }
    }
  });
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-express');
  grunt.loadNpmTasks('grunt-protractor-webdriver');
  grunt.loadNpmTasks('grunt-protractor-runner');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-crx');
  grunt.loadNpmTasks('grunt-simple-crx');
  grunt.loadNpmTasks('grunt-chrome-compile');
  grunt.loadNpmTasks('grunt-bower-install');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.registerTask('e2e-tests-cli', ['express:cli', 'protractor_webdriver:cli', 'protractor:cli']);
  grunt.registerTask('e2e-tests-ci', ['bower:install', 'bowerInstall','chrome-extension', 'express:ci', 'protractor_webdriver:ci', 'protractor:ci']);
  grunt.registerTask('unit-tests-cli', ['karma:cli']);
  grunt.registerTask('unit-tests-ci', ['karma:ci']);
};