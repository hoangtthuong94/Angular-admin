app.component('addProductPage', {
	templateUrl: 'components/add-product-page/add-product-page.html',
	bindings: {},

	controller: function ($scope, $rootScope, $location, productService) {
		'use strict';
		$rootScope.title = 'Add new product';
		$scope.addProductFormConfig = [
			{
				name: 'name',
				type: 'text',
				require: true,
				placeholder: 'Name',
				label: 'Name'
			},
			{
				name: 'price',
				type: 'number',
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
				placeholder: 'Add Product product'
			}
		];

		$scope.addNewProduct = function (data) {
			productService.addProduct(data);
			alert('Add product success');
			$location.path('/dashboard');
		}
	}
});