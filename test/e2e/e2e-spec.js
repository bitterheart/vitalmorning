describe('simple tests', function() {
    beforeEach(function(){
       browser.get('index.html');
    });
    it('fails', function() {
        expect(element(by.css('span')).getText()).toEqual('');
    });
});