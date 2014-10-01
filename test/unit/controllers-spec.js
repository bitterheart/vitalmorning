describe('controller tests', function() {
    beforeEach(module('app'));
    it('add', inject(['$controller', '$q',
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
                    addEntry: function(entry) {
                        var deferred=$q.defer();
                        expect(entry.loginUrl).toEqual('someurl');
                        expect(entry.userid).toEqual('someuser');
                        expect(entry.password).toEqual('somepassword');
                        deferred.resolve('hi');
                        return deferred.promise;
                    }
                }
            });
            $scope.addEntry({
                loginUrl: 'someurl',
                userid: 'someuser',
                password: 'somepassword'
            });
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