app.component('deletePage', {
	templateUrl: 'components/delete-page/delete-page.html',
	bindings: {},
	controller: function ($scope, $rootScope, $routeParams, $location, productService) {
		'use strict';

		$rootScope.pageClass = 'page-delete';
		$rootScope.title = 'Delete Product';
		var productID = $routeParams.productID;

		$scope.getProduct = function () {
			$scope.product = productService.getProductById(productID);
		}

		$scope.deleteProduct = function () {
			if (productService.deleteProductById(productID)) {
				alert('Delete Success');
				$location.path('/dashboard');
				
			} else {
				alert('Delete false');
			}
		}

		$scope.goToDashboard = function () {

		}
	}
})
