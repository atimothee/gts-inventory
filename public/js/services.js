'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', ['ngResource']).
  value('version', '0.1')
  .factory('Record', function($resource){
  	return $resource('/records')
  })
  .factory('Product', function($resource){
  	return $resource('/products')
  })
  .factory('Customer', function($resource){
  	return $resource('/customers')
  })
  .factory('SessionService', function($resource) {
  return $resource('/api/sessions');
})
  .factory('ComputeQuantityInService', function($resource) {
    return $resource('/compute/productsin/:product_id/:startDate/:endDate');
})
  .factory('StockService', function($resource) {
    return $resource('/stock/:startDate/:endDate');
})

  ;
