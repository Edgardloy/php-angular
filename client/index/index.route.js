(function(){
  'use strict';
  angular.module('App.index')
    .config(config);

    function config($routeProvider){
      $routeProvider
        .when('/', {
          templateUrl:'/build/view/index/template/index.html',
          controller:'indexController',
          controllerAs: 'vm'
        })
    }
})();
