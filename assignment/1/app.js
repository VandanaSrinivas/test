(function () {
'usestrict';

angular.module('msgApp', [])
.controller('msgController', msgController);

// myController.$inject= ['$scope'];
function msgController ($scope) {
$scope.liststring=" ";
$scope.msg="Please enter data first";

$scope.final= function () {
  var separator = ","
  var arrayOfStrings = $scope.liststring.split(separator);
  if (arrayOfStrings.length<4) {
        $scope.msg ="Enjoy!";

  }else if (arrayOfStrings.length>3) {
    $scope.msg ="Too much!";

  }
return $scope.msg;

}

}

})();
