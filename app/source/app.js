'use strict';


angular.module('mundialMath', [
    'mundialMath.startPage',
    'mundialMath.updatePartido',
    'mundialMath.resources',
    'mundialMath.directives',
    'mundialMath.actualizarResultados'
])
    .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('');
        $routeProvider.otherwise({redirectTo: '/start'});
    }])
    .controller('mainControl', ['mundialApi', '$scope', '$timeout', '$location',
        function($mundialApi, $scope, $timeout, $location) {
            $scope.redirigir = function(pagina){
                $location.path('/'+pagina);
            }
    }
    ])
;
