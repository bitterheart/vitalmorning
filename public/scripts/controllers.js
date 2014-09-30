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
    }]);
}(window.angular.module('app')));