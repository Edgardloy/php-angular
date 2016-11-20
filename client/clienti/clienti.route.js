(function(){
  'use strict';
  angular.module('App.clienti')
    .config(config);

    function config($routeProvider){ console.log('route');
      $routeProvider
        .when('/clienti', {
          templateUrl:'/App/build/view/clienti/template/clienti.template.html',
          controller:'clientiController',
          controllerAs: 'vm'
        })
        .when('/clienti/modifica/:id', {
          templateUrl:'/App/build/view/clienti/template/clienti.modifica.template.html',
          controller:'clientiController',
          controllerAs: 'vm'
        })
        .when('/clienti/aggiungi', {
          templateUrl:'/App/build/view/clienti/template/clienti.aggiungi.template.html',
          controller:'clientiController',
          controllerAs: 'vm'
        });
    }
})();
