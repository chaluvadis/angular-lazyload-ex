(function() {
    'use strict';
    angular.module('ssportalapp').controller('DashboardController', DashboardController);
    DashboardController.$inject = ['$scope', 'dashboardFactory', 'loadAssignments'];

    function DashboardController($scope, dashboardFactory, loadAssignments) {
        var scope = this;
        console.log('loadAssignments', loadAssignments);

        function getDashboardAssignments() {
            scope.assignments = loadAssignments.assignments;
        }
        getDashboardAssignments();
    }
})();