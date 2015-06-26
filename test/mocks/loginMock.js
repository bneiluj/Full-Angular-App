angular
    .module('app.mocks.login', [])
    .factory('loginMock', function () {
        'use strict';

        return {
            goodLogin: {
                "user": {
                    "username": "Julien Bouteloup",
                    "password": "justEat"
                }
            },
            errorUsername: {
                "user": {
                    "username": undefined,
                    "password": "justEat"
                }
            },
            errorPassword: {
                "user": {
                    "username": "Julien Bouteloup",
                    "password": undefined
                }
            },
            errorBoth: {
                "user": {
                    "username": undefined,
                    "password": undefined
                }
            },
            goodCheckForm: {
                "checkForm" : {
                    hasUserNameError: false,
                    hasPasswordError: false,
                    submitted: true
                }
            },
            errorNameCheckForm: {
                "checkForm" : {
                    hasUserNameError: true,
                    hasPasswordError: false,
                    submitted: true
                }
            },
            errorPasswordCheckForm: {
                "checkForm" : {
                    hasUserNameError: false,
                    hasPasswordError: true,
                    submitted: true
                }
            }
        };
    });