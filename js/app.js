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
	$scope.heighslider = {
    	value: 170,
    	options: {
	      floor: 0,
	      ceil: 210,
	      step: 1,
	      minLimit: 0,
	      maxLimit: 210
	    }
	};
	$scope.colors=[
		{color:'black',value: 1},
		{color:"azure",value:2},
		{color:"blue",value:3},
		{color:"brown",value:4},
		{color:"cornsilk",value:5},
		{color:"dark-orange",value:6},
		{color:"dark-violet",value:7},
		{color:"green",value:8},
		{color:"grey",value:9},
		{color:"olive",value:10},
		{color:"orange",value:11},
		{color:"red",value:12},
		{color:"violet",value:13},
		{color:"white",value:14},
		{color:"yellow",value:15},
		{color:"wood",value:16}
	];
	$scope.hairs=[
		{shape:'none',value: 1},
		{shape:"short",value:2},
		{shape:"long",value:3}
	];

 });