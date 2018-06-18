'use strict';

angular.module('mundialMath.actualizarResultados', ['ngRoute', 'mundialMath.resources'])
    .config(['$routeProvider' , function($routeProvider) {
        $routeProvider.when('/actualizarResultados', {
            templateUrl: 'actualizarResultados/template.html'
        });
    }])
    .controller('actualizarResultados', ['mundialApi', 'utilities', '$scope', '$timeout',
        function($mundialApi, $utilities, $scope, $timeout) {
            $scope.tablaPartidos = null;
            $scope.columnIndex = $utilities.columnIndex;

            $scope.resultadosPartido = {
                id: null,
                resultado: null
            };

            $scope.checkResultados = function(){
                return ($scope.resultadosPartido.id !== null) & ($scope.resultadosPartido.resultado !== null)
            };
            $scope.getPartidos = function(){
                $mundialApi.getPartidos()
                    .then(function (response) {
                        $scope.tablaPartidos = response.data
                    }, function(response) {
                        console.log(response);
                    });
            };
            $scope.actualizarResultado = function(){
                $mundialApi.actualizarResultado($scope.resultadosPartido);
            };

            (function init(){
                $scope.getPartidos();
            })();
        }]
    );
