(function() {

  angular
    .module('app')
    .controller('HomeController', HomeController)

    HomeController.$inject = [
      // '$scope'
    ]

    function HomeController() {
      vm = this

      vm.things = [
        { name: 'angular' },
        { name: 'rails' },
        { name: 'html' }
      ]
    }

})()
