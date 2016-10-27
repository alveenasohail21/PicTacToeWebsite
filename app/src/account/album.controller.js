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
	function AlbumCtrl(albumsFactory){
		var vm = this;
		//variable assignment


		var month = new Array();
		month[0] = "January";
		month[1] = "February";
		month[2] = "March";
		month[3] = "April";
		month[4] = "May";
		month[5] = "June";
		month[6] = "July";
		month[7] = "August";
		month[8] = "September";
		month[9] = "October";
		month[10] = "November";
		month[11] = "December";

		vm.albums=albumsFactory._data.albums;

		vm.newDateFormat=new Array();
		for(var i=0;i<vm.albums.length;i++){
			var date=new Date(vm.albums[i].created_at);
			vm.albums[i].newDateFormat=month[date.getMonth()] +" "+date.getFullYear();
		}

		//method assignment

		/////////////////////


	}

}());
