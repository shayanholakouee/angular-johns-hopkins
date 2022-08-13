(function () {
  'use strict';

  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController (ShoppingListCheckOffService) {
    var toBuy = this ;
    toBuy.toBuyList = ShoppingListCheckOffService.getToBuyList();
    toBuy.swapItem = function (itemIndex) {
      try {
        ShoppingListCheckOffService.swapItem(itemIndex);
      } catch (error) {
        toBuy.errorMessage = error.message;
      } 
    }
  
  }
  // ----------------------------------------

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController (ShoppingListCheckOffService) {
    var alreadyBought = this;
    alreadyBought.status = ShoppingListCheckOffService.getStatus()
    console.log(alreadyBought.status)
    alreadyBought.list = ShoppingListCheckOffService.getBoughtList();

  }

  //--------- service ------------
  function ShoppingListCheckOffService (){
    var service = this ;

    let status =[{s: false}] ;

    var toBuyList = [
      { name: "cookies", quantity: 10 },
      { name: "bottle of water ", quantity: 12 },
      { name: "pasta", quantity: 3 },
      { name: "tomato", quantity: 9},
      { name: "coffee", quantity: 5 }
    ];
    var boughtList = [];
    

    service.getToBuyList = function (){
      return toBuyList;
    }

    service.getBoughtList = function (){
      return boughtList;
    }

    service.getStatus = function (){
      return status
    }

    service.swapItem = function(itemIndex){
      if (toBuyList.length > 1){
        var item = {
          name: toBuyList[itemIndex].name,
          quantity: toBuyList[itemIndex].quantity
        };
        var st = {
          s: true
        }
        boughtList.push(item)
        status.push(st)
        toBuyList.splice(itemIndex, 1);
        console.log(status)
      }else if (toBuyList.length == 1) {
        var item = {
          name: toBuyList[itemIndex].name,
          quantity: toBuyList[itemIndex].quantity
        };
        boughtList.push(item)
        toBuyList.splice(itemIndex, 1);
        throw new Error("Everything is bought!");
      }

    }
    
  }
})();
