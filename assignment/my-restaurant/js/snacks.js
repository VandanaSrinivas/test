(function () {
'use strict;'

angular.module('RestaurantApp')
.controller('SnacksController', SnacksController)
.component('snackcomponent', {
  templateUrl: 'templates/snacks.template.html',
    bindings: {
      items: '<'
    }

});

SnacksController.$inject= ['items'];
function SnacksController (items) {
console.log("blahh");
  var snackctrl=this;
  snackctrl.items=items;

console.log(snackctrl.items);

};

})();
