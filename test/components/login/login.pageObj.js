module.exports = function () {

    'use strict';

    this.visitLoginPage = function () {
        return browser.get('/#/login');
    };

    this.fillUserNameField = function (username) {
        // element(by.model('user.username')).clear();
        return element(by.model('user.username')).sendKeys(username);
    };

    this.hasClass = function (ElementId, cls) {
        return element(by.id(ElementId))
                .getAttribute('class')
                .then(function (classes) {
                    return classes
                            .split(' ')
                            .indexOf(cls) !== -1;
                });
    }

    this.fillPasswordField = function (password) {
        return element(by.model('user.password')).sendKeys(password);
    };

    this.clickLoginButton = function () {
        return element(by.id('login-btn')).click();
    };

    this.fillLoginForm = function (username, password) {
        this.fillUserNameField(username);
        this.fillPasswordField(password);
        return element(by.id('login-btn')).click();
    };
};
