describe('login spec', function () {
    'use strict';

    //Variables declaration
    var controller,
        loginMock,
        $scope,
        $browser,
        $q;

    beforeEach(module(
        'app.components.login.ctrl',
        'app.mocks.login'
    ));

    //Injection process
    beforeEach(inject(function (
        $injector,
        $rootScope,
        $controller,
        _$q_
    ) {
        //Declare variables
        $scope = $rootScope.$new();
        $browser = $injector.get('$browser');
        $rootScope = $injector.get('$rootScope');
        loginMock = $injector.get('loginMock');

        //Declare controller
        controller = $controller('loginCtrl', {
            $scope: $scope
        });
    }));
    /**
     * Login Ctrl should be defined
     */
    it('should be defined', function() {
        expect(controller).toBeDefined();
    });
    /**
     * Check if username and password are defined when init
     **/
    it('should not contain username and password when init', function() {
        expect($scope.user).toBeUndefined();
    });
    /**
     * Passing a username and password should not trigger any errors
     **/
    it('should not trigger error if username and email are correct', function() {
        $scope.login(loginMock.goodLogin.user);
        expect($scope.formVerifyObject.formValidation)
            .toEqual(loginMock.goodCheckForm.checkForm);
    });
    /**
     * Passing a wrong username but a good password should trigger an error
     **/
    it('should trigger an error if wrong unsername but correct password', function() {
        $scope.login(loginMock.errorUsername.user);
        expect($scope.formVerifyObject.formValidation)
            .toEqual(loginMock.errorNameCheckForm.checkForm);
    });
    /**
     * Passing a good username but a wrong password should trigger an error
     **/
    it('should trigger an error if correct username but wrong password', function() {
        $scope.login(loginMock.errorPassword.user);
        expect($scope.formVerifyObject.formValidation)
            .toEqual(loginMock.errorPasswordCheckForm.checkForm);
    });
});
