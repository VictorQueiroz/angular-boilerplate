## angular-boilerplate
A standard Angular Boilerplate based on [Best Practice Recommendations for Angular App Structure](https://docs.google.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/pub).

## What is included?
- Bootstrap 3
- Font Awesome 4.3
- Gulp 3.8
- Angular 1.3

## NodeJS modules
```js
function MyFactoryFactory ($rootScope, $window, url) {
  $rootScope.$watch(function () {
    return $location.path();
  }, function() {
    console.log('New url', url.format($window.location));
  });
}

angular.module('app.components.B', [])
  .factory('myFactory', MyFactoryFactory);
```

## How to use
```sh
npm install
bower install
node .
```

## Testing
```sh
npm test
```
