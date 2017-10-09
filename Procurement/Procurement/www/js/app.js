angular.module('starter', ['ionic', 'starter.controllers','starter.services','ionic-datepicker','ngCordova','angular.filter'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $provide) {
 $provide.decorator('$state', function($delegate, $stateParams) {
        $delegate.forceReload = function() {
            return $delegate.go($delegate.current, $stateParams, {
                reload: true,
                inherit: false,
                notify: true
            });
        };
        return $delegate;
  })

  $stateProvider
    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.particular_prospect_details', {
    url: '/particular_prospect_details/{id}',
    views: {
      'menuContent': {
        templateUrl: 'templates/particular_prospect_details.html',
        controller: 'GetParticularLeadData',
        cache: false
      }
    }
  })
   
.state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
        //controller: 'PlaylistCtrl'
      }
    }
  })

 
.state('app.notification_panel', {
   url: '/notification_panel',
   views: {
     'menuContent': {
       templateUrl: 'templates/notification_panel.html'
     }
   }
 })

.state('app.po_details', {
   url: '/po_details',
   views: {
     'menuContent': {
       templateUrl: 'templates/po_details.html'
     }
   }
 })

 .state('app.terms', {
   url: '/terms',
   views: {
     'menuContent': {
       templateUrl: 'templates/terms.html'
     }
   }
 })
 
.state('app.profile', {
   url: '/profile',
   views: {
     'menuContent': {
       templateUrl: 'templates/profile.html'
     }
   }
 })
 
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});

