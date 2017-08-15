(function () {
'use strict';

angular.module('RestaurantApp')
.controller('itemsController', itemsController)
.component('itemscomponent', {
  templateUrl: 'templates/items.template.html',
    bindings: {
      items: '<'
    }

});

itemsController.$inject= ['items'];
function itemsController (items) {

  var itemsctrl=this;
  itemsctrl.items=items;
console.log("inside itms controller");
console.log(itemsctrl.items);

}

})();
