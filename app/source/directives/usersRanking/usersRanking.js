'use strict';


angular.module('mundialMath.directives')
    .directive('usersRanking', ['$timeout', 'mundialApi', function($timeout, $mundialApi){
        function link($scope, $element){
            $scope.tablaUsuarios = $mundialApi.getUsers();
        }
        return {
            link: link,
            templateUrl: 'directives/usersRanking/templateUsersRanking.html'
        }
    }])
;
