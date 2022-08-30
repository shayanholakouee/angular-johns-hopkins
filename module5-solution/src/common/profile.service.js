(function () {
"use strict";

angular.module('common')
.service('ProfileService', ProfileService);


function ProfileService() {
  var service = this;

/*  service.currentUserProfile =  {
  username: "Test",
  slastname: "Test",
  phone: "888-888-9999",
  email: "topynov@gmail.com",
  favoritedish: "A1",
  registered: true
};*/

  service.getUserProfile = function () {
    return service.currentUserProfile;
  };


  service.setUserProfile = function (userProfile) {
    service.currentUserProfile = userProfile;
    service.currentUserProfile.registered = true;
  };

}



})();
