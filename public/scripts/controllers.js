(function(app){
    "use strict";
    app.controller("controller",["$scope","LocalStorageService",function($scope,localStorageService){
        $scope.name="xxx";
        localStorageService.getName().then(function(name){
            $scope.name=name;
        });
        $scope.saveName=function(){
            localStorageService.setName($scope.name);
        };
        $scope.deleteAllEntries=function(){
            localStorageService.deleteAllEntries().then(function(response){
                
            });
        };
        $scope.addEntry=function(entry){
            localStorageService.addEntry(entry).then(function(response){
                
            });
        }
    }]);
}(window.angular.module('app')));