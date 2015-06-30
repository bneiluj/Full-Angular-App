describe('login service', function () {
    'use strict';

    var $httpBackend,
        loginService,
        loginMock,
        defer,
        $q;

    beforeEach(module(
        'app.components.login.service',
        'app.mocks.login'
    ));

    beforeEach(inject(function (
        $injector,
        _$q_
    ) {
        $httpBackend = $injector.get('$httpBackend');
        loginService = $injector.get('loginService');
        loginMock = $injector.get('loginMock');
        $q = _$q_;
        defer = $q.defer();

        spyOn(loginService, 'login').andCallThrough();
        spyOn(loginService, 'redirection').andCallThrough();
        spyOn($q, 'reject').andCallThrough();

    }));

    /**
     * Service should be defined
     */
    it('should be defined', function () {
        expect(loginService).toBeDefined();
    });
    /**
     * All methods from services should be defined
     */
    it('should have all methods defined', function () {
        expect(loginService.login).toBeDefined();
        expect(loginService.redirection).toBeDefined();
    });
    /**
     * Passing a username and password should not trigger any errors
     **/
    it('should redirect user if username and email are correct', function() {
        var returnedForm = loginService.login(loginMock.goodLogin.user);
        expect(loginService.redirection).toHaveBeenCalled();
    });
    /**
     * Passing a wrong username but a good password should trigger an error
     **/
    it('should trigger an error if wrong unsername but correct password', function() {
        var returnedForm = loginService.login(loginMock.errorUsername.user);
        expect(returnedForm.formValidation)
            .toEqual(loginMock.errorNameCheckForm.checkForm);
    });
    /**
     * Passing a good username but a wrong password should trigger an error
     **/
    it('should trigger an error if correct username but wrong password', function() {
        var returnedForm = loginService.login(loginMock.errorPassword.user);
        expect(returnedForm.formValidation)
            .toEqual(loginMock.errorPasswordCheckForm.checkForm);
    });
    /**
     * Passing a good username but a wrong password should trigger an error
     **/
    it('should trigger an error if both username and password are wrong', function() {
        var returnedForm = loginService.login(loginMock.errorBoth.user);
        expect(returnedForm.formValidation)
            .toEqual(loginMock.errorBothCheckForm.checkForm);
    });
});
