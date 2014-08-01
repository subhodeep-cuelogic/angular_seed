'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', function($scope) {
  	   $scope.hello ="Hello World";

  }])
  .controller('MyCtrl2', ['$scope', function($scope) {
		$scope.hello ="Hello World";
  }]).controller('MyCtrl3', ['$scope', function($scope) {
		$scope.hello ="Hello sid";
  }]);
  