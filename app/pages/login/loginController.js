app.controller('loginCtrl', function ($scope, $rootScope, $location, userService) {
	$rootScope.title = 'login';
	$scope.user = {};

	$scope.login = function (){

		userService.login(function (response) {
			if(response.data) {
				var info = response.data;
				console.log(info);
				if($scope.user.email === info[0].email && $scope.user.password === info[0].password) {
					$rootScope.email = info[0].email;
					$rootScope.name = info[0].name;
				}
				else {
					$scope.message = 'Something wrong';
				}
			}
			else {
				$scope.message = 'Something wrong';
			}
		});

	};
})
