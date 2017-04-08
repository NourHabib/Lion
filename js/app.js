var mainApp = angular.module("lionApp", ['rzModule']);

mainApp.controller('lionCtrl', function($scope,$http) {


  	$scope.total=0;
  	$scope.chosecolor=0;
  	$scope.chosehair=0;
  	$scope.choseEye=0;
  	$scope.chosebeard=0;
  	$scope.chosebody=0;
  	$scope.errors=0;

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
	$scope.eyecolors=[
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
	$scope.beard=[
		{shape:'none',value: 1},
		{shape:"short",value:2},
		{shape:"normal",value:3},
		{shape:"long",value:4}
	];
	$scope.bodies=[
		{shape:'thin',value: 1},
		{shape:"fat",value:2},
		{shape:"normal",value:3},
		{shape:"shaped",value:4}
	];
	$scope.calculate=function(){
		if($scope.chosecolor && $scope.choseEye && $scope.chosebeard && $scope.chosebody  && $scope.chosehair){
			$scope.total=$scope.ageslider.value+$scope.heighslider.value+$scope.choseEye+$scope.chosecolor+$scope.chosebeard+$scope.chosebody;
			
			$scope.chosecolor=0;
		  	$scope.choseEye=0;
		  	$scope.chosebeard=0;
		  	$scope.chosebody=0;
		  	$scope.chosehair=0;
		  	$scope.ageslider.value=20;
		  	$scope.heighslider.value=170;
		  	
			$scope.result = $scope.total/4;
		}else{
			$scope.errors=1;
		}
	};


 });