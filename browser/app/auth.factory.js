app.factory('Auth', function($http){
	var Auth = {};
	
	Auth.login = function(user){
		return $http.post('/login', user);
	}
	Auth.signup = function(user){
		return $http.post('/signup', user);
	}
	Auth.logout = function(){
		return $http.delete('/logout');
	}

    return Auth;


});