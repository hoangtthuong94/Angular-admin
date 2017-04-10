app.controller('loginCtrl', function ($scope, $rootScope, $location, userService) {
	$rootScope.title = 'login';

	$scope.user = {
		username: '',
		password: ''
	};
	$scope.message = null;

	$scope.login = function () {
		userService.login($scope.user.username, $scope.user.password, onLoginSuccessfully, onLoginFailed);
	};

	function onLoginFailed(error) {
		$scope.message = error.message;
	}

	function onLoginSuccessfully() {
		$scope.message = null;
		$location.path('/dashboard');
	}
})
