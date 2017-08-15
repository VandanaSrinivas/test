(function () {
'use strict;'

angular.module('RestaurantApp')
.controller('ComboController', ComboController)
.component('combocomponent', {
  templateUrl: 'templates/combo.template.html',
    bindings: {
      items: '<'
    }

});

ComboController.$inject= ['items'];
function ComboController (items) {
console.log("blahh");
  var comboctrl=this;
  comboctrl.items=items;

console.log(comboctrl.items);

};

})();
