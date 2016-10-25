	var singlePageApp = angular.module('singlePageApp', ['ngRoute']);

	// configure our routes
	singlePageApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/home', {
				templateUrl : 'routes/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'routes/about.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'routes/contacts.html',
				controller  : 'contactController'
			});
	});

	// create the controller and inject Angular's $scope
	singlePageApp.controller('mainController', function($scope) {
		$scope.message = 'Everyone come and see how good I look!';
	});

	singlePageApp.controller('aboutController', function($scope) {
		$scope.message = 'Look! This is about us.';
	});

	singlePageApp.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. You can contact us through this.';
	});