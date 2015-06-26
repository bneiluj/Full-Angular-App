require('jasmine-before-all');

describe('login page', function () {

    var page = new (require('./login.pageObj'))();

    it('should not set any error messages if login form is correct', function() {
        //visit page
        page.visitLoginPage();
        //fill username and password fields
        page.fillLoginForm("Julien Bouteloup", "justEAT");
        //Click login button
        page.clickLoginButton();
        expect(page.hasClass('passwordGroup', 'has-error')).toBe(false);
        expect(page.hasClass('usernameGroup', 'has-error')).toBe(false);
    });
    it('should SET error messages if login form is not correct', function() {
        //visit page
        page.visitLoginPage();
        page.clickLoginButton();
        expect(page.hasClass('passwordGroup', 'has-error')).toBe(true);
        expect(page.hasClass('usernameGroup', 'has-error')).toBe(true);
    });
    it('should set the class of username to error if name is blank while submitting', function() {
        //visit page
        page.visitLoginPage();
        //fill only password field
        page.fillPasswordField("justEat");
        //Click login button
        page.clickLoginButton();
        expect(page.hasClass('usernameGroup', 'has-error')).toBe(true);
        expect(page.hasClass('passwordGroup', 'has-error')).toBe(false);
    });
    it('should set the class of password to error if password is blank while submitting', function() {
        //visit page
        page.visitLoginPage();
        //fill only username field
        page.fillUserNameField("Julien Bouteloup");
        //Click login button
        page.clickLoginButton();
        expect(page.hasClass('passwordGroup', 'has-error')).toBe(true);
        expect(page.hasClass('usernameGroup', 'has-error')).toBe(false);
    });

});
