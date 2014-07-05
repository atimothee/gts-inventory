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
	$routeProvider.when('/', {templateUrl: 'index.html', controller: 'AppCtrl'});
  $routeProvider.when('/records', {templateUrl: 'partials/record.html', controller: 'RecordsCtrl'});
  $routeProvider.when('/reports/transactions', {templateUrl: 'partials/transactions.html', controller: 'TransactionsCtrl'});
  $routeProvider.otherwise({redirectTo: '/records'});
}]);
