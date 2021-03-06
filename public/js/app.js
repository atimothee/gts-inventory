'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'ui.bootstrap',
  'ngTable'
  ]).
config(['$routeProvider','$httpProvider', function($routeProvider, $httpProvider) {
	$routeProvider.when('/login', {templateUrl: 'partials/login.html', controller: 'LoginCtrl'});
  $routeProvider.when('/records', {templateUrl: 'partials/records.html', controller: 'RecordsCtrl'});
  $routeProvider.when('/setup', {templateUrl: 'partials/setup.html', controller: 'SetUpCtrl'});
  $routeProvider.when('/users', {templateUrl: 'partials/users.html', controller: 'UserCtrl'});
  $routeProvider.when('/reports/transactions', {templateUrl: 'partials/transaction_reports.html', controller: 'TransactionReportsCtrl'});
  $routeProvider.when('/reports/stock', {templateUrl: 'partials/stock_reports.html', controller: 'StockReportsCtrl'});
  $routeProvider.otherwise({redirectTo: '/records'});
  $routeProvider.when('/logout', {templateUrl: 'partials/login.html', controller: 'LogoutCtrl'});
  $httpProvider.interceptors.push(function($rootScope, $location, $q) {
    return {
      'request': function(request) {
        // if we're not logged-in to the AngularJS app, redirect to login page
        // console.log('root username '+$rootScope.username)
        // console.log('root loggedIn '+$rootScope.loggedIn)
        $rootScope.loggedIn = $rootScope.loggedIn || $rootScope.username;
        if (!$rootScope.loggedIn && $location.path() != '/login') {
          $location.path('/login');       
        }
        return request;
      },
      'responseError': function(rejection) {
        // if we're not logged-in to the web service, redirect to login page
        if (rejection.status === 401 && $location.path() != '/login') {
          console.log('angular rejected request');
          $rootScope.loggedIn = false;
          $location.path('/login');
        }
        return $q.reject(rejection);         
      }
    };
  });
}]);
