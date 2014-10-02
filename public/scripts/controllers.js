(function(app){
    "use strict";
    app.controller("controller",["$scope","LocalStorageService","ExtensionService",function($scope,localStorageService,extensionService){
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
                $scope.entries=[];
            });
        };
        $scope.addEntry=function(){
            localStorageService.addEntry({loginPage:$scope.loginPage, userId:$scope.userId, password:$scope.password}).then(function(response){
                 if(!Array.isArray($scope.entries)){
                    $scope.entries=[];
                }
                $scope.entries.push({loginPage:$scope.loginPage,userId:$scope.userId,password:$scope.password});
               console.log('aaa');
               console.log($scope.loginPage);
               console.log($scope.entries);
            });
        };
        $scope.openLoginPage=function(entry){
            extensionService.createTab(entry.loginPage).then(function(tab){
                
            });  
        };
    }]);
}(window.angular.module('app')));