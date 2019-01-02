'use strict';

angular.module('fahAngularJS').directive('fahFooter', ['$location', ($location) => {
  return {
    restrict: 'A',
    templateUrl: 'widgets/fah-footer.html',
  };
}]);
