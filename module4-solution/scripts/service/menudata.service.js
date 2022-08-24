
(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")

MenuDataService.$inject = ['$http','ApiBasePath']
function MenuDataService ($http, ApiBasePath) {
  var dataSvc = this;

  this.getAllCategories = function () {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json"),
      params: {}

    });

    return response;
  }

  this.getItemsForCategory = function (categoryShortName) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: {category: categoryShortName}
    });

    return response;
  }

}


})();
