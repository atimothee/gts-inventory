'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
controller('AppCtrl', ['$scope', 'Record', function($scope) {
	
}])
.controller('SetUpCtrl', [function($scope) {
  }])
.controller('RecordsCtrl', ['$scope', 'Record', 'Product','Customer', function($scope, Record, Product, Customer) {

  	$scope.records = Record.query()
    $scope.products = Product.query()
    $scope.customers = Customer.query()

    $scope.record = {
      _id:undefined,
      product_id:undefined,
      customer_id:undefined,
      quantity:undefined,
      comment:undefined,
      date:undefined
    }
  	$scope.saveRecord = function(){
  		Record.save($scope.record, function(data){
        console.log(data)
  			$scope.record.quantity = undefined
  			$scope.record.product_id = undefined
        $scope.record.comment = undefined
        $scope.record.date = undefined
        $scope.record.customer_id = undefined
        $scope.record._id = undefined

  		})
  	}
  }])
.controller('TransactionReportsCtrl', [function($scope) {
  }])
.controller('StockReportsCtrl', [function($scope) {

}]);