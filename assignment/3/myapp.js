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
          searchTerm: '<',
          err: '<'
        }
      };
      return ddo;
    });

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var ctrl = this;
    ctrl.searchTerm = "";
    ctrl.searchlist = function() {

      if (ctrl.searchTerm.length > 0) {
ctrl.err="";
        var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);
        promise.then(function(response) {
            ctrl.found = response;
            return ctrl.found;
          })
          .catch(function(error) {
            console.log(error);
          });
      }
      else  {
        console.log("nothing found");
        ctrl.err= "nothing found!!!!!";
      }
    };

    ctrl.remove = function (index) {
      return MenuSearchService.removeItem(index);
      }
    }

  MenuSearchService.$inject = ['$http'];
  function MenuSearchService($http) {
    var service = this;

    service.counter= 0;
    service.getMatchedMenuItems = function(searchTerm) {
        console.log(searchTerm);
          return $http.get("https://davids-restaurant.herokuapp.com/menu_items.json")
          .then(function(response) {
            service.found = [];
              for (var i = 0; i < response.data.menu_items.length; i++) {

                if (response.data.menu_items[i].description.toLowerCase().indexOf(searchTerm) > -1) {
                  service.found.push(response.data.menu_items[i]);
                }
              }
              return service.found;
        })
        .catch(function(error) {
          console.log("something went wrong!!");
        });

    };

    service.removeItem = function (index) {
      service.found.splice(index,1);
      if (service.found.length == 0) {
        console.log(service.found);
        console.log("nothing left");
      }
    }

  }

})();
