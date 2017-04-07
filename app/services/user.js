app.service('userService', function (net) {
	var userService = {};
	
	userService.login = function (eventHandler) {
		net.get('/data/user.json', eventHandler);
	}

	return userService;

})