app.service("productService", function(net) {
	var productService = {};

	productService.getListProduct = function(eventHandler) {
		net.get("/data/product.json", eventHandler);
	};


	return productService;
});

