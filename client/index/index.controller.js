(function(){
  'use strict';

  angular.module('App.index')
    .controller('indexController', indexController);

    indexController.$inject = ['indexService', '$location'];

    function indexController(ordiniService, $location){
      var vm = this;    
      vm.nuovoTasck = {};

      vm.getTascks = function () {
        return indexService.getTascks()
                .then(function(data){
                return vm.Tascks = data;
              }).catch(function(err){
                return err;
              });
      }
      
      vm.addTasck = function (tasck) {
        return indexService.addTasck(tasck)
          .then(function(data){
          vm.Tasck = {};
          return vm.getTascks();
        }).catch(function(err){
          return err;
        });
      };

      vm.cancellaTasck = function (id) {
        return indexService.delTasck(id)
          .then(function(data){
          return vm.getTascks();
        }).catch(function(err){
          return err;
        });
      }

      vm.change = function (tasck) {
        vm.editTasck(tasck);
      }

      vm.cambiaTasck = function (tasck) {
        vm.nuovoTasck._id = tasck._id;
        vm.nuovoTasck.name = tasck.name;        
      }

      vm.editTasck = function (tasck) {
        return indexService.editTasck(tasck)
          .then(function(data){
            vm.nuovoTasck = {};
          return vm.getTascks();
        }).catch(function(err){
          return err;
        });
      }


    }
})();
