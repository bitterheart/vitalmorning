describe('local storage service tests ', function() {
    beforeEach(angular.mock.module('app'));
    describe('add',
        function() {
            it('should add', inject(['$rootScope', 'LocalStorageService',
                function($rootScope, localStorageService) {
                    var deletesAllEntries = false;
                    var addEntry = false;
                    var getEntries = false;
                    runs(function() {
                        localStorageService.deleteAllEntries().then(function() {
                            deletesAllEntries = true;
                        }, function() {
                            expect(0).toEqual(1);
                        });
                        $rootScope.$apply();
                    });
                    waitsFor(function() {
                        return deletesAllEntries;
                    }, 500);
                    runs(
                        function() {
                            localStorageService.addEntry({
                                loginPage: 'someurl',
                                userId: 'someuserid',
                                password: 'somepassword'
                            }).then(function() {
                                addEntry = true;
                            },function(response) {
                                console.log(response);
                                expect(0).toEqual(2);
                            });
                            $rootScope.$apply();
                        });
                    waitsFor(function() {
                        return addEntry;
                    }, 501);
                    runs(function() {
                        localStorageService.getEntries().then(function(entries) {
                            expect(entries.length).toEqual(1);
                            expect(entries[0].loginPage).toEqual('someurl');
                            expect(entries[0].userId).toEqual('someuserid');
                            expect(entries[0].password).toEqual('somepassword');
                            getEntries = true;
                        }, function() {
                            expect(0).toEqual(3);

                        });
                        $rootScope.$apply();
                    });
                    waitsFor(function() {
                        return getEntries;
                    }, 502);
                }
            ]));
        }
    );
    describe('deleteall', function() {
        it('should delete all', inject(['LocalStorageService',
            function(localStorageService) {
                localStorageService.addEntry({
                    loginPage: 'someurl',
                    userId: 'someuserid',
                    password: 'somepassword'
                }).then(function(result) {
                    localStorageService.deleteAllEntries().then(function(result) {
                        localStorageService.getEntries().then(function(newEntries) {
                            expect(oldEntries.length).toEqual(0);
                        });
                    });
                });
            }
        ]));
    });
});