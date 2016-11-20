(function(){
  'use strict';
  angular.module('App.ordini')
    .config(config);

    function config($routeProvider){
      $routeProvider
        .when('/ordini', {
          templateUrl:'/build/view/ordini/template/ordini.html',
          controller:'ordiniController',
          controllerAs: 'vm'
        })
    }
})();
