angular
    .module('app.components.login.ctrl', [])
    .controller('loginCtrl', [
        '$scope',
        function (
            $scope
        ) {
            'use strict';

            //Initiate checking form
            //So, DOM is not pollutated
            $scope.checkForm = {
                hasUserNameError: false,
                hasPasswordError: false,
                submitted: false
            };

            /**
             * FormValidator constructor
             * @argument  {obj} Information about the user
             */
            function FormValidator(form) {
                this.username = form.username;
                this.password = form.password;
            }

            /**
             * validateusername prototype
             * @return {boolean} True if name is defined, false of not
             */
            FormValidator.prototype.validateusername = function () {
                return this.username !== undefined;
            };
            /**
             * validatePassword prototype
             * @return {boolean} True if name is defined, false of not
             */
            FormValidator.prototype.validatePassword = function () {
                return this.password !== undefined;
            };

            /**
             * Send form data to loginService
             * @param  {angular.form} loginForm
             */
            $scope.login = function (loginForm) {
                var formVerifyObject = new FormValidator(loginForm);
                //Bind information to the DOM
                $scope.checkForm = {
                    hasUserNameError: formVerifyObject.validateusername(),
                    hasPasswordError: formVerifyObject.validatePassword(),
                    submitted: true
                };
            };

        }]);
