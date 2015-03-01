angular.module('app')
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/tab/home");

        $stateProvider
            .state('tabs', {
                url: "/tab",
                abstract: true,
                templateUrl: "pages/tabs.html"
            })
            .state('tabs.search', {
                url: '/search',
                views: {
                    'search-tab': {
                        templateUrl: "pages/search.html"
                    }
                }
            })
            .state('tabs.settings', {
                url: '/settings',
                views: {
                    'settings-tab': {
                        templateUrl: "pages/settings.html"
                    }
                }
            })
            .state('tabs.home', {
                url: "/home",
                views: {
                    'home-tab': {
                        templateUrl: "pages/home.html",
                        controller: 'HomeTabCtrl'
                    }
                }
            })
            .state('tabs.facts', {
                url: "/facts",
                views: {
                    'home-tab': {
                        templateUrl: "pages/facts.html"
                    }
                }
            })
            .state('tabs.facts2', {
                url: "/facts2",
                views: {
                    'home-tab': {
                        templateUrl: "pages/facts2.html"
                    }
                }
            })
            .state('tabs.about', {
                url: "/about",
                views: {
                    'about-tab': {
                        templateUrl: "pages/about.html"
                    }
                }
            })
            .state('tabs.navstack', {
                url: "/navstack",
                views: {
                    'about-tab': {
                        templateUrl: "pages/nav-stack.html"
                    }
                }
            })
            .state('tabs.list', {
                url: "/list",
                views: {
                    'list-tab': {
                        templateUrl: "pages/list.html"
                    }
                }
            });

    });