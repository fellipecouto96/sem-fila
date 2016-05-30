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
    console.log('getUser');
    return this.usuarioAtivo;
  }
}]);
