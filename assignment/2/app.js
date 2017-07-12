(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject=[ 'ShoppingListCheckOffService'];
  function ToBuyController( ShoppingListCheckOffService) {
    var buy = this;
    buy.items= ShoppingListCheckOffService.toBuy;
    buy.removeItem = function (itemIndex) {
  ShoppingListCheckOffService.removeItem(itemIndex);
};
  }

  AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
      var bought = this;
      bought.items= ShoppingListCheckOffService.boughtAlready;
  }

  function ShoppingListCheckOffService() {
    var service= this;
     service.toBuy=[
      { name: "cookies", quantity: 10 },
      { name: "chips", quantity: 5 },
      { name: "chocolates", quantity: 10 },
      { name: "pizzas", quantity: 2 },
      { name: "tacos", quantity: 20 }
    ];
     service.boughtAlready= [];

    service.removeItem = function (itemIndex){
  var x = service.toBuy.splice(itemIndex,1);
  service.boughtAlready.push({name: x[0].name,
    quantity: x[0].quantity});
    console.log(service.boughtAlready);
    return service.boughtAlready;
    };

    }

  }) ();
