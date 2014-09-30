(function(app){
    "use strict";
    app.controller('controller','LocalStorageService',["$scope",function($scope,localStorageService){
        $scope.name='xxx';
        /*
        localStorageService.getName().then(function(name){
            $scope.name=name;
        });
        */
        $scope.saveName=function(){
            localStorageService.setName($scope.name);
        };
    }]);
}(window.angular.module('app')));