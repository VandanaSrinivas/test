(function () {
'use strict';

angular.module("NarrowItDownApp", [])
.controller("NarrowItDownController", NarrowItDownController)
.service("MenuSearchService", MenuSearchService)
.directive('foundItems', function () {
 var ddo = {
   restrict: 'E',
   templateUrl : "itemloaderindicator.template.html",
   scope : {
     found : '<',
     onRemove : '&'
   }
 };
 return ddo;
});

NarrowItDownController.$inject=['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var ctrl = this;
   ctrl.searchTerm = "";

  //  ctrl.searchlist = function () {
  //        if (ctrl.searchTerm.length > 0) {
  //          console.log(ctrl.searchTerm);
  //          var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);
  //          promise.then(function (response) {
   //
  //          ctrl.found = response;
  //  console.log(ctrl.found)
  //        })
  //    .catch(function (error) {
  //    console.log(error);
  //    });
  //    }
  //  };
ctrl.searchlist = function () {
  if (ctrl.searchTerm.length > 0) {
    console.log(ctrl.searchTerm);

    ctrl.found = MenuSearchService.getItems();
}
}
}

MenuSearchService.$inject = ['$http', '$q'];
function MenuSearchService($http, $q) {
var service= this;
var found = [];

service.getMatchedMenuItems = function (searchTerm) {


return $http.get("https://davids-restaurant.herokuapp.com/menu_items.json")
.then(function (response) {
  for (var i = 0; i < response.data.menu_items.length; i++) {
  if (response.data.menu_items[i].description.toLowerCase().indexOf(searchTerm) >-1 ) {
    found.push(response.data.menu_items[i]);

}
}console.log(found);
console.log("2po");
})
.catch(function (error){
  console.log("blahhhh!!!");
});

}

service.getItems = function () {
  return found;
}
}

}) ();
