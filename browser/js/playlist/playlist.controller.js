juke.controller("playlistCtrl", function($scope, $log, PlaylistFactory) {
	 
	$scope.playlistSubmit = function () {
		if ($scope.newPlaylist.$valid) {
			console.log("Valid!")
		
			var newPlaylist = {
				name: $scope.playlistName
			}
			
			PlaylistFactory.create(newPlaylist);	
		}
		else if ($scope.newPlaylist.$invalid) {
			console.log("invalid!")
		}
		$scope.playlistName = "";
	}
});


juke.controller("singlePlaylistCtrl", function($scope, $log, PlaylistFactory, thePlaylist) {
	$scope.playlist = thePlaylist;
});
