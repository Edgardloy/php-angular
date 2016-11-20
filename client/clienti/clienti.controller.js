(function(){
  'use strict';

  angular.module('App.clienti')
    .controller('clientiController', clientiController);

    clientiController.$inject = ['clientiService', '$location'];

    function clientiController(clientiService, $location){ console.log('Ctrl');
      var vm = this;
      vm.newCliente = {};

      vm.listaClienti = function(){
        return clientiService.getAll()
        // then catch promise
        .then(function(response){
          vm.clienti = response; //console.log(vm.clienti);
          return;
        }).catch(function(err){
          return err;
        });
      };

      vm.dettaglioCliente = function(Cliente) {
        vm.newCliente.id = Cliente.id;
        $location.path('/clienti/modifica/' + vm.newCliente.id);
      };

      // vm.ottieniCliente = function() {
      //   return clientiService.get()
      // }

      vm.aggiungi = function() {
        $location.path('/clienti/aggiungi');
      };



      vm.salvaCliente = function() { console.log(vm.newCliente.id);
        // return clientiService.saveCliente(vm.newCliente, function(response){
        //   console.log(response);
        //   vm.getMyclienti();
        //   return vm.newCliente = {};
        // }, function(err){
        //   console.log(err);
        // });
        if(!vm.newCliente.id) { console.log('save');
        return clientiService.save(vm.newCliente)
          .then(function(){
            vm.getMyclienti();
            return vm.newCliente = {};
          }).catch(function(err){ console.log(err);
            return err;
          });
        } else { console.log('edit');
          return clientiService.edit(vm.newCliente)
          .then(function() {
            vm.getMyclienti();
            return vm.newCliente = {};
          }).catch (function(err){
            return err;
          });

        }
      };

      vm.cancellaCliente = function(id) { //console.log(id);
        return clientiService.delete(id)
          .then(function(){
            vm.getMyclienti();
            return vm.newCliente = {};
          }).catch(function(err){
            return err;
          });
      };

    }

})();
