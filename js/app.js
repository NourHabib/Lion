var mainApp = angular.module("lionApp", ['rzModule']);

mainApp.controller('lionCtrl', function($scope,$http) {


 	$scope.ageslider = {
    	value: 20,
    	options: {
	      floor: 0,
	      ceil: 100,
	      step: 1,
	      minLimit: 0,
	      maxLimit: 100
	    }
	};

 });