'use strict';

/**
 * Data Provider is a service that provides Data from the Backend to the Frontend, all functions return promises
 *
 * Services:
 *   - getProducts(): returns a list of all available products
 *   - getProduct(id): returns the detailed information of the product with that matches the id
 */
angular.module('fahAngularJS')
  .service('DataProvider', ['$q', function DataProvider($q) {
  	var host = window.location.origin + ':3000/';

  	function _getData(url, success, error) {
  		var xhr = new XMLHttpRequest();

  		xhr.onload = function onLoad() {
  			if (xhr.status === 200 ) {
  				success(JSON.parse(xhr.response));
  			}
  			else {
  				error(xhr.response);
  			}
  		};

  		xhr.open('GET', host + url);
  		xhr.send();
  	};

    function _parseData(data) {
      if (Array.isArray(data)) {
        data.forEach(item => {
          item.image = host + 'icons/' + item.productId;
        });
      }
      else {
        data.image = host + 'images/' + data.productId;
      }

      return data;
    };

    return {
      getProducts: () => {
      	return $q((resolve, reject) => {
      		_getData('list', (data) => {
      			resolve(_parseData(data.products));
      		}, (error) => {
      			reject(error);
      		});
      	});
      },
      getProduct: (id) => {
      	return $q((resolve, reject) => {
      		_getData('product/' + id, (data) => {
      			resolve(_parseData(data));
      		}, (error) => {
      			reject(error);
      		});
      	});
      },
    };
  }]);
