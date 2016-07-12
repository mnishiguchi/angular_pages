(function() {

  // Declare an angular module.
  angular
    .module('angularPages.controller', [
      // No dependency...
    ])

    // ---
    // ---

    angular
      .module('angularPages.controller')
      .controller('angularPagesController', [
        '$scope',
        angularPagesController
      ])

      function angularPagesController($scope) {
        $scope.things = [
          { name: 'angular' },
          { name: 'rails' },
          { name: 'html' }
        ]
      }

})()
