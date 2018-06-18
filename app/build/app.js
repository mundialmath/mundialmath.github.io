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
;
