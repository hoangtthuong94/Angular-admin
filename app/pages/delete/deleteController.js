app.controller('deleteCtrl', function ($scope, $rootScope, $routeParams, $location, productService) {
	$rootScope.title = 'Delete Product';
	var productID = $routeParams.productID;

	$scope.getProduct = function () {
		$scope.product = productService.getProductById(productID);
	}

	$scope.deleteProduct = function () {
		if(productService.deleteProductById(productID)) {
			// $('#successModal').modal('show');
			var r = confirm("Delete Success");
			if (r == true) {
				$location.path('/dashboard');
			} else {
				$location.path('/dashboard');
			}
		} else {
			$('#failModal').modal('show');
		}
	}

	$scope.goToDashboard = function () {

	}
})
