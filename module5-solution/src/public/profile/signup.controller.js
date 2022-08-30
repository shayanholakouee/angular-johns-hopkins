(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['ProfileService', 'MenuService', 'userInfo']
function SignUpController(ProfileService, MenuService, userInfo) {
  var signup = this;
  signup.user = userInfo;
  signup.completed = false;
  signup.submit = function () {

    var menuItem = MenuService.getMenuItem(signup.user.favoritedish).then(
      function (menuItem) {
        console.log(menuItem);
        if (menuItem == null)
        {
          signup.notFoundDish = true;
          signup.completed = false;
          return;
        }
        else {
          signup.notFoundDish = false;
          ProfileService.setUserProfile(signup.user);
          signup.completed = true;
        }
      }
    );
  };
}

})();
