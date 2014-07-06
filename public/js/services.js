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
  ;
