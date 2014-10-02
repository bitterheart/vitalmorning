describe('controller tests', function() {
    beforeEach(module('app'));
    it('add', inject(['$controller', '$q',
        function($controller, $q) {
            var $scope = { loginPage: 'a' , userId:'b', password:'c'};
            $controller('controller', {
                $scope: $scope,
                LocalStorageService: {
                    getName: function() {
                        var deferred=$q.defer();
                        deferred.resolve('hi');
                        return deferred.promise;
                    },
                    addEntry: function(entry) {
                        var deferred=$q.defer();
                        expect(entry.loginPage).toEqual('a');
                        expect(entry.userId).toEqual('b');
                        expect(entry.password).toEqual('c');
                        deferred.resolve('hi');
                        return deferred.promise;
                    },
                    getEntries: function(){
                        var deferred=$q.defer();
                        deferred.resolve('a');
                        return deferred.promise;
                    }
                }
            });
            $scope.addEntry();
        }
    ]));
    it('add in place', inject(['$controller', '$q',
        function($controller, $q) {
            var $scope = { };
            $controller('controller', {
                $scope: $scope,
                LocalStorageService: {
                    getName: function() {
                        var deferred=$q.defer();
                        deferred.resolve('hi');
                        return deferred.promise;
                    },
                    addEntry: function(entry) {
                        var deferred=$q.defer();
                        expect(entry.loginPage).toEqual('a');
                        expect(entry.userId).toEqual('b');
                        expect(entry.password).toEqual('c');
                        deferred.resolve('hi');
                        return deferred.promise;
                    },
                    getEntries: function(){
                        var deferred=$q.defer();
                        deferred.resolve('a');
                        return deferred.promise;
                    }
                }
            });
            $scope.addEntry({loginPage:'a',userId:'b',password:'c'});
            expect($scope.entries.length).toEqual(1);
            expect($scope.entries[0].loginPage).toEqual('a');
            expect($scope.entries[0].userId).toEqual('b');
            expect($scope.entries[0].password).toEqual('c');
        }
    ]));
    it('deleteAll', inject(['$controller', '$q',
        function($controller, $q) {
            var $scope = {};
            $controller('controller', {
                $scope: $scope,
                LocalStorageService: {
                    getName: function() {
                        var deferred=$q.defer();
                        deferred.resolve('hi');
                        return deferred.promise;
                    },
                    deleteAllEntries: function(entry) {
                        var deferred=$q.defer();
                        deferred.resolve('hi');
                        return deferred.promise;
                    },
                    getEntries: function(){
                        var deferred=$q.defer();
                        deferred.resolve('a');
                        return deferred.promise;
                    }
                }
            });
            $scope.deleteAllEntries();
        }
    ]));
});