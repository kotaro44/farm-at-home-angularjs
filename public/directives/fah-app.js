'use strict';

angular.module('fahAngularJS').directive('fahApp', [() => {
  return {
    restrict: 'E',
    templateUrl: 'layouts/app.html',
  };
}]);
