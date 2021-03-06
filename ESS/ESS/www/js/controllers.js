angular.module('starter.controllers', ['ionic'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller("MpinCtrl", function($ionicPlatform) {
  console.log("MPIN");
    var correctPassword = "1337"; 
})
.controller('AlertCtrl', function($scope, $ionicPopup) {
   $scope.showAlert = function(name) {

      var alertPopup = $ionicPopup.alert({
         title: name,
         template: '<p align="center">No Data Found!</p>'
      });

      alertPopup.then(function(res) {
         // Custom functionality....
      });
   };
})
//Adding Slide Box here
 .controller("SlideCtrl", function($scope, $ionicSlideBoxDelegate) {
    $scope.navSlide = function(index) {
        $ionicSlideBoxDelegate.slide(index, 500);
    }
})

.controller('HomeController', function($scope, $http, $filter, $state, $location, $window, $rootScope) {
 
  $rootScope.UserId="3375";
  console.log($rootScope.UserId);

})



// .controller('AppCtrl', function($scope, $ionicModal) {
  
//   $ionicModal.fromTemplateUrl('templates/logs.html', {
//     scope: $scope
//   }).then(function(logs) {
//     $scope.modal = logs;
//   });  
 
// })







