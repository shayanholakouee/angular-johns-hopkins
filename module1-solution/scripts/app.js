(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckerController', LunchCheckerController)

LunchCheckerController.$inject = ['$scope']

function LunchCheckerController($scope) {
  var maxCountOfDishes = 3;
  $scope.userMessage = "";
  $scope.listOfLunchItems = "";
  $scope.errorMessage = "";

  $scope.checkIfTooMuch = function () {
    var resultValidation =  validateListOfItems($scope.listOfLunchItems)

    if (resultValidation.error)
    {
      $scope.userMessage = "";
      $scope.errorMessage = resultValidation.message;
      return;
    }

    var message = getLunchValueVerdict($scope.listOfLunchItems);
    $scope.userMessage = message;
    $scope.errorMessage = "";
  }

 function  validateListOfItems(listOfitems) {
    var result = { error: false, message: "" };

    if (listOfitems.length == 0)
    {
      result.error = true;
      result.message = "Please enter data first";
    }
    else {
      var arrayOfDishes = listOfitems.split(',');
      for (var i = 0; i < arrayOfDishes.length; i++) {
        if (arrayOfDishes[i].length == 0)
        {
          result.error = true;
          result.message = "Please, input correct list of dishes. No empty, use comma separeter.";
        }
      }
    }

    return result;
 }

  function getLunchValueVerdict(listOfitems) {

      var countOfDishes = listOfitems.split(',').length;

      if (countOfDishes > maxCountOfDishes) {
        return "Too much!";
      }
      else {
       return "Enjoy!";
      }
  }
};

})();
