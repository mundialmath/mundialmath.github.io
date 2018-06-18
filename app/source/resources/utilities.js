angular.module('mundialMath.resources')
    .filter('reverse', function(){
        return 'fdsafdsf';
    })
    .factory('utilities',  ['$http',  function($http){
        return {
            columnIndex: function(tabla, column){
                return tabla.columns.indexOf(column);
            }
        }
    }
    ]);