(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];

function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
   .state('home', {
    url: '/',
    templateUrl: 'view/template/home-template.html'
  })
  .state('categories', {
     url: '/categories',
     templateUrl: 'view/template/main-categories-template.html',
     controller: 'CategoriesController as catCtrl',
     resolve: {
       categories: ['MenuDataService',
           function (MenuDataService) {
             return MenuDataService.getAllCategories();
       }]
     }
 })
 .state('items', {
    url: '/items/{categoryName}',
    templateUrl: 'view/template/main-items-template.html',
    controller: 'ItemsController as itemCtrl',
    resolve: {
      items: ['$stateParams', 'MenuDataService',
          function ($stateParams, MenuDataService) {
            return MenuDataService.getItemsForCategory($stateParams.categoryName)
      }]
    }
});

}

})();
