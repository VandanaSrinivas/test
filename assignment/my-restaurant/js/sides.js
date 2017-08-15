(function () {
'use strict;'

angular.module('RestaurantApp')
.controller('SidesController', SidesController)
.component('sidescomponent', {
  templateUrl: 'templates/sides.template.html',
    bindings: {
      items: '<'
    }

});

SidesController.$inject= ['items'];
function SidesController (items) {
console.log("blahh");
  var sidesctrl=this;
  sidesctrl.items=items;

console.log(sidesctrl.items);

};

})();
