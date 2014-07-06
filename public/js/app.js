'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
  ]).
config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {templateUrl: '/partials/records.html', controller: 'AppCtrl'});
  $routeProvider.when('/records', {templateUrl: 'partials/records.html', controller: 'RecordsCtrl'});
  $routeProvider.when('/setup', {templateUrl: 'partials/setup.html', controller: 'SetUpCtrl'});
  $routeProvider.when('/reports/transactions', {templateUrl: 'partials/transaction_reports.html', controller: 'TransactionReportsCtrl'});
  $routeProvider.when('/reports/stock', {templateUrl: 'partials/stock_reports.html', controller: 'StockReportsCtrl'});
  $routeProvider.otherwise({redirectTo: '/records'});
}]);
