app.controller("LoginCtrl", function($scope, $log, $state, Auth){
	$scope.login = function(){
		Auth.login($scope.user)
			.then(function(){
				console.log("login");
				$state.go('stories');
			})
			.catch($log);
	};
});