angular.module("app").run(["$templateCache", function($templateCache) {$templateCache.put("dashboard/dashboard.html","<nav class=\"navbar navbar-default\"><ul class=\"navbar-nav nav\"><li><a href=\"href\"><i class=\"fa fa-home\">&nbsp;</i>Início</a></li></ul></nav><div ui-view=\"dashboardView\"></div>");}]);