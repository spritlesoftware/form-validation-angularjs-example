angular.module('starter', ['starter.controllers', 'starter.services', 'starter.directives', 'starter.filters', 
'ui.router', 'ngResource', 'ngRoute', 'ngDialog', 'ngCordova', 'angular-storage']).config(function($httpProvider, $stateProvider, $urlRouterProvider, ngDialogProvider) {

	ngDialogProvider.setDefaults({
		showClose: false,
	})
	$stateProvider.state('root', {
			url: '',
			abstract: true
		}).state('root.signup', {
			url: '/signup',
			views: {
				'container@': {
					templateUrl: 'templates/signup.html',
					controller: 'SignupCtrl'
				}
			}
		})
	$urlRouterProvider.otherwise('/signup');
});

