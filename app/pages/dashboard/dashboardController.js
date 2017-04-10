app.controller('dashboardCtrl', function ($scope, $rootScope, productService) {

	$rootScope.listProduct = {};
	$scope.product = {};

	$scope.getListProduct = function () {

		productService.getListProduct(function (response) {
			if(response.data){
				console.log(response.data);
				$rootScope.listProduct = response.data;

			} else {
				console.log("load fail");
			}

		});

	}

	$scope.confirmDeteleProduct = function (index) {
		$scope.product = $rootScope.listProduct[index];
		$scope.product.index = index;
		$('#deteleModal').modal('show');
	}

	$scope.deleteProduct = function (index) {
		$rootScope.listProduct.splice(index, 1);
		$('#deteleModal').modal('hide');
	}

});
