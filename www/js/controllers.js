angular.module('app.controllers', [])

.controller('loginCtrl', function($scope) {

})

.controller('homeCtrl', function($scope, authService) {
  $scope.usuarioAtivo = {};
  $scope.usuarioAtivo = authService.getUser();
})

.controller('atendimentoCtrl', function($scope) {

})

.controller('divisOFinanceiraCtrl', function($scope) {

})

.controller('secretRiaAcadMicaCtrl', function($scope) {

})

.controller('filaDeEsperaCtrl', function($scope) {

})

.controller('atendimentoDaFilaCtrl', function($scope) {

})

.controller('telaDeAgradecimentoCtrl', function($scope) {

})

.controller('cadastroCtrl', function($scope, authService) {
  $scope.usuario = {};

  $scope.cadastrar = function (usuario) {
    $scope.usuario = authService.cadastrar(usuario);
  }
})
