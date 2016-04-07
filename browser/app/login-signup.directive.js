app.directive('loginSignup', function($state, $log, Auth){
	return {
		restrict: 'E',
		scope: {
			type: '@'
		},
		templateUrl: '/browser/app/login-signup.html',
		link: function($scope){
			$scope.signup = function(){
				Auth.signup($scope.user)
					.then(function(){
						$state.go('stories');
					})
					.catch($log);	
			};
			$scope.login = function(){
				Auth.login($scope.user)
					.then(function(){
						console.log("login");
						$state.go('stories');
					})
					.catch($log);
				return 'cool';
			};			
		}
	};
});