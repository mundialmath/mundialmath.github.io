"use strict";angular.module("mundialMath.modificarUsuarios",["ngRoute","mundialMath.resources"]).config(["$routeProvider","$compileProvider",function(t,i){i.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|file|blob):/),t.when("/modificarUsuarios",{templateUrl:"modificarUsuarios/template.html"})}]).controller("modificarUsuarios",["mundialApi","utilities","$scope","$timeout",function(t,i,a,o){a.tablaPartidos=null,a.getPartidos=function(){t.getInputs("input").then(function(t){a.tablaPartidos=t.data},function(t){console.log(t)})},a.guardarCambios=function(){t.guardarResultadosUsuarios(a.tablaPartidos)},function(){a.getPartidos()}()}]);