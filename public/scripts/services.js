(function(app) {
    "use strict";

    app.service('LocalStorageService', ["$q",
        function($q) {
            this.setName = function(name) {
                var deferred = $q.defer();
                localStorage.setItem('name', name);
                deferred.resolve();
                return deferred.promise;
            };
            this.getName = function() {
                var deferred = $q.defer();
                deferred.resolve(localStorage.getItem('name'));
                return deferred.promise;
            };
            this.addEntry = function(entry) {
                var deferred = $q.defer();
                try {
                    var a1 = localStorage.getItem('entries');
                    var a2;
                    if (a1) {
                        a2 = angular.fromJson(a1);
                    }
                    else {
                        a2 = [];
                    }
                    a2.push(entry);
                    var a3 = angular.toJson(a2);
                    localStorage.setItem('entries', a3);
                    console.log('no exception');
                }
                catch (exc) {
                    console.log('exception');
                    console.log(exc);
                    deferred.reject(exc);
                }
                deferred.resolve(true);
                return deferred.promise;
            };
            this.getEntries = function() {
                var deferred = $q.defer();
                var a1=localStorage.getItem('entries');
                var a2;
                if(a1){
                    a2=angular.fromJson(a1);
                }else{
                    a2=[];
                }
                deferred.resolve(a2);
                return deferred.promise;
            };
            this.deleteAllEntries = function() {
                var deferred = $q.defer();
                localStorage.setItem('entries', angular.toJson([]));
                deferred.resolve();
                return deferred.promise;
            };
        }
    ]);
}(window.angular.module('app')));