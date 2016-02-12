angular.module('EmailApp')
	.controller('InboxCtrl',
		function InboxCtrl($scope, InboxFactory) {
			console.log('The request was successful!', statusCode, jsonData);
			$scope.emails = jsonData;
		});
	