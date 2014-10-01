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
        };
        this.addEntry=function(entry){
            var deferred=$q.defer();
            var entries=angular.toJson(localStorage.getItem('entries'));
            if((!entries)||(!Array.isArray(entries))){
                entries=[];
//                localStorage.setItem('entries',entries);
            }
            entries.push(entry);
            localStorage.setItem('entries',angular.fromJson(entries));
            deferred.resolve();
            return deferred.promise;
        };
        this.getEntries=function(){
            var deferred=$q.defer();
            var entries=angular.toJson(localStorage.getItem('entries'));
            deferred.resolve(entries);
            return deferred.promise;
        };
        this.deleteAllEntries=function(){
            var deferred=$q.defer();
            localStorage.setItem('entries',angular.fromJson([]));
            deferred.resolve();
            return deferred.promise;
        };
    }]);
}(window.angular.module('app')));