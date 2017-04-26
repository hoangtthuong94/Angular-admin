var app = angular.module('adminApp', ['ngRoute', 'ngAnimate']);

app.run(function ($rootScope, $route, $location, userService) {
	$rootScope.title = 'hoanghuong';

	$rootScope.$on('$routeChangeStart', function (next, current) {
		if (current.$$route.requireLogin && !userService.isLogin()) {
			$location.path('/login');
		}
	});

})