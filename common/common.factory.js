(function() {
    'use strict';
    angular
        .module('ssportalapp')
        .factory('commonFactory', commonFactory);

    function commonFactory() {
        var service = {
            getData: getData,
            logError: logError
        }
        return service;

        function getData(response) {
            return response.data;
        }

        function logError(response) {
            return response.data;
        }
    }
})();