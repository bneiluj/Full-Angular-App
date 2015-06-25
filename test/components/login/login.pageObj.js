module.exports = function () {

    'use strict';

    this.visitLoginPage = function () {
        return browser.get('/login');
    };

    this.fillUserNameField = function (username) {
        // element(by.model('user.username')).clear();
        return element(by.model('user.username')).sendKeys(username);
    };

    this.getUsernameClass = function () {
        element(by.id)
    }

    this.fillPasswordField = function (password) {
        return element(by.model('user.password')).sendKeys(password);
    };

    this.login = function (username, password) {
        this.fillUserNameField(username);
        this.fillPasswordField(password);
        return element(by.id('login-btn')).click();
    };
};
