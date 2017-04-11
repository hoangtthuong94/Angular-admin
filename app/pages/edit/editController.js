app.controller('editCtrl', function ($scope, $rootScope, $routeParams, productService) {
	$rootScope.title = 'Edit product';
	var productID = $routeParams.productID;

	$scope.getProductEdit = function () {
		$scope.product = productService.getProductById(productID);
	}

	$scope.updateProduct = function () {
		
	}
})
