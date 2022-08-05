(function () {
  'use strict';

  angular.module('LunchCheck',[])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = [$scope];
  function LunchCheckController ($scope) {
    $scope.lunchList = "";
    $scope.message = "";
    $scope.color = "";
    $scope.checkLunch = function (){
      const lunchList = $scope.lunchList.split(',')
      if ($scope.lunchList == " " || $scope.lunchList == "") {
        $scope.message = "Please enter data first";
        $scope.color = "text-danger";
      }else if ( lunchList.length <= 3) {
        $scope.message = "Enjoy!";
        $scope.color = "text-success";
      }else if (lunchList.length > 3) {
        $scope.message = "Too Much!";
        $scope.color = "text-danger";
      }
    }
  }

})();
