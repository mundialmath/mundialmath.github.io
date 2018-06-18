angular.module('mundialMath.resources')
    .factory('utilities',  ['$http',  function($http){
        return {
            columnIndex: function(tabla, column){
                return tabla.columns.indexOf(column);
            }
        }
    }
    ]);