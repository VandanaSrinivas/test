(function () {
'use strict;'

angular.module('MenuApp')
.config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'src/templates/home.html'
    })
    .state('categoriesstate', {
      url: '/categories',
      templateUrl: 'src/templates/categorieslist.html',
      controller: 'categoriesController as catctrl',
      resolve: {
        categories:['MenuDataService',function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })
    .state('itemstate', {
       url: '/item-state/{short_name}',
       templateUrl: 'src/templates/items.html',
       controller: 'itemsController as itemctrl',
       resolve: {
        items: ['$stateParams','MenuDataService',
          function ($stateParams, MenuDataService) {
            return MenuDataService.getItemsForCategory([$stateParams.short_name]);

        }]
      }
    });

  }
})();
