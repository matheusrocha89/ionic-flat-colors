angular.module('ionic-flat')
  .config(Routes);

function Routes($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.html'
    });
  
  $urlRouterProvider.otherwise('/');
} 

Routes.$inject = ['$stateProvider', '$urlRouterProvider'];
