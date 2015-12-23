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
    });
  
  $urlRouterProvider.otherwise('/');
} 

Routes.$inject = ['$stateProvider', '$urlRouterProvider'];
