angular.module('mundialMath.resources', [])
    .factory('userApi',  ['$http',  function($http){
        let baseUrl = 'http://127.0.0.1:5000';
        return {
            getUsers: function(){
                return  $http({
                    url: baseUrl+'/users/score',
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

            enviarOdds: function(odds){
                $http({
                    url: baseUrl+'/users/'+odds['usuario']+'/',
                    method: 'POST',
                    params: odds,
                    crossDomain: true
                })
            }
        }
    }])
    .factory('userInputApi',  ['$http',  function($http){
        return {
            getInputs: function(userName){
                return  $http({
                    url: baseUrl+'/users/'+userName,
                    method: 'GET',
                    withCredentials: false,
                    crossDomain: true,
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
            }
        }
    }
    ])
    .factory('partidosApi',  ['$http',  function($http){
        return {
            getPartidos: function(){
                return  $http({
                    url: baseUrl+'/partidos',
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
            }
        }
    }
    ]);