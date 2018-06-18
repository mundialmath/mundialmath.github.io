'use strict';


angular.module('mundialMath.directives')
    .directive('dinamicTable', ['$timeout', function($timeout){
        function link($scope, $element){
            $scope.getColumns = function(){
                var tableColumns;
                if ($scope.table !== null){
                    tableColumns = $scope.table.columns;
                } else {
                    tableColumns = null;
                }
                if ($scope.showColumns !== null) {
                    return $scope.showColumns;
                } else {
                    return tableColumns;
                }
            };

            $scope.getTable = function(){
                if ($scope.table === null) {
                    return null
                }
                var columns = getColumns();
                var indexes = [];
                var table = [];
                for (var col in getColumns) {
                    var ind = columns.indexOf(col);
                    if (ind > 0) {
                        indexes.push(ind);
                    }
                }
                for (var row in $scope.table){
                    var nrow = [];
                    for (var i in indexes){
                        nrow.push(row[i]);
                    }
                    table.push(nrow);
                }
                return table;
            };
        }
        return {
            scope: {
                table: '=',
                showColumns: '=?'
            },
            link: link,
            templateUrl: 'directives/dinamicTable/templateDinamicTable.html'
        }
    }])
;
