(function () {
'use strict';

angular.module('Data')
.component('menuItems', {
  templateUrl: 'view/template/items-template.html',
  bindings: {
    items: '<'
  }
});


})();
