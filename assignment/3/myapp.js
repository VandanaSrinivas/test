(function() {

  angular.module("NarrowItDownApp", [])
    .controller("NarrowItDownController", NarrowItDownController)
    .service("MenuSearchService", MenuSearchService)
    .directive('foundItems', function() {
      var ddo = {
        restrict: 'E',
        templateUrl: "itemloaderindicator.template.html",
        scope: {
          found: '<',
          onRemove: '&',
          blank: '&'
        }
      };
      return ddo;
    });

  NarrowItDownController.$inject = ['MenuSearchService','$scope'];
  function NarrowItDownController(MenuSearchService, $scope) {
    var ctrl = this;
    ctrl.searchTerm = "";
var found= [];
    ctrl.searchlist = function() {

      if (ctrl.searchTerm.length > 0) {
        console.log(ctrl.searchTerm);
        var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);
        promise.then(function(response) {
          console.log(response);
            ctrl.found = response;
            console.log(ctrl.found);
            return ctrl.found;
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    };

    ctrl.remove = function (index) {
      return MenuSearchService.removeItem(index);
    }

    ctrl.blank = function () {
    if (ctrl.found.length === 0) {
      ctrl.msg = "nothing found!";
      return ctrl.msg;
    }
  };
  }

  MenuSearchService.$inject = ['$http'];
  function MenuSearchService($http) {
    var service = this;
    service.found = [];
    service.errorMsg = "";

    service.getMatchedMenuItems = function(searchTerm) {
        console.log(searchTerm);
          return $http.get("https://davids-restaurant.herokuapp.com/menu_items.json")
          .then(function(response) {

              for (var i = 0; i < response.data.menu_items.length; i++) {
                if (response.data.menu_items[i].description.toLowerCase().indexOf(searchTerm) > -1) {
                  service.found.push(response.data.menu_items[i]);
                }
              }
              // console.log(service.found);
              return service.found;

        })
        .catch(function(error) {
          console.log("something went wrong!!");
        });

    };

    service.removeItem = function (index) {
      service.found.splice(index,1);
      return service.found;
    }

    // service.blank = function () {
    //   if (service.found.length === 0) {
    //     service.errorMsg = "nothing found";
    //     return service.errorMsg;
    //   }
    // }


  }

})();
