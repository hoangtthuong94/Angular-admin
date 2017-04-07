var app = angular.module('adminApp', ['ngRoute']);

app.run(function ($rootScope, $route, $location) {
	$rootScope.title = 'hoanghuong';
})

app.constant("ENV", {
	apiUrl: "http://localhost:3000"
});
