angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('authService', [function($scope){
  this.usuarios = [];
  this.usuarioAtivo = {};

  this.cadastrar = function (usuario) {
    this.usuarios.push(usuario);
    this.usuarioAtivo = usuario;

    return this.usuarioAtivo;
  }

  this.getUser = function () {

    return this.usuarioAtivo;
  }
}])

.service('atendimentoService', [function($scope){
  this.tipoAtendimento = [];
  this.senhaAtual = 0;

  this.solicitar = function (tipo) {
      this.tipoAtendimento.push(tipo);
  }

  this.getTipoAtendimento = function () {

    return this.tipoAtendimento;
  }
}]);
