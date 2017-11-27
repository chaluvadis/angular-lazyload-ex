(function() {
    angular.module('ssportalapp', ['ui.router', 'oc.lazyLoad'])
        .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'Modules/Dashboard/dashboard.html',
                    controller: 'dashboardController',
                    controllerAs: 'ctrl',
                    resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                        loadDashBoardFiles: ['$ocLazyLoad', '$injector', function($ocLazyLoad, $injector) {
                            console.log('loadFiles');
                            return $ocLazyLoad
                                .load(['../Modules/Dashboard/dashboard.css', '../Modules/Dashboard/dashboard.factory.js', '../Modules/Dashboard/dashboard.ctrl.js'])
                        }],
                        loadAssignments: ['loadDashBoardFiles', '$injector', function(loadFiles, $injector) {
                            var factory = $injector.get('dashboardFactory');
                            return factory.getAssignments();
                        }]
                    }
                })
                .state('sitedetails', {
                    url: 'sitedetails/:id',
                    templateUrl: 'Modules/SiteDetails/sitedetails.html',
                    controller: 'sitedetailsController',
                    controllerAs: 'ctrl',
                    resolve: {
                        loadSiteDetailFiles: ['$ocLazyLoad', '$injector', function($ocLazyLoad, $injector) {
                            console.log('loadFiles');
                            return $ocLazyLoad
                                .load(['../Modules/SiteDetails/sitedetails.css', '../Modules/SiteDetails/sitedetails.factory.js', '../Modules/SiteDetails/sitedetails.ctrl.js'])
                        }],
                        loadSiteDetails: ['loadSiteDetailFiles', '$injector', function(loadFiles, $injector) {
                            var factory = $injector.get('sitedetailsFactory');
                            return factory.getSiteDetails();
                        }]
                    }
                })

            $locationProvider.html5Mode(true);
            $urlRouterProvider.otherwise('/home');
        })
        .config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
            $ocLazyLoadProvider.config({
                debug: true,
                events: true,
                serie: true
            });
        }]);
})();