'use strict';

angular.module('mundialMath.actualizarResultados', ['ngRoute'])
    .config(['$routeProvider' , function($routeProvider) {
        $routeProvider.when('/actualizarResultados', {
            templateUrl: 'actualizarResultados/template.html'
        });
    }])
    .controller('actualizarResultados', ['mundialApi', '$scope', '$timeout',
        function($mundialApi, $scope, $timeout) {
            $scope.tablaPartidos = null;

            $scope.resultadosPartido = {
                id: null,
                resultado: {
                    1: null,
                    x: null,
                    2: null
                }
            };

            $scope.getPartidos = function(){
                $mundialApi.getPartidos()
                    .then(function (response) {
                        $scope.tablaPartidos = response.data
                    }, function(response) {
                        console.log(response);
                    });
            };
            $scope.actualizarPartido = function() {$mundialApi.actualizarPartido($scope.resultadosPartido);};
        }]
    );
