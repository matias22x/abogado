'use strict';
angular.module('abogadoRouter', []).config(function($stateProvider) {
    $stateProvider
        .state('main', {
            cache: false,
            url: '/', // url que va arriba
            templateUrl: 'templates/views/main/index.html', //ubicacion del html
            controller: 'mainController' //nombre controller
        });
});
