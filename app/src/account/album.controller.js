/**
 * @ngdoc controller
 * @name app.account.controller:Album
 * @description < description placeholder >
 */

(function(){

	'use strict';

	angular
		.module('app.account')
		.controller('AlbumCtrl', AlbumCtrl);

	/* @ngInject */
	function AlbumCtrl(albums, albumsFactory){
		var vm = this;
		//variable assignment
		vm.albums = albumsFactory._data.albums;
		console.log(vm.albums);
		//method assignment

		/////////////////////


	}

}());
