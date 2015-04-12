// JavaScript Document
(function() {
		  
		var F1FeederApp = angular.module('F1FeederApp', ['ngRoute']);
    
F1FeederApp.config(
	function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/home1.html',
        controller: ''
      }).
	   when('/list', {
        templateUrl: 'views/list.html',
        controller: 'listController'
      }).

      otherwise({
        redirectTo: '/'
      });
  });

}());