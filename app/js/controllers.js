'use strict';

/* Controllers */

  
angular.module('myApp.controllers', [])
  
  .controller('headerCtrl', ['$scope', '$location', function($scope, $location) {
    $scope.loc = $location;
    $scope.newloc = $location;
    //$scope.jim = "HI JIM";
    //$scope.name = "Subhodeep";
    
  }])

    .controller('homeCtrl', ['$scope', '$location', function($scope, $location) {
  	   $scope.hello ="Hello World";
       $scope.$location = $location;
    }])
    .controller('aboutCtrl', ['$scope', '$location', function($scope, $location) {
  	   $scope.showText ="aboutCtrl";
       $scope.$location = $location;
       //console.log($location.path());
    }])

    .controller('joinCtrl', ['$scope', '$location', function($scope, $location) {
		    $scope.showText ="joinCtrl";
        $scope.$location = $location;
    }])

    .controller('clientCtrl', ['$scope', '$location', function($scope, $location) {
		    $scope.showText ="clientCtrl";
        $scope.$location = $location;
    }]);
  