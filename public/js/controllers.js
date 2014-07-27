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

.controller('LogoutCtrl', function($rootScope, $location, SessionService) {
  (new SessionService()).$delete(function(success) {
    $rootScope.loggedIn = false;
    $location.path('/login');
  });
})

.controller('SetUpCtrl', ['$scope', '$location','$route','Product', 'Customer', function($scope, $location,$route, Product, Customer) {
  $scope.customers = Customer.query()
  $scope.products = Product.query()
  $scope.product = {"product_name":'',"model_number":''};
  $scope.customer = {"customer_name":'', "location":null};

  $scope.saveProduct = function(){
    Product.save($scope.product, function(data){
      $route.reload()
    })
  }

  $scope.deleteProduct = function(product){
    Product.delete(product, function(data){
      $route.reload()
    })
  }

  $scope.saveCustomer = function(){
    Customer.save($scope.customer, function(data){
      $route.reload()
    })
  }

  $scope.deleteCustomer = function(customer){
    Customer.delete(customer, function(data){
      $route.reload()
    })
  }

  
}])
.controller('RecordsCtrl', ['$scope','$location','$route', 'Record', 'Product','Customer', function($scope, $location, $route, Record, Product, Customer) {

 $scope.record = {
  "quantity":'',
  "f_customer_id":'',
  "f_customer_name":'',
  "f_product_id":'',
  "f_product_model_number":'',
  "f_product_name":'',
  "date":'',
  "comment":''
}
$scope.record.quantity = new Number();
$scope.records = Record.query()
$scope.products = Product.query()
$scope.customers = Customer.query()

$scope.saveRecord = function(){
  Record.save($scope.record, function(data){
    $route.reload();
  })
}

$scope.deleteRecord = function(record){
  Record.delete(record, function(data){
    $route.reload();
  })
}


$scope.today = function() {
  $scope.record.date = new Date();
};
$scope.today();

$scope.clear = function () {
  $scope.record.date = null;
};

  // Disable weekend selection
  $scope.disabled = function(date, mode) {
    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  };

  $scope.toggleMin = function() {
    $scope.minDate = $scope.minDate ? null : new Date();
  };
  $scope.toggleMin();

  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = 'dd/MM/yyyy';

}])

.controller('TransactionReportsCtrl', [function($scope) {

}])

.controller('StockReportsCtrl',['$scope','$route', 'Product', 'ComputeQuantityInService', 'StockService', function($scope, $route, Product, ComputeQuantityInService, StockService) {
   $scope.startDate = new Date();
   $scope.endDate = new Date();
   $scope.format = 'dd/MM/yyyy';
  $scope.products = [];

  $scope.load = function(){
    $scope.products = StockService.query({startDate:$scope.startDate.toJSON(), endDate:$scope.endDate.toJSON()});
  }

  $scope.openStart = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.startOpened = true;
  };

  $scope.openEnd = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.endOpened = true;
  };


  
  
  

}]);