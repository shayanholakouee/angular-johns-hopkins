(function () {
'use strict';

angular.module('Data')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['MenuDataService', 'items'];
function ItemsController(MenuDataService, items) {
  var itemsList = this;
  itemsList.items = items.data.menu_items;
  itemsList.category = items.data.category;
  console.log(items.data)
}

})();
