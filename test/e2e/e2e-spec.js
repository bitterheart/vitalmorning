describe('simple tests', function() {
    var getText;
    beforeEach(function() {
        getText = function(element, callback) {
            element.getText().then(function(text) {
                callback(text);
            });
        };
    });
    xdescribe('a very simple test', function() {
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
            element(by.css('div.addition input.loginPage')).sendKeys('http://something.com');
            element(by.css('div.addition input.userId')).sendKeys('userid');
            element(by.css('div.addition input.password')).sendKeys('password');
            element(by.css('div.addition span.add')).click();
            element(by.css('div.addition span.add')).click();
            browser.get('index.html');
            //            browser.sleep(5000);
            //            browser.waitForAngular();
            //            browser.sleep(5000);
        });
        it('verify', function() {
            element.all(by.css('div.entries div.entry')).then(function(entries) {
                expect(entries.length).toEqual(2);
                expect(entries[0].element(by.css('span.loginPage')).getText()).toEqual('http://something.com');
                expect(entries[0].element(by.css('span.userId')).getText()).toEqual('userid');
                expect(entries[0].element(by.css('span.password')).getText()).toEqual('password');
                expect(entries[1].element(by.css('span.loginPage')).getText()).toEqual('http://something.com');
                expect(entries[1].element(by.css('span.userId')).getText()).toEqual('userid');
                expect(entries[1].element(by.css('span.password')).getText()).toEqual('password');
            });
        });
    });
    describe('add and verify (in place)', function() {
        beforeEach(function() {
            browser.get('index.html');
            element(by.css('span.deleteAll')).click();
            element(by.css('div.addition input.loginPage')).sendKeys('http://something.com');
            element(by.css('div.addition input.userId')).sendKeys('userid');
            element(by.css('div.addition input.password')).sendKeys('password');
            element(by.css('div.addition span.add')).click();
            element(by.css('div.addition span.add')).click();
        });
        it('verify', function() {
            element.all(by.css('div.entries div.entry')).then(function(entries) {
                expect(entries.length).toEqual(2);
                expect(entries[0].element(by.css('span.loginPage')).getText()).toEqual('http://something.com');
                expect(entries[0].element(by.css('span.userId')).getText()).toEqual('userid');
                expect(entries[0].element(by.css('span.password')).getText()).toEqual('password');
                expect(entries[1].element(by.css('span.loginPage')).getText()).toEqual('http://something.com');
                expect(entries[1].element(by.css('span.userId')).getText()).toEqual('userid');
                expect(entries[1].element(by.css('span.password')).getText()).toEqual('password');
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
            element(by.css('span.deleteAll')).click();
            browser.get('index.html');
            browser.sleep(5000);
            browser.waitForAngular();
            browser.sleep(5000);
        });
        it('verify', function() {
            element.all(by.css('div.entries div.entry')).then(function(entries) {
                expect(entries.length).toEqual(0);
            });
        });
    });
});