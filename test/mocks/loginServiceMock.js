angular
    .module('app.mocks.loginService', [
    ])
    .factory('loginService',
        function (
            $q
        ) {
            'use strict';

            return {
                login: function () {
                    return {};
                },
                redirection: function () {
                    return console.log("Proceed to redirection");
                }
            }
    });
