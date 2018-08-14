'use strict';
angular.module('abogadoRouter', []).config(function($stateProvider) {
    $stateProvider
        .state('main', {
            cache: false,
            url: '/', // url que va arriba
            templateUrl: 'templates/views/main/index.html', //ubicacion del html
            controller: 'mainController' //nombre controller
        })
        .state('seccion1', {
            cache: false,
            url: '/seccion1', // url que va arriba
            templateUrl: 'templates/views/main/seccion1.html', //ubicacion del html
            controller: 'seccion1' //nombre controller
        });
});
