angular.module('app', [
  'app.components',
  'app.dashboard'
]);

angular.module('app.components', [
  'app.components.ui'
]);

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



angular.module('app.components.ui', [
  'ngAria',
  'ngAnimate',
  'ngMessages',
  'ui.router'
]).config(function ($locationProvider) {
  $locationProvider.html5Mode(true);
});
