app.config(function ($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			redirectTo: '/dashboard',
			requireLogin: true
		})
		.when('/dashboard', {
			templateUrl: 'pages/dashboard/dashboard.html',
			controller: 'dashboardCtrl',
			requireLogin: true
		})
		.when('/login', {
			templateUrl: 'pages/login/login.html',
			controller: 'loginCtrl',
			requireLogin: false
		})
		.when('/delete/', {
			templateUrl: 'pages/delete/delete.html',
			controller: 'deleteCtrl',
			requireLogin: true
		});

	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});


});
