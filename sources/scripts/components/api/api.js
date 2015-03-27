function $ApiProvider () {
  var defaults = {
    url: undefined
  };
  this.defaults = defaults;
  this.$get = function $ApiFactory (_, url) {
    var location;

    if(_.isUndefined(defaults.url)) {
      location = url.parse(window.location.href);
    }

    if(_.isString(defaults.url)) {
      location = url.parse(defaults.url);
    }

    return location;
  };
}

angular.module('app.components.api', [
  'app.components.node'
])
  .provider('$api', $ApiProvider);
