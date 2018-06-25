'use strict';

angular.module('mundialMath.updatePartido', ['ngRoute'])
    .config(['$routeProvider' , function($routeProvider) {
        $routeProvider.when('/bet', {
            templateUrl: 'updatePartido/updatePartido.html'
        });
    }])
    .controller('updatePartidoCtrl', ['mundialApi', 'utilities', '$scope', '$timeout',
        function($mundialApi, $utilities, $scope, $timeout) {
            $scope.tablaUsuarios = null;
            $scope.tablaPartidos = null;
            $scope.tablaInputsWizard = null;
            $scope.columnIndex = $utilities.columnIndex;

            $scope.selectedTeam = {
                usuario: null,
                resultados: {
                    1: 0,
                    x: 0,
                    2: 0
                },
                partido: null
            };
            $scope.checkResults = function(){
                var usuario = ($scope.selectedTeam.usuario !== null) & ($scope.selectedTeam.partido !== null);
                var suma1 = abs($scope.selectedTeam.resultados[1]+$scope.selectedTeam.resultados.x+$scope.selectedTeam.resultados[2] - 1) < 0.0001 ;
                var positivos = ($scope.selectedTeam.resultados[1] >= 0) & ($scope.selectedTeam.resultados.x >= 0) & ($scope.selectedTeam.resultados[2] >= 0);
                return suma1 & positivos & usuario
            };

            $scope.getPartidos = function(){
                $mundialApi.getPartidos()
                    .then(function (response) {
                        $scope.tablaPartidos = response.data
                    }, function(response) {
                        console.log(response);
                    });
            };
            $scope.getInputsWizard = function(){
                $mundialApi.getInputsWizard($scope.selectedTeam.partido)
                    .then(function (response) {
                        $scope.tablaInputsWizard = response.data
                    }, function(response) {
                        console.log(response);
                    });
            };

            $scope.getUsers = function(){
                $mundialApi.getUsers()
                    .then(function (response) {
                        console.log(response.data);
                        $scope.tablaUsuarios = response.data;
                    }, function(response) {
                        console.log(response);
                    });
            };

            (function init(){
                $scope.getPartidos();
                $scope.getUsers();
                $scope.getInputsWizard();
            })();

            $scope.enviarOdds = function() {$scope.getInputsWizard(); $mundialApi.enviarOdds($scope.selectedTeam);};
        }]
    );
