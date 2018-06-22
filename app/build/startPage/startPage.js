'use strict';

angular.module('mundialMath.startPage', ['ngRoute'])
    .config(['$routeProvider' , function($routeProvider) {
        $routeProvider.when('/start', {
            templateUrl: 'startPage/startPage.html'
        });
    }])
    .controller('startPageCtrl', ['mundialApi', '$scope', '$timeout',
        function($mundialApi, $scope, $timeout) {
            $scope.tablaUsuarios = null;
            $scope.tablaPartidos = null;

            $scope.getPartidos = function(){
                $mundialApi.getPartidosHistorico()
                    .then(function (response) {
                        $scope.tablaPartidos = response.data
                    }, function(response) {
                        console.log(response);
                    });
            };

            $scope.getUsers = function(){
                $mundialApi.getUsers()
                    .then(function (response) {
                        $scope.tablaUsuarios = response.data;
                    }, function(response) {
                        console.log(response);
                    });
            };

            (function init(){
                $scope.getPartidos();
                $scope.getUsers();
            })();

        }]
    );
