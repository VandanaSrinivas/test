(function () {
'use strict;'

angular.module('RestaurantApp')
.controller('BiryaniController', BiryaniController)
.component('biryanicomponent', {
  templateUrl: 'templates/biryani.template.html',
    bindings: {
      items: '<'
    }

});

BiryaniController.$inject= ['items'];
function BiryaniController (items) {
console.log("blahh");
  var biryanictrl=this;
  biryanictrl.items=items;

console.log(biryanictrl.items);

};

})();
