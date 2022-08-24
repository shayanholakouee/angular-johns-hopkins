(function () {
'use strict';

angular.module('Data')
.component('categoryList', {
  templateUrl: 'view/template/categories-template.html',
  bindings: {
    categories: '<'
  }
});

})();
