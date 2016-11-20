(function(){
  'use strict';

  angular.module('App.clienti')
    .factory('ClientiService',ClientiService);

    ClientiService.$inject = ['$resource'];

    function ClientiService($resource){ console.log('Service');

      var Clienti = $resource('/Clienti/:id', {id:'@id', Clienti:'@Clienti'},
                    {'getAll':{method: 'GET'}}, //, isArray: true
                    {'save': {method: 'POST'}},
                    {'edit': {method: 'PUT'}},
                    {'get': {method: 'GET'}},
                    {'remove': {method: 'DELETE'}}
                  );

      return{
        getAll: getAll,
        save: save,
        remove: remove,
        edit: edit
      };

      function getAll(callback){
        callback = callback || angular.noop;
        return Clienti.getAll(function(Clienti){
          return callback(Clienti);
        }, function(err){
          return callback(err);
        }).$promise;
      }

      function save(newCliente, callback){   //rifarla con la promise
        callback = callback || angular.noop;
        //console.log(newCliente);
        return Clienti.save(newCliente, function(data){
          return callback(data);
        }, function(err) {
          return callback(err);
        }).$promise;

      }

      function remove(id, callback) { //console.log(id);
        callback = callback || angular.noop;
        return Clienti.remove({'id':id}, function(){
          return callback('del ok');
        }, function(err){
          return callback(err);
        }).$promise;

      }

      function edit(id, Cliente, callback) { //console.log(Cliente.weapons);
        callback = callback || angular.noop;
        return Clienti.edit({'id':id}, Cliente, function(data){
          return callback(data);
        }, function(err) {
          return callback(err);
        }).$promise;
      }

      // function get(id, Cliente, callback) { //console.log(Cliente.weapons);
      //   callback = callback || angular.noop;
      //   return Clienti.edit({'id':id}, Cliente, function(data){
      //     return callback(data);
      //   }, function(err) {
      //     return callback(err);
      //   }).$promise;
      // }

      }


})();
