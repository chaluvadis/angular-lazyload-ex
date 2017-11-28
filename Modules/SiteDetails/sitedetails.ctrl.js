(function() {
    'use strict';
    angular.module('ssportalapp').controller('sitedetailsController', sitedetailsController);
    sitedetailsController.$inject = ['$scope', 'sitedetailsFactory', 'loadSiteDetails'];

    function sitedetailsController($scope, sitedetailsFactory, loadSiteDetails) {
        var scope = this;
        console.log('loadSiteDetails', loadSiteDetails);

        function applyScope() {
            $scope.$apply();
        }

        function getSiteDetails() {
            var sites = loadSiteDetails.sitedetails;
            var siteid = sitedetailsFactory.getSiteId();
            for (var i = 0; i < sites.length; i++) {
                if (sites[i].id.toString() === siteid) {
                    scope.sitedetails = sites[i];
                    console.log(scope.sitedetails);
                }
            }
        }
        getSiteDetails();
    }
})();