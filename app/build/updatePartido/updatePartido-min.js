"use strict";angular.module("mundialMath.updatePartido",["ngRoute"]).config(["$routeProvider",function(t){t.when("/bet",{templateUrl:"updatePartido/updatePartido.html"})}]).controller("updatePartidoCtrl",["mundialApi","utilities","$scope","$timeout",function(t,e,a,n){a.tablaUsuarios=null,a.tablaPartidos=null,a.tablaInputsWizard=null,a.columnIndex=e.columnIndex,a.selectedTeam={usuario:null,resultados:{1:0,x:0,2:0},partido:null},a.checkResults=function(){return a.selectedTeam.resultados[1]+a.selectedTeam.resultados.x+a.selectedTeam.resultados[2]===1&a.selectedTeam.resultados[1]>=0&a.selectedTeam.resultados.x>=0&a.selectedTeam.resultados[2]>=0},a.getPartidos=function(){t.getPartidos().then(function(t){a.tablaPartidos=t.data},function(t){console.log(t)})},a.getInputsWizard=function(){t.getInputsWizard(a.selectedTeam.partido).then(function(t){a.tablaInputsWizard=t.data},function(t){console.log(t)})},a.getUsers=function(){t.getUsers().then(function(t){console.log(t.data),a.tablaUsuarios=t.data},function(t){console.log(t)})},function(){a.getPartidos(),a.getUsers(),a.getInputsWizard()}(),a.enviarOdds=function(){a.getInputsWizard(),t.enviarOdds(a.selectedTeam)}}]);