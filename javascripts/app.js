'use strict';
var abogadoApp = angular.module('abogadoApp', ['satellizer', 'ui.router', 'ui.materialize',
    'naif.base64', 'angular-storage',
    'pascalprecht.translate',
    'angularMoment',
    'angularFileUpload',
    'Materialize',
    'ngSanitize',
    'angular-web-notification',
    'abogadoRouter',
    'abogadoService',
]);
abogadoApp.constant('config', {
    // api_url: 'http://159.65.176.157:3000',
    api_url: 'http://localhost:3000',
    front_url: '/',
    user_validation: new RegExp('^(([A-z0-9]){4,20})$'),
    pass_validation: new RegExp('^(([A-z0-9@]){8,20})$')
});
abogadoApp.factory('userData', function(store) {
    return store.getNamespacedStore('userData');
});
abogadoApp.config(function(config, $stateProvider, $authProvider, $urlRouterProvider, $translateProvider) {
    $authProvider.loginUrl = config.api_url + '/login';
    $authProvider.signupUrl = config.api_url + '/api/signup';
    $authProvider.tokenName = 'token';

    $stateProvider
        .state('home', {
            url: '/',
            noLoginRequired: true,
            views: {
                'login': {
                    templateUrl: 'templates/login.html',
                    controller: 'loginController'
                }
            }
        })
        .state('logout', {
            url: '/logout',
            views: {
                'login': {
                    templateUrl: 'templates/login.html',
                    controller: 'logoutController'
                }
            }
        });
    $urlRouterProvider.otherwise('/');
    $translateProvider.useSanitizeValueStrategy('escape');
    $translateProvider.preferredLanguage('es');
});

abogadoApp.run(function($rootScope, userData, $state, $log, $auth,$location, $anchorScroll) {
  $anchorScroll.yOffset = 70;
  $rootScope.irAInicio = function() {
    console.log("inicio");
    $location.hash('inicioPage');
    $anchorScroll();
  };
  $rootScope.irAInformacion = function() {
    console.log("info");
    $location.hash('infoPage');
    $anchorScroll();
  };
  $rootScope.irAContacto = function() {
    console.log("contacto");
    $location.hash('contacto');
    $anchorScroll();
  };
});
