/**
 * @ngdoc controller
 * @name app.layouts.controller:Layouts
 * @description < description placeholder >
 */

(function(){

	'use strict';

	angular
		.module('app.layouts')
		.controller('LayoutsCtrl', LayoutsCtrl);

	/* @ngInject */
	function LayoutsCtrl($rootScope, $location,  $anchorScroll){
		var vm = this;
		vm.scrollTo = function(id) {
			$location.hash(id);
			$anchorScroll();
		};

		function lazyLoadImages(){
			ImageLazyLoad.loadBackgroundImage('hero-div');
			ImageLazyLoad.loadBackgroundImage('banner');
			ImageLazyLoad.loadImage('lazy');
		}

		function init(){
			lazyLoadImages();
		}
		// fire custom test event
        eventChannel.fire('test');
        // fire angular test event
        $rootScope.$broadcast('test');
		init();
	}

}());
