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

        /**
         * Login Ctrl should be defined
         */
        it('should be defined', function() {
            expect(controller).toBeDefined();
        });
    }));
});
