angular
    .module('app.components.login.ctrl', [])
    .controller('loginCtrl', [
        '$scope',
        function (
            $scope
        ) {
            'use strict';

            /**
             * FormValidator constructor
             * @argument  {obj} username and password
             */
            function FormValidator(form) {
                this.username = form.username;
                this.password = form.password;
                this.formValidation = {
                    hasUserNameError: false,
                    hasPasswordError: false,
                    submitted: false
                };
            }

            /**
             * validateUsername prototype
             * @return {boolean} True if name is not blank, false if not
             */
            FormValidator.prototype.validateUsername = function () {
                this.formValidation.hasUserNameError =
                    !(this.username !== undefined
                        && this.username.length > 0);
            };
            /**
             * validatePassword prototype
             * @assign {boolean} True if password is not blank, false if not
             */
            FormValidator.prototype.validatePassword = function () {
                this.formValidation.hasPasswordError =
                    !(this.password !== undefined
                        && this.password.length > 0);
            };

            /**
             * Check the form
             * eg: Run checking
             * @assign {boolean} True to the submit form
             */
            FormValidator.prototype.checkForm = function () {
                this.validateUsername();
                this.validatePassword();
                this.formValidation.submitted = true;
            };

            /**
             * Send form data to loginService
             * @param  {angular.form} loginForm
             */
            $scope.login = function (loginForm) {
                var formVerifyObject = new FormValidator(loginForm);
                //Verify info by calling prototypes
                formVerifyObject.checkForm();
                //Bind basic info to the DOM
                $scope.formVerifyObject = formVerifyObject;
            };

        }]);
