(function() {
    'use strict';
    angular
        .module('ssportalapp')
        .factory('dashboardFactory', dashboardFactory);
    dashboardFactory.$inject = ['$http', 'commonFactory'];

    function dashboardFactory($http, commonFactory) {
        var service = {
            getAssignments: getAssignments
        }
        return service;

        function getAssignments() {
            return $http.get('data/data.json').then(commonFactory.getData).catch(commonFactory.logError);
        }
    }
})();