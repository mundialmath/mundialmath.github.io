'use strict';

angular.module('mundialMath.startPage', ['ngRoute'])
    .config(['$routeProvider' , function($routeProvider) {
        $routeProvider.when('/start', {
            templateUrl: 'startPage/startPage.html'
        });

    }])
    .controller('startPageCtrl', ['mundialApi', '$scope', '$timeout',
        function($mundialApi, $scope, $timeout) {
            $scope.tablaUsuarios = $mundialApi.getUsers();
            $scope.tablaPartidos = $mundialApi.getPartidos();
        }]
    );
