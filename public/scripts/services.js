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
            var entries=localStorage.getItem('entries');
            if(!entries){
                entries=[];
                localStorage.setItem('entries',entries);
            }
            entries.push(entry);
            localStorage.setItem('entries',entries);
            deferred.resolve();
            return deferred.promise;
        };
        this.getEntries=function(){
            var deferred=$q.defer();
            var entries=localStorage.getItem('entries');
            deferred.resolve(entries);
            return deferred.promise;
        };
        this.deleteAllEntries=function(){
            var deferred=$q.defer();
            localStorage.getItem('entries',[]);
            deferred.resolve();
            return deferred.promise;
        };
    }]);
}(window.angular.module('app')));