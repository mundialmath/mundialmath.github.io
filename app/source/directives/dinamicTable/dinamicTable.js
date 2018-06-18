'use strict';


angular.module('mundialMath.directives')
    .directive('dinamicTable', ['$timeout', function($timeout){
        function link($scope, $element){
            $scope.showColumns = (typeof $scope.showColumns !== "undefined") ? $scope.showColumns: $scope.table.columns;
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
