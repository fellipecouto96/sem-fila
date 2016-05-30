angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



      .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('cadastro', {
    url: '/cadastro',
    templateUrl: 'templates/cadastro.html',
    controller: 'cadastroCtrl'
  })

  .state('atendimento', {
    url: '/atendimento',
    templateUrl: 'templates/atendimento.html',
    controller: 'atendimentoCtrl'
  })

  .state('divisOFinanceira', {
    url: '/financeiro',
    templateUrl: 'templates/divisOFinanceira.html',
    controller: 'divisOFinanceiraCtrl'
  })

  .state('secretRiaAcadMica', {
    url: '/secretaria',
    templateUrl: 'templates/secretRiaAcadMica.html',
    controller: 'secretRiaAcadMicaCtrl'
  })

  .state('filaDeEspera', {
    url: '/espera',
    templateUrl: 'templates/filaDeEspera.html',
    controller: 'filaDeEsperaCtrl'
  })

  .state('atendimentoDaFila', {
    url: '/chamada',
    templateUrl: 'templates/atendimentoDaFila.html',
    controller: 'atendimentoDaFilaCtrl'
  })

  .state('telaDeAgradecimento', {
    url: '/agradecimento',
    templateUrl: 'templates/telaDeAgradecimento.html',
    controller: 'telaDeAgradecimentoCtrl'
  })

$urlRouterProvider.otherwise('/login')



});
