app.config(function ($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			redirectTo: '/dashboard'
		})
		.when('/dashboard', {
			templateUrl: 'pages/dashboard/dashboard.html',
		})
		.when('/login', {
			templateUrl: 'pages/login/login.html',
			controller: 'DashboardCtrl',
			requireLogin: true

		});

	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});


});