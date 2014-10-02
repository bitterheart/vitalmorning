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
        $scope.entries;
        localStorageService.getEntries().then(function(results){
            $scope.entries=results;
        });
        $scope.deleteAllEntries=function(){
            localStorageService.deleteAllEntries().then(function(response){
                
            });
        };
        $scope.addEntry=function(){
            localStorageService.addEntry({loginPage:$scope.loginPage, userId:$scope.userId, password:$scope.password}).then(function(response){
                console.log('added');
            });
        };
    }]);
}(window.angular.module('app')));