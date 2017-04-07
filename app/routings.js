app.config(function ($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			redirectTo: '/dashboard'
		})
		.when('/dashboard', {
			templateUrl: 'pages/dashboard/dashboard.html',
			controller: 'dashboardCtrl'
		})
		.when('/login', {
			templateUrl: 'pages/login/login.html',
			controller: 'loginCtrl',
			requireLogin: true

		});

	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});


});
