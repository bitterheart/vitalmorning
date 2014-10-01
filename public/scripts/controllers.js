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
        $scope.addEntry=function(){
            localStorageService.addEntry({loginPage:$scope.loginPage, userId:$scope.userId, password:$scope.password}).then(function(response){
                
            });
        }
    }]);
}(window.angular.module('app')));