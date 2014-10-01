describe('simple tests', function() {
    it('fails', function() {
        expect(element(by.css('span')).getText()).toEqual('wrong');
    });
});