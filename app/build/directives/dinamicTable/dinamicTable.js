'use strict';


angular.module('mundialMath.directives')
    .directive('dinamicTable', ['$timeout', function($timeout){
        function link($scope, $element){
        }
        return {
            scope: {
                table: '=',
            },
            link: link,
            templateUrl: 'directives/dinamicTable/templateDinamicTable.html'
        }
    }])
;
