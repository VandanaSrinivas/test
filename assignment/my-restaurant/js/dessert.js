(function () {
'use strict;'

angular.module('RestaurantApp')
.controller('DessertController', DessertController)
.component('dessertcomponent', {
  templateUrl: 'templates/dessert.template.html',
    bindings: {
      items: '<'
    }

});

DessertController.$inject= ['items'];
function DessertController (items) {
console.log("blahh");
  var dessertctrl=this;
  dessertctrl.items=items;

console.log(dessertctrl.items);

};

})();
