'use strict';

angular.module('mundialMath.updatePartido', ['ngRoute'])
    .config(['$routeProvider' , function($routeProvider) {
        $routeProvider.when('/bet', {
            templateUrl: 'updatePartido/updatePartido.html'
        });
    }])
    .controller('updatePartidoCtrl', ['mundialApi', '$scope', '$timeout',
        function($mundialApi, $scope, $timeout) {
            $scope.tablaUsuarios = null;
            $scope.tablaPartidos = null;
            $scope.tablaInputsWizard = null;

            $scope.selectedTeam = {
                usuario: null,
                resultados: {
                    1: 0,
                    x: 0,
                    2: 0
                },
                partido: null
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
