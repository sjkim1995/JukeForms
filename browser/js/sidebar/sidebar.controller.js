'use strict';

juke.controller('SidebarCtrl', function ($scope, PlaylistFactory, $log) {

  // nothing to see here for now… state transitions happening with ui-sref!
  	PlaylistFactory.fetchAll()
 	.then(function(_playlists) {
 		$scope.playlists = _playlists;
 	})
 	.catch($log.error)
 	

});
