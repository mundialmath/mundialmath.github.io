'use strict';


angular.module('mundialMath.directives')
    .directive('ediTable', ['$timeout', 'utilities', function($timeout, $utilities){
        function link($scope, $element){
            $scope.urlTabla = '';

            $scope.addRow = function(){
                var row = [];
                for (var i=0; i<$scope.table.columns.length; i++){
                    row.push('')
                }
                $scope.table.data.push(row)
            };

            $scope.deleteRow = function(i){
                $scope.table.data.splice(i, 1);
            };

            $scope.$watch('table.data', function() {
                var content = $utilities.table2str($scope.table);
                var blob = new Blob([ content ], { type : 'text/plain' });
                $scope.urlTabla = (window.URL || window.webkitURL).createObjectURL( blob );
            }, true);

        }
        return {
            scope: {
                table: '=',
                tableName: '=',
                guardarCambios: '&'
            },
            link: link,
            templateUrl: 'directives/ediTable/templateEdiTable.html'
        }
    }])
;
