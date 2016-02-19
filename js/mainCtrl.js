var app = angular.module('userProfile')

app.controller('mainCtrl', function($scope, ourSvc){
	$scope.reallyLike = ourSvc.reallyLike;
	$scope.kindOfLike = ourSvc.kindOfLike;
	$scope.addArtist = function() {
		var artist = buildArtist();
		ourSvc.addNewArtist(artist);
		removeArtist();

		// constructor function for our artist object
		function buildArtist() {
			return {
				name: $scope.name,
				genre: $scope.genre,
				score: $scope.score
			}
		}
		function removeArtist() {
			
			$scope.name= '';
			$scope.genre = '';
			$scope.score = '';
			
		}
	}
});