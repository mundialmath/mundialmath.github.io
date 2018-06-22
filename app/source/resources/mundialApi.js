angular.module('mundialMath.resources')
    .factory('mundialApi',  ['$http',  function($http){
        // var baseUrl = 'http://127.0.0.1:5000';
        var baseUrl = 'https://fierce-waters-19600.herokuapp.com';
        return {
            getUsers: function(){
                return  $http({
                    url: baseUrl+'/users/score',
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
            },
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
            },
            getInputsWizard: function(partido){
                return  $http({
                    url: baseUrl+'/wizard/'+partido,
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
            },
            getPartidos: function(){
                return  $http({
                    url: baseUrl+'/partidos/actual',
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

            getPartidosHistorico: function(){
                return  $http({
                    url: baseUrl+'/partidos/historico',
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
                    url: baseUrl+'/users/'+odds['usuario'],
                    method: 'POST',
                    params: odds,
                    crossDomain: true
                })
            },

            actualizarResultado: function(resultado){
                $http({
                    url: baseUrl+'/partidos/'+resultado['id'],
                    method: 'POST',
                    params: resultado,
                    crossDomain: true
                })
            },

            guardarResultadosHistoricos: function(tabla){
                $http({
                    url: baseUrl+'/partidos/guardar',
                    method: 'POST',
                    params: {tabla: JSON.stringify(tabla)},
                    crossDomain: true
                })
            },

            guardarResultadosUsuarios: function(tabla){
                $http({
                    url: baseUrl+'/users/guardar',
                    method: 'POST',
                    params: {tabla: JSON.stringify(tabla)},
                    crossDomain: true
                })
            }
        }
    }
    ]);