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
	function LayoutsCtrl($rootScope, $location, $scope, $anchorScroll){
		var vm = this;
		vm.scrollTo = function(id) {
			$location.hash(id);
			$anchorScroll();
		};
		// fire custom test event
        eventChannel.fire('test');
        // fire angular test event
        $rootScope.$broadcast('test');

	}

}());
