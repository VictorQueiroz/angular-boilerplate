function DashboardController ($scope) {}

angular.module('app.dashboard', [])
  .config(function ($stateProvider) {
    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        views: {
          'bodyView': {
            templateUrl: 'dashboard/dashboard.html',
            controller: DashboardController,
            controllerAs: 'dashboardCtrl'
          }
        }
      })
  });
