angular.module('app.controllers', [])

.controller('loginCtrl', function($scope) {

})

.controller('homeCtrl', function($scope) {

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

.controller('cadastroCtrl', function($scope) {
  $scope.usuarios = [];

  $scope.cadastrar = function (usuario) {
    $scope.usuarios.push(usuario);
  }
})
