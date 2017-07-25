(function () {
'use strict;'

angular.module('MenuApp')
.component('itemscomponent', {
  templateUrl: 'src/templates/items.template.html',
    bindings: {
      items: '<'
    }

});

})();
