app.controller('editCtrl', function ($scope, $rootScope, $routeParams) {
	$rootScope.title = 'Edit product';
	console.log($routeParams.productID);
})
