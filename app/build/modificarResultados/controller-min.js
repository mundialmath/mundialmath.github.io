"use strict";angular.module("mundialMath.modificarResultados",["ngRoute","mundialMath.resources"]).config(["$routeProvider","$compileProvider",function(t,a){a.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|file|blob):/),t.when("/modificarResultados",{templateUrl:"modificarResultados/template.html"})}]).controller("modificarResultados",["mundialApi","utilities","$scope","$timeout",function(t,a,o,i){o.tablaStr="",o.tablaPartidos=null,o.columnIndex=a.columnIndex,o.urlTabla="",o.getPartidos=function(){t.getPartidosHistorico().then(function(t){o.tablaPartidos=t.data},function(t){console.log(t)})},o.guardarCambios=function(){t.guardarResultadosHistoricos(o.tablaPartidos)},o.addRow=function(){for(var t=[],a=0;a<o.tablaPartidos.columns.length;a++)t.push("");o.tablaPartidos.data.push(t)},o.deleteRow=function(t){o.tablaPartidos.data.splice(t,1)},o.$watch("tablaPartidos.data",function(){var t=a.table2str(o.tablaPartidos),i=new Blob([t],{type:"text/plain"});o.urlTabla=(window.URL||window.webkitURL).createObjectURL(i)},!0),function(){o.getPartidos()}()}]);