angular
    .module('app.components.login.ctrl', [])
    .controller('loginCtrl', [
        '$scope',
        'loginService',
        function (
            $scope,
            loginService
        ) {
            'use strict';

            /**
             * Send form data to loginService
             * @param  {object} loginForm
             */
            $scope.login = function (loginForm) {
                //Bind basic info to the DOM
                $scope.formVerifyObject = loginService.login(loginForm);
            };
        }]);
