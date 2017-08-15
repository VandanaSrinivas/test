//categories controller

(function () {
'use strict;'

angular.module('RestaurantApp')
.controller('CategoriesController', CategoriesController)
.component('categoriescomponent', {
  templateUrl: 'templates/categories.template.html',
    bindings: {
      categories: '<'
    }

});

CategoriesController.$inject = ['categories'];
function CategoriesController(categories) {
var catctrl = this;
 catctrl.categories=categories;

 console.log("inside categories controller");
 console.log(catctrl.categories);


}





})();
