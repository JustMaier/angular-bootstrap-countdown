'use strict';

angular.module('countdown')
.controller('mainCtrl',['$scope', 'angularFire', function($scope, angularFire){
	var Event = function(name, date){
		return {
			name: name || '',
			date: date || new Date(),
		};
	};
	//Scope variables
	$scope.events = [];
	$scope.newEvent = null;

	
	//Scope Functions
	$scope.toggleAdding = function(){
		//Set $scope.newEvent to be an empty event object
	};
	$scope.addEvent = function(){
		//Ensure the form is valid
		//Add $scope.newEvent to events
		//Set $scope.newEvent back to nothing
	};
	$scope.removeEvent = function(){
		//Remove specified event
	};

	//Bind to firebase - replace with your firebase url...
	var firebase = new Firebase("https://<yourfirebaseaccount>.firebaseio.com/events");
	angularFire(firebase, $scope, 'events');
}]);