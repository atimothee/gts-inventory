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
.controller('SetUpCtrl', ['$scope', '$location','$route','Product', 'Customer', function($scope, $location,$route, Product, Customer) {
  $scope.customers = Customer.query()
  $scope.products = Product.query()

  $scope.saveProduct = function(product){
    Product.save(product, function(data){
      $route.reload()
    })
    $route.reload()
  }

  $scope.deleteProduct = function(product){
    Product.delete(product, function(data){
      $route.reload()
    })
  }

  $scope.deleteCustomer = function(customer){
    Customer.delete(customer, function(data){
      $route.reload()
    })
    
  }

  $scope.saveCustomer = function(customer){
    Customer.save(customer, function(data){
      $route.reload()
    })
    
  }
  }])
.controller('RecordsCtrl', ['$scope','$location','$route', 'Record', 'Product','Customer', function($scope, $location, $route, Record, Product, Customer) {

  	$scope.record = {}
    $scope.records = Record.query()
    $scope.products = Product.query()
    $scope.customers = Customer.query()

  	$scope.saveRecord = function(record){
  		Record.save(record, function(data){
  		})
      $route.reload()
  	}

    $scope.deleteRecord = function(record){
      Record.delete(record, function(data){
        $route.reload()
      })
    }

        
  }])
.controller('TransactionReportsCtrl', [function($scope) {
  }])
.controller('StockReportsCtrl', [function($scope) {

}]);