(function () {
'use strict;'

angular.module('RestaurantApp')
.controller('BreakfastController', BreakfastController)
.component('breakfastcomponent', {
  templateUrl: 'templates/breakfast.template.html',
    bindings: {
      items: '<'
    }

});

BreakfastController.$inject= ['items'];
function BreakfastController (items) {

  var bfctrl=this;
  bfctrl.items=items;
console.log("inside bf controller");
console.log(bfctrl.items);

};

})();
