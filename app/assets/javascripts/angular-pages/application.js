// In JS folders, an `application.js` file will be treated like a manifest file.
//= require angular
//= require_tree .

(function() {

  // Declare an angular module.
  angular
    .module('angularPages', [
      'angularPages.controller'
    ])

  // ---
  // ---

  angular
    .module('angularPages')
    .config([
      '$httpProvider',
      '$locationProvider',
      config
    ])

    function config($httpProvider, $locationProvider) {

      // Send CSRF token with every http request (ajax)
      $httpProvider.defaults.headers.common["X-CSRF-Token"] =
        $("meta[name=csrf-token]").attr("content");

      // Allow for HTML5 routing (no hashes in the URLs).
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      })
    }

})()
