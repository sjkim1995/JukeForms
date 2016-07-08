'use strict';

juke.config(function($stateProvider) {
	$stateProvider.state('playlist', {
		url: "/playlists/new",
		templateUrl: '/js/playlist/templates/playlist.html',
		controller: 'playlistCtrl' 
	})
})

juke.config(function($stateProvider) {
	$stateProvider.state('singlePlaylist', {
		url: "playlists/:playlistId",
		templateUrl: '/js/playlist/templates/singlePlaylist.html',
		resolve: {
			thePlaylist: function ($stateParams, PlaylistFactory) {
				console.log($stateParams)
				return PlaylistFactory.fetchById($stateParams.playlistId);
			},
			theSongs: function(SongFactory) {
				return SongFactory.fetchAll()
			}
		},
		controller: 'singlePlaylistCtrl'
	})
})

