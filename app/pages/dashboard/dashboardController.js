app.controller('dashboardCtrl', function ($scope, $rootScope, $location, productService) {
	$rootScope.title = "dashboard";
	$scope.listProduct = null;

	$scope.getListProduct = function () {
		if (!productService.isGetProducts()) {
			productService.getAPIProducts(onGetProductsSuccessfully, onGetProductsFailed);
		} else {
			$scope.listProduct = productService.getProducts();
		}

	};

	$scope.goToDeleteProduct = function (id) {
		$location.path('/product/delete/' + id);
	}

	$scope.goToEditProduct = function (id) {
		$location.path('/product/edit/' + id);
	}

	$scope.goToAddProduct = function () {
		$location.path('/product/add');
	}

	function onGetProductsFailed(error) {
		console.log(error);
	}

	function onGetProductsSuccessfully(data) {
		$scope.listProduct = data;
	}
});
