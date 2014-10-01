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
                    }
                }
            });
            $scope.addEntry();
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
                    }
                }
            });
            $scope.deleteAllEntries();
        }
    ]));
});