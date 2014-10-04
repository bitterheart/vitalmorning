 //(function() {
   "use strict";
/*jshint node:true*/
module.exports.config = {
     seleniumAddress: "http://localhost:4444/wd/hub",
     specs: [
       "../test/e2e/*.js"
     ],
     capabilities: {
       browserName: "chrome",
       chromeOptions: {
         binary: "/usr/bin/google-chrome",
         args: ["--disable-web-security"]
       },
       count: 1,
       shardTestFiles: false,
       maxInstances: 1
     },
     multiCapabilities: [],
     maxSessions: -1,
     baseUrl: "http://127.0.0.1:31574",
     rootElement: "body",
     allScriptsTimeout: 11000,
     getPageTimeout: 10000,
     params: {
       login: {
         user: "Jane",
         password: "1234"
       }
     },
     framework: "jasmine",
     jasmineNodeOpts: {
       isVerbose: false,
       showColors: true,
       includeStackTrace: true,
       defaultTimeoutInterval: 30000
     },
     mochaOpts: {
       ui: "bdd",
       reporter: "list"
     }
   };
// }());
