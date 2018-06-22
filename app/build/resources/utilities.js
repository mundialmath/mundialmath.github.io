angular.module('mundialMath.resources')
    .factory('utilities',  ['$http',  function($http){
        return {
            columnIndex: function(tabla, column){
                return tabla.columns.indexOf(column);
            },

            table2str: function (tabla){
                if ((tabla === null) || (typeof tabla === "undefined")){
                    return '';
                }
                var strTabla = tabla.columns.join()+'\n';
                for (var i in tabla.data){
                    strTabla += tabla.data[i].join()+'\n';
                }
                return strTabla;
            }
        }
    }
    ]);