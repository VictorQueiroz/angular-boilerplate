describe('app.components.api module', function () {
  var $api;

  beforeEach(module('app.components.api'));

  beforeEach(inject(function ($injector) {
    $api = $injector.get('$api');
  }));

  it('should be a instance of url.Url', inject(function (url) {
    expect($api instanceof url.Url).toBe(true);
  }));
});
