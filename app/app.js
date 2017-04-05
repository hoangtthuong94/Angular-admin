var app = angular.module('adminApp', ['ngRoute']);

app.run(function ($rootScope, $route, $location) {
	$rootScope.title = 'hoanghuong';
})