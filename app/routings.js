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
		.when('/product/delete/:productID', {
			templateUrl: 'pages/delete/delete.html',
			controller: 'deleteCtrl',
			requireLogin: true
		})
		.when('/product/edit/:productID', {
			templateUrl: 'pages/edit/edit.html',
			controller: 'editCtrl',
			requireLogin: true
		});

	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});


});
