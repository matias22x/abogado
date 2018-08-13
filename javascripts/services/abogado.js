'use strict';
angular.module('abogadoService', []).service('abogadoService', function($http, config) {

    return {
        getUser: function(requestId) {
            return $http.get(config.api_url + '/api/users/' + requestId);
        }
    };

});
