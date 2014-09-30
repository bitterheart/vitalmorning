(function(app){
    "use strict";
    app.service('LocalStorageService',["$q",function($q){
        this.setName=function(name){
            var deferred=$q.defer();
            localStorage.setItem('name',name);
            deferred.resolve();
            return deferred.promise;
        };
        this.getName=function(){
            var deferred=$q.defer();
            deferred.resolve(localStorage.getItem('name'));
            return deferred.promise;
        }
    }]);
}(window.angular.module('app')));