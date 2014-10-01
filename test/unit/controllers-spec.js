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
                        expect(entry.loginUrl).toEqual('someurl');
                        expect(entry.userid).toEqual('someuser');
                        expect(entry.password).toEqual('somepassword');
                        expect(entry.password).toEqual('wrong');
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
});