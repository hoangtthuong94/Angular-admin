app.controller('dashboardCtrl', function ($scope, $rootScope, productService) {
	
	$scope.listProduct = {};
	
	$scope.getListProduct = function () {

		productService.getListProduct(function (response) {
			if(response.data){
				console.log(response.data);
				$scope.listProduct = response.data;

			} else {
				console.log("load fail");
			}

		});

	};

	
});
