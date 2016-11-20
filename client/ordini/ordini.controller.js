(function(){
  'use strict';

  angular.module('App.ordini')
    .controller('ordiniController', ordiniController);

    ordiniController.$inject = ['ordiniService', '$location'];

    function ordiniController(ordiniService, $location){
      var vm = this;    
      vm.nuovoTasck = {};

      vm.getTascks = function () {
        return ordiniService.getTascks()
                .then(function(data){
                return vm.Tascks = data;
              }).catch(function(err){
                return err;
              });
      }
      
      vm.addTasck = function (tasck) {
        return ordiniService.addTasck(tasck)
          .then(function(data){
          vm.Tasck = {};
          return vm.getTascks();
        }).catch(function(err){
          return err;
        });
      };

      vm.cancellaTasck = function (id) {
        return ordiniService.delTasck(id)
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
        return ordiniService.editTasck(tasck)
          .then(function(data){
            vm.nuovoTasck = {};
          return vm.getTascks();
        }).catch(function(err){
          return err;
        });
      }


    }
})();
