"use strict";angular.module("mundialMath.updatePartido",["ngRoute"]).config(["$routeProvider",function(t){t.when("/bet",{templateUrl:"updatePartido/updatePartido.html"})}]).controller("updatePartidoCtrl",["mundialApi","$scope","$timeout",function(t,a,o){a.tablaUsuarios=null,a.tablaPartidos=null,a.selectedTeam={usuario:null,resultados:{1:0,x:0,2:0},partido:null},a.getPartidos=function(){t.getPartidos().then(function(t){a.tablaPartidos=t.data},function(t){console.log(t)})},a.getUsers=function(){t.getUsers().then(function(t){console.log(t.data),a.tablaUsuarios=t.data},function(t){console.log(t)})},function(){a.getPartidos(),a.getUsers()}(),a.enviarOdds=function(){t.enviarOdds(a.selectedTeam)}}]);