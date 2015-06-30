ddescribe('login spec', function () {
    'use strict';

    //Variables declaration
    var controller,
        loginService,
        loginMock,
        $scope,
        $browser,
        $q;

    beforeEach(module(
        'app.components.login.ctrl',
        'app.mocks.loginService',
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
        loginService = $injector.get('loginService');

        spyOn(loginService, 'login').andCallThrough();
        spyOn(loginService, 'redirection').andCallThrough();

        //Declare controller
        controller = $controller('loginCtrl', {
            $scope: $scope,
            loginService: loginService
        });
    }));
    /**
     * Login Ctrl should be defined
     */
    iit('should be defined', function() {
        expect(controller).toBeDefined();
    });
    /**
     * Check if username and password are defined when init
     **/
    it('should not contain username and password when init', function() {
        expect($scope.user).toBeUndefined();
    });
    /**
     * Should call loginService when login button is triggered
     **/
    it('should call loginService when login button is triggered', function() {
        $scope.login(loginMock.goodLogin.user);
        expect(loginService.login).toHaveBeenCalled();
    });
});
