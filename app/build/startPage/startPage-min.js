"use strict";angular.module("mundialMath.startPage",["ngRoute"]).config(["$routeProvider",function(t){t.when("/start",{templateUrl:"startPage/startPage.html"})}]).controller("startPageCtrl",["mundialApi","$scope","$timeout",function(t,a,o){a.tablaUsuarios=null,a.tablaPartidos=null,a.getPartidos=function(){t.getPartidosHistorico().then(function(t){a.tablaPartidos=t.data},function(t){console.log(t)})},a.getUsers=function(){t.getUsers().then(function(t){a.tablaUsuarios=t.data},function(t){console.log(t)})},function(){a.getPartidos(),a.getUsers()}()}]);