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

        function getSiteDetails() {
            return $http.get('data/sitedetails.json')
                .then(commonFactory.getData)
                .catch(commonFactory.logError);
        }
    }
})();