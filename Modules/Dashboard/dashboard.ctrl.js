(function() {
    'use strict';
    angular.module('ssportalapp').controller('dashboardController', dashboardController);
    dashboardController.$inject = ['$scope', 'dashboardFactory', 'loadAssignments', '$state'];

    function dashboardController($scope, dashboardFactory, loadAssignments, $state) {
        var scope = this;
        console.log('loadAssignments', loadAssignments);

        function getDashboardAssignments() {
            scope.assignments = loadAssignments.assignments;
        }
        getDashboardAssignments();
        scope.redirectToSiteDetails = function(id) {
            $state.go('sitedetails', { id: id });
        }
    }
})();