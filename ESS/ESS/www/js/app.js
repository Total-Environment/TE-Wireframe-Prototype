// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
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

.config(function($stateProvider, $urlRouterProvider,$provide) {
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

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
      }
    }
  })
/*Reimbursement States*/

/*List of Claims for employee*/
   .state('app.Reimbursement', {
    url: '/Reimbursement/:user?',
    views: {
      'menuContent': {
        templateUrl: 'templates/Reimbursement/Employee/Reimbursement.html',
        //controller : 'ReimbursementController as vm'
      }
    }
  })
/*Claim book detail view*/
   .state('app.Reimbursement-view', {
    url: '/Reimbursement-view/:claimbookid?',
    views: {
      'menuContent': {
        templateUrl: 'templates/Reimbursement/Employee/Reimbursement-view.html'
      }
    }
  })
/*Claim Book and Item creation view*/
   .state('app.Reimbursement-create', {
    url: '/Reimbursement-create/:claimbookid?,claimitemid?',
    views: {
      'menuContent': {
        templateUrl: 'templates/Reimbursement/Employee/Reimbursement-create.html'
      }
    }
  })
  /*Not in use*/
  // .state('app.Reimbursement-add-item', {
  //   url: '/Reimbursement-add-item/:id?',
  //   views: {
  //     'menuContent': {
  //       templateUrl: 'templates/Reimbursement/Employee/Reimbursement-add-item.html'
  //     }
  //   }
  // })
/*Claim item detail view*/
  .state('app.Reimbursement-view-item', {
    url: '/Reimbursement-view-item/:claimitemid?',
    views: {
      'menuContent': {
        templateUrl: 'templates/Reimbursement/Employee/Reimbursement-view-item.html'
      }
    }
  })
  /*List of claims for manager approval*/
  .state('app.Reimbursement-manager', {
    url: '/Reimbursement-manager/:user?',
    views: {
      'menuContent': {
        templateUrl: 'templates/Reimbursement/Manager/Reimbursement-manager.html',
        //controller:"ReimbursementController as vm"
      }
    }
  })
    /*Claim book detail for manager approval*/
  .state('app.Reimbursement-manager-view', {
    url: '/Reimbursement-manager-view/:claimbookid?',
    views: {
      'menuContent': {
        templateUrl: 'templates/Reimbursement/Manager/Reimbursement-manager-view.html'
      }
    }
  })
  /*Not in use*/
  // .state('app.Reimbursement-manager-view-item', {
  //   url: '/Reimbursement-manager-view-item',
  //   views: {
  //     'menuContent': {
  //       templateUrl: 'templates/Reimbursement/Manager/Reimbursement-manager-view-item.html'
  //     }
  //   }
  // })
/*List of Claims finance approval*/
  .state('app.Reimbursement-Finance', {
    url: '/Reimbursement-Finance/:user?',
    views: {
      'menuContent': {
        templateUrl: 'templates/Reimbursement/Finance/Reimbursement-Finance.html'
      }
    }
  })
  /*Claim book detail for finance approval*/
  .state('app.Reimbursement-Finance-view', {
    url: '/Reimbursement-Finance-view/:claimbookid?',
    views: {
      'menuContent': {
        templateUrl: 'templates/Reimbursement/Finance/Reimbursement-Finance-view.html'
      }
    }
  })
  /*Not in use*/
  // .state('app.Reimbursement-Finance-view-item', {
  //   url: '/Reimbursement-Finance-view-item',
  //   views: {
  //     'menuContent': {
  //       templateUrl: 'templates/Reimbursement/Finance/Reimbursement-Finance-view-item.html'
  //     }
  //   }
  // })
  /*Reimbursement landing view*/
  .state('app.reimbus-all', {
    url: '/reimbus-all',
    views: {
      'menuContent': {
        templateUrl: 'templates/Reimbursement/reimbus-all.html'
      }
    }
  })
  





// ESS

  .state('app.ess-home', {
    url: '/ess-home',
    views: {
      'menuContent': {
        templateUrl: 'templates/ESS/ess-home.html'
      }
    }
  })
  
  .state('app.attendance', {
    url: '/attendance',
    views: {
      'menuContent': {
        templateUrl: 'templates/ESS/attendance.html'
      }
    }
  })

   .state('app.leave-summary', {
    url: '/leave-summary',
    views: {
      'menuContent': {
        templateUrl: 'templates/ESS/leave-summary.html'
      }
    }
  })

  .state('app.absent-info', {
    url: '/absent-info',
    views: {
      'menuContent': {
        templateUrl: 'templates/ESS/absent-info.html'
      }
    }
  })
  .state('app.regularization', {
    url: '/regularization',
    views: {
      'menuContent': {
        templateUrl: 'templates/ESS/regularization.html'
      }
    }
  })
  .state('app.apply-leave', {
    url: '/apply-leave',
    views: {
      'menuContent': {
        templateUrl: 'templates/ESS/apply-leave.html'
      }
    }
  })
  
  .state('app.my-team', {
    url: '/my-team',
    views: {
      'menuContent': {
        templateUrl: 'templates/ESS/my-team.html'
      }
    }
  })
  .state('app.attendance-view', {
    url: '/attendance-view',
    views: {
      'menuContent': {
        templateUrl: 'templates/ESS/attendance-view.html'
      }
    }
  })

  .state('app.attendance-logs', {
    url: '/attendance-logs',
    views: {
      'menuContent': {
        templateUrl: 'templates/ESS/attendance-logs.html'
      }
    }
  })
  .state('app.attendance-yes', {
    url: '/attendance-yes',
    views: {
      'menuContent': {
        templateUrl: 'templates/ESS/attendance-yes.html'
      }
    }
  })

  .state('app.attendance-no', {
    url: '/attendance-no',
    views: {
      'menuContent': {
        templateUrl: 'templates/ESS/attendance-no.html'
      }
    }
  })
  .state('app.attendance-approvals', {
    url: '/attendance-approvals',
    views: {
      'menuContent': {
        templateUrl: 'templates/ESS/attendance-approvals.html'
      }
    }
  })

  .state('app.attendance-approval-details', {
    url: '/attendance-approval-details',
    views: {
      'menuContent': {
        templateUrl: 'templates/ESS/attendance-approval-details.html'
      }
    }
  })
 
 .state('app.my-team-logs', {
    url: '/my-team-logs',
    views: {
      'menuContent': {
        templateUrl: 'templates/ESS/my-team-logs.html'
      }
    }
  })

.state('app.approvals-home', {
    url: '/approvals-home',
    views: {
      'menuContent': {
        templateUrl: 'templates/ESS/approvals-home.html'
      }
    }
  })
  .state('app.leave-approvals', {
    url: '/leave-approvals',
    views: {
      'menuContent': {
        templateUrl: 'templates/ESS/leave-approvals.html'
      }
    }
  })
  .state('app.po', {
    url: '/po',     
    views: {
      'menuContent': {
        templateUrl: 'templates/po.html'
      }
    }
  })
  .state('app.po-details', {
    url: '/po-details',     
    views: {
      'menuContent': {
        templateUrl: 'templates/po-details.html'
      }
    }
  })
   .state('app.po-tc', {
    url: '/po-tc',     
    views: {
      'menuContent': {
        templateUrl: 'templates/po-tc.html'
      }
    }
  })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});

