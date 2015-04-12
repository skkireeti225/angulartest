// JavaScript Document
(function() {
		  
		var F1FeederApp = angular.module('F1FeederApp', ['ngRoute']);
    
F1FeederApp.config(
	function($scope,$routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'anj/views/home1.html',
        controller: '..'
      }).
	   when('/list', {
        templateUrl: 'anj/views/list.html',
        controller: 'listControllers'
      }).

      otherwise({
        redirectTo: '/'
      });
  });

}());