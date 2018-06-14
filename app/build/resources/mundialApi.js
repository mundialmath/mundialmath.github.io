angular.module('mundialMath.resources', [])
    .factory('mundialApi',  ['$http',  function($http){
        return {
            getUsers: function(){
                return  $http({
                    url: 'http://127.0.0.1:5000/users/score',
                    method: 'GET',
                    withCredentials: false,
                    crossDomain:true,
                    eventHandlers: {
                    }
                });
                // return {
                //     columns: ['Nombre', 'Telefono'],
                //     data: [
                //         ['Juan', 3],
                //         ['Camilo', 4]
                //     ]
                // }
            },

            getPartidos: function(){
                return  $http({
                    url: 'http://127.0.0.1:5000/partidos',
                    method: 'GET',
                    withCredentials: false,
                    crossDomain:true,
                    eventHandlers: {
                    }
                });
                // return {
                //     columns: ['id', '1', '2'],
                //     data: [
                //         ['fdsaf2', "rusia", "mexico"],
                //         ['ddfda3', 4, 5],
                //         ['ddfda3', 4, 5],
                //         ['ddfda3', 4, 5],
                //         ['ddfda3', 4, 5],
                //         ['ddfda3', 4, 5]
                //     ]
                // }
            },

            enviarOdds: function(odds){
                $http({
                    url: 'http://127.0.0.1:5000/users/sebas',
                    method: 'POST',
                    params: odds,
                    crossDomain: true
                })
            }
        }
    }
    ]);