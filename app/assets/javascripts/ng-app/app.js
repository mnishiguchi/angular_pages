'user strict';

/**
 * The main module of this Angular application.
 * Defines routes and other configurations.
 */
(function() {

  // Declare an angular module.
  angular
    .module('app', [
      'ngAnimate',
      'ui.router',
      'templates'
    ])

  // ---
  // ---

  angular
    .module('app')
    .config(config)

    config.$inject = [
      "$httpProvider",
      "$stateProvider",
      "$urlRouterProvider",
      "$locationProvider"
    ]

    function config($httpProvider, $stateProvider, $urlRouterProvider, $locationProvider) {

      // Routes and states.
      $stateProvider
        .state('home', {
            url:         '/',
            templateUrl: 'home.html',
            controller:  'HomeController as vm'
        })
        .state('inventory', {
            url:         '/inventory',
            templateUrl: 'inventory.html',
            controller:  'InventoryController as vm'
        })

      // Default fall back route.
      $urlRouterProvider.otherwise('/')

      // Send CSRF token with every http request (ajax)
      $httpProvider.defaults.headers.common["X-CSRF-Token"] =
        $("meta[name=csrf-token]").attr("content")

      // Allow for HTML5 routing (no hashes in the URLs, good for SEO).
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      })
    }

})()
