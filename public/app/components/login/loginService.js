angular
    .module('app.components.login.service', [])
    /**
     * Login service
     */
    .factory('loginService',
        [
            '$q',
            function (
                $q
            ) {
                'use strict';

                /**
                 * FormValidator constructor
                 * @argument  {obj} username and password
                 */
                function FormValidator(form) {
                    this.username = form.username || undefined;
                    this.password = form.password || undefined;
                    this.formValidation = {
                        hasUserNameError: false,
                        hasPasswordError: false,
                        submitted: false
                    };
                }
                /**
                 * update constructor user information
                 * @return {boolean} True if name is not blank, false if not
                 */
                FormValidator.prototype.updateFormUserInfo = function (form) {
                    this.username = form.username;
                    this.password = form.password;
                };
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
                 * Is form valid
                 * @assign {boolean} True if valide - false if not
                 */
                FormValidator.prototype.isFormValid = function () {
                    //Check the form
                    this.checkForm();
                    return _.every(this.formValidation, function (elem) {
                        console.log("elem: ", elem);
                    });
                };

                return {
                    /**
                     * Login method
                     */
                    login: function (loginForm) {
                        if (this.formVerifyObject === undefined) {
                            //create constructor
                            this.formVerifyObject = new FormValidator(loginForm);
                        } else {
                            //update form without creating new constructor
                            this.formVerifyObject.updateFormUserInfo(loginForm);
                        }
                        //Verify info by calling prototypes
                        this.formVerifyObject.checkForm();
                        return this.formVerifyObject;
                    },
                    /**
                     * Is form valid method
                     */
                    isFormValid: function () {
                        return this.formVerifyObject.isFormValid();
                    }
                };
            }]);
