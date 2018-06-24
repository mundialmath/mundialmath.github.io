angular.module("mundialMath.resources").factory("mundialApi",["$http",function(r){var t="http://127.0.0.1:5000";return{getUsers:function(){return r({url:t+"/users/score",method:"GET",withCredentials:!1,crossDomain:!0,eventHandlers:{}})},getInputs:function(s){return r({url:t+"/users/"+s,method:"GET",withCredentials:!1,crossDomain:!0,eventHandlers:{}})},getInputsWizard:function(s){return r({url:t+"/wizard/"+s,method:"GET",withCredentials:!1,crossDomain:!0,eventHandlers:{}})},getPartidos:function(){return r({url:t+"/partidos/actual",method:"GET",withCredentials:!1,crossDomain:!0,eventHandlers:{}})},getPartidosHistorico:function(){return r({url:t+"/partidos/historico",method:"GET",withCredentials:!1,crossDomain:!0,eventHandlers:{}})},enviarOdds:function(s){r({url:t+"/users/"+s.usuario,method:"POST",params:s,crossDomain:!0})},actualizarResultado:function(s){r({url:t+"/partidos/"+s.id,method:"POST",params:s,crossDomain:!0})},guardarResultadosHistoricos:function(s){r({url:t+"/partidos/guardar",method:"POST",params:{tabla:JSON.stringify(s)},crossDomain:!0})},guardarResultadosUsuarios:function(s){r({url:t+"/users/guardar",method:"POST",params:{tabla:JSON.stringify(s)},crossDomain:!0})}}}]);