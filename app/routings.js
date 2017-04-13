app.config(function ($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			redirectTo: '/dashboard',
			requireLogin: true
		})
		.when('/dashboard', {
			template: '<dashboard-page></dashboard-page>',
			requireLogin: true
		})
		.when('/login', {
			template: '<login-page></login-page>',
			requireLogin: false
		})
		.when('/product/delete/:productID', {
			template: '<delete-page></delete-page>',
			requireLogin: true
		})
		.when('/product/edit/:productID', {
			template: '<edit-page></edit-page>',
			requireLogin: true
		})
		.when('/product/add', {
			template: '<add-product-page></add-product-page>',
			requireLogin: true
		});

	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});

});
