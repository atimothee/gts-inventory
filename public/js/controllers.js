'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
controller('AppCtrl', ['$scope', 'Record', function($scope) {
	
}])
.controller('SetUpCtrl', [function($scope) {
  	//$scope.addRecordPartialUrl = 'add_record.html'
  }])
.controller('RecordsCtrl', ['$scope', 'Record', 'Product', function($scope, Record, Product) {

  	$scope.records = Record.query()
    $scope.products = Product.query()
    // $scope.products = [
    //   {
    //   _id:1,
    //   product_name:"TS8943"
    // },
    // {
    //   _id:3,
    //   product_name:"YWRTOIR"
    // }

    //   ]
    $scope.record = {
      product_id:'',
      customer_id:'',
      quantity:'',
      comment:'',
      date:''
    }
  	$scope.createRecord = function(){
  		Record.save($scope.record, function(data){
  			$scope.record.quantity = ''
  			$scope.record.product_id = ''

  		})
  	}
  }])
.controller('TransactionReportsCtrl', [function($scope) {
  }])
.controller('StockReportsCtrl', [function($scope) {

}]);