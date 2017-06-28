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
		templateUrl: "pages/consejo_openw.html",
		controller: "consejoController"
	})

	.when("/consejo/:days", {
		templateUrl: "pages/consejo_openw.html",
		controller: "consejoController"
	})

});

//SERVICES

abuelApp.service("cityService", function() {
	this.city = "Madrid, ES";
});

//CONTROLLERS
abuelApp.controller("homeController" , ["$scope", "cityService",
function($scope, cityService) {

	$scope.city = cityService.city;

	$scope.$watch("city", function() {
		cityService.city = $scope.city;
	})

}]);

abuelApp.controller("consejoController" , ["$scope", "$resource", "$routeParams", "cityService",
function($scope, $resource, $routeParams, cityService) {

	$scope.city = cityService.city;

	$scope.days = $routeParams.days || "1";

	$scope.weatherAPI = $resource("//api.openweathermap.org/data/2.5/forecast/daily", {callback: "JSON_CALLBACK"}, {get: {method: "JSONP"}});

	$scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt : $scope.days, appid: "74c095d84c7951a36bf4b3fe9148ab93" }); 

	console.log($scope.weatherResult);

	$scope.convertToC = function(degC) {
		return Math.round(degC - 273);
	}

	$scope.convertToDate = function(dt) {
		return new Date(dt*1000);
	}

}]);


//DIRECTIVES

abuelApp.directive("weatherReport", function() {

	return {
		restrict: "E",
		templateUrl: "directives/weatherReport.html",
		replace: true,
		scope: {
			weatherDay: "=",
			convertToC: "&",
			convertToDate: "&",
			dateFormat: "@"
		}
	}

});







