(function () {
'use strict;'

angular.module('RestaurantApp')
.config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'templates/categories.html',
      controller: 'CategoriesController as catctrl',
      resolve: {
        categories:['MenuitemsService',function (MenuitemsService) {
          // console.log(MenuitemsService.getCategories());
          return MenuitemsService.getCategories();
        }]
      },

      css: '../css/styles.css'
    })
    // .state('breakfaststate', {
    //   url: '/breakfastmenu',
    //   templateUrl: 'templates/breakfastmenu.html',
    //   controller: 'BreakfastController as bfctrl',
    //   resolve: {
    //     items:['MenuitemsService',function (MenuitemsService) {
    //       // console.log(MenuitemsService.getBreakfastMenu());
    //       return MenuitemsService.getBreakfastMenu();
    //     }]
    //   }
    // })
    .state('itemstate', {
                  url: '/item-state/{name}',
                  templateUrl: 'templates/items.html',
                  controller: 'itemsController as itemsctrl',
                  resolve: {
                  items: ['$stateParams','MenuitemsService',
                    function ($stateParams, MenuitemsService) {
                      console.log("inside item state view");
                      console.log([$stateParams.name]);
                      console.log(MenuitemsService.getItemsForCategory([$stateParams.name]));
                      return MenuitemsService.getItemsForCategory([$stateParams.name]);
                  }]
                  }
                });


  }
})();
