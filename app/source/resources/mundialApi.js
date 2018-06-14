angular.module('mundialMath.resources', [])
    .factory('mundialApi',  ['$http',  function($http){
        return {
            getUsers: function(){
                return {
                    columns: ['Nombre', 'Telefono'],
                    data: [
                        ['Juan', 3],
                        ['Camilo', 4]
                    ]
                }
            },

            getPartidos: function(){
                return {
                    columns: ['id', '1', '2'],
                    data: [
                        ['fdsaf2', "rusia", "mexico"],
                        ['ddfda3', 4, 5]
                    ]
                }
            }
        }
    }
    ]);