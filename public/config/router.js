'use strict';

angular.module('fahAngularJS', ['ngRoute'])
  .config(['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) => {
    $locationProvider.hashPrefix('');

    $routeProvider
      .when('/list/', {
        templateUrl: 'layouts/product-list.html',
        controller: 'ProductListCtrl',
      })
      .when('/list/:productId', {
        templateUrl: 'layouts/product-detail.html',
        controller: 'ProductDetailCtrl',
      })
      .otherwise({
        redirectTo: '/list'
      });
  }]);
