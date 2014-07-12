'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
controller('LoginCtrl', function($scope, $rootScope, $location, SessionService) {
  $scope.user = {username: '', password: ''};
  
  $scope.login = function() {
    $scope.user = SessionService.save($scope.user, function(success) {
      $rootScope.loggedIn = true;
      $location.path('/');
    }, function(error) {
      $scope.loginError = true;
    });
  };
})
.controller('SetUpCtrl', ['$scope','Product', 'Customer', function($scope, Product, Customer) {
  $scope.customers = Customer.query()
  $scope.products = Product.query()

  $scope.saveProduct = function(product){
    Product.save(product, function(data){

    })
  }
  $scope.saveCustomer = function(customer){
    Customer.save(customer, function(data){
      this.customers = Customer.query()
      this.customer.customer_name = ''

    })
    
  }
  }])
.controller('RecordsCtrl', ['$scope', 'Record', 'Product','Customer', function($scope, Record, Product, Customer) {

  	$scope.record = {}
    $scope.records = Record.query()
    $scope.products = Product.query()
    $scope.customers = Customer.query()

  	$scope.saveRecord = function(record){
  		Record.save(record, function(data){
        this.records = Record.query()
        this.record = {}
  		})
  	}

        
  }])
.controller('TransactionReportsCtrl', [function($scope) {
  }])
.controller('StockReportsCtrl', [function($scope) {

}]);