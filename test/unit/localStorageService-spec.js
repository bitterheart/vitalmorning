describe('local storage service tests ', function() {
    beforeEach(angular.mock.module('app'));
    describe('add', function() {
        it('should add', inject(['LocalStorageService',
            function(localStorageService) {
                localStorageService.getEntries().then(function(oldEntries){
                    localStorage.addEntries('someurl','someuserid','somepassword').then(function(result){
                        localStorage.getEntries().then(function(newEntries){
                            expect(oldEntries.length).toEqual(newEntries.length-1);
                            expect(newEntries[newEntries.length-1].loginPage).toEqual('someurl');
                            expect(newEntries[newEntries.length-1].userid).toEqual('userid');
                            expect(newEntries[newEntries.length-1].password).toEqual('somepassword');
                        });
                    });
                });
            }
        ]));
    });
});