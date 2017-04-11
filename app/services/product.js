app.service("productService", function($http, $location) {

	var getProductUrl = "/data/product.json",
		products = {};
		isProducts = false

	function getAPIProducts(onSuccess, onError) {
		$http.get(getProductUrl, {
		}).then(function (response) {
			products = response.data;
			if (onSuccess) {
				onSuccess(response.data);
				isProducts = true;
			}
		}, function (response) {
			if (onError) {
				onError(response.data);
			}
		});
	}

	function isGetProducts() {
		return isProducts;
	}

	function getProducts() {
		return products;
	}

	function getProductById(id) {
		for (var i=0; i<products.length; i++) {
			if(products[i].id == id) {
				return products[i];
			}
		}
		return true;
	}

	function deleteProductById(id) {
		for (var i=0; i<products.length; i++) {
			if(products[i].id == id) {
				products.splice(i, 1);
				console.log(products);
				return true;
			}
		}
		return false;
	}
	
	function addProduct() {

	}

	function updateProduct(id, product) {
		for (var i=0; i<products.length; i++) {
			if(products[i].id == id) {
				products[i] = product;
				return true;
			}
		}

		return false
	}

	return {
		getAPIProducts: getAPIProducts,
		isGetProducts: isGetProducts,
		getProducts: getProducts,
		getProductById: getProductById,
		deleteProductById: deleteProductById,
		addProduct: addProduct,
		updateProduct: updateProduct
	};
});

