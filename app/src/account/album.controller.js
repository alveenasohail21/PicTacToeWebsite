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
		vm.albumsArray=new Array();


		for(var i=0; i<vm.albums.length;i++){
			var temp=new Date(vm.albums[i].created_at);
			var key=month[temp.getMonth()] +" "+temp.getFullYear();
			addKey(key, vm.albums[i]);
		}
		// console.log("here i am : ",vm.albumsArray);

		function addKey(key, albums) {
			var newObject={
				date: key,
				albums: [albums]
			};
			var index=findIndexById(key);
			(index || index===0) ? vm.albumsArray[index].albums.push(albums) : vm.albumsArray.push(newObject);
		}
		function findIndexById(key){
			var foundIndex = null;
			vm.albumsArray.forEach(function(album, index){
				if(album.date === key){
					console.log(key, album.date);
					foundIndex = index;
				}
			});
			return foundIndex;
		}


		vm.newDateFormat=new Array();
		for(var i=0;i<vm.albums.length;i++){
			var date=new Date(vm.albums[i].created_at);
			vm.albums[i].newDateFormat=month[date.getMonth()] +" "+date.getFullYear();
		}

		//method assignment

		/////////////////////


	}

}());
