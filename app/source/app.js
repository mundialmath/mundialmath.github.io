'use strict';


angular.module('mundialMath', [
    'mundialMath.startPage',
    'mundialMath.resources',
    'mundialMath.directives'
])
    .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('');
        $routeProvider.otherwise({redirectTo: '/start'});
    }])
;
