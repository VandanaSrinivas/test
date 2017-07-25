(function () {
'use strict;'

angular.module('data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject= ['$http'];
function MenuDataService($http) {
  var service=this;

  service.getAllCategories = function () {
    return  $http.get('https://davids-restaurant.herokuapp.com/categories.json')
    .then(function (response) {
      return response;
    })
    .catch(function (err) {
      console.log(err);
      console.log("something went wrong!");
    });
  }

  service.getItemsForCategory = function (short_name) {
    console.log(short_name);
    return $http.get(' https://davids-restaurant.herokuapp.com/menu_items.json', {params: {category: short_name}})
      .then(function (response) {
      return response;
    })
    .catch(function (err) {
      console.log(err);
      console.log("something went wrong!");
    });

  }

}

})();
