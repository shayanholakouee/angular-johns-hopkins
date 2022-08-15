(function () {
  'use strict';
  
  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
  .directive('foundItems', FoundItemsDerective);
  
  function FoundItemsDerective() {
    var ddo = {
      templateUrl: 'founditems.html',
      scope: {
        items: '<',
        onRemove: '&'
      },
      controller: NarrowItDownController,
      controllerAs: 'narrowCtrl',
      bindToController: true
    };
  
    return ddo;
  }
  
  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var narrowCtrl = this;
    narrowCtrl.items = [];
    narrowCtrl.textToSearch = "";
  
    narrowCtrl.NarrowIt = function () {
  
      if (narrowCtrl.textToSearch === "")
      {
        narrowCtrl.items = [];
      }
      else {
        var promise = MenuSearchService.getMatchedMenuItems(narrowCtrl.textToSearch)
        promise.then(function (data)  {
          console.log(data);
          narrowCtrl.items = data;
          })
        }
    }
  
    narrowCtrl.removeItem = function (index) {
      narrowCtrl.items.splice(index, 1)
    }
  }
  
  MenuSearchService.$inject = ['$http', 'ApiBasePath']
  function MenuSearchService($http, ApiBasePath) {
    var menuSvc = this;
  
    menuSvc.getMatchedMenuItems = function(textToSearch) {
  
      return getMenuItems().then(function (response)  {
          return MatchItems(response.data.menu_items, textToSearch);
        })
        .catch(function (error) {
          console.log("Something went terribly wrong.");
          console.log(error);
        })
    };
  
      function MatchItems(menuItems, textToSearch) {
        var foundItems = [];
  
        for (var i = 0; i < menuItems.length; i++) {
  
          if (menuItems[i].description.search(textToSearch) != -1 ) {
            foundItems.push(menuItems[i]);
          }
        }
  
        return foundItems;
      }
  
    function getMenuItems() {
      var response = $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json"),
        parmas: {}
  
      });
      return response;
    };
  }
  
  })();