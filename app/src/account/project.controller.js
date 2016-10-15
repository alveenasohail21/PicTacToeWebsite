/**
 * @ngdoc controller
 * @name app.account.controller:Project
 * @description < description placeholder >
 */

(function(){

  'use strict';

	angular
		.module('app.account')
		.controller('ProjectCtrl', ProjectCtrl);

  /* @ngInject */
	function ProjectCtrl(projects, projectsFactory){
		var vm = this;
    vm.projects=projectsFactory.projects;

    /////////////////////


	}

}());
