angular.module('app.controllers', [])

.controller('homeCtrl', function($scope, authService, atendimentoService) {
  $scope.usuarioAtivo = {};
  $scope.usuarioAtivo = authService.getUser();

  $scope.solicitar = function (opcao) {
    atendimentoService.solicitar(opcao);
  }
})

.controller('atendimentoCtrl', function($scope, authService, atendimentoService) {
  $scope.usuarioAtivo = {};
  $scope.usuarioAtivo = authService.getUser();

  $scope.solicitar = function (opcao) {
    atendimentoService.solicitar(opcao);
  }
})

.controller('divisOFinanceiraCtrl', function($scope, authService) {
  $scope.usuarioAtivo = {};
  $scope.usuarioAtivo = authService.getUser();
})

.controller('secretRiaAcadMicaCtrl', function($scope, authService) {
  $scope.usuarioAtivo = {};
  $scope.usuarioAtivo = authService.getUser();
})

.controller('filaDeEsperaCtrl', function($scope, $location, authService, atendimentoService) {
  $scope.usuarioAtivo = {};
  $scope.usuarioAtivo = authService.getUser();

  var usuarioAtivoSenhaAtual = 0;
  var senhaAtualSistema = 0;

  senhaAtualSistema = Math.floor(Math.random() * 200) + 100;
  usuarioAtivoSenhaAtual = senhaAtualSistema + 3;

  $scope.usuarioAtivo.senhaAtual = usuarioAtivoSenhaAtual;
  $scope.senhaAtualSistema = senhaAtualSistema;
  $scope.tempoEstimado = (usuarioAtivoSenhaAtual - senhaAtualSistema) + (Math.floor(Math.random() * 4) + 1);

  $scope.atualizar = function (tempoEstimado) {
    $scope.senhaAtualSistema++;
    if($scope.senhaAtualSistema == $scope.usuarioAtivo.senhaAtual){
      $scope.tempoEstimado = 0;
      $location.path("/chamada");
    } else {
      $scope.tempoEstimado = ($scope.usuarioAtivo.senhaAtual - $scope.senhaAtualSistema) + (Math.floor(Math.random() * 4) + 1);
    }
  }
})

.controller('atendimentoDaFilaCtrl', function($scope, atendimentoService, authService) {
  $scope.usuarioAtivo = {};
  $scope.usuarioAtivo = authService.getUser();
  $scope.setorAtendimento = '';

  var opcao = atendimentoService.getTipoAtendimento();
  if (opcao[1] == 'f') {
    $scope.setorAtendimento = 'Divisão Financeira';
  } else {
    $scope.setorAtendimento = 'Secretaria Acadêmica';
  }
})

.controller('telaDeAgradecimentoCtrl', function($scope, authService) {
  $scope.usuarioAtivo = {};
  $scope.usuarioAtivo = authService.getUser();

  $scope.exitApp = function () {
    ionic.Platform.exitApp();
  }
})

.controller('cadastroCtrl', function($scope, authService) {
  $scope.usuario = {};

  $scope.cadastrar = function (usuario) {
    $scope.usuario = authService.cadastrar(usuario);
  }
})
