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
	function LayoutsCtrl($rootScope){
		var vm = this;

        // fire custom test event
        eventChannel.fire('test');
        // fire angular test event
        $rootScope.$broadcast('test');

	}

}());
