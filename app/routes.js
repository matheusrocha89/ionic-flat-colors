angular.module('ionic-flat')
  .config(Routes);

function Routes($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/home/home.html'
    })
    .state('bars', {
      url: '/bars',
      templateUrl: 'app/bars/bars.html',
      controller: 'BarsController as vm'
    })
    .state('buttons', {
      url: '/buttons',
      templateUrl: 'app/buttons/buttons.html',
      controller: 'ButtonsController as vm'
    })
    .state('checkboxes', {
      url: '/checkboxes',
      templateUrl: 'app/checkboxes/checkboxes.html',
      controller: 'CheckboxesController as vm'
    })
    .state('colors', {
      url: '/colors',
      templateUrl: 'app/colors/colors.html',
      controller: 'ColorsController as vm'
    })
    .state('toggles', {
      url: '/toggles',
      templateUrl: 'app/toggles/toggles.html',
      controller: 'TogglesController as vm'
    })
    .state('ranges', {
      url: '/ranges',
      templateUrl: 'app/ranges/ranges.html',
      controller: 'RangesController as vm'
    });
  
  $urlRouterProvider.otherwise('/');
} 

Routes.$inject = ['$stateProvider', '$urlRouterProvider'];
