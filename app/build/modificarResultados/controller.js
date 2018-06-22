'use strict';

angular.module('mundialMath.modificarResultados', ['ngRoute', 'mundialMath.resources'])
    .config(['$routeProvider', '$compileProvider' , function($routeProvider, $compileProvider) {
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|file|blob):/);
        $routeProvider.when('/modificarResultados', {
            templateUrl: 'modificarResultados/template.html'
        });
    }])
    .controller('modificarResultados', ['mundialApi', 'utilities', '$scope', '$timeout',
        function($mundialApi, $utilities, $scope, $timeout) {
            $scope.tablaPartidos = null;

            $scope.getPartidos = function(){
                $mundialApi.getPartidosHistorico()
                    .then(function (response) {
                        $scope.tablaPartidos = response.data
                    }, function(response) {
                        console.log(response);
                    });
            };

            $scope.guardarCambios = function(){
                $mundialApi.guardarResultadosHistoricos($scope.tablaPartidos);
            };


            (function init(){
                $scope.getPartidos();
            })();
        }]
    );
