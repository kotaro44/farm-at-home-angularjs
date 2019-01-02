'use strict';

angular.module('fahAngularJS').controller('ProductListCtrl', ['$scope', 'DataProvider', '$location',
  function ProductListCtrl($scope, DataProvider, $location) {
    $scope.vm = {
      isLoading: true,
      productId: null,
      goToProductDetail: _goToProductDetail,
      openDetail: _openDetail,
      closeModal: _closeModal,
      placeholders: new Array(12),
      search: '',
    };

    init();
    function init() {
      DataProvider.getProducts().then((products) => {
        $scope.vm.products = products;
      }).catch(() => {
        $scope.vm.error = true;
      }).finally(() => {
        $scope.vm.isLoading = false;
      })
    };

    function _goToProductDetail(productId) {
      if (!productId) {
        return;
      }

      $location.path('/list/' + productId);
    };

    function _openDetail(productId) {
      if (!productId) {
        return;
      }

      $scope.vm.productId = productId;
      window.scrollTo(0, 0);
    };

    function _closeModal() {
      $scope.vm.productId = null;
    };
  }]);
