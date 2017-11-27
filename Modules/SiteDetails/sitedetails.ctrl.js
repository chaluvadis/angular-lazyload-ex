(function() {
    'use strict';
    angular.module('ssportalapp').controller('sitedetailsController', sitedetailsController);
    sitedetailsController.$inject = ['$scope', 'sitedetailsFactory', 'loadSiteDetails'];

    function sitedetailsController($scope, sitedetailsFactory, loadSiteDetails) {
        var scope = this;

        function getSiteDetails() {
            scope.sitedetails = loadSiteDetails.sitedetails;
        }
        getSiteDetails();
    }
})();