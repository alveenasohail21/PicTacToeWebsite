/**
 * @ngdoc controller
 * @name app.account.controller:Photo
 * @description < description placeholder >
 */

(function(){

	'use strict';

	angular
		.module('app.account')
		.controller('PhotoCtrl', PhotoCtrl)
		.filter('reverse', function() {
		return function(items) {
			return items.slice().reverse();
		};
	});

	/* @ngInject */
	function PhotoCtrl(albumsFactory){
		var vm = this;


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

		var week=new Array();
		week[0] = "Sunday";
		week[1] = "Monday";
		week[2] = "Tuesday";
		week[3] = "Wednesday";
		week[4] = "Thursday";
		week[5] = "Friday";
		week[6] = "Saturday";

		vm.albums=albumsFactory._data.albums;
		console.log(vm.albums);

		vm.newDateFormat=new Array();
		for(var i=0;i<vm.albums.length;i++){
			var date=new Date(vm.albums[i].created_at);
			vm.albums[i].newDateFormat=week[date.getDay()]+" | "+month[date.getMonth()] +" "+date.getDate()+"th, "+date.getFullYear()+" | ";
		}
	}

}());
