angular
    .module('app.components.login.state', [])
    .config(['$stateProvider',
        function (
            $stateProvider
        ) {
            'use strict';

            $stateProvider
                .state('login', {
                    url: '/',
                    title: 'login page',
                    parent: 'base',
                    views: {
                        '@': {
                            templateUrl: '/app/components/login/views/login.html',
                            controller: 'loginCtrl'
                        }
                    }
                });

        }]);
