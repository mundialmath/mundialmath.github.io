"use strict";angular.module("mundialMath.modificarUsuarios",["ngRoute","mundialMath.resources"]).config(["$routeProvider","$compileProvider",function(i,t){t.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|file|blob):/),i.when("/modificarUsuarios",{templateUrl:"modificarUsuarios/template.html"})}]).controller("modificarUsuarios",["mundialApi","utilities","$scope","$timeout",function(i,t,o,a){o.tablaPartidos=null,o.getPartidos=function(){i.getUsers().then(function(i){o.tablaPartidos=i.data},function(i){console.log(i)})},o.guardarCambios=function(){i.guardarResultadosHistoricos(o.tablaPartidos)},function(){o.getPartidos()}()}]);