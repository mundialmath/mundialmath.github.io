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
            $scope.tablaStr = '';
            $scope.tablaPartidos = null;
            $scope.columnIndex = $utilities.columnIndex;
            $scope.urlTabla = '';

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

            $scope.addRow = function(){
                var row = [];
                for (var i=0; i<$scope.tablaPartidos.columns.length; i++){
                    row.push('')
                }
                $scope.tablaPartidos.data.push(row)
            };

            $scope.deleteRow = function(i){
                $scope.tablaPartidos.data.splice(i, 1);
            };

            $scope.$watch('tablaPartidos.data', function() {
                var content = $utilities.table2str($scope.tablaPartidos);
                var blob = new Blob([ content ], { type : 'text/plain' });
                $scope.urlTabla = (window.URL || window.webkitURL).createObjectURL( blob );
            }, true);


            (function init(){
                $scope.getPartidos();
            })();
        }]
    );
