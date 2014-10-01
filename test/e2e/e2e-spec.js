describe('simple tests', function() {
    it('fails', function() {
        expect(element(by.cs('span')).getText()).toEqual('wrong');
    });
});