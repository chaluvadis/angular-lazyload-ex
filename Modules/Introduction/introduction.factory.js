(function() {
    'use strict';
    angular
        .module('ssportalapp')
        .factory('introductionFactory', introductionFactory);
    introductionFactory.$inject = ['$http', 'commonFactory'];

    function introductionFactory($http, commonFactory) {
        var service = {
            getIntroductionHeader: getIntroductionHeader
        }
        return service;

        function getIntroductionHeader() {
            return "Hello you are in introduction tab.";
        }
    }
})();