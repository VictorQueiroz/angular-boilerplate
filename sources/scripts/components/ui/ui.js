angular.module('app.components.ui', [
  'ngAria',
  'ngAnimate',
  'ngMessages',
  'ui.router'
]).config(function ($locationProvider) {
  $locationProvider.html5Mode(true);
});
