'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
controller('AppCtrl', [function($scope) {
	$scope.name = 'timothy'
	$scope.setActive = function(type){

	}

}])
.controller('SetUpCtrl', [function($scope) {
  	//$scope.addRecordPartialUrl = 'add_record.html'
  }])
.controller('RecordsCtrl', [function($scope) {
  	//$scope.addRecordPartialUrl = 'add_record.html'
  }])
.controller('TransactionReportsCtrl', [function($scope) {
  }])
.controller('StockReportsCtrl', [function($scope) {

}]);