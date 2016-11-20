(function(){
  'use strict';

  angular.module('App.index')
    .factory('indexService', indexService);

    indexService.$inject = ['$resource'];

    function indexService($resource){
      var Tascks = $resource('/:id', {id: '@id'}, 
        {
          'getAll':{method: 'GET', isArray: true}, 
          'save':{method: 'POST'}, 
          'delete':{method: 'DELETE'},
          'update':{method:'PUT'}
        });
      

      return{
        addTasck: addTasck,
        getTascks: getTascks,
        delTasck: delTasck,
        editTasck: editTasck
      }

      function addTasck(tasck, callback) {
        callback = callback || angular.noop;
        return Tascks.save(tasck, function(data){
          return callback(data);
        }, function(err){
          return callback(err);
        }).$promise;
      }

      function getTascks() {
        return Tascks.getAll().$promise;
      }

      function delTasck(tasckId, callback) {
        callback = callback || angular.noop;
        return Tascks.delete({'id': tasckId}, function(data){
          return callback(data);
        }, function(err){
          return callback(err);
        }).$promise;
      }

      function editTasck(tasck, callback) {
        callback = callback || angular.noop;
        return Tascks.update({'id': tasck._id}, tasck, function(data){
          return callback(data);
        }, function(err){
          return callback(err);
        }).$promise;
      }

    }

})();
