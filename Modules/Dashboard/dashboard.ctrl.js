(function() {
    'use strict';
    angular.module('ssportalapp').controller('dashboardController', dashboardController);
    dashboardController.$inject = ['$scope', 'dashboardFactory', 'loadAssignments'];

    function dashboardController($scope, dashboardFactory, loadAssignments) {
        var scope = this;
        console.log('loadAssignments', loadAssignments);

        function getDashboardAssignments() {
            scope.assignments = loadAssignments.assignments;
        }
        getDashboardAssignments();
    }
})();