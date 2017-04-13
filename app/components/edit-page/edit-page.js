app.component('editPage', {
	templateUrl: 'components/edit-page/edit-page.html',
	bindings: {
		configs: '<',
		data: '<',
		onSubmit: '&'
	},

	controller: function ($scope, $rootScope, $location, $routeParams, productService) {
		'use strict';
		$rootScope.title = 'Edit product';
		var productID = $routeParams.productID;

		$scope.editFormConfig = [
			{
				name: 'name',
				type: 'text',
				require: true,
				placeholder: 'Name',
				label: 'Name'
			},
			{
				name: 'price',
				type: 'text',
				require: true,
				placeholder: 'Price',
				label: 'Price'
			},
			{
				name: 'thumb',
				type: 'text',
				require: true,
				placeholder: 'Thumb',
				label: 'Thumb'
			},
			{
				type: 'submit',
				placeholder: 'Update product'
			}
		];

		$scope.getProductEdit = function () {
			$scope.product = productService.getProductById(productID);
		};

		$scope.updateProduct = function () {
			if (productService.updateProduct(productID, $scope.product)) {
				alert('Edit Success');
				$location.path('/dashboard');
			} else {
				alert('Edit false');
			}
		};
	}
})
