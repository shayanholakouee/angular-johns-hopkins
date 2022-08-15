(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];

function ToBuyShoppingController(ShoppingListCheckOffService) {
  var buyCtrl = this;

  buyCtrl.buyList = ShoppingListCheckOffService.getToBuyShoppingList();

  buyCtrl.BoughtItem = function (itemIndex) {
    ShoppingListCheckOffService.bought(itemIndex);
  };
}

function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
  var boughtCtrl = this;

  boughtCtrl.boughtList = ShoppingListCheckOffService.getBoughtShoppingList();
}

function ShoppingListCheckOffService() {
  var toBuyList = InitializeBuyList();
  var bougthList = [];

  this.getBoughtShoppingList = function () {
    return bougthList;
  };

  this.getToBuyShoppingList = function () {
    return toBuyList;
  };

  this.bought = function (itemIndex) {
    bougthList.push(toBuyList[itemIndex]);
    toBuyList.splice(itemIndex, 1);
  };

  function InitializeBuyList() {
     return [
       {
         name: 'Milk',
         quantity: 2
       },
       {
         name: 'Eggs',
         quantity: 10
       },
       {
         name: 'Tomatos',
         quantity: 3
       },
       {
         name: 'Cheese',
         quantity: .5
       },
       {
         name: 'Cookies',
         quantity: 5
       },
     ]
  }
}

})();
