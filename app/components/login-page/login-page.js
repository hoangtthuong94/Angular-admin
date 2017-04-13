app.component('loginPage', {
	templateUrl: 'components/login-page/login-page.html',
	bindings: {},

	controller: function ($scope, $rootScope, $location, userService) {
		'use strict';
		$rootScope.title = 'login';

		$scope.user = {
			username: '',
			password: ''
		};

		$scope.loginFormConfig = [
			{
				name: 'username',
				type: 'text',
				require: true,
				placeholder: 'Username',
				label: 'Username'
			},
			{
				name: 'password',
				type: 'password',
				require: true,
				placeholder: 'Password',
				label: 'Password'
			},
			{
				type: 'submit',
				placeholder: 'Login'
			}
		];

		$scope.message = null;

		$scope.login = function (data) {
			userService.login(data.username, data.password, onLoginSuccessfully, onLoginFailed);
		};

		function onLoginFailed(error) {
			$scope.message = error.message;
		};

		function onLoginSuccessfully() {
			$scope.message = null;
			$location.path('/dashboard');
		};
	}
});