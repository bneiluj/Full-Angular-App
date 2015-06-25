require('jasmine-before-all');

describe('login page', function () {

    var page = new (require('./login.pageObj'))();

    it('should trigger an error if name is empty', function() {
        page.visit(domain);
        page.fillPasswordField();
        expect().toBe(3);
    });

});
