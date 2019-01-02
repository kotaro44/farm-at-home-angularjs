'use strict';

angular.module('fahAngularJS')
  .directive('fahProductDetail', ['Constants', 'DataProvider', '$location', (Constants, DataProvider, $location) => {
    return {
      restrict: 'A',
      scope: {
        productId: '=fahProductDetail',
        inModal: '@?inModal',
      },
      templateUrl: 'widgets/fah-product-detail.html',
      link: function fahProductDeatilLink($scope) {
        $scope.vm = {
          isLoading: true,
          currency: Constants.currency,
          copy2clipboard: _copy2clipboard,
          loaderSrc: 'images/a' + ($scope.inModal ? '2': '') + '.gif',
          error: false,
          copied: false,
        };

        init();
        function init() {
          DataProvider.getProduct($scope.productId).then((product) => {
            $scope.vm.product = product;
          }).catch(() => {
            $scope.vm.error = true;
          }).finally(() => {
            $scope.vm.isLoading = false;
          });
        };

        function _copy2clipboard() {
          var temp = document.createElement('textarea');

          temp.value = window.location.origin + '/#/list/' + $scope.productId;
          console.log(temp.value);
          temp.setAttribute('readonly', '');
          temp.style.position = 'absolute';
          temp.style.left = '-9999px';
          document.body.appendChild(temp);
          temp.select();
          document.execCommand('copy');
          document.body.removeChild(temp);
          $scope.vm.copied = true;
        };
      },
    };
  }]);
