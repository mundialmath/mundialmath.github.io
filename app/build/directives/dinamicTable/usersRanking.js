'use strict';


angular.module('mundialMath.directives')
    .directive('usersRanking', ['$timeout', function($timeout){
        function link($scope, $element){
            $scope.nombre = 'Sebas';
        }
        return {
            scope: {
                imageProperties: '=',
                defaultImage: '=',
                draggable: '=?'
            },
            link: link,
            templateUrl: 'directives/usersRanking/templateUsersRanking.html'
        }
    }])
;
