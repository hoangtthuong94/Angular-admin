var app = angular.module('adminApp', ['ngRoute']);

app.run(function ($rootScope, $route, $location, userService) {
	$rootScope.title = 'hoanghuong';
	$rootScope.isLogin = false;

	/*$rootScope.$on('$routeChangeStart', function (next, current) {
		if (current.$$route.requireLogin && !userService.isLogin()) {
			$location.path('/login');
		}
	});*/

})