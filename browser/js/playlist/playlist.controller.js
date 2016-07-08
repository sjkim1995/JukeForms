juke.controller("playlistCtrl", function($scope, $log, PlaylistFactory, $state, $stateParams) {
	 
	$scope.playlistSubmit = function () {
		if ($scope.newPlaylist.$valid) {
			console.log("Valid!")
		
			var newPlaylist = {
				name: $scope.playlistName
			}
			var playID;
			PlaylistFactory.create(newPlaylist)
				.then (response => {
					$state.go('singlePlaylist', {playlistId: response.id})
				})
			
		}
		else if ($scope.newPlaylist.$invalid) {
			console.log("invalid!")
		}
		$scope.playlistName = "";
	}
});


juke.controller("singlePlaylistCtrl", function($scope, $log, PlaylistFactory, thePlaylist, theSongs) {
	$scope.playlist = thePlaylist;
	$scope.allSongs = theSongs;

	$scope.songSubmit = function () {
		PlaylistFactory.addSong($scope.playlist.id, $scope.songSelector)
		.then(function(song){
			thePlaylist.songs.push(song);
		});
		$scope.songSelector = ""
	}

});
