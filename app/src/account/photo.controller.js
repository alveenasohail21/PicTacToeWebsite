/**
 * @ngdoc controller
 * @name app.account.controller:Photo
 * @description < description placeholder >
 */

(function(){

  'use strict';

	angular
		.module('app.account')
		.controller('PhotoCtrl', PhotoCtrl);

  /* @ngInject */
	function PhotoCtrl(albumsFactory){
		var vm = this;
    vm.photos= albumsFactory.photos;
	}

}());
