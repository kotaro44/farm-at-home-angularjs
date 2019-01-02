'use strict';

angular.module('fahAngularJS').directive('fahHeader', ['$location', ($location) => {
  return {
    restrict: 'A',
    templateUrl: 'widgets/fah-header.html',
    scope: {},
    link: function fahHeader($scope) {
      $scope.vm = {
        goToHomePage: _goToHomePage,
      };

      function _goToHomePage() {
        $location.path('/');
      };
    },
  };
}]);
