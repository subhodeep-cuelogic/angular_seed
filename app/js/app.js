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
  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'homeCtrl'});		
  $routeProvider.when('/about-us', {templateUrl: 'partials/about_us.html', controller: 'aboutCtrl'});
  $routeProvider.when('/join-us', {templateUrl: 'partials/join_us.html', controller: 'joinCtrl'});
  $routeProvider.when('/cuelogic/clients', {templateUrl: 'partials/clients.html', controller: 'clientCtrl'});
  $routeProvider.when('/terms-and-conditions', {templateUrl: 'partials/terms_and_conditions.html', controller: 'termsCtrl'});
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
