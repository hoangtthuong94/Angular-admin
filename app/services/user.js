app.factory('userService', function ($http) {
	var loginUrl = '/data/user.json';
	var user = null;

	function login(username, password, onSuccess, onError) {

		$http.get(loginUrl, {
		}).then(function (response) {
			user = response.data;
			if (onSuccess) {
				onSuccess(response.data);
			}
		}, function (response) {
			if (onError) {
				onError(response.data);
			}
		});
	}

	function isLogin() {
		return !!user;
	}

	function getUsername() {
		return user ? user.username : 'Guest';
	}

	function getName() {
		return user ? user.name : 'Guest';
	}

	return {
		getName: getName,
		getUsername: getUsername,
		isLogin: isLogin,
		login: login
	};

})