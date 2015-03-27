function UnderscoreFactory ($window) {
  return $window._;
}

angular.module('app.components', [
  'app.components.ui',
  'app.components.api',
  'app.components.node'
])
  .factory('_', UnderscoreFactory);
