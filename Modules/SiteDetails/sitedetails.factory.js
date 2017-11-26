(function() {
    'use strict';
    angular
        .module('ssportalapp')
        .factory('sitedetailsFactory', sitedetailsFactory);
    sitedetailsFactory.$inject = ['$http', 'commonFactory'];

    function sitedetailsFactory($http, commonFactory) {
        var service = {
            getSiteDetails: getSiteDetails
        }
        return service;

        function getAssignments() {
            return $http.get('data/data.json').then(commonFactory.getData).catch(commonFactory.logError);
        }
    }
})();