//MODULE

var abuelApp = angular.module("abuelApp", ["ngRoute", "ngResource"]);


//ROUTES

abuelApp.config(function($routeProvider){

	$routeProvider

	.when("/", {
		templateUrl: "pages/home.html",
		controller: "homeController"
	})

	.when("/consejo", {
		templateUrl: "pages/consejo.html",
		controller: "consejoController"
	})

	.when("/consejo/:days", {
		templateUrl: "pages/consejo.html",
		controller: "consejoController"
	})

});

//SERVICES

abuelApp.service("cityService", function() {
	this.latitude = "40.416733";
	this.longitude = "-3.703514";
});

//CONTROLLERS
abuelApp.controller("homeController" , ["$scope", "cityService",
function($scope, cityService) {

	$scope.latitude = cityService.latitude;
	$scope.longitude = cityService.longitude;

	// $scope.$watch("city", function() {
	// 	cityService.city = $scope.city;
	// })

}]);

abuelApp.controller("consejoController" , ["$scope", "$resource", "$routeParams", "cityService",
function($scope, $resource, $routeParams, cityService) {

	$scope.latitude = cityService.latitude;
	$scope.longitude = cityService.longitude;
	$scope.key = "859ba1bffcef388c78eaf50f570874c1";

	$scope.weatherAPI = $resource("https://api.darksky.net/forecast/" + $scope.key + "/" +  $scope.latitude + "," + $scope.longitude + "?lang=es&units=si" , {callback: "JSON_CALLBACK"}, {get: {method: "JSONP"}});

	$scope.weatherResult = $scope.weatherAPI.get(); 

	console.log($scope.weatherResult);

	// $scope.daily = $scope.weatherResult.daily;

	// console.log($scope.weatherResult.daily);

	$scope.convertToC = function(degF) {
		return Math.round((degF - 32) * 0.5556);
	}

	$scope.convertToDate = function(dt) {
		return new Date(dt*1000);
	}

}]);


// //DIRECTIVES

// abuelApp.directive("weatherReport", function() {

// 	return {
// 		restrict: "E",
// 		templateUrl: "directives/weatherReport.html",
// 		replace: true,
// 		scope: {
// 			weatherDay: "=",
// 			convertToC: "&",
// 			convertToDate: "&",
// 			dateFormat: "@"
// 		}
// 	}

// });







