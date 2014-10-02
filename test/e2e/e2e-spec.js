describe('simple tests', function() {
    describe('a very simple test', function() {
        beforeEach(function() {
            browser.get('index.html');
        });
        it('fails', function() {
            expect(element(by.css('span')).getText()).toEqual('');
        });
    });
    describe('add and verify', function() {
        beforeEach(function() {
            browser.get('index.html');
            element(by.css('span.deleteAll')).click();
            element(by.css('span.addEntry')).click();
            element(by.css('div.addition input.loginPage')).sendKeys('http://something.com');
            element(by.css('div.addition input.userId')).sendKeys('userid');
            element(by.css('div.addition input.password')).sendKeys('password');
            element(by.css('div.addition span.add')).click();
            browser.get('index.html');
        });
        it('verify', function() {
            browser.get('index.html');
            expect(element(by.css('div.entries div.entry:nth-child(1) span.loginPage')).getText()).toEqual('http://something.com');
            element.all(by.css('div.entries div.entry')).then(function(entries) {
                expect(entries.length).toEqual(1);
                expect(entries[0].element(by.css('span.loginPage')).getText()).toEqual('http://something.com');
                expect(entries[0].element(by.css('span.userId')).getText()).toEqual('userid');
                expect(entries[0].element(by.css('span.password')).getText()).toEqual('password');
                expect(entries[0].element(by.css('span.loginPage')).getText()).toEqual('wrong');
            });
        });
    });
    describe('verify delete all', function() {
        beforeEach(function() {
            browser.get('index.html');
            element(by.css('span.addEntry')).click();
            element(by.css('div.addition input.loginPage')).sendKeys('http://something.com');
            element(by.css('div.addition input.userId')).sendKeys('userid');
            element(by.css('div.addition input.password')).sendKeys('password');
            element(by.css('div.addition span.add')).click();
            browser.get('index.html');
        });
        it('verify', function() {
            element(by.css('span.deleteAll')).click();
            element.all(by.css('div.entries div.entry')).then(function(entries) {
                expect(entries.length).toEqual(0);
            });
        });
    });
});